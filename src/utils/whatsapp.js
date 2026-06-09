const WHATSAPP_NUMBER = "+212600000000";

export const sendToWhatsApp = (formData, selectedCourses) => {
  const courseList = selectedCourses
    .map((c) => `- ${c.code}: ${c.title}`)
    .join("%0A");

  const message = `*New Course Enrollment Request*%0A%0A` +
    `*Name:* ${encodeURIComponent(formData.name)}%0A` +
    `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
    `*Email:* ${encodeURIComponent(formData.email || "N/A")}%0A%0A` +
    `*Selected Courses:*%0A${courseList}%0A%0A` +
    `*Message:* ${encodeURIComponent(formData.message || "No additional message")}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const sendToEmail = (formData, selectedCourses) => {
  const courseList = selectedCourses.map((c) => `${c.code}: ${c.title}`).join("\n");
  const subject = encodeURIComponent("Course Enrollment Request - UFOQ Academy");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "N/A"}\n\nSelected Courses:\n${courseList}\n\nMessage: ${formData.message || "No additional message"}`
  );
  window.location.href = `mailto:info@ufuqacademy.com?subject=${subject}&body=${body}`;
};
