import { useState, useEffect } from "react";

const useInView = (ref) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
      rootMargin: "0px 0px -30% 0px",
      threshold: 0.1, 
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return inView;
};

export default useInView;
