import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
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
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={24} />
              </div>
              <span className="footer-logo-text">UFOQ Academy</span>
            </Link>
            <p className="footer-tagline">
              Empowering university students with world-class education and
              structured academic support.
            </p>
            <div className="footer-contact">
              <a href="mailto:ali.shokor.dev@gmail.com" className="footer-contact-item">
                <Mail size={16} />
                ali.shokor.dev@gmail.com
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
            <h4 className="footer-links-title">Programs</h4>
            <ul className="footer-links">
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
            <h4 className="footer-links-title">Company</h4>
            <ul className="footer-links">
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
            <h4 className="footer-links-title">Support</h4>
            <ul className="footer-links">
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
            &copy; {new Date().getFullYear()} UFOQ Academy. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
