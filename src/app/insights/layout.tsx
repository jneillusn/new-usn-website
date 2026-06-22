import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Insurance Insights",
  description:
    "Plain-language guides on commercial insurance — loss runs, EMODs, E&S markets, EPLI, and more. Written by brokers for business owners.",
  openGraph: {
    title: "Commercial Insurance Insights | U.S. National Insurance",
    description:
      "Plain-language explainers on the parts of commercial insurance that quietly cost employers money.",
    url: "https://usnational.com/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
