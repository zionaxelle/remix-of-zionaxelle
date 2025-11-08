import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';

// Import artworks
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3a from '@/assets/artwork-3a.jpg';
import artwork3b from '@/assets/artwork-3b.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.mp4';
import artwork7 from '@/assets/artwork-7.jpg';
import artwork8 from '@/assets/artwork-8.jpg';
import artwork9 from '@/assets/artwork-9.jpg';
import artwork10 from '@/assets/artwork-10.jpg';
import artwork11 from '@/assets/artwork-11.jpg';
import artwork12 from '@/assets/artwork-12.jpg';
import artwork13a from '@/assets/artwork-13a.jpg';
import artwork13b from '@/assets/artwork-13b.jpg';
import artwork13c from '@/assets/artwork-13c.jpg';
import artwork14 from '@/assets/artwork-14.jpg';
import artwork15 from '@/assets/artwork-15.jpg';
import artwork16 from '@/assets/artwork-16.jpg';
import artwork17 from '@/assets/artwork-17.jpg';
import artwork18 from '@/assets/artwork-18.jpg';
import artwork19a from '@/assets/artwork-19a.jpg';
import artwork19b from '@/assets/artwork-19b.jpg';
import artwork20 from '@/assets/artwork-20.jpg';
import artwork21a from '@/assets/artwork-21a.jpg';
import artwork21b from '@/assets/artwork-21b.jpg';
import artwork22 from '@/assets/artwork-22.jpg';
import artwork23a from '@/assets/artwork-23a.jpg';
import artwork23b from '@/assets/artwork-23b.jpg';
import artwork24 from '@/assets/artwork-24.jpg';
import artwork25 from '@/assets/artwork-25.jpg';
import artwork26a from '@/assets/artwork-26a.jpg';
import artwork26b from '@/assets/artwork-26b.jpg';
import artwork27 from '@/assets/artwork-27.jpg';
import artwork28 from '@/assets/artwork-28.jpg';
import artwork29 from '@/assets/artwork-29.jpg';
import artwork30 from '@/assets/artwork-30.jpg';

interface Artwork {
  id: number;
  images: string[];
  description: string;
  layout?: 'vertical-2' | 'horizontal-2' | 'horizontal-3' | 'rect-square' | 'video';
}

const createArtworkCollection = (): Artwork[] => {
  const artworks: Omit<Artwork, 'id'>[] = [
    { images: [artwork1], description: "Self-portrait #3\n2023\nAcrylic on canvas\n9.5 x 8 in each" },
    { images: [artwork5], description: "Objectifying Women, Objectifying Bodies, Objectifying Things\n2022\nOil pastel on paper\n24 x 20 in" },
    { images: [artwork9], description: "Ilocano Balse\n2024\nOil on canvas\n48 x 36 in" },
    { images: [artwork13a, artwork13b, artwork13c], description: "Morning Ritual\n2024\n10 min", layout: 'horizontal-3' },
    { images: [artwork17], description: "Pakikipagkapwa\n2025\nMetal relief\n30 x 41 in" },
    { images: [artwork21a, artwork21b], description: "Mamang's Jueteng Book\n2025\nWood sculpture\n9.5 x 14 x 5 in", layout: 'horizontal-2' },
    { images: [artwork25], description: "Where the Secrets are Kept\n2024\nOil on canvas\n36 x 48 in" },
    { images: [artwork29], description: "Self-Portrait #4\n2023\nMixed media on paper\n19 x 13 in" },
    { images: [artwork2], description: "Bodies Transcending\n2022\nAcrylic on canvas\n48 x 36 in" },
    { images: [artwork6], description: "Mayari: Diyosa ng Buwan\n2023\nDigital GIF", layout: 'video' },
    { images: [artwork10], description: "Loving Mother and Daughter\n2024\nPencil, ink and thread on paper\n32 x 43.5 in" },
    { images: [artwork14], description: "Ang Bigat ng Dibdib ko\n2025\nOil on canvas\n48 x 48 in" },
    { images: [artwork18], description: "Haze in motion\n2025\nOil on canvas\n30 x 24 in" },
    { images: [artwork22], description: "Untitled\n2025\nChalk pastel on paper\n39 x 28 in" },
    { images: [artwork26a, artwork26b], description: "To Bare Oneself\n2024\nOil on canvas\n39 x 30 in", layout: 'rect-square' },
    { images: [artwork30], description: "The Oldest Flower to Live in My Room\n2023\nOil on canvas\n36 x 24 in" },
    { images: [artwork3a, artwork3b], description: "Self-portrait #2\n2021\nAcrylic on canvas\n40 x 32 in", layout: 'vertical-2' },
    { images: [artwork7], description: "The Perfect Face\n2023\nOil pastel on paper\n30 x 12 in" },
    { images: [artwork11], description: "Sex Overload\n2022\nPlaster and metal coated in spray paint\n25 x 24 x 27 in" },
    { images: [artwork15], description: "The Ongoing Tradition of Misrepresentation\n2022\nColor pencil on paper\n16 x 20 in" },
    { images: [artwork19a, artwork19b], description: "Deconstructing Femininity\n2023\nMetal sculpture\n17 x 17 x 17 in", layout: 'horizontal-2' },
    { images: [artwork23a, artwork23b], description: "When Softness Binds, a Shared Surrender\n2025\nSculpture\n18 x 12 x 10 in", layout: 'horizontal-2' },
    { images: [artwork27], description: "Innocent Giddiness\n2024\nOil on canvas\n36 x 48 in" },
    { images: [artwork4], description: "Self-portrait #5\n2024\nOil on canvas\n30 x 20 in" },
    { images: [artwork8], description: "metamorphosis, metamorphosis, metamorphosis and metamorphosis\n2024\nMixed media on paper\n28 x 20 in" },
    { images: [artwork12], description: "The Sacrament of Woman's Orgasm\n2024\nOil on canvas\n47 x 35 in" },
    { images: [artwork16], description: "Plant Study III\n2023\nChalk pastel\n14 x 11 in" },
    { images: [artwork20], description: "Mula sa Dagat Hanggang sa Ilog, ang Palestina ay Lalaya\n2025\nChalk pastel on paper\n80 x 59 in" },
    { images: [artwork24], description: "The Revolution Cannot be Contained\n2025\nMixed media on canvas\n55 x 38 in" },
    { images: [artwork28], description: "\"Raise Your Flag\"\n2022\nScreen print on paper\n9 x 7.5 in" }
  ];

  return artworks.map((artwork, index) => ({ id: index + 1, ...artwork }));
};

