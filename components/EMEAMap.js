export default function EMEAMap() {
  return (
    <svg viewBox="0 0 800 420" role="img" aria-label="Stylised EMEA coverage map" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#edf6e6" />
          <stop offset="100%" stopColor="#f8fbf6" />
        </linearGradient>
        <linearGradient id="region" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f6b3d" />
          <stop offset="100%" stopColor="#8cc63f" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="420" rx="28" fill="url(#sea)" />
      <g fill="#dce9d7" opacity="0.7">
        <circle cx="96" cy="70" r="40" />
        <circle cx="700" cy="320" r="56" />
        <circle cx="594" cy="60" r="28" />
      </g>
      <g fill="#d7e7d2">
        <path d="M172 116l60-24 52 18 36-16 44 10 42 34 14 54-14 30-36 14-24 30-60 4-56-20-30-32-8-46-30-26 10-30z" />
        <path d="M406 188l40-14 38 18 24 54-10 64 34 34-22 32-56-22-34 18-46-10-28-54 24-42 2-50 34-28z" />
        <path d="M486 120l48-22 66-4 48 24 48 12 40 34-20 26-56 20-38 40-56 2-48-26-24-44-8-62z" />
      </g>
      <g fill="url(#region)">
        <path d="M220 122l52-16 42 12 30-12 34 10 20 18-16 34-34 12-8 20-42 2-34-12-18-18-14-28-20-18 8-16z" />
        <path d="M398 208l34-12 28 16 18 36-8 44 18 18-18 20-30-12-22 12-24-6-16-30 12-24 2-36 16-14z" />
        <path d="M524 120l44-14 56 2 34 16 34 10 20 16-10 16-28 10-22 22-40 4-34-18-20-34-8-30z" />
      </g>
      <g>
        <circle cx="290" cy="154" r="6" fill="#d6b76a" />
        <circle cx="432" cy="252" r="6" fill="#d6b76a" />
        <circle cx="606" cy="156" r="6" fill="#d6b76a" />
      </g>
      <g fill="#163226" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="15">
        <text x="246" y="138">Europe</text>
        <text x="392" y="246">Africa</text>
        <text x="560" y="142">Middle East</text>
      </g>
    </svg>
  );
}
