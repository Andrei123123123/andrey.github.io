import { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ForWhom from "@/components/ForWhom";
import Packages from "@/components/Packages";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import LocationSection from "@/components/LocationSection";
import bgPricing from "@/assets/bg-pricing.jpg";

const BOOKED = 4;
const TOTAL = 12;
const WHATSAPP_URL = "https://wa.me/?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D0%B5%D0%BC%D0%BF%D0%B5";
const TELEGRAM_URL = "https://t.me/oceaninthesky";

const TelegramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", level: "beginner" });
  const [formSent, setFormSent] = useState(false);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqs = [
    { q: "Нужна ли виза?", a: "Да, нужна испанская виза (Тенерифе — территория Испании/ЕС). Наш оператор оформляет приглашение, документы и подачу. Стоимость 20 000 ₽ входит в турпакет. Срок оформления — 2–4 недели." },
    { q: "Какой уровень игры нужен?", a: "Принимаем от начинающих (умеющих держать ракетку) до уровня 3.0 NTRP. В первый день разбиваем на группы по уровню. Можно выбрать теннис или падел." },
    { q: "Нужна ли своя ракетка?", a: "Нет, академия предоставит. Если хотите играть своей — отлично, берите с собой." },
    { q: "Еду один — не буду ли чужим?", a: "80% участников едут одни. До отъезда создаём общий чат, где все знакомятся. После первого ужина эта тревога исчезает." },
    { q: "Можно ли с детьми?", a: "Да, принимаем детей от 7 лет. Тренировки адаптированы: игровой формат, безопасная нагрузка. Ребёнок получит навыки и новых друзей." },
    { q: "Сколько часов тенниса в день?", a: "2 часа вечерняя тренировка каждый день. Итого 6 полноценных тренировок за неделю: разминка, техника, игровые сеты." },
    { q: "Включён ли перелёт?", a: "Перелёт и проживание бронируются через турпакет (~150 000 ₽, цена может варьироваться) или самостоятельно. Страховка и повар включены." },
    { q: "Как записаться?", a: "Оставьте заявку на сайте или напишите в WhatsApp / Telegram. Мы свяжемся в течение 2 часов и подберём формат." },
    { q: "Что если не смогу поехать?", a: "Кемп не состоялся — 100% возврат. Отмена за 30+ дней — полный возврат. За 14–30 дней — 50%. Менее 14 дней — без возврата." },
  ];

  const days = [
    { d: "14", wd: "Пн", title: "Прилёт и знакомство", preview: "Трансфер из аэропорта, заселение на виллу у океана. Вечером — знакомство за ужином и первая тренировка для оценки уровня.", tags: ["Трансфер", "Ужин", "Тренировка"], activities: ["Встреча в аэропорту TFS, трансфер на виллу", "Заселение, отдых, пляж", "Знакомство группы за ужином", "Первая вечерняя тренировка — разминка и оценка уровня"], img: day14 },
    { d: "15", wd: "Вт", title: "Ущелье Маска + корт", preview: "Легендарный каньон с 600-метровыми стенами — спуск пешком, возврат на лодке. Вечером работа над техникой ударов.", tags: ["Хайкинг", "Каньон", "Техника"], activities: ["Ущелье Маска — каньон с 600-метровыми стенами", "Спуск к морю пешком, обратно на лодке", "Обед", "Вечерняя тренировка: работа над техникой ударов"], img: day15 },
    { d: "16", wd: "Ср", title: "Яхта + корт", preview: "Морская прогулка вдоль скал Los Gigantes, купание в открытом океане с дельфинами. Вечером — подача и приём.", tags: ["Яхта", "Океан", "Подача"], activities: ["Морская прогулка вдоль побережья Los Gigantes", "Купание в открытом океане, дельфины", "Обед на яхте", "Вечерняя тренировка: подача и приём"], img: day16 },
    { d: "17", wd: "Чт", title: "Свободный день + корт", preview: "Расслабленный день: бассейн, чёрный вулканический пляж, шоппинг или спа. Вечером — индивидуальный разбор ошибок.", tags: ["Отдых", "Пляж", "Разбор"], activities: ["Отдых: бассейн, чёрный пляж, шоппинг или спа", "Свободное время на острове", "Обед", "Вечерняя тренировка: индивидуальный разбор ошибок"], img: day17 },
    { d: "18", wd: "Пт", title: "Вулкан Тейде + корт", preview: "Подъём на высшую точку Испании (3 718 м) по канатной дороге — виды над облаками. Вечером тактика и розыгрыши.", tags: ["Вулкан", "3718 м", "Тактика"], activities: ["Тейде (3 718 м) — высшая точка Испании", "Подъём на канатной дороге, виды над облаками", "Обед", "Вечерняя тренировка: тактика и розыгрыши"], img: day18 },
    { d: "19", wd: "Сб", title: "Сёрфинг + корт", preview: "Урок сёрфинга на волнах Атлантики — подходит для любого уровня. Вечером предтурнирная тренировка парных комбинаций.", tags: ["Сёрфинг", "Волны", "Парная игра"], activities: ["Урок сёрфинга с инструктором, любой уровень", "Волны Атлантики, пляж", "Обед", "Предтурнирная тренировка: парные комбинации"], img: day19 },
    { d: "20", wd: "Вс", title: "Турнир и банкет", preview: "Финальный дружеский турнир, награждение победителей и прощальный ужин в средневековом замке Сан-Мигель.", tags: ["Турнир", "Награждение", "Банкет"], activities: ["Финальный дружеский турнир среди участников", "Награждение победителей", "Прощальный банкет в замке Сан-Мигель", "Трансфер в аэропорт (для вечерних рейсов)"], img: day20 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div ref={containerRef}>
      {/* ─── STICKY NAV ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-5 px-6 lg:px-16 flex justify-between items-center transition-all duration-300 ${navScrolled ? "bg-forest/95 backdrop-blur-md shadow-lg" : ""}`}>
        <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Tenerife</span>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { href: "#for-whom", label: "Для кого" },
            { href: "#packages", label: "Форматы" },
            { href: "#programme", label: "Программа" },
            { href: "#trainer", label: "Тренер" },
            { href: "#pricing", label: "Стоимость" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[11px] tracking-[2.5px] uppercase text-sand/80 no-underline hover:text-gold transition-colors duration-300">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="hidden md:inline-block py-2.5 px-6 bg-gold text-forest font-body text-[10px] font-medium tracking-[2.5px] uppercase no-underline hover:bg-gold-light transition-colors duration-300">
          Записаться
        </a>
        <MobileMenu />
      </nav>

      {/* ─── 01. HERO ─── */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline poster={heroImg} className="w-full h-full object-cover">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(28,43,30,0.72), rgba(28,43,30,0.72))" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-28 pb-16 flex-1 flex items-center">
          <div className="max-w-[720px]">
            <h1 className="animate-fade-up font-display font-light text-[clamp(32px,5vw,60px)] leading-[1.08] text-sand-light tracking-[-0.5px]">
              Теннисные тренировки<br />на Тенерифе —<br />
              <em className="italic text-gold">начни играть или прокачай уровень за время отпуска</em>
            </h1>

            <p className="animate-fade-up mt-5 text-[15px] text-sand/70 leading-[1.7] max-w-[540px]" style={{ animationDelay: "0.15s" }}>
              Индивидуальные и групповые занятия с тренером. Подходит для новичков и любителей. Круглый год на лучших кортах острова.
            </p>

            <div className="animate-fade-up mt-6 flex flex-wrap gap-x-6 gap-y-2" style={{ animationDelay: "0.2s" }}>
              {["Подходит с нуля", "Русскоязычный тренер", "Гибкий график"].map((trigger) => (
                <span key={trigger} className="text-[13px] text-sand/60 flex gap-2 items-center">
                  <Check size={14} className="text-gold flex-shrink-0" />{trigger}
                </span>
              ))}
            </div>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#cta" className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
                Подобрать тренировку <ArrowRight size={14} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-[hsl(142,70%,35%)] text-white font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] transition-all duration-300">
                <WhatsAppIcon size={16} /> Написать в WhatsApp
              </a>
            </div>

            <div className="animate-fade-up mt-8 flex flex-col gap-1.5" style={{ animationDelay: "0.4s" }}>
              <div className="w-[120px] h-[2px] bg-gold/20">
                <div className="h-full bg-gold transition-all duration-1000" style={{ width: `${(BOOKED / TOTAL) * 100}%` }} />
              </div>
              <span className="text-[11px] tracking-[1px] text-sand/50">
                Забронировано: <strong className="text-gold font-medium">{BOOKED}</strong> из {TOTAL}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. ДЛЯ КОГО ─── */}
      <ForWhom />

      {/* ─── 03. ФОРМАТЫ / ПАКЕТЫ ─── */}
      <Packages />

      {/* ─── 04. ПОЧЕМУ МЫ ─── */}
      <WhyUs />

      {/* ─── 05. ТРЕНЕР ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="trainer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1000px]">
          <div className="relative">
            <div className="aspect-[3/4] bg-forest/10 border border-gold/20 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-forest/15 border-2 border-gold/30 mx-auto mb-6 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <p className="text-[11px] tracking-[2px] uppercase text-text-muted-custom">Фото тренера · на корте</p>
              </div>
            </div>
          </div>
          <div>
            <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Тренер</p>
            <h3 className="reveal font-display text-[28px] font-light text-forest mb-1">[Имя Фамилия]</h3>
            <p className="text-[12px] tracking-[2px] uppercase text-gold mb-6">Русскоязычный тренер · Tenerife Tennis Academy</p>
            <p className="text-[15px] leading-[1.7] text-text-body font-light mb-6">
              Опыт работы более 10 лет. Работает с любым уровнем — от первого удара до турнирной подготовки. Живёт на Тенерифе постоянно, знает каждый корт и каждый маршрут на острове.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { num: "10+", label: "Лет опыта" },
                { num: "500+", label: "Учеников" },
                { num: "5", label: "Сезонов кемпа" },
              ].map((f) => (
                <div key={f.label}>
                  <span className="font-display text-[28px] font-light text-gold leading-none block">{f.num}</span>
                  <span className="text-[11px] tracking-[1px] text-text-muted-custom mt-1 block">{f.label}</span>
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-gold/30 pl-6 mb-8">
              <p className="font-display text-[16px] italic text-forest/80 leading-[1.6]">
                «На Тенерифе люди раскрываются по-другому. Нет городского стресса, есть океан и корт. За неделю я вижу, как меняется не только техника — меняется человек.»
              </p>
            </blockquote>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-8 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-colors duration-300">
              <TelegramIcon /> Написать тренеру
            </a>
          </div>
        </div>
      </section>

      {/* ─── 06. ОТЗЫВЫ ─── */}
      <Testimonials />

      {/* ─── 07. ГАЛЕРЕЯ ─── */}
      <Gallery />

      {/* ─── 08. ЦЕНЫ ─── */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-cream/92" />
        </div>
        <div className="relative z-10 max-w-[900px]">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Стоимость</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
            Прозрачные цены,<br />
            <em className="italic text-gold">никаких скрытых платежей.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            <div className="reveal bg-forest p-8 lg:p-12 flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/60 mb-4">Спортивный пакет</p>
              <div className="font-display text-[52px] font-light text-gold leading-none mb-2">€900</div>
              <p className="text-[13px] text-sand/40 mb-8">на человека</p>
              <ul className="flex flex-col gap-3 flex-1">
                {["6 тренировок теннис/падел (2 ч каждая)", "Видеоразбор техники", "Яхта, Тейде, Маска, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову", "Страховка включена", "Питание от повара"].map((f) => (
                  <li key={f} className="text-[14px] text-sand/55 flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline bg-gold text-forest hover:bg-gold-light transition-all duration-300 block">
                Забронировать — €900
              </a>
            </div>

            <div className="reveal bg-card p-8 lg:p-12 flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-text-muted-custom mb-4">Турпакет · через оператора</p>
              <div className="font-display text-[44px] font-light text-forest leading-none mb-2">~150 000 ₽</div>
              <p className="text-[13px] text-text-muted-custom mb-8">перелёт + вилла + виза · цена может варьироваться</p>
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Перелёт Москва/СПб — Тенерифе",
                  "Проживание на вилле у моря",
                  "Виза — 20 000 ₽",
                  "Можете купить сами или через нас",
                ].map((f) => (
                  <li key={f} className="text-[14px] text-text-body flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline border border-gold/30 text-gold hover:bg-gold/5 transition-all duration-300 block">
                Узнать подробнее
              </a>
            </div>
          </div>

          <div className="mt-[2px] bg-card p-6 lg:p-8 reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-[16px] text-forest mb-1">Бронирование</p>
                <p className="text-[14px] text-text-body font-light">Предоплата 30% (€270). Остаток — за 4 недели до вылета.</p>
              </div>
              <div>
                <p className="font-display text-[16px] text-forest mb-1">Отмена</p>
                <p className="text-[14px] text-text-body font-light">За 30+ дней — полный возврат. 14–30 дней — 50%. Кемп не состоялся — 100%.</p>
              </div>
              <div>
                <p className="font-display text-[16px] text-forest mb-1">Оплата</p>
                <p className="text-[14px] text-text-body font-light">Перевод на карту / расчётный счёт.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 09. ЛОКАЦИЯ ─── */}
      <LocationSection />

      {/* ─── 10. FAQ ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="faq">
        <div className="max-w-[680px]">
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
            Частые вопросы
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal border-b border-forest/10">
              <button className="w-full bg-transparent border-none cursor-pointer py-6 flex justify-between items-center gap-6 text-left" onClick={() => toggleFaq(i)}>
                <span className="font-display text-[18px] text-forest leading-[1.3]">{faq.q}</span>
                <span className="w-5 h-5 flex-shrink-0 rounded-full border border-gold/40 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-px bg-gold" />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-2.5 bg-gold transition-all duration-300 ${faqOpen === i ? "opacity-0 rotate-90" : ""}`} />
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: faqOpen === i ? "200px" : "0", paddingBottom: faqOpen === i ? "24px" : "0" }}>
                <p className="text-[15px] leading-[1.7] text-text-body font-light">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 11. ФИНАЛЬНЫЙ CTA + ФОРМА ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16" id="cta">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="reveal font-display font-light text-[clamp(28px,4vw,44px)] text-sand-light leading-[1.1] mb-2">
            Запишитесь на тренировку<br />уже сегодня
          </h2>
          <p className="reveal text-[14px] text-sand/55 mb-3 leading-[1.7]">
            Подберём формат под ваш уровень, цели и даты отдыха
          </p>
          <p className="reveal text-[12px] text-gold font-medium tracking-[1px] mb-10">
            ⚡ Осталось {TOTAL - BOOKED} свободных слотов на этой неделе
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-[hsl(142,70%,35%)] text-white font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] transition-all duration-300"
            >
              <WhatsAppIcon size={18} /> Написать в WhatsApp
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-[hsl(200,70%,45%)] text-white font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-[hsl(200,70%,50%)] transition-all duration-300"
            >
              <TelegramIcon size={18} /> Написать в Telegram
            </a>
          </div>

          <div className="reveal text-[12px] text-sand/30 mb-6 uppercase tracking-[3px]">или оставьте заявку</div>

          {formSent ? (
            <div className="reveal bg-forest-light/40 border border-gold/20 p-8 text-center">
              <p className="font-display text-[22px] text-sand-light mb-2">Заявка принята!</p>
              <p className="text-[14px] text-sand/60 font-light leading-[1.6]">
                Мы свяжемся в течение 2 часов.<br />
                Если срочно — напишите в{" "}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">WhatsApp</a> или{" "}
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">Telegram</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal flex flex-col gap-4 text-left">
              <div>
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Телефон / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20"
                  placeholder="+7 999 999 99 99"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Выбор пакета</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="beginner" className="bg-forest text-sand-light">Beginner Start</option>
                  <option value="vacation" className="bg-forest text-sand-light">Tennis Vacation</option>
                  <option value="intensive" className="bg-forest text-sand-light">Intensive Week</option>
                  <option value="kids" className="bg-forest text-sand-light">Kids Training</option>
                </select>
              </div>
              <button type="submit" className="mt-4 py-4 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300">
                Оставить заявку
              </button>
              <p className="text-[11px] text-sand/25 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-10 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <span className="font-display text-[15px] italic text-gold tracking-[3px] block">Tennis · Tenerife</span>
            <span className="text-[12px] text-sand/30 mt-1 block">14–20 сентября 2026</span>
          </div>
          <div className="text-center flex flex-col gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">WhatsApp</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">Telegram: @oceaninthesky</a>
          </div>
          <div className="md:text-right">
            <span className="text-[12px] text-sand/25 block">© 2026 Tennis Tenerife</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-40 w-14 h-14 rounded-full bg-[hsl(142,70%,35%)] text-white flex items-center justify-center shadow-lg hover:bg-[hsl(142,70%,40%)] transition-all duration-300 hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
};

export default Index;
