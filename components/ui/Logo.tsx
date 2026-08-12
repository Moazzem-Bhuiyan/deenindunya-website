import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-serif text-xl tracking-tight text-espresso ${className}`}
      aria-label="Deen in Dunya — Home"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-espresso text-ivory">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
          <path
            d="M12 2.5L13.9 9.3L20.5 12L13.9 14.7L12 21.5L10.1 14.7L3.5 12L10.1 9.3L12 2.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>
        Deen <span className="italic text-taupe-dark">in</span> Dunya
      </span>
    </Link>
  );
}
