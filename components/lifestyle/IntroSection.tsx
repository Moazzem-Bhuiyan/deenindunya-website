"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { DotGrid } from "@/components/ui/Ornament";

export default function IntroSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-start"
          >
            <DotGrid className="text-taupe/50" />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-serif text-3xl leading-[1.15] text-espresso sm:text-4xl lg:text-[2.75rem]"
            >
              Designed for your Deen, made for your everyday life.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-balance font-body text-lg leading-relaxed text-espresso-soft"
            >
              Deen in Dunya was created to make space for what matters most.
              From Salah and Sunnah habits to planning, wellness and everyday
              routines, everything comes together in one thoughtfully
              designed space — helping you live intentionally while keeping
              your connection with Allah at the heart of your day.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
