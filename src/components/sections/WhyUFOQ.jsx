import { motion } from "framer-motion";
import { Layers, GraduationCap, MessageCircle, Rocket, Shield } from "lucide-react";
import "./WhyUFOQ.css";

const features = [
  {
    icon: Layers,
    title: "Structured Learning",
    description: "Every course follows a clear curriculum aligned with your university syllabus. No more confusion.",
    color: "#7c5cfc",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from experienced educators who understand what students actually need to succeed.",
    color: "#9b7dff",
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Got a question at 2 AM? Our support system is designed to help you whenever you're stuck.",
    color: "#34d399",
  },
  {
    icon: Rocket,
    title: "Future-Ready Skills",
    description: "Courses designed not just for exams, but for real-world applications and career growth.",
    color: "#fbbf24",
  },
  {
    icon: Shield,
    title: "Trusted by Students",
    description: "Hundreds of students already trust UFOQ to guide their academic journey every semester.",
    color: "#f472b6",
  },
];

export default function WhyUFOQ() {
  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Why UFOQ</span>
          <h2 className="section-title">
            Built for Students Who <span className="gradient-text">Want More</span>
          </h2>
          <p className="section-description">
            We didn't just build a course platform. We built the academic support
            system that students actually need.
          </p>
        </motion.div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="why-card-glow" style={{ background: feature.color }} />
              <div className="why-card-icon" style={{ borderColor: `${feature.color}20`, background: `${feature.color}10`, color: feature.color }}>
                <feature.icon size={24} />
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
