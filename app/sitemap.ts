import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://detektor-lzhi.net.ua";
const lastModified = new Date("2025-04-30");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/uk/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk/`,
          ru: `${baseUrl}/ru/`,
          en: `${baseUrl}/en/`,
        },
      },
    },
    {
      url: `${baseUrl}/ru/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk/`,
          ru: `${baseUrl}/ru/`,
          en: `${baseUrl}/en/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk/`,
          ru: `${baseUrl}/ru/`,
          en: `${baseUrl}/en/`,
        },
      },
    },
  ];
}
