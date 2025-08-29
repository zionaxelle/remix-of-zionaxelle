
import Navigation from '@/components/Navigation';

const Bio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation isDarkBackground={false} />
      
      <main className="pt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Artist Portrait - Left Side */}
            <div className="relative">
              <div className="aspect-[3/5] bg-muted rounded-lg overflow-hidden sticky top-20">
                <div className="w-full h-full bg-gradient-to-b from-artist-red via-muted to-background flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-bebas text-4xl tracking-wider mb-2">ZION</p>
                    <p className="text-white font-bebas text-4xl tracking-wider">AXELLE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-12">
              {/* Artist Name */}
              <div>
                <h1 className="text-5xl font-bebas tracking-wider mb-2">
                  <span className="text-artist-red">ZION</span> <span className="text-foreground">AXELLE</span>
                </h1>
                <p className="text-muted-foreground text-lg">Filipina Multidisciplinary Artist</p>
              </div>

              {/* Artist Statement */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-4">ARTIST STATEMENT</h2>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "My work is an exploration of the unspoken emotions that color our daily experiences. 
                  Through abstract forms and bold color choices, I seek to create visual poetry that 
                  resonates with the viewer's own emotional landscape. Each painting is a conversation 
                  between the conscious and the subconscious, the known and the felt."
                </blockquote>
              </div>

              {/* Biography */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-4">BIOGRAPHY</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Zion Axelle is an Ilocana multidisciplinary artist based in Tiojtià:ke (Montréal). She mainly works in mediums of painting, drawing, sculpture and performance. Her creations have been exhibited at Future art*fair, Warren G. Flowers Gallery, and VAV Gallery.
                  </p>
                  <p>
                    As a first-generation immigrant, Axelle's background significantly influences her artistic practice. Her work explores themes of identity, feminism, and the Filipino diaspora. Through color and patterns, she strives to create a space for dialogue and reflection on these critical issues. For Axelle, art is her way of understanding who she is and how she feels, and in this way, it does not lie: it's honest, vulnerable, and proud.
                  </p>
                </div>
              </div>

              {/* CV - Education */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-4">EDUCATION</h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">2016 - MFA in Fine Arts</p>
                    <p className="text-sm">Yale School of Art, New Haven, CT</p>
                  </div>
                  <div>
                    <p className="font-medium">2014 - BFA in Painting</p>
                    <p className="text-sm">Rhode Island School of Design, Providence, RI</p>
                  </div>
                </div>
              </div>

              {/* Selected Works */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-4">SELECTED WORKS</h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground">Solo Exhibitions</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>2024 - "Emotional Landscapes" - Gallery Modern, New York</p>
                      <p>2023 - "Abstract Narratives" - Contemporary Space, Los Angeles</p>
                      <p>2022 - "Color Studies" - Minimal Gallery, Chicago</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Group Exhibitions</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>2024 - "Emerging Voices" - Whitney Biennial, New York</p>
                      <p>2023 - "Contemporary Abstractions" - MoMA PS1, New York</p>
                      <p>2023 - "New American Painters" - Saatchi Gallery, London</p>
                      <p>2022 - "Rising Stars" - Guggenheim Museum, New York</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Collections</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>Museum of Modern Art, New York</p>
                      <p>Whitney Museum of American Art, New York</p>
                      <p>Los Angeles County Museum of Art</p>
                      <p>Private collections worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Bio;
