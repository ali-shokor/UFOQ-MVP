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

export default function PrivacyPage() {
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

        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={dateStyle}>Last updated: July 14, 2026</p>

        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p style={pStyle}>
            IMKAN Academy ("we", "us", "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your information when you use our
            website and educational services.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>2. Information We Collect</h2>
          <p style={pStyle}>We collect the following types of information:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <strong>Contact information:</strong> name, email address, and phone number when you
              reach out through our contact form or WhatsApp
            </li>
            <li style={liStyle}>
              <strong>Course data:</strong> your selected courses, bundle type, and enrollment
              preferences
            </li>
            <li style={liStyle}>
              <strong>Usage data:</strong> basic analytics such as pages visited and time spent on
              the platform, collected through cookies
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>3. How We Use Your Information</h2>
          <p style={pStyle}>We use your information to:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>Deliver course content and manage your enrollment</li>
            <li style={liStyle}>Communicate with you about your courses, bundle status, and support</li>
            <li>
              Send important updates about IMKAN Academy (you can opt out at any time)
            </li>
            <li style={liStyle}>Improve our platform, courses, and user experience</li>
            <li style={liStyle}>Process payments and manage refunds</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Data Sharing</h2>
          <p style={pStyle}>
            We do <strong>not</strong> sell, trade, or share your personal information with third
            parties. Your data is only used internally by IMKAN Academy to provide and improve our
            services.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Data Security</h2>
          <p style={pStyle}>
            We implement reasonable security measures to protect your personal information.
            However, no method of electronic transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Cookies</h2>
          <p style={pStyle}>
            We use basic cookies to improve your experience and collect anonymous usage analytics.
            Cookies help us understand how visitors interact with our platform so we can improve
            it. You can disable cookies in your browser settings, though some features may not
            function properly.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Your Rights</h2>
          <p style={pStyle}>You have the right to:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>Access the personal data we hold about you</li>
            <li style={liStyle}>Request correction of inaccurate data</li>
            <li style={liStyle}>Request deletion of your personal data</li>
            <li style={liStyle}>Opt out of marketing communications at any time</li>
          </ul>
          <p style={pStyle}>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:imkanacademy@gmail.com" style={{ color: "var(--accent-light)" }}>
              imkanacademy@gmail.com
            </a>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>8. Data Retention</h2>
          <p style={pStyle}>
            We retain your personal information only as long as necessary to provide our services
            and fulfill the purposes described in this policy. If you request deletion, we will
            remove your data within a reasonable timeframe.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>9. Changes to This Policy</h2>
          <p style={pStyle}>
            We may update this Privacy Policy periodically. Any changes will be posted on this page
            with an updated date. Continued use of the platform after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>10. Contact</h2>
          <p style={pStyle}>
            For privacy-related questions or requests, contact us at{" "}
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
