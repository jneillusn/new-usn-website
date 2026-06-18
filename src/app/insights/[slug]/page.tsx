import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main style={{ paddingTop: 78 }}>
      {/* Header band */}
      <section style={{ background: "#0A1628", padding: "80px 0 72px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
              }}
            >
              {article.cat}
            </span>
            <span
              style={{
                width: 1,
                height: 12,
                background: "rgba(255,255,255,0.25)",
              }}
            />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              {article.date}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 600,
              fontSize: 58,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: "0 0 0",
              color: "#ffffff",
              maxWidth: 780,
            }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      {/* Gold rule */}
      <div style={{ height: 3, background: "#C9A84C" }} />

      {/* Article body */}
      <section style={{ background: "#ffffff", padding: "80px 0 120px" }}>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          {/* Summary / deck */}
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              color: "rgba(10,22,40,0.72)",
              fontStyle: "italic",
              borderLeft: "3px solid #C9A84C",
              paddingLeft: 24,
              margin: "0 0 52px",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            {article.summary}
          </p>

          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 600,
                    fontSize: 32,
                    lineHeight: 1.18,
                    color: "#0A1628",
                    margin: "52px 0 18px",
                  }}
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontSize: 17.5,
                  lineHeight: 1.78,
                  color: "rgba(10,22,40,0.75)",
                  margin: "0 0 22px",
                }}
              >
                {block.text}
              </p>
            );
          })}

          {/* Back link */}
          <div
            style={{
              marginTop: 72,
              paddingTop: 40,
              borderTop: "1px solid #E2DED4",
            }}
          >
            <Link
              href="/insights"
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
              <span style={{ fontSize: 16 }}>←</span> Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FAF9F6", padding: "80px 0" }}>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            style={{ height: 1, width: 48, background: "#C9A84C", marginBottom: 32 }}
          />
          <h3
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 600,
              fontSize: 36,
              lineHeight: 1.15,
              color: "#0A1628",
              margin: "0 0 16px",
            }}
          >
            Have questions about your coverage?
          </h3>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(10,22,40,0.65)",
              margin: "0 0 32px",
            }}
          >
            Talk to a broker who knows the details — not a call center.
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
              padding: "14px 28px",
            }}
          >
            Get in Touch <span style={{ fontSize: 16 }}>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
