
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import { Product } from '../components/ProductCard';

const Index = () => {
  // Featured products data
  const featuredProducts: Product[] = [
    {
      id: 'tarte-fraises',
      name: 'Tarte aux Fraises',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1887&auto=format&fit=crop',
      category: 'Tartes',
      description: 'Une délicieuse tarte aux fraises fraîches sur une crème pâtissière légère et un fond de pâte sablée.'
    },
    {
      id: 'eclair-chocolat',
      name: 'Éclair au Chocolat',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=1888&auto=format&fit=crop',
      category: 'Pâtisseries',
      description: 'Un éclair garni de crème pâtissière au chocolat noir intense et recouvert d\'un glaçage brillant.'
    },
    {
      id: 'macaron-pistache',
      name: 'Macaron à la Pistache',
      price: 2.50,
      image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1859&auto=format&fit=crop',
      category: 'Macarons',
      description: 'Macaron à la pistache avec une ganache onctueuse et une coque parfaitement croustillante.'
    },
    {
      id: 'opera-cafe',
      name: 'Opéra',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1887&auto=format&fit=crop',
      category: 'Gâteaux',
      description: 'Gâteau composé de biscuit Joconde, crème au beurre café, ganache au chocolat et glaçage.'
    },
    {
      id: 'pain-chocolat',
      name: 'Pain au Chocolat',
      price: 2.20,
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1887&auto=format&fit=crop',
      category: 'Viennoiseries',
      description: 'Viennoiserie feuilletée au beurre avec des bâtons de chocolat noir, dorée à la perfection.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Feature Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
            Pourquoi Choisir <span className="text-patisserie-purple">SweetMoments</span>?
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                  <line x1="6" x2="18" y1="17" y2="17"></line>
                </svg>
              }
              title="Fait Maison"
              description="Toutes nos pâtisseries sont élaborées artisanalement dans notre atelier avec des ingrédients soigneusement sélectionnés."
              delay={0}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              }
              title="Livraison Rapide"
              description="Nous garantissons une livraison fraîcheur dans Paris et sa proche banlieue pour que vous puissiez déguster nos créations à leur apogée."
              delay={200}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-1.04.17-2.04.46-3"></path>
                  <path d="M22 12c0 5.5-4.5 10-10 10-2.3 0-4.3-.8-6-2"></path>
                  <path d="M8.93 20.82C9.94 18.15 10.7 15.16 11 12c.5-4.5 2-8 3-8.5 1.5 1 2.5 5.5 3 8.5.3 3.17 1.06 6.16 2.07 8.83"></path>
                </svg>
              }
              title="Ingrédients Bio"
              description="Nous utilisons des produits biologiques et de saison pour créer des saveurs authentiques et respectueuses de l'environnement."
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="bg-patisserie-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
            Nos Créations à Découvrir
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-patisserie-purple-medium">
            Des pâtisseries traditionnelles revisitées avec une touche moderne pour éveiller vos papilles.
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block rounded-full bg-patisserie-purple px-8 py-3 text-white transition-all hover:animate-pulse hover:bg-patisserie-purple-medium"
            >
              Découvrir Plus
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="bg-fixed bg-cover bg-center py-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-lg bg-white/90 p-8 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-patisserie-purple-dark">
              Envie d'une création sur mesure?
            </h2>
            <p className="mb-6 text-patisserie-purple-medium">
              Que ce soit pour un événement spécial ou simplement pour vous faire plaisir, nos pâtissiers sont à votre écoute pour créer la pâtisserie de vos rêves.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-patisserie-purple px-8 py-3 text-white transition-all hover:bg-patisserie-purple-medium"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
