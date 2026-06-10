import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Package } from "lucide-react";
import CourseCard from "./CourseCard";
import { useCart } from "../../context/CartContext";
import { getCourses, getAvailableSemesters, getAvailableYears } from "../../data/courses";
import "./SemesterView.css";

export default function SemesterView({ majorId = "cs" }) {
  const [searchParams] = useSearchParams();
  const initialYear = parseInt(searchParams.get("year")) || 2;
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const { addCourse, removeCourse, isCourseSelected, selectedCourses, isBundleActive, setBundleActive, setBundleInactive, totalPrice } = useCart();

  const availableYears = getAvailableYears(majorId);
  const availableSemesters = getAvailableSemesters(majorId, selectedYear);
  const courses = getCourses(majorId, selectedYear, selectedSemester);
  const availableCourses = courses.filter((c) => c.available);

  const allSelected = availableCourses.length > 0 && availableCourses.every((c) => isCourseSelected(c.code));

  const handleFullBundle = () => {
    if (allSelected) {
      setBundleInactive();
      availableCourses.forEach((c) => removeCourse(c.code));
    } else {
      setBundleActive(availableCourses);
    }
  };

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
