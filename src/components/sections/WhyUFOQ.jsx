import { useState } from "react";
import { motion } from "framer-motion";
import {
  Package, Layers, BookOpen, Headphones, Compass,
  Users, Clock, Target, Zap, GraduationCap,
} from "lucide-react";
import "./WhyUFOQ.css";

const offerings = [
  {
    icon: Package,
    title: "Full Semester Package",
    desc: "Complete access to every course in the semester with a structured learning path built to carry you from the first lecture to the final exam.",
  },
  {
    icon: Layers,
    title: "Half Bundle",
    desc: "A flexible option for students who want part of the semester. Pick the credits you need and build your own focused plan.",
  },
  {
    icon: BookOpen,
    title: "Separate Courses",
    desc: "Choose only the subjects you need. No bundles, no commitments — just the exact courses that matter to you right now.",
  },
  {
    icon: Headphones,
    title: "1:1 Private Sessions",
    desc: "Personal, one-on-one support when you need direct guidance. Book hours with expert instructors on the topics you find hardest.",
  },
  {
    icon: Compass,
    title: "Full Academic Roadmap",
    desc: "A complete plan from the start of the semester to the final exam. Know exactly what to study, when, and how — no guesswork.",
  },
  {
    icon: Users,
    title: "Weekly Online Sessions",
    desc: "Live problem-solving and question sessions with fellow students. Real-time support that keeps you on track every week.",
  },
  {
    icon: Target,
    title: "Community of Committed Learners",
    desc: "A focused student environment built for serious progress. Connect, share, and grow alongside peers who take their education seriously.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    desc: "Learn at a pace that fits your time. All content is available on demand, so you study when it works for you — not the other way around.",
  },
  {
    icon: Zap,
    title: "Structured Support",
    desc: "Organized help that keeps students from getting lost. Every resource is sequenced, every path is clear, and every question has a place.",
  },
  {
    icon: GraduationCap,
    title: "Course-by-Course Choice",
    desc: "Mix and match individual courses across semesters. Build a custom plan that matches your goals without paying for what you don't need.",
  },
  {
    icon: Target,
    title: "Practical Help & Guidance",
    desc: "Not just theory. Real assignments, real projects, and real exam preparation — the kind of support that turns knowledge into results.",
  },
];

export default function WhyUFOQ() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="why-section">
      <div className="why-glow-orb why-glow-1" />
      <div className="why-glow-orb why-glow-2" />
      <div className="why-glow-orb why-glow-3" />

      <div className="why-container">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="why-tag">What We Offer</span>
          <h2 className="why-title">
            Everything You Need to <span className="why-title-accent">Succeed</span>
          </h2>
          <p className="why-desc">
            From structured packages to 1:1 mentoring, UFOQ Academy is the complete
            academic support system built for university students who want real results.
          </p>
          <div className="why-stats">
            <div className="why-stat">
              <span className="why-stat-num">400+</span>
              <span className="why-stat-label">Students</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat">
              <span className="why-stat-num">40+</span>
              <span className="why-stat-label">Courses</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat">
              <span className="why-stat-num">90%</span>
              <span className="why-stat-label">Success</span>
            </div>
          </div>
        </motion.div>

        <div
          className="why-scroll-col"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="why-scroll-fade-top" />
          <div className={`why-scroll-track ${hovered ? "paused" : ""}`}>
            <div className="why-scroll-inner">
              {[...offerings, ...offerings].map((r, i) => (
                <div key={i} className="why-scroll-item">
                  <div className="why-scroll-icon">
                    <r.icon size={20} />
                  </div>
                  <div className="why-scroll-text">
                    <span className="why-scroll-title">{r.title}</span>
                    <span className="why-scroll-desc">{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-scroll-fade-bottom" />
        </div>
      </div>
    </section>
  );
}
