"use client";

import { motion } from "framer-motion";
import {
  Repeat,
  Compass,
  GraduationCap,
  Leaf,
  Sparkle,
} from "lucide-react";
import Container from "@/components/ui/Container";

const AUDIENCES = [
  {
    title: "Building Habits",
    description:
      "Create consistency in your everyday worship and routines.",
    icon: Repeat,
  },
  {
    title: "Reconnecting",
    description:
      "Find your way back to intentional worship and remembrance.",
    icon: Compass,
  },
  {
    title: "Learning",
    description: "Build your understanding of Islamic foundations.",
    icon: GraduationCap,
  },
  {
    title: "Wellbeing",
    description: "Take care of your mind, habits and everyday wellbeing.",
    icon: Leaf,
  },
  {
    title: "Living Intentionally",
    description: "Bring your faith, goals and everyday life together.",
    icon: Sparkle,
  },
];

export default function AudienceSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Who it&apos;s for
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-balance font-serif text-3xl leading-[1.15] text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Made for every stage of your journey.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-body text-base leading-relaxed text-espresso-soft"
          >
            Whether you&apos;re building new habits, reconnecting with your
            Deen, looking after your wellbeing, learning more about Islam or
            simply wanting more intention in your everyday routine — Deen in
            Dunya was created to meet you where you are.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 5) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl grain-border bg-white/40 p-6 transition-all duration-400 ease-premium hover:-translate-y-1 hover:bg-white/80 hover:shadow-card"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso/[0.06] transition-colors group-hover:bg-espresso group-hover:text-ivory">
                <a.icon className="h-4 w-4 text-espresso-soft group-hover:text-ivory" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-serif text-lg text-espresso">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
