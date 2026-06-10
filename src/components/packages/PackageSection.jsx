import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Package,
  Layers,
  ShoppingCart,
  Users,
  Minus,
  Plus,
} from "lucide-react";
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
  const [selectedHours, setSelectedHours] = useState(1);

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
            From full bundles to single sessions — pick what fits your needs and budget.
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

                {pkg.id === "private-sessions" ? (
                  <div className="package-hours">
                    <div className="package-pricing-single">
                      <span className="package-currency">{pkg.currency}</span>
                      <span className="package-price">{pkg.price}</span>
                      <span className="package-period">/{pkg.period}</span>
                    </div>

                    <div className="hours-selector">
                      <button
                        className="hours-btn"
                        onClick={() => setSelectedHours(Math.max(1, selectedHours - 1))}
                        aria-label="Decrease hours"
                      >
                        <Minus size={16} />
                      </button>
                      <div className="hours-display">
                        <span className="hours-number">{selectedHours}</span>
                        <span className="hours-label">hour{selectedHours !== 1 ? "s" : ""}</span>
                      </div>
                      <button
                        className="hours-btn"
                        onClick={() => setSelectedHours(Math.min(20, selectedHours + 1))}
                        aria-label="Increase hours"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="hours-total">
                      <span className="hours-total-label">Total</span>
                      <span className="hours-total-price">
                        ${pkg.price * selectedHours}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="package-pricing">
                    {pkg.price !== null ? (
                      <>
                        <span className="package-currency">{pkg.currency}</span>
                        <span className="package-price">{pkg.price}</span>
                        <span className="package-original">
                          {pkg.currency}{pkg.originalPrice}
                        </span>
                        <span className="package-period">/{pkg.period}</span>
                      </>
                    ) : (
                      <div className="package-pricing-range">
                        <span className="package-range-text">{pkg.priceRange}</span>
                        <span className="package-period">/{pkg.period}</span>
                      </div>
                    )}
                  </div>
                )}

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
                >
                  {pkg.id === "private-sessions"
                    ? `Book ${selectedHours} Session${selectedHours !== 1 ? "s" : ""}`
                    : pkg.id === "separate"
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
