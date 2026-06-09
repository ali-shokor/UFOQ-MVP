import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "CS Student · Year 2",
    rating: 5,
    text: "UFOQ completely changed how I study. The structured courses saved me hours of searching for resources. I went from struggling to passing with distinction.",
    avatar: "A",
  },
  {
    name: "Sara El Idrissi",
    role: "CS Student · Year 3",
    rating: 5,
    text: "The quality of the lectures is incredible. Every topic is explained clearly and the practice materials really help reinforce what I learn.",
    avatar: "S",
  },
  {
    name: "Youssef Amrani",
    role: "CS Student · Year 1",
    rating: 5,
    text: "As a first-year student, I was overwhelmed. UFOQ gave me a clear path and the support I needed. Best investment in my education so far.",
    avatar: "Y",
  },
  {
    name: "Fatima Zahra",
    role: "CS Student · Year 2",
    rating: 5,
    text: "The $99 package is honestly a steal. I got access to all courses with great quality. The chat support is a game changer too.",
    avatar: "F",
  },
  {
    name: "Omar Tazi",
    role: "CS Student · Year 2",
    rating: 5,
    text: "Finally a platform that understands what students actually need. The curriculum is well-organized and the instructors are top-notch.",
    avatar: "O",
  },
  {
    name: "Nadia Berrada",
    role: "CS Student · Year 3",
    rating: 5,
    text: "I've tried many resources before UFOQ. Nothing comes close to the structure and quality here. It's like having a personal tutor.",
    avatar: "N",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Student Reviews</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Hundreds of Students</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what students say about their
            experience with UFOQ Academy.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-quote">
                <Quote size={20} />
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
