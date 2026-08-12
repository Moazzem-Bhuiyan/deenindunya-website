"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import DownloadButtons from "@/components/download/DownloadButtons";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-espresso/20 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[76px] z-50 rounded-3xl border border-line bg-ivory/95 p-6 shadow-lift backdrop-blur-md md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-xl px-3 py-3 font-sans text-base text-espresso transition-colors hover:bg-espresso/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t border-line pt-5">
              <DownloadButtons />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
