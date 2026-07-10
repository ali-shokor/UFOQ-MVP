import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "CS Student · Year 2",
    rating: 5,
    text: "IMKAN completely changed how I study. The structured courses saved me hours of searching for resources. I went from struggling to passing with distinction.",
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
    text: "As a first-year student, I was overwhelmed. IMKAN gave me a clear path and the support I needed. Best investment in my education so far.",
    avatar: "Y",
  },
  {
    name: "Fatima Zahra",
    role: "CS Student · Year 2",
    rating: 5,
    text: "The $119 package is honestly a steal. I got access to all courses with great quality. The chat support is a game changer too.",
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
    text: "I've tried many resources before IMKAN. Nothing comes close to the structure and quality here. It's like having a personal tutor.",
    avatar: "N",
  },
  {
    name: "Karim Moussaoui",
    role: "CS Student · Year 1",
    rating: 5,
    text: "The step-by-step approach really works. I never felt lost during lectures and the summaries helped me ace my finals.",
    avatar: "K",
  },
  {
    name: "Layla Fassi",
    role: "CS Student · Year 2",
    rating: 5,
    text: "What I love most is the 1:1 sessions. Having someone to ask questions directly made all the difference in understanding complex topics.",
    avatar: "L",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll(".testimonial-card");
    const trackLeft = el.scrollLeft;
    const trackCenter = trackLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(trackCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  }, []);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    setActiveIndex(getActiveIndex());
  }, [getActiveIndex]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".testimonial-card")?.offsetWidth || 340;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  };

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelectorAll(".testimonial-card")[index];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

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
            experience with IMKAN Academy.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <button
            className={`carousel-arrow carousel-arrow-left ${canScrollLeft ? "" : "hidden"}`}
            onClick={() => scroll(-1)}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="testimonials-track"
            ref={scrollRef}
            onScroll={checkScroll}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="testimonial-quote">
                  <Quote size={20} />
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#fbbf24" color="#fbbf24" />
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

          <button
            className={`carousel-arrow carousel-arrow-right ${canScrollRight ? "" : "hidden"}`}
            onClick={() => scroll(1)}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot ${i === activeIndex ? "testimonials-dot-active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
