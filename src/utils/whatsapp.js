const WHATSAPP_NUMBER = "+96178957416";

export const sendToWhatsApp = (formData, selectedCourses, sessions = [], cartInfo = {}) => {
  const { isBundleActive, isHalfBundleActive, totalPrice, courseTotal, sessionTotal, extraCourseTotal } = cartInfo;
  const lines = [];

  lines.push("*New Enrollment Request*");
  lines.push("");
  lines.push(`*Name:* ${formData.name}`);
  lines.push(`*Phone:* ${formData.phone}`);
  lines.push("");

  if (isBundleActive || isHalfBundleActive) {
    const bundleName = isBundleActive ? "Full Bundle" : "Half Bundle";
    const bundlePrice = isBundleActive ? 119 : 79;
    lines.push(`*Package:* ${bundleName} - $${bundlePrice}`);
    if (selectedCourses.length > 0) {
      lines.push("*Courses Included:*");
      selectedCourses.forEach((c) => {
        lines.push(`- ${c.code}: ${c.title}`);
      });
    }
    if (extraCourseTotal > 0) {
      lines.push(`*Extra Courses:* +$${extraCourseTotal}`);
    }
    if (sessions.length > 0) {
      lines.push("*1:1 Sessions:*");
      sessions.forEach((s) => {
        lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr x $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
      });
    }
    lines.push("");
    lines.push(`*Total: $${totalPrice}*`);
  } else {
    if (selectedCourses.length > 0) {
      lines.push("*Selected Courses:*");
      selectedCourses.forEach((c) => {
        lines.push(`- ${c.code}: ${c.title} - $${c.price}`);
      });
      lines.push(`*Courses Subtotal: $${courseTotal}*`);
    }
    if (sessions.length > 0) {
      lines.push("*1:1 Sessions:*");
      sessions.forEach((s) => {
        lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr x $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
      });
      lines.push(`*Sessions Subtotal: $${sessionTotal}*`);
    }
    lines.push("");
    lines.push(`*Total: $${totalPrice}*`);
  }

  if (formData.message) {
    lines.push("");
    lines.push(`*Message:* ${formData.message}`);
  }

  const message = lines.map(encodeURIComponent).join("%0A");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const sendToEmail = (formData, selectedCourses, sessions = [], cartInfo = {}) => {
  const { isBundleActive, isHalfBundleActive, totalPrice, courseTotal, sessionTotal, extraCourseTotal } = cartInfo;
  const lines = [];

  lines.push("New Enrollment Request");
  lines.push("");
  lines.push(`Name: ${formData.name}`);
  lines.push(`Phone: ${formData.phone}`);
  lines.push("");

  if (isBundleActive || isHalfBundleActive) {
    const bundleName = isBundleActive ? "Full Bundle" : "Half Bundle";
    const bundlePrice = isBundleActive ? 119 : 79;
    lines.push(`Package: ${bundleName} - $${bundlePrice}`);
    if (selectedCourses.length > 0) {
      lines.push("Courses Included:");
      selectedCourses.forEach((c) => {
        lines.push(`- ${c.code}: ${c.title}`);
      });
    }
    if (extraCourseTotal > 0) {
      lines.push(`Extra Courses: +$${extraCourseTotal}`);
    }
    if (sessions.length > 0) {
      lines.push("1:1 Sessions:");
      sessions.forEach((s) => {
        lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr x $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
      });
    }
    lines.push("");
    lines.push(`Total: $${totalPrice}`);
  } else {
    if (selectedCourses.length > 0) {
      lines.push("Selected Courses:");
      selectedCourses.forEach((c) => {
        lines.push(`- ${c.code}: ${c.title} - $${c.price}`);
      });
      lines.push(`Courses Subtotal: $${courseTotal}`);
    }
    if (sessions.length > 0) {
      lines.push("1:1 Sessions:");
      sessions.forEach((s) => {
        lines.push(`- ${s.courseCode}: ${s.courseTitle} (${s.hours}hr x $${s.pricePerHour}/hr = $${s.hours * s.pricePerHour})`);
      });
      lines.push(`Sessions Subtotal: $${sessionTotal}`);
    }
    lines.push("");
    lines.push(`Total: $${totalPrice}`);
  }

  if (formData.message) lines.push(`Message: ${formData.message}`);

  const subject = encodeURIComponent("Enrollment Request - IMKAN Academy");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:imkanacademy@gmail.com?subject=${subject}&body=${body}`;
};
