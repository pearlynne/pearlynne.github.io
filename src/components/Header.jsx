import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">pearlynne</Link>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/consulting" onClick={handleLinkClick}>Consulting</Link>
        <Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
        <Link to="/publications" onClick={handleLinkClick}>Publications</Link>
        <span className={styles.contact}>
					<Link to="/contact" onClick={handleLinkClick}>Get in touch</Link>
				</span>
      </nav>

      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Menu">
        <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></span>
      </button>
    </header>
  );
}

export default Header;
