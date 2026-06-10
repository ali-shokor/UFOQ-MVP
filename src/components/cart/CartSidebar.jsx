import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  X,
  Trash2,
  ShoppingCart,
  ArrowRight,
  Package,
  Users,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";
import "./CartSidebar.css";

export default function CartSidebar() {
  const {
    selectedCourses,
    sessions,
    isCartOpen,
    closeCart,
    removeCourse,
    removeSession,
    clearCart,
    isBundleActive,
    isHalfBundleActive,
    bundleCourseCodes,
    halfBundleCoveredCodes,
    bundleYear,
    bundleSemester,
    setBundleInactive,
    setHalfBundleInactive,
    extraCourseTotal,
    courseTotal,
    sessionTotal,
    totalPrice,
    itemCount,
  } = useCart();

  const hasItems = selectedCourses.length > 0 || sessions.length > 0;
  const coveredCodes = isHalfBundleActive ? halfBundleCoveredCodes : bundleCourseCodes;
  const extraCourses = isBundleActive || isHalfBundleActive
    ? selectedCourses.filter((c) => !coveredCodes.includes(c.code))
    : [];
  const bundleCourses = isBundleActive || isHalfBundleActive
    ? selectedCourses.filter((c) => coveredCodes.includes(c.code))
    : [];

  const handleRemoveBundle = () => {
    const toRemove = bundleCourses.map((c) => c.code);
    if (isBundleActive) {
      setBundleInactive();
    } else if (isHalfBundleActive) {
      setHalfBundleInactive();
    }
    toRemove.forEach((code) => removeCourse(code));
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.div
            className="cart-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingCart size={20} />
                <h3>Your Cart</h3>
                <span className="cart-count">{itemCount}</span>
              </div>
              <button className="cart-close" onClick={closeCart} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            <div className="cart-body">
              {!hasItems ? (
                <div className="cart-empty">
                  <ShoppingCart size={48} />
                  <p>Your cart is empty</p>
                  <span>Browse our programs to add courses</span>
                </div>
              ) : (isBundleActive || isHalfBundleActive) ? (
                <div className="cart-items">
                  <motion.div
                    className="cart-item cart-item-bundle"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="cart-item-info">
                      <div className="cart-item-bundle-header">
                        <Package size={16} />
                        <span className="cart-item-code">
                          {isBundleActive ? "FULL BUNDLE" : "HALF BUNDLE"}
                        </span>
                      </div>
                      <span className="cart-item-title">
                        {bundleCourses.length} courses · Year {bundleYear} - Semester {bundleSemester}
                      </span>
                      <span className="cart-item-credits">
                        {bundleCourses.reduce((sum, c) => sum + c.credits, 0)} credits · ${isBundleActive ? "99" : "59"}
                      </span>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={handleRemoveBundle}
                      aria-label="Remove bundle"
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.div>

                  {extraCourses.map((course) => (
                    <motion.div
                      key={course.code}
                      className="cart-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      layout
                    >
                      <div className="cart-item-info">
                        <span className="cart-item-code">{course.code}</span>
                        <span className="cart-item-title">{course.title}</span>
                        <span className="cart-item-credits">
                          {course.credits} credits · ${course.price}
                        </span>
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeCourse(course.code)}
                        aria-label={`Remove ${course.title}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}

                  {sessions.map((session) => (
                    <motion.div
                      key={`session-${session.courseCode}`}
                      className="cart-item cart-item-session"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      layout
                    >
                      <div className="cart-item-info">
                        <div className="cart-item-session-header">
                          <Users size={14} />
                          <span className="cart-item-code">1:1 SESSION</span>
                        </div>
                        <span className="cart-item-title">{session.courseTitle}</span>
                        <span className="cart-item-credits">
                          {session.hours}hr × ${session.pricePerHour}/hr · ${session.hours * session.pricePerHour}
                        </span>
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeSession(session.courseCode)}
                        aria-label={`Remove session for ${session.courseTitle}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="cart-items">
                  <AnimatePresence>
                    {selectedCourses.map((course) => (
                      <motion.div
                        key={course.code}
                        className="cart-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        layout
                      >
                        <div className="cart-item-info">
                          <span className="cart-item-code">{course.code}</span>
                          <span className="cart-item-title">{course.title}</span>
                          <span className="cart-item-credits">
                            {course.credits} credits · ${course.price}
                          </span>
                        </div>
                        <button
                          className="cart-item-remove"
                          onClick={() => removeCourse(course.code)}
                          aria-label={`Remove ${course.title}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}

                    {sessions.map((session) => (
                      <motion.div
                        key={`session-${session.courseCode}`}
                        className="cart-item cart-item-session"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        layout
                      >
                        <div className="cart-item-info">
                          <div className="cart-item-session-header">
                            <Users size={14} />
                            <span className="cart-item-code">1:1 SESSION</span>
                          </div>
                          <span className="cart-item-title">{session.courseTitle}</span>
                          <span className="cart-item-credits">
                            {session.hours}hr × ${session.pricePerHour}/hr · ${session.hours * session.pricePerHour}
                          </span>
                        </div>
                        <button
                          className="cart-item-remove"
                          onClick={() => removeSession(session.courseCode)}
                          aria-label={`Remove session for ${session.courseTitle}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {hasItems && (
              <div className="cart-footer">
                <div className="cart-summary">
                  {(isBundleActive || isHalfBundleActive) ? (
                    <>
                      <div className="cart-summary-row">
                        <span>{isBundleActive ? "Full Bundle" : "Half Bundle"}</span>
                        <span>${isBundleActive ? "99" : "59"}</span>
                      </div>
                      {extraCourses.length > 0 && (
                        <div className="cart-summary-row">
                          <span>Extra Courses ({extraCourses.length})</span>
                          <span>${extraCourseTotal}</span>
                        </div>
                      )}
                      {sessions.length > 0 && (
                        <div className="cart-summary-row">
                          <span>1:1 Sessions ({sessions.length})</span>
                          <span>${sessionTotal}</span>
                        </div>
                      )}
                      <div className="cart-summary-row cart-summary-total">
                        <span>Total</span>
                        <span className="cart-total-price">${totalPrice}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {selectedCourses.length > 0 && (
                        <div className="cart-summary-row">
                          <span>Courses ({selectedCourses.length})</span>
                          <span>${courseTotal}</span>
                        </div>
                      )}
                      {sessions.length > 0 && (
                        <div className="cart-summary-row">
                          <span>1:1 Sessions ({sessions.length})</span>
                          <span>${sessionTotal}</span>
                        </div>
                      )}
                      <div className="cart-summary-row cart-summary-total">
                        <span>Total</span>
                        <span className="cart-total-price">${totalPrice}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="cart-footer-actions">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(isBundleActive || isHalfBundleActive) ? handleRemoveBundle : clearCart}
                  >
                    {(isBundleActive || isHalfBundleActive) ? "Remove Bundle" : "Clear All"}
                  </Button>
                  <Link to="/contact" onClick={closeCart}>
                    <Button size="md" icon={ArrowRight} iconPosition="right">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
