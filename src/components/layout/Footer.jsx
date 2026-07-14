import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

import "./Footer.css";

const footerLinks = {
  company: [
    { label: "About Us", to: "#" },
    { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
    { label: "Careers", to: "#" },
  ],
  support: [
    { label: "YouTube", to: "https://www.youtube.com/@AliShokor01", external: true },
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],
  programs: [
    { label: "Computer Science", to: "/academics" },
  ],
};

export default function Footer() {
  const { theme } = useTheme();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}${theme === "dark" ? "logo-dark.svg" : "logo-white.svg"}`} alt="IMKAN Academy logo" className="footer-logo-icon-img" />
              <span className="footer-logo-text">IMKAN Academy</span>
            </Link>
            <p className="footer-tagline">
              Empowering university students with world-class education and
              structured academic support.
            </p>
            <div className="footer-contact">
              <a href="mailto:imkanacademy@gmail.com" className="footer-contact-item">
                <Mail size={16} />
                imkanacademy@gmail.com
              </a>
              <a href="tel:+96178957" className="footer-contact-item">
                <Phone size={16} />
                 +961 78 957 416
              </a>
              <a href="https://www.instagram.com/imkanacademy" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @imkanacademy
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} />
                Lebanon
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <h4
              className="footer-links-title"
              onClick={() => toggleSection("company")}
            >
              <span>Company</span>
              <ChevronDown size={16} className="footer-chevron" />
            </h4>
            <ul className={`footer-links ${openSection === "company" ? "footer-links-open" : ""}`}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4
              className="footer-links-title"
              onClick={() => toggleSection("support")}
            >
              <span>Support</span>
              <ChevronDown size={16} className="footer-chevron" />
            </h4>
            <ul className={`footer-links ${openSection === "support" ? "footer-links-open" : ""}`}>
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.to} className="footer-link" target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4
              className="footer-links-title"
              onClick={() => toggleSection("programs")}
            >
              <span>Programs</span>
              <ChevronDown size={16} className="footer-chevron" />
            </h4>
            <ul className={`footer-links ${openSection === "programs" ? "footer-links-open" : ""}`}>
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} IMKAN Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
