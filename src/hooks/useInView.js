import { useEffect, useState } from "react";

const useInView = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [observer, setObserver] = useState(null);
  
    useEffect(() => {
      const callback = (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      };
  
      observer?.disconnect();
      if (ref) {
        const _observer = new IntersectionObserver(callback, options);
        _observer.observe(ref);
        setObserver(_observer);
      }
  
      return () => {
        observer?.disconnect();
      };
    }, [ref, options.root, options.rootMargin, options.threshold]);
  
    return [setRef,isIntersecting];
  }
export default useInView;