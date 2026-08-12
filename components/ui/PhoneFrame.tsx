import { ReactNode } from "react";

export default function PhoneFrame({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "small";
}) {
  const dims =
    size === "small" ? "w-[220px] h-[452px]" : "w-[300px] h-[616px] sm:w-[320px] sm:h-[657px]";

  return (
    <div
      className={`relative ${dims} shrink-0 rounded-[2.75rem] bg-espresso p-[10px] shadow-[0_50px_100px_-30px_rgba(58,42,29,0.45)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-ivory ring-1 ring-black/5">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-espresso" />
        <div className="h-full w-full overflow-hidden">{children}</div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-24 h-8 w-[3px] rounded-l bg-espresso/80" />
      <div className="absolute -left-[2px] top-36 h-12 w-[3px] rounded-l bg-espresso/80" />
      <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-r bg-espresso/80" />
    </div>
  );
}
