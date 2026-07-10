import { motion } from "framer-motion";
import { AlertTriangle, BookX, Clock, Users, Zap, CheckCircle } from "lucide-react";
import "./ProblemSolution.css";

const problems = [
  {
    icon: BookX,
    title: "Scattered Resources",
    description: "Students waste hours searching for quality study materials across unreliable sources.",
  },
  {
    icon: Clock,
    title: "No Structured Path",
    description: "Without a clear roadmap, students struggle to follow a consistent academic plan.",
  },
  {
    icon: Users,
    title: "Lack of Support",
    description: "When stuck on difficult topics, most students have no mentor or expert to turn to.",
  },
];

const solutions = [
  {
    icon: CheckCircle,
    title: "Structured Curriculum",
    description: "Every course follows a carefully designed syllabus aligned with university requirements.",
  },
  {
    icon: Zap,
    title: "Expert-Led Content",
    description: "Learn from experienced instructors who break down complex topics into clear lessons.",
  },
  {
    icon: CheckCircle,
    title: "Live Support & Community",
    description: "Get help when you need it through direct mentor access and peer collaboration.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="ps-section">
      <div className="ps-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">The Challenge</span>
          <h2 className="section-title">
            University Students Deserve <span className="gradient-text">Better</span>
          </h2>
          <p className="section-description">
            Most students face the same struggle: too many resources, no structure, and
            zero support. IMKAN changes that.
          </p>
        </motion.div>

        <div className="ps-grid">
          <motion.div
            className="ps-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="ps-column-header ps-column-problem">
              <AlertTriangle size={20} />
              <span>The Problem</span>
            </div>
            <div className="ps-cards">
              {problems.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="ps-card ps-card-problem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <div className="ps-card-icon ps-card-icon-red">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="ps-card-title">{item.title}</h4>
                    <p className="ps-card-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="ps-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="ps-column-header ps-column-solution">
              <Zap size={20} />
              <span>The IMKAN Solution</span>
            </div>
            <div className="ps-cards">
              {solutions.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="ps-card ps-card-solution"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                >
                  <div className="ps-card-icon ps-card-icon-green">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="ps-card-title">{item.title}</h4>
                    <p className="ps-card-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
