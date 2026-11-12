import type { Metadata } from "next";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how TechFinds India handles visitor information, cookies, analytics and affiliate links.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>YOUR PRIVACY MATTERS</span>

        <h1>Privacy Policy</h1>

        <p className={styles.updated}>Last updated: November 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to TechFinds India. We respect your privacy and aim
            to be transparent about how information is collected and used
            when you visit our website.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide,
            such as your name, email address and message when you use
            our contact form.
          </p>
          <p>
            We may also collect technical information such as browser
            type, device information, pages visited and general usage
            statistics through analytics services.
          </p>
        </section>

        <section>
          <h2>3. How We Use Information</h2>
          <p>Information may be used to:</p>
          <ul>
            <li>Respond to questions and inquiries.</li>
            <li>Improve website performance and content.</li>
            <li>Understand visitor interests and website usage.</li>
            <li>Protect the website against spam and abuse.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to
            improve functionality and understand website traffic.
          </p>
          <p>
            If we use third-party analytics services, those services
            may process certain usage information according to their
            own privacy policies.
          </p>
        </section>

        <section>
          <h2>5. Affiliate Links</h2>
          <p>
            TechFinds India participates in affiliate marketing programs,
            including Amazon Associates. When you click an affiliate link,
            third-party websites may use cookies or similar technologies
            to track qualifying purchases.
          </p>
          <p>
            Purchases and information submitted on third-party websites
            are governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Websites</h2>
          <p>
            Our website may contain links to external websites. We are
            not responsible for the privacy practices or content of
            those websites.
          </p>
        </section>

        <section>
          <h2>7. Data Security and Retention</h2>
          <p>
            We take reasonable measures to protect information submitted
            to us. Information is retained only for as long as reasonably
            necessary for the purposes described in this policy or as
            required by applicable law.
          </p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights to access,
            correct or request deletion of personal information.
            You can contact us to make a privacy-related request.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy as our website and services
            evolve. Any changes will be published on this page.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, please visit
            our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}