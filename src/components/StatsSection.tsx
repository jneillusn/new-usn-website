"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { key: "carrier", target: 75, suffix: "+", label: "Carrier Markets" },
  { key: "states", target: 48, suffix: "", label: "States Licensed" },
  { key: "lines", target: 9, suffix: "", label: "Lines of Coverage" },
  { key: "years", target: 30, suffix: "+", label: "Years of Expertise" },
];

type Vals = { carrier: number; states: number; lines: number; years: number };

export default function StatsSection() {
  const [vals, setVals] = useState<Vals>({ carrier: 0, states: 0, lines: 0, years: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const targets = { carrier: 75, states: 48, lines: 9, years: 30 };
          if (reduced) {
            setVals(targets);
            return;
          }
          const dur = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            setVals({
              carrier: Math.round(targets.carrier * e),
              states: Math.round(targets.states * e),
              lines: Math.round(targets.lines * e),
              years: Math.round(targets.years * e),
            });
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#0A1628", padding: "110px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.key}
              style={{
                borderLeft: "1px solid rgba(201,168,76,0.4)",
                paddingLeft: 26,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 68,
                  fontWeight: 600,
                  color: "#C9A84C",
                  lineHeight: 1,
                }}
              >
                {(vals as Record<string, number>)[stat.key]}
                {stat.suffix}
              </div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 14,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
