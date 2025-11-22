import Resources from "../components/Resources.jsx";
import { useEffect } from "react";
import styles from "../styles/publicResources.module.css";

function PublicResources() {
  useEffect(() => {
    // run fitvids after component mounts
    if (window.fitvids) {
      window.fitvids(".shareagain", { players: "iframe" });
    }
  }, []);

  return (
    <>

      <main className={styles.snapContainer}>
        <section
          className={styles.shareAgain} 
        >
          <h2 className={styles.title}>Introduction to Data & Stats in Research</h2>
<p className={styles.summary}>
  Part of a workshop for research assistants and students at MSU Autism Lab, providing an introduction to Exploratory Data Analysis and Descriptive Statistics using both a Kaggle dataset and a custom-generated dataset.
</p>
          <iframe src="IntroDataResearch_PublicResources.html"  loading="lazy" allowfullscreen></iframe>
        </section>
      </main>
    </>
  );
}
export default PublicResources;
