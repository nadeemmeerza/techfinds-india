import type { Metadata } from "next";
import ContactForm from "./ContactForm";


export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TechFinds India for questions, feedback, corrections and business inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <div>
          <span>GET IN TOUCH</span>
          <h1>We'd Love to Hear From You</h1>
          <p>
            Have a question, suggestion or correction? Send us a message.
            We're always happy to hear from our readers.
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}