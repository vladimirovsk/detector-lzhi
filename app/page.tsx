import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedElement from "@/components/AnimatedElement";

const services = [
  {
    icon: "/images/icon-accuracy.png",
    title: "Кадрова безпека",
    description:
      "Перевірка кандидатів при прийомі на роботу, виявлення нечесних співробітників, розслідування корпоративних крадіжок та шахрайства.",
  },
  {
    icon: "/images/icon-professional.png",
    title: "Сімейні питання",
    description:
      "Перевірка на вірність, підозра в зраді чоловіка або дружини. Конфіденційно, тактовно, з повагою до обох сторін.",
  },
  {
    icon: "/images/icon-confidential.png",
    title: "Приватні розслідування",
    description:
      "Встановлення істини у складних ситуаціях: крадіжки, шахрайство, суперечки між партнерами, службові розслідування.",
  },
  {
    icon: "/images/icon-experience.png",
    title: "Бізнес-перевірки",
    description:
      "Виявлення недобросовісних партнерів, перевірка лояльності персоналу, розслідування витоків конфіденційної інформації.",
  },
];

const advantages = [
  { value: "95%+", label: "Точність результатів" },
  { value: "7+", label: "Років досвіду" },
  { value: "1000+", label: "Проведених тестів" },
  { value: "100%", label: "Конфіденційність" },
];

