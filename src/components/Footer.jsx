import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2025 Alishba Qureshi. All rights reserved.</p>
      <div className="footer-links flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/Alishba-SE"
          className="icon-link text-2xl hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alishba-qureshi-8b8baa2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="icon-link text-2xl hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
