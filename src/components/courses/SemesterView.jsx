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
    totalCredits, halfBundleCreditsLeft, canAddToHalfBundle, HALF_BUNDLE_MAX_CREDITS,
  } = useCart();

  const availableYears = getAvailableYears(majorId);
  const availableSemesters = getAvailableSemesters(majorId, selectedYear);
  const courses = getCourses(majorId, selectedYear, selectedSemester);
  const availableCourses = courses.filter((c) => c.available);

  const bundleParam = searchParams.get("bundle");
  const bundleApplied = useRef(false);

  useEffect(() => {
    if (bundleApplied.current) return;
    if (!bundleParam || availableCourses.length === 0) return;

    bundleApplied.current = true;

    if (bundleParam === "full") {
      setBundleActive(availableCourses, selectedYear, selectedSemester);
    } else if (bundleParam === "half") {
      setHalfBundleActive([], selectedYear, selectedSemester);
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
      setHalfBundleActive([], selectedYear, selectedSemester);
    }
  };

  const creditsUsed = isHalfBundleActive ? totalCredits : 0;
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
            <button
              className={`bundle-btn ${allSelected ? "bundle-btn-active" : ""}`}
              onClick={handleFullBundle}
            >
              <Package size={18} />
              <span className="bundle-btn-text">
                {allSelected ? "Remove Full Bundle" : "Full Bundle — $99"}
              </span>
              <span className="bundle-btn-hint">
                {allSelected ? "All courses selected" : `All ${availableCourses.length} courses · Save up to 60%`}
              </span>
            </button>

            <button
              className={`bundle-btn half-bundle-btn ${isHalfBundleActive ? "bundle-btn-active half-bundle-active" : ""}`}
              onClick={handleHalfBundle}
            >
              <Layers size={18} />
              <span className="bundle-btn-text">
                {isHalfBundleActive ? "Remove Half Bundle" : "Half Bundle — $59"}
              </span>
              <span className="bundle-btn-hint">
                {isHalfBundleActive
                  ? `${creditsUsed}/${HALF_BUNDLE_MAX_CREDITS} credits`
                  : `Up to ${HALF_BUNDLE_MAX_CREDITS} credits · Pick your courses`}
              </span>
            </button>

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
                      Credits selected
                    </span>
                    <span className={`progress-count ${creditsUsed >= HALF_BUNDLE_MAX_CREDITS ? "progress-full" : ""}`}>
                      {creditsUsed} / {HALF_BUNDLE_MAX_CREDITS}
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
                      ? `You can add ${halfBundleCreditsLeft} more credit${halfBundleCreditsLeft !== 1 ? "s" : ""}`
                      : "Credit limit reached — remove a course to add another"}
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
    </section>
  );
}
