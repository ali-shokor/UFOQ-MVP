import "./Marquee.css";

const items = [
  "Expert Mentors",
  "Structured Courses",
  "Past Exams",
  "Study Summaries",
  "1:1 Sessions",
  "Career Guidance",
  "Project Help",
  "All Specialties",
];

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        )).reduce((acc, el, i, arr) => {
          if (i > 0) acc.push(<span key={`s${i}`} className="marquee-sep">✦</span>);
          acc.push(el);
          return acc;
        }, [])}
      </div>
    </div>
  );
}
