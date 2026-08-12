import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { FOOTER_LINKS, SOCIAL_LINKS, SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/80 py-16">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-espresso-soft/80">
              An Islamic lifestyle and wellness app — bringing your Deen and
              your Dunya together, one intentional day at a time.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-espresso-soft transition-colors hover:text-espresso"
            >
              <Mail className="h-3.5 w-3.5" />
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-espresso-soft transition-colors hover:text-espresso"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
                Legal
              </p>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.slice(3).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-espresso-soft transition-colors hover:text-espresso"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
                Follow
              </p>
              <ul className="mt-4 space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-espresso-soft transition-colors hover:text-espresso"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-line/80 pt-8 sm:flex-row">
          <p className="text-xs text-espresso-soft/60">
            © 2026 Deen in Dunya. All rights reserved.
          </p>
          <p className="text-xs italic text-espresso-soft/60">
            Your Deen. Your Dunya. One space.
          </p>
        </div>
      </Container>
    </footer>
  );
}
