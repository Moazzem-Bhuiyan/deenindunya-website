'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import DownloadButtons from '@/components/download/DownloadButtons';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import PhoneFrame from '@/components/ui/PhoneFrame';
// import AppScreenshot from "@/components/screenshots/AppScreenshot";
import HomePagessOfApp from '/public/images/homepageOfApp.jpg';
import FloatingCard from '@/components/hero/FloatingCard';
import { RhythmRail, ArcMark } from '@/components/ui/Ornament';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-52">
      <ArcMark className="pointer-events-none absolute -right-16 top-10 h-72 w-72 text-taupe/10 sm:h-96 sm:w-96" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="eyebrow"
          >
            An Islamic lifestyle &amp; wellness app
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-5 text-balance font-serif text-[2.75rem] leading-[1.05] text-espresso sm:text-6xl lg:text-[4.25rem]"
          >
            Your Deen.
            <br />
            Your Dunya.
            <br />
            <span className="italic text-taupe-dark">One space.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-7 max-w-lg text-balance font-body text-base leading-relaxed text-espresso-soft sm:text-lg"
          >
            Deen in Dunya is an Islamic lifestyle and wellness app designed to bring faith,
            planning, wellbeing and intentional living together — helping you navigate everyday life
            with Allah at the centre.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp} id="download">
            <DownloadButtons className="mt-9" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 max-w-md rounded-2xl border border-line/70 bg-white/40 p-5"
          >
            <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
              Coming soon — join the waitlist
            </p>
            <WaitlistForm className="mt-3" />
          </motion.div>
        </div>

        <div className="relative mx-auto flex h-[560px] w-full max-w-sm items-center justify-center sm:h-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float-slow"
          >
            <PhoneFrame>
              {/* <AppScreenshot variant="home" /> */}
              <Image
                src="/images/homepageOfApp.jpg"
                alt="Homepage of the app"
                quality={100}
                className="object-contain "
                width={1000}
                height={1000}
                priority
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </PhoneFrame>
          </motion.div>

          <FloatingCard className="-left-2 top-8 sm:left-2" delay={0.6} duration={6.5}>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-sage" />
              <div>
                <p className="text-xs font-sans font-semibold text-espresso">Fajr</p>
                <p className="text-[10px] text-espresso-soft/70">Completed</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-4 top-40 sm:right-0" delay={1.1} duration={7.5}>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
              Next Prayer
            </p>
            <p className="mt-1 font-serif text-lg text-espresso">Dhuhr</p>
            <p className="text-[10px] text-espresso-soft/70">12:18 PM</p>
          </FloatingCard>

          <FloatingCard className="-left-4 bottom-24 sm:left-0" delay={0.3} duration={7}>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
              Today&apos;s Progress
            </p>
            <p className="mt-1 font-serif text-lg text-espresso">4 / 5 prayers</p>
            <RhythmRail className="mt-2" />
          </FloatingCard>

          <FloatingCard className="-right-2 bottom-4 sm:right-4" delay={0.85} duration={6}>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
              Daily Intention
            </p>
            <p className="mt-1 font-serif text-sm italic leading-snug text-espresso">
              Be present.
              <br />
              Be grateful.
            </p>
          </FloatingCard>
        </div>
      </Container>
    </section>
  );
}
