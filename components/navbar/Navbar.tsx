"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/navbar/MobileMenu";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex w-full max-w-content items-center justify-between container-px transition-all duration-500 ease-premium ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border transition-all duration-500 ease-premium ${
            scrolled
              ? "border-line/80 bg-ivory/80 px-5 py-2.5 shadow-soft backdrop-blur-md"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative font-sans text-sm text-espresso-soft transition-colors hover:text-espresso"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-espresso transition-all duration-300 ease-premium group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#download" className="!px-5 !py-2.5 !text-xs">
              Download App
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/[0.06] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
