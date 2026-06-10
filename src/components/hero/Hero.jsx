import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Play, Users, BookOpen, Award, Sparkles,
  ChevronRight, GraduationCap, Compass, Code, Lightbulb
} from "lucide-react";
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
        <div className="hero-gradient-orb hero-orb-purple" />
        <div className="hero-gradient-orb hero-orb-blue" />
        <div className="hero-gradient-orb hero-orb-violet" />
        <div className="hero-gradient-orb hero-orb-deep" />
        <div className="hero-aurora" />
        <div className="hero-grid-pattern" />
        <div className="hero-noise-overlay" />
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
            Discover Your
            <br />
            <span className="hero-title-gradient">Academic Path</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            UFOQ Academy maps your university journey with structured courses,
            expert mentors, and a clear path from where you are to where you
            want to be.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/academics">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Find Your Path
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="secondary" size="lg" icon={Play}>
                View Packages
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="hero-price-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.62 }}
          >
            <div className="hero-price-left">
              <span className="hero-price-badge">Full Package</span>
              <div className="hero-price-amount">
                <span className="hero-price-dollar">$</span>
                <span className="hero-price-num">99</span>
              </div>
              <span className="hero-price-detail">All courses · Lifetime access</span>
            </div>
            <Link to="/packages" className="hero-price-cta">
              Get Started
              <ChevronRight size={16} />
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
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-edu-scene">
            {/* Central compass / guide icon */}
            <div className="edu-compass">
              <div className="edu-compass-ring edu-ring-outer" />
              <div className="edu-compass-ring edu-ring-middle" />
              <div className="edu-compass-ring edu-ring-inner" />
              <div className="edu-compass-core">
                <div className="edu-compass-inner-glow" />
                <Compass size={28} style={{ transform: "rotate(45deg)" }} />
              </div>
              <div className="edu-compass-pulse" />
              <div className="edu-compass-pulse edu-compass-pulse-2" />
            </div>

            {/* Orbital rings around the scene */}
            <div className="edu-orbit edu-orbit-1" />
            <div className="edu-orbit edu-orbit-2" />

            {/* The winding academic path */}
            <svg className="edu-path-svg" viewBox="0 0 400 500" fill="none">
              <defs>
                <linearGradient id="pathGrad" x1="200" y1="0" x2="200" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.3" />
                </linearGradient>
                <filter id="pathGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M200 40 C260 100, 140 160, 200 220 C260 280, 140 340, 200 400"
                stroke="url(#pathGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#pathGlow)"
                className="edu-path-line"
              />
              {/* Milestone dots — calculated on the bezier path */}
              <circle cx="200" cy="40" r="6" fill="#8b5cf6" className="edu-dot edu-dot-1" />
              <circle cx="200" cy="130" r="5" fill="#a78bfa" className="edu-dot edu-dot-2" />
              <circle cx="200" cy="310" r="5" fill="#c4b5fd" className="edu-dot edu-dot-3" />
              <circle cx="200" cy="400" r="7" fill="#34d399" className="edu-dot edu-dot-4" />
            </svg>

            {/* Floating academic icons along the path */}
            <div className="edu-float edu-float-1">
              <div className="edu-float-icon">
                <BookOpen size={18} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Start Here</span>
                <span className="edu-float-sub">Foundation</span>
              </div>
            </div>

            <div className="edu-float edu-float-2">
              <div className="edu-float-icon edu-float-icon-blue">
                <Code size={18} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Learn & Build</span>
                <span className="edu-float-sub">Core Skills</span>
              </div>
            </div>

            <div className="edu-float edu-float-3">
              <div className="edu-float-icon edu-float-icon-violet">
                <Lightbulb size={18} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Level Up</span>
                <span className="edu-float-sub">Advanced</span>
              </div>
            </div>

            <div className="edu-float edu-float-4">
              <div className="edu-float-icon edu-float-icon-green">
                <GraduationCap size={18} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Graduate</span>
                <span className="edu-float-sub">Achievement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
