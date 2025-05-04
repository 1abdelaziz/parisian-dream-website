
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState("");
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  // Handle newsletter subscription (not functional, just UI)
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle the subscription
    alert(`Merci de vous être abonné avec ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative mt-16">
      <div className="bg-gradient-to-r from-patisserie-peach via-patisserie-pink to-patisserie-blue py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-2xl font-bold text-patisserie-purple-dark">
                Sweet<span className="text-patisserie-purple">Moments</span>
              </h2>
              <p className="mb-4 text-patisserie-purple-dark">
                La douceur au bout des doigts
              </p>
              <div className="mt-2 flex space-x-4">
                {/* Social Icons */}
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="text-patisserie-purple-dark transition-colors hover:text-patisserie-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="text-patisserie-purple-dark transition-colors hover:text-patisserie-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Twitter"
                  className="text-patisserie-purple-dark transition-colors hover:text-patisserie-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-patisserie-purple-dark">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-patisserie-purple-dark hover:text-patisserie-purple">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-patisserie-purple-dark hover:text-patisserie-purple">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-patisserie-purple-dark hover:text-patisserie-purple">
                    Pâtisseries
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-patisserie-purple-dark hover:text-patisserie-purple">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-patisserie-purple-dark">Contact</h3>
              <p className="mb-2 flex items-center text-patisserie-purple-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +33 1 23 45 67 89
              </p>
              <p className="mb-2 flex items-center text-patisserie-purple-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                bonjour@sweetmoments.fr
              </p>
              <p className="flex items-center text-patisserie-purple-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                42 Rue des Pâtissiers, Paris
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-patisserie-purple-dark">Newsletter</h3>
              <p className="mb-4 text-patisserie-purple-dark">
                Recevez nos nouveautés et offres spéciales
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full rounded-l-md border-patisserie-purple/30 bg-white/80 px-4 py-2 focus:border-patisserie-purple focus:outline-none focus:ring-1 focus:ring-patisserie-purple"
                    required
                  />
                  <button 
                    type="submit"
                    className="rounded-r-md bg-patisserie-purple px-4 py-2 text-white transition hover:bg-patisserie-purple-medium hover:animate-wiggle"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-patisserie-purple/20 pt-6 text-center">
            <p className="text-patisserie-purple-dark">
              &copy; {new Date().getFullYear()} SweetMoments Pâtisserie. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-patisserie-purple text-white shadow-md transition-all hover:bg-patisserie-purple-medium"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
