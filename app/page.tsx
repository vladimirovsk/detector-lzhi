"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const lang = (navigator.language || "uk").toLowerCase();
    if (lang.startsWith("ru")) {
      window.location.replace("/ru/");
    } else if (lang.startsWith("en")) {
      window.location.replace("/en/");
    } else {
      window.location.replace("/uk/");
    }
  }, []);

  return null;
}
