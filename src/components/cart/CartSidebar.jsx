import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trash2, ShoppingCart, ArrowRight, Package } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";
import "./CartSidebar.css";

export default function CartSidebar() {
  const { selectedCourses, isCartOpen, closeCart, removeCourse, clearCart, isBundleActive, setBundleInactive, totalPrice } =
    useCart();

  const handleRemoveBundle = () => {
    setBundleInactive();
    clearCart();
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
                <h3>{isBundleActive ? "Full Bundle" : "Selected Courses"}</h3>
                <span className="cart-count">{isBundleActive ? 1 : selectedCourses.length}</span>
              </div>
              <button className="cart-close" onClick={closeCart} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            <div className="cart-body">
              {selectedCourses.length === 0 ? (
                <div className="cart-empty">
                  <ShoppingCart size={48} />
                  <p>No courses selected yet</p>
                  <span>Browse our programs to add courses</span>
                </div>
              ) : isBundleActive ? (
                <div className="cart-items">
                  <motion.div
                    className="cart-item cart-item-bundle"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="cart-item-info">
                      <div className="cart-item-bundle-header">
                        <Package size={16} />
                        <span className="cart-item-code">FULL BUNDLE</span>
                      </div>
                      <span className="cart-item-title">{selectedCourses.length} courses included</span>
                      <span className="cart-item-credits">
                        {selectedCourses.reduce((sum, c) => sum + c.credits, 0)} credits total
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
                  </AnimatePresence>
                </div>
              )}
            </div>

            {selectedCourses.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="cart-summary-row">
                    <span>Total Courses</span>
                    <span>{isBundleActive ? selectedCourses.length : selectedCourses.length}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Total Credits</span>
                    <span>{selectedCourses.reduce((sum, c) => sum + c.credits, 0)}</span>
                  </div>
                  <div className="cart-summary-row cart-summary-total">
                    <span>Total</span>
                    <span className="cart-total-price">{isBundleActive ? "$99" : `$${totalPrice}`}</span>
                  </div>
                </div>
                <div className="cart-footer-actions">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={isBundleActive ? handleRemoveBundle : clearCart}
                  >
                    {isBundleActive ? "Remove Bundle" : "Clear All"}
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
