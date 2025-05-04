
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed left-0 top-0 z-50 w-full py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <h1 className={`text-2xl font-bold ${scrolled ? 'text-patisserie-purple-dark' : 'text-white'} hover:animate-heartbeat md:text-3xl`}>
            Sweet<span className="text-patisserie-purple">Moments</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="block rounded p-2 transition md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${scrolled ? 'text-patisserie-purple-dark' : 'text-white'}`}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/about', label: 'À propos' },
            { path: '/products', label: 'Pâtisseries' },
            { path: '/gallery', label: 'Galerie' },
            { path: '/testimonials', label: 'Témoignages' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`link-underline text-sm font-medium tracking-wide ${
                isActive(item.path)
                  ? `${scrolled ? 'text-patisserie-purple' : 'text-white'} font-bold`
                  : `${scrolled ? 'text-patisserie-purple-darker' : 'text-white'} hover:text-patisserie-purple`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`absolute left-0 w-full transform bg-white px-4 py-2 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 py-4">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/about', label: 'À propos' },
            { path: '/products', label: 'Pâtisseries' },
            { path: '/gallery', label: 'Galerie' },
            { path: '/testimonials', label: 'Témoignages' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 text-lg ${
                isActive(item.path)
                  ? 'font-bold text-patisserie-purple'
                  : 'text-patisserie-purple-darker hover:bg-patisserie-gray hover:text-patisserie-purple'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
