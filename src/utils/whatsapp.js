const WHATSAPP_NUMBER = "+96178957416";

export const sendToWhatsApp = (formData, selectedCourses, sessions = []) => {
  const lines = [];

  lines.push("*New Enrollment Request*");
  lines.push("");
  lines.push(`*Name:* ${formData.name}`);
  lines.push(`*Phone:* ${formData.phone}`);
  if (formData.email) lines.push(`*Email:* ${formData.email}`);
  lines.push("");

  if (selectedCourses.length > 0) {
    lines.push("*Selected Courses:*");
    selectedCourses.forEach((c) => {
      lines.push(`- ${c.code}: ${c.title} ($${c.price})`);
    });
    lines.push("");
  }

  if (sessions.length > 0) {
    lines.push("*1:1 Sessions:*");
    sessions.forEach((s) => {
      lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr × $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
    });
    lines.push("");
  }

  if (formData.message) {
    lines.push(`*Message:* ${formData.message}`);
  }

  const message = lines.map(encodeURIComponent).join("%0A");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const sendToEmail = (formData, selectedCourses, sessions = []) => {
  const lines = [];

  lines.push("New Enrollment Request");
  lines.push("");
  lines.push(`Name: ${formData.name}`);
  lines.push(`Phone: ${formData.phone}`);
  if (formData.email) lines.push(`Email: ${formData.email}`);
  lines.push("");

  if (selectedCourses.length > 0) {
    lines.push("Selected Courses:");
    selectedCourses.forEach((c) => {
      lines.push(`- ${c.code}: ${c.title} ($${c.price})`);
    });
    lines.push("");
  }

  if (sessions.length > 0) {
    lines.push("1:1 Sessions:");
    sessions.forEach((s) => {
      lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr × $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
    });
    lines.push("");
  }

  if (formData.message) lines.push(`Message: ${formData.message}`);

  const subject = encodeURIComponent("Enrollment Request - UFOQ Academy");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:ali.shokor.dev@gmail.com?subject=${subject}&body=${body}`;
};
