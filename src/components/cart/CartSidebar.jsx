import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";
import "./CartSidebar.css";

export default function CartSidebar() {
  const { selectedCourses, isCartOpen, closeCart, removeCourse, clearCart } =
    useCart();

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
                <h3>Selected Courses</h3>
                <span className="cart-count">{selectedCourses.length}</span>
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
                            {course.credits} credits
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
                    <span>{selectedCourses.length}</span>
                  </div>
                  <div className="cart-summary-row cart-summary-total">
                    <span>Total Credits</span>
                    <span>
                      {selectedCourses.reduce((sum, c) => sum + c.credits, 0)}
                    </span>
                  </div>
                </div>
                <div className="cart-footer-actions">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                  >
                    Clear All
                  </Button>
                  <a href="/contact">
                    <Button size="md" icon={ArrowRight} iconPosition="right">
                      Enroll Now
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
