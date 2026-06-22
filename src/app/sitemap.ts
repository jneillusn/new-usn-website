import { MetadataRoute } from "next";

const BASE = "https://usnational.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/industries`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/insights`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/insights/es-market-explained`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/insights/how-to-read-a-loss-run`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/insights/understanding-your-emod`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/insights/epli-basics-for-growing-employers`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
