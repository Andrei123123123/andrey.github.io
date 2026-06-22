import { useState, useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useBookingModal } from "@/contexts/BookingModalContext";
import { useT, useLang } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingTelegram from "@/components/FloatingTelegram";
import ScrollProgress from "@/components/ScrollProgress";
import TeamSection from "@/components/TeamSection";
import VillaSection from "@/components/VillaSection";
import MenuSection from "@/components/MenuSection";
import CommunitySection from "@/components/CommunitySection";
import TenerifeSection from "@/components/TenerifeSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import SchengenSection from "@/components/SchengenSection";
import { Check, ArrowRight } from "lucide-react";
import day14 from "@/assets/day-14.jpg";
import day15 from "@/assets/day-15.jpg";
import day16 from "@/assets/day-16.jpg";
import day17 from "@/assets/day17-beach.jpg";
import day18 from "@/assets/day-18.jpg";
import day19 from "@/assets/day-19.jpg";
import day20 from "@/assets/day20-winery.jpg";
import bgPricing from "@/assets/bg-pricing.jpg";

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
  const t = useT();
  const { lang } = useLang();

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
    { href: "#program", label: t("Программа", "Programme") },
    { href: "#villa", label: t("Вилла", "Villa") },
    { href: "#pricing", label: t("Стоимость", "Pricing") },
    { href: "#visa", label: t("Виза", "Visa") },
    { href: "#faq", label: t("Вопросы", "FAQ") },
  ];
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)), 180);

  const faqs = [
    {
      q: t("Для какого уровня тенниса подходит кемп?", "What tennis level is this retreat for?"),
      a: t(
        "Подходит для любителей с разным уровнем — от начинающих до опытных. Достаточно базового интереса к теннису и желания провести неделю активно. При необходимости делим группу по уровню.",
        "Suitable for amateurs of any level — from beginners to experienced players. A basic interest in tennis and a desire to spend an active week is enough. We split the group by level when needed."
      ),
    },
    {
      q: t("Что входит в стоимость €1950?", "What does €1950 include?"),
      a: t(
        "Участие в кемпе, трансфер, ежедневные тренировки теннис / падел, аренда кортов и оборудования, активности на каждый день, проживание на вилле с поваром, завтраки, обеды, ужины и общая атмосфера.",
        "Retreat participation, airport transfer, daily tennis and padel sessions, court and equipment rental, daily activities, stay at the villa with a private chef, all meals and the shared atmosphere."
      ),
    },
    {
      q: t("Что не входит в стоимость?", "What's not included?"),
      a: t(
        "Перелёт (ориентир €900) и шенгенская виза (ориентир €200) оплачиваются отдельно. Помогаем подобрать удобный рейс и с организационными вопросами по визе, включая приглашение от академии.",
        "Flights (~€900) and Schengen visa (~€200) are paid separately. We help you choose a convenient flight and with visa logistics, including the academy invitation."
      ),
    },
    {
      q: t("Сколько участников будет?", "How many guests will there be?"),
      a: t(
        "Максимум 14 человек. Это часть формата — небольшая закрытая группа.",
        "Maximum 14 people. A small, closed group is part of the format."
      ),
    },
    {
      q: t("Можно ли приехать одному?", "Can I come alone?"),
      a: t(
        "Да. Формат как раз рассчитан на людей, которые хотят попасть в активное окружение и познакомиться с новыми людьми. Проживание на вилле — индивидуальное заселение в комнаты.",
        "Yes. The format is built for people who want to land in an active circle and meet new people. Rooms at the villa are private."
      ),
    },
    {
      q: t("Как забронировать место?", "How do I book?"),
      a: t(
        "Оставьте заявку через форму или напишите в мессенджере. Свяжемся, подтвердим детали и согласуем оплату обязательного пакета: кемп + проживание.",
        "Send a short application or message us. We'll be in touch, confirm details and arrange payment of the package: retreat + villa."
      ),
    },
    {
      q: t("Можно ли вернуть оплату?", "Can I get a refund?"),
      a: t(
        "Если кемп не состоится — 100% возврат. Условия отмены по инициативе участника обсуждаются индивидуально перед бронированием. Полный текст — в договоре-оферте на /contract.",
        "If the retreat doesn't take place — full 100% refund. Cancellation terms by the guest are discussed individually before booking. Full text in the terms of service at /contract."
      ),
    },
    {
      q: t("А если не попаду в этот сезон?", "What if I don't make it this season?"),
      a: t(
        "Места ограничены — 14 человек, и группа быстро закрывается. Можно оставить заявку в лист ожидания Season 02 — участникам вейтлиста откроем продажи на 2 недели раньше остальных. Форма на /season-02.",
        "Spots are limited to 14 and the group fills quickly. You can join the Season 02 waitlist — waitlist guests get access two weeks before the public sale. Form at /season-02."
      ),
    },
  ];

  const days = [
    { d: "18", wd: t("Вс", "Sun"), title: t("Прилёт и заселение", "Arrival & check-in"), preview: t("Трансфер из аэропорта, заселение на виллу у океана. Вечером — первый ужин и знакомство.", "Airport transfer, check-in at the oceanfront villa. First dinner and introductions in the evening."), tags: ["Arrival", "Dinner"], activities: [t("Встреча в аэропорту TFS, трансфер на виллу", "Meet at TFS airport, transfer to the villa"), t("Заселение, отдых, океан", "Check-in, rest, ocean"), t("Совместный ужин и знакомство группы", "Shared dinner and group introductions")], img: day14, imgPos: "center 70%" },
    { d: "19", wd: t("Пн", "Mon"), title: t("Санта-Крус + Loro Parque", "Santa Cruz + Loro Parque"), preview: t("Loro Parque, столица острова и ботанический сад. Вечером — теннис или падел.", "Loro Parque, the island's capital and botanical garden. Tennis or padel in the evening."), tags: ["Loro Parque", "Tennis"], activities: [t("Loro Parque", "Loro Parque"), t("Прогулка по Санта-Крус-де-Тенерифе", "Walk around Santa Cruz de Tenerife"), t("Ботанический сад", "Botanical garden"), t("Вечерняя тренировка: техника", "Evening training: technique")], img: day15 },
    { d: "20", wd: t("Вт", "Tue"), title: t("Яхта + корт", "Yacht + court"), preview: t("Морская прогулка вдоль скал Los Gigantes, купание в океане. Вечером — подача и приём.", "Sailing along the Los Gigantes cliffs, ocean swim. Evening session on serve and return."), tags: ["Yacht", "Ocean"], activities: [t("Прогулка вдоль Los Gigantes", "Sailing along Los Gigantes"), t("Купание в океане, дельфины", "Ocean swim, dolphins"), t("Обед на яхте", "Lunch on board"), t("Вечерняя тренировка: подача и приём", "Evening training: serve & return")], img: day16 },
    { d: "21", wd: t("Ср", "Wed"), title: t("Свободный день + корт", "Free day + court"), preview: t("Бассейн, чёрный вулканический пляж, шоппинг или спа. Вечером — теннис на закате.", "Pool, black volcanic beach, shopping or spa. Tennis at sunset in the evening."), tags: ["Free time", "Sunset tennis"], activities: [t("Отдых: бассейн, чёрный пляж, спа", "Rest: pool, black beach, spa"), t("Свободное время", "Free time"), t("Обед", "Lunch"), t("Вечерняя тренировка: разбор ошибок", "Evening training: error review")], img: day17 },
    { d: "22", wd: t("Чт", "Thu"), title: t("Вулкан Тейде + корт", "Mount Teide + court"), preview: t("Подъём на высшую точку Испании. Вечером — тактика и розыгрыши.", "Climb to Spain's highest point. Evening session on tactics and rallies."), tags: ["Teide 3718m", "Tactics"], activities: [t("Тейде — высшая точка Испании", "Teide — highest peak in Spain"), t("Подъём на канатной дороге", "Cable car ascent"), t("Обед", "Lunch"), t("Вечерняя тренировка: тактика", "Evening training: tactics")], img: day18 },
    { d: "23", wd: t("Пт", "Fri"), title: t("Сёрфинг + корт", "Surfing + court"), preview: t("Урок сёрфинга на волнах Атлантики. Вечером — парные комбинации.", "Surf lesson on the Atlantic. Doubles combinations in the evening."), tags: ["Surf", "Doubles"], activities: [t("Урок сёрфинга для любого уровня", "Surf lesson for any level"), t("Волны Атлантики", "Atlantic waves"), t("Обед", "Lunch"), t("Вечерняя тренировка: парная игра", "Evening training: doubles")], img: day19 },
    { d: "24", wd: t("Сб", "Sat"), title: t("Финал на винодельне Bodegas Reverón", "Finale at Bodegas Reverón winery"), preview: t("Дружеский турнир и награждение. Вечером — закрытый ужин на винодельне в горах юга Тенерифе. Локальная кухня, авторская подача, дегустация вин с вулканических террас. ", "Friendly tournament and awards. Private dinner at a winery in the southern Tenerife mountains. Local cuisine, signature plating, tasting of wines from volcanic terraces."), tags: ["Tournament", "Wine"], activities: [t("Финальный дружеский турнир среди участников", "Final friendly tournament"), t("Награждение и итоги недели", "Awards and the week's recap"), t("Закрытый ужин на винодельне Bodegas Reverón", "Private dinner at Bodegas Reverón"), t("Дегустация вин с вулканических террас", "Tasting of volcanic-terrace wines"), t("Трансфер в аэропорт", "Airport transfer")], img: day20, imgPos: "center 25%" },
  ];

  return (
    <main ref={containerRef}>
      <Helmet>
        <html lang={lang === "en" ? "en" : "ru"} />
        <title>{t("Tennerife Tennis Retreat — Тенерифе, 18–24 окт 2026", "Tennerife Tennis Retreat — Tenerife, 18–24 Oct 2026")}</title>
        <meta name="description" content={t(
          "Неделя на Тенерифе: 7 дней тенниса/падела, вилла с поваром, океан, lifestyle и нетворкинг. 18–24 октября 2026. 14 мест.",
          "A week in Tenerife: 7 days of tennis and padel, a villa with a private chef, the ocean, lifestyle and quiet networking. 18–24 October 2026. 14 spots."
        )} />
        <link rel="canonical" href="https://tennerife-tennis.com/" />
        <meta property="og:url" content="https://tennerife-tennis.com/" />
        <meta property="og:title" content={t("Tennerife Tennis Retreat — Тенерифе, 18–24 окт 2026", "Tennerife Tennis Retreat — Tenerife, 18–24 Oct 2026")} />
        <meta property="og:description" content={t(
          "Неделя на Тенерифе: 7 дней тенниса/падела, вилла с поваром, океан, lifestyle и нетворкинг. 18–24 октября 2026.",
          "A week in Tenerife: 7 days of tennis and padel, villa with a private chef, ocean, lifestyle and networking. 18–24 October 2026."
        )} />
      </Helmet>
      <ScrollProgress />


      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-16 flex justify-between items-center transition-all duration-300 ${navScrolled ? "bg-forest/95 backdrop-blur-md shadow-lg" : ""}`}>
        <span className="font-display text-[17px] italic text-gold tracking-[2px]">Tennerife · Tennis</span>
        <ul className="hidden md:flex gap-6 lg:gap-8 list-none">
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
          <LanguageSwitcher />
          <div className="flex items-center gap-3 pr-4 border-r border-sand/15 pl-2">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={17} />
            </a>
            <a href="https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="MAX">
              <MaxIcon size={17} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=89655096888" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-gold transition-colors" aria-label="WhatsApp">
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
            {t("Забронировать место", "Reserve a spot")}
          </button>
        </div>
        <MobileMenu />
      </nav>

      {/* HERO */}
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
              {t(`18–24 октября 2026 · Тенерифе · ${TOTAL} мест`, `18–24 October 2026 · Tenerife · ${TOTAL} spots`)}
            </p>
            <h1 className="animate-fade-up font-display font-medium text-[clamp(40px,6.5vw,88px)] leading-[1.02] text-sand-light tracking-[-0.5px]">
              {t("Теннис, падел и океан", "Tennis, padel and the ocean")}<br />
              <em className="not-italic text-gold">{t("на Тенерифе", "in Tenerife")}</em>
            </h1>
            <p className="animate-fade-up mt-8 text-[18px] md:text-[20px] text-sand/85 leading-[1.55] font-light max-w-[640px] mx-auto" style={{ animationDelay: "0.15s" }}>
              {t("Семь дней. Четырнадцать человек. Одна вилла у океана.", "Seven days. Fourteen people. One oceanfront villa.")}
            </p>
            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4" style={{ animationDelay: "0.3s" }}>
              <button type="button" onClick={openBookingModal}
                className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer hover:bg-gold-light transition-all duration-300 rounded-md">
                {t("Оставить заявку", "Apply now")} <ArrowRight size={16} />
              </button>
              <a href="#program"
                className="inline-flex items-center justify-center text-sand/70 font-body text-[12px] font-medium tracking-[2.5px] uppercase no-underline hover:text-gold transition-colors duration-300 underline underline-offset-8 decoration-sand/20 hover:decoration-gold py-4 px-2">
                {t("Программа недели", "Week programme")}
              </a>
            </div>
          </div>
        </div>
      </section>


      <WhatsIncludedSection />


      {/* TENNIS PROGRAM */}
      <section className="bg-forest py-24 lg:py-32 px-6 lg:px-16" id="program">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">{t("Теннисная программа", "Tennis programme")}</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.1] mb-5 max-w-[760px]">
            {t("Тренировки с командой", "Training with the team of")} <em className="italic text-gold">Tenerife Tennis Academy</em>
          </h2>
          <p className="reveal text-[17px] text-sand/70 leading-[1.7] mb-14 max-w-[680px]">
            {t(
              "Ежедневные тренировки, игровые задания и матчи для участников с разным уровнем подготовки.",
              "Daily training, drills and matches for players of every level."
            )}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { t: t("Техника", "Technique"), d: t("Работа над ударами, постановка движений, корректировка.", "Stroke work, movement, corrections.") },
              { t: t("Игровая практика", "Match play"), d: t("Сетовая игра, развитие игровой выносливости.", "Set play and on-court endurance.") },
              { t: t("Тактика", "Tactics"), d: t("Тактика розыгрышей, чтение игры соперника.", "Rally tactics and reading your opponent.") },
              { t: t("Групповые игры", "Group play"), d: t("Парные комбинации, мини-турниры внутри группы.", "Doubles combinations, internal mini-tournaments.") },
            ].map((c) => (
              <div key={c.t} className="reveal p-6 bg-forest-light/30 border border-gold/15 rounded-xl hover:border-gold/40 transition-colors">
                <p className="font-display text-[20px] text-sand-light mb-2 leading-tight">{c.t}</p>
                <p className="text-[14px] text-sand/65 leading-[1.6]">{c.d}</p>
              </div>
            ))}
          </div>

          {/* Week programme — accordion */}
          <div className="max-w-[920px]">
            <p className="reveal text-[11px] tracking-[3px] uppercase text-gold/70 mb-3 font-medium">{t("Программа недели", "Week programme")}</p>
            <h3 className="reveal font-display text-[clamp(24px,2.5vw,32px)] text-sand-light mb-10 leading-tight">
              {t("Семь дней на Тенерифе", "Seven days in Tenerife")}
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
                        <img src={day.img} alt={t(`День ${day.d} на Тенерифе — ${day.title}`, `Day ${day.d} in Tenerife — ${day.title}`)} className="w-full h-[200px] md:h-[280px] object-cover" style={{ objectPosition: (day as { imgPos?: string }).imgPos ?? "center" }} loading="lazy" />
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

      <VillaSection />
      <MenuSection />
      <TenerifeSection />
      <TeamSection />
      <CommunitySection />

      {/* FIT */}
      <section className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="fit">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.1] mb-14 max-w-[760px]">
            {t("Кому подойдёт", "Who this week")}<br /><em className="italic text-gold">{t("эта неделя", "is for")}</em>
          </h2>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-[920px]">
            {[
              t("Любите теннис и хотите играть каждый день", "You love tennis and want to play every day"),
              t("Цените камерный формат и небольшую группу", "You value an intimate format and a small group"),
              t("Ищете окружение из предпринимателей и фаундеров", "You're looking for a circle of entrepreneurs and founders"),
              t("Едете за атмосферой, людьми и темпом — не за анимацией", "You travel for atmosphere, people and pace — not for an animator"),
            ].map((f) => (
              <div key={f} className="flex gap-3 items-start text-[16px] text-text-body/85 leading-[1.65]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[10px] flex-shrink-0" />{f}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BOOKING STEPS */}
      <section className="bg-forest py-24 lg:py-32 px-6 lg:px-16" id="how-to-book">
        <div className="max-w-[1100px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">{t("Как попасть в группу", "How to join")}</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.1] mb-14 max-w-[760px]">
            {t("Три шага", "Three steps")}<br /><em className="italic text-gold">{t("до подтверждения", "to confirmation")}</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", t: t("Заявка", "Application"), d: t("Заполняете короткую форму. Имя и Telegram — остальное по желанию.", "Fill out a short form. Name and Telegram — the rest is optional.") },
              { n: "02", t: t("Короткий разговор", "Short conversation"), d: t("Связываемся в течение суток. Рассказываем детали, отвечаем на вопросы, понимаем уровень.", "We get back within a day. We share details, answer questions, get a feel for your level.") },
              { n: "03", t: t("Подтверждение", "Confirmation"), d: t("Если всё совпадает — закрепляем место за вами после оплаты.", "If everything aligns — your spot is locked in once payment is in.") },
            ].map((s) => (
              <div key={s.n} className="reveal p-7 bg-forest-light/30 border border-gold/15 rounded-xl">
                <p className="font-display text-[40px] text-gold leading-none mb-4">{s.n}</p>
                <p className="font-display text-[22px] text-sand-light mb-2 leading-tight">{s.t}</p>
                <p className="text-[14px] text-sand/65 leading-[1.65]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-cream/85" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">{t("Стоимость участия", "Pricing")}</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,4.5vw,56px)] text-forest leading-[1.1] mb-6 max-w-[720px]">
            {t("Один пакет.", "One package.")}<br /><em className="italic text-gold">{t("Без апселлов.", "No upsells.")}</em>
          </h2>
          <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-14 max-w-[640px]">
            {t("Кемп и проживание на вилле с поваром. Без дополнительных опций.", "Retreat and stay at the villa with a private chef. No add-ons.")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            <div className="reveal p-8 lg:p-12 bg-forest text-sand-light rounded-2xl border border-gold/30 flex flex-col">
              <div className="flex items-baseline justify-between flex-wrap gap-4 mb-2">
                <p className="text-[12px] tracking-[3px] uppercase text-gold font-medium">Tennerife Tennis Camp</p>
                <p className="text-[12px] tracking-[2px] uppercase text-sand/55">{t("Всего 14 мест", "Only 14 spots")}</p>
              </div>
              <div className="font-display text-[72px] md:text-[88px] font-medium text-gold leading-none mt-2 mb-2 tracking-[-2px]">€1950</div>
              <p className="text-[14px] text-sand/55 mb-8">{t("на человека · обязательный пакет", "per person · required package")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-gold/20">
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-sand/45 mb-1">{t("Теннисный кемп", "Tennis retreat")}</p>
                  <p className="font-display text-[28px] text-sand-light">€1350</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-sand/45 mb-1">{t("Вилла и повар", "Villa and chef")}</p>
                  <p className="font-display text-[28px] text-sand-light">€600</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1 list-none">
                {[
                  t("Ежедневные тренировки теннис / падел", "Daily tennis and padel training"),
                  t("Аренда кортов и оборудования", "Court and equipment rental"),
                  t("Проживание на вилле", "Stay at the villa"),
                  t("Активности на Тенерифе", "Tenerife activities"),
                  t("Завтраки, обеды, ужины и общая атмосфера", "All meals and the shared atmosphere"),
                  t("Организационное сопровождение", "Full logistical support"),
                ].map((f) => (
                  <li key={f} className="text-[15px] text-sand/80 flex gap-3 items-start leading-[1.6]">
                    <Check size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={openBookingModal}
                className="py-4 text-center font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer bg-gold text-forest hover:bg-gold-light transition-all duration-300 w-full rounded-md">
                {t("Оставить заявку", "Apply now")}
              </button>
              <p className="text-[12px] text-sand/55 text-center mt-4 leading-[1.6]">
                {t("Каждую заявку рассматриваем лично. Место закрепляется после оплаты.", "Every application is reviewed personally. Your spot is held after payment.")}
              </p>
              <p className="text-[11px] text-sand/40 text-center mt-2 leading-[1.6]">
                {t("Бронируя место, вы соглашаетесь с", "By booking, you agree to the")}{" "}
                <a href="/contract" className="text-gold/70 underline decoration-gold/30 hover:text-gold no-underline-hover">
                  {t("договором-офертой", "terms of service")}
                </a>
              </p>
            </div>

            <div className="reveal p-8 lg:p-10 bg-card border border-forest/15 rounded-2xl flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/80 mb-4 font-medium">{t("Дополнительно", "Additional")}</p>
              <h3 className="font-display text-[24px] text-forest mb-6 leading-tight">{t("Помогаем организовать", "We help arrange")}</h3>
              <ul className="flex flex-col gap-5 flex-1 list-none">
                <li>
                  <p className="text-[12px] tracking-[2px] uppercase text-text-body/55 mb-1">{t("Перелёт", "Flights")}</p>
                  <p className="font-display text-[22px] text-forest">~€900</p>
                  <p className="text-[13px] text-text-body/65 mt-1">{t("Помогаем подобрать удобный рейс", "We help find a convenient flight")}</p>
                </li>
                <li>
                  <p className="text-[12px] tracking-[2px] uppercase text-text-body/55 mb-1">{t("Шенгенская виза", "Schengen visa")}</p>
                  <p className="font-display text-[22px] text-forest">~€200</p>
                  <p className="text-[13px] text-text-body/65 mt-1">{t("Приглашение от академии и сопровождение", "Academy invitation and full support")}</p>
                </li>
              </ul>
              <p className="text-[12px] text-text-body/55 mt-8 leading-[1.6] pt-6 border-t border-forest/10">
                {t("Оплачиваются отдельно. С перелётом и визой команда помогает.", "Paid separately. The team helps with both flights and visa.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SchengenSection />

      {/* FAQ */}
      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="faq">
        <div className="max-w-[900px] mx-auto">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">{t("Вопросы и ответы", "Questions & answers")}</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,4.5vw,56px)] text-forest leading-[1.1] mb-14">
            {t("Частые вопросы", "Frequently asked")}
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

          <div className="reveal mt-14 text-center">
            <p className="text-[15px] text-text-body/70 mb-5">{t("Не нашли ответ?", "Didn't find your answer?")}</p>
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-forest/75 font-body text-[12px] font-medium tracking-[2.5px] uppercase no-underline hover:text-gold transition-colors duration-300 underline underline-offset-8 decoration-forest/15 hover:decoration-gold py-3 px-2">
              <TelegramIcon size={14} /> {t("Написать в Telegram", "Message us on Telegram")}
            </a>
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="relative py-28 lg:py-40 px-6 lg:px-16 overflow-hidden bg-forest" id="apply">
        <div className="absolute inset-0 opacity-25">
          <img src={day20} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/85" />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-6 font-medium">{t("18–24 октября 2026", "18–24 October 2026")}</p>
          <h2 className="reveal font-display font-medium text-[clamp(34px,5vw,68px)] text-sand-light leading-[1.05] mb-8 tracking-[-0.5px]">
            {t("Готовы", "Ready")}<br /><em className="italic text-gold">{t("поехать?", "to go?")}</em>
          </h2>
          <p className="reveal text-[18px] md:text-[20px] text-sand/80 leading-[1.6] mb-12 max-w-[620px] mx-auto font-light">
            {t("Теннис, вилла, океан и неделя в правильном кругу.", "Tennis, villa, ocean and a week in the right circle.")}
          </p>
          <div className="reveal flex justify-center">
            <button type="button" onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-3 py-4 px-12 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer hover:bg-gold-light transition-all duration-300 rounded-md">
              {t("Оставить заявку", "Apply now")} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SEASON 02 STRIP */}
      <aside className="bg-forest border-t border-gold/15 py-5 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
          <p className="text-[13px] md:text-[14px] text-sand/70 leading-[1.5]">
            <span className="text-gold font-medium">{t("Сезон 2026 закрывается.", "Season 2026 is closing.")}</span>{" "}
            {t("Не успели — оставьте заявку в лист ожидания Season 02.", "Missed it? Join the Season 02 waitlist.")}
          </p>
          <a
            href="/season-02"
            className="inline-flex items-center justify-center gap-2 text-gold font-body text-[12px] font-medium tracking-[2px] uppercase no-underline hover:text-gold-light transition-colors whitespace-nowrap"
          >
            {t("Лист ожидания", "Waitlist")} <ArrowRight size={14} />
          </a>
        </div>
      </aside>


      {/* FOOTER */}
      <footer className="bg-[hsl(137,22%,8%)] py-14 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <span className="font-display text-[19px] italic text-gold tracking-[2px] block">Tennerife · Tennis</span>
            <span className="text-[13px] text-sand/45 mt-2 block">{t("18–24 октября 2026", "18–24 October 2026")}</span>
            <span className="text-[13px] text-sand/45 block">{t("Тенерифе, Испания", "Tenerife, Spain")}</span>
          </div>
          <div className="flex md:justify-center items-center gap-4 flex-wrap">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={22} />
            </a>
            <a href="https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="MAX">
              <MaxIcon size={22} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=89655096888" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon size={22} />
            </a>
            <a href="https://instagram.com/tenerife.tennis.camp" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <a href="https://vk.com/tennistenerife" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-gold transition-colors" aria-label="VK">
              <VKIcon size={22} />
            </a>
            <a href="mailto:yourcamp.team@gmail.com" className="text-[13px] text-sand/55 hover:text-gold transition-colors no-underline">
              yourcamp.team@gmail.com
            </a>
          </div>
          <div className="md:text-right space-y-2">
            <a href="/season-02" className="text-[13px] text-sand/55 hover:text-gold transition-colors block no-underline">
              {t("Season 02 — лист ожидания", "Season 02 — waitlist")}
            </a>
            <a href="/privacy" className="text-[13px] text-sand/55 hover:text-gold transition-colors block no-underline">
              {t("Политика конфиденциальности", "Privacy policy")}
            </a>
            <a href="/contract" className="text-[13px] text-sand/55 hover:text-gold transition-colors block no-underline">
              {t("Договор-оферта", "Terms of service")}
            </a>
            <span className="text-[13px] text-sand/40 block">© 2026 Tennerife Tennis</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
      <FloatingTelegram />
    </main>
  );
};

export default Index;
