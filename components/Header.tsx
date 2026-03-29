"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Послуги", href: "#services" },
  { label: "Про нас", href: "#about" },
  { label: "Точність", href: "#accuracy" },
  { label: "Ціни", href: "#prices" },
  { label: "Контакти", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">Одеса, вул. Балківська 97</span>
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
            alt="Поліграф в Одесі"
            width={200}
            height={600}
            className="rounded"
          />
          <div className="text-white">
            <div className="font-bold text-lg leading-tight">Поліграф в Одесі</div>
            <div className="text-xs text-gray-300">Детектор брехні</div>
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
          <a
            href="tel:+380663053778"
            className="ml-4 btn-primary text-sm py-2 px-5"
          >
            Записатись
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Відкрити меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <a
              href="tel:+380663053778"
              className="mt-2 btn-primary text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Записатись на прийом
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
