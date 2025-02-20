import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="contact-container">
        <h2>Contact me</h2>

      <div className="contact-links">
        <a href="mailto:your.email@example.com">
          <FaEnvelope className="contact-icon" />{" "}
        </a>
        <a
          href="https://linkedin.com/in/pearlynne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
        </a>

        <a
          href="https://github.com/pearlynne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
