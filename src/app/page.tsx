import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES, INDUSTRIES } from "@/lib/data";

const WHY_CELLS = [
  {
    num: "01",
    title: "We write what others won't",
    body: "Distressed loss history, high-hazard class codes, assigned-risk alternatives — the placements that require a relationship, not a rating engine.",
  },
  {
    num: "02",
    title: "National market access",
    body: "Direct relationships across 75+ admitted and E&S carriers let us shop a complex account properly instead of forcing it into one appetite.",
  },
  {
    num: "03",
    title: "Boutique service",
    body: "One broker who knows your business — from your first call through every renewal and the midnight certificate request. Not a queue. Not a call center.",
  },
];

export default function Home() {
  const homeServices = SERVICES.slice(0, 6);

  return (
    <main>
      <HeroSection />

      {/* Positioning */}
      <section style={{ background: "#ffffff", padding: "130px 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <ScrollReveal>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 26,
              }}
            >
              The Difference
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 46,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: 0,
                color: "#0A1628",
              }}
            >
              You talk to your broker, not a call center.
            </h2>
          </ScrollReveal>
          <ScrollReveal style={{ paddingTop: 8 }}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(10,22,40,0.72)",
                margin: "0 0 24px",
              }}
            >
              U.S. National is a boutique commercial lines brokerage that places
              commercial coverage across the full spectrum — from straightforward
              business accounts to the complex, multi-state, and high-hazard
              risks that demand a real underwriter relationship and a broker who
              knows the file.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(10,22,40,0.72)",
                margin: 0,
              }}
            >
              We specialize in getting coverage placed correctly the first time
              — whether that&apos;s a clean commercial account that deserves more
              attention than a call center can give it, or the hard-to-place risk
              that no one else will touch. Either way, you talk to a broker who
              knows the file.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services strip */}
      <section
        style={{
          background: "#FAF9F6",
          padding: "120px 0",
          borderTop: "1px solid #ECE9E2",
        }}
      >
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  fontWeight: 600,
                  marginBottom: 22,
                }}
              >
                Lines of Coverage
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 44,
                  lineHeight: 1.08,
                  margin: 0,
                  color: "#0A1628",
                }}
              >
                A full commercial program,
                <br />
                placed by specialists.
              </h2>
            </div>
            <Link
              href="/services"
              style={{
                fontSize: 14,
                color: "#0A1628",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                borderBottom: "1px solid rgba(10,22,40,0.25)",
                paddingBottom: 5,
              }}
            >
              All services <span style={{ fontSize: 16 }}>→</span>
            </Link>
          </ScrollReveal>
          <div style={{ borderTop: "1px solid #DDD8CD" }}>
            {homeServices.map((svc) => (
              <Link
                key={svc.name}
                href="/services"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 32,
                  padding: "26px 0",
                  borderBottom: "1px solid #DDD8CD",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 30,
                    fontWeight: 600,
                    color: "#0A1628",
                  }}
                >
                  {svc.name}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "rgba(10,22,40,0.5)",
                    textAlign: "right",
                    maxWidth: 340,
                  }}
                >
                  {svc.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal style={{ marginBottom: 50 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              Where We Work
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 44,
                lineHeight: 1.1,
                margin: "0 0 18px",
                color: "#0A1628",
                maxWidth: "18ch",
              }}
            >
              From clean commercial accounts to complex, high-hazard placements — we cover it all.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(10,22,40,0.65)",
                maxWidth: "60ch",
                margin: 0,
              }}
            >
              We build programs across a wide range of industries — including
              many that other agencies won&apos;t cover. A sample of the
              accounts we place every day:
            </p>
          </ScrollReveal>
          <ScrollReveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0 64px",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.name}
                href="/industries"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "22px 0",
                  borderBottom: "1px solid #ECE9E2",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    background: "#C9A84C",
                    flexShrink: 0,
                    transform: "rotate(45deg)",
                  }}
                />
                <span
                  style={{
                    fontSize: 18,
                    color: "#0A1628",
                    fontWeight: 500,
                  }}
                >
                  {ind.name}
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>


      {/* Why U.S. National */}
      <section style={{ background: "#ffffff", padding: "130px 0" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal style={{ marginBottom: 64, maxWidth: "60ch" }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Why U.S. National
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 46,
                lineHeight: 1.1,
                margin: 0,
                color: "#0A1628",
              }}
            >
              Built for the businesses other agencies turn away.
            </h2>
          </ScrollReveal>
          <ScrollReveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#ECE9E2",
              border: "1px solid #ECE9E2",
            }}
          >
            {WHY_CELLS.map((cell) => (
              <div
                key={cell.num}
                style={{ background: "#ffffff", padding: "44px 40px 50px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 34,
                    color: "#C9A84C",
                    marginBottom: 24,
                  }}
                >
                  {cell.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 27,
                    fontWeight: 600,
                    color: "#0A1628",
                    margin: "0 0 14px",
                    lineHeight: 1.2,
                  }}
                >
                  {cell.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "rgba(10,22,40,0.65)",
                    margin: 0,
                  }}
                >
                  {cell.body}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: "#0A1628", padding: "140px 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            textAlign: "center",
          }}
        >
          <ScrollReveal>
            <div
              style={{
                height: 1,
                width: 60,
                background: "#C9A84C",
                margin: "0 auto 40px",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 58,
                lineHeight: 1.08,
                margin: "0 0 28px",
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Ready to place your commercial program?
            </h2>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.68)",
                maxWidth: "48ch",
                margin: "0 auto 44px",
              }}
            >
              Whether it&apos;s a standard commercial account or the hardest file
              you&apos;ve ever tried to place — boutique service, national market
              access, and a broker who picks up the phone.
            </p>
            <Link
              href="/contact"
              style={{
                fontSize: 14,
                letterSpacing: "0.04em",
                color: "#0A1628",
                background: "#C9A84C",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 34px",
              }}
            >
              Get a Quote <span style={{ fontSize: 16 }}>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
