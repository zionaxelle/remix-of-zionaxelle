
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: string;
  title: string;
  details: {
    year: string;
    medium: string;
    dimensions: string;
  };
  onClose: () => void;
}

const Lightbox = ({ isOpen, image, title, details, onClose }: LightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset zoom when image changes
  useEffect(() => {
    if (isOpen) {
      setIsZoomed(false);
    }
  }, [isOpen, image]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
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
        className="flex items-center justify-center w-full h-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Artwork Details - Left Side */}
        <div className="flex-shrink-0 w-80 pr-12 text-black">
          <h2 className="text-3xl font-bebas tracking-wide text-artist-red mb-6">{title}</h2>
          <div className="space-y-4 text-lg">
            <div>
              <span className="font-medium">Year:</span>
              <p className="text-muted-foreground">{details.year}</p>
            </div>
            <div>
              <span className="font-medium">Medium:</span>
              <p className="text-muted-foreground">{details.medium}</p>
            </div>
            <div>
              <span className="font-medium">Dimensions:</span>
              <p className="text-muted-foreground">{details.dimensions}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Click image to {isZoomed ? 'zoom out' : 'zoom in'}
          </p>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className={`max-w-full max-h-[80vh] object-contain cursor-pointer transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={handleImageClick}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
