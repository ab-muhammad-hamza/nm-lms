import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Lemida. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://github.com/ab-muhammad-hamza/" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
