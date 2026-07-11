export default function LogoMark({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 260"
      fill="none"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="navyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F4E8C" />
          <stop offset="100%" stopColor="#173B6B" />
        </linearGradient>
        <linearGradient id="tealGrad" x1="0" y1="1" x2="0.4" y2="0">
          <stop offset="0%" stopColor="#01A8BB" />
          <stop offset="100%" stopColor="#01C5CF" />
        </linearGradient>
      </defs>

      {/* Orange circle (dot on the i) */}
      <circle cx="68" cy="32" r="24" fill="#E0B35A" />

      {/* Navy left bar (i body) — with curved top-right */}
      <path
        d="M44 64 C44 64, 44 62, 48 60 L80 60 C86 60, 90 64, 90 68 L90 196 C90 200, 88 204, 84 204 L48 204 C44 204, 44 200, 44 196 Z"
        fill="url(#navyGrad)"
      />

      {/* Teal arrow swooping from bottom-left to top-right with arrowhead */}
      <path
        d="M30 240 C30 240, 50 180, 80 140 C100 114, 124 88, 152 60 L176 44 L184 52 L160 76 C132 104, 108 130, 88 156 C58 194, 38 222, 34 240 Z"
        fill="url(#tealGrad)"
      />

      {/* Arrow head at top-right */}
      <path
        d="M156 32 L184 44 L172 72 Z"
        fill="url(#tealGrad)"
      />

      {/* Navy right shapes (k leg) — two angled bars */}
      <path
        d="M100 148 L136 64 L168 64 L124 204 L100 204 Z"
        fill="url(#navyGrad)"
      />

      {/* Orange triangle at bottom */}
      <path
        d="M104 220 L130 220 L117 248 Z"
        fill="#E0B35A"
      />
    </svg>
  );
}
