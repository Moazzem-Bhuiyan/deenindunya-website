# Deen in Dunya — Marketing Website

A premium, minimal marketing site for **Deen in Dunya**, an Islamic lifestyle
and wellness app. Built with Next.js 15 (App Router), TypeScript, Tailwind
CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> **Note:** `next/font/google` fetches font files from Google Fonts at build
> time, so `npm run build` requires an internet connection. This is normal —
> it will build cleanly on your machine or in CI as long as
> `fonts.googleapis.com` is reachable.

## Where to update things

### App Store / Google Play links
Edit `lib/constants.ts`:

```ts
export const APP_STORE_URL = "#";   // replace with your App Store URL
export const GOOGLE_PLAY_URL = "#"; // replace with your Google Play URL
```

These constants are used everywhere the download buttons appear (hero,
navbar, final CTA), so you only need to update them in one place.

### Support email
Also in `lib/constants.ts` — `SUPPORT_EMAIL`.

### App screenshots
The site currently uses polished, on-brand **placeholder screens** built
directly in `components/screenshots/AppScreenshot.tsx` (no image files
required) so every phone mockup already looks complete.

When real product screenshots are ready:
1. Add PNGs to `public/screenshots/` — suggested names:
   `home.png`, `prayer.png`, `planner.png`, `wellness.png`, `learn.png`,
   `reflect.png`.
2. In `AppScreenshot.tsx`, swap the relevant placeholder `<Screen />`
   component for a `next/image` reference to the new PNG inside the same
   `PhoneFrame` shell used elsewhere on the site.

### Waitlist form
`components/waitlist/WaitlistForm.tsx` currently simulates a network
request and shows a success state. To connect it to a real provider
(Supabase, Firebase, Resend, Mailchimp, ConvertKit, etc.), replace the
`await new Promise(...)` line inside `handleSubmit` with your real API call.

### Legal content
`app/privacy-policy/page.tsx` and `app/terms/page.tsx` contain
professional starting drafts. Sections with company-specific or
jurisdiction-specific requirements are marked with:

```
[Placeholder — to be reviewed and finalised by our legal team]
```

Please have these reviewed by a lawyer before launch.

## Routes

| Route              | Purpose                          |
| ------------------- | --------------------------------- |
| `/`                 | Main marketing site               |
| `/support`          | Support + FAQ                     |
| `/privacy-policy`   | Privacy Policy                    |
| `/terms`            | Terms & Conditions                |
| `/delete-account`   | Account / data deletion request   |

## Project structure

```
app/                  Routes (page.tsx per route)
components/
  navbar/              Navbar, mobile menu
  hero/                Hero section, floating cards
  features/            Feature grid + cards
  screenshots/          AppScreenshot placeholder screens, showcase section
  lifestyle/           Intro + lifestyle editorial sections
  audience/            "Who it's for" section
  download/            Download buttons, Final CTA
  waitlist/            Waitlist form
  footer/              Footer
  support/             FAQ accordion
  ui/                  Shared primitives (Button, Container, Logo, PhoneFrame, ornaments, legal layout)
lib/                  Shared constants
public/               Static assets (logo, screenshots, images)
```
