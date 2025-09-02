
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';

// Import the 6 main artworks
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';

interface Artwork {
  id: number;
  image: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  height: number;
}

const createArtworkCollection = (): Artwork[] => {
  const baseArtworks = [
    { image: artwork1, title: 'Crimson Expression', year: '2024', medium: 'Acrylic on Canvas', dimensions: '120 x 90 cm' },
    { image: artwork2, title: 'Ocean Dreams', year: '2024', medium: 'Oil on Canvas', dimensions: '150 x 100 cm' },
    { image: artwork3, title: 'Minimalist Harmony', year: '2023', medium: 'Mixed Media', dimensions: '100 x 100 cm' },
    { image: artwork4, title: 'Midnight Thoughts', year: '2024', medium: 'Acrylic on Canvas', dimensions: '140 x 110 cm' },
    { image: artwork5, title: 'Solar Burst', year: '2023', medium: 'Oil on Canvas', dimensions: '130 x 95 cm' },
  ];

  const artworkTitles = [
    'Abstract Emotions', 'Color Study #3', 'Geometric Harmony', 'Fluid Dynamics', 'Urban Reflections',
    'Natural Forms', 'Light and Shadow', 'Textural Experiment', 'Bold Strokes', 'Subtle Variations',
    'Compositional Study', 'Chromatic Tension', 'Organic Flow', 'Structured Chaos', 'Minimal Expression',
    'Dynamic Balance', 'Atmospheric Mood', 'Gestural Mark', 'Layered Meaning', 'Pure Abstraction',
    'Emotional Landscape', 'Visual Poetry', 'Artistic Vision', 'Creative Process', 'Expressive Freedom',
    'Contemporary Voice', 'Personal Journey', 'Artistic Exploration', 'Modern Statement', 'Creative Energy',
    'Innovative Approach', 'Artistic Truth', 'Visual Narrative', 'Emotional Depth', 'Creative Expression',
    'Artistic Discovery', 'Visual Language', 'Contemporary Art', 'Modern Expression', 'Creative Process',
    'Artistic Innovation', 'Visual Communication', 'Contemporary Vision', 'Modern Perspective'
  ];

  const mediums = [
    'Acrylic on Canvas', 'Oil on Canvas', 'Mixed Media', 'Watercolor on Paper',
    'Charcoal on Paper', 'Pastel on Canvas', 'Digital Print', 'Ink on Paper'
  ];

  const years = ['2024', '2023', '2022', '2021'];
  const heights = [200, 250, 300, 350, 400, 450, 500];

  return Array.from({ length: 50 }, (_, index) => {
    const baseArtwork = baseArtworks[index % baseArtworks.length];
    return {
      id: index + 1,
      image: baseArtwork.image,
      title: index < artworkTitles.length ? artworkTitles[index] : `Untitled ${index + 1}`,
      year: years[Math.floor(Math.random() * years.length)],
      medium: mediums[Math.floor(Math.random() * mediums.length)],
      dimensions: `${80 + Math.floor(Math.random() * 100)} x ${60 + Math.floor(Math.random() * 80)} cm`,
      height: heights[Math.floor(Math.random() * heights.length)]
    };
  });
};

const Works = () => {
  const [artworks] = useState<Artwork[]>(createArtworkCollection());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation isDarkBackground={false} />
      
      <main className="pt-20">
        {/* Full Screen Masonry Grid */}
        <div className="w-full px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="masonry-item rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
                onClick={() => openLightbox(artwork)}
                style={{ height: `${artwork.height}px` }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm opacity-90">{artwork.title}</p>
                    <p className="text-xs opacity-90">{artwork.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          Website Developed by{' '}
          <a 
            href="mailto:geetikagehlot2009@gmail.com" 
            className="hover:text-artist-red transition-colors underline"
          >
            Geetika Gehlot
          </a>
        </p>
      </footer>

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          isOpen={isLightboxOpen}
          image={selectedArtwork.image}
          title={selectedArtwork.title}
          details={{
            year: selectedArtwork.year,
            medium: selectedArtwork.medium,
            dimensions: selectedArtwork.dimensions
          }}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Works;
