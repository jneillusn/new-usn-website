import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Cover",
  description:
    "We build commercial insurance programs across a wide range of industries — including construction, contractors, security guards, staffing, manufacturing, and hard-to-place risks.",
  openGraph: {
    title: "Industries We Cover | U.S. National Insurance",
    description:
      "Commercial insurance programs for the full range of industries — including many that other agencies won't touch.",
    url: "https://usnational.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
