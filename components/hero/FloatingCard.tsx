"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 hidden rounded-2xl card-surface grain-border px-4 py-3 shadow-card backdrop-blur-sm sm:block ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </motion.div>
  );
}
