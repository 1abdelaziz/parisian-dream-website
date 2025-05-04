
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  popular: boolean;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 'secrets-macarons-parfaits',
      title: 'Les Secrets pour des Macarons Parfaits',
      excerpt: 'Découvrez les techniques des professionnels pour réaliser des macarons à la coque brillante et aux pieds parfaitement formés...',
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
      date: '12 mai 2023',
      author: 'Marie Dubois',
      category: 'Techniques',
      readTime: '8 min',
      popular: true,
    },
    {
      id: 'histoire-opera',
      title: 'L\'Histoire du Gâteau Opéra',
      excerpt: 'Comment ce gâteau emblématique a conquis les tables françaises et internationales depuis sa création dans les années 1950...',
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7',
      date: '3 avril 2023',
      author: 'Pierre Moreau',
      category: 'Histoire',
      readTime: '6 min',
      popular: false,
    },
    {
      id: 'chocolat-grand-cru',
      title: 'Chocolat Grand Cru : Comment le Choisir ?',
      excerpt: 'Guide pour comprendre les différences entre les origines, les pourcentages et les arômes des chocolats de qualité...',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834',
      date: '17 mars 2023',
      author: 'Sophie Laurent',
      category: 'Ingrédients',
      readTime: '10 min',
      popular: true,
    },
    {
      id: 'tendances-patisserie-2023',
      title: 'Les Tendances Pâtisserie de 2023',
      excerpt: 'Du retour aux classiques revisités aux innovations techniques, découvrez ce qui fait vibrer le monde de la pâtisserie cette année...',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
      date: '28 février 2023',
      author: 'Marie Dubois',
      category: 'Tendances',
      readTime: '7 min',
      popular: true,
    },
    {
      id: 'pates-levees-secrets',
      title: 'Les Secrets des Pâtes Levées',
      excerpt: 'Comment maîtriser la fermentation et le façonnage pour des viennoiseries dignes des meilleures boulangeries...',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      date: '15 janvier 2023',
      author: 'Thomas Bernard',
      category: 'Techniques',
      readTime: '12 min',
      popular: false,
    },
    {
      id: 'patisserie-saine',
      title: 'Pâtisserie Saine : Comment Réduire le Sucre?',
      excerpt: 'Des alternatives au sucre raffiné et des astuces pour créer des desserts plus légers sans compromettre le goût...',
      image: 'https://images.unsplash.com/photo-1605291445244-9ff5e28a5376',
      date: '7 décembre 2022',
      author: 'Émilie Rousseau',
      category: 'Santé',
      readTime: '9 min',
      popular: false,
    },
  ];

  // Get unique categories from blog posts
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  
  // Popular posts (for sidebar)
  const popularPosts = blogPosts.filter(post => post.popular);

  // Filter posts by category if one is selected
  const filteredPosts = activeCategory
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Le Blog SweetMoments
            </h1>
            <p className="text-lg text-patisserie-purple-medium">
              Explorez nos articles sur l'art de la pâtisserie, découvrez des astuces, des histoires et des inspirations sucrées.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold text-patisserie-purple-dark">
                    Catégories
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveCategory(null)}
                        className={`transition hover:text-patisserie-purple ${
                          activeCategory === null ? 'font-bold text-patisserie-purple' : 'text-patisserie-purple-medium'
                        }`}
                      >
                        Tous les articles
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`transition hover:text-patisserie-purple ${
                            activeCategory === category ? 'font-bold text-patisserie-purple' : 'text-patisserie-purple-medium'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Popular Posts */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold text-patisserie-purple-dark">
                    Les Plus Populaires
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post) => (
                      <div key={post.id} className="flex items-start space-x-3">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="font-medium text-patisserie-purple-dark hover:text-patisserie-purple"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.01]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-patisserie-purple px-3 py-1 text-xs font-semibold uppercase text-white">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2 flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="mb-2 text-xl font-bold text-patisserie-purple-dark">
                        {post.title}
                      </h2>
                      
                      <p className="mb-4 text-patisserie-purple-medium">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-patisserie-purple">
                          Par {post.author}
                        </span>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-sm font-medium text-patisserie-purple hover:text-patisserie-purple-medium"
                        >
                          Lire la suite
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-patisserie-purple-light">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <path d="M13 8h4"></path>
                    <path d="M13 12h4"></path>
                    <path d="M13 16h4"></path>
                  </svg>
                  <h3 className="mb-1 text-xl font-medium text-patisserie-purple-dark">
                    Aucun article trouvé
                  </h3>
                  <p className="text-patisserie-purple-medium">
                    Essayez une autre catégorie ou revenez plus tard.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-patisserie-gray py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-patisserie-purple-dark md:text-3xl">
              Restez Informé
            </h2>
            <p className="mb-6 text-patisserie-purple-medium">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et astuces pâtissières directement dans votre boîte de réception.
            </p>
            <form className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-full border-patisserie-purple/30 px-4 py-2 focus:border-patisserie-purple focus:outline-none focus:ring-1 focus:ring-patisserie-purple"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-patisserie-purple px-6 py-2 text-white transition hover:bg-patisserie-purple-medium sm:w-auto"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Blog;
