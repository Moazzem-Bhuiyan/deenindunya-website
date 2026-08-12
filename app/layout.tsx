import type { Metadata } from "next";
import { Manrope, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://deenindunya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deen in Dunya — Your Deen. Your Dunya. One Space.",
    template: "%s — Deen in Dunya",
  },
  description:
    "Deen in Dunya brings faith, planning, wellness and intentional living together in one thoughtfully designed Islamic lifestyle app.",
  keywords: [
    "Islamic lifestyle app",
    "Muslim wellness app",
    "prayer times app",
    "Islamic planner",
    "Deen in Dunya",
    "Muslim daily planner",
    "Salah tracker",
  ],
  authors: [{ name: "Deen in Dunya" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Deen in Dunya — Your Deen. Your Dunya. One Space.",
    description:
      "An Islamic lifestyle and wellness app bringing faith, planning, wellbeing and intentional living together — with Allah at the centre.",
    siteName: "Deen in Dunya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deen in Dunya — Your Deen. Your Dunya. One Space.",
    description:
      "Faith, wellness, planning and everyday life — together in one space.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} ${instrumentSerif.variable} bg-ivory text-espresso font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
