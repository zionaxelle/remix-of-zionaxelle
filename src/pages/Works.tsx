
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';

// Import all 30 artworks
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';
import artwork7 from '@/assets/artwork-7.jpg';
import artwork8 from '@/assets/artwork-8.jpg';
import artwork9 from '@/assets/artwork-9.jpg';
import artwork10 from '@/assets/artwork-10.jpg';
import artwork11 from '@/assets/artwork-11.jpg';
import artwork12 from '@/assets/artwork-12.jpg';
import artwork13 from '@/assets/artwork-13.jpg';
import artwork14 from '@/assets/artwork-14.jpg';
import artwork15 from '@/assets/artwork-15.jpg';
import artwork16 from '@/assets/artwork-16.jpg';
import artwork17 from '@/assets/artwork-17.jpg';
import artwork18 from '@/assets/artwork-18.jpg';
import artwork19 from '@/assets/artwork-19.jpg';
import artwork20 from '@/assets/artwork-20.jpg';
import artwork21 from '@/assets/artwork-21.jpg';
import artwork22 from '@/assets/artwork-22.jpg';
import artwork23 from '@/assets/artwork-23.jpg';
import artwork24 from '@/assets/artwork-24.jpg';
import artwork25 from '@/assets/artwork-25.jpg';
import artwork26 from '@/assets/artwork-26.jpg';
import artwork27 from '@/assets/artwork-27.jpg';
import artwork28 from '@/assets/artwork-28.jpg';
import artwork29 from '@/assets/artwork-29.jpg';
import artwork30 from '@/assets/artwork-30.jpg';

interface Artwork {
  id: number;
  image: string;
  description: string;
  height: number;
}

const createArtworkCollection = (): Artwork[] => {
  const artworks = [
    { image: artwork1, description: "Self-portrait #3\n2023\nAcrylic on canvas\n9.5 x 8 in each", height: 400 },
    { image: artwork2, description: "Objectifying Women, Objectifying Bodies, Objectifying Things\n2022\nOil pastel on paper\n24 x 20 in", height: 350 },
    { image: artwork3, description: "Ilocano Balse\n2024\nOil on canvas\n48 x 36 in", height: 450 },
    { image: artwork4, description: "Morning Ritual\n2024\n10 min", height: 300 },
    { image: artwork5, description: "Pakikipagkapwa\n2025\nMetal relief\n30 x 41 in", height: 380 },
    { image: artwork6, description: "Mamang's Jueteng Book\n2025\nWood sculpture\n9.5 x 14 x 5 in", height: 420 },
    { image: artwork7, description: "Where the Secrets are Kept\n2024\nOil on canvas\n36 x 48 in", height: 500 },
    { image: artwork8, description: "Self-Portrait #4\n2023\nMixed media on paper\n19 x 13 in", height: 360 },
    { image: artwork9, description: "Bodies Transcending\n2022\nAcrylic on canvas\n48 x 36 in", height: 480 },
    { image: artwork10, description: "Mayari: Diyosa ng Buwan\n2023\nDigital GIF", height: 320 },
    { image: artwork11, description: "Loving Mother and Daughter\n2024\nPencil, ink and thread on paper\n32 x 43.5 in", height: 440 },
    { image: artwork12, description: "Ang Bigat ng Dibdib ko\n2025\nOil on canvas\n48 x 48 in", height: 460 },
    { image: artwork13, description: "Haze in motion\n2025\nOil on canvas\n30 x 24 in", height: 390 },
    { image: artwork14, description: "Untitled\n2025\nChalk pastel on paper\n39 x 28 in", height: 410 },
    { image: artwork15, description: "To Bare Oneself\n2024\nOil on canvas\n39 x 30 in", height: 370 },
    { image: artwork16, description: "The Oldest Flower to Live in My Room\n2023\nOil on canvas\n36 x 24 in", height: 350 },
    { image: artwork17, description: "Self-portrait #2\n2021\nAcrylic on canvas\n40 x 32 in", height: 400 },
    { image: artwork18, description: "The Perfect Face\n2023\nOil pastel on paper\n30 x 12 in", height: 520 },
    { image: artwork19, description: "Sex Overload\n2022\nPlaster and metal coated in spray paint\n25 x 24 x 27 in", height: 330 },
    { image: artwork20, description: "The Ongoing Tradition of Misrepresentation\n2022\nColor pencil on paper\n16 x 20 in", height: 380 },
    { image: artwork21, description: "Deconstructing Femininity\n2023\nMetal sculpture\n17 x 17 x 17 in", height: 340 },
    { image: artwork22, description: "When Softness Binds, a Shared Surrender\n2025\nSculpture\n18 x 12 x 10 in", height: 450 },
    { image: artwork23, description: "Innocent Giddiness\n2024\nOil on canvas\n36 x 48 in", height: 490 },
    { image: artwork24, description: "Self-portrait #5\n2024\nOil on canvas\n30 x 20 in", height: 360 },
    { image: artwork25, description: "metamorphosis, metamorphosis, metamorphosis and metamorphosis\n2024\nMixed media on paper\n28 x 20 in", height: 420 },
    { image: artwork26, description: "The Sacrament of Woman's Orgasm\n2024\nOil on canvas\n47 x 35 in", height: 470 },
    { image: artwork27, description: "Plant Study III\n2023\nChalk pastel\n14 x 11 in", height: 300 },
    { image: artwork28, description: "Mula sa Dagat Hanggang sa Ilog, ang Palestina ay Lalaya\n2025\nChalk pastel on paper\n80 x 59 in", height: 540 },
    { image: artwork29, description: "The Revolution Cannot be Contained\n2025\nMixed media on canvas\n55 x 38 in", height: 480 },
    { image: artwork30, description: "\"Raise Your Flag\"\n2022\nScreen print on paper\n9 x 7.5 in", height: 320 }
  ];

  return artworks.map((artwork, index) => ({
    id: index + 1,
    ...artwork
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
                      <p className="text-sm opacity-90 whitespace-pre-line">{artwork.description.split('\n').slice(0, 2).join('\n')}</p>
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
