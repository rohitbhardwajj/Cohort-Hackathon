import { useEffect } from 'react';

export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  threshold: number = 0.1
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        threshold,
        rootMargin: '-50px'
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, callback, threshold]);
};