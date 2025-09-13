
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';

// Import the 6 main artworks
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';

interface Artwork {
  id: number;
  image: string;
  description: string;
  height: number;
}

const createArtworkCollection = (): Artwork[] => {
  const images = [artwork1, artwork2, artwork3, artwork4, artwork5, artwork6];
  const heights = [200, 250, 300, 350, 400, 450, 500];
  
  const artworkDescriptions = [
    "Self-portrait #3\n2023\nAcrylic on canvas\n9.5 x 8 in each",
    "Bodies Transcending\n2022\nAcrylic on canvas\n48 x 36 in",
    "Self-portrait #2\n2021\nAcrylic on canvas\n40 x 32 in",
    "Self-portrait #5\n2024\nOil on canvas\n30 x 20 in",
    "Objectifying Women, Objectifying Bodies, Objectifying Things\n2022\nOil pastel on paper\n24 x 20 in",
    "Mayari: Diyosa ng Buwan\n2023\nDigital GIF",
    "The Perfect Face\n2023\nOil pastel on paper\n30 x 12 in",
    "metamorphosis, metamorphosis, metamorphosis and metamorphosis\n2024\nMixed media on paper\n28 x 20 in",
    "Ilocano Balse\n2024\nOil on canvas\n48 x 36 in",
    "Loving Mother and Daughter\n2024\nPencil, ink and thread on paper\n32 x 43.5 in",
    "Sex Overload\n2022\nPlaster and metal coated in spray paint\n25 x 24 x 27 in",
    "The Sacrament of Woman's Orgasm\n2024\nOil on canvas\n47 x 35 in",
    "Morning Ritual\n2024\n10 min",
    "Ang Bigat ng Dibdib ko\n2025\nOil on canvas\n48 x 48 in",
    "The Ongoing Tradition of Misrepresentation\n2022\nColor pencil on paper\n16 x 20 in",
    "Plant Study III\n2023\nChalk pastel\n14 x 11 in",
    "Pakikipagkapwa\n2025\nMetal relief\n30 x 41 in",
    "Haze in motion\n2025\nOil on canvas\n30 x 24 in",
    "Deconstructing Femininity\n2023\nMetal sculpture\n17 x 17 x 17 in",
    "Mula sa Dagat Hanggang sa Ilog, ang Palestina ay Lalaya\n2025\nChalk pastel on paper\n80 x 59 in",
    "Mamang's Jueteng Book\n2025\nWood sculpture\n9.5 x 14 x 5 in",
    "Untitled\n2025\nChalk pastel on paper\n39 x 28 in",
    "When Softness Binds, a Shared Surrender\n2025\nSculpture\n18 x 12 x 10 in",
    "The Revolution Cannot be Contained\n2025\nMixed media on canvas\n55 x 38 in",
    "Where the Secrets are Kept\n2024\nOil on canvas\n36 x 48 in",
    "To Bare Oneself\n2024\nOil on canvas\n39 x 30 in",
    "Innocent Giddiness\n2024\nOil on canvas\n36 x 48 in",
    '"Raise Your Flag"\n2022\nScreen print on paper\n9 x 7.5 in',
    "Self-Portrait #4\n2023\nMixed media on paper\n19 x 13 in"
  ];

  return Array.from({ length: 29 }, (_, index) => ({
    id: index + 1,
    image: images[index % images.length],
    description: artworkDescriptions[index],
    height: heights[Math.floor(Math.random() * heights.length)]
  }));
};

const Works = () => {
  const [artworks] = useState<Artwork[]>(createArtworkCollection());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hoveredArtwork, setHoveredArtwork] = useState<number | null>(null);

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
                className="masonry-item rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-all duration-300 relative"
                onClick={() => openLightbox(artwork)}
                onMouseEnter={() => setHoveredArtwork(artwork.id)}
                onMouseLeave={() => setHoveredArtwork(null)}
                style={{ height: `${artwork.height}px` }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.description.split('\n')[0]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Info overlay - only show on hovered item */}
                {hoveredArtwork === artwork.id && (
                  <div className="absolute inset-0 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm opacity-90">{artwork.description.split('\n')[0]}</p>
                      <p className="text-xs opacity-90">{artwork.description.split('\n')[1]}</p>
                    </div>
                  </div>
                )}
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
          description={selectedArtwork.description}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Works;
