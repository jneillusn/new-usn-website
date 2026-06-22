"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ARTICLES, Article } from "@/lib/data";

export default function InsightsPage() {
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
              Insights
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
              Notes from the desk.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Plain-language explainers on the parts of commercial insurance
              that quietly cost employers money.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "20px 0 130px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "#E2DED4",
              border: "1px solid #E2DED4",
            }}
          >
            {ARTICLES.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      style={{
        background: "#ffffff",
        padding: "48px 44px 52px",
        textDecoration: "none",
        cursor: "pointer",
        display: "block",
        transition: "background 250ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#FAF9F6";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#ffffff";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 28,
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
          {article.cat}
        </span>
        <span style={{ fontSize: 13, color: "rgba(10,22,40,0.45)" }}>
          {article.date}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: 32,
          fontWeight: 600,
          color: "#0A1628",
          lineHeight: 1.14,
          margin: "0 0 16px",
        }}
      >
        {article.title}
      </h3>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.65,
          color: "rgba(10,22,40,0.62)",
          margin: "0 0 26px",
        }}
      >
        {article.summary}
      </p>
      <span
        style={{
          fontSize: 14,
          color: "#0A1628",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid rgba(10,22,40,0.25)",
          paddingBottom: 4,
        }}
      >
        Read <span style={{ fontSize: 15 }}>→</span>
      </span>
    </Link>
  );
}
