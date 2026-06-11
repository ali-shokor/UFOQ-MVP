import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  { value: 400, suffix: "+", label: "Students" },
  { value: 40, suffix: "+", label: "Courses" },
  { value: 90, suffix: "%", label: "Pass Rate" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-glow" />
      <motion.div
        className="stats-bar"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12 }}
          >
            <CountUp target={s.value} suffix={s.suffix} inView={inView} />
            <span className="stat-label">{s.label}</span>
            {i < stats.length - 1 && <div className="stat-sep" />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
