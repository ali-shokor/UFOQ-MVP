import { motion } from "framer-motion";
import { BookOpen, Plus, Check, Play, ExternalLink, DollarSign, User } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Card from "../ui/Card";
import "./CourseCard.css";

export default function CourseCard({ course, index }) {
  const { addCourse, removeCourse, isCourseSelected, isBundleActive } = useCart();
  const isSelected = isCourseSelected(course.code);
  const locked = isBundleActive && isSelected;

  const handleToggle = () => {
    if (locked) return;
    if (isSelected) {
      removeCourse(course.code);
    } else {
      addCourse(course);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card hover={!locked} className={`course-card ${!course.available ? "course-card-locked" : ""} ${locked ? "course-card-bundle-locked" : ""}`}>
        <div className="course-thumbnail">
          <div className="course-thumbnail-placeholder">
            <BookOpen size={32} />
          </div>
          {course.available && (
            <div className="course-thumbnail-overlay">
              <button className="course-play-btn" aria-label="Preview course">
                <Play size={20} />
              </button>
            </div>
          )}
          {!course.available && (
            <div className="course-badge-locked">Coming Soon</div>
          )}
          <div className="course-badge-code">{course.code}</div>
          <div className="course-price-badge">${course.price}</div>
        </div>

        <div className="course-info">
          <h4 className="course-title">{course.title}</h4>
          <p className="course-description">{course.description}</p>

          <div className="course-meta">
            <span className="course-credits">{course.credits} Credits</span>
            <span className="course-divider">·</span>
            <span className="course-instructor">
              <User size={12} />
              {course.instructor}
            </span>
          </div>

          <div className="course-actions">
            <button
              className={`course-select-btn ${isSelected ? "course-select-btn-active" : ""} ${locked ? "course-select-btn-locked" : ""}`}
              onClick={handleToggle}
              disabled={!course.available || locked}
            >
              {locked ? (
                <>
                  <Check size={16} />
                  <span>Bundle</span>
                </>
              ) : isSelected ? (
                <>
                  <Check size={16} />
                  <span>Selected</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {course.available && (
              <button className="course-preview-btn" aria-label="Preview course">
                <ExternalLink size={16} />
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
