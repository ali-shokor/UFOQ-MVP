import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  Atom,
  Calculator,
  Cpu,
  BarChart3,
  Dna,
  FlaskConical,
  Mountain,
  TestTubes,
  Lock,
  ArrowRight,
} from "lucide-react";
import "./MajorCard.css";

const iconMap = {
  Monitor,
  Atom,
  Calculator,
  Cpu,
  BarChart3,
  Dna,
  FlaskConical,
  Mountain,
  TestTubes,
};

export default function MajorCard({ major, year, index, onSelect, bundle }) {
  const navigate = useNavigate();
  const Icon = iconMap[major.icon] || Monitor;

  const handleClick = () => {
    if (!major.active) return;
    if (onSelect) {
      onSelect(major.id, year);
    } else {
      const bundleParam = bundle ? `&bundle=${bundle}` : "";
      navigate(`/academics/${major.id}?year=${year}${bundleParam}`);
    }
  };

  return (
    <motion.div
      className={`major-card ${major.active ? "major-card-active" : "major-card-disabled"}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={major.active ? { y: -4 } : {}}
      whileTap={major.active ? { scale: 0.98 } : {}}
      style={{ "--major-color": major.color }}
    >
      <div className="major-card-icon">
        {major.active ? (
          <Icon size={24} />
        ) : (
          <Lock size={24} />
        )}
      </div>

      <div className="major-card-content">
        <h3 className="major-card-name">{major.name}</h3>
        <span className="major-card-status">
          {major.active ? (
            <>
              Available Now
              <ArrowRight size={14} />
            </>
          ) : (
            "Coming Soon"
          )}
        </span>
      </div>

      {major.active && <div className="major-card-glow" />}
    </motion.div>
  );
}
