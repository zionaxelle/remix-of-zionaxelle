import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: string;
  description: string;
  onClose: () => void;
}

const Lightbox = ({ isOpen, image, description, onClose }: LightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Reset zoom when image changes
  useEffect(() => {
    if (isOpen) setIsZoomed(false);
  }, [isOpen, image]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleImageClick = () => setIsZoomed(!isZoomed);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const rect = container.getBoundingClientRect();

    // Mouse position relative to container (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Move zoomed image in opposite direction so you can pan naturally
    const moveRange = 50; // max translation in px
    const transformX = (0.5 - x) * moveRange * 2; // multiply by 2 for more movement
    const transformY = (0.5 - y) * moveRange * 2;

    setMousePosition({ x: transformX, y: transformY });
  };

  if (!isOpen) return null;

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

      {/* Content Container */}
      <div 
        className="flex items-center justify-center w-full h-full max-w-7xl mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div 
          ref={imageContainerRef}
          className="flex-1 flex items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          <img
            src={image}
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
