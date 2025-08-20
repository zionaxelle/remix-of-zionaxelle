import Navigation from '@/components/Navigation';

const Bio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation isDarkBackground={false} />
      
      <main className="pt-20 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bebas tracking-wider mb-4">
              <span className="text-artist-red">BIO</span><span className="text-foreground">GRAPHY</span>
            </h1>
          </div>

          {/* Bio Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-4">ABOUT THE ARTIST</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Zion Axelle is a contemporary artist whose work explores the intersection of emotion, 
                  color, and form. Born in 1990, she has been creating art that challenges conventional 
                  boundaries and invites viewers into a world of abstract expression.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Her artistic journey began with traditional painting techniques, but has evolved to 
                  incorporate mixed media, digital elements, and experimental approaches to canvas work. 
                  Each piece reflects a deep understanding of color theory and compositional balance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Working primarily with acrylics, oils, and mixed media, Zion creates layered 
                  compositions that speak to the complexity of human emotion and the beauty found 
                  in abstract forms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bebas tracking-wide text-foreground mb-3">EDUCATION</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>MFA in Fine Arts, Yale School of Art (2016)</p>
                  <p>BFA in Painting, Rhode Island School of Design (2014)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bebas tracking-wide text-foreground mb-3">EXHIBITIONS</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">Solo Exhibitions</p>
                    <p className="text-sm">2024 - "Emotional Landscapes" - Gallery Modern, New York</p>
                    <p className="text-sm">2023 - "Abstract Narratives" - Contemporary Space, Los Angeles</p>
                  </div>
                  <div>
                    <p className="font-medium">Group Exhibitions</p>
                    <p className="text-sm">2024 - "Emerging Voices" - Whitney Biennial</p>
                    <p className="text-sm">2023 - "Contemporary Abstractions" - MoMA PS1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist Photo Placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-artist-red to-muted flex items-center justify-center">
                  <p className="text-white font-bebas text-2xl tracking-wider">ZION AXELLE</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground italic">Artist in her studio, 2024</p>
              </div>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="mt-16">
            <h3 className="text-2xl font-bebas tracking-wide text-artist-red mb-6 text-center">ARTIST STATEMENT</h3>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic text-center">
                "My work is an exploration of the unspoken emotions that color our daily experiences. 
                Through abstract forms and bold color choices, I seek to create visual poetry that 
                resonates with the viewer's own emotional landscape. Each painting is a conversation 
                between the conscious and the subconscious, the known and the felt."
              </blockquote>
              <cite className="block text-center mt-6 text-foreground font-bebas tracking-wide">
                — ZION AXELLE
              </cite>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bio;