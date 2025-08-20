import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation isDarkBackground={false} />
      
      <main className="pt-20 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bebas tracking-wider mb-4">
              <span className="text-artist-red">CON</span><span className="text-foreground">TACT</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For inquiries about artworks, exhibitions, commissions, or collaborations, 
              please reach out using the information below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-6">GET IN TOUCH</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-artist-red" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@zionaxelle.com" className="text-muted-foreground hover:text-artist-red transition-colors">
                        hello@zionaxelle.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="text-artist-red" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-artist-red transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-artist-red" size={20} />
                    <div>
                      <p className="font-medium">Studio</p>
                      <p className="text-muted-foreground">Brooklyn, New York</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bebas tracking-wide text-foreground mb-4">FOLLOW</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-artist-red transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@zionaxelle</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-artist-red transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Zion Axelle Art</span>
                  </a>
                </div>
              </div>

              {/* Representation */}
              <div>
                <h3 className="text-xl font-bebas tracking-wide text-foreground mb-4">REPRESENTATION</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium">Gallery Modern</p>
                  <p>525 W 19th Street</p>
                  <p>New York, NY 10011</p>
                  <a href="mailto:info@gallerymodern.com" className="hover:text-artist-red transition-colors">
                    info@gallerymodern.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bebas tracking-wide text-artist-red mb-6">SEND A MESSAGE</h2>
              
              <form className="space-y-6">
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
                    rows={6}
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;