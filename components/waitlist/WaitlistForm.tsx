"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// This form is intentionally decoupled from any provider so it can be wired
// up to Supabase, Firebase, Resend, Mailchimp, or ConvertKit later — just
// replace the body of handleSubmit's simulated request with a real call.
export default function WaitlistForm({
  className = "",
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    // Simulated request — swap for a real API/provider call when available.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-full border border-sage/40 bg-sage/10 px-5 py-3.5 ${
          align === "center" ? "mx-auto" : ""
        } ${className}`}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-ivory">
          <Check className="h-3.5 w-3.5" />
        </span>
        <p className="text-sm font-body text-espresso-soft">
          You&apos;re on the list. We&apos;ll keep you posted.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`w-full max-w-md ${align === "center" ? "mx-auto" : ""} ${className}`}
    >
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "waitlist-error" : undefined}
            className="w-full rounded-full border border-espresso/15 bg-white/70 px-5 py-3.5 text-sm font-body text-espresso placeholder:text-espresso-soft/50 outline-none transition-colors focus:border-espresso/50 focus:bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-espresso px-6 py-3.5 text-sm font-sans font-semibold tracking-wide2 text-ivory shadow-soft transition-all duration-300 ease-premium hover:scale-[1.015] hover:bg-espresso-soft hover:shadow-lift active:scale-[0.985] disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "loading" ? "Joining…" : "Notify Me"}
          {status !== "loading" && <ArrowRight className="h-3.5 w-3.5" />}
        </button>
      </div>
      {status === "error" && (
        <p
          id="waitlist-error"
          role="alert"
          className="mt-2 text-xs font-body text-[#9C4A3A]"
        >
          {error}
        </p>
      )}
    </form>
  );
}
