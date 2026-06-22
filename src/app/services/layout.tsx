import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Insurance Services",
  description:
    "General liability, workers' comp, commercial auto, E&S lines, and more — placed by specialists with direct carrier relationships across 75+ admitted and surplus markets.",
  openGraph: {
    title: "Commercial Insurance Services | U.S. National Insurance",
    description:
      "Every line of commercial coverage, placed by a broker who knows the file.",
    url: "https://usnational.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
