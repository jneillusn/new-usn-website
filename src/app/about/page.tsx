import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "U.S. National Insurance LLC is a Scottsdale-based commercial lines brokerage built around boutique service and national market access. Every account is worked by a broker who knows the file.",
  openGraph: {
    title: "About U.S. National Insurance | Commercial Lines Brokerage",
    description:
      "Scottsdale-based boutique brokerage. Every client works directly with a principal — not a service tier.",
    url: "https://usnational.com/about",
  },
};

const BLOCKS = [
  {
    label: "Affiliation",
    body: (
      <>
        A member of <strong style={{ color: "#0A1628", fontWeight: 600 }}>Scali Insurance Group</strong> — sharing carrier
        relationships, surplus-lines access, and underwriting leverage that a
        standalone boutique couldn&apos;t command alone.
      </>
    ),
  },
  {
    label: "Carrier Relationships",
    body: "Direct appointments and broker access across 75+ admitted and Excess & Surplus markets, including the specialty carriers that write high-hazard and distressed business.",
  },
  {
    label: "Philosophy",
    body: "We believe every commercial account deserves a broker who actually reads the file. We're built to handle the full range — and when an account is complex, multi-state, or high-hazard, that's where our market access and underwriting relationships change the outcome.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 78 }}>
      {/* Header */}
      <section style={{ background: "#0A1628", padding: "110px 0 100px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal style={{ maxWidth: "62ch" }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 30,
              }}
            >
              About the Firm
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 60,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: 0,
                color: "#ffffff",
                maxWidth: 800,
              }}
            >
              A brokerage built around doing it right, not just doing what&apos;s easy.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Gold rule */}
      <div style={{ height: 3, background: "#C9A84C" }} />

      {/* Full-bleed image */}
      <section style={{ padding: "0 0 100px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about-hero.jpg"
          alt="Commercial district — U.S. National Insurance"
          style={{
            width: "100%",
            height: 460,
            objectFit: "cover",
            objectPosition: "center 60%",
            display: "block",
            filter: "grayscale(0.15) contrast(1.05)",
          }}
        />
      </section>

      {/* Two-column body */}
      <section style={{ background: "#ffffff", padding: "0 0 120px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 90,
              alignItems: "start",
            }}
          >
            {/* Left */}
            <ScrollReveal>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 34,
                  lineHeight: 1.2,
                  margin: "0 0 22px",
                  color: "#0A1628",
                }}
              >
                Boutique by design.
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.78,
                  color: "rgba(10,22,40,0.72)",
                  margin: "0 0 22px",
                }}
              >
                U.S. National Insurance LLC is a Scottsdale-based commercial
                lines brokerage with a singular focus: place every account
                correctly — whether it&apos;s a clean commercial risk or one
                that&apos;s been declined everywhere else — and service it like
                it&apos;s the only file we have.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.78,
                  color: "rgba(10,22,40,0.72)",
                  margin: 0,
                }}
              >
                We are deliberately small. Every client works directly with a
                principal — not a service tier — and every account is worked by
                someone who has read your loss runs and knows the underwriter on
                the other side.
              </p>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal
              style={{
                borderTop: "1px solid #E2DED4",
                paddingTop: 8,
              }}
            >
              {BLOCKS.map((block, i) => (
                <div
                  key={block.label}
                  style={{
                    padding: "30px 0",
                    borderBottom: i < BLOCKS.length - 1 ? "1px solid #E2DED4" : undefined,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      fontWeight: 600,
                      marginBottom: 14,
                    }}
                  >
                    {block.label}
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "rgba(10,22,40,0.72)",
                      margin: 0,
                    }}
                  >
                    {block.body}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
