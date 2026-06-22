import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/personal-lines-solutions", destination: "/services", permanent: true },
      { source: "/request-a-code", destination: "/contact", permanent: true },
      { source: "/workers-compensation-solutions", destination: "/services", permanent: true },
      { source: "/commercial-lines", destination: "/services", permanent: true },
      { source: "/privacypolicy", destination: "/privacy-policy", permanent: true },
      { source: "/copy-of-product-liability", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
