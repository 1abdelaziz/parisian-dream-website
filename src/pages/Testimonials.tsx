
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sophie Martin',
      role: 'Cliente Fidèle',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      quote: 'Les pâtisseries de SweetMoments ont accompagné tous les moments importants de ma vie. Leur fraisier est tout simplement le meilleur que j\'ai jamais goûté.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Jean Dupont',
      role: 'Organisateur d\'événements',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      quote: 'Pour chaque événement que j\'organise, je fais appel à SweetMoments. La qualité est constante et le service impeccable. Mes clients sont toujours impressionnés.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Marie Leclerc',
      role: 'Blogueuse Culinaire',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      quote: 'En tant que blogueuse culinaire, j\'ai visité de nombreuses pâtisseries, mais SweetMoments se démarque par sa créativité et son authenticité. Un vrai coup de cœur !',
      rating: 5,
    },
    {
      id: '4',
      name: 'Thomas Bernard',
      role: 'Chef Restaurateur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      quote: 'Collaborer avec SweetMoments pour les desserts de mon restaurant a été une évidence. Leur professionnalisme et leur passion se reflètent dans chacune de leurs créations.',
      rating: 5,
    },
    {
      id: '5',
      name: 'Émilie Rousseau',
      role: 'Mariée Comblée',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      quote: 'Notre wedding cake était une œuvre d\'art ! Non seulement il était magnifique, mais il était aussi incroyablement délicieux. Tous nos invités en parlent encore.',
      rating: 5,
    }
  ];

  // Handle scroll reveal effect
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto advance carousel slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Ce Que Nos Clients Disent
            </h1>
            <p className="text-lg text-patisserie-purple-medium">
              Découvrez les témoignages de ceux qui ont partagé des moments sucrés grâce à nos créations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonial Carousel */}
      <section 
        className="relative bg-fixed bg-cover bg-center py-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1648318397779-4353a9a24aae?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-patisserie-purple-darker/60 animate-ken-burns"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div ref={testimonialsRef} className="mx-auto max-w-4xl">
            {/* Current Testimonial */}
            <div className="relative overflow-hidden py-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 flex w-full flex-col items-center justify-center transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mb-6 h-24 w-24 rounded-full border-4 border-white object-cover"
                  />
                  
                  <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>
                  
                  <blockquote className="mb-6 text-center text-xl text-white md:text-2xl">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{testimonial.name}</div>
                    <div className="text-patisserie-purple-light">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="mt-8 flex items-center justify-center space-x-4">
              <button
                onClick={goToPrevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-white'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
            Ils Ont Adoré Leur Expérience
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="scroll-reveal rounded-lg bg-white p-6 opacity-0 shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>
                
                <blockquote className="mb-6 text-patisserie-purple-medium">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-patisserie-purple-dark">{testimonial.name}</div>
                    <div className="text-sm text-patisserie-purple">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-patisserie-gray py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-patisserie-purple-dark md:text-4xl">
              Prêt à Vivre Votre Propre Expérience?
            </h2>
            <p className="mb-8 text-patisserie-purple-medium">
              Rejoignez nos clients satisfaits et découvrez pourquoi SweetMoments est la référence en matière de pâtisserie artisanale à Paris.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="/products"
                className="rounded-full bg-patisserie-purple px-8 py-3 text-white transition-all hover:bg-patisserie-purple-medium"
              >
                Découvrir Nos Pâtisseries
              </a>
              <a
                href="/contact"
                className="rounded-full border-2 border-patisserie-purple px-8 py-3 text-patisserie-purple-dark transition-all hover:bg-patisserie-purple hover:text-white"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Testimonials;
