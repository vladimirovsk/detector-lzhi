"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("form");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[300px] text-center">
        <svg className="w-16 h-16 text-accent mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="text-xl font-bold text-primary mb-2">{t("successTitle")}</h3>
        <p className="text-gray-600">{t("successText")}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-primary mb-6">{t("title")}</h3>
      <form onSubmit={handleSubmit} className="space-y-4" aria-label={t("title")}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("namePlaceholder")}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t("phoneLabel")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t("phonePlaceholder")}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t("messagePlaceholder")}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center">
          {t("submit")}
        </button>
        <p className="text-xs text-gray-500 text-center">{t("consent")}</p>
      </form>
    </div>
  );
}
