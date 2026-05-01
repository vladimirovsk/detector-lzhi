import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const baseUrl = "https://detektor-lzhi.net.ua";

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("ogTitle").split("|")[0].trim() }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      locale: locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      url: `${baseUrl}/${locale}/`,
      siteName: t("ogTitle").split("|")[0].trim(),
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        uk: `${baseUrl}/uk/`,
        ru: `${baseUrl}/ru/`,
        en: `${baseUrl}/en/`,
        "x-default": `${baseUrl}/uk/`,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/hero.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://detektor-lzhi.net.ua/${locale}/#business`,
        name: t("ogTitle").split("|")[0].trim(),
        description: t("ogDescription"),
        url: `https://detektor-lzhi.net.ua/${locale}/`,
        telephone: "+380663053778",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Балківська 97",
          addressLocality: "Одеса",
          addressRegion: "Одеська область",
          addressCountry: "UA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 46.4825,
          longitude: 30.7233,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "21:00",
        },
        priceRange: "₴₴",
        serviceType: "Polygraph Testing",
      },
      {
        "@type": "WebSite",
        "@id": "https://detektor-lzhi.net.ua/#website",
        url: "https://detektor-lzhi.net.ua/",
        name: t("ogTitle").split("|")[0].trim(),
        inLanguage: locale,
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
