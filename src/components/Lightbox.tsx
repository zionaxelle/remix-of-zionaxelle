import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  description: string;
  layout?: 'vertical-2' | 'horizontal-2' | 'horizontal-3' | 'rect-square' | 'video';
  initialImageIndex?: number;
  onClose: () => void;
}

const Lightbox = ({ isOpen, images, description, layout, initialImageIndex = 0, onClose }: LightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (isZoomed) {
    // Lock scrolling
    document.body.style.overflow = 'hidden';
  } else {
    // Restore scrolling
    document.body.style.overflow = '';
  }

  // Cleanup in case component unmounts
  return () => {
    document.body.style.overflow = '';
  };
}, [isZoomed]);


  const handleImageClick = (index?: number) => {
  if (index !== undefined) setCurrentImageIndex(index);

  if (!isZoomed && imageContainerRef.current) {
    const container = imageContainerRef.current;
    // Set mousePosition to center (0 translation initially)
    setMousePosition({ x: 0, y: 0 });
  }

  setIsZoomed(!isZoomed);
};


const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!isZoomed || !imageContainerRef.current) return;

  const container = imageContainerRef.current;
  const img = container.querySelector('img') as HTMLImageElement;
  if (!img) return;

  const rect = container.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width; // 0 → 1
  const y = (e.clientY - rect.top) / rect.height; // 0 → 1

  // Calculate extra space due to zoom
  const zoomScale = 1.5; // Same as your zoom
  const extraX = (img.clientWidth * zoomScale - rect.width) / 2;
  const extraY = (img.clientHeight * zoomScale - rect.height) / 2;

  // Transform proportionally but bounded
  const transformX = Math.max(-extraX, Math.min(extraX, (0.5 - x) * 2 * extraX));
  const transformY = Math.max(-extraY, Math.min(extraY, (0.5 - y) * 2 * extraY));

  setMousePosition({ x: transformX, y: transformY });
};



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-6">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div 
        className="flex items-center justify-center w-full h-full max-w-7xl mx-auto overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          ref={imageContainerRef}
          className="flex flex-col w-full gap-4 items-center justify-center overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Zoomed Single Image */}
          {isZoomed ? (
            <img
  src={images[currentImageIndex]}
  alt={description.split('\n')[0]}
  className="object-contain max-h-[100vh] max-w-full cursor-zoom-out transition-transform duration-100 "
  style={{ transform: `scale(1.5) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
  onClick={() => handleImageClick()}
  draggable={false}
/>

          ) : (
            <>
              {/* Video Layout */}
              {layout === 'video' ? (
                <video
                  src={images[currentImageIndex]}
                  controls
                  autoPlay
                  className="max-h-[80vh] max-w-full object-contain"
                />
              ) : (
                // Multi-image layouts (all images visible)
                <div
                  className={`w-full flex ${
                    layout?.startsWith('horizontal') ? 'flex-row' : 'flex-col'
                  } flex-wrap gap-4 justify-center items-center`}
                >
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${description.split('\n')[0]} - ${idx + 1}`}
                      className="object-contain max-h-full max-w-[90%] cursor-zoom-in transition-opacity hover:opacity-100"
                      onClick={() => handleImageClick(idx)}
                      draggable={false}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Description */}
        <div className="absolute bottom-16 right-16 w-32 text-[0.73rem] text-black">
          <p className="whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
