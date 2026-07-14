import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const pageStyle = {
  minHeight: "calc(100vh - 80px)",
  padding: "60px 24px 80px",
};

const containerStyle = {
  maxWidth: 720,
  margin: "0 auto",
};

const backStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "var(--accent-light)",
  textDecoration: "none",
  marginBottom: 32,
  transition: "opacity 0.2s",
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: 800,
  color: "var(--text-primary)",
  marginBottom: 8,
  letterSpacing: "-0.5px",
};

const dateStyle = {
  fontSize: "0.82rem",
  color: "var(--text-muted)",
  marginBottom: 40,
};

const sectionStyle = {
  marginBottom: 32,
};

const h2Style = {
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  marginBottom: 10,
};

const pStyle = {
  fontSize: "0.92rem",
  lineHeight: 1.75,
  color: "var(--text-secondary)",
  margin: "0 0 12px",
};

const ulStyle = {
  margin: "0 0 12px",
  paddingLeft: 20,
};

const liStyle = {
  fontSize: "0.92rem",
  lineHeight: 1.75,
  color: "var(--text-secondary)",
  marginBottom: 4,
};

export default function TermsPage() {
  return (
    <div style={pageStyle}>
      <motion.div
        style={containerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/" style={backStyle}>
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 style={titleStyle}>Terms of Service</h1>
        <p style={dateStyle}>Last updated: July 14, 2026</p>

        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Service Description</h2>
          <p style={pStyle}>
            IMKAN Academy is an online educational platform designed for university students in Lebanon.
            We provide structured video courses, practice materials, and optional 1:1 tutoring sessions
            across various academic programs, including Computer Science.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>2. Enrollment & Access</h2>
          <p style={pStyle}>
            By purchasing a bundle or course, you receive a personal, non-transferable license to access
            the included content. Access is granted per individual and may not be shared, redistributed,
            or used by multiple people.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>3. Pricing & Payment</h2>
          <p style={pStyle}>Current pricing as of July 2026:</p>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Full Bundle:</strong> $119 — access to all semester courses</li>
            <li style={liStyle}><strong>Half Bundle:</strong> $79 — up to 15 credits worth of courses</li>
            <li style={liStyle}><strong>1:1 Private Sessions:</strong> $20 per hour</li>
            <li style={liStyle}><strong>Separate Courses:</strong> $15–$30 per course</li>
          </ul>
          <p style={pStyle}>
            Prices are listed in USD. IMKAN Academy reserves the right to update pricing at any time.
            Active purchases will not be affected by future price changes.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Refund Policy</h2>
          <p style={pStyle}>
            We understand that circumstances change. If you are unsatisfied with your purchase, please
            contact us directly and we will review your case individually. Refund decisions are made
            on a case-by-case basis depending on the level of course access used.
          </p>
          <p style={pStyle}>
            To request a refund, reach out via WhatsApp at +961 78 957 416 or email us at
            imkanacademy@gmail.com with your purchase details.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>5. User Responsibilities</h2>
          <p style={pStyle}>By using IMKAN Academy, you agree to:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>Use the platform only for personal, educational purposes</li>
            <li style={liStyle}>Not share your account or access credentials with others</li>
            <li style={liStyle}>Not record, download, or redistribute course content</li>
            <li style={liStyle}>Not use the platform for any illegal or unauthorized purpose</li>
            <li style={liStyle}>Provide accurate information when enrolling or contacting us</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Intellectual Property</h2>
          <p style={pStyle}>
            All course content, including video lectures, materials, quizzes, and course structures,
            is the intellectual property of IMKAN Academy and its instructors. Purchasing a bundle
            grants you a license to view and learn from the content — it does not transfer ownership
            or reproduction rights.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Limitation of Liability</h2>
          <p style={pStyle}>
            IMKAN Academy strives to provide accurate and high-quality educational content. However,
            we do not guarantee specific academic results. Our platform is a learning resource and
            supplement — not a replacement for university attendance or official coursework.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>8. Changes to Terms</h2>
          <p style={pStyle}>
            We may update these Terms of Service from time to time. Continued use of the platform
            after changes constitutes acceptance of the updated terms. We will notify users of
            significant changes when possible.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>9. Contact</h2>
          <p style={pStyle}>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:imkanacademy@gmail.com" style={{ color: "var(--accent-light)" }}>
              imkanacademy@gmail.com
            </a>{" "}
            or via WhatsApp at +961 78 957 416.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
