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
    setMousePosition({ x: 0, y: 0 });


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
  const mouseX = (e.clientX - rect.left) / rect.width; // 0 → 1
  const mouseY = (e.clientY - rect.top) / rect.height; // 0 → 1

  const zoomScale = 1.5;

  const overflowX = (img.clientWidth * zoomScale - rect.width) / 2;
  const overflowY = (img.clientHeight * zoomScale - rect.height) / 2;

  // Invert both axes: mouse right → image left, mouse down → image up
  const translateX = -((mouseX - 0.5) * 2 * overflowX);
  const translateY = -((mouseY - 0.5) * 2 * overflowY);

  // Clamp to prevent moving out of bounds
  const clampedX = Math.max(-overflowX, Math.min(overflowX, translateX));
  const clampedY = Math.max(-overflowY, Math.min(overflowY, translateY));

  setMousePosition({ x: clampedX, y: clampedY });
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
        className="flex items-center justify-center w-full h-full max-w-7xl mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          ref={imageContainerRef}
          className="flex flex-col w-full gap-4 items-center justify-center overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Zoomed Single Image */}
          {isZoomed ? (
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={images[currentImageIndex]}
                alt={description.split('\n')[0]}
                className="object-contain max-h-[100vh] max-w-full cursor-zoom-out transition-transform duration-100"
                style={{ transform: `scale(1.5) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                onClick={() => handleImageClick()}
                draggable={false}
              />
            </div>
          ) : (
            <>
              {/* Video Layout */}
              {layout === 'video' ? (
                <video
                  src={images[currentImageIndex]}
                  controls
                  autoPlay
                  className="max-h-[calc(100vh-8rem)] max-w-full object-contain"
                />
              ) : (
                // Multi-image layouts (all images visible)
                <div
                  className={`flex ${
                    layout?.startsWith('horizontal') ? 'flex-row' : 'flex-col'
                  } gap-4 justify-center items-center max-h-[calc(100vh-8rem)]`}
                >
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${description.split('\n')[0]} - ${idx + 1}`}
                      className={`object-contain cursor-zoom-in transition-opacity hover:opacity-100 ${
                        layout === 'vertical-2' ? 'max-h-[calc(50vh-4rem)]' : 
                        layout === 'horizontal-2' ? 'max-h-[calc(100vh-8rem)] max-w-[calc(50vw-2rem)]' :
                        layout === 'horizontal-3' ? 'max-h-[calc(100vh-8rem)] max-w-[calc(33vw-2rem)]' :
                        layout === 'rect-square' && idx === 0 ? 'max-h-[calc(60vh-4rem)]' :
                        layout === 'rect-square' && idx === 1 ? 'max-h-[calc(40vh-4rem)]' :
                        'max-h-[calc(100vh-8rem)]'
                      }`}
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
