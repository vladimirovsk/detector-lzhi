import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://detektor-lzhi.net.ua";
  const locales = ["uk", "ru", "en"] as const;

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "uk" ? 1 : 0.9,
  }));
}
