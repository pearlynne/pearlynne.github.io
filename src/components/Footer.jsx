import {FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';  // Make sure to import these icons

const Footer = () => {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Pearlynne</div>
      <div className="footer-icons">
									<a href="mailto:contact@pearlynne.dev">
										<FaEnvelope />
									</a>
        <a
          href="https://linkedin.com/in/pearlynne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/pearlynne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
