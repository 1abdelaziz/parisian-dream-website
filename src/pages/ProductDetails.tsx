
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Product } from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [related, setRelated] = useState<Product[]>([]);
  
  // Mock database of products
  const productsDatabase: Product[] = [
    {
      id: 'tarte-fraises',
      name: 'Tarte aux Fraises',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1887&auto=format&fit=crop',
      category: 'Tartes',
      description: 'Une délicieuse tarte aux fraises fraîches sur une crème pâtissière légère et un fond de pâte sablée. Nos fraises sont soigneusement sélectionnées pour leur goût sucré et leur fraîcheur, offrant une explosion de saveur à chaque bouchée. La pâte sablée est préparée selon une recette traditionnelle transmise de génération en génération.'
    },
    {
      id: 'eclair-chocolat',
      name: 'Éclair au Chocolat',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=1888&auto=format&fit=crop',
      category: 'Pâtisseries',
      description: 'Un éclair garni de crème pâtissière au chocolat noir intense et recouvert d\'un glaçage brillant. Le chocolat utilisé provient des meilleures plantations d\'Amérique du Sud, conférant à notre éclair une richesse aromatique inégalée. La pâte à choux croustillante à l\'extérieur et moelleuse à l\'intérieur complète parfaitement cette pâtisserie emblématique.'
    },
    {
      id: 'macaron-pistache',
      name: 'Macaron à la Pistache',
      price: 2.50,
      image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1859&auto=format&fit=crop',
      category: 'Macarons',
      description: 'Macaron à la pistache avec une ganache onctueuse et une coque parfaitement croustillante. Les pistaches d\'origine sicilienne sont torréfiées et broyées dans notre atelier pour capturer toute leur saveur et leur huile essentielle. Nos macarons sont préparés selon la méthode traditionnelle, garantissant cette texture si caractéristique et recherchée.'
    },
    {
      id: 'opera-cafe',
      name: 'Opéra',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1887&auto=format&fit=crop',
      category: 'Gâteaux',
      description: 'Gâteau composé de biscuit Joconde, crème au beurre café, ganache au chocolat et glaçage. Cette pâtisserie emblématique est un véritable chef-d\'œuvre d\'équilibre entre la puissance du café arabica fraîchement torréfié et la douceur du chocolat noir grand cru. Chaque couche est méticuleusement assemblée à la main pour garantir une dégustation parfaite.'
    },
    {
      id: 'pain-chocolat',
      name: 'Pain au Chocolat',
      price: 2.20,
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1887&auto=format&fit=crop',
      category: 'Viennoiseries',
      description: 'Viennoiserie feuilletée au beurre avec des bâtons de chocolat noir, dorée à la perfection. Notre pâte feuilletée est préparée avec du beurre AOP d\'Isigny et repose pendant 24 heures avant d\'être façonnée. Les bâtonnets de chocolat noir 70% cacao fondent délicatement au cœur de cette viennoiserie, créant un contraste parfait avec le feuilletage croustillant.'
    }
  ];

  // Fetch product and related products
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    // Find the product by id
    const foundProduct = productsDatabase.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products (same category, excluding current product)
      const relatedProducts = productsDatabase
        .filter(p => p.category === foundProduct.category && p.id !== id)
        .slice(0, 3);
      
      setRelated(relatedProducts);
    }
    
    setLoading(false);
  }, [id]);

  // Handle image zoom effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomActive) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto flex min-h-screen items-center justify-center px-4 pt-32">
          <div className="flex flex-col items-center">
            <div className="mb-4 h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-patisserie-purple"></div>
            <p className="text-patisserie-purple-medium">Chargement en cours...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-32">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-patisserie-purple-light">
            <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
            <path d="M15 3v6h6"></path>
            <path d="M10 16 8 12l-2 4"></path>
            <path d="M18 16h-5"></path>
          </svg>
          <h2 className="mb-2 text-2xl font-bold text-patisserie-purple-dark">
            Produit introuvable
          </h2>
          <p className="mb-6 text-center text-patisserie-purple-medium">
            Nous n'avons pas trouvé le produit que vous cherchez.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center rounded-full bg-patisserie-purple px-6 py-2 text-white transition hover:bg-patisserie-purple-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux produits
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Product Details */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center text-patisserie-purple-medium transition-colors hover:text-patisserie-purple"
            >
              <ArrowLeft size={16} className="mr-1 transition-transform group-hover:rotate-[-10deg]" />
              Retour aux produits
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Product Image */}
            <div
              className="relative overflow-hidden rounded-lg bg-white"
              onMouseEnter={() => setZoomActive(true)}
              onMouseLeave={() => setZoomActive(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="aspect-square">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundPosition: zoomActive ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
                    backgroundSize: zoomActive ? '150%' : 'contain',
                    backgroundRepeat: 'no-repeat',
                    transition: zoomActive ? 'none' : 'background-size 0.3s ease',
                  }}
                ></div>
              </div>
              
              <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-sm text-patisserie-purple-dark backdrop-blur-sm">
                Survolez pour zoomer
              </div>
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-in">
              <span className="mb-2 inline-block rounded-full bg-patisserie-pink/50 px-3 py-1 text-xs font-medium text-patisserie-purple">
                {product.category}
              </span>
              
              <h1 className="mb-4 text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
                {product.name}
              </h1>
              
              <div className="mb-6 text-2xl font-bold text-patisserie-purple">
                {product.price.toFixed(2)}€
              </div>
              
              <p className="mb-6 text-lg text-patisserie-purple-medium">
                {product.description}
              </p>
              
              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-patisserie-purple-dark">
                  Ingrédients
                </h3>
                <p className="text-patisserie-purple-medium">
                  Farine de blé, beurre, lait, sucre, œufs, fruits frais, chocolat noir 70%, vanille de Madagascar.
                </p>
              </div>
              
              {/* Dietary Info */}
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-patisserie-purple-dark">
                  Informations diététiques
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-patisserie-gray px-3 py-1 text-sm text-patisserie-purple-medium">
                    Contient du gluten
                  </span>
                  <span className="rounded-full bg-patisserie-gray px-3 py-1 text-sm text-patisserie-purple-medium">
                    Contient des œufs
                  </span>
                  <span className="rounded-full bg-patisserie-gray px-3 py-1 text-sm text-patisserie-purple-medium">
                    Contient du lait
                  </span>
                  <span className="rounded-full bg-patisserie-gray px-3 py-1 text-sm text-patisserie-purple-medium">
                    Peut contenir des fruits à coque
                  </span>
                </div>
              </div>
              
              {/* Calories */}
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-patisserie-purple-dark">
                  Information nutritionnelle
                </h3>
                <p className="text-patisserie-purple-medium">
                  Environ 320 kcal par portion (100g)
                </p>
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex items-center">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-l border border-r-0 border-gray-300 bg-gray-100 hover:bg-gray-200"
                    aria-label="Diminuer la quantité"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    value="1"
                    readOnly
                    className="h-10 w-14 border-y border-gray-300 bg-white text-center"
                  />
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-r border border-l-0 border-gray-300 bg-gray-100 hover:bg-gray-200"
                    aria-label="Augmenter la quantité"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                
                <button className="group flex-1 rounded-full bg-patisserie-purple py-3 text-white transition-colors hover:bg-patisserie-purple-medium">
                  <span className="inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transition-transform group-hover:rotate-12">
                      <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Ajouter au panier
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-patisserie-gray py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-patisserie-purple-dark md:text-3xl">
              Vous aimerez peut-être aussi
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </>
  );
};

export default ProductDetails;
