import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, Star, Package, Layers, ShoppingCart, Users } from "lucide-react";
import { packages } from "../../data/packages";
import Button from "../ui/Button";
import "./PackageSection.css";

const iconMap = {
  full: Package,
  half: Layers,
  separate: ShoppingCart,
  private: Users,
};

export default function PackageSection() {
  const navigate = useNavigate();

  const handlePackageClick = (pkgId) => {
    if (pkgId === "full-bundle") {
      navigate("/academics?bundle=full");
    } else if (pkgId === "half-bundle") {
      navigate("/academics?bundle=half");
    } else {
      navigate("/academics");
    }
  };
  return (
    <section className="package-section">
      <div className="pkg-orb-1" />
      <div className="pkg-orb-2" />

      <div className="package-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Packages</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="section-description">
            From full bundles to private tutoring — pick what fits your needs and budget.
          </p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => {
            const Icon = iconMap[pkg.icon] || Package;

            return (
              <motion.div
                key={pkg.id}
                className={`package-card ${pkg.highlighted ? "package-card-featured" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {pkg.badge && (
                  <div className="package-badge">
                    <Star size={14} />
                    {pkg.badge}
                  </div>
                )}

                <div className="package-header">
                  <div className="package-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-subtitle">{pkg.subtitle}</p>
                </div>

                <div className="package-pricing">
                  {pkg.price !== null ? (
                    <>
                      <span className="package-currency">{pkg.currency}</span>
                      <span className="package-price">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="package-original">
                          {pkg.currency}{pkg.originalPrice}
                        </span>
                      )}
                      <span className="package-period">/{pkg.period}</span>
                    </>
                  ) : (
                    <div className="package-pricing-range">
                      <span className="package-range-text">{pkg.priceRange}</span>
                      <span className="package-period">/{pkg.period}</span>
                    </div>
                  )}
                </div>

                {pkg.originalPrice && (
                  <div className="package-discount">
                    Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                  </div>
                )}

                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="package-feature">
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.highlighted ? "primary" : "outline"}
                  fullWidth
                  size="lg"
                  onClick={() => handlePackageClick(pkg.id)}
                >
                  {pkg.id === "separate"
                    ? "Browse Courses"
                    : `Get ${pkg.name}`}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
