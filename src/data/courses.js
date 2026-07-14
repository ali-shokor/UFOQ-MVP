const courseDatabase = {
  cs: {
    1: {
      1: [
        { code: "M1100", title: "Algebra I", description: "Fundamentals of programming using Python", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "M1101", title: "Analysis I", description: "Logic, sets, relations, and graph theory", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "P1100", title: "Mechanics", description: "Technical writing and communication skills", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "P1101", title: "Electricity", description: "Limits, derivatives, and integrals", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I1100", title: "Introduction to Programming I", description: "Mechanics and thermodynamics", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "S1100", title: "Statistics I", description: "Mechanics and thermodynamics", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        
      ],
      2: [
        { code: "I1101", title: "C Programming Language", description: "Java OOP principles and design patterns", credits: 6, price: 25, instructor: "Ali Shokor", available: true },
        { code: "M1102", title: "Algebra II", description: "Boolean algebra and circuit design", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "M1103", title: "Algebra III", description: "Series, multivariable calculus", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "M1104", title: "Analysis II", description: "Electricity, magnetism, and optics", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "M1105", title: "Analysis III", description: "Electricity, magnetism, and optics", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        { code: "M1106", title: "Analysis IIII", description: "Electricity, magnetism, and optics", credits: 3, price: 20, instructor: "Ali Shokor", available: true },

      ],
    },
    2: {
      1: [
        { code: "I2201", title: "Web Development - Client Side", description: "Algorithm design, analysis, and computational complexity", credits: 4, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I2202", title: "Computer Organization", description: "Relational databases, SQL, and normalization", credits: 4, price: 20, instructor: "Alaa Tirani", available: true },
        { code: "I2203", title: "Operating System 1", description: "Process management, memory, and file systems", credits: 4, price: 25, instructor: "Ali Shokor", available: true },
        { code: "I2204", title: "Imperative Programming - C Programming Language", description: "Network protocols, architecture, and security", credits: 5, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I2205", title: "Graph Theory", description: "SDLC, agile methodologies, and project management", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "I2231", title: "Operational Research", description: "Full-stack web technologies and frameworks", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "I2235", title: "Scripting Language - Python", description: "Basics of python", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "M2250", title: "Math", description: "Vector spaces, matrices, and transformations", credits: 3, price: 15, instructor: "Alaa Tirani", available: true },
        { code: "S2250", title: "Probability & Statistics", description: "Probability theory and statistical inference", credits: 4, price: 20, instructor: "Alaa Tirani", available: true },
      ],
      2: [
        { code: "I2206", title: "Data Structures", description: "Machine learning fundamentals and AI algorithms", credits: 3, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I2207", title: "Computer Architecture", description: "Automata, formal languages, and computability", credits: 3, price: 20, instructor: "Alaa Tirani", available: true },
        { code: "I2208", title: "Network 1", description: "Lexical analysis, parsing, and code generation", credits: 3, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I2209", title: "Prolog", description: "CPU design, pipelining, and parallel processing", credits: 3, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I2210", title: "Data Base 1", description: "Cryptography, network security, and ethical hacking", credits: 3, price: 25, instructor: "Ali Shokor", available: true },
        { code: "I2211", title: "OOP", description: "OOP Conecept in Java", credits: 3, price: 25, instructor: "Alaa Tirani", available: true },
        { code: "I2236", title: "Embedded Systems", description: "Computational methods for engineering problems", credits: 3, price: 15, instructor: "Alaa Tirani", available: true },
      ],
    },
    3: {
      1: [
        { code: "I3301", title: "Software Engineering", description: "Software development lifecycle, design patterns, and agile methodologies", credits: 4, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I3302", title: "PHP", description: "Server-side web development with PHP and MySQL", credits: 4, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I3303", title: "Operating Systems II", description: "Advanced OS concepts: distributed systems and real-time processing", credits: 4, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I3304", title: "Computer Networks II", description: "Advanced networking: routing, switching, and network security", credits: 4, price: 25, instructor: "Ali Shokor", available: true },
        { code: "I3305", title: "Graphical User Interface", description: "GUI design principles and modern UI frameworks", credits: 3, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I3306", title: "Database Systems II", description: "Advanced SQL, NoSQL, data warehousing, and performance tuning", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "I3350", title: "Mobile Development", description: "Cross-platform mobile app development with React Native and Flutter", credits: 5, price: 30, instructor: "Ali Shokor", available: true },
      ],
      2: [
        { code: "I3307", title: "Theory of Computation", description: "Automata theory, formal languages, and computational complexity", credits: 4, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I3308", title: "ArcGIS", description: "Geographic information systems and spatial analysis", credits: 4, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I3340", title: "Parallel Programming", description: "Multi-threaded and distributed computing paradigms", credits: 4, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I3344", title: "Numerical Analysis", description: "Numerical methods for solving mathematical problems computationally", credits: 6, price: 30, instructor: "Ali Shokor", available: true },
        { code: "I3330", title: "Project Management", description: "Project planning, scheduling, and team leadership", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "I3332", title: "ASP.NET", description: "Web application development with ASP.NET framework", credits: 3, price: 20, instructor: "Ali Shokor", available: true },
        { code: "I3335", title: "Introduction to AI", description: "Fundamentals of artificial intelligence and machine learning", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
        { code: "I3336", title: "Introduction to Cyber Security", description: "Cybersecurity principles, threat analysis, and defense strategies", credits: 3, price: 15, instructor: "Ali Shokor", available: true },
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
