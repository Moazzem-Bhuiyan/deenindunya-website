import { RhythmRail } from '@/components/ui/Ornament';
import {
  BookOpen,
  Droplets,
  Smile,
  Sparkles,
  Sun,
  CheckCircle2,
  Circle,
  ChevronRight,
  Moon,
  Sunrise,
  CloudSun,
  Sunset,
} from 'lucide-react';
import Image from 'next/image';

export type ScreenshotVariant = 'home' | 'prayer' | 'planner' | 'wellness' | 'learn' | 'reflect';

// NOTE: These are polished, on-brand placeholder screens built with real UI
// so the phone mockups never feel empty. When production screenshots are
// ready, drop PNGs into /public/screenshots/ (home.png, prayer.png,
// planner.png, wellness.png, learn.png, reflect.png) and swap the
// corresponding <Screen /> below for an <Image src="/screenshots/x.png" />.

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-4 text-[10px] font-sans font-semibold text-espresso/70">
      <span>9:41</span>
      <span className="tracking-wide">•••</span>
    </div>
  );
}

function ScreenShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#FBF7EF] to-[#F3E9D6] pt-8">
      {/* <StatusBar /> */}
      <div className="flex-1 px-5 pt-5 pb-6">{children}</div>
    </div>
  );
}

function HomeScreen() {
  return (
    <ScreenShell>
      <p className="font-body text-[11px] text-espresso-soft/70">Assalamu Alaikum</p>
      <h3 className="mt-0.5 font-serif text-2xl text-espresso">Yusuf</h3>

      <div className="mt-4 rounded-2xl bg-espresso p-4 text-ivory shadow-card">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wide3 text-ivory/60">Next Prayer</span>
          <Sun className="h-3.5 w-3.5 text-ivory/60" />
        </div>
        <div className="mt-1.5 flex items-baseline justify-between">
          <span className="font-serif text-3xl">Dhuhr</span>
          <span className="font-sans text-sm text-ivory/70">12:18 PM</span>
        </div>
        <div className="mt-3">
          <RhythmRail />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl card-surface grain-border p-3">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
            Today
          </p>
          <p className="mt-1 font-serif text-xl text-espresso">4 / 5</p>
          <p className="text-[10px] text-espresso-soft/70">prayers</p>
        </div>
        <div className="rounded-xl card-surface grain-border p-3">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
            Intention
          </p>
          <p className="mt-1 font-serif text-sm leading-snug text-espresso">
            Be present.
            <br />
            Be grateful.
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
          Today&apos;s habits
        </p>
        {[
          { label: 'Fajr Sunnah', done: true },
          { label: 'Morning Adhkar', done: true },
          { label: 'Drink 2L water', done: false },
        ].map((h) => (
          <div key={h.label} className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
            {h.done ? (
              <CheckCircle2 className="h-4 w-4 text-sage" />
            ) : (
              <Circle className="h-4 w-4 text-taupe/50" />
            )}
            <span className="text-xs font-body text-espresso-soft">{h.label}</span>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

function PrayerScreen() {
  const prayers = [
    { name: 'Fajr', time: '5:12 AM', icon: Sunrise, done: true },
    { name: 'Dhuhr', time: '12:18 PM', icon: CloudSun, done: true },
    { name: 'Asr', time: '3:47 PM', icon: Sun, done: true },
    { name: 'Maghrib', time: '6:52 PM', icon: Sunset, done: false },
    { name: 'Isha', time: '8:20 PM', icon: Moon, done: false },
  ];
  return (
    <ScreenShell>
      <p className="eyebrow">Deen</p>
      <h3 className="mt-1 font-serif text-2xl text-espresso">Today&apos;s Salah</h3>
      <div className="mt-4 space-y-2">
        {prayers.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-xl card-surface grain-border px-3.5 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sand/60">
                <p.icon className="h-4 w-4 text-espresso-soft" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-espresso">{p.name}</p>
                <p className="text-[10px] text-espresso-soft/60">{p.time}</p>
              </div>
            </div>
            {p.done ? (
              <CheckCircle2 className="h-4 w-4 text-sage" />
            ) : (
              <Circle className="h-4 w-4 text-taupe/40" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-espresso/[0.04] p-3.5">
        <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
          Sunnah &amp; Adhkar
        </p>
        <p className="mt-1 text-xs text-espresso-soft">Morning Adhkar · Evening Adhkar · Witr</p>
      </div>
    </ScreenShell>
  );
}

function PlannerScreen() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <ScreenShell>
      <p className="eyebrow">Plan</p>
      <h3 className="mt-1 font-serif text-2xl text-espresso">This Week</h3>
      <div className="mt-4 flex justify-between">
        {days.map((d, i) => (
          <div
            key={i}
            className={`flex h-9 w-9 flex-col items-center justify-center rounded-full text-[11px] font-sans ${
              i === 2 ? 'bg-espresso text-ivory' : 'bg-white/60 text-espresso-soft'
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {[
          { t: '7:00', label: 'Quran — Juz 5', tag: 'Deen' },
          { t: '9:30', label: 'Deep work block', tag: 'Focus' },
          { t: '1:00', label: 'Walk + Dhuhr', tag: 'Wellness' },
          { t: '8:00', label: 'Family dinner', tag: 'Life' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl card-surface grain-border px-3.5 py-2.5"
          >
            <span className="w-10 shrink-0 font-sans text-[10px] text-espresso-soft/60">
              {item.t}
            </span>
            <div className="h-6 w-px bg-line" />
            <div className="flex-1">
              <p className="text-xs font-body text-espresso">{item.label}</p>
              <p className="text-[9px] uppercase tracking-wide2 text-taupe-dark">{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

function WellnessScreen() {
  return (
    <>
      {/* <p className="eyebrow">Wellness</p>
      <h3 className="mt-1 font-serif text-2xl text-espresso">How are you today?</h3>
      <div className="mt-4 flex justify-between rounded-xl card-surface grain-border p-3">
        {['😔', '😐', '🙂', '😊', '🤲'].map((emoji, i) => (
          <div
            key={i}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-base ${
              i === 3 ? 'bg-sage/30 ring-1 ring-sage' : ''
            }`}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-espresso/[0.04] p-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-sage" />
            <span className="text-xs font-sans font-semibold text-espresso">Water</span>
          </div>
          <span className="text-xs text-espresso-soft/70">5 / 8 cups</span>
        </div>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${i < 5 ? 'bg-sage' : 'bg-sage/20'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-espresso/[0.04] p-3.5">
        <div className="flex items-center gap-2">
          <Smile className="h-4 w-4 text-taupe-dark" />
          <span className="text-xs font-sans font-semibold text-espresso">Mood this week</span>
        </div>
        <div className="mt-2 flex items-end gap-1.5">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-sage/50"
              style={{ height: `${h * 0.4}px` }}
            />
          ))}
        </div>
      </div> */}

      <Image
        src="/images/wellness.png"
        alt="Wellness"
        width={1000}
        height={1030}
        className="w-full object-contain"
      />
    </>
  );
}

function LearnScreen() {
  const topics = [
    { title: 'The Foundations of Wudu', tag: 'Purification' },
    { title: 'Understanding Salah, step by step', tag: 'Worship' },
    { title: 'An Introduction to Zakah', tag: 'Foundations' },
    { title: 'Fasting with Intention', tag: 'Ramadan' },
  ];
  return (
    <>
      {/* <p className="eyebrow">Learn</p>
      <h3 className="mt-1 font-serif text-2xl text-espresso">Continue learning</h3>
      <div className="mt-4 space-y-2.5">
        {topics.map((t) => (
          <div
            key={t.title}
            className="flex items-center justify-between rounded-xl card-surface grain-border px-3.5 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sand/60">
                <BookOpen className="h-3.5 w-3.5 text-espresso-soft" />
              </div>
              <div>
                <p className="text-xs font-body leading-snug text-espresso">{t.title}</p>
                <p className="text-[9px] uppercase tracking-wide2 text-taupe-dark">{t.tag}</p>
              </div>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-taupe/50" />
          </div>
        ))}
      </div> */}
      <Image
        src="/images/educationHub.png"
        alt="Learn"
        width={1000}
        height={1000}
        className="w-full !object-cover"
      />
    </>
  );
}

function ReflectScreen() {
  return (
    <ScreenShell>
      <p className="eyebrow">Reflect</p>
      <h3 className="mt-1 font-serif text-2xl text-espresso">Evening Dhikr</h3>
      <div className="mt-4 rounded-2xl bg-espresso p-5 text-center text-ivory shadow-card">
        <Sparkles className="mx-auto h-4 w-4 text-ivory/60" />
        <p className="mt-3 font-serif text-lg italic leading-relaxed">
          &ldquo;And it is He who created the night and the day.&rdquo;
        </p>
        <p className="mt-3 font-sans text-[10px] uppercase tracking-wide3 text-ivory/50">33 / 99</p>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-[10px] font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
          Today&apos;s affirmation
        </p>
        <div className="rounded-xl card-surface grain-border p-3.5">
          <p className="text-xs italic text-espresso-soft">
            I am grateful for this day and the chance to grow closer to Allah.
          </p>
        </div>
      </div>
    </ScreenShell>
  );
}

const SCREENS: Record<ScreenshotVariant, () => React.ReactNode> = {
  home: HomeScreen,
  prayer: PrayerScreen,
  planner: PlannerScreen,
  wellness: WellnessScreen,
  learn: LearnScreen,
  reflect: ReflectScreen,
};

export default function AppScreenshot({ variant }: { variant: ScreenshotVariant }) {
  const Screen = SCREENS[variant];
  return <Screen />;
}
