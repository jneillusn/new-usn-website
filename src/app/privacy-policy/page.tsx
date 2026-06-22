import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for U.S. National Insurance LLC — how we collect, use, and protect your information.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "When you submit a contact or quote request through our website, we collect the information you provide — which may include your name, company name, phone number, email address, and details about your insurance needs. We may also receive standard technical information such as your IP address and browser type through our hosting provider.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you provide solely to respond to your inquiry, prepare insurance quotes, and communicate with you about your coverage options. We do not use your information for unrelated marketing purposes.",
  },
  {
    heading: "How We Share Your Information",
    body: "In the ordinary course of placing insurance coverage, we may share relevant information with insurance carriers, underwriters, or markets in order to obtain quotes or bind coverage on your behalf. We may also share information within the Scali Insurance Group network of agencies where appropriate to service your account. We do not sell your personal information to third parties.",
  },
  {
    heading: "Contact Form Submissions",
    body: "Our contact and quote forms are processed through Formspree, a third-party form service. Information submitted through these forms is transmitted securely and delivered to our team. Formspree's privacy practices are governed by their own privacy policy.",
  },
  {
    heading: "Data Retention",
    body: "We retain the information you provide for as long as reasonably necessary to service your account, comply with legal obligations, and maintain business records consistent with applicable insurance regulations.",
  },
  {
    heading: "Security",
    body: "We take reasonable measures to protect the information you provide from unauthorized access or disclosure. Our website is hosted on Vercel and transmitted over HTTPS.",
  },
  {
    heading: "Your Rights",
    body: "You may contact us at any time to ask what information we hold about you, request a correction, or ask that we delete it where we are not legally required to retain it.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this policy from time to time. The effective date at the bottom of this page will reflect the most recent revision. Continued use of our website after a change constitutes acceptance of the updated policy.",
  },
  {
    heading: "Contact Us",
    body: "Questions about this privacy policy or your information can be directed to: U.S. National Insurance LLC — service@usnational.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main style={{ paddingTop: 78 }}>
      {/* Header */}
      <section style={{ background: "#0A1628", padding: "110px 0 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            Legal
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 600,
              fontSize: 60,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
              color: "#ffffff",
              maxWidth: 700,
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      <div style={{ height: 3, background: "#C9A84C" }} />

      {/* Body */}
      <section style={{ background: "#ffffff", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 48px" }}>
          <p
            style={{
              fontSize: 14,
              color: "rgba(10,22,40,0.45)",
              margin: "0 0 56px",
              letterSpacing: "0.02em",
            }}
          >
            Effective date: June 22, 2026
          </p>

          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.78,
              color: "rgba(10,22,40,0.75)",
              margin: "0 0 56px",
            }}
          >
            U.S. National Insurance LLC (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is a licensed commercial lines insurance brokerage
            based in Scottsdale, Arizona. This Privacy Policy describes how we
            handle information collected through our website at usnational.com.
          </p>

          {SECTIONS.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: 44,
                paddingBottom: 44,
                borderBottom: i < SECTIONS.length - 1 ? "1px solid #E2DED4" : "none",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 28,
                  lineHeight: 1.18,
                  color: "#0A1628",
                  margin: "0 0 16px",
                }}
              >
                {section.heading}
              </h2>
              <p
                style={{
                  fontSize: 17.5,
                  lineHeight: 1.78,
                  color: "rgba(10,22,40,0.75)",
                  margin: 0,
                }}
              >
                {section.body}
              </p>
            </div>
          ))}

          <div style={{ marginTop: 24 }}>
            <Link
              href="/"
              style={{
                fontSize: 14,
                color: "#0A1628",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                borderBottom: "1px solid rgba(10,22,40,0.25)",
                paddingBottom: 4,
              }}
            >
              <span style={{ fontSize: 16 }}>←</span> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
