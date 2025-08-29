
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';

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
    isDark: true
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

      {/* Single Right Arrow Navigation */}
      <button
        onClick={nextSlide}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-black hover:bg-gray-800 transition-colors flex items-center justify-center"
        aria-label="Next artwork"
      >
        <ChevronRight size={32} className="text-white" />
      </button>

    </div>
  );
};

export default Slideshow;
