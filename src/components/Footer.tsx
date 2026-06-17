import Link from "next/link";

const SERVICES_LINKS = [
  "Workers' Compensation",
  "General Liability",
  "Commercial Auto",
  "Cyber Liability",
  "Surety & Bonds",
];

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A1628", padding: "90px 0 36px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr",
            gap: 48,
            paddingBottom: 60,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ marginBottom: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/usn-logo.png"
                alt="U.S. National Insurance"
                style={{ height: 72, width: "auto" }}
              />
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 18px",
                maxWidth: "34ch",
              }}
            >
              Boutique service. National market access. Built for commercial
              accounts that deserve more than a call center.
            </p>
            <p
              style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0 }}
            >
              A member of Scali Insurance Group
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              Services
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {SERVICES_LINKS.map((s) => (
                <Link
                  key={s}
                  href="/services"
                  style={{
                    fontSize: 14.5,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              Company
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {COMPANY_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 14.5,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              Contact
            </div>
            <div
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
              }}
            >
              8201 N Hayden Rd
              <br />
              Scottsdale, AZ 85258
            </div>
            <div
              style={{
                fontSize: 14.5,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.65)",
                marginTop: 14,
              }}
            >
              877.885.1780
              <br />
              service@usnational.com
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)" }}>
            © 2026 U.S. National Insurance LLC. All rights reserved.
          </div>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)" }}>
            AZ License #3000XXXXX &nbsp;·&nbsp; Part of Scali Insurance Group
          </div>
        </div>
      </div>
    </footer>
  );
}
