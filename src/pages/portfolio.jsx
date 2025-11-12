import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/portfolio.module.css";
import { media, projectsMeta } from "@/assets/media";

const Portfolio = () => {
  // ------ Data prep for two sections ------
  const dataProjects = Object.entries(projectsMeta)
    .filter(([id, p]) => p.type === "data")
    .map(([id, p]) => ({ id, title: p.title }));

  const seProjects = Object.entries(projectsMeta)
    .filter(([id, p]) => p.type === "software")
    .map(([id, p]) => ({ id, title: p.title }));

  // ------------ Render Cards ------------
  const renderCards = (projects) =>
    projects.map((p) => (
      <Link key={p.id} to={`/projects/${p.id}`} className={styles.card}>
        {/* TEMP: Using media[p.id][0] for now - update to dynamically fetch first image (type === "image")  */}
        <img src={media[p.id][0]} alt={p.title} className={styles.cardImage} />
        <div className={styles.cardOverlay}>{p.title}</div>
      </Link>
    ));

  return (
    <>
      <div className={styles.portfolioRoot}>
        {/* ===== Data Projects Section ===== */}
        <div className={styles.projects}>
          <div className={styles.leftHalf}>
            <h2 className={styles.projectsTitle}>Data</h2>
          </div>
          <div className={styles.rightHalf}>
            <div className={styles.carousel}>{renderCards(dataProjects)}</div>
          </div>
        </div>

        {/* ===== Software Projects Section ===== */}
        <div className={styles.projects}>
          <div className={styles.leftHalf}>
            <h2 className={styles.projectsTitle}>Software</h2>
          </div>
          <div className={styles.rightHalf}>
            <div className={styles.carousel}>{renderCards(seProjects)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
