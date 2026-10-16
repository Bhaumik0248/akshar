import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver.
 * Triggers smooth entrance animations and counter activations.
 */
export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce && elementRef.current) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [options]);

  return [elementRef, isInView];
}
