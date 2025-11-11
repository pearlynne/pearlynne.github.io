import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.subheader}><a href="mailto:contact@pearlynne.dev?subject=I need help">get in touch →</a></div>
        </div>
        <div className={styles.right}>
          <div className={styles.icons}>
            <a href="mailto:contact@pearlynne.dev">Email</a>
						<div>●</div>
            <a
              href="https://linkedin.com/in/pearlynne"
              target="_blank"
              rel="noopener noreferrer"
            > LinkedIn
            </a>
						<div>●</div>
            <a
              href="https://github.com/pearlynne"
              target="_blank"
              rel="noopener noreferrer"
            >github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Pearlynne — All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
