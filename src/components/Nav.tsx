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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || !isHome;
  const fg = solid ? "#0A1628" : "#ffffff";

  return (
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
        transition:
          "background 450ms ease, border-color 450ms ease, box-shadow 450ms ease",
      }}
    >
      <div
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
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: 9,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 25,
              fontWeight: 600,
              color: fg,
              letterSpacing: "0.01em",
              transition: "color 450ms ease",
            }}
          >
            U.S. National
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#C9A84C",
              paddingBottom: 2,
            }}
          >
            Insurance
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 38 }}>
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
      </div>
    </div>
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
