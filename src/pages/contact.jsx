import React from "react";
import Body from "../components/Body";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <Body title="Whether it’s a project, idea, or just to say hi—reach out!">
      <div id="contact" className="contact-container">
            <div className="name">Pearlynne</div>
            <p>contact@pearlynne.dev</p>

          <div className="social-icons">
            <a href="mailto:contact@pearlynne.dev">
              <FaEnvelope className="contact-icon" />
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
    </Body>
  );
}

export default Contact;
