import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
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
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="hero-badge-dot" />
            Academic Year 2025-2026 Open
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Master Your
            <span className="hero-title-gradient"> Academic Journey</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Premium courses designed for university students. From Computer Science
            to advanced specializations, we provide structured learning paths that
            accelerate your academic excellence.
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
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div className="hero-stat-icon">
                  <stat.icon size={20} />
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
          <div className="hero-3d-card">
            <div className="hero-3d-inner">
              <div className="hero-3d-icon">
                <BookOpen size={48} />
              </div>
              <div className="hero-3d-lines">
                <div className="hero-3d-line" />
                <div className="hero-3d-line hero-3d-line-short" />
                <div className="hero-3d-line hero-3d-line-medium" />
              </div>
            </div>
            <div className="hero-floating-card hero-floating-1">
              <Award size={16} />
              <span>Certified Learning</span>
            </div>
            <div className="hero-floating-card hero-floating-2">
              <Users size={16} />
              <span>Live Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
