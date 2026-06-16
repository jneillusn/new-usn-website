"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "#0A1628",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 48px 80px",
          width: "100%",
        }}
      >
        {/* Signature gold rule */}
        <div
          style={{
            height: 1,
            width: "100%",
            background: "#C9A84C",
            transformOrigin: "left center",
            animation: "drawLine 1200ms cubic-bezier(0.22,0.61,0.21,1) 250ms both",
            marginBottom: 56,
          }}
        />

        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#C9A84C",
            fontWeight: 600,
            marginBottom: 34,
            animation: "fadeUp 700ms ease 800ms both",
          }}
        >
          U.S. National Insurance &nbsp;·&nbsp; Scottsdale, Arizona
        </div>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 600,
            color: "#ffffff",
            fontSize: 80,
            lineHeight: 1.03,
            letterSpacing: "-0.012em",
            margin: "0 0 34px",
            animation: "fadeUp 800ms ease 1000ms both",
          }}
        >
          <span style={{ display: "block" }}>Commercial Risk,</span>
          <span style={{ display: "block" }}>Handled with Precision.</span>
        </h1>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "50ch",
            margin: "0 0 44px",
            animation: "fadeUp 800ms ease 1200ms both",
          }}
        >
          Boutique expertise. National market access. Built for complex accounts.
        </p>

        <Link
          href="/contact"
          style={{
            fontSize: 15,
            letterSpacing: "0.02em",
            color: "#C9A84C",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 13,
            borderBottom: "1px solid rgba(201,168,76,0.4)",
            paddingBottom: 5,
            animation: "fadeUp 950ms ease 1720ms both",
          }}
        >
          Start a conversation{" "}
          <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
        </Link>
      </div>
    </section>
  );
}