const prices = [
  {
    name: "Базова перевірка",
    price: "від 2 500 ₴",
    duration: "1.5–2 години",
    features: [
      "1–2 теми перевірки",
      "Письмовий висновок",
      "Попередня консультація",
      "Конфіденційність",
    ],
  },
  {
    name: "Стандартна перевірка",
    price: "від 4 000 ₴",
    duration: "2–3 години",
    features: [
      "До 4 тем перевірки",
      "Детальний письмовий висновок",
      "Відеозапис сесії",
      "Повна конфіденційність",
    ],
    featured: true,
  },
  {
    name: "Корпоративна",
    price: "Індивідуально",
    duration: "За домовленістю",
    features: [
      "Перевірка групи осіб",
      "Знижка від 5 осіб",
      "Виїзд на підприємство",
      "Корпоративний договір",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* ── Hero ── */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-primary text-white overflow-hidden pt-24"
          aria-label="Головна секція"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Поліграф в Одесі"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            {/* Hero анімації — одразу при завантаженні */}
            <h1 className="animate__animated animate__fadeInDown text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Поліграф в Одесі
              <span className="block text-accent mt-2">Детектор брехні</span>
            </h1>
            <p
              className="animate__animated animate__fadeInUp text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              Ваш надійний полiграф в Одесі — точність і професіоналізм. Перевірка на полiграфі —
              найшвидший та надійніший спосіб виявити приховану інформацію для компаній та приватних осіб.
            </p>
            <div
              className="animate__animated animate__fadeInUp flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animationDelay: "0.8s" }}
            >
              <a href="tel:+380663053778" className="btn-primary text-lg">
                Зателефонувати
              </a>
              <a href="#services" className="btn-outline text-lg">
                Наші послуги
              </a>
            </div>
            <div
              className="animate__animated animate__fadeIn mt-8 text-gray-300 text-sm"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="font-semibold text-white">+38 (066) 305-37-78</span> — Попередній запис
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-accent py-10" aria-label="Наші досягнення">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {advantages.map((a, i) => (
              <AnimatedElement key={a.label} animation="zoomIn" delay={i * 120}>
                <div className="text-3xl font-bold text-white">{a.value}</div>
                <div className="text-sm text-white/80 mt-1">{a.label}</div>
              </AnimatedElement>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 bg-gray-50" aria-label="Послуги">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedElement animation="fadeInDown">
                <h2 className="section-title">Ми пропонуємо</h2>
                <p className="section-subtitle max-w-2xl mx-auto">
                  Перевірка на якісному поліграфі в Одесі — точні результати за оптимальною ціною
                </p>
              </AnimatedElement>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <AnimatedElement
                  key={s.title}
                  animation="fadeInUp"
                  delay={i * 150}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <Image src={s.icon} alt={s.title} width={56} height={56} className="mb-4" />
                  <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20" aria-label="Про нас">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fadeInLeft" className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/expert.jpg"
                alt="Полиграфолог в Одесі"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimatedElement>
            <AnimatedElement animation="fadeInRight" delay={150}>
              <h2 className="section-title">Чому обирають нас?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ми надаємо професійні послуги поліграфа (детектора брехні) в Одесі вже більше 7 років.
                Наша команда сертифікованих полiграфологів має багатий досвід роботи з корпоративними
                клієнтами та приватними особами.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Перевірка на полiграфі — це самий швидкий, надійний і практично єдиний спосіб
                оперативної перевірки людини на предмет виявлення прихованої інформації. Якщо ви
                опинились у складній ситуації — не зволікайте із зверненням до фахівців.
              </p>
              <ul className="space-y-3">
                {[
                  "Сертифіковані полiграфологи",
                  "Сучасне обладнання",
                  "Повна конфіденційність",
                  "Письмовий висновок після тесту",
                  "Виїзд до замовника",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>
        </section>

        {/* ── Accuracy ── */}
        <section id="accuracy" className="py-20 bg-primary text-white" aria-label="Точність перевірки">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fadeInLeft">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Точність перевірки на полiграфі для бізнесу
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Сучасний поліграф фіксує понад 10 фізіологічних параметрів: дихання, пульс, тиск,
                шкірно-гальванічну реакцію та інші показники. Точність результатів досягає 95–98%
                при правильному проведенні тесту.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Для бізнесу це означає надійний захист від нечесних співробітників, збереження
                комерційної таємниці та ефективне вирішення внутрішніх конфліктів.
              </p>
              <a href="#contact" className="btn-primary">
                Отримати консультацію
              </a>
            </AnimatedElement>
            <AnimatedElement
              animation="fadeInRight"
              delay={150}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <Image
                src="/images/polygraph-device.jpg"
                alt="Поліграф — детектор брехні"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimatedElement>
          </div>
        </section>

        {/* ── Prices ── */}
        <section id="prices" className="py-20 bg-gray-50" aria-label="Ціни на послуги">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedElement animation="fadeInDown">
                <h2 className="section-title">Ціни на послуги</h2>
                <p className="section-subtitle">Прозоре ціноутворення без прихованих платежів</p>
              </AnimatedElement>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prices.map((plan, i) => (
                <AnimatedElement
                  key={plan.name}
                  animation="flipInX"
                  delay={i * 150}
                  className={`rounded-2xl p-8 ${
                    plan.featured
                      ? "bg-primary text-white shadow-2xl scale-105"
                      : "bg-white shadow-sm border border-gray-100"
                  }`}
                >
                  {plan.featured && (
                    <div className="text-accent text-xs font-bold uppercase tracking-wider mb-3">
                      Найпопулярніше
                    </div>
                  )}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.featured ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      plan.featured ? "text-accent" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm mb-6 ${plan.featured ? "text-gray-300" : "text-gray-500"}`}
                  >
                    {plan.duration}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 text-sm ${
                          plan.featured ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        <svg
                          className="w-4 h-4 shrink-0 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+380663053778"
                    className={`block text-center py-3 px-6 rounded font-semibold transition-colors ${
                      plan.featured
                        ? "bg-accent hover:bg-accent-dark text-white"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Записатись
                  </a>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="py-20 bg-gray-50" aria-label="Відгуки клієнтів">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedElement animation="fadeInDown">
                <h2 className="section-title">Відгуки клієнтів</h2>
                <p className="section-subtitle">Що кажуть люди, які вже скористались нашими послугами</p>
              </AnimatedElement>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  text: "Зверталась з питанням перевірки чоловіка. Дуже переживала, але спеціаліст одразу заспокоїв і пояснив весь процес. Результат отримала у письмовому вигляді того ж дня. Конфіденційність дотримана повністю — ніхто зі знайомих нічого не дізнався.",
                  name: "Наталія Р.",
                  role: "Приватна особа",
                  initials: "НР",
                },
                {
                  text: "Проводили перевірку трьох кандидатів на керівну посаду. Один із них приховував факт звільнення з попереднього місця роботи через розтрату. Завдяки поліграфу уникнули серйозних проблем. Рекомендую всім роботодавцям.",
                  name: "Андрій М.",
                  role: "Власник бізнесу",
                  initials: "АМ",
                },
                {
                  text: "Після серії крадіжок на складі вирішили перевірити персонал. За результатами тестування виявили двох винних. Спеціаліст працював чітко, без зайвого стресу для колективу. Економія склала більше місячного обороту.",
                  name: "Сергій В.",
                  role: "Директор компанії",
                  initials: "СВ",
                },
                {
                  text: "Мене несправедливо звинуватили у крадіжці на роботі. Пройшов перевірку на поліграфі — результати довели мою невинуватість. Дякую за чіткі та правдиві висновки. Питання було закрите одразу після отримання письмового звіту.",
                  name: "Олексій Д.",
                  role: "Приватна особа",
                  initials: "ОД",
                },
                {
                  text: "Замовляли перевірку партнера по бізнесу перед підписанням великого договору. Спеціаліст провів тестування коректно і професійно. Отримали впевненість у чесності партнера. Тепер співпрацюємо без жодних сумнівів.",
                  name: "Олена К.",
                  role: "Підприємець",
                  initials: "ОК",
                },
                {
                  text: "Процедура поліграфу — це стрес, але я була приємно вражена від професіоналізму спеціаліста. Він пояснив кожен етап, дав час заспокоїтись. Після тестування отримала детальний письмовий висновок. Дуже вдячна за тактовний підхід.",
                  name: "Ірина С.",
                  role: "Приватна особа",
                  initials: "ІС",
                },
              ].map(({ text, name, role, initials }, i) => (
                <AnimatedElement
                  key={name}
                  animation="fadeInUp"
                  delay={i * 100}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{name}</div>
                      <div className="text-gray-400 text-xs">{role}</div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-20" aria-label="Контактна інформація">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement animation="fadeInLeft">
              <h2 className="section-title">Зв&apos;яжіться з нами</h2>
              <p className="text-gray-600 mb-8">
                Зателефонуйте або напишіть у будь- який месенджер (telegram, viber
                whatsapp) - ми зв'яжемося з Вами та підберемо зручній час для
                проведення тесту.              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Телефон</div>
                    <a href="tel:+380663053778" className="text-primary font-bold text-xl hover:text-accent transition-colors">
                      +38 (066) 305-37-78
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Telegram</div>
                    <a
                      href="https://t.me/Viktor_Poligrafolog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-accent transition-colors"
                    >
                      @Viktor_Poligrafolog
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.997 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 11.997 12C18.627 24 24 18.628 24 12c0-6.627-5.373-12-12.003-12zM17.67 16.612c-.232.356-.688.468-1.05.247-2.882-1.76-6.508-2.158-10.777-1.182-.41.094-.82-.163-.913-.572-.094-.41.162-.82.572-.913 4.672-1.068 8.677-.608 11.908 1.37.363.221.475.677.26 1.05zm1.405-3.126c-.29.447-.907.587-1.354.297-3.3-2.029-8.328-2.616-12.23-1.432-.506.154-1.04-.132-1.194-.637-.153-.506.132-1.04.638-1.194 4.46-1.354 10.003-.698 13.842 1.632.447.291.587.907.298 1.334zm.12-3.255C15.468 7.91 8.744 7.68 5.174 8.762c-.605.184-1.246-.154-1.43-.76-.184-.605.154-1.246.76-1.43 4.12-1.25 10.966-1.008 15.292 1.45.545.314.731 1.01.417 1.554-.313.545-1.01.731-1.554.417l.036.034z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Viber</div>
                    <a
                      href="viber://chat?number=%2B380663053778"
                      className="text-primary font-semibold hover:text-accent transition-colors"
                    >
                      +38 (066) 305-37-78
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Адреса</div>
                    <a
                      href="https://maps.google.com/?q=вул.+Балківська+97,+Одеса,+Україна"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      вул. Балківська 97, Одеса
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Графік роботи</div>
                    <p className="text-gray-600">Щодня 9:00 – 21:00</p>
                  </div>
                </li>
              </ul>

              {/* Google Maps */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=вул.+Балківська+97,+Одеса,+Україна&output=embed&z=16&hl=uk"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Розташування офісу на карті"
                />
                <a
                  href="https://maps.google.com/?q=вул.+Балківська+97,+Одеса,+Україна"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-white px-5 py-3 text-sm font-medium text-primary hover:bg-gray-50 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    вул. Балківська 97, Одеса
                  </span>
                  <span className="text-accent group-hover:underline text-xs font-semibold whitespace-nowrap">
                    Відкрити в Google Maps →
                  </span>
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInRight" delay={150}>
              {/* Expert photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/expert-work.jpg"
                  alt="Спеціаліст-поліграфолог за роботою"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent px-6 py-5">
                  <p className="text-white font-semibold text-lg">Віктор — сертифікований поліграфолог</p>
                  <p className="text-white/75 text-sm">Досвід роботи понад 7 років · 1000+ проведених тестів</p>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                {[
                  {
                    q: "Скільки часу займає тест?",
                    a: "Стандартна сесія — від 1,5 до 3 годин, залежно від кількості питань.",
                  },
                  {
                    q: "Чи є результати конфіденційними?",
                    a: "Так. Результати передаються лише замовнику і не розголошуються третім особам.",
                  },
                  {
                    q: "Як підготуватися до тесту?",
                    a: "Виспіться, не вживайте алкоголь, та заспокійливе за 24 години. Спеціальна підготовка не потрібна.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 mb-1">{q}</p>
                    <p className="text-gray-600 text-sm">{a}</p>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-accent text-white text-center" aria-label="Заклик до дії">
          <AnimatedElement animation="fadeInUp" className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Готові дізнатись правду?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Зателефонуйте зараз — перша консультація безкоштовно
            </p>
            <a
              href="tel:+380663053778"
              className="btn-outline text-lg"
            >
              +38 (066) 305-37-78
            </a>
          </AnimatedElement>
        </section>
      </main>

      <Footer />
    </>
  );
}
