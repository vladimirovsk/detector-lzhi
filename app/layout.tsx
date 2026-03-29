import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://detektor-lzhi.net.ua"),
  title: "Поліграф в Одесі | Детектор брехні — Професійна перевірка",
  description:
    "Пройти перевірку на поліграфі в Одесі — професійна перевірка на детекторі брехні. Досвідчений поліграфолог, точність 95%+. Тести для бізнесу, сім'ї, особистих питань. Конфіденційно. Запис: +380663053778",
  keywords:
    "поліграф в Одесі, детектор брехні Одеса, перевірка на поліграфі, послуги поліграфа, пройти поліграф, поліграфолог Одеса, детектор брехні, перевірка на поліграфі Одеса, поліграф Одеса, перевірка співробітника на поліграфі, сімейний поліграф, поліграф для бізнесу, lie detector Odessa, поліграф ціна Одеса, перевірка вірності на поліграфі",
  authors: [{ name: "Поліграф в Одесі" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://detektor-lzhi.net.ua/",
    siteName: "Поліграф в Одесі",
    title: "Поліграф в Одесі | Детектор брехні — Професійна перевірка",
    description:
      "Пройти поліграф в Одесі. Наша мета — встановити істину. Надійні та точні послуги поліграфа для бізнесу та приватних осіб.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Поліграф в Одесі" }],
  },
  alternates: {
    canonical: "https://detektor-lzhi.net.ua/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Поліграф в Одесі | Детектор брехні — Професійна перевірка",
    description:
      "Пройти поліграф в Одесі — професійна перевірка на детекторі брехні. Точність 95%+. Конфіденційно. Запис: +380663053778",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://detektor-lzhi.net.ua/#business",
      name: "Поліграф в Одесі",
      description: "Професійні послуги поліграфа (детектора брехні) в Одесі",
      url: "https://detektor-lzhi.net.ua/",
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
      name: "Поліграф в Одесі",
      description: "Поліграф в Одесі, Детектор брехні",
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
