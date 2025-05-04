
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  // Log error to console
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Cookie bite animation state
  const cookieSteps = [
    "M15.4,0.5c0,0-3.6,0-5.2,0c-1.7,0-4.5,0.2-6.5,1.4C1.8,3,0.8,5.2,0.5,7.6c-0.3,2.4,0,5.2,1.4,7.1c1.3,1.9,3.5,3.1,5.8,3.1c2.3,0.1,4.7-0.9,5.9-2.8c1.3-1.9,1.5-4.6,0.7-6.8C13.5,6,11.9,4.7,10,4.3C8.1,3.8,6,4.4,4.6,5.8C3.2,7.2,2.7,9.3,3.2,11c0.5,1.7,2,3,3.8,3.2c1.7,0.3,3.6-0.5,4.5-2c0.9-1.5,0.7-3.6-0.5-4.8c-1.2-1.2-3.2-1.5-4.6-0.5c-1.4,0.9-2,2.9-1.3,4.4",
    "M15.4,0.5c0,0-3.6,0-5.2,0c-1.7,0-4.5,0.2-6.5,1.4C1.8,3,0.8,5.2,0.5,7.6c-0.3,2.4,0,5.2,1.4,7.1c1.3,1.9,3.5,3.1,5.8,3.1c2.3,0.1,3.5-0.4,4.7-2.3c1.3-1.9,0.5-3.8,0.5-3.8c-0.8-1.8-2.4-3.1-4.3-3.5C6.7,7.8,4.6,8.4,3.2,9.8C1.8,11.2,1.3,13.3,1.8,15c0.5,1.7,2,3,3.8,3.2c1.7,0.3,3.6-0.5,4.5-2c0.9-1.5,0.7-3.6-0.5-4.8c-1.2-1.2-3.2-1.5-4.6-0.5",
    "M15.4,0.5c0,0-3.6,0-5.2,0c-1.7,0-4.5,0.2-6.5,1.4C1.8,3,0.8,5.2,0.5,7.6c-0.3,2.4-0.6,5.7,0.8,7.6c1.3,1.9,2.1,1.4,4.4,1.4c2.3,0.1,2.5-0.4,3.7-2.3c1.3-1.9,0.5-3.8,0.5-3.8",
  ];

  return (
    <>
      <Navbar />
      
      <div className="flex min-h-screen items-center justify-center px-4 pt-32">
        <div className="max-w-md text-center">
          {/* Cookie SVG with bite animation */}
          <div className="mb-8 flex justify-center">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="#9b87f5" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <circle cx="12" cy="12" r="10" fill="#FDE1D3" />
              <path d="M12,22c-5.5,0-10-4.5-10-10S6.5,2,12,2s10,4.5,10,10S17.5,22,12,22z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8 S16.4,4,12,4z" fill="#9b87f5" />
              <circle cx="8.5" cy="9.5" r="1" fill="#7E69AB" />
              <circle cx="15" cy="9.5" r="1" fill="#7E69AB" />
              <circle cx="10.5" cy="15.5" r="1" fill="#7E69AB" />
              <circle cx="16" cy="14" r="1" fill="#7E69AB" />
              <circle cx="7" cy="14" r="1" fill="#7E69AB" />
              <circle cx="12" cy="7" r="1" fill="#7E69AB" />
              <circle cx="14" cy="12" r="1" fill="#7E69AB" />
              <path d={cookieSteps[2]} fill="transparent" stroke="#FDE1D3" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          
          <h1 className="mb-4 font-playfair text-6xl font-bold text-patisserie-purple-dark md:text-7xl">
            Oops!
          </h1>
          
          <h2 className="mb-6 text-2xl font-bold text-patisserie-purple md:text-3xl">
            Page Non Trouvée
          </h2>
          
          <p className="mb-8 text-patisserie-purple-medium">
            Il semble que vous cherchiez une page qui a été dévorée ou qui n'a jamais existé.
          </p>
          
          <Link
            to="/"
            className="inline-block rounded-full bg-patisserie-purple px-8 py-3 text-white transition-all hover:bg-patisserie-purple-medium"
          >
            Revenir à l'Accueil
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
