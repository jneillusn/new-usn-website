"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main style={{ paddingTop: 78 }}>
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
                marginBottom: 28,
              }}
            >
              Services
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 72,
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
                margin: "0 0 28px",
                color: "#ffffff",
              }}
            >
              Every line, placed with intent.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              From general liability to specialty programs — we build commercial
              coverage that fits the account, not the other way around.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "0 0 130px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceRow
              key={svc.name}
              svc={svc}
              open={openIndex === i}
              onEnter={() => setOpenIndex(i)}
              onLeave={() => setOpenIndex((prev) => (prev === i ? null : prev))}
            />
          ))}
          <div style={{ borderTop: "1px solid #E2DED4" }} />
        </div>
      </section>
    </main>
  );
}

function ServiceRow({
  svc,
  open,
  onEnter,
  onLeave,
}: {
  svc: { name: string; desc: string; body: string };
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        borderTop: "1px solid #E2DED4",
        padding: "38px 0",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 48,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: 44,
            fontWeight: 600,
            color: "#0A1628",
            lineHeight: 1.02,
          }}
        >
          {svc.name}
        </div>
        <div
          style={{
            fontSize: 15,
            color: "rgba(10,22,40,0.55)",
            textAlign: "right",
            maxWidth: 360,
            flexShrink: 0,
            lineHeight: 1.5,
          }}
        >
          {svc.desc}
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 260 : 0,
          transition: "max-height 440ms ease",
        }}
      >
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "rgba(10,22,40,0.7)",
            maxWidth: 820,
            margin: "22px 0 6px",
          }}
        >
          {svc.body}
        </p>
      </div>
    </div>
  );
}
