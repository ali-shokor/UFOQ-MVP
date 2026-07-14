import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Play, Sparkles,
  ChevronRight, GraduationCap, Code, Lightbulb, Rocket, BookOpen,
  Users, Target, Clock
} from "lucide-react";
import Button from "../ui/Button";
import "./Hero.css";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient-orb hero-orb-purple" />
        <div className="hero-gradient-orb hero-orb-blue" />
        <div className="hero-gradient-orb hero-orb-violet" />
        <div className="hero-gradient-orb hero-orb-deep" />
        <div className="hero-aurora" />
        <div className="hero-3d-plane" />
        <div className="hero-grid-pattern" />
        <div className="hero-noise-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {isMobile ? (
            <>
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles size={13} />
                <span>Academic Year 2026–2027 Now Open</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Your University Journey,{' '}
                <span className="hero-title-gradient">Clearly Guided</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Structured courses, expert mentors, and a supportive learning
                community — everything you need to study with clarity and
                confidence.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link to="/academics" className="hero-cta-primary">
                  <span>Explore Your Year</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/packages" className="hero-cta-secondary">
                  <span>View Packages</span>
                </Link>
              </motion.div>

              <motion.div
                className="hero-trust-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <BookOpen size={16} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Structured Courses</span>
                    <span className="hero-trust-sub">Semester-long paths</span>
                  </div>
                </div>
                <div className="hero-trust-divider" />
                <div className="hero-trust-item">
                  <div className="hero-trust-icon hero-trust-icon-teal">
                    <Users size={16} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Expert Mentors</span>
                    <span className="hero-trust-sub">1:1 guidance available</span>
                  </div>
                </div>
                <div className="hero-trust-divider" />
                <div className="hero-trust-item">
                  <div className="hero-trust-icon hero-trust-icon-amber">
                    <Target size={16} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Flexible Plans</span>
                    <span className="hero-trust-sub">From $119/semester</span>
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles size={14} />
                <span>Academic Year 2026-2027 Now Open</span>
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
                IMKAN Academy maps your university journey with structured courses,
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
                  <span className="hero-price-badge">Complete Semester Package</span>
                  <div className="hero-price-amount">
                    <span className="hero-price-dollar">$</span>
                    <span className="hero-price-num">119</span>
                  </div>
                  <span className="hero-price-detail">All courses · Lifetime access</span>
                </div>
                <Link to="/packages" className="hero-price-cta">
                  Get Started
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </>
          )}
        </div>

        {!isMobile && (
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
          <div className="hero-edu-scene">

            {/* The zigzag success path — bottom-left to top-right */}
            <svg className="edu-path-svg" viewBox="0 0 420 460" fill="none">
              <defs>
                <linearGradient id="pathGrad" x1="40" y1="420" x2="380" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0.5" />
                  <stop offset="40%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0.7" />
                  <stop offset="70%" style={{ stopColor: "var(--svg-mid)" }} stopOpacity="0.8" />
                  <stop offset="100%" style={{ stopColor: "var(--svg-end)" }} stopOpacity="1" />
                </linearGradient>
                <linearGradient id="pathGlowGrad" x1="40" y1="420" x2="380" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0" />
                  <stop offset="50%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0.25" />
                  <stop offset="100%" style={{ stopColor: "var(--svg-end)" }} stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="flowGrad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0">
                    <animate attributeName="offset" values="-0.3;1" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="10%" style={{ stopColor: "var(--svg-start)" }} stopOpacity="0.8">
                    <animate attributeName="offset" values="-0.2;1" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="20%" style={{ stopColor: "var(--svg-end)" }} stopOpacity="0">
                    <animate attributeName="offset" values="-0.1;1" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                <filter id="pathGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="dotGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="bigGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="particleGlow">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="sparkleGlow">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Glow trail behind the path */}
              <path
                d="M60 400 C100 400, 90 340, 130 320 C170 300, 160 250, 200 230 C240 210, 230 160, 270 140 C310 120, 300 70, 360 40"
                stroke="url(#pathGlowGrad)" strokeWidth="12" strokeLinecap="round"
                filter="url(#pathGlow)" opacity="0.5" className="edu-path-glow"
              />

              {/* Main zigzag path */}
              <path
                d="M60 400 C100 400, 90 340, 130 320 C170 300, 160 250, 200 230 C240 210, 230 160, 270 140 C310 120, 300 70, 360 40"
                stroke="url(#pathGrad)" strokeWidth="3" strokeLinecap="round"
                filter="url(#pathGlow)" className="edu-path-line"
              />

              {/* Flowing light that travels up the path */}
              <path
                d="M60 400 C100 400, 90 340, 130 320 C170 300, 160 250, 200 230 C240 210, 230 160, 270 140 C310 120, 300 70, 360 40"
                stroke="url(#flowGrad)" strokeWidth="3" strokeLinecap="round"
                className="edu-path-flow"
              />

              {/* Hidden path for particle animation */}
              <path id="particlePath" d="M60 400 C100 400, 90 340, 130 320 C170 300, 160 250, 200 230 C240 210, 230 160, 270 140 C310 120, 300 70, 360 40" fill="none" stroke="none" />

              {/* === PARTICLES — 6 flowing upward at different speeds === */}
              <circle r="2.5" style={{ fill: "var(--svg-start)" }} filter="url(#particleGlow)" className="edu-particle edu-p1">
                <animateMotion dur="2.8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>
              <circle r="2" style={{ fill: "var(--svg-mid)" }} filter="url(#particleGlow)" className="edu-particle edu-p2">
                <animateMotion dur="3.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>
              <circle r="1.8" style={{ fill: "var(--svg-mid)" }} filter="url(#particleGlow)" className="edu-particle edu-p3">
                <animateMotion dur="2.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>
              <circle r="2" style={{ fill: "var(--svg-mid)" }} filter="url(#particleGlow)" className="edu-particle edu-p4">
                <animateMotion dur="3.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>
              <circle r="1.5" style={{ fill: "var(--svg-end)" }} filter="url(#particleGlow)" className="edu-particle edu-p5">
                <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>
              <circle r="2.2" style={{ fill: "var(--svg-start)" }} filter="url(#particleGlow)" className="edu-particle edu-p6">
                <animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#particlePath" />
                </animateMotion>
              </circle>

              {/* === SPARKLES — small dots that pop in/out along the path === */}
              <circle cx="95" cy="370" r="1.5" style={{ fill: "var(--svg-mid)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-1" />
              <circle cx="160" cy="275" r="1.2" style={{ fill: "var(--svg-mid)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-2" />
              <circle cx="235" cy="185" r="1.5" style={{ fill: "var(--svg-mid)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-3" />
              <circle cx="315" cy="90" r="1.3" style={{ fill: "var(--svg-end)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-4" />
              <circle cx="195" cy="245" r="1" style={{ fill: "var(--svg-mid)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-5" />
              <circle cx="290" cy="115" r="1.2" style={{ fill: "var(--svg-mid)" }} filter="url(#sparkleGlow)" className="edu-sparkle edu-sparkle-6" />

              {/* === FOUNDATION — powerful start burst === */}
              <circle cx="60" cy="400" r="18" fill="none" style={{ stroke: "var(--svg-start)" }} strokeWidth="1" opacity="0" className="edu-start-ring edu-start-ring-1" />
              <circle cx="60" cy="400" r="18" fill="none" style={{ stroke: "var(--svg-start)" }} strokeWidth="0.8" opacity="0" className="edu-start-ring edu-start-ring-2" />
              <circle cx="60" cy="400" r="25" style={{ fill: "var(--svg-start)" }} opacity="0.15" filter="url(#bigGlow)" className="edu-start-burst" />
              <circle cx="60" cy="400" r="7" style={{ fill: "var(--svg-start)" }} filter="url(#bigGlow)" className="edu-dot edu-dot-1" />

              {/* Core Skills dot */}
              <circle cx="130" cy="320" r="5" style={{ fill: "var(--svg-start)" }} filter="url(#dotGlow)" className="edu-dot edu-dot-2" />

              {/* Advanced dot */}
              <circle cx="270" cy="140" r="5" style={{ fill: "var(--svg-mid)" }} filter="url(#dotGlow)" className="edu-dot edu-dot-3" />

              {/* === GRADUATE — powerful end with rays === */}
              <circle cx="360" cy="40" r="20" style={{ fill: "var(--svg-end)" }} opacity="0.1" filter="url(#bigGlow)" className="edu-end-burst" />
              <circle cx="360" cy="40" r="14" fill="none" style={{ stroke: "var(--svg-end)" }} strokeWidth="1.2" opacity="0" className="edu-end-ring edu-end-ring-1" />
              <circle cx="360" cy="40" r="14" fill="none" style={{ stroke: "var(--svg-end)" }} strokeWidth="0.8" opacity="0" className="edu-end-ring edu-end-ring-2" />
              <circle cx="360" cy="40" r="14" fill="none" style={{ stroke: "var(--svg-end)" }} strokeWidth="0.5" opacity="0" className="edu-end-ring edu-end-ring-3" />
              {/* Radiating rays from Graduate */}
              <line x1="360" y1="40" x2="360" y2="8" style={{ stroke: "var(--svg-end)" }} strokeWidth="1.5" strokeLinecap="round" opacity="0" className="edu-ray edu-ray-1" />
              <line x1="360" y1="40" x2="385" y2="18" style={{ stroke: "var(--svg-end)" }} strokeWidth="1.2" strokeLinecap="round" opacity="0" className="edu-ray edu-ray-2" />
              <line x1="360" y1="40" x2="392" y2="40" style={{ stroke: "var(--svg-end)" }} strokeWidth="1" strokeLinecap="round" opacity="0" className="edu-ray edu-ray-3" />
              <line x1="360" y1="40" x2="385" y2="62" style={{ stroke: "var(--svg-end)" }} strokeWidth="1.2" strokeLinecap="round" opacity="0" className="edu-ray edu-ray-4" />
              <line x1="360" y1="40" x2="335" y2="18" style={{ stroke: "var(--svg-end)" }} strokeWidth="1" strokeLinecap="round" opacity="0" className="edu-ray edu-ray-5" />
              <circle cx="360" cy="40" r="8" style={{ fill: "var(--svg-end)" }} filter="url(#bigGlow)" className="edu-dot edu-dot-4" />
            </svg>

            {/* Floating milestone labels — positioned behind dots */}
            <div className="edu-float edu-float-1">
              <div className="edu-float-icon">
                <BookOpen size={16} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Foundation</span>
                <span className="edu-float-sub">Start here</span>
              </div>
            </div>

            <div className="edu-float edu-float-2">
              <div className="edu-float-icon edu-float-icon-blue">
                <Code size={16} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Core Skills</span>
                <span className="edu-float-sub">Learn & build</span>
              </div>
            </div>

            <div className="edu-float edu-float-3">
              <div className="edu-float-icon edu-float-icon-violet">
                <Lightbulb size={16} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Advanced</span>
                <span className="edu-float-sub">Level up</span>
              </div>
            </div>

            <div className="edu-float edu-float-4">
              <div className="edu-float-icon edu-float-icon-green">
                <GraduationCap size={16} />
              </div>
              <div className="edu-float-text">
                <span className="edu-float-label">Graduate</span>
                <span className="edu-float-sub">Success</span>
              </div>
            </div>

            {/* Decorative accent dot at the peak */}
            <div className="edu-peak-glow" />
          </div>
        </motion.div>
        )}
      </div>

      <motion.button
        className="hero-scroll-btn"
        onClick={() => {
          const next = document.querySelector(".hero + section, .problem-solution, main > section:nth-of-type(2)");
          next?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll down"
      >
        <span className="hero-scroll-ring">
          <span className="hero-scroll-mouse">
            <span className="hero-scroll-wheel" />
          </span>
        </span>
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-arrows">
          <span className="hero-scroll-arrow hero-scroll-arrow-1" />
          <span className="hero-scroll-arrow hero-scroll-arrow-2" />
          <span className="hero-scroll-arrow hero-scroll-arrow-3" />
        </span>
      </motion.button>
    </section>
  );
}
