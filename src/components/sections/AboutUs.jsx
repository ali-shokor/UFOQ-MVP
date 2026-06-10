import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">About UFOQ</span>
            <h2 className="section-title about-title">
              Empowering Students to <span className="gradient-text">Achieve More</span>
            </h2>
            <p className="about-text">
              UFOQ Academy was founded with a simple belief: every university
              student deserves access to structured, high-quality academic support —
              regardless of their background or resources.
            </p>
            <p className="about-text">
              We started with Computer Science because we saw the greatest need
              there. Our mission is to expand across every major, building a
              comprehensive academic platform that grows with our students.
            </p>

            <div className="about-values">
              <div className="about-value">
                <div className="about-value-icon">
                  <Target size={20} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>Provide every student with the structured learning path they need to succeed academically and professionally.</p>
                </div>
              </div>
              <div className="about-value">
                <div className="about-value-icon about-value-icon-purple">
                  <Eye size={20} />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>Become the leading academic platform for university students across North Africa and beyond.</p>
                </div>
              </div>
              <div className="about-value">
                <div className="about-value-icon about-value-icon-violet">
                  <Heart size={20} />
                </div>
                <div>
                  <h4>Our Promise</h4>
                  <p>Quality content, genuine support, and a commitment to student success — always.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="about-card about-card-main">
              <div className="about-card-number">400+</div>
              <div className="about-card-label">Students Trust Us</div>
            </div>
            <div className="about-card about-card-secondary">
              <div className="about-card-number">90%</div>
              <div className="about-card-label">Pass Rate</div>
            </div>
            <div className="about-card about-card-tertiary">
              <div className="about-card-number">50+</div>
              <div className="about-card-label">Expert-Led Courses</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
