import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Deen in Dunya collects, uses and protects your information.",
};

const PLACEHOLDER =
  "[Placeholder — to be reviewed and finalised by our legal team]";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="12 August 2026"
      intro={
        <p>
          This Privacy Policy explains how Deen in Dunya (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, shares and
          protects information when you use our mobile application and
          website (together, the &ldquo;Service&rdquo;). By using the
          Service, you agree to the practices described in this policy.
        </p>
      }
      sections={[
        {
          heading: "1. Introduction",
          body: (
            <p>
              Deen in Dunya is an Islamic lifestyle and wellness app that
              helps you bring your worship, planning, wellness, learning and
              reflection into one space. We take your privacy seriously and
              are committed to being transparent about the information we
              collect and how it is used.
            </p>
          ),
        },
        {
          heading: "2. Information We Collect",
          body: (
            <>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Account information</strong> — such as your name,
                  email address and any profile details you choose to
                  provide when creating an account.
                </li>
                <li>
                  <strong>App usage data</strong> — such as prayer tracking,
                  habit completion, planner entries, wellness logs and
                  learning progress you create within the app.
                </li>
                <li>
                  <strong>Device and technical information</strong> — such
                  as device type, operating system, app version and general
                  location (e.g. for prayer time calculation).
                </li>
                <li>
                  <strong>Communications</strong> — such as messages you send
                  to our support team.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. How We Use Information",
          body: (
            <>
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide, operate and maintain the Service</li>
                <li>
                  Personalise your experience, including prayer times,
                  reminders and recommendations
                </li>
                <li>Respond to support requests and communicate with you</li>
                <li>Improve, test and develop new features</li>
                <li>Maintain the security and integrity of the Service</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Account Information",
          body: (
            <p>
              When you create an account, we store the information required
              to identify you and keep your data synced across devices. You
              are responsible for keeping your login credentials secure. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "5. App Usage Data",
          body: (
            <p>
              Information you enter into the app — such as Salah tracking,
              habits, planner items, wellness logs and reflections — is
              stored so that it can be displayed back to you and synced
              across your devices. This data is treated as personal and
              sensitive, and is handled with additional care given its
              connection to your personal faith practice and wellbeing.
            </p>
          ),
        },
        {
          heading: "6. Data Storage",
          body: (
            <p>
              Your data is stored using reputable third-party cloud
              infrastructure providers. {PLACEHOLDER} We take reasonable
              steps to ensure your information is stored securely and is
              only accessible to authorised personnel and systems.
            </p>
          ),
        },
        {
          heading: "7. Third-Party Services",
          body: (
            <p>
              We may use third-party services for functions such as
              analytics, crash reporting, authentication, email delivery and
              payment processing. These providers only receive the
              information necessary to perform their function and are
              required to handle it in accordance with applicable privacy
              laws. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "8. Data Security",
          body: (
            <p>
              We implement technical and organisational measures designed to
              protect your information from unauthorised access, loss,
              misuse or alteration. However, no method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          ),
        },
        {
          heading: "9. Children's Privacy",
          body: (
            <p>
              The Service is not directed at children under the age of 13
              (or the relevant minimum age in your jurisdiction), and we do
              not knowingly collect personal information from children. If
              you believe a child has provided us with personal information,
              please contact us so we can take appropriate action.
            </p>
          ),
        },
        {
          heading: "10. Your Rights",
          body: (
            <p>
              Depending on your location, you may have rights to access,
              correct, export or delete your personal information, and to
              object to or restrict certain processing. You can request
              account or data deletion at any time via our{" "}
              <a
                href="/delete-account"
                className="underline decoration-taupe/60 underline-offset-4 hover:text-espresso"
              >
                Account Deletion
              </a>{" "}
              page, or by contacting us directly. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "11. Data Retention",
          body: (
            <p>
              We retain your information for as long as your account is
              active or as needed to provide the Service. If you request
              deletion of your account, we will delete or anonymise your
              information within a reasonable period, except where retention
              is required for legal, security or legitimate business
              purposes. {PLACEHOLDER}
            </p>
          ),
        },
        {
          heading: "12. Contact Us",
          body: (
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your information, please contact us at{" "}
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
