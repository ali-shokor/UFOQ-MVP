import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

import "./Footer.css";

const footerLinks = {
  programs: [
    { label: "Computer Science", to: "/academics" },
    { label: "Physics", to: "#" },
    { label: "Mathematics", to: "#" },
    { label: "Electronics", to: "#" },
  ],
  company: [
    { label: "About Us", to: "#" },
    { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
    { label: "Careers", to: "#" },
  ],
  support: [
    { label: "Help Center", to: "#" },
    { label: "Student Portal", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Privacy Policy", to: "#" },
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
              <img src={theme === "dark" ? "public/logo-dark.svg" : "public/logo-white.svg"} alt="IMKAN Academy logo" className="footer-logo-icon-img" />
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
              <div className="footer-contact-item">
                <MapPin size={16} />
                Lebanon
              </div>
            </div>
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
