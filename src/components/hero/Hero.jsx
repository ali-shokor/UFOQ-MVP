import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, BookOpen, Award, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import "./Hero.css";

const stats = [
  { icon: Users, value: "500+", label: "Active Students" },
  { icon: BookOpen, value: "50+", label: "Expert-Led Courses" },
  { icon: Award, value: "95%", label: "Success Rate" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-gradient-3" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles size={14} />
            <span>Academic Year 2025-2026 Now Open</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Master Your
            <br />
            <span className="hero-title-gradient">Academic Journey</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            UFOQ Academy provides structured, expert-led courses for university
            students. From Computer Science fundamentals to advanced
            specializations — everything you need to excel, in one place.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/academics">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Explore Programs
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="secondary" size="lg" icon={Play}>
                View Packages
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="hero-price-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="hero-price-content">
              <span className="hero-price-label">Full Package</span>
              <div className="hero-price-amount">
                <span className="hero-price-currency">$</span>
                <span className="hero-price-value">99</span>
              </div>
              <span className="hero-price-note">All courses · Lifetime access</span>
            </div>
            <Link to="/packages" className="hero-price-link">
              Get Started <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div className="hero-stat-icon">
                  <stat.icon size={18} />
                </div>
                <div className="hero-stat-info">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero-3d-scene">
            <div className="hero-card-stack">
              <div className="hero-float-card hero-float-1">
                <div className="hero-float-icon">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div className="hero-float-title">8 Courses</div>
                  <div className="hero-float-sub">Semester 1 · Year 2</div>
                </div>
              </div>

              <div className="hero-float-card hero-float-2">
                <div className="hero-float-icon hero-float-icon-green">
                  <Award size={20} />
                </div>
                <div>
                  <div className="hero-float-title">Certificate</div>
                  <div className="hero-float-sub">On completion</div>
                </div>
              </div>

              <div className="hero-float-card hero-float-3">
                <div className="hero-float-icon hero-float-icon-amber">
                  <Users size={20} />
                </div>
                <div>
                  <div className="hero-float-title">Live Support</div>
                  <div className="hero-float-sub">Chat with mentors</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