const Works = () => {
  const [artworks] = useState<Artwork[]>(createArtworkCollection());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hoveredArtwork, setHoveredArtwork] = useState<number | null>(null);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openLightbox = (artwork: Artwork, imageIndex: number = 0) => {
    setSelectedArtwork(artwork);
    setInitialImageIndex(imageIndex);
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
        <div className="w-full px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="masonry-item rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-all duration-300 relative"
                onClick={() => openLightbox(artwork)}
                onMouseEnter={() => setHoveredArtwork(artwork.id)}
                onMouseLeave={() => setHoveredArtwork(null)}
              >
                {/* Video block - hide controls in grid */}
                {artwork.layout === 'video' && (
                  <video
                    src={artwork.images[0]}
                    className="w-full object-cover aspect-video"
                    muted
                    loop
                    preload="metadata"
                  />
                )}

                {/* Single image */}
                {!artwork.layout && (
                  <img
                    src={artwork.images[0]}
                    alt={artwork.description.split('\n')[0]}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                )}

                {/* Vertical 2 images */}
                {artwork.layout === 'vertical-2' && (
                  <div className="flex flex-col gap-2">
                    {artwork.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className="w-full object-cover rounded"
                        loading="lazy"
                        onClick={(e) => { e.stopPropagation(); openLightbox(artwork, idx); }}
                      />
                    ))}
                  </div>
                )}

                {/* Horizontal 2 images */}
                {artwork.layout === 'horizontal-2' && (
                  <div className="flex gap-2">
                    {artwork.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className="flex-1 object-cover rounded"
                        loading="lazy"
                        onClick={(e) => { e.stopPropagation(); openLightbox(artwork, idx); }}
                      />
                    ))}
                  </div>
                )}

                {/* Horizontal 3 images */}
                {artwork.layout === 'horizontal-3' && (
                  <div className="flex gap-2">
                    {artwork.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className="flex-1 object-cover rounded"
                        loading="lazy"
                        onClick={(e) => { e.stopPropagation(); openLightbox(artwork, idx); }}
                      />
                    ))}
                  </div>
                )}

                {/* Rect-square layout */}
                {artwork.layout === 'rect-square' && (
                  <div className="flex flex-col gap-2">
                    <img
                      src={artwork.images[0]}
                      alt=""
                      className="w-full h-3/5 object-cover rounded"
                      loading="lazy"
                      onClick={(e) => { e.stopPropagation(); openLightbox(artwork, 0); }}
                    />
                    <img
                      src={artwork.images[1]}
                      alt=""
                      className="w-full h-2/5 object-cover rounded"
                      loading="lazy"
                      onClick={(e) => { e.stopPropagation(); openLightbox(artwork, 1); }}
                    />
                  </div>
                )}

                {/* Info overlay on hover */}
                {hoveredArtwork === artwork.id && (
                  <div className="absolute inset-0 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white bg-black/40">
                      <p className="text-sm opacity-90 whitespace-pre-line">
                        {artwork.description.split('\n').slice(0, 2).join('\n')}
                      </p>
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
            href="www.geetikagehlot.com" 
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
          images={selectedArtwork.images}
          description={selectedArtwork.description}
          layout={selectedArtwork.layout}
          initialImageIndex={initialImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Works;
