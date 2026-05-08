import { useState, useCallback, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useBookingModal } from "@/contexts/BookingModalContext";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollProgress from "@/components/ScrollProgress";
import TeamSection from "@/components/TeamSection";
import VillaSection from "@/components/VillaSection";
import MenuSection from "@/components/MenuSection";
import CommunitySection from "@/components/CommunitySection";
import TenerifeSection from "@/components/TenerifeSection";
import { Check, ArrowRight } from "lucide-react";
import day14 from "@/assets/day-14.jpg";
import day15 from "@/assets/day-15.jpg";
import day16 from "@/assets/day-16.jpg";
import day17 from "@/assets/day-17.jpg";
import day18 from "@/assets/day-18.jpg";
import day19 from "@/assets/day-19.jpg";
import day20 from "@/assets/day-20.jpg";
import bgPricing from "@/assets/bg-pricing.jpg";
import expTennis from "@/assets/exp-tennis.jpg";
import expLifestyle from "@/assets/exp-lifestyle.jpg";
import expCommunity from "@/assets/exp-community.jpg";
import audEntrepreneurs from "@/assets/aud-entrepreneurs.jpg";
import audFounders from "@/assets/aud-founders.jpg";
import audTravelers from "@/assets/aud-travelers.jpg";
import audTennis from "@/assets/aud-tennis.jpg";
import audLifestyle from "@/assets/aud-lifestyle.jpg";

const TOTAL = 14;

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

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MaxIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm7 4a6 6 0 1 0 3.6 10.8l1.9 1.4a.6.6 0 0 0 .96-.48v-3.06A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
  </svg>
);

const VKIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z" />
  </svg>
);

