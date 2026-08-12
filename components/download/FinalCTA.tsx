"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import DownloadButtons from "@/components/download/DownloadButtons";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import PhoneFrame from "@/components/ui/PhoneFrame";
import AppScreenshot from "@/components/screenshots/AppScreenshot";
import { StarMark } from "@/components/ui/Ornament";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <StarMark className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-ivory/[0.06] sm:h-56 sm:w-56" />
          <StarMark className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 text-ivory/[0.05] sm:h-48 sm:w-48" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs font-sans font-semibold uppercase tracking-wide3 text-ivory/50"
              >
                Deen in Dunya
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 text-balance font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl"
              >
                Bring intention to your everyday.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-balance font-body text-base leading-relaxed text-ivory/70"
              >
                Faith, wellness, planning and everyday life — together in one
                space.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <DownloadButtons className="mt-9 [&_a:first-child]:bg-ivory [&_a:first-child]:text-espresso [&_a:first-child]:hover:bg-ivory/90 [&_a:last-child]:border-ivory/25 [&_a:last-child]:text-ivory [&_a:last-child]:hover:border-ivory/50 [&_a:last-child]:hover:bg-ivory/10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 max-w-md rounded-2xl border border-ivory/15 bg-ivory/5 p-5"
              >
                <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-ivory/50">
                  Coming soon — join the waitlist
                </p>
                <WaitlistForm className="mt-3 [&_input]:border-ivory/20 [&_input]:bg-ivory/10 [&_input]:text-ivory [&_input]:placeholder:text-ivory/40 [&_input]:focus:border-ivory/50 [&_input]:focus:bg-ivory/10 [&_button]:bg-ivory [&_button]:text-espresso [&_button]:hover:bg-ivory/90" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto animate-float"
            >
              <PhoneFrame>
                <AppScreenshot variant="reflect" />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
