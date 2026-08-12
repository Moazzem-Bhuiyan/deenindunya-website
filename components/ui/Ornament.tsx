// Small, restrained Islamic-inspired visual details used as brand signature
// elements throughout the site — never literal crescents/mosques/patterns.

export function RhythmRail({ className = "" }: { className?: string }) {
  // Five marks representing the five daily prayers — the site's recurring
  // "everyday rhythm" motif.
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-hidden="true"
    >
      {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((name, i) => (
        <span
          key={name}
          className={`h-1 rounded-full transition-all ${
            i < 4 ? "w-4 bg-espresso/70" : "w-2 bg-espresso/25"
          }`}
        />
      ))}
    </div>
  );
}

export function StarMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5L13.9 9.3L20.5 12L13.9 14.7L12 21.5L10.1 14.7L3.5 12L10.1 9.3L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArcMark({ className = "" }: { className?: string }) {
  // A single restrained crescent-inspired curve — used as a quiet backdrop
  // detail, never as a literal moon icon.
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M180 100C180 144.18 144.18 180 100 180"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M160 100C160 133.14 133.14 160 100 160"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DotGrid({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 9 });
  return (
    <div
      className={`grid grid-cols-3 gap-2 ${className}`}
      aria-hidden="true"
    >
      {dots.map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-current" />
      ))}
    </div>
  );
}
