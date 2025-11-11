import React from "react";
import styles from "../styles/contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.snapContainer}>
        {/* ===== Contact =====*/}
        <section className={styles.contact}>
          <h1 className={styles.title}>Let's chat</h1>
          <p className={styles.subtitle}>
            Got a project or have a question? Just drop me an email! I am
            available for new projects and interesting opportunities.
          </p>
          <p>
            <a href="mailto:contact@pearlynne.dev">contact@pearlynne.dev</a>
          </p>
        </section>
      </div>
    </>
  );
}

export default Contact;
