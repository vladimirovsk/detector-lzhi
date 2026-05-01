"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const navItems = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.accuracy"), href: "#accuracy" },
    { label: t("nav.prices"), href: "#prices" },
    { label: t("nav.contacts"), href: "#contact" },
  ];

  const locales = [
    { code: "uk", label: t("lang.uk") },
    { code: "ru", label: t("lang.ru") },
    { code: "en", label: t("lang.en") },
  ] as const;

  const currentLabel = locales.find((l) => l.code === locale)?.label ?? locale.toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">{t("header.address")}</span>
          <a
            href="tel:+380663053778"
            className="flex items-center gap-2 font-semibold hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +38 (066) 305-37-78
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={t("header.logoAlt")}
            width={200}
            height={600}
            className="rounded"
          />
          <div className="text-white">
            <div className="font-bold text-lg leading-tight">{t("header.siteName")}</div>
            <div className="text-xs text-gray-300">{t("header.tagline")}</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1 text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors border border-white/25 rounded hover:border-accent"
              aria-label="Select language"
            >
              {currentLabel}
              <svg
                className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[80px]">
                {locales.map(({ code, label }) => (
                  <Link
                    key={code}
                    href="/"
                    locale={code}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      code === locale
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setLangOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="tel:+380663053778" className="ml-2 btn-primary text-sm py-2 px-5">
            {t("header.book")}
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("header.openMenu")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-primary-light">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile language switcher */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-primary">
              {locales.map(({ code, label }) => (
                <Link
                  key={code}
                  href="/"
                  locale={code}
                  className={`flex-1 text-center py-1.5 text-sm rounded font-medium transition-colors ${
                    code === locale
                      ? "bg-accent text-white"
                      : "text-white border border-white/30 hover:bg-white/10"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            <a
              href="tel:+380663053778"
              className="mt-2 btn-primary text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {t("header.bookFull")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
