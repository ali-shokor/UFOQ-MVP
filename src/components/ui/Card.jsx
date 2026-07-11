import { motion } from "framer-motion";
import "./Card.css";

export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  glow = false,
  glowColor = "#6d28d9",
  padding = "md",
  onClick,
}) {
  const classNames = [
    "card",
    hover ? "card-hover" : "",
    glass ? "card-glass" : "",
    glow ? "card-glow" : "",
    `card-pad-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      className={classNames}
      onClick={onClick}
      style={glow ? { "--glow-color": glowColor } : {}}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  );
}
