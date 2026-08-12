'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import PhoneFrame from '@/components/ui/PhoneFrame';
import AppScreenshot, { ScreenshotVariant } from '@/components/screenshots/AppScreenshot';

const SCREENS: { variant: ScreenshotVariant; label: string; rotate: string }[] = [
  { variant: 'home', label: 'Home Dashboard', rotate: 'sm:-rotate-3' },
  { variant: 'prayer', label: 'Prayer & Deen', rotate: 'sm:rotate-1' },
  { variant: 'planner', label: 'Daily Planner', rotate: 'sm:-rotate-2 sm:translate-y-4' },
  { variant: 'wellness', label: 'Wellness', rotate: 'sm:rotate-2' },
  { variant: 'learn', label: 'Education', rotate: 'sm:-rotate-1' },
];

export default function ScreenshotShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="!max-w-xl ">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Inside the app
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-balance font-serif text-3xl leading-[1.15] text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            One app. Every part of your day.
          </motion.h2>
        </div>
      </Container>

      <div className="mt-16 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max mx-auto gap-8 px-6 sm:justify-center sm:px-8 lg:px-12">
          {SCREENS.map((screen, i) => (
            <motion.div
              key={screen.variant}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`shrink-0 ${screen.rotate} transition-transform duration-500 ease-premium hover:!rotate-0 hover:!translate-y-0`}
            >
              <PhoneFrame size="small" className="sm:!w-[240px] sm:!h-[494px]">
                <AppScreenshot variant={screen.variant} />
              </PhoneFrame>
              <p className="mt-4 text-center font-sans text-xs font-semibold uppercase tracking-wide2 text-taupe-dark">
                {screen.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
