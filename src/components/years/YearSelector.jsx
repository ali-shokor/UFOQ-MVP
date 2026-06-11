import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MajorCard from "./MajorCard";
import { years } from "../../data/years";
import { majors } from "../../data/majors";
import "./YearSelector.css";

const MOBILE_INITIAL = 3;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 640
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function YearSelector({ onMajorSelect }) {
  const [searchParams] = useSearchParams();
  const bundle = searchParams.get("bundle");
  const [selectedYear, setSelectedYear] = useState(2);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const visibleMajors = isMobile && !showAll
    ? majors.slice(0, MOBILE_INITIAL)
    : majors;
  const hasMore = isMobile && majors.length > MOBILE_INITIAL;

  return (
    <section className="year-selector">
      <div className="year-selector-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Academic Structure</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Year & Major</span>
          </h2>
          <p className="section-description">
            Select your academic year to explore available programs and specializations.
            More majors are coming soon.
          </p>
        </motion.div>

        <motion.div
          className="year-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {years.map((year) => (
            <button
              key={year.id}
              className={`year-tab ${selectedYear === year.id ? "year-tab-active" : ""}`}
              onClick={() => setSelectedYear(year.id)}
            >
              <span className="year-tab-number">{year.id}</span>
              <div className="year-tab-info">
                <span className="year-tab-label">{year.label}</span>
                <span className="year-tab-desc">{year.description}</span>
              </div>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            className="majors-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {visibleMajors.map((major, index) => (
              <MajorCard
                key={major.id}
                major={major}
                year={selectedYear}
                index={index}
                onSelect={onMajorSelect}
                bundle={bundle}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {hasMore && !showAll && (
          <button className="majors-show-more" onClick={() => setShowAll(true)}>
            <span>Show All Majors</span>
            <ChevronDown size={16} />
          </button>
        )}
      </div>
    </section>
  );
}
