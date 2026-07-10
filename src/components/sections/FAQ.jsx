import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is IMKAN Academy?",
    answer: "IMKAN Academy is an online educational platform designed specifically for university students. We provide structured courses, expert-led video lectures, and study materials aligned with university curricula — starting with Computer Science.",
  },
  {
    question: "Who is IMKAN for?",
    answer: "IMKAN is built for university students who want a clear, structured learning path. Whether you're a first-year student or preparing for advanced courses, our platform provides the resources and support you need to succeed.",
  },
  {
    question: "What does the $119 package include?",
    answer: "The Full Package gives you lifetime access to all available courses in your selected program. This includes HD video lectures, downloadable study materials, practice assignments, quizzes, and a certificate of completion. You also get priority support.",
  },
  {
    question: "How do I enroll?",
    answer: "Simply browse our courses, select the ones you want, and fill out the enrollment form. You can pay via WhatsApp or email, and we'll confirm your access within 24 hours. It's quick and straightforward.",
  },
  {
    question: "Are the courses taught by real instructors?",
    answer: "Yes. All our courses are created and reviewed by experienced educators and industry professionals who understand both the academic requirements and real-world applications.",
  },
  {
    question: "Can I get help if I'm stuck on a topic?",
    answer: "Absolutely. We offer live chat support and a Q&A system where you can get help from instructors and fellow students. We're committed to making sure you never feel stuck.",
  },
  {
    question: "Will more majors be available?",
    answer: "Yes. We're starting with Computer Science, but we're actively expanding to Physics, Mathematics, Electronics, Statistics, Biology, Biochemistry, Geology, and Chemistry. Each major will receive the same structured, high-quality treatment.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. We offer a 7-day money-back guarantee if you're not satisfied with the course quality. Your satisfaction is our priority.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-description">
            Got questions? We've got answers. If you can't find what you're looking for,
            feel free to contact us.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item-open" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <motion.div
                  className="faq-chevron"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
