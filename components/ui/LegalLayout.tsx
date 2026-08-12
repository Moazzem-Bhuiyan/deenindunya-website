import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader eyebrow={eyebrow} title={title} />
        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-sans font-semibold uppercase tracking-wide2 text-taupe-dark">
                Last updated: {lastUpdated}
              </p>

              {intro && (
                <div className="mt-8 space-y-4 font-body text-[15px] leading-relaxed text-espresso-soft">
                  {intro}
                </div>
              )}

              <div className="mt-4 divide-y divide-line/80">
                {sections.map((section) => (
                  <div key={section.heading} className="py-9 first:pt-8">
                    <h2 className="font-serif text-2xl text-espresso">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-espresso-soft">
                      {section.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
