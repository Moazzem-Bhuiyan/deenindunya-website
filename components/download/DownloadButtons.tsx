import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16.365 1.43c0 1.14-.462 2.243-1.222 3.04-.83.87-2.15 1.55-3.25 1.46-.14-1.1.4-2.26 1.15-3.02.83-.86 2.28-1.5 3.32-1.48zM20.6 17.14c-.5 1.15-.74 1.66-1.38 2.67-.9 1.42-2.16 3.19-3.72 3.2-1.39.02-1.75-.9-3.64-.9-1.9 0-2.3.88-3.68.92-1.55.05-2.73-1.53-3.63-2.94-1.98-3.06-3.5-8.65-1.46-12.42.99-1.86 2.78-3.04 4.7-3.07 1.42-.02 2.76.96 3.63.96.86 0 2.5-1.18 4.2-1.01.72.03 2.73.29 4.02 2.19-.1.07-2.4 1.4-2.38 4.18.03 3.32 2.92 4.42 2.96 4.44-.03.1-.47 1.6-1.53 3.18z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3.6 2.4c-.35.2-.6.6-.6 1.1v17c0 .5.25.9.6 1.1l9.6-9.6-9.6-9.6zM15.4 12l2.75-1.6 3.2-1.85c.5-.3.7-.85.5-1.35l-4.6 2.65L14.4 12l2.85 2.15 4.6 2.65c.2-.5 0-1.05-.5-1.35l-3.2-1.85L15.4 12zM4.4 21.55l9-5.2-2.35-2.35-6.65 7.55zM13.4 15l-9 5.2c.15.05.3.1.45.1.2 0 .4-.05.55-.15l9.3-5.35L13.4 15z" />
    </svg>
  );
}

export default function DownloadButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={APP_STORE_URL}
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-espresso px-6 py-3.5 text-ivory shadow-soft transition-all duration-300 ease-premium hover:scale-[1.015] hover:bg-espresso-soft hover:shadow-lift active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso"
      >
        <AppleMark />
        <span className="text-left leading-none">
          <span className="block text-[10px] text-ivory/60">
            Download on the
          </span>
          <span className="block text-sm font-sans font-semibold tracking-wide2">
            App Store
          </span>
        </span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        className="inline-flex items-center justify-center gap-2.5 rounded-full border border-espresso/20 bg-transparent px-6 py-3.5 text-espresso transition-all duration-300 ease-premium hover:scale-[1.015] hover:border-espresso/50 hover:bg-espresso/[0.03] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso"
      >
        <PlayMark />
        <span className="text-left leading-none">
          <span className="block text-[10px] text-espresso-soft/70">
            Get it on
          </span>
          <span className="block text-sm font-sans font-semibold tracking-wide2">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
