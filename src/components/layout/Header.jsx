import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/academics", label: "Academics" },
  { path: "/packages", label: "Packages" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { courseCount, toggleCart, totalPrice, isBundleActive } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleEnroll = () => {
    navigate(courseCount > 0 ? "/contact" : "/academics");
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div className="header-inner">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <GraduationCap size={24} />
          </div>
          <span className="logo-text">UFOQ</span>
          <span className="logo-badge">Academy</span>
        </Link>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "nav-link-active" : ""}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div className="nav-indicator" layoutId="nav-indicator" />
              )}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <motion.button
            className="cart-btn"
            onClick={toggleCart}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={20} />
            {courseCount > 0 && (
              <motion.span
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                {courseCount}
              </motion.span>
            )}
          </motion.button>

          {courseCount > 0 && (
            <span className="header-price-tag">
              {isBundleActive ? "$99" : `$${totalPrice}`}
            </span>
          )}

          <button onClick={handleEnroll} className="header-enroll-btn">
            <span>Enroll Now</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="mobile-nav">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${location.pathname === link.path ? "mobile-nav-link-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button onClick={handleEnroll} className="mobile-enroll-btn">
                  <span>Enroll Now</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
