import "./AmbientGlow.css";

export default function AmbientGlow({ count = 18 }) {
  return (
    <div className="ambient-glow" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={`ambient-orb ambient-orb-${(i % 5) + 1}`} />
      ))}
    </div>
  );
}
