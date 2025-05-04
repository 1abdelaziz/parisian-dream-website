
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Gallery images data
  const images: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545',
      category: 'cakes',
      title: 'Fraisier',
      description: 'Gâteau aux fraises et crème mousseline.',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1557925923-53d383425593',
      category: 'pastries',
      title: 'Croissants',
      description: 'Viennoiseries pur beurre.',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1600075592460-a13311d1052a',
      category: 'behind-the-scenes',
      title: 'Notre Boutique',
      description: 'Un espace chaleureux et accueillant.',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
      category: 'cakes',
      title: 'Gâteau au Chocolat',
      description: 'Un délice pour les amateurs de chocolat.',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2',
      category: 'behind-the-scenes',
      title: 'Préparation',
      description: 'Dans les coulisses de la création.',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1603384699706-71f92b1c782b',
      category: 'pastries',
      title: 'Tarte au Citron',
      description: 'Fraîcheur et douceur acidulée.',
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d',
      category: 'cakes',
      title: 'Gâteau d\'Anniversaire',
      description: 'Pour célébrer vos moments spéciaux.',
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1488477304112-4944851de03d',
      category: 'pastries',
      title: 'Tarte aux Fraises',
      description: 'Avec des fraises fraîches de saison.',
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1516684732162-798a0062be99',
      category: 'behind-the-scenes',
      title: 'Pâtissier au Travail',
      description: 'L\'art de la précision.',
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b',
      category: 'pastries',
      title: 'Macarons',
      description: 'Une explosion de saveurs.',
    },
    {
      id: '11',
      src: 'https://images.unsplash.com/photo-1635192749063-a67a51b5af7f',
      category: 'clients',
      title: 'Événement Privé',
      description: 'Un buffet de desserts pour une occasion spéciale.',
    },
    {
      id: '12',
      src: 'https://images.unsplash.com/photo-1619994121345-b161036a3478',
      category: 'clients',
      title: 'Mariage Élégant',
      description: 'Notre pièce montée pour un jour inoubliable.',
    }
  ];

  // Filter images based on selected category
  const filteredImages = filter === 'all'
    ? images
    : images.filter(image => image.category === filter);

  // Open lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Notre Galerie
            </h1>
            <p className="text-lg text-patisserie-purple-medium">
              Plongez dans l'univers visuel de SweetMoments à travers notre collection de photos de pâtisseries, d'événements et de nos coulisses.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'cakes', label: 'Gâteaux' },
              { id: 'pastries', label: 'Pâtisseries' },
              { id: 'behind-the-scenes', label: 'Coulisses' },
              { id: 'clients', label: 'Clients' },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`rounded-full px-6 py-2 transition ${
                  filter === category.id
                    ? 'bg-patisserie-purple text-white'
                    : 'bg-gray-100 text-patisserie-purple-dark hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Masonry */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative mb-4 break-inside-avoid-column overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full cursor-pointer"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-h-[90vh] max-w-5xl rounded-lg bg-white p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] rounded object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 transition-colors hover:bg-white"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 text-center">
              <h3 className="mb-1 text-xl font-bold text-patisserie-purple-dark">
                {selectedImage.title}
              </h3>
              <p className="text-patisserie-purple-medium">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Gallery;
