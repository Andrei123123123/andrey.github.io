import { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-tenerife.jpg";
import day14 from "@/assets/day-14.jpg";
import day15 from "@/assets/day-15.jpg";
import day16 from "@/assets/day-16.jpg";
import day17 from "@/assets/day-17.jpg";
import day18 from "@/assets/day-18.jpg";
import day19 from "@/assets/day-19.jpg";
import day20 from "@/assets/day-20.jpg";
import bgFormats from "@/assets/bg-formats.jpg";
import bgLocation from "@/assets/bg-location.jpg";
import bgPricing from "@/assets/bg-pricing.jpg";
import dayMorning from "@/assets/day-morning.jpg";
import dayActivity from "@/assets/day-activity.jpg";
import dayTennis from "@/assets/day-tennis.jpg";
import dayEvening from "@/assets/day-evening.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";

const BOOKED = 4;
const TOTAL = 12;

const TelegramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", level: "beginner", preferred: "telegram" });
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
    { q: "Нужна ли виза?", a: "Да, шенгенская. Наш оператор оформляет приглашение, документы и подачу. Стоимость 20 000 ₽ входит в турпакет. Срок — 2–4 недели." },
    { q: "Какой уровень нужен?", a: "Любой. Новичок — научим основам. Любитель — прокачаем технику и тактику. Можно выбрать теннис или падел." },
    { q: "Можно поехать одному?", a: "Да. 80% участников едут одни. К третьему дню группа становится командой." },
    { q: "Что входит в 900 €?", a: "6 тренировок (1 в день, 2 часа), яхта, Тейде, Маска, сёрфинг, турнир, банкет, трансферы, организация. Перелёт и отель — отдельно через турпакет." },
    { q: "Что, если я не смогу поехать после брони?", a: "Кемп не состоялся — 100% возврат. Отмена за 30+ дней — 100% возврат. За 14–30 дней — 50%. Менее 14 дней — без возврата." },
    { q: "Что взять с собой?", a: "Спортивную обувь, купальник, лёгкую куртку для Тейде. Ракетки есть в академии." },
  ];

  const days = [
    { d: "14", wd: "Пн", am: "Прилёт, трансфер, пляж", pm: "Теннис / падел", img: day14, desc: "Встреча в аэропорту. Трансфер на виллу с видом на океан. Знакомство с группой за ужином. Первая вечерняя тренировка — разминка, оценка уровня." },
    { d: "15", wd: "Вт", am: "Ущелье Маска", pm: "Теннис / падел", img: day15, desc: "Ущелье Маска — каньон с 600-метровыми стенами. Спуск к морю пешком, потом лодка. Один из самых впечатляющих треков Канарских островов." },
    { d: "16", wd: "Ср", am: "Яхта", pm: "Теннис / падел", img: day16, desc: "Морская прогулка вдоль побережья Los Gigantes. Купание в открытом океане, дельфины. Вечером — работа над подачей." },
    { d: "17", wd: "Чт", am: "Свободный день", pm: "Теннис / падел", img: day17, desc: "Отдых у бассейна, чёрный пляж, шоппинг или спа. Вечером — тренировка с индивидуальным разбором ошибок от тренера." },
    { d: "18", wd: "Пт", am: "Вулкан Тейде", pm: "Теннис / падел", img: day18, desc: "Тейде (3 718 м) — высшая точка Испании. Подъём на канатной дороге. Виды над облаками, лунные пейзажи. Вечерняя тренировка." },
    { d: "19", wd: "Сб", am: "Сёрфинг", pm: "Теннис / падел", img: day19, desc: "Урок сёрфинга с инструктором на волнах Атлантики. Любой уровень. Вечером — предтурнирная тренировка, тактические розыгрыши." },
    { d: "20", wd: "Вс", am: "Замок Сан-Мигель", pm: "Турнир + банкет", img: day20, desc: "Финальный дружеский турнир. Награждение. Вечером — банкет в средневековом замке Сан-Мигель. Прощальный ужин.", last: true },
  ];

  const timeline = [
    { time: "08:00", title: "Утро без будильника", text: "Общий завтрак. Никто не торопится. Кто-то уже в бассейне, кто-то смотрит на океан с кофе. Сегодня в программе горы — выезд в 10.", img: dayMorning, alt: "Завтрак у бассейна" },
    { time: "10:00 — 15:00", title: "Остров", text: "Сегодня — ущелье Маска. Два часа вниз по каньону к морю, потом лодка обратно. Это не экскурсия — это маршрут, который большинство туристов не видит.", img: dayActivity, alt: "Активность на острове", reverse: true },
    { time: "16:00 — 18:00", title: "Корт", text: "Каждый день в это время. Тренер разбирает подачу — твою конкретно, не в общем. Потом сеты. К концу недели ты бьёшь иначе, чем в первый день.", img: dayTennis, alt: "Теннис на корте" },
    { time: "19:30", title: "Вечер — твой", text: "Никакой программы. Ужин куда хочешь. Обычно все идут вместе — к третьему дню группа уже не расходится.", img: dayEvening, alt: "Вечер на Тенерифе", reverse: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div ref={containerRef}>
      {/* ─── STICKY NAV ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-5 px-6 lg:px-16 flex justify-between items-center transition-all duration-300 ${navScrolled ? "bg-forest/95 backdrop-blur-md shadow-lg" : ""}`}>
        <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Padel · Tenerife</span>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { href: "#programme", label: "Программа" },
            { href: "#trainer", label: "Тренер" },
            { href: "#format", label: "Формат" },
            { href: "#pricing", label: "Стоимость" },
            { href: "#reviews", label: "Отзывы" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[11px] tracking-[2.5px] uppercase text-sand/80 no-underline hover:text-gold transition-colors duration-300">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="hidden md:inline-block py-2.5 px-6 bg-gold text-forest font-body text-[10px] font-medium tracking-[2.5px] uppercase no-underline hover:bg-gold-light transition-colors duration-300">
          Забронировать
        </a>
        <MobileMenu />
      </nav>

      {/* ─── HERO with VIDEO ─── */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline poster={heroImg} className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/854195/854195-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(28,43,30,0.72), rgba(28,43,30,0.72)), radial-gradient(ellipse 80% 60% at 70% 40%, rgba(50,90,55,0.35) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-28 pb-16 flex-1 flex items-center">
          <div className="max-w-[700px]">
            <h1 className="animate-fade-up font-display font-light text-[clamp(36px,5vw,64px)] leading-[1.08] text-sand-light tracking-[-0.5px]">
              Теннис. <em className="italic text-gold">Тенерифе.</em> Сентябрь.
            </h1>

            <p className="animate-fade-up mt-5 text-[clamp(16px,2vw,19px)] text-sand/80 leading-[1.6] max-w-[540px]" style={{ animationDelay: "0.15s" }}>
              Камерный кемп для тех, кто хочет прокачать теннис и по-настоящему увидеть Тенерифе. Утром — вулкан, яхта или сёрфинг. Вечером — корт. 12 человек. 7 дней. Сентябрь 2026.
            </p>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#cta" className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
                Забронировать место <ArrowRight size={14} />
              </a>
              <a href="#programme" className="inline-flex items-center justify-center gap-2.5 py-4 px-8 border border-gold/30 text-gold font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-gold/10 transition-all duration-300">
                Смотреть программу →
              </a>
            </div>

            {/* Spots counter */}
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

        {/* Hero stats */}
        <div className="relative z-10 px-6 lg:px-16 pb-12 flex flex-wrap gap-8 lg:gap-16">
          {[
            { num: "7", label: "Дней" },
            { num: "14", label: "Тренировок" },
            { num: "12", label: "Участников" },
            { num: "3", label: "Корта" },
            { num: "1", label: "Тренер · RU" },
          ].map((s) => (
            <div key={s.label} className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <span className="font-display text-[36px] font-light text-gold leading-none block">{s.num}</span>
              <span className="text-[10px] tracking-[2px] uppercase text-sand/40 mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-cream py-10 px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 text-center">
          <div className="flex items-center gap-3">
            <span className="text-gold text-[20px]">🎾</span>
            <div>
              <p className="font-display text-[15px] text-forest">Tenerife Tennis Academy</p>
              <p className="text-[12px] text-text-muted-custom">Официальный партнёр</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold text-[20px]">👥</span>
            <div>
              <p className="font-display text-[15px] text-forest">Первый выезд</p>
              <p className="text-[12px] text-text-muted-custom">по этому маршруту</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold text-[20px]">⭐</span>
            <div>
              <p className="font-display text-[15px] text-forest">Организатор — @oceaninthesky</p>
              <p className="text-[12px] text-text-muted-custom">и команда Tenerife Tennis Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY THIS CAMP ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16">
        <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Чем это отличается</p>
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12 max-w-[600px]">
          Почему не просто поехать<br />на Тенерифе самому?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            {
              num: "01",
              title: "Теннис, который даёт прогресс",
              text: "Русскоязычный тренер знает вас в лицо. Группа 12 человек — не групповой урок в фитнесе. Каждая тренировка строится под уровень. Разбор подачи, игровые сеты, работа над ошибками."
            },
            {
              num: "02",
              title: "Тенерифе, который не покажет турпакет",
              text: "Не отель-бассейн-ресторан. Ущелье Маска, вулкан Тейде на рассвете, яхта к скрытому пляжу, банкет в замке. Всё в программе, уже оплачено, уже организовано."
            },
            {
              num: "03",
              title: "Группа, которая становится командой",
              text: "Большинство едет в одиночку. К третьему дню группа уже вместе завтракает. Малая группа — это не про теннис, это про людей. Активные 25–45, без снобизма."
            },
          ].map((c) => (
            <div key={c.num} className="reveal bg-card p-8 lg:p-10">
              <span className="font-display text-[48px] font-light text-gold/20 leading-none block mb-4">{c.num}</span>
              <h3 className="font-display text-[20px] text-forest mb-3">{c.title}</h3>
              <p className="text-[15px] leading-[1.7] text-text-body font-light">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRAINER ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="trainer">
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
                <p className="text-[11px] tracking-[2px] uppercase text-text-muted-custom">Фото тренера</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/15" />
          </div>
          <div>
            <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Тренер</p>
            <h3 className="reveal font-display text-[28px] font-light text-forest mb-1">[Имя Фамилия]</h3>
            <p className="text-[12px] tracking-[2px] uppercase text-gold mb-6">Русскоязычный тренер · Tenerife Tennis Academy</p>
            <p className="text-[15px] leading-[1.7] text-text-body font-light mb-6">
              [3–4 предложения: кто, сколько лет тренирует, специализация, почему Тенерифе, что любит в этом формате.]
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { num: "10+", label: "Лет опыта" },
                { num: "—", label: "Категория" },
                { num: "—", label: "Кемпов" },
              ].map((f) => (
                <div key={f.label}>
                  <span className="font-display text-[28px] font-light text-gold leading-none block">{f.num}</span>
                  <span className="text-[11px] tracking-[1px] text-text-muted-custom mt-1 block">{f.label}</span>
                </div>
              ))}
            </div>
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-8 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-colors duration-300">
              <TelegramIcon /> Написать тренеру
            </a>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMME (day cards) ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="programme">
        <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">7 дней · сентябрь 2026</p>
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-4">
          Программа по дням
        </h2>
        <p className="reveal text-[15px] text-text-body leading-[1.6] font-light max-w-[560px] mb-12">
          Маршрут составлен так, чтобы каждый день был непохож на предыдущий. Горы чередуются с морем, активность — с восстановлением. Теннис каждый вечер в одно и то же время.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[2px]">
          {days.map((day) => (
            <div
              key={day.d}
              className="reveal relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredDay(day.d)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() => setHoveredDay(hoveredDay === day.d ? null : day.d)}
            >
              <div className={`p-5 lg:p-7 flex flex-col gap-3 transition-all duration-500 min-h-[200px] ${day.last ? "bg-forest" : "bg-card"} ${hoveredDay === day.d ? "opacity-0" : "opacity-100"}`}>
                <span className={`font-display text-[36px] font-light leading-none ${day.last ? "text-gold" : "text-forest"}`}>{day.d}</span>
                <span className={`text-[10px] tracking-[2px] uppercase ${day.last ? "text-sand/40" : "text-text-muted-custom"}`}>{day.wd}</span>
                <div className={`h-px ${day.last ? "bg-gold/15" : "bg-forest/10"}`} />
                <p className={`text-[14px] leading-[1.5] font-light ${day.last ? "text-sand-light" : "text-text-body"}`}>{day.am}</p>
                <p className="text-[12px] font-normal text-gold">{day.pm}</p>
              </div>

              <div className={`absolute inset-0 transition-all duration-500 ${hoveredDay === day.d ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <img src={day.img} alt={`День ${day.d}`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-forest/75 flex flex-col justify-end p-4">
                  <span className="font-display text-[28px] text-gold leading-none mb-1">{day.d}</span>
                  <span className="text-[10px] tracking-[2px] uppercase text-gold/60 mb-2">{day.wd}</span>
                  <p className="text-[12px] leading-[1.6] text-sand/80 font-light">{day.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 reveal">
          <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-all duration-300">
            Забронировать <ArrowRight size={14} />
          </a>
          <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-text-muted-custom hover:text-gold transition-colors no-underline">
            или написать в Telegram →
          </a>
        </div>
      </section>

      {/* ─── DAY IN CAMP (timeline) ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16">
        <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Как это выглядит</p>
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-16">
          Один день. <em className="italic text-gold">Изнутри.</em>
        </h2>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <div key={i} className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-16 border-t border-forest/8 ${item.reverse ? "lg:[direction:rtl]" : ""}`}>
              <div className={`aspect-[4/3] overflow-hidden ${item.reverse ? "lg:order-2 [direction:ltr]" : ""}`}>
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
              <div className={`flex flex-col gap-4 ${item.reverse ? "lg:order-1 [direction:ltr]" : ""}`}>
                <span className="text-[10px] tracking-[3px] uppercase text-gold">{item.time}</span>
                <h3 className="font-display text-[28px] lg:text-[32px] font-light text-forest leading-[1.2]">{item.title}</h3>
                <p className="text-[15px] leading-[1.8] text-text-body font-light max-w-[440px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORMAT + INCLUDED (with bg image) ─── */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden" id="format">
        <div className="absolute inset-0">
          <img src={bgFormats} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-forest/88" />
        </div>
        <div className="relative z-10">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold/60 mb-4">Формат</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-12">
            Что включено
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mb-12">
            {[
              { num: "12", label: "Участников максимум", sub: "Тренер знает каждого по имени." },
              { num: "2", label: "Часа каждая тренировка", sub: "Разминка, техника, игровые сеты." },
              { num: "3", label: "Профессиональных корта", sub: "Хардовое покрытие." },
              { num: "7", label: "Дней", sub: "Финальный турнир с призами в последний вечер." },
            ].map((n) => (
              <div key={n.label} className="reveal p-6 lg:p-8 border border-gold/10 bg-forest/30 backdrop-blur-sm">
                <span className="font-display text-[40px] font-light text-gold leading-none block mb-2">{n.num}</span>
                <p className="font-display text-[15px] text-sand-light mb-1">{n.label}</p>
                <p className="text-[13px] text-sand/45 font-light">{n.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[800px]">
            <div className="reveal p-8 border border-gold/10 bg-forest/30 backdrop-blur-sm">
              <h3 className="font-display text-[18px] text-sand-light mb-4">Включено</h3>
              <ul className="flex flex-col gap-2.5">
                {["6 тренировок (теннис/падел)", "Яхта, Тейде, Маска, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову", "Помощь с авиабилетами и трансфером из аэропорта", "Организация"].map((f) => (
                  <li key={f} className="text-[14px] text-sand/60 flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal p-8 border border-gold/10 bg-forest/30 backdrop-blur-sm">
              <h3 className="font-display text-[18px] text-sand-light mb-4">Не включено</h3>
              <ul className="flex flex-col gap-2.5">
                {["Перелёт (через турпакет)", "Проживание (через турпакет)", "Питание вне программы", "Личные расходы"].map((f) => (
                  <li key={f} className="text-[14px] text-sand/40 flex gap-3 items-start">
                    <span className="text-sand/30 mt-0.5">—</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 reveal">
            <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
              Забронировать <ArrowRight size={14} />
            </a>
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">
              или написать в Telegram →
            </a>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16 flex justify-center items-center text-center">
        <div className="max-w-[680px] flex flex-col items-center gap-8">
          <span className="font-display text-[120px] leading-[0.6] text-gold/20 block">"</span>
          <blockquote className="font-display text-[clamp(24px,4vw,40px)] font-light italic text-sand-light leading-[1.3]">
            К третьему дню я перестал проверять телефон.
          </blockquote>
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-forest-light border border-gold/30 flex items-center justify-center">
              <span className="font-display text-[14px] text-gold">М</span>
            </div>
            <div className="text-left">
              <span className="text-[13px] text-sand tracking-[1px] block">Михаил</span>
              <span className="text-[10px] tracking-[2px] uppercase text-text-muted-custom block mt-0.5">Москва · участник кемпа</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING (with bg image) ─── */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-cream/92" />
        </div>
        <div className="relative z-10">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Стоимость</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
            Два пакета. Всё прозрачно.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[900px]">
            <div className="reveal bg-forest p-8 lg:p-12 flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/60 mb-4">Спортивный пакет</p>
              <div className="font-display text-[52px] font-light text-gold leading-none mb-2">€900</div>
              <p className="text-[13px] text-sand/40 mb-8">на человека</p>
              <ul className="flex flex-col gap-3 flex-1">
                {["6 тренировок теннис/падел (2 ч каждая)", "Яхта, Тейде, Маска, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову", "Организация"].map((f) => (
                  <li key={f} className="text-[14px] text-sand/55 flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline bg-gold text-forest hover:bg-gold-light transition-all duration-300 block">
                Забронировать
              </a>
            </div>

            <div className="reveal bg-card p-8 lg:p-12 flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-text-muted-custom mb-4">Турпакет · через оператора</p>
              <div className="font-display text-[44px] font-light text-forest leading-none mb-2">200 000 ₽</div>
              <p className="text-[13px] text-text-muted-custom mb-8">перелёт + вилла + питание + виза + страховка</p>
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Перелёт — 90 000 ₽",
                  "Проживание на вилле с бассейном",
                  "Питание от повара",
                  "Виза — 20 000 ₽",
                  "Страховка",
                ].map((f) => (
                  <li key={f} className="text-[14px] text-text-body flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline border border-gold/30 text-gold hover:bg-gold/5 transition-all duration-300 block">
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Payment conditions */}
          <div className="max-w-[900px] mt-[2px] bg-card p-6 lg:p-8 reveal">
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
          <p className="text-[12px] text-text-muted-custom mt-4 max-w-[900px]">Цены действительны при бронировании до 1 августа 2026. После — уточняйте наличие мест.</p>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="reviews">
        <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Отзывы</p>
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Что говорят участники
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            { name: "Алексей К.", city: "Москва", text: "Ожидал теннис, а получил полноценный перезапуск. Тренировки, океан, компания — всё сложилось. Уже планирую вернуться." },
            { name: "Марина С.", city: "Санкт-Петербург", text: "Ехала одна и переживала. К третьему дню мы были командой. За неделю мой уровень вырос больше, чем за год дома." },
            { name: "Дмитрий Р.", city: "Дубай", text: "Организация на высшем уровне. Визу помогли, трансферы, жильё — не думал ни о чём. Вулкан Тейде и банкет в замке — отдельный шедевр." },
          ].map((t) => (
            <div key={t.name} className="reveal bg-card p-8 lg:p-10 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <span className="font-display text-[60px] leading-[0.8] text-gold/15 block">"</span>
              <p className="text-[15px] text-text-body leading-[1.7] font-light flex-1">«{t.text}»</p>
              <div className="flex items-center gap-3 pt-4 border-t border-forest/10">
                <div className="w-10 h-10 rounded-full bg-forest/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-[14px] text-forest">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[14px] font-normal text-forest">{t.name}</p>
                  <p className="text-[12px] text-text-muted-custom">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-text-muted-custom/60 mt-6 tracking-[1px]">
          * Первый выезд по этому маршруту. Отзывы — о предыдущих поездках с теми же организаторами.
        </p>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="faq">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Частые вопросы
        </h2>
        <div className="max-w-[680px]">
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

      {/* ─── GALLERY ─── */}
      <section className="bg-sand-light pt-16 pb-0">
        <p className="text-[11px] tracking-[3px] uppercase text-gold px-6 lg:px-16 mb-8">Атмосфера</p>
        <div className="grid grid-cols-3 gap-[3px]" style={{ gridTemplateRows: "300px 300px" }}>
          <div className="row-span-2 overflow-hidden">
            <img src={gal1} alt="Теннисный корт" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500" loading="lazy" />
          </div>
          <div className="overflow-hidden">
            <img src={gal2} alt="Группа участников" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500" loading="lazy" />
          </div>
          <div className="overflow-hidden">
            <img src={gal3} alt="Тенерифе" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500" loading="lazy" />
          </div>
          <div className="col-span-2 overflow-hidden">
            <img src={gal4} alt="Вулкан Тейде" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ─── CTA / FORM ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16" id="cta">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="reveal font-display font-light text-[clamp(36px,5vw,56px)] text-sand-light leading-[1.1] mb-2">
            Готовы?
          </h2>
          <p className="reveal font-display text-[clamp(20px,3vw,28px)] italic text-gold mb-4">Сентябрь 2026.</p>
          <p className="reveal text-[14px] text-sand/45 mb-10 leading-[1.7]">
            Виза оформляется за 2–4 недели.<br />
            Оставьте контакт — мы напишем в течение нескольких часов, ответим на все вопросы и зафиксируем место.
          </p>

          {formSent ? (
            <div className="reveal bg-forest-light/40 border border-gold/20 p-8 text-center">
              <p className="font-display text-[22px] text-sand-light mb-2">Заявка принята!</p>
              <p className="text-[14px] text-sand/60 font-light leading-[1.6]">
                Обычно мы отвечаем в течение нескольких часов.<br />
                Если срочно — напишите напрямую в{" "}
                <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">Telegram</a>.
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
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Телефон / Telegram</label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20"
                  placeholder="+7 999 999 99 99 или @username"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Уровень</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="beginner" className="bg-forest text-sand-light">Новичок</option>
                  <option value="intermediate" className="bg-forest text-sand-light">Любитель</option>
                  <option value="advanced" className="bg-forest text-sand-light">Продвинутый</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Как удобнее связаться?</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { val: "call", label: "Позвонить" },
                    { val: "telegram", label: "Telegram" },
                    { val: "whatsapp", label: "WhatsApp" },
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center gap-2 cursor-pointer text-[14px] text-sand/60">
                      <input
                        type="radio"
                        name="preferred"
                        value={opt.val}
                        checked={formData.preferred === opt.val}
                        onChange={(e) => setFormData({ ...formData, preferred: e.target.value })}
                        className="accent-gold"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="mt-4 py-4 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300">
                Оставить заявку
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">
              <TelegramIcon size={14} /> @oceaninthesky
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-10 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <span className="font-display text-[15px] italic text-gold tracking-[3px] block">Tennis · Tenerife</span>
            <span className="text-[12px] text-sand/30 mt-1 block">@oceaninthesky</span>
          </div>
          <div className="text-center">
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline block">
              Telegram: @oceaninthesky
            </a>
          </div>
          <div className="md:text-right">
            <span className="text-[13px] text-sand/40 block">14–20 сентября 2026</span>
            <span className="text-[12px] text-sand/25 block mt-1">Tenerife Tennis Academy · © 2026</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  );
};

export default Index;
