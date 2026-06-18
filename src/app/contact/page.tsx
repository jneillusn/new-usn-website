"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { COVERAGE_LINES, STEP_LABELS } from "@/lib/data";

const FIELD_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 16,
  padding: "12px 0",
  border: "none",
  borderBottom: "1px solid #CFC9BB",
  background: "transparent",
  outline: "none",
  color: "#0A1628",
  width: "100%",
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(10,22,40,0.55)",
  fontWeight: 600,
};

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={LABEL_STYLE}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...FIELD_STYLE,
          borderBottomColor: focused ? "#C9A84C" : "#CFC9BB",
          transition: "border-color 200ms ease",
        }}
      />
    </div>
  );
}

function TextAreaField({ label, placeholder }: { label: string; placeholder?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={LABEL_STYLE}>{label}</label>
      <textarea
        placeholder={placeholder}
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...FIELD_STYLE,
          resize: "vertical",
          borderBottomColor: focused ? "#C9A84C" : "#CFC9BB",
          transition: "border-color 200ms ease",
        }}
      />
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        style={{
          border: "1px solid #C9A84C",
          padding: "40px 32px",
          background: "#FAF9F6",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: 26,
            color: "#0A1628",
            marginBottom: 10,
          }}
        >
          Thank you.
        </div>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(10,22,40,0.65)",
            margin: 0,
          }}
        >
          Your message is in. A broker will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 22 }}
    >
      <Field label="Name" />
      <Field label="Company" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
        }}
      >
        <Field label="Phone" type="tel" />
        <Field label="Email" type="email" />
      </div>
      <TextAreaField label="Message" />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={LABEL_STYLE}>Preferred Contact Method</label>
        <div style={{ display: "flex", gap: 28 }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontSize: 15,
              color: "#0A1628",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="pref"
              defaultChecked
              style={{ accentColor: "#C9A84C" }}
            />{" "}
            Phone
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontSize: 15,
              color: "#0A1628",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="pref"
              style={{ accentColor: "#C9A84C" }}
            />{" "}
            Email
          </label>
        </div>
      </div>
      <button
        type="submit"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 14,
          letterSpacing: "0.03em",
          color: "#0A1628",
          background: "#C9A84C",
          border: "none",
          padding: "15px 32px",
          cursor: "pointer",
          alignSelf: "flex-start",
          marginTop: 8,
        }}
      >
        Send Message
      </button>
    </form>
  );
}

