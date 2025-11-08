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
<footer className="py-6 text-center border-t border-border bg-gray-100">
  <div className="space-y-4">
    <p className="text-xs text-muted-foreground">
      Website developed by{' '}
      <a
        href="/geetika"
        className="hover:text-artist-red transition-colors underline"
      >
        Geetika
      </a>
    </p>
    <div className="text-xs text-muted-foreground flex flex-wrap justify-center gap-4">
      <p>
        <strong>Email:</strong>{' '}
        <a
          href="mailto:geetikagehlot2009@gmail.com"
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

export default NotFound;
