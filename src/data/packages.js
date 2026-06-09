export const packages = [
  {
    id: "full-package",
    name: "Full Package",
    subtitle: "All Computer Science Courses",
    price: 99,
    originalPrice: 299,
    currency: "$",
    period: "one-time",
    features: [
      "Access to all Year 2 Semester 1 courses",
      "HD video lectures",
      "Downloadable study materials",
      "Practice assignments & quizzes",
      "Certificate of completion",
      "Priority support",
      "Lifetime access",
    ],
    highlighted: true,
    badge: "Best Value",
    majorId: "cs",
  },
  {
    id: "semester-package",
    name: "Semester Package",
    subtitle: "Current Semester Courses",
    price: 49,
    originalPrice: 129,
    currency: "$",
    period: "one-time",
    features: [
      "Access to semester courses",
      "HD video lectures",
      "Downloadable materials",
      "Practice assignments",
      "Certificate of completion",
    ],
    highlighted: false,
    badge: null,
    majorId: "cs",
  },
];

export default packages;
