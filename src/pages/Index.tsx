import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Slideshow from '@/components/Slideshow';
import homeartwork1 from '@/assets/homeartwork-1.jpg';
import homeartwork2 from '@/assets/homeartwork-2.jpg';
import homeartwork3 from '@/assets/homeartwork-3.jpg';

const Index = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  // Preload first 3 slideshow images for instant display
  useEffect(() => {
    const preloadImages = [homeartwork1, homeartwork2, homeartwork3];
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Navigation isDarkBackground={isDarkBackground} />
      <Slideshow onBackgroundChange={setIsDarkBackground} />
    </div>
  );
};

export default Index;
