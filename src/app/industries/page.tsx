"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { INDUSTRIES, FILTERS } from "@/lib/data";

export default function IndustriesPage() {
  const [filter, setFilter] = useState("All");
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);

  const filtered =
    filter === "All"
      ? INDUSTRIES
      : INDUSTRIES.filter((x) => x.cat === filter);

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
              Industries
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
              The industries we&apos;re proud to work with.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Filter by category, then open any industry to see how we
              structure it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "0 0 130px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          {/* Filter chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 48,
              borderBottom: "1px solid #E2DED4",
              paddingBottom: 40,
            }}
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setOpenIndustry(null);
                  }}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.02em",
                    padding: "9px 18px",
                    cursor: "pointer",
                    border: `1px solid ${active ? "#0A1628" : "#D8D3C7"}`,
                    background: active ? "#0A1628" : "#ffffff",
                    color: active ? "#ffffff" : "rgba(10,22,40,0.7)",
                    transition: "all 250ms ease",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Industry list */}
          <div style={{ borderTop: "1px solid #E2DED4" }}>
            {filtered.map((ind) => {
              const expanded = openIndustry === ind.name;
              return (
                <div
                  key={ind.name}
                  onClick={() =>
                    setOpenIndustry(expanded ? null : ind.name)
                  }
                  style={{
                    borderBottom: "1px solid #E2DED4",
                    padding: "34px 0",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 40,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: 38,
                        fontWeight: 600,
                        color: "#0A1628",
                        lineHeight: 1.05,
                      }}
                    >
                      {ind.name}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 24,
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#C9A84C",
                          fontWeight: 600,
                        }}
                      >
                        {ind.cat}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: 30,
                          color: "rgba(10,22,40,0.4)",
                          width: 20,
                          textAlign: "center",
                          lineHeight: 1,
                        }}
                      >
                        {expanded ? "−" : "+"}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: expanded ? 200 : 0,
                      transition: "max-height 400ms ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 17,
                        lineHeight: 1.7,
                        color: "rgba(10,22,40,0.7)",
                        maxWidth: 760,
                        margin: "20px 0 4px",
                      }}
                    >
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
