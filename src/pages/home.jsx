import React, { useRef, useEffect } from "react";
import useInView from "../components/useInView";
import styles from "../styles/home.module.css";
import profilePic from "../assets/Profile4.jpeg";

function Home() {
  const aboutTitleRef = useRef();
  const inView = useInView(aboutTitleRef);

  const heroRef = useRef(null);

  // ----------- Hero parallax -----------
  useEffect(() => {
    const handler = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const y = Math.min(scrolled * 0.4, 200);
      heroRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className={styles.snapContainer}>
      {/* ===== Hero Section =====*/}
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.name}>pearlynne</h2>
          <h2 className={styles.subtitle}>Independent Data Consultant</h2>
          <p className={styles.subtext}>
            PhD-trained data scientist helping researchers, students, and
            organizations make sense of their data with clarity and impact.
          </p>

          <div className={styles.navLinks}>
            <a href="/consulting">Consulting</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/publications">Publications</a>
          </div>
        </div>
      </section>

      {/* ===== About Me Section =====*/}
      <section className={styles.about}>
        <h2
          ref={aboutTitleRef}
          className={`${styles.aboutTitle} ${inView ? styles.inView : ""}`}
        >
          About Me
        </h2>
        <a
          href="https://linkedin.com/in/pearlynne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={profilePic}
            alt="Profile picture"
            className={styles.profilePic}
          />
        </a>
        <div className={styles.aboutText}>
          <p>
            I’m a PhD graduate with expertise in data analysis, visualization,
            and modeling, and some experience with software development. My
            research examined longitudinal and cross-sectional data in sleep,
            neurodevelopmental disabilities, and neuroimaging.
          </p>
          <p>
            I’m passionate about uncovering patterns in data and I offer
            consulting to help researchers and organizations with data analysis,
            study design, and academic writing.
          </p>
          <p>
            Outside of tech, I coach individuals with ADHD and run my own
            jewelry business!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
