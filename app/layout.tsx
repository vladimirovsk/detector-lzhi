import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://detektor-lzhi.net.ua"),
  title: "Полиграф в Одессе | Детектор лжи — Профессиональная проверка",
  description:
    "Пройти полиграф в Одессе. Наша цель — выявить истину. Надёжные и точные услуги полиграфа для бизнеса и частных лиц. Предварительная запись: +380663053778",
  keywords:
    "полиграф в Одессе, детектор лжи Одесса, проверка на полиграфе, услуги полиграфа, пройти полиграф, полиграфолог Одесса, детектор лжи",
  authors: [{ name: "Полиграф в Одессе" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://detektor-lzhi.net.ua/",
    siteName: "Полиграф в Одессе",
    title: "Полиграф в Одессе | Детектор лжи — Профессиональная проверка",
    description:
      "Пройти полиграф в Одессе. Наша цель — выявить истину. Надёжные и точные услуги полиграфа для бизнеса и частных лиц.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Полиграф в Одессе" }],
  },
  alternates: {
    canonical: "https://detektor-lzhi.net.ua/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://detektor-lzhi.net.ua/#business",
      name: "Полиграф в Одессе",
      description: "Профессиональные услуги полиграфа (детектора лжи) в Одессе",
      url: "https://detektor-lzhi.net.ua/",
      telephone: "+380663053778",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Балковская 97",
        addressLocality: "Одесса",
        addressRegion: "Одесская область",
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
      name: "Полиграф в Одессе",
      description: "Полиграф в Одессе, Детектор лжи",
      inLanguage: "uk",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
