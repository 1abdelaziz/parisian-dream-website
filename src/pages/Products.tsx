
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard, { Product } from '../components/ProductCard';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Mock products data
  const products: Product[] = [
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
      id: 'paris-brest',
      name: 'Paris-Brest',
      price: 5.50,
      image: 'https://images.unsplash.com/photo-1670398564097-0762e1f97d05?q=80&w=1854&auto=format&fit=crop',
      category: 'Pâtisseries',
      description: 'Un classique de la pâtisserie française: pâte à choux garnie d\'une crème pralinée aux noisettes.'
    },
    {
      id: 'pain-chocolat',
      name: 'Pain au Chocolat',
      price: 2.20,
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1887&auto=format&fit=crop',
      category: 'Viennoiseries',
      description: 'Viennoiserie feuilletée au beurre avec des bâtons de chocolat noir, dorée à la perfection.'
    },
    {
      id: 'croissant',
      name: 'Croissant Pur Beurre',
      price: 1.90,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop',
      category: 'Viennoiseries',
      description: 'Le vrai croissant français au beurre d\'Isigny, léger et feuilleté avec un goût inimitable.'
    },
    {
      id: 'tarte-citron',
      name: 'Tarte au Citron Meringuée',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1603384699706-71f92b1c782b?q=80&w=1780&auto=format&fit=crop',
      category: 'Tartes',
      description: 'Tarte acidulée au citron recouverte d\'une meringue légère et dorée pour un équilibre parfait.'
    },
    {
      id: 'fraisier',
      name: 'Fraisier',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=1780&auto=format&fit=crop',
      category: 'Gâteaux',
      description: 'Gâteau traditionnel aux fraises, avec une crème mousseline à la vanille et un biscuit génoise.'
    },
    {
      id: 'choux-vanille',
      name: 'Chou à la Vanille',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1633958561455-13b614a3669e?q=80&w=1887&auto=format&fit=crop',
      category: 'Pâtisseries',
      description: 'Pâte à choux croustillante garnie d\'une crème pâtissière à la vanille de Madagascar.'
    },
    {
      id: 'macaron-framboise',
      name: 'Macaron à la Framboise',
      price: 2.50,
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1887&auto=format&fit=crop',
      category: 'Macarons',
      description: 'Macaron à la framboise intense avec un coeur coulant pour une expérience gustative unique.'
    },
    {
      id: 'financier',
      name: 'Financier aux Amandes',
      price: 1.80,
      image: 'https://images.unsplash.com/photo-1596488607269-76011048919f?q=80&w=1887&auto=format&fit=crop',
      category: 'Petits Gâteaux',
      description: 'Gâteau moelleux aux amandes et au beurre noisette, avec une texture incomparable.'
    }
  ];

  // Featured product (random selection)
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  // Filter products based on search, category, and price
  useEffect(() => {
    let result = [...products];
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((product) => product.category === activeCategory);
    }
    
    // Filter by price
    if (priceFilter !== 'all') {
      if (priceFilter === 'low') {
        result = result.filter((product) => product.price < 5);
      } else if (priceFilter === 'medium') {
        result = result.filter((product) => product.price >= 5 && product.price < 20);
      } else if (priceFilter === 'high') {
        result = result.filter((product) => product.price >= 20);
      }
    }
    
    setFilteredProducts(result);
  }, [searchQuery, activeCategory, priceFilter]);

  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(products.map((product) => product.category)))];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Nos Pâtisseries
            </h1>
            <p className="text-lg text-patisserie-purple-medium">
              Explorez notre collection de pâtisseries artisanales, préparées chaque jour avec passion et des ingrédients de qualité.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Product Section */}
      <section className="bg-patisserie-gray py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-patisserie-purple-dark">
            Notre Sélection du Jour
          </h2>
          
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="h-64 w-full md:h-auto md:w-1/2">
                <img
                  src={randomProduct.image}
                  alt={randomProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex w-full flex-col justify-center p-6 md:w-1/2">
                <div className="mb-2 inline-block rounded-full bg-patisserie-pink px-3 py-1 text-xs font-semibold uppercase text-patisserie-purple">
                  Coup de cœur
                </div>
                <h3 className="mb-2 text-2xl font-bold text-patisserie-purple-dark">{randomProduct.name}</h3>
                <p className="mb-4 text-patisserie-purple-medium">{randomProduct.description}</p>
                <div className="mb-4 text-xl font-bold text-patisserie-purple">{randomProduct.price.toFixed(2)}€</div>
                <div className="flex space-x-4">
                  <button className="rounded-full bg-gray-100 px-4 py-2 text-patisserie-purple-dark transition-colors hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                      <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="ml-2">Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filters and Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Search Box */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une pâtisserie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border-patisserie-purple/30 pl-12 py-3 focus:border-patisserie-purple focus:ring-1 focus:ring-patisserie-purple"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-patisserie-purple-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Price Filter */}
            <div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full rounded-full border-patisserie-purple/30 p-3 focus:border-patisserie-purple focus:ring-1 focus:ring-patisserie-purple"
              >
                <option value="all">Tous les prix</option>
                <option value="low">Moins de 5€</option>
                <option value="medium">Entre 5€ et 20€</option>
                <option value="high">Plus de 20€</option>
              </select>
            </div>
          </div>
          
          {/* Categories Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 whitespace-nowrap md:justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-2 transition ${
                    activeCategory === category
                      ? 'bg-patisserie-purple text-white'
                      : 'bg-gray-100 text-patisserie-purple-dark hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Tous' : category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-patisserie-purple-light">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <h3 className="mb-1 text-xl font-medium text-patisserie-purple-dark">Aucun résultat trouvé</h3>
              <p className="text-patisserie-purple-medium">
                Essayez d'ajuster vos filtres ou votre recherche.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Products;
