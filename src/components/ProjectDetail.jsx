import React, { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import styles from "../styles/projectDetail.module.css";
import PropTypes from "prop-types";

const ProjectDetail = ({ title, cite, media = [], sections = [] }) => {
  const heroRef = useRef(null);

  // ----------- Hero parallax -----------
  useEffect(() => {
    const handler = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const y = Math.min(scrolled * 0.5, 200);
      heroRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // -- IntersectionObserver: fade-slide --
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          } else {
            entry.target.classList.remove(styles.inView);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.2,
      }
    );

    const els = document.querySelectorAll(`.${styles.fadeSlide}`);
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  // Pick first image for hero
  const heroImage = media.find((m) => m.type === "image");
  // Filter gallery to skip hero if only one image
  const galleryItems =
    media.length === 1 && heroImage
      ? media.filter((m) => m !== heroImage)
      : media;

  return (
    <div className={styles.pdRoot}>
      {/* ===== Hero Section =====*/}
      {heroImage && (
        <div className={styles.pdHeroWrap}>
          <img
            ref={heroRef}
            src={heroImage.src}
            alt={heroImage.alt || "Project hero image"}
            className={styles.pdHeroImage}
          />
        </div>
      )}
      <div className={`${styles.pdContent} container`}>
        {/* Title block */}
        <div className={`${styles.pdTitleBlock} ${styles.fadeSlide}`}>
          <h1 className={styles.pdTitle}>{title}</h1>
          {cite && <p className={styles.pdCite}>{cite}</p>}
        </div>
        {/* Content Sections */}
        {sections.map((sec, i) => (
          <div key={i} className={styles.fadeSlide}>
            <h2 className={styles.pdSectionHeading}>{sec.heading}</h2>
            {sec.type === "markdown" && (
              <div className={styles.pdText}>
                <Markdown>{sec.content}</Markdown>
              </div>
            )}
            {sec.type === "list" && (
              <ul className={styles.pdList}>
                {sec.items.map((item, idx) => (
                  <li key={idx}>
                    <Markdown>{item}</Markdown>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {/* Media Gallery */}
        {galleryItems.length > 0 && (
          <div className={styles.pdGallery}>
            {galleryItems.map((m, idx) =>
              m.type === "video" ? (
                <video key={idx} controls className={styles.pdVideo}>
                  <source src={m.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <figure key={idx} className={styles.pdFigure}>
                  <img src={m.src} alt={m.alt} className={styles.pdFigureImg} />
                  {m.caption && (
                    <figcaption className={styles.pdFigureCap}>
                      {m.caption}
                    </figcaption>
                  )}
                </figure>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

ProjectDetail.propTypes = {
  title: PropTypes.string.isRequired,
  cite: PropTypes.string,
  media: PropTypes.array,
  sections: PropTypes.array,
};
