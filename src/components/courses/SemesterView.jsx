import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Package, Layers } from "lucide-react";
import CourseCard from "./CourseCard";
import { useCart } from "../../context/CartContext";
import { getCourses, getAvailableSemesters, getAvailableYears } from "../../data/courses";
import "./SemesterView.css";

export default function SemesterView({ majorId = "cs" }) {
  const [searchParams] = useSearchParams();
  const initialYear = parseInt(searchParams.get("year")) || 2;
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const {
    addCourse, removeCourse, isCourseSelected, selectedCourses,
    isBundleActive, setBundleActive, setBundleInactive,
    isHalfBundleActive, setHalfBundleActive, setHalfBundleInactive,
    totalCredits, halfBundleCreditsUsed, halfBundleCreditsLeft, halfBundleCoveredCodes, halfBundleIsFull,
    canAddToHalfBundle, HALF_BUNDLE_MAX_CREDITS,
  } = useCart();

  const availableYears = getAvailableYears(majorId);
  const availableSemesters = getAvailableSemesters(majorId, selectedYear);
  const courses = getCourses(majorId, selectedYear, selectedSemester);
  const availableCourses = courses.filter((c) => c.available);

  const bundleParam = searchParams.get("bundle");
  const bundleApplied = useRef(false);
  const [showBundleFullToast, setShowBundleFullToast] = useState(false);

  useEffect(() => {
    if (halfBundleIsFull && isHalfBundleActive) {
      setShowBundleFullToast(true);
      const timer = setTimeout(() => setShowBundleFullToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [halfBundleIsFull, isHalfBundleActive]);

  useEffect(() => {
    if (bundleApplied.current) return;
    if (!bundleParam || availableCourses.length === 0) return;

    bundleApplied.current = true;

    if (bundleParam === "full") {
      setBundleActive(availableCourses, selectedYear, selectedSemester);
    } else if (bundleParam === "half") {
      setHalfBundleActive([]);
    }
  }, [bundleParam, availableCourses, selectedYear, selectedSemester, setBundleActive, setHalfBundleActive]);

  const allSelected = availableCourses.length > 0 && availableCourses.every((c) => isCourseSelected(c.code));

  const handleFullBundle = () => {
    if (allSelected) {
      setBundleInactive();
      availableCourses.forEach((c) => removeCourse(c.code));
    } else {
      setBundleActive(availableCourses, selectedYear, selectedSemester);
    }
  };

  const handleHalfBundle = () => {
    if (isHalfBundleActive) {
      setHalfBundleInactive();
    } else {
      setHalfBundleActive([]);
    }
  };

  const creditsUsed = isHalfBundleActive ? halfBundleCreditsUsed : 0;
  const extraCredits = isHalfBundleActive ? Math.max(0, totalCredits - HALF_BUNDLE_MAX_CREDITS) : 0;
  const creditsPercent = isHalfBundleActive
    ? Math.min(100, (creditsUsed / HALF_BUNDLE_MAX_CREDITS) * 100)
    : 0;

  return (
    <section className="semester-view">
      <div className="semester-view-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Computer Science</span>
          <h2 className="section-title">
            Course <span className="gradient-text">Structure</span>
          </h2>
          <p className="section-description">
            Explore our comprehensive curriculum designed to build strong foundations
            and advanced skills in Computer Science.
          </p>
        </motion.div>

        <div className="semester-controls">
          <div className="year-selector-inline">
            {availableYears.map((year) => (
              <button
                key={year}
                className={`year-pill ${selectedYear === year ? "year-pill-active" : ""}`}
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedSemester(1);
                }}
              >
                Year {year}
              </button>
            ))}
          </div>

          <div className="semester-selector">
            {availableSemesters.map((sem) => (
              <button
                key={sem}
                className={`semester-pill ${selectedSemester === sem ? "semester-pill-active" : ""}`}
                onClick={() => setSelectedSemester(sem)}
              >
                Semester {sem}
              </button>
            ))}
          </div>
        </div>

        {availableCourses.length > 0 && (
          <div className="bundle-bar">
            <div className="bundle-cards">
              <button
                className={`bundle-row bundle-row-gold ${allSelected ? "bundle-row-active bundle-row-gold-active" : ""}`}
                onClick={handleFullBundle}
              >
                <div className="bundle-row-icon bundle-row-icon-gold">
                  <Package size={20} />
                </div>
                <div className="bundle-row-info">
                  <div className="bundle-row-top">
                    <span className="bundle-row-name">Full Bundle</span>
                    <span className="bundle-row-badge bundle-row-badge-gold">Best Value</span>
                  </div>
                  <span className="bundle-row-desc">
                    {allSelected ? "All courses selected" : `All ${availableCourses.length} courses · Save up to 60%`}
                  </span>
                </div>
                <div className="bundle-row-price">
                  <span className="bundle-row-currency bundle-row-currency-gold">$</span>
                  <span className="bundle-row-amount bundle-row-amount-gold">99</span>
                </div>
                <span className="bundle-row-cta bundle-row-cta-gold">
                  {allSelected ? "Active ✓" : "Get Bundle"}
                </span>
              </button>

              <button
                className={`bundle-row ${isHalfBundleActive ? "bundle-row-active" : ""}`}
                onClick={handleHalfBundle}
              >
                <div className="bundle-row-icon">
                  <Layers size={20} />
                </div>
                <div className="bundle-row-info">
                  <div className="bundle-row-top">
                    <span className="bundle-row-name">Half Bundle</span>
                    <span className="bundle-row-badge">Flexible</span>
                  </div>
                  <span className="bundle-row-desc">
                    {isHalfBundleActive
                      ? extraCredits > 0
                        ? `${creditsUsed}/${HALF_BUNDLE_MAX_CREDITS} credits · +${extraCredits} extra`
                        : `${creditsUsed}/${HALF_BUNDLE_MAX_CREDITS} credits included`
                      : `Up to ${HALF_BUNDLE_MAX_CREDITS} credits · Pick your courses`}
                  </span>
                </div>
                <div className="bundle-row-price">
                  <span className="bundle-row-currency">$</span>
                  <span className="bundle-row-amount">59</span>
                </div>
                <span className="bundle-row-cta">
                  {isHalfBundleActive ? "Active ✓" : "Get Bundle"}
                </span>
              </button>
            </div>

            <AnimatePresence>
              {isHalfBundleActive && (
                <motion.div
                  className="half-bundle-progress"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="progress-header">
                    <span className="progress-label">
                      Bundle credits
                    </span>
                    <span className={`progress-count ${creditsUsed >= HALF_BUNDLE_MAX_CREDITS ? "progress-full" : ""}`}>
                      {creditsUsed} / {HALF_BUNDLE_MAX_CREDITS}
                      {extraCredits > 0 && (
                        <span className="progress-extra"> +{extraCredits} extra</span>
                      )}
                    </span>
                  </div>
                  <div className="progress-track">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${creditsPercent}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <p className="progress-hint">
                    {halfBundleCreditsLeft > 0
                      ? `${halfBundleCreditsLeft} credit${halfBundleCreditsLeft !== 1 ? "s" : ""} included · add more at individual price`
                      : `${extraCredits > 0 ? `${extraCredits} extra credit${extraCredits !== 1 ? "s" : ""} at individual price` : "Bundle full — extra courses charged individually"}`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedYear}-${selectedSemester}`}
            className="courses-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <CourseCard key={course.code} course={course} index={index} />
              ))
            ) : (
              <div className="courses-empty">
                <p>No courses available for this selection.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {courses.length > 0 && (
          <motion.div
            className="courses-summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="courses-summary-text">
              {courses.length} courses available | Year {selectedYear} - Semester{" "}
              {selectedSemester}
            </span>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showBundleFullToast && (
          <motion.div
            className="bundle-full-toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="bundle-full-toast-icon">&#10003;</span>
            <span>Your credits for this bundle is full</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
