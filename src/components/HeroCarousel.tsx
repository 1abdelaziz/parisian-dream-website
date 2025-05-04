
import { useState, useEffect } from 'react';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  
  // Carousel slides data
  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1887&auto=format&fit=crop',
      title: 'Tarte aux Fraises',
      subtitle: 'Fraîchement préparée avec des fraises de saison',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop',
      title: 'Gâteaux Personnalisés',
      subtitle: 'Pour célébrer vos moments spéciaux',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600075592460-a13311d1052a?q=80&w=1819&auto=format&fit=crop',
      title: 'Notre Boutique',
      subtitle: 'Un espace chaleureux pour découvrir nos créations',
    },
  ];

  // Auto advance carousel slides
  useEffect(() => {
    let intervalId: number;
    
    if (isPlaying && !showVideo) {
      intervalId = window.setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, slides.length, showVideo]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Toggle video display
  const toggleVideo = () => {
    setShowVideo(!showVideo);
    setIsPlaying(!showVideo);
  };

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      {/* Carousel Slides */}
      {!showVideo && slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          
          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 className="text-4xl font-bold animate-fade-in md:text-6xl">
              {slide.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg animate-fade-in md:text-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Video Background (when active) */}
      {showVideo && (
        <div className="absolute inset-0 h-full w-full animate-fade-in">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source 
              src="https://player.vimeo.com/external/328920132.sd.mp4?s=a6d5680616f203739c88f44ce67f2fff9483a9c1&profile_id=164&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Video Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 className="text-4xl font-bold animate-fade-in md:text-6xl">
              L'Art de la Pâtisserie
            </h2>
            <p className="mt-4 max-w-lg text-lg animate-fade-in md:text-xl">
              Découvrez comment nous créons nos délicieuses pâtisseries
            </p>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      {!showVideo && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {!showVideo && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Video Toggle Button */}
      <button
        onClick={toggleVideo}
        className={`absolute bottom-20 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-patisserie-purple px-6 py-3 text-white transition-all hover:animate-wiggle hover:bg-patisserie-purple-medium md:bottom-24 ${
          showVideo ? 'bg-patisserie-purple-medium' : ''
        }`}
      >
        {showVideo ? (
          <>
            <span className="mr-2">Pause</span>
            <span className="inline-block">⏸️</span>
          </>
        ) : (
          <>
            <span className="mr-2">Regarder la vidéo</span>
            <span className="inline-block">🎬</span>
          </>
        )}
      </button>
    </div>
  );
};

export default HeroCarousel;
