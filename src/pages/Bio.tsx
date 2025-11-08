import Navigation from '@/components/Navigation';
import artistPortrait from '@/assets/artist-portrait.jpg';

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
                <img 
                  src={artistPortrait} 
                  alt="Zion Axelle - Artist Portrait" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-12">
              {/* Artist Name */}
              <div>
                <h1 className="text-5xl font-bebas tracking-wide mb-2">
                  <span className="text-artist-red"><b>ZION</b></span><span className="text-foreground ml-2"><b>AXELLE</b></span>
                </h1>
              </div>

              {/* Biography */}
              <div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Zion Axelle is an Ilocana multidisciplinary artist based in Tiojtià:ke (Montréal). 
                    She mainly works in mediums of painting, drawing, sculpture and performance. 
                    Her creations have been exhibited at Future art fair, Warren G. Flowers Gallery, and VAV Gallery.
                  </p>
                  <p>
                    As a first-generation immigrant, Axelle's background significantly influences her artistic practice. 
                    Her work explores themes of identity, feminism, and the Filipino diaspora. 
                    Through color and patterns, she strives to create a space for dialogue and reflection on these critical issues. 
                    For Axelle, art is her way of understanding who she is and how she feels, and in this way, it does not lie: it's honest, vulnerable, and proud.
                  </p>
                </div>
              </div>

              {/* CV - Education */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wider mb-4">
                  <span className="text-artist-red"><b>EDUC</b></span><span className="text-foreground"><b>ATION</b></span>
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">2027 BFA, Studio Arts</p>
                    <p className="text-sm">Department of Studio Arts, Concordia University, Montreal, QC</p>
                  </div>
                  <div>
                    <p className="font-medium">2023 DEC, Visual Arts</p>
                    <p className="text-sm">Department of Visual Arts, Dawson College, Montreal, QC</p>
                  </div>
                </div>
              </div>

              {/* Selected Exhibitions */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wider mb-4">
                  <span className="text-artist-red"><b>SELECTED</b></span> <span className="text-foreground"><b>EXHIBITIONS</b></span>
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">2025 Sex(ed.) Vernissage and Magazine Showcase</p>
                    <p className="text-sm">Le Système, Montreal, QC, Group Exhibition</p>
                  </div>
                  <div>
                    <p className="font-medium">2025 Youth Forum</p>
                    <p className="text-sm">Y4Y Quebec, Coeur des sciences (UQAM Pavillon Sherbrooke), Montreal, QC, Group Exhibition</p>
                  </div>
                  <div>
                    <p className="font-medium">2024 Impermanence</p>
                    <p className="text-sm">VAV Gallery, Montreal, QC, Group Exhibition</p>
                  </div>
                  <div>
                    <p className="font-medium">2023 Mindset</p>
                    <p className="text-sm">Warren G. Flowers Art Gallery, Montreal, QC, Group Exhibition</p>
                  </div>
                  <div>
                    <p className="font-medium">2023 Liminal</p>
                    <p className="text-sm">Warren G. Flowers Art Gallery, Montreal, QC, Group Exhibition</p>
                  </div>
                  <div>
                    <p className="font-medium">2022 Playground</p>
                    <p className="text-sm">Future Art*Fair, Montreal, QC, Group Exhibition</p>
                  </div>
                </div>
              </div>

              {/* Curatorial & Organizational Projects */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wider mb-4">
                  <span className="text-artist-red"><b>CURATIONAL</b></span> <span className="text-foreground"><b>&</b></span> <span className="text-artist-red"><b>ORGANIZATIONAL</b></span> <span className="text-foreground"><b>PROJECTS</b></span>
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">2025 Youth Day Exhibition w/ BAOBAB</p>
                    <p className="text-sm">Maison de la Culture, Montreal, QC, Curator & Organizer</p>
                  </div>
                  <div>
                    <p className="font-medium">2025 KAGAT Zine Fair</p>
                    <p className="text-sm">Hosted by Kapwa Center, Le Frigo Vert, Montreal, QC, Lead Organizer</p>
                  </div>
                  <div>
                    <p className="font-medium">2024 KAGAT Zine Fair</p>
                    <p className="text-sm">Hosted by Kapwa Center, SHIFT Space, Concordia University, Montreal, QC, Lead Organizer</p>
                  </div>
                </div>
              </div>

              {/* Grants and Awards */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wider mb-4">
                <span className="text-artist-red"><b>GRANTS &</b></span> <span className="text-foreground"><b>AWARDS</b></span>
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">2023 Baillargeon-Marleau Fund Scholarship</p>
                    <p className="text-sm">Léa-Roback Foundation</p>
                  </div>
                  <div>
                    <p className="font-medium">2023 Ted Rogers Community Scholarship</p>
                  </div>
                  <div>
                    <p className="font-medium">2022 Visual Arts Achievement Award</p>
                    <p className="text-sm">Dawson College</p>
                  </div>
                  <div>
                    <p className="font-medium">2021 Visual Arts Achievement Award</p>
                    <p className="text-sm">Dawson College</p>
                  </div>
                </div>
              </div>

              {/* Publication and Press */}
              <div>
                <h2 className="text-2xl font-bebas tracking-wider mb-4">
                <span className="text-artist-red"><b>PUBLICATION</b></span><span className="text-foreground"><b> & PRESS</b></span>
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium">Sex(ed.), Issue No. 1</p>
                    <p className="text-sm">Published by Sex and Self Concordia, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">2025 Lunch and Learn, Panel Speaker</p>
                    <p className="text-sm">SHIFT Concordia, Montreal, QC</p>
                    <a 
                      href="https://www.concordia.ca/cuevents/offices/provost/shift/2025/02/what-we-create-together.html" 
                      className="text-artist-red hover:underline text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      More info
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Radyo Kapwa (CKUT 90.3 FM) — Interviewed Artist</p>
                    <p className="text-sm">Episode 115, October 9, 2024</p>
                    <a 
                      href="https://ckut.ca/playlists/shows/20974" 
                      className="text-artist-red hover:underline text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Listen here
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Liminal: Visual Arts Graduating Exhibition</p>
                    <p className="text-sm">Dawson Fine Arts Department, 2023</p>
                    <a 
                      href="https://www.dawsoncollege.qc.ca/art-gallery/exhibitions/liminal-visual-arts-graduating-exhibition/" 
                      className="text-artist-red hover:underline text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View exhibition
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      


      {/* Footer */}
      <footer className="py-6 text-left border-t border-border bg-gray-100">
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground flex flex-wrap gap-4">
          <p className="text-s text-muted-foreground">
            Website developed by{' '}
            <a href="/geetika" className="hover:text-artist-red transition-colors underline">
              Geetika                            
            </a>
          </p>
          <p>                      </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&to=geetikagehlot2009@gmail.com&su=Subject&body=Body"
                className="hover:text-artist-red transition-colors underline"
              >
                geetikagehlot2009@gmail.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href="https://geetikagehlot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-artist-red transition-colors underline"
              >
                geetikagehlot.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/geetikagehlot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-artist-red transition-colors underline"
              >
                www.linkedin.com/in/geetikagehlot
              </a>
            </p>
          </div>
        </div>
      </footer>



    </div>
  );
};

export default Bio;
