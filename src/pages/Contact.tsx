
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-patisserie-purple-dark md:text-5xl">
              Contactez-Nous
            </h1>
            <p className="text-lg text-patisserie-purple-medium">
              Une question, une demande spéciale, ou simplement envie de dire bonjour ? Nous serions ravis d'échanger avec vous.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-patisserie-purple-dark md:text-3xl">
                Informations de Contact
              </h2>
              
              {/* Contact Details */}
              <div className="mb-10 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-patisserie-purple/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-patisserie-purple-dark">Adresse</h3>
                    <p className="text-patisserie-purple-medium">42 Rue des Pâtissiers, 75003 Paris</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-patisserie-purple/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-patisserie-purple-dark">Téléphone</h3>
                    <p className="text-patisserie-purple-medium">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-patisserie-purple/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-patisserie-purple-dark">Email</h3>
                    <p className="text-patisserie-purple-medium">bonjour@sweetmoments.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-patisserie-purple/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-patisserie-purple">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-patisserie-purple-dark">Horaires d'ouverture</h3>
                    <p className="text-patisserie-purple-medium">
                      Lundi - Vendredi: 7h30 - 19h00 <br />
                      Samedi: 8h00 - 20h00 <br />
                      Dimanche: 9h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406493907!2d2.357445076856367!3d48.85837147133239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1701270761619!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre localisation"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-patisserie-purple-dark md:text-3xl">
                Envoyez-nous un Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full border-b border-patisserie-purple/30 bg-transparent py-3 pl-3 pr-0 focus:border-patisserie-purple focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-3 -translate-y-6 transform text-sm text-patisserie-purple-medium transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-patisserie-purple"
                  >
                    Nom complet
                  </label>
                </div>
                
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full border-b border-patisserie-purple/30 bg-transparent py-3 pl-3 pr-0 focus:border-patisserie-purple focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-3 -translate-y-6 transform text-sm text-patisserie-purple-medium transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-patisserie-purple"
                  >
                    Email
                  </label>
                </div>
                
                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full border-b border-patisserie-purple/30 bg-transparent py-3 pl-3 pr-0 focus:border-patisserie-purple focus:outline-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 top-3 -translate-y-6 transform text-sm text-patisserie-purple-medium transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-patisserie-purple"
                  >
                    Téléphone (optionnel)
                  </label>
                </div>
                
                {/* Subject */}
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="peer w-full border-b border-patisserie-purple/30 bg-transparent py-3 pl-3 pr-0 focus:border-patisserie-purple focus:outline-none"
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option value="general">Demande Générale</option>
                    <option value="order">Commande Personnalisée</option>
                    <option value="feedback">Commentaires</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                  <label
                    htmlFor="subject"
                    className="absolute left-3 top-3 -translate-y-6 transform text-sm text-patisserie-purple-medium transition-all"
                  >
                    Sujet
                  </label>
                </div>
                
                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="peer w-full border-b border-patisserie-purple/30 bg-transparent py-3 pl-3 pr-0 focus:border-patisserie-purple focus:outline-none"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-3 -translate-y-6 transform text-sm text-patisserie-purple-medium transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-patisserie-purple"
                  >
                    Message
                  </label>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-patisserie-purple py-3 text-white transition-all hover:animate-wiggle hover:bg-patisserie-purple-medium"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
