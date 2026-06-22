import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Reach a commercial insurance broker directly — no call centers, no auto-replies. Get a real market read on your account, whether it's a standard commercial risk or hard to place.",
  openGraph: {
    title: "Get a Quote | U.S. National Insurance — Scottsdale, AZ",
    description:
      "Talk to a broker directly. Standard or hard-to-place — we'll give you a real market read.",
    url: "https://usnational.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
