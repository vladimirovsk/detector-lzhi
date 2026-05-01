import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://detektor-lzhi.net.ua";
const lastModified = new Date("2026-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    uk: `${baseUrl}/uk/`,
    ru: `${baseUrl}/ru/`,
    en: `${baseUrl}/en/`,
    "x-default": `${baseUrl}/uk/`,
  };

  return [
    {
      url: `${baseUrl}/uk/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/ru/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/en/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
