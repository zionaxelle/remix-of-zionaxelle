import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  description: string;
  onClose: () => void;
}

const Lightbox = ({ isOpen, images, description, onClose }: LightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Reset zoom and index when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setIsZoomed(false);
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        handlePrevImage();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, currentImageIndex, images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageContainerRef.current) return;
    
    const container = imageContainerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to container (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Convert to transform values (-50% to 50% for 1.5x zoom)
    // Increased sensitivity (move more with smaller cursor movement)
    const transformX = (x - 0.5) * -100; // doubled from -50 → -100
    const transformY = (y - 0.5) * -100;
    
    setMousePosition({ x: transformX, y: transformY });
  };

  if (!isOpen) return null;

  const currentImage = images[currentImageIndex];

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-8" onClick={onClose}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-60 p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Navigation Arrows - only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-60 p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-60 p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Content Container */}
      <div 
        className="flex items-center justify-center w-full h-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div 
          ref={imageContainerRef}
          className="flex-1 flex items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          <img
            src={currentImage}
            alt={description.split('\n')[0]}
            className={`max-w-full max-h-[80vh] object-contain cursor-pointer transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={isZoomed ? {
              transform: `scale(1.5) translate(${mousePosition.x}px, ${mousePosition.y}px)`
            } : undefined}
            onClick={handleImageClick}
            draggable={false}
          />
        </div>

        {/* Image Counter - only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-8 text-sm text-black">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Artwork Details - Bottom Right */}
        <div className="absolute bottom-8 right-8 w-28 text-[0.73rem] text-black">
          <div className="space-y-1 text-r">
            <p className="text-muted-foreground whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
