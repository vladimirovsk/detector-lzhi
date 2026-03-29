import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.png" alt="Поліграф в Одесі" width={45} height={45} className="rounded" />
            <div>
              <div className="text-white font-bold text-lg leading-tight">Поліграф в Одесі</div>
              <div className="text-xs text-gray-400">Детектор брехні</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Професійні послуги поліграфа в Одесі для бізнесу та приватних осіб. Конфіденційність гарантована.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Навігація</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Послуги", href: "#services" },
              { label: "Про нас", href: "#about" },
              { label: "Точність перевірки", href: "#accuracy" },
              { label: "Ціни", href: "#prices" },
              { label: "Контакти", href: "#contact" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-white font-semibold mb-4">Контакти</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+380663053778" className="hover:text-accent transition-colors">
                +38 (066) 305-37-78
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>вул. Балківська 97, Одеса</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Щодня 9:00 – 21:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-gray-500">
          © {year} Поліграф в Одесі. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
