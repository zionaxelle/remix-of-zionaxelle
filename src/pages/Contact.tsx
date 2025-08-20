
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import artwork1 from '@/assets/artwork-1.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      {/* Full Screen Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${artwork1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <Navigation isDarkBackground={true} />
      
      <main className="relative z-10 pt-20 px-6 pb-12 flex items-center justify-center min-h-screen">
        {/* White Opaque Bubble */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl w-full shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bebas tracking-wider mb-4">
              <span className="text-artist-red">GET IN</span> <span className="text-foreground">TOUCH</span>
            </h1>
            <p className="text-muted-foreground">
              For inquiries about artworks, exhibitions, commissions, or collaborations.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-artist-red focus:border-transparent outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-artist-red focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-artist-red focus:border-transparent outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-artist-red focus:border-transparent outline-none transition-colors resize-vertical"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-artist-red text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="border-t border-border pt-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-artist-red" size={18} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:hello@zionaxelle.com" className="text-sm text-muted-foreground hover:text-artist-red transition-colors">
                      hello@zionaxelle.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-artist-red" size={18} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-artist-red transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-artist-red" size={18} />
                  <div>
                    <p className="text-sm font-medium">Studio</p>
                    <p className="text-sm text-muted-foreground">Brooklyn, New York</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm font-medium mb-4">Follow Zion Axelle</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-artist-red transition-colors"
                >
                  <Instagram size={20} />
                  <span className="text-sm">@zionaxelle</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-artist-red transition-colors"
                >
                  <Facebook size={20} />
                  <span className="text-sm">Zion Axelle Art</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