const Index = () => {
  const containerRef = useScrollReveal();
  const { open: openBookingModal } = useBookingModal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = heroBgRef.current;
      if (el) {
        const y = Math.min(window.scrollY, window.innerHeight) * 0.35;
        el.style.setProperty("--hero-parallax", `${y}px`);
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const navLinks = [
    { href: "#experience", label: "Опыт" },
    { href: "#program", label: "Программа" },
    { href: "#villa", label: "Вилла" },
    { href: "#pricing", label: "Стоимость" },
    { href: "#faq", label: "Вопросы" },
  ];
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)), 180);

  const faqs = [
    { q: "Для какого уровня тенниса подходит ретрит?", a: "Подходит для любителей с разным уровнем подготовки — от начинающих до опытных. При необходимости участники делятся по уровню." },
    { q: "Что входит в стоимость €1950?", a: "Кемп, ежедневные тренировки и игровые сессии, корты, проживание на вилле с поваром и организационное сопровождение." },
    { q: "Перелёт входит в стоимость?", a: "Нет. Перелёт оплачивается отдельно — ориентир €900. Мы помогаем подобрать удобный вариант." },
    { q: "Виза входит в стоимость?", a: "Нет. Шенгенская виза оплачивается отдельно — ориентир €200. Помогаем с организационными вопросами и приглашением от академии." },
    { q: "Сколько участников будет?", a: "Максимум 14 человек. Это часть формата — небольшая закрытая группа." },
    { q: "Можно ли поехать без высокого уровня игры?", a: "Да. Достаточно базового интереса к теннису и желания провести неделю активно." },
    { q: "Как забронировать место?", a: "Оставьте заявку через форму. Мы свяжемся, подтвердим детали и согласуем оплату обязательного пакета: кемп + проживание." },
    { q: "Можно ли вернуть оплату?", a: "Если ретрит не состоится — 100% возврат. Условия отмены по инициативе участника обсуждаются индивидуально перед бронированием." },
    { q: "На каком языке проходят тренировки?", a: "Тренировки проходят с командой Tenerife Tennis Academy. Язык согласуется ближе к старту в зависимости от состава тренеров." },
    { q: "Можно ли приехать одному?", a: "Да. Формат как раз рассчитан на людей, которые хотят попасть в активное окружение и познакомиться с новыми людьми." },
  ];

  // Week programme (existing rich content kept)
  const days = [
    { d: "14", wd: "Ср", title: "Прилёт и заселение", preview: "Трансфер из аэропорта, заселение на виллу у океана. Вечером — первый ужин и знакомство.", tags: ["Arrival", "Dinner"], activities: ["Встреча в аэропорту TFS, трансфер на виллу", "Заселение, отдых, океан", "Совместный ужин и знакомство группы"], img: day14 },
    { d: "15", wd: "Чт", title: "Санта-Крус + Loro Parque", preview: "Loro Parque, столица острова и ботанический сад. Вечером — теннис или падел.", tags: ["Loro Parque", "Tennis"], activities: ["Loro Parque", "Прогулка по Санта-Крус-де-Тенерифе", "Ботанический сад", "Вечерняя тренировка: техника"], img: day15 },
    { d: "16", wd: "Пт", title: "Яхта + корт", preview: "Морская прогулка вдоль скал Los Gigantes, купание в океане. Вечером — подача и приём.", tags: ["Yacht", "Ocean"], activities: ["Прогулка вдоль Los Gigantes", "Купание в океане, дельфины", "Обед на яхте", "Вечерняя тренировка: подача и приём"], img: day16 },
    { d: "17", wd: "Сб", title: "Свободный день + корт", preview: "Бассейн, чёрный вулканический пляж, шоппинг или спа. Вечером — теннис на закате.", tags: ["Free time", "Sunset tennis"], activities: ["Отдых: бассейн, чёрный пляж, спа", "Свободное время", "Обед", "Вечерняя тренировка: разбор ошибок"], img: day17 },
    { d: "18", wd: "Вс", title: "Вулкан Тейде + корт", preview: "Подъём на высшую точку Испании. Вечером — тактика и розыгрыши.", tags: ["Teide 3718m", "Tactics"], activities: ["Тейде — высшая точка Испании", "Подъём на канатной дороге", "Обед", "Вечерняя тренировка: тактика"], img: day18 },
    { d: "19", wd: "Пн", title: "Сёрфинг + корт", preview: "Урок сёрфинга на волнах Атлантики. Вечером — парные комбинации.", tags: ["Surf", "Doubles"], activities: ["Урок сёрфинга для любого уровня", "Волны Атлантики", "Обед", "Вечерняя тренировка: парная игра"], img: day19 },
    { d: "20", wd: "Вт", title: "Турнир и банкет", preview: "Финальный дружеский турнир и прощальный ужин в замке Сан-Мигель.", tags: ["Tournament", "Dinner"], activities: ["Финальный турнир среди участников", "Награждение", "Прощальный банкет в замке Сан-Мигель", "Трансфер в аэропорт"], img: day20 },
  ];

  return (
    <main ref={containerRef}>
      <ScrollProgress />

      {/* ─── NAV ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-16 flex justify-between items-center transition-all duration-300 ${navScrolled ? "bg-forest/95 backdrop-blur-md shadow-lg" : ""}`}>
        <span className="font-display text-[17px] italic text-gold tracking-[2px]">Tennerife · Tennis</span>
        <ul className="hidden lg:flex gap-8 list-none">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <li key={l.href}>
                <a href={l.href}
                  className={`text-[13px] tracking-[2px] uppercase no-underline transition-colors duration-300 font-medium ${isActive ? "nav-link-active" : "text-sand/85 hover:text-gold"}`}>
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-sand/15">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={17} />
            </a>
            <a href="https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="MAX">
              <MaxIcon size={17} />
            </a>
            <a href="https://wa.me/79655096888" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon size={17} />
            </a>
            <a href="https://instagram.com/tenerife.tennis.camp" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon size={17} />
            </a>
            <a href="https://vk.com/tennistenerife" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="VK">
              <VKIcon size={17} />
            </a>
          </div>
          <button type="button" onClick={openBookingModal}
            className="py-2.5 px-6 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2px] uppercase border-none cursor-pointer hover:bg-gold-light transition-colors duration-300 rounded-md">
            Забронировать место
          </button>
        </div>
        <MobileMenu />
      </nav>

      {/* ─── 01. HERO ─── */}
      <section className="min-h-[100svh] lg:min-h-screen relative flex flex-col justify-center overflow-hidden" id="hero">
        <div ref={heroBgRef} className="absolute inset-0 hero-parallax">
          <video autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg" className="w-full h-full object-cover" aria-hidden="true">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(20,32,22,0.65), rgba(20,32,22,0.78))" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-28 pb-20 flex-1 flex items-center">
          <div className="max-w-[900px] mx-auto w-full text-center">
            <p className="animate-fade-up text-[12px] tracking-[4px] uppercase text-gold mb-8 font-medium">
              14–20 октября 2026 · Тенерифе, Испания · всего {TOTAL} мест
            </p>
            <h1 className="animate-fade-up font-display font-medium text-[clamp(40px,6.5vw,88px)] leading-[1.02] text-sand-light tracking-[-0.5px]">
              Закрытый теннисный ретрит<br /><em className="not-italic text-gold">для амбициозных людей</em>
            </h1>
            <p className="animate-fade-up mt-8 text-[18px] md:text-[20px] text-sand/85 leading-[1.55] font-light max-w-[640px] mx-auto" style={{ animationDelay: "0.15s" }}>
              7 дней тенниса, океана, виллы с поваром и сильного окружения на Тенерифе.
            </p>
            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4" style={{ animationDelay: "0.3s" }}>
              <button type="button" onClick={openBookingModal}
                className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer hover:bg-gold-light transition-all duration-300 rounded-md">
                Забронировать место <ArrowRight size={16} />
              </button>
              <a href="#program"
                className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-transparent border border-sand/40 text-sand-light font-body text-[12px] font-semibold tracking-[2.5px] uppercase no-underline hover:border-gold hover:text-gold transition-all duration-300 rounded-md">
                Смотреть программу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. INTRO / POSITIONING ─── */}
      <section className="bg-cream py-28 lg:py-40 px-6 lg:px-16">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-6 font-medium">Теннис · Вилла · Океан · Окружение</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,5vw,64px)] text-forest leading-[1.08] tracking-[-0.5px]">
            Это не просто<br /><em className="italic text-gold">теннисный кемп</em>
          </h2>
          <p className="reveal mt-10 text-[19px] md:text-[21px] text-text-body/85 leading-[1.7] max-w-[720px] mx-auto">
            Это неделя тенниса, жизни на вилле, океанского воздуха, ужинов, новых знакомств и активного отдыха в кругу амбициозных людей.
          </p>
          <p className="reveal mt-6 text-[17px] text-text-body/70 leading-[1.75] max-w-[680px] mx-auto">
            Мы собираем всего 14 участников, чтобы создать не массовый тур, а камерный ретрит — с атмосферой, уровнем и энергией.
          </p>
        </div>
      </section>

      {/* ─── 03. EXPERIENCE — 3 cards ─── */}
      <section className="bg-forest py-24 lg:py-32 px-6 lg:px-16" id="experience">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Опыт</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.1] mb-16 max-w-[680px]">
            Три причины, почему это<br />больше, чем кемп
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "01 · Теннис",
                title: "Теннис",
                text: "Ежедневные тренировки, игровые сессии и матчи под руководством тренеров Tenerife Tennis Academy.",
                img: expTennis,
              },
              {
                tag: "02 · Атмосфера",
                title: "Атмосфера",
                text: "Вилла, повар, океан, солнце, свободное время и ощущение активного премиального отдыха.",
                img: expLifestyle,
              },
              {
                tag: "03 · Окружение",
                title: "Окружение",
                text: "14 участников из предпринимательской среды — люди, с которыми интересно играть, общаться, ужинать и строить связи.",
                img: expCommunity,
              },
            ].map((c) => (
              <article key={c.title} className="reveal group relative overflow-hidden rounded-2xl bg-forest-light/30 border border-gold/15 hover:border-gold/40 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                  <p className="text-[11px] tracking-[3px] uppercase text-gold/80 mb-2 font-medium">{c.tag}</p>
                  <h3 className="font-display text-[28px] text-sand-light mb-3 leading-tight">{c.title}</h3>
                  <p className="text-[15px] text-sand/75 leading-[1.6]">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04. WHO IS THIS FOR ─── */}
      <section className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="who">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Для кого этот ретрит</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.1] mb-5 max-w-[760px]">
            Для тех, кому скучен <em className="italic text-gold">обычный отпуск</em>
          </h2>
          <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-14 max-w-[640px]">
            Ретрит создан для людей, которые хотят совместить спорт, путешествие, атмосферу и сильное окружение.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Предприниматели", d: "Для тех, кто много работает и хочет перезагрузиться без потери динамики.", img: audEntrepreneurs },
              { t: "Основатели проектов", d: "Для людей, которые ценят энергию, фокус и сильное окружение.", img: audFounders },
              { t: "Любители активного отдыха", d: "Для тех, кто не хочет лежать у бассейна весь отпуск.", img: audTravelers },
              { t: "Любители тенниса", d: "Для тех, кто хочет прокачать игру в красивой локации.", img: audTennis },
              { t: "Люди с эстетикой и вкусом", d: "Для тех, кому важны атмосфера, уровень и красивый опыт.", img: audLifestyle },
            ].map((p, i) => (
              <div key={p.t} className="reveal group bg-card border border-forest/10 rounded-xl overflow-hidden hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-forest">
                  <img src={p.img} alt="" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                </div>
                <div className="p-7 lg:p-8">
                  <p className="text-[11px] tracking-[3px] uppercase text-gold/70 mb-3 font-medium">0{i + 1}</p>
                  <h3 className="font-display text-[22px] text-forest mb-3 leading-tight">{p.t}</h3>
                  <p className="text-[15px] text-text-body/75 leading-[1.65]">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05. WHAT'S INCLUDED ─── */}
      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="included">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Что входит</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.1] mb-5 max-w-[760px]">
            Что входит в <em className="italic text-gold">стоимость</em>
          </h2>
          <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-14 max-w-[640px]">
            Всё главное для недели тенниса, жизни на вилле и группового опыта уже включено.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Included */}
            <div className="reveal p-8 lg:p-10 bg-forest text-sand-light rounded-2xl border border-gold/25">
              <p className="text-[11px] tracking-[3px] uppercase text-gold mb-5 font-medium">Включено в €1950</p>
              <h3 className="font-display text-[24px] mb-7 leading-tight">Кемп и вилла</h3>
              <ul className="flex flex-col gap-3.5 list-none">
                {[
                  "Участие в теннисном кемпе",
                  "Ежедневные тренировки",
                  "Игровые сессии и матчи",
                  "Аренда кортов",
                  "Проживание на вилле",
                  "Повар: завтраки и ужины",
                  "Групповой опыт и нетворкинг",
                  "Организационное сопровождение",
                ].map((f) => (
                  <li key={f} className="flex gap-3 items-start text-[15px] text-sand/85 leading-[1.6]">
                    <Check size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Helped with */}
            <div className="reveal p-8 lg:p-10 bg-card border border-forest/10 rounded-2xl">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/80 mb-5 font-medium">Помогаем организовать</p>
              <h3 className="font-display text-[24px] text-forest mb-7 leading-tight">Оплачивается отдельно</h3>
              <ul className="flex flex-col gap-3.5 list-none">
                {[
                  ["Подбор перелёта", "ориентир €900"],
                  ["Шенгенская виза", "ориентир €200, приглашение от академии"],
                  ["Организационные вопросы по поездке", ""],
                ].map(([t, sub]) => (
                  <li key={t} className="flex gap-3 items-start text-[15px] text-text-body/85 leading-[1.6]">
                    <span className="w-4 h-4 mt-1 rounded-full border border-gold/50 flex-shrink-0" />
                    <span>
                      <span className="text-forest">{t}</span>
                      {sub && <span className="text-text-body/60"> — {sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-text-body/55 mt-7 leading-[1.6]">
                Перелёт и виза не входят в обязательную стоимость.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06. VILLA ─── */}
      <VillaSection />

      {/* ─── 07. MENU ─── */}
      <MenuSection />

      {/* ─── 08. TENNIS PROGRAM (intro) ─── */}
      <section className="bg-forest py-24 lg:py-32 px-6 lg:px-16" id="program">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Теннисная программа</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.1] mb-5 max-w-[760px]">
            Тренировки с командой <em className="italic text-gold">Tenerife Tennis Academy</em>
          </h2>
          <p className="reveal text-[17px] text-sand/70 leading-[1.7] mb-14 max-w-[680px]">
            Ежедневные тренировки, игровые задания и матчи для участников с разным уровнем подготовки.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { t: "Техника", d: "Работа над ударами, постановка движений, корректировка." },
              { t: "Игровая практика", d: "Сетовая игра, развитие игровой выносливости." },
              { t: "Тактика", d: "Тактика розыгрышей, чтение игры соперника." },
              { t: "Групповые игры", d: "Парные комбинации, мини-турниры внутри группы." },
            ].map((c) => (
              <div key={c.t} className="reveal p-6 bg-forest-light/30 border border-gold/15 rounded-xl hover:border-gold/40 transition-colors">
                <p className="font-display text-[20px] text-sand-light mb-2 leading-tight">{c.t}</p>
                <p className="text-[14px] text-sand/65 leading-[1.6]">{c.d}</p>
              </div>
            ))}
          </div>

          {/* Week programme — accordion (kept rich content) */}
          <div className="max-w-[920px]">
            <p className="reveal text-[11px] tracking-[3px] uppercase text-gold/70 mb-3 font-medium">Программа недели</p>
            <h3 className="reveal font-display text-[clamp(24px,2.5vw,32px)] text-sand-light mb-10 leading-tight">
              Семь дней на Тенерифе
            </h3>

            <div className="flex flex-col gap-3">
              {days.map((day, i) => {
                const isOpen = activeDay === i;
                return (
                  <div key={day.d} className="reveal">
                    <button
                      type="button"
                      onClick={() => setActiveDay(isOpen ? -1 : i)}
                      className={`w-full cursor-pointer rounded-2xl p-5 md:p-6 flex items-start gap-5 text-left transition-all duration-500 border ${isOpen ? "bg-forest-light/40 border-gold/35" : "bg-forest-light/20 border-gold/15 hover:border-gold/30"}`}
                    >
                      <div className="flex flex-col items-center flex-shrink-0 text-gold">
                        <span className="font-display text-[36px] font-medium leading-none">{day.d}</span>
                        <span className="text-[11px] tracking-[2px] uppercase mt-1 opacity-70">{day.wd}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block font-display text-[19px] md:text-[21px] text-sand-light leading-tight">{day.title}</span>
                        <span className="block text-[14px] leading-[1.6] mt-2 text-sand/60">{day.preview}</span>
                        {!isOpen && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {day.tags.map((tag) => (
                              <span key={tag} className="text-[11px] tracking-[1px] uppercase px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 font-medium">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className={`w-7 h-7 flex-shrink-0 rounded-full border border-gold/40 flex items-center justify-center transition-transform duration-300 mt-1 ${isOpen ? "rotate-45" : ""}`}>
                        <span className="w-3 h-px bg-gold absolute" />
                        <span className={`w-px h-3 bg-gold transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                      </span>
                    </button>

                    <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isOpen ? "600px" : "0" }}>
                      <div className="mx-2 -mt-2 rounded-b-2xl overflow-hidden bg-forest border border-t-0 border-gold/20">
                        <img src={day.img} alt={`День ${day.d} — ${day.title}`} className="w-full h-[200px] md:h-[280px] object-cover" loading="lazy" />
                        <div className="p-5 md:p-6">
                          <ul className="flex flex-col gap-2.5 list-none">
                            {day.activities.map((a) => (
                              <li key={a} className="text-[15px] text-sand/75 leading-[1.6] flex gap-3 items-start">
                                <Check size={15} className="text-gold flex-shrink-0 mt-1" />{a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 09. DAILY FLOW ─── */}
      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="day">
        <div className="max-w-[900px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Как проходит день</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.1] mb-5">
            Как проходит <em className="italic text-gold">день</em>
          </h2>
          <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-14 max-w-[600px]">
            Баланс тенниса, отдыха, океана, общения и вечерней атмосферы.
          </p>

          <ol className="flex flex-col gap-0 list-none border-l border-gold/30 pl-8">
            {[
              ["08:00", "Утренняя тренировка", "Тренировка на корте на свежем воздухе."],
              ["10:30", "Завтрак", "Совместный завтрак на вилле."],
              ["12:00", "Свободное время", "Океан, бассейн, восстановление, свободное время."],
              ["16:00", "Игровая сессия", "Игровые сессии или матчи."],
              ["19:30", "Ужин на вилле", "Ужин от повара на террасе виллы."],
              ["21:00", "Общение", "Общение, нетворкинг, отдых."],
            ].map(([time, title, desc]) => (
              <li key={time} className="reveal relative pb-9 last:pb-0">
                <span className="absolute -left-[42px] top-1 w-3 h-3 rounded-full bg-gold border-4 border-cream" />
                <p className="font-display text-[14px] tracking-[2px] uppercase text-gold mb-1 font-medium">{time}</p>
                <p className="font-display text-[24px] md:text-[26px] text-forest leading-tight mb-1">{title}</p>
                <p className="text-[15px] text-text-body/70 leading-[1.6]">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 10. TENERIFE ─── */}
      <TenerifeSection />

      {/* ─── 11. TRAINERS ─── */}
      <TeamSection />

      {/* ─── 12. COMMUNITY ─── */}
      <CommunitySection />

      {/* ─── 13. PRICE ─── */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-cream/85" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Стоимость участия</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,4.5vw,56px)] text-forest leading-[1.1] mb-6 max-w-[720px]">
            Один пакет.<br /><em className="italic text-gold">Всё главное внутри.</em>
          </h2>
          <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-14 max-w-[640px]">
            Обязательный пакет: теннисный кемп + проживание на вилле с поваром.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            {/* Main card */}
            <div className="reveal p-8 lg:p-12 bg-forest text-sand-light rounded-2xl border border-gold/30 flex flex-col">
              <div className="flex items-baseline justify-between flex-wrap gap-4 mb-2">
                <p className="text-[12px] tracking-[3px] uppercase text-gold font-medium">Tennerife Tennis Retreat</p>
                <p className="text-[12px] tracking-[2px] uppercase text-sand/55">Всего 14 мест</p>
              </div>
              <div className="font-display text-[72px] md:text-[88px] font-medium text-gold leading-none mt-2 mb-2 tracking-[-2px]">€1950</div>
              <p className="text-[14px] text-sand/55 mb-8">на человека · обязательный пакет</p>

              <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-gold/20">
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-sand/45 mb-1">Теннисный кемп</p>
                  <p className="font-display text-[28px] text-sand-light">€1350</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-sand/45 mb-1">Вилла и повар</p>
                  <p className="font-display text-[28px] text-sand-light">€600</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1 list-none">
                {[
                  "Тренировки и игровые сессии",
                  "Аренда кортов",
                  "Проживание на вилле",
                  "Повар: завтраки и ужины",
                  "Групповой опыт и нетворкинг",
                  "Организационное сопровождение",
                ].map((f) => (
                  <li key={f} className="text-[15px] text-sand/80 flex gap-3 items-start leading-[1.6]">
                    <Check size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={openBookingModal}
                className="py-4 text-center font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer bg-gold text-forest hover:bg-gold-light transition-all duration-300 w-full rounded-md">
                Забронировать место
              </button>
              <p className="text-[12px] text-sand/45 text-center mt-4 leading-[1.6]">
                Место закрепляется после оплаты обязательного пакета
              </p>
            </div>

            {/* Side card — additional */}
            <div className="reveal p-8 lg:p-10 bg-card border border-forest/15 rounded-2xl flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/80 mb-4 font-medium">Дополнительно</p>
              <h3 className="font-display text-[24px] text-forest mb-6 leading-tight">Помогаем организовать</h3>
              <ul className="flex flex-col gap-5 flex-1 list-none">
                <li>
                  <p className="text-[12px] tracking-[2px] uppercase text-text-body/55 mb-1">Перелёт</p>
                  <p className="font-display text-[22px] text-forest">~€900</p>
                  <p className="text-[13px] text-text-body/65 mt-1">Помогаем подобрать удобный рейс</p>
                </li>
                <li>
                  <p className="text-[12px] tracking-[2px] uppercase text-text-body/55 mb-1">Шенгенская виза</p>
                  <p className="font-display text-[22px] text-forest">~€200</p>
                  <p className="text-[13px] text-text-body/65 mt-1">Приглашение от академии и сопровождение</p>
                </li>
              </ul>
              <p className="text-[12px] text-text-body/55 mt-8 leading-[1.6] pt-6 border-t border-forest/10">
                Оплачиваются отдельно. С перелётом и визой команда помогает.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. FAQ ─── */}
      <section className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="faq">
        <div className="max-w-[900px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Вопросы и ответы</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,4.5vw,56px)] text-forest leading-[1.1] mb-14">
            Частые вопросы
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal border-b border-forest/10">
              <button type="button" className="w-full bg-transparent border-none cursor-pointer py-6 flex justify-between items-center gap-6 text-left" onClick={() => toggleFaq(i)}>
                <span className="font-display text-[19px] md:text-[21px] font-medium text-forest leading-[1.35]">{faq.q}</span>
                <span className="w-6 h-6 flex-shrink-0 rounded-full border border-gold/40 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-px bg-gold" />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3 bg-gold transition-all duration-300 ${faqOpen === i ? "opacity-0 rotate-90" : ""}`} />
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: faqOpen === i ? "400px" : "0", paddingBottom: faqOpen === i ? "20px" : "0" }}>
                <p className="text-[16px] leading-[1.75] text-text-body/85">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 15. APPLICATION CTA ─── */}
      <section className="relative py-28 lg:py-40 px-6 lg:px-16 overflow-hidden bg-forest" id="apply">
        <div className="absolute inset-0 opacity-25">
          <img src={day20} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/85" />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-6 font-medium">14–20 октября 2026</p>
            <h2 className="reveal font-display font-medium text-[clamp(34px,5vw,68px)] text-sand-light leading-[1.05] mb-8 tracking-[-0.5px]">
              14 амбициозных людей.<br /><em className="italic text-gold">Одна неделя на Тенерифе.</em>
            </h2>
            <p className="reveal text-[18px] md:text-[20px] text-sand/80 leading-[1.6] mb-12 max-w-[620px] mx-auto font-light">
              Теннис, вилла, океан, новые знакомства и неделя активной перезагрузки.
            </p>
            <div className="reveal flex flex-col sm:flex-row sm:justify-center items-stretch sm:items-center gap-4">
              <button type="button" onClick={openBookingModal}
                className="inline-flex items-center justify-center gap-3 py-4 px-12 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer hover:bg-gold-light transition-all duration-300 rounded-md">
                Забронировать место <ArrowRight size={16} />
              </button>
              <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-transparent border border-sand/40 text-sand-light font-body text-[12px] font-semibold tracking-[2.5px] uppercase no-underline hover:border-gold hover:text-gold transition-all duration-300 rounded-md">
                <TelegramIcon size={15} /> Telegram
              </a>
            </div>
            <p className="reveal mt-10 text-[13px] text-sand/40 tracking-[2px] uppercase">
              Всего {TOTAL} мест · Место закрепляется после оплаты
            </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-14 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <span className="font-display text-[19px] italic text-gold tracking-[2px] block">Tennerife · Tennis</span>
            <span className="text-[13px] text-sand/45 mt-2 block">14–20 октября 2026</span>
            <span className="text-[13px] text-sand/45 block">Тенерифе, Испания</span>
          </div>
          <div className="flex md:justify-center items-center gap-4 flex-wrap">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={22} />
            </a>
            <a href="https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="MAX">
              <MaxIcon size={22} />
            </a>
            <a href="https://wa.me/79655096888" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon size={22} />
            </a>
            <a href="https://instagram.com/tenerife.tennis.camp" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <a href="mailto:hello@tennerife-tennis.com" className="text-[13px] text-sand/55 hover:text-gold transition-colors no-underline">
              hello@tennerife-tennis.com
            </a>
          </div>
          <div className="md:text-right space-y-2">
            <a href="/privacy" className="text-[13px] text-sand/55 hover:text-gold transition-colors block no-underline">
              Политика конфиденциальности
            </a>
            <span className="text-[13px] text-sand/40 block">© 2026 Tennerife Tennis</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </main>
  );
};

export default Index;