function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "30px 0" }}>
        <div
          style={{
            height: 1,
            width: 48,
            background: "#C9A84C",
            marginBottom: 26,
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: 32,
            color: "#0A1628",
            marginBottom: 14,
          }}
        >
          Submission received.
        </div>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(10,22,40,0.68)",
            margin: "0 0 28px",
            maxWidth: "48ch",
          }}
        >
          We&apos;ll review your account and respond with a market read and next
          steps within one business day. Complex files are where we do our best
          work.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 14,
            color: "#0A1628",
            background: "transparent",
            border: "1px solid #0A1628",
            padding: "12px 26px",
            cursor: "pointer",
          }}
        >
          Start another
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            style={{
              flex: 1,
              height: 3,
              background: n <= step ? "#C9A84C" : "#DDD8CD",
              transition: "background 350ms ease",
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 36,
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
          Step {step} — {STEP_LABELS[step - 1]}
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "rgba(10,22,40,0.5)",
          }}
        >
          {step} / 4
        </span>
      </div>

      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Field label="Company Name" />
          <Field
            label="Industry"
            placeholder="e.g. Security & guard services"
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <Field label="State(s) of Operation" placeholder="AZ, NV, CA…" />
            <Field label="Annual Revenue" placeholder="$" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <label
            style={{ ...LABEL_STYLE, display: "block", marginBottom: 18 }}
          >
            Coverage Needed
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {COVERAGE_LINES.map((c) => (
              <label
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  fontSize: 15,
                  color: "#0A1628",
                  cursor: "pointer",
                  padding: "10px 0",
                  borderBottom: "1px solid #ECE9E2",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    accentColor: "#C9A84C",
                    width: 16,
                    height: 16,
                  }}
                />{" "}
                {c}
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <Field label="Current Carrier" />
            <Field label="Current Premium" placeholder="$" />
          </div>
          <Field label="Renewal Date" placeholder="MM / YYYY" />
          <TextAreaField
            label="Loss History Notes"
            placeholder="Open claims, large losses, anything an underwriter should know…"
          />
        </div>
      )}

      {step === 4 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <Field label="Your Name" />
            <Field label="Title" />
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <Field label="Email" type="email" />
            <Field label="Phone" type="tel" />
          </div>
        </div>
      )}

      {/* Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              color: "rgba(10,22,40,0.6)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "12px 0",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 15 }}>←</span> Back
          </button>
        ) : (
          <span />
        )}

        {step < 4 ? (
          <button
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              letterSpacing: "0.03em",
              color: "#0A1628",
              background: "#C9A84C",
              border: "none",
              padding: "14px 30px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Continue <span style={{ fontSize: 15 }}>→</span>
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              letterSpacing: "0.03em",
              color: "#0A1628",
              background: "#C9A84C",
              border: "none",
              padding: "14px 30px",
              cursor: "pointer",
            }}
          >
            Submit Quote Request
          </button>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 78 }}>
      {/* Navy header */}
      <section style={{ background: "#0A1628", padding: "110px 0 100px" }}>
        <div
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}
        >
          <ScrollReveal>
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
              Contact &amp; Quote
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                fontSize: 64,
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
                margin: "0 0 24px",
                color: "#ffffff",
                maxWidth: 760,
              }}
            >
              Let&apos;s build the right program for you.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
                maxWidth: "46ch",
              }}
            >
              Reach a broker directly, or start a quote and we&apos;ll come back
              with a real market read — not an auto-reply.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Forms */}
      <section style={{ background: "#ffffff", padding: "90px 0 60px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Quick Contact */}
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 32,
                fontWeight: 600,
                color: "#0A1628",
                margin: "0 0 8px",
              }}
            >
              Quick Contact
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(10,22,40,0.6)",
                margin: "0 0 34px",
              }}
            >
              A short note. We&apos;ll route it to the right desk.
            </p>
            <ContactForm />
          </ScrollReveal>

          {/* Quote Wizard */}
          <ScrollReveal
            style={{
              background: "#FAF9F6",
              border: "1px solid #ECE9E2",
              padding: "48px 48px 52px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 32,
                fontWeight: 600,
                color: "#0A1628",
                margin: "0 0 8px",
              }}
            >
              Start a Quote
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(10,22,40,0.6)",
                margin: "0 0 34px",
              }}
            >
              Four short steps. About two minutes.
            </p>
            <QuoteWizard />
          </ScrollReveal>
        </div>
      </section>

      {/* Office + Map */}
      <section style={{ background: "#ffffff", padding: "40px 0 110px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 60,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: 30,
              }}
            >
              The Office
            </div>
            <div
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 30,
                color: "#0A1628",
                lineHeight: 1.35,
                marginBottom: 32,
              }}
            >
              8201 N Hayden Rd
              <br />
              Scottsdale, AZ 85258
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                borderTop: "1px solid #E2DED4",
                paddingTop: 30,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(10,22,40,0.5)",
                    marginBottom: 6,
                  }}
                >
                  Phone
                </div>
                <div style={{ fontSize: 18, color: "#0A1628" }}>
                  877.885.1780
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(10,22,40,0.5)",
                    marginBottom: 6,
                  }}
                >
                  Email
                </div>
                <div style={{ fontSize: 18, color: "#0A1628" }}>
                  service@usnational.com
                </div>
              </div>
            </div>
          </div>

          <div style={{ minHeight: 380, border: "1px solid #E2DED4" }}>
            <iframe
              title="U.S. National Insurance — Scottsdale office"
              src="https://www.google.com/maps?q=8201+N+Hayden+Rd,+Scottsdale,+AZ+85258&output=embed"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 380,
                border: 0,
                display: "block",
                filter: "grayscale(0.4) contrast(1.05)",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
