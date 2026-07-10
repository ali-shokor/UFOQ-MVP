import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Plus,
  Check,
  Play,
  User,
  Minus,
  Users,
  Zap,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import Card from "../ui/Card";
import "./CourseCard.css";

export default function CourseCard({ course, index }) {
  const {
    addCourse,
    removeCourse,
    isCourseSelected,
    isBundleActive,
    isHalfBundleActive,
    halfBundleCoveredCodes,
    halfBundleIsFull,
    addSession,
    removeSession,
    isSessionSelected,
    getSession,
  } = useCart();

  const isSelected = isCourseSelected(course.code);
  const locked = isBundleActive && isSelected;
  const isCoveredByBundle = isHalfBundleActive && halfBundleCoveredCodes.includes(course.code);
  const isExtraCourse = isHalfBundleActive && isSelected && !isCoveredByBundle;
  const canStillAdd = isHalfBundleActive && !isSelected;

  const hasSession = isSessionSelected(course.code);
  const session = getSession(course.code);
  const [showSession, setShowSession] = useState(false);
  const [hours, setHours] = useState(1);

  const handleToggle = () => {
    if (locked) return;
    if (isSelected) {
      removeCourse(course.code);
    } else {
      addCourse(course);
    }
  };

  const handleSessionToggle = () => {
    if (hasSession) {
      removeSession(course.code);
      setShowSession(false);
    } else {
      setShowSession((prev) => !prev);
    }
  };

  const handleAddSession = () => {
    addSession(course.code, course.title, hours);
    setShowSession(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        hover={!locked}
        className={`course-card ${!course.available ? "course-card-locked" : ""} ${
          locked ? "course-card-bundle-locked" : ""
        } ${isCoveredByBundle ? "course-card-half-bundle" : ""} ${
          isExtraCourse ? "course-card-extra" : ""
        }`}
      >
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
          <div className={`course-price-badge ${isCoveredByBundle ? "course-price-badge-bundle" : ""}`}>
            {isCoveredByBundle ? "Included" : `$${course.price}`}
          </div>
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
            {isExtraCourse && (
              <>
                <span className="course-divider">·</span>
                <span className="course-extra-label">
                  <Zap size={10} />
                  Extra
                </span>
              </>
            )}
          </div>

          <div className="course-actions">
            <button
              className={`course-select-btn ${
                isSelected ? "course-select-btn-active" : ""
              } ${locked ? "course-select-btn-locked" : ""} ${
                isCoveredByBundle ? "course-select-btn-bundle" : ""
              } ${isExtraCourse ? "course-select-btn-extra" : ""} ${
                canStillAdd && halfBundleIsFull ? "course-select-btn-paid" : ""
              }`}
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
                  <span>{isCoveredByBundle ? "Included" : "Selected"}</span>
                </>
              ) : canStillAdd && halfBundleIsFull ? (
                <>
                  <Plus size={16} />
                  <span>Add · ${course.price}</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>{isHalfBundleActive && halfBundleIsFull ? "Add · $79 covers 15cr" : "Add Course to Cart"}</span>
                </>
              )}
            </button>

            {course.available && (
              <button
                className={`course-session-btn ${
                  hasSession ? "course-session-btn-active" : ""
                } ${showSession && !hasSession ? "course-session-btn-active" : ""}`}
                onClick={handleSessionToggle}
                aria-label="Book 1:1 session"
              >
                <Users size={16} />
                <span className="course-session-btn-label">1:1</span>
              </button>
            )}
          </div>

          {showSession && (
            <div className="session-panel">
              <div className="session-header">
                <Users size={14} />
                <span>1:1 Private Session</span>
              </div>
              <div className="session-hours-row">
                <button
                  className="session-hours-btn"
                  onClick={() => setHours(Math.max(1, hours - 1))}
                >
                  <Minus size={14} />
                </button>
                <div className="session-hours-display">
                  <span className="session-hours-num">{hours}</span>
                  <span className="session-hours-label">
                    hr{hours !== 1 ? "s" : ""}
                  </span>
                </div>
                <button
                  className="session-hours-btn"
                  onClick={() => setHours(Math.min(10, hours + 1))}
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="session-total">
                <span>${hours * 20}</span>
                <span className="session-total-label">(${20}/hr)</span>
              </div>
              <button
                className="session-confirm-btn"
                onClick={handleAddSession}
              >
                <Check size={14} />
                Add Session
              </button>
            </div>
          )}

          {hasSession && !showSession && (
            <div className="session-badge">
              <Users size={12} />
              <span>
                {session.hours}hr 1:1 · ${session.hours * 20}
              </span>
              <button
                className="session-badge-remove"
                onClick={() => removeSession(course.code)}
              >
                <Minus size={10} />
              </button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
