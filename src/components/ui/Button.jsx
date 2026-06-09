import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      disabled = false,
      loading = false,
      fullWidth = false,
      className = "",
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const classNames = [
      "btn",
      `btn-${variant}`,
      `btn-${size}`,
      fullWidth ? "btn-full" : "",
      loading ? "btn-loading" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <motion.button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        {...props}
      >
        {loading && (
          <span className="btn-spinner">
            <svg viewBox="0 0 24 24" className="spinner-svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
        {!loading && Icon && iconPosition === "left" && (
          <Icon className="btn-icon" size={18} />
        )}
        <span className="btn-text">{children}</span>
        {!loading && Icon && iconPosition === "right" && (
          <Icon className="btn-icon" size={18} />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
