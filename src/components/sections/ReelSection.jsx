import { BookOpen, FileText, Brain, Target, Headphones, GraduationCap } from "lucide-react";
import "./ReelSection.css";

const services = [
  { num: "01", name: "Structured Courses", tag: "Semester Ready", icon: BookOpen },
  { num: "02", name: "Study Summaries", tag: "Concise Notes", icon: FileText },
  { num: "03", name: "Past Exam Solving", tag: "Real Practice", icon: Brain },
  { num: "04", name: "Project Guidance", tag: "Hands-On Help", icon: Target },
  { num: "05", name: "1:1 Sessions", tag: "Personal Mentor", icon: Headphones },
  { num: "06", name: "Career Mapping", tag: "Your Path", icon: GraduationCap },
];

export default function ReelSection() {
  return (
    <section className="reel-section">
      <div className="reel-bg-gradient" />
      <div className="reel-container">
        <div className="reel-header">
          <span className="reel-label">What We Offer</span>
          <h2 className="reel-title">Everything You Need to <span className="reel-title-accent">Succeed</span></h2>
        </div>
        <div className="reel-track-wrapper">
          <div className="reel-track">
            {[...services, ...services].map((s, i) => (
              <div key={i} className="reel-item">
                <span className="reel-num">{s.num}</span>
                <div className="reel-icon-wrap">
                  <s.icon size={18} />
                </div>
                <span className="reel-name">{s.name}</span>
                <span className="reel-divider" />
                <span className="reel-tag">{s.tag}</span>
                <span className="reel-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
