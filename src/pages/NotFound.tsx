import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-artist-red">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-artist-red hover:text-opacity-80 underline transition-colors">
          Return to ZION AXELLE
        </a>
      </div>
    </div>
  );
};
      {/* Footer */}
      <footer className="py-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          Website Developed by{' '}
          <a 
            href="https://geetikagehlot.com/" target="_blank"
            className="hover:text-artist-red transition-colors underline"
          >
            Geetika Gehlot
          </a>
        </p>
      </footer>
export default NotFound;
