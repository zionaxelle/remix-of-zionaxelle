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


<footer className="py-4 text-center border-t border-border bg-gray-100">
  <div className="text-xs text-muted-foreground flex flex-wrap justify-center gap-6">
<<<<<<< HEAD
    <a href="https://geetikagehlot.com/" className="hover:text-artist-red transition-colors underline">
      Developed by Geetika Gehlot

    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&to=geetikagehlot2009@gmail.com"
      className="hover:text-artist-red transition-colors underline"
    >
      Email
    </a>

    <a
      href="https://geetikagehlot.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-artist-red transition-colors underline"
    >
      Website
    </a>

    <a
      href="https://www.linkedin.com/in/geetikagehlot"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-artist-red transition-colors underline"
    >
      LinkedIn
    </a>
  </div>
</footer>



export default NotFound;
