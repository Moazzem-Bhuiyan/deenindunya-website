import type { Metadata } from "next";
import { Mail, MessageCircleQuestion } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import FAQ, { FAQGroup } from "@/components/support/FAQ";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with your Deen in Dunya account, app issues, subscriptions and privacy questions.",
};

const FAQ_GROUPS: FAQGroup[] = [
  {
    category: "Account help",
    items: [
      {
        question: "How do I create a Deen in Dunya account?",
        answer:
          "You can create an account directly within the app using your email address. Once verified, your data will sync securely across your devices.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Use the “Forgot Password” option on the sign-in screen to receive a reset link by email. If you don't receive it within a few minutes, check your spam folder or contact our support team.",
      },
      {
        question: "Can I change the email linked to my account?",
        answer:
          "Yes. You can update your email address from your profile settings within the app. If you run into any issues, reach out to our support team and we'll help you directly.",
      },
    ],
  },
  {
    category: "App issues",
    items: [
      {
        question: "The app is crashing or not loading properly.",
        answer:
          "Try closing and reopening the app, and make sure you're on the latest version available in the App Store or Google Play. If the issue continues, email us with your device model and OS version so we can help troubleshoot.",
      },
      {
        question: "My prayer times don't look correct for my location.",
        answer:
          "Prayer times are calculated based on your device's location and the calculation method selected in Settings. Double-check your location permissions and calculation method, and let us know if the issue persists.",
      },
      {
        question: "My data isn't syncing across devices.",
        answer:
          "Make sure you're signed in with the same account on each device and have an active internet connection. If your data still isn't syncing, contact support and we'll investigate.",
      },
    ],
  },
  {
    category: "Subscription & payment help",
    items: [
      {
        question: "How do I manage or cancel my subscription?",
        answer:
          "Subscriptions are managed through the App Store or Google Play, depending on where you subscribed. You can update or cancel your subscription anytime from your device's account settings.",
      },
      {
        question: "I was charged but can't access premium features.",
        answer:
          "This is usually resolved by restarting the app or restoring your purchase from Settings. If the issue continues, email us your purchase receipt and we'll sort it out.",
      },
    ],
  },
  {
    category: "Privacy & data questions",
    items: [
      {
        question: "How is my data used within the app?",
        answer:
          "We use your data to provide and personalise the Service — such as prayer times, habit tracking and planning. Full details are available in our Privacy Policy.",
      },
      {
        question: "How do I delete my account and data?",
        answer:
          "Visit our Account Deletion page for step-by-step instructions on requesting deletion of your account and associated data.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Support"
          title="How can we help?"
          description="Find answers to common questions below, or reach out to our team directly — we're happy to help."
        />

        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="space-y-4">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-start gap-4 rounded-2xl grain-border card-surface p-6 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-espresso/[0.06]">
                    <Mail className="h-4 w-4 text-espresso-soft" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-espresso">
                      Contact support
                    </p>
                    <p className="mt-1 text-sm text-espresso-soft">
                      {SUPPORT_EMAIL}
                    </p>
                    <p className="mt-2 text-xs text-espresso-soft/70">
                      We typically respond within 1–2 business days.
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl grain-border bg-white/40 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-espresso/[0.06]">
                    <MessageCircleQuestion className="h-4 w-4 text-espresso-soft" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-espresso">
                      Before you reach out
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-espresso-soft">
                      Browse the frequently asked questions — many common
                      issues around your account, the app, subscriptions and
                      privacy are answered there.
                    </p>
                  </div>
                </div>
              </div>

              <FAQ groups={FAQ_GROUPS} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
