
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import homeArtwork1 from '@/assets/home-artwork-1.jpg';
import homeArtwork2 from '@/assets/home-artwork-2.jpg';
import homeArtwork3 from '@/assets/home-artwork-3.jpg';
import homeArtwork4 from '@/assets/home-artwork-4.jpg';
import homeArtwork5 from '@/assets/home-artwork-5.jpg';

const artworks = [
  {
    id: 1,
    image: homeArtwork1,
    title: 'Artwork 1',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: '',
    isDark: false
  },
  {
    id: 2,
    image: homeArtwork2,
    title: 'Artwork 2',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: '',
    isDark: true
  },
  {
    id: 3,
    image: homeArtwork3,
    title: 'Artwork 3',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: '',
    isDark: false
  },
  {
    id: 4,
    image: homeArtwork4,
    title: 'Artwork 4',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: '',
    isDark: true
  },
  {
    id: 5,
    image: homeArtwork5,
    title: 'Artwork 5',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: '',
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
