import { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onClick?: (e: React.MouseEvent) => void;
}

const ProgressiveImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onLoad,
  onClick 
}: ProgressiveImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Create a low-quality placeholder by loading the image and reducing quality
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
      onLoad?.();
    };

    return () => {
      img.onload = null;
    };
  }, [src, onLoad]);

  return (
    <div className="relative overflow-hidden bg-muted">
      {/* Skeleton loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted-foreground/10 to-muted" />
      )}
      
      {/* Actual image with blur-up effect */}
      <img
        src={imageSrc || src}
        alt={alt}
        className={`${className} transition-all duration-700 ${
          imageLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-105'
        }`}
        loading={loading}
        onClick={onClick}
        draggable={false}
      />
    </div>
  );
};

export default ProgressiveImage;
