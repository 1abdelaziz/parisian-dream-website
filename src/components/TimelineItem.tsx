
import { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  isFirst?: boolean;
}

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  isLast = false,
  isFirst = false,
}: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative flex pb-8 ${isLast ? 'pb-0' : ''} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      {/* Line */}
      {!isLast && (
        <div className="absolute left-4 top-6 -ml-0.5 h-full w-0.5 bg-patisserie-purple-light" />
      )}
      
      {/* Dot */}
      <div className="relative z-10 mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-patisserie-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          {isFirst ? (
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          ) : isLast ? (
            <>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </>
          ) : (
            <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z"></path>
          )}
        </svg>
      </div>
      
      {/* Content */}
      <div className="ml-4 grow">
        <div className="mb-1 text-sm font-bold text-patisserie-purple">{year}</div>
        <h3 className="mb-2 text-xl font-bold text-patisserie-purple-dark">{title}</h3>
        <p className="text-patisserie-purple-medium">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
