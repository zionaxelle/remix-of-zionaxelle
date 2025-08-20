import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

interface NavigationProps {
  isDarkBackground?: boolean;
}

const Navigation = ({ isDarkBackground = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'Bio', path: '/bio' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', path: '#', icon: Instagram },
    { name: 'Facebook', path: '#', icon: Facebook },
  ];

  const textColorClass = isDarkBackground ? 'text-text-light' : 'text-text-dark';
  const logoAxelleClass = isDarkBackground ? 'logo-light' : 'logo-dark';

  return (
    <>
      {/* Logo */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 text-2xl md:text-3xl font-bebas tracking-wider"
      >
        <span className="logo-zion">ZION</span>
        <span className={`logo-axelle ${logoAxelleClass} ml-1`}>AXELLE</span>
      </Link>

      {/* Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-6 right-6 z-50 p-2 ${textColorClass} hover:text-accent transition-colors`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav className={`fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="glass-menu absolute top-6 right-6 p-8 rounded-lg min-w-[200px]">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link block text-lg font-medium ${
                    location.pathname === item.path 
                      ? 'text-accent' 
                      : 'text-text-overlay'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
            {/* Social Links */}
            <li className="pt-4 border-t border-glass-border">
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.path}
                      className="text-text-overlay hover:text-accent transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;