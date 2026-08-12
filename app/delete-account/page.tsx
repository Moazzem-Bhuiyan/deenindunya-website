import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to request deletion of your Deen in Dunya account and associated data.",
};

const STEPS = [
  {
    title: "Email our support team",
    description: `Send a request to ${SUPPORT_EMAIL} with the subject line "Account Deletion Request".`,
  },
  {
    title: "Include your account details",
    description:
      "Let us know the email address associated with your account so we can locate and verify it.",
  },
  {
    title: "We'll confirm and process your request",
    description:
      "Our team will verify your request and confirm once your account and associated data have been deleted.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Account"
          title="Delete your Deen in Dunya account"
          description="We're sorry to see you go. Here's exactly how to request deletion of your account and the data associated with it."
        />

        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
              <div>
                <h2 className="font-serif text-2xl text-espresso">
                  How to request deletion
                </h2>
                <div className="mt-8 space-y-8">
                  {STEPS.map((step, i) => (
                    <div key={step.title} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-espresso/[0.06] font-serif text-sm text-espresso">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-sans text-[15px] font-semibold text-espresso">
                          {step.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-espresso-soft">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-line/80 bg-white/40 p-6">
                  <p className="font-sans text-sm font-semibold text-espresso">
                    What happens to your data
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                    Once your deletion request is verified and processed, your
                    account and the personal data associated with it —
                    including your profile, prayer and habit history, planner
                    entries and wellness logs — will be permanently removed
                    from our systems, except where we are required to retain
                    certain information for legal, security or legitimate
                    business purposes. Account deletion is currently handled
                    manually by our support team rather than instantly within
                    the app, so please allow time for your request to be
                    processed.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl grain-border card-surface p-8 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso text-ivory">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <p className="mt-5 font-serif text-xl text-espresso">
                  Ready to request deletion?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                  Email us and we&apos;ll take care of the rest.
                </p>
                <div className="mt-3 rounded-xl bg-espresso/[0.04] p-3.5">
                  <p className="text-[11px] uppercase tracking-wide2 text-taupe-dark">
                    To
                  </p>
                  <p className="mt-0.5 text-sm text-espresso">
                    {SUPPORT_EMAIL}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-wide2 text-taupe-dark">
                    Subject
                  </p>
                  <p className="mt-0.5 text-sm text-espresso">
                    Account Deletion Request
                  </p>
                </div>
                <Button
                  href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`}
                  className="mt-6 w-full"
                >
                  Email Support
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
