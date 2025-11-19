import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Slideshow from '@/components/Slideshow';

const Index = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <Navigation isDarkBackground={isDarkBackground} />
      <Slideshow onBackgroundChange={setIsDarkBackground} />
    </div>
  );
};

export default Index;
