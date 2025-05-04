
import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small timeout for the delay effect
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`transform rounded-lg bg-white p-6 shadow-lg transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-patisserie-purple/10 text-patisserie-purple">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">{title}</h3>
      <p className="text-patisserie-purple-medium">{description}</p>
    </div>
  );
};

export default FeatureCard;
