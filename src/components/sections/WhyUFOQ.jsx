import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers, GraduationCap, MessageCircle, Rocket, Shield,
  BookOpen, FileText, Brain, Target, Headphones, Compass,
  Play, Clock, Award, Users, Zap
} from "lucide-react";
import "./WhyUFOQ.css";

const reasons = [
  { icon: Layers, title: "Structured Courses", desc: "Semester-ready curriculum" },
  { icon: FileText, title: "Study Summaries", desc: "Concise, exam-focused notes" },
  { icon: Brain, title: "Past Exam Solving", desc: "Real practice, real results" },
  { icon: Target, title: "Project Guidance", desc: "Hands-on mentorship" },
  { icon: Headphones, title: "1:1 Sessions", desc: "Personal expert support" },
  { icon: GraduationCap, title: "Career Mapping", desc: "Your path to success" },
  { icon: Play, title: "Video Lectures", desc: "Learn at your pace" },
  { icon: Clock, title: "Flexible Schedule", desc: "Study anytime" },
  { icon: Award, title: "Certified Content", desc: "Quality guaranteed" },
  { icon: Users, title: "Student Community", desc: "Learn together" },
  { icon: Zap, title: "Quick Revisions", desc: "Last-minute prep" },
  { icon: Compass, title: "Full Roadmap", desc: "Year-long guidance" },
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
          <span className="why-tag">Why UFOQ</span>
          <h2 className="why-title">
            Everything You Need to <span className="why-title-accent">Succeed</span>
          </h2>
          <p className="why-desc">
            From structured courses to 1:1 mentoring, we built the complete academic
            support system. Not just content — a real path to your degree.
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
              {[...reasons, ...reasons].map((r, i) => (
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
