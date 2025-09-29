import { useEffect } from "react";

function useInViewAll(selector = ".parallax-section", className = "is-visible") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            entry.target.classList.remove(className); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, className]);
}

export default useInViewAll