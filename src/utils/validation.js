export const validateEmail = (email) => {
  if (!email) return true;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return /^\+?\d{8,15}$/.test(cleaned);
};

export const validateName = (name) => {
  return name && name.trim().length >= 2;
};

export const validateContactForm = (formData) => {
  const errors = {};
  if (!validateName(formData.name)) {
    errors.name = "Please enter a valid name (at least 2 characters)";
  }
  if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }
  return { isValid: Object.keys(errors).length === 0, errors };
};
