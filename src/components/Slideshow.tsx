
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import homeartwork1 from '@/assets/homeartwork-1.jpg';
import homeartwork2 from '@/assets/homeartwork-2.jpg';
import homeartwork3 from '@/assets/homeartwork-3.jpg';
import homeartwork4 from '@/assets/mayari-diyosa-ng-buwan.mp4';
import homeartwork5 from '@/assets/homeartwork-5.jpg';

const artworks = [
  {
    id: 1,
    image: homeartwork1,
    title: 'The Revolution Cannot be Contained',
    isDark: true
  },
  {
    id: 2,
    image: homeartwork2,
    title: 'Objectifying Women, Objectifying Bodies, Objectifying Things',
    isDark: true
  },
  {
    id: 3,
    image: homeartwork3,
    title: 'Mula sa Dagat Hanggang sa Ilog, ang Palestina ay Lalaya',
    isDark: false
  },
  {
    id: 4,
    image: homeartwork4,
    title: 'Mayari: Diyosa ng Buwan',
    isDark: true
  },
  {
    id: 5,
    image: homeartwork5,
    title: 'Self Portrait #3',
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
    onBackgroundChange(artworks[currentIndex].isDark);
  }, [currentIndex, onBackgroundChange]);
  
// Move to next slide (loops forever)
const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  setIsTransitioning(true);
};

// Auto-advance 9s after last change
useEffect(() => {
  const timer = setTimeout(() => {
    nextSlide(); // triggers slide change
  }, 9000);

  return () => clearTimeout(timer); // resets timer on manual click
}, [currentIndex]); // resets whenever currentIndex changes

// Reset transition state after 1s
useEffect(() => {
  const transitionTimer = setTimeout(() => setIsTransitioning(false), 1000);
  return () => clearTimeout(transitionTimer);
}, [currentIndex]);



  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images/Videos */}
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className={`absolute inset-0 artwork-transition ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {artwork.image.endsWith('.mp4') ? (
            <video
              src={artwork.image}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          )}
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
