import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

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
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position when image changes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, image]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          e.preventDefault();
          handleZoomIn();
          break;
        case '-':
          e.preventDefault();
          handleZoomOut();
          break;
        case '0':
          e.preventDefault();
          resetZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.2, 5));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.2, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="zoom-container" onClick={onClose}>
      {/* Controls */}
      <div className="absolute top-6 right-6 z-60 flex space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resetZoom();
          }}
          className="p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-colors"
          aria-label="Reset zoom"
        >
          <RotateCw size={20} />
        </button>
        <button
          onClick={onClose}
          className="p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
            zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in'
          } ${isDragging ? 'cursor-grabbing' : ''}`}
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={zoom === 1 ? handleZoomIn : undefined}
          draggable={false}
        />
      </div>

      {/* Artwork Details */}
      <div className="absolute bottom-6 right-6 text-right text-white bg-black bg-opacity-50 p-4 rounded backdrop-blur-sm">
        <h2 className="text-xl font-medium mb-1">{title}</h2>
        <p className="text-sm opacity-90">{details.year}</p>
        <p className="text-sm opacity-90">{details.medium}</p>
        <p className="text-xs opacity-75">{details.dimensions}</p>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 text-white text-sm opacity-70">
        <p>Click to zoom • Drag to pan • ESC to close</p>
        <p>Use +/- keys to zoom • Press 0 to reset</p>
      </div>
    </div>
  );
};

export default Lightbox;