"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;
  const fg = solid ? "#0A1628" : "#ffffff";

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 78,
          background: solid ? "rgba(255,255,255,0.97)" : "transparent",
          borderBottom: `1px solid ${solid ? "rgba(10,22,40,0.12)" : "transparent"}`,
          boxShadow: solid ? "0 1px 0 rgba(10,22,40,0.04)" : "none",
          backdropFilter: "saturate(160%) blur(10px)",
          transition: "background 450ms ease, border-color 450ms ease, box-shadow 450ms ease",
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={solid ? "/usn-seal-navy.svg" : "/usn-seal-gold.svg"}
              alt="U.S. National Insurance"
              style={{ height: 44, width: "auto", transition: "opacity 450ms ease" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 38 }}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 13.5,
                    color: fg,
                    textDecoration: "none",
                    position: "relative",
                    padding: "4px 0",
                    letterSpacing: "0.01em",
                    transition: "color 450ms ease",
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -3,
                        height: 1.5,
                        background: "#C9A84C",
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <QuoteButton />
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              padding: 4,
              cursor: "pointer",
            }}
            aria-label="Open menu"
          >
            <div style={{ width: 24, height: 1.5, background: fg, transition: "background 450ms ease" }} />
            <div style={{ width: 24, height: 1.5, background: fg, transition: "background 450ms ease" }} />
            <div style={{ width: 24, height: 1.5, background: fg, transition: "background 450ms ease" }} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0A1628",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 280ms ease",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            height: 78,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/usn-seal-gold.svg" alt="U.S. National Insurance" style={{ height: 40, width: "auto" }} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              fontSize: 28,
              cursor: "pointer",
              lineHeight: 1,
              padding: 4,
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 42,
                fontWeight: 600,
                color: pathname === link.href ? "#C9A84C" : "#ffffff",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                lineHeight: 1.1,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{ padding: "32px" }}>
          <Link
            href="/contact"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 14,
              letterSpacing: "0.04em",
              color: "#0A1628",
              background: "#C9A84C",
              textDecoration: "none",
              padding: "16px 28px",
            }}
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}

function QuoteButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 13,
        color: hovered ? "#0A1628" : "#C9A84C",
        textDecoration: "none",
        border: "1px solid #C9A84C",
        padding: "9px 20px",
        letterSpacing: "0.03em",
        background: hovered ? "#C9A84C" : "transparent",
        transition: "background 250ms ease, color 250ms ease",
      }}
    >
      Get a Quote
    </Link>
  );
}
