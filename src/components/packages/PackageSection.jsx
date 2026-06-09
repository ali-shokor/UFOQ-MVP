import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { packages } from "../../data/packages";
import Button from "../ui/Button";
import "./PackageSection.css";

export default function PackageSection() {
  return (
    <section className="package-section">
      <div className="package-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Special Offers</span>
          <h2 className="section-title">
            Invest in Your <span className="gradient-text">Academic Future</span>
          </h2>
          <p className="section-description">
            Get access to all courses at an unbeatable price. Limited time offer for
            ambitious students.
          </p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
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
                  <Zap size={24} />
                </div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>
              </div>

              <div className="package-pricing">
                <span className="package-currency">{pkg.currency}</span>
                <span className="package-price">{pkg.price}</span>
                <span className="package-original">{pkg.currency}{pkg.originalPrice}</span>
                <span className="package-period">/{pkg.period}</span>
              </div>

              <div className="package-discount">
                Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
              </div>

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
              >
                Get {pkg.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
