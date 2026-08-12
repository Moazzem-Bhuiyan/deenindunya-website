'use client';

import { motion } from 'framer-motion';
import { Moon, CalendarCheck, HeartPulse, BookOpen, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import FeatureCard from '@/components/features/FeatureCard';

const FEATURES = [
  {
    eyebrow: 'Deen',
    title: 'Stay rooted in your worship',
    description:
      'Stay connected to your worship with prayer times, Salah tracking, Sunnah habits, Adhkar and everyday Islamic resources.',
    icon: Moon,
    variant: 'prayer' as const,
    span: 'large' as const,
    layout: 'side' as const,
  },
  {
    eyebrow: 'Plan',
    title: 'Organise your days',
    description:
      'Organise your days with your calendar, daily planner, to-do lists and routines — without separating your Deen from your Dunya.',
    icon: CalendarCheck,
    variant: 'planner' as const,
    span: 'medium' as const,
    layout: 'stacked' as const,
  },
  {
    eyebrow: 'Wellness',
    title: 'Build intentional habits',
    description: 'Create intentional wellness habits through water, mood and wellbeing tracking.',
    icon: HeartPulse,
    variant: 'wellness' as const,
    span: 'medium' as const,
    layout: 'stacked' as const,
  },
  {
    eyebrow: 'Learn',
    title: 'Grow your knowledge',
    description:
      'Build your Islamic knowledge with accessible guidance covering Salah, Wudu, Ghusl, fasting, Zakah, Hajj and other foundations of Islam.',
    icon: BookOpen,
    variant: 'learn' as const,
    span: 'large' as const,
    layout: 'stacked' as const,
  },
  {
    eyebrow: 'Reflect',
    title: 'Make space for gratitude',
    description:
      'Make space for gratitude, reflection and remembrance throughout your day through features like Islamic affirmations and morning & evening dhikr.',
    icon: Sparkles,
    variant: 'reflect' as const,
    span: 'full' as const,
    layout: 'side' as const,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-balance font-serif text-3xl leading-[1.15] text-espresso sm:text-4xl lg:text-[2.75rem]"
          >
            Everything you need, thoughtfully brought together.
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} index={i} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
