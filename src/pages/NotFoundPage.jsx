import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            background: "linear-gradient(135deg, #6d28d9, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          404
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1e293b",
            margin: "16px 0 8px",
          }}
        >
          Page Not Found
        </h2>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button icon={Home}>Go Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
