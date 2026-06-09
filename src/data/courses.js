const courseDatabase = {
  cs: {
    1: {
      1: [
        { code: "I1101", title: "Introduction to Programming", description: "Fundamentals of programming using Python", credits: 3, available: true },
        { code: "I1102", title: "Discrete Mathematics", description: "Logic, sets, relations, and graph theory", credits: 3, available: true },
        { code: "I1103", title: "English for Computing", description: "Technical writing and communication skills", credits: 2, available: true },
        { code: "M1101", title: "Calculus I", description: "Limits, derivatives, and integrals", credits: 3, available: true },
        { code: "S1101", title: "Physics I", description: "Mechanics and thermodynamics", credits: 3, available: true },
      ],
      2: [
        { code: "I1201", title: "Object-Oriented Programming", description: "Java OOP principles and design patterns", credits: 3, available: true },
        { code: "I1202", title: "Data Structures", description: "Arrays, linked lists, trees, and graphs", credits: 3, available: true },
        { code: "I1203", title: "Digital Logic", description: "Boolean algebra and circuit design", credits: 3, available: true },
        { code: "M1201", title: "Calculus II", description: "Series, multivariable calculus", credits: 3, available: true },
        { code: "S1201", title: "Physics II", description: "Electricity, magnetism, and optics", credits: 3, available: true },
      ],
    },
    2: {
      1: [
        { code: "I2201", title: "Algorithms & Complexity", description: "Algorithm design, analysis, and computational complexity", credits: 3, available: true },
        { code: "I2202", title: "Database Systems", description: "Relational databases, SQL, and normalization", credits: 3, available: true },
        { code: "I2203", title: "Operating Systems", description: "Process management, memory, and file systems", credits: 3, available: true },
        { code: "I2204", title: "Computer Networks", description: "Network protocols, architecture, and security", credits: 3, available: true },
        { code: "I2205", title: "Software Engineering", description: "SDLC, agile methodologies, and project management", credits: 3, available: true },
        { code: "I2231", title: "Web Development", description: "Full-stack web technologies and frameworks", credits: 3, available: true },
        { code: "M2250", title: "Linear Algebra", description: "Vector spaces, matrices, and transformations", credits: 3, available: true },
        { code: "S2250", title: "Probability & Statistics", description: "Probability theory and statistical inference", credits: 3, available: true },
      ],
      2: [
        { code: "I2301", title: "Artificial Intelligence", description: "Machine learning fundamentals and AI algorithms", credits: 3, available: true },
        { code: "I2302", title: "Theory of Computation", description: "Automata, formal languages, and computability", credits: 3, available: true },
        { code: "I2303", title: "Compiler Design", description: "Lexical analysis, parsing, and code generation", credits: 3, available: true },
        { code: "I2304", title: "Computer Architecture", description: "CPU design, pipelining, and parallel processing", credits: 3, available: true },
        { code: "I2305", title: "Cybersecurity Fundamentals", description: "Cryptography, network security, and ethical hacking", credits: 3, available: true },
        { code: "I2306", title: "Mobile App Development", description: "Cross-platform mobile application development", credits: 3, available: true },
        { code: "M2350", title: "Numerical Methods", description: "Computational methods for engineering problems", credits: 3, available: true },
      ],
    },
    3: {
      1: [
        { code: "I3301", title: "Machine Learning", description: "Supervised and unsupervised learning algorithms", credits: 3, available: false },
        { code: "I3302", title: "Cloud Computing", description: "Cloud architecture, deployment, and DevOps", credits: 3, available: false },
        { code: "I3303", title: "Blockchain Technology", description: "Distributed systems and smart contracts", credits: 3, available: false },
        { code: "I3304", title: "Natural Language Processing", description: "Text processing and language models", credits: 3, available: false },
        { code: "I3305", title: "Computer Vision", description: "Image processing and visual recognition", credits: 3, available: false },
        { code: "I3306", title: "Capstone Project I", description: "Senior project planning and design", credits: 4, available: false },
      ],
      2: [
        { code: "I3401", title: "Deep Learning", description: "Neural networks and advanced AI architectures", credits: 3, available: false },
        { code: "I3402", title: "Quantum Computing", description: "Quantum algorithms and programming", credits: 3, available: false },
        { code: "I3403", title: "IoT Systems", description: "Internet of Things architecture and applications", credits: 3, available: false },
        { code: "I3404", title: "Data Mining", description: "Large-scale data analysis and pattern recognition", credits: 3, available: false },
        { code: "I3405", title: "Capstone Project II", description: "Senior project implementation and defense", credits: 4, available: false },
      ],
    },
  },
};

export const getCourses = (majorId, year, semester) => {
  return courseDatabase[majorId]?.[year]?.[semester] || [];
};

export const getAvailableSemesters = (majorId, year) => {
  const majorData = courseDatabase[majorId];
  if (!majorData || !majorData[year]) return [];
  return Object.keys(majorData[year]).map(Number);
};

export const getAvailableYears = (majorId) => {
  const majorData = courseDatabase[majorId];
  if (!majorData) return [];
  return Object.keys(majorData).map(Number);
};

export default courseDatabase;
