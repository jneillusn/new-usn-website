import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usnational.com"),
  title: {
    default: "U.S. National Insurance | Commercial Lines Brokerage — Scottsdale, AZ",
    template: "%s | U.S. National Insurance",
  },
  description:
    "Boutique commercial lines brokerage in Scottsdale, AZ. We place commercial insurance across the full spectrum — from standard business accounts to complex, hard-to-place risks. National market access, boutique service.",
  openGraph: {
    siteName: "U.S. National Insurance",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
