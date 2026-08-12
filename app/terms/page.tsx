import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of Deen in Dunya.",
};

const PLACEHOLDER =
  "[Placeholder — to be reviewed and finalised by our legal team]";

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="12 August 2026"
      intro={
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
          access to and use of Deen in Dunya (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;), including our mobile
          application and website (together, the &ldquo;Service&rdquo;). By
          using the Service, you agree to be bound by these Terms.
        </p>
      }
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: (
            <p>
              By downloading, accessing or using the Service, you confirm
              that you accept these Terms and agree to comply with them. If
              you do not agree to these Terms, please do not use the
              Service.
            </p>
          ),
        },
        {
          heading: "2. Use of the Service",
          body: (
            <p>
              You may use the Service only for lawful, personal, non-commercial
              purposes and in accordance with these Terms. You agree not to
              misuse the Service or help anyone else do so.
            </p>
          ),
        },
        {
          heading: "3. User Accounts",
          body: (
            <p>
              Certain features may require you to create an account. You are
              responsible for maintaining the confidentiality of your
              account credentials and for all activity that occurs under
              your account. You agree to provide accurate information and to
              keep it up to date.
            </p>
          ),
        },
        {
          heading: "4. App Features",
          body: (
            <p>
              Deen in Dunya provides features related to prayer and Salah
              tracking, planning and routines, wellness tracking, Islamic
              learning content and reflection tools. Features may be added,
              changed or removed over time, and some features may require a
              subscription. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "5. Acceptable Use",
          body: (
            <>
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use the Service for any unlawful purpose</li>
                <li>
                  Attempt to gain unauthorised access to the Service or its
                  related systems
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of
                  the Service
                </li>
                <li>
                  Copy, modify or create derivative works of the Service
                  without permission
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Intellectual Property",
          body: (
            <p>
              The Service, including its design, features, content, logos
              and trademarks, is owned by Deen in Dunya or its licensors and
              is protected by intellectual property laws. You may not use
              our branding or content without prior written permission.
            </p>
          ),
        },
        {
          heading: "7. Third-Party Services",
          body: (
            <p>
              The Service may integrate with or reference third-party
              services (such as payment processors or cloud infrastructure
              providers). We are not responsible for the practices or
              content of any third-party service. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "8. Disclaimers",
          body: (
            <p>
              Deen in Dunya is a lifestyle, wellness and organisational tool
              and does not provide religious rulings (fatwas) or replace
              guidance from qualified scholars. The Service is provided
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, whether express or implied.
            </p>
          ),
        },
        {
          heading: "9. Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, Deen in Dunya shall not
              be liable for any indirect, incidental, special or
              consequential damages arising out of or relating to your use
              of the Service. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "10. Termination",
          body: (
            <p>
              We may suspend or terminate your access to the Service at any
              time if you violate these Terms. You may stop using the
              Service, or request deletion of your account, at any time via
              our{" "}
              <a
                href="/delete-account"
                className="underline decoration-taupe/60 underline-offset-4 hover:text-espresso"
              >
                Account Deletion
              </a>{" "}
              page.
            </p>
          ),
        },
        {
          heading: "11. Changes to Terms",
          body: (
            <p>
              We may update these Terms from time to time. If we make
              material changes, we will take reasonable steps to notify you.
              Continued use of the Service after changes take effect
              constitutes acceptance of the updated Terms.
            </p>
          ),
        },
        {
          heading: "12. Governing Law",
          body: <p>{PLACEHOLDER}</p>,
        },
        {
          heading: "13. Contact",
          body: (
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="underline decoration-taupe/60 underline-offset-4 hover:text-espresso"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
