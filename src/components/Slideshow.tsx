import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';

const artworks = [
  {
    id: 1,
    image: artwork1,
    title: 'Crimson Expression',
    year: '2024',
    medium: 'Acrylic on Canvas',
    dimensions: '120 x 90 cm',
    isDark: false
  },
  {
    id: 2,
    image: artwork2,
    title: 'Ocean Dreams',
    year: '2024',
    medium: 'Oil on Canvas',
    dimensions: '150 x 100 cm',
    isDark: false
  },
  {
    id: 3,
    image: artwork3,
    title: 'Minimalist Harmony',
    year: '2023',
    medium: 'Mixed Media',
    dimensions: '100 x 100 cm',
    isDark: false
  },
  {
    id: 4,
    image: artwork4,
    title: 'Midnight Thoughts',
    year: '2024',
    medium: 'Acrylic on Canvas',
    dimensions: '140 x 110 cm',
    isDark: true
  },
  {
    id: 5,
    image: artwork5,
    title: 'Solar Burst',
    year: '2023',
    medium: 'Oil on Canvas',
    dimensions: '130 x 95 cm',
    isDark: false
  },
  {
    id: 6,
    image: artwork6,
    title: 'Tranquil Flow',
    year: '2024',
    medium: 'Watercolor on Paper',
    dimensions: '80 x 60 cm',
    isDark: false
  }
];

interface SlideshowProps {
  onBackgroundChange: (isDark: boolean) => void;
}

const Slideshow = ({ onBackgroundChange }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    onBackgroundChange(artworks[currentIndex].isDark);
  }, [currentIndex, onBackgroundChange]);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentArtwork = artworks[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className={`absolute inset-0 artwork-transition ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-5" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all group"
        aria-label="Previous artwork"
      >
        <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all group"
        aria-label="Next artwork"
      >
        <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Artwork Info - Hidden on mobile for clean look */}
      <div className="absolute bottom-6 right-6 z-30 text-right text-white hidden md:block">
        <h2 className="text-xl font-medium">{currentArtwork.title}</h2>
        <p className="text-sm opacity-90">{currentArtwork.year} • {currentArtwork.medium}</p>
        <p className="text-xs opacity-75">{currentArtwork.dimensions}</p>
      </div>
    </div>
  );
};

export default Slideshow;