'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import PhoneFrame from '@/components/ui/PhoneFrame';
import AppScreenshot, { ScreenshotVariant } from '@/components/screenshots/AppScreenshot';

export type FeatureCardProps = {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant: ScreenshotVariant;
  span?: 'large' | 'medium' | 'full';
  layout?: 'stacked' | 'side';
};

const spanClasses: Record<NonNullable<FeatureCardProps['span']>, string> = {
  large: 'md:col-span-2',
  medium: 'md:col-span-1',
  full: 'md:col-span-3',
};

export default function FeatureCard({
  index,
  eyebrow,
  title,
  description,
  icon: Icon,
  variant,
  span = 'medium',
  layout = 'stacked',
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl grain-border card-surface p-7 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-espresso/25 hover:shadow-lift sm:p-9 ${spanClasses[span]}`}
    >
      <div
        className={
          layout === 'side'
            ? 'flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between'
            : 'flex flex-col'
        }
      >
        <div className={layout === 'side' ? 'flex-1' : ''}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso/[0.06]">
            <Icon className="h-4.5 w-4.5 text-espresso-soft" strokeWidth={1.75} />
          </div>
          <p className="mt-5 eyebrow">{eyebrow}</p>
          <h3 className="mt-2 font-serif text-2xl text-espresso sm:text-[1.75rem]">{title}</h3>
          <p className="mt-3 max-w-sm text-balance font-body text-[15px] leading-relaxed text-espresso-soft">
            {description}
          </p>
        </div>

        <div
          className={
            layout === 'side'
              ? 'shrink-0 origin-bottom scale-[0.62] sm:scale-75'
              : 'mt-6 flex justify-center origin-top scale-[0.62] sm:scale-[0.68]'
          }
        >
          <PhoneFrame size="small">
            <AppScreenshot variant={variant} />
          </PhoneFrame>
        </div>
      </div>
    </motion.div>
  );
}
