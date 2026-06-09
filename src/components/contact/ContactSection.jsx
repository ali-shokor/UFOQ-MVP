import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, User, Mail, MessageSquare, BookOpen } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";
import { validateContactForm } from "../../utils/validation";
import { sendToWhatsApp } from "../../utils/whatsapp";
import "./ContactSection.css";

export default function ContactSection() {
  const { selectedCourses } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    if (selectedCourses.length === 0) {
      setErrors({ courses: "Please select at least one course before submitting." });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      sendToWhatsApp(formData, selectedCourses);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Start Your <span className="gradient-text">Journey Today</span>
          </h2>
          <p className="section-description">
            Fill out the form below to enroll in your selected courses. Our team
            will reach out to confirm your enrollment.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label className="form-label">
                <User size={16} />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                className={`form-input ${errors.name ? "form-input-error" : ""}`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Phone size={16} />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                className={`form-input ${errors.phone ? "form-input-error" : ""}`}
                placeholder="+212 6XX XXX XXX"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Mail size={16} />
                Email Address (optional)
              </label>
              <input
                type="email"
                name="email"
                className={`form-input ${errors.email ? "form-input-error" : ""}`}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <MessageSquare size={16} />
                Message (optional)
              </label>
              <textarea
                name="message"
                className="form-textarea"
                rows={4}
                placeholder="Any questions or special requests..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {selectedCourses.length > 0 && (
              <div className="selected-courses-preview">
                <label className="form-label">
                  <BookOpen size={16} />
                  Selected Courses ({selectedCourses.length})
                </label>
                <div className="selected-courses-list">
                  {selectedCourses.map((course) => (
                    <span key={course.code} className="selected-course-tag">
                      {course.code}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {errors.courses && (
              <span className="form-error form-error-courses">{errors.courses}</span>
            )}

            <Button
              type="submit"
              variant="whatsapp"
              size="lg"
              fullWidth
              icon={Send}
              loading={isSubmitting}
            >
              Send via WhatsApp
            </Button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-info-card">
              <h3>Why Enroll With Us?</h3>
              <ul className="contact-benefits">
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Expert-led courses with structured curriculum</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>HD video lectures and downloadable materials</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Certificates of completion</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Lifetime access to course content</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Priority student support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
