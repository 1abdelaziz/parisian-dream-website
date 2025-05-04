
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineItem from '../components/TimelineItem';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  // Handle scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelectorAll('.parallax-bg');
      parallax.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const scrollPosition = window.scrollY;
        htmlElement.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        {/* Parallax Background */}
        <div 
          className="parallax-bg absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Notre Histoire
            </h1>
            <p className="mb-8 text-lg text-patisserie-purple-medium">
              Depuis 2015, SweetMoments s'est construite sur une passion pour la pâtisserie artisanale, l'innovation et le partage de moments gourmands.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="bg-patisserie-gray py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="ml-4">
              <TimelineItem
                year="2015"
                title="Le début d'une aventure"
                description="Marie et Pierre commencent à créer des pâtisseries dans leur cuisine pour leurs amis et famille. Ce qui était un simple hobby devient rapidement une passion dévorante."
                isFirst={true}
              />
              
              <TimelineItem
                year="2017"
                title="Première boutique"
                description="Suite au succès grandissant et aux commandes qui s'accumulent, SweetMoments ouvre sa première boutique dans le 11ème arrondissement de Paris."
              />
              
              <TimelineItem
                year="2019"
                title="Reconnaissance"
                description="Notre chef pâtissier remporte le prix du 'Meilleur Éclair Innovant' au Salon de la Pâtisserie de Paris, marquant le début de notre reconnaissance dans le milieu professionnel."
              />
              
              <TimelineItem
                year="2021"
                title="Expansion digitale"
                description="Lancement de notre boutique en ligne pour permettre à tous les gourmands de France de déguster nos créations, livrées en 24h."
              />
              
              <TimelineItem
                year="2023"
                title="Deuxième boutique"
                description="Ouverture d'un second espace, plus grand, dans le Marais, avec un salon de thé permettant de déguster nos pâtisseries sur place."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
            Notre Équipe Passionnée
          </h2>
          
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=1841&auto=format&fit=crop"
                  alt="Marie Dubois - Chef Pâtissière"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-patisserie-purple-dark">Marie Dubois</h3>
              <p className="mb-3 text-patisserie-purple">Chef Pâtissière & Fondatrice</p>
              <p className="text-patisserie-purple-medium">
                Formée auprès des plus grands noms de la pâtisserie française, Marie apporte créativité et innovation à chacune de nos créations.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop"
                  alt="Pierre Moreau - Co-fondateur"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-patisserie-purple-dark">Pierre Moreau</h3>
              <p className="mb-3 text-patisserie-purple">Co-fondateur & Responsable Commercial</p>
              <p className="text-patisserie-purple-medium">
                Avec son expertise en gestion et sa passion pour la gastronomie, Pierre veille à ce que l'expérience client soit aussi parfaite que nos pâtisseries.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop"
                  alt="Sophie Laurent - Chef de Cuisine"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-patisserie-purple-dark">Sophie Laurent</h3>
              <p className="mb-3 text-patisserie-purple">Chef de Cuisine</p>
              <p className="text-patisserie-purple-medium">
                Spécialiste des arômes et des combinaisons originales, Sophie est constamment à la recherche de nouvelles saveurs pour surprendre vos papilles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Message Section */}
      <section className="bg-patisserie-gray py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
              Un Mot de notre Fondatrice
            </h2>
            
            <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              {!showVideo ? (
                // Video Thumbnail
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1516685125522-3c528e8223af?q=80&w=2070&auto=format&fit=crop"
                    alt="Thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-patisserie-purple text-white transition-transform hover:scale-110"
                      aria-label="Play video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                // Actual Video
                <iframe
                  src="https://player.vimeo.com/video/328920132?autoplay=1&title=0&byline=0&portrait=0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  title="Message de notre fondatrice"
                ></iframe>
              )}
            </div>
            
            <p className="mt-6 text-patisserie-purple-medium">
              Découvrez la passion qui nous anime et notre engagement pour des pâtisseries d'exception, expliqués par Marie, notre fondatrice.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Quality */}
            <div className="rounded-lg border border-patisserie-purple/10 bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-patisserie-purple/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">Qualité</h3>
              <p className="text-patisserie-purple-medium">
                Nous sélectionnons méticuleusement chaque ingrédient et travaillons avec des producteurs locaux pour garantir une qualité irréprochable.
              </p>
            </div>
            
            {/* Innovation */}
            <div className="rounded-lg border border-patisserie-purple/10 bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-patisserie-purple/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">Innovation</h3>
              <p className="text-patisserie-purple-medium">
                Notre équipe est constamment à la recherche de nouvelles techniques et de combinaisons de saveurs originales.
              </p>
            </div>
            
            {/* Sustainability */}
            <div className="rounded-lg border border-patisserie-purple/10 bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-patisserie-purple/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-1.04.17-2.04.46-3"></path>
                  <path d="M22 12c0 5.5-4.5 10-10 10-2.3 0-4.3-.8-6-2"></path>
                  <path d="M8.93 20.82C9.94 18.15 10.7 15.16 11 12c.5-4.5 2-8 3-8.5 1.5 1 2.5 5.5 3 8.5.3 3.17 1.06 6.16 2.07 8.83"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">Durabilité</h3>
              <p className="text-patisserie-purple-medium">
                Nous nous engageons à réduire notre impact environnemental grâce à des emballages recyclables et des pratiques durables.
              </p>
            </div>
            
            {/* Passion */}
            <div className="rounded-lg border border-patisserie-purple/10 bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-patisserie-purple/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">Passion</h3>
              <p className="text-patisserie-purple-medium">
                Chaque pâtisserie est créée avec amour et passion, car nous croyons que cela se ressent dans le goût final.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
