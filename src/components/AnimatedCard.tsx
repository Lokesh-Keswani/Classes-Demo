import { ReactNode, useState, useEffect, useRef } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover?: boolean;
  animation?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scale';
}

const AnimatedCard = ({ 
  children, 
  delay = 0, 
  className = "",
  hover = true,
  animation = 'slideUp'
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation when element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          setHasStarted(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Start animation when element is 100px away from viewport
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasStarted]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    const hoverClasses = hover ? 'hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl' : '';
    
    let animationClasses = '';
    if (isVisible) {
      animationClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';
    } else {
      switch (animation) {
        case 'slideUp':
          animationClasses = 'opacity-0 translate-y-12';
          break;
        case 'slideLeft':
          animationClasses = 'opacity-0 translate-x-12';
          break;
        case 'slideRight':
          animationClasses = 'opacity-0 -translate-x-12';
          break;
        case 'fadeIn':
          animationClasses = 'opacity-0';
          break;
        case 'scale':
          animationClasses = 'opacity-0 scale-95';
          break;
        default:
          animationClasses = 'opacity-0 translate-y-12';
      }
    }
    
    return `${baseClasses} ${animationClasses} ${hoverClasses}`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
