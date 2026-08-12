"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArcMark } from "@/components/ui/Ornament";

const PILLARS = [
  "Your worship.",
  "Your goals.",
  "Your routines.",
  "Your wellbeing.",
  "Your everyday moments.",
];

export default function LifestyleSection() {
  return (
    <section id="lifestyle" className="relative overflow-hidden py-24 sm:py-32">
      <ArcMark className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 text-sage/10" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              A lifestyle, not just an app
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-balance font-serif text-3xl leading-[1.15] text-espresso sm:text-4xl lg:text-[2.6rem]"
            >
              More than an Islamic app. A lifestyle centred around your Deen.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-balance font-body text-base leading-relaxed text-espresso-soft"
            >
              Deen in Dunya isn&apos;t about separating faith from the rest of
              your life. It&apos;s about bringing them together with Allah at
              the centre.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-md text-balance font-serif text-xl italic leading-relaxed text-espresso"
            >
              A space designed to help you build a life where your Deen
              guides the way you move through your Dunya.
            </motion.p>
          </div>

          <div className="flex flex-col justify-center gap-1">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-5 border-b border-line/80 py-5 first:pt-0 last:border-none"
              >
                <span className="font-serif text-sm text-taupe/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-espresso transition-transform duration-300 ease-premium group-hover:translate-x-1.5 sm:text-3xl">
                  {pillar}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
