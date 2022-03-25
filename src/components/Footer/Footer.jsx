import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
export const Footer = () => {
  return (
    <section id="footer">
      <header>
        Made with <FaHeart className="text-secondary" /> by&nbsp;
        <span className="highlight">Vinit Kanse</span>
      </header>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/vinit-kanse-96838b184/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/vinc3nati" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="copyright text-light">
        &copy; 2022 - 2023 &nbsp;
        <span className="highlight text-bold">Shinobi Notes</span>
      </div>
    </section>
  );
};
