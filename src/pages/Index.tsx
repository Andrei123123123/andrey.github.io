import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Advantages from "@/components/Advantages";
import TrainerSection from "@/components/TrainerSection";
import Testimonials from "@/components/Testimonials";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Star, Check, MapPin, Plane, Users, Trophy, Wine, Mountain, Waves, Sun, Utensils, Camera, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-tenerife.jpg";

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [tennisLevel, setTennisLevel] = useState<string | null>(null);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  const days = [
    { date: "14", weekday: "Пн", theme: "Прилёт. Пляж. Знакомство.", tennis: "Теннис / падел 16–18" },
    { date: "15", weekday: "Вт", label: "Горы", theme: "Ущелье Маска. Запад острова.", tennis: "Теннис / падел 16–18" },
    { date: "16", weekday: "Ср", label: "Море", theme: "Яхта на закате.", tennis: "Теннис / падел 16–18" },
    { date: "17", weekday: "Чт", label: "Море", theme: "Пляж. Свободный день.", tennis: "Теннис / падел 16–18" },
    { date: "18", weekday: "Пт", label: "Горы", theme: "Вулкан Тейде.", tennis: "Теннис / падел 16–18" },
    { date: "19", weekday: "Сб", label: "Море", theme: "Сёрфинг с инструктором.", tennis: "Теннис / падел 16–18" },
    { date: "20", weekday: "Вс", label: "Финал", theme: "Замок Сан-Мигель. Банкет.", tennis: "Турнир + прощальный ужин", finale: true },
  ];

  const faqs = [
    { q: "Нужна ли виза и как её получить?", a: "Тенерифе — это Испания, нужна шенгенская виза. Наш туроператор-партнёр берёт на себя оформление: приглашение, документы, подача. Стоимость визы от 16 000 ₽ входит в турпакет. Срок рассмотрения 2–4 недели, поэтому бронировать нужно минимум за 6 недель до вылета." },
    { q: "Какой уровень тенниса нужен?", a: "Кемп подходит для новичков и любителей — это наш основной фокус. Никогда не играли? Не проблема. Тренер работает с каждым индивидуально. А если уже уверенно держите ракетку — будет игровая практика и тактика. Также можно выбрать падел вместо тенниса." },
    { q: "Можно ли поехать одному?", a: "80% участников едут одни. Малая группа, общие тренировки, совместные приключения — к третьему дню вы команда. Многие участники потом путешествуют вместе." },
    { q: "Что входит в стоимость?", a: "Спортивный пакет (850 €): 6 тренировок теннис/падел, яхта, Тейде, Маска, сёрфинг, турнир, банкет, трансферы, организация. Турпакет (от 116 000 ₽ через оператора): перелёт, проживание, виза, страховка." },
    { q: "Что взять с собой?", a: "Спортивную обувь для корта (обязательно), удобную форму, купальник, лёгкую куртку для Тейде — там прохладно даже в сентябре. Ракетки для тенниса и падел есть в академии, но свою привезти лучше. Мячи включены." },
    { q: "Это первый кемп?", a: "Да, это первый сезон. За организацией — команда с опытом в спортивных мероприятиях и travel. Тренировки проводит лицензированная Tenerife Tennis Academy. Договор, гарантия возврата депозита, полная прозрачность." },
    { q: "Можно вернуть деньги, если передумаю?", a: "Да. Кемп не состоялся — 100% возврат. Отмена за 30+ дней — 100%. За 14–30 дней — 50%. Детали обсуждаем индивидуально." },
  ];

  return (
    <div ref={containerRef}>
      {/* ─── HERO — full-screen lifestyle ─── */}
      <section className="min-h-screen relative flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Тенерифе — океан, теннис и закат" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-forest/40" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 py-9 px-6 lg:px-16 flex justify-between items-center">
          <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Padel · Tenerife</span>
          <ul className="hidden md:flex gap-10 list-none">
            {[
              { href: "#about", label: "О проекте" },
              { href: "#trainer", label: "Тренер" },
              { href: "#programme", label: "Программа" },
              { href: "#pricing", label: "Пакеты" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] tracking-[2.5px] uppercase text-sand/50 no-underline hover:text-gold transition-colors duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <a href="#cta" className="inline-block py-3 px-7 border border-gold/40 text-gold font-body text-[10px] font-medium tracking-[2.5px] uppercase no-underline hover:bg-gold/10 transition-colors duration-300">
              Записаться
            </a>
          </div>
          <MobileMenu />
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center px-6 lg:px-16 pb-12">
          <div className="max-w-[740px]">
            <p className="animate-fade-up flex items-center gap-4 text-[10px] tracking-[4px] uppercase text-gold mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="block w-8 h-px bg-gold" />
              Канарские острова · Испания · Европа
            </p>

            <h1 className="animate-fade-up font-display font-light text-[clamp(38px,5.5vw,72px)] leading-[1.05] text-sand-light tracking-[-0.5px]" style={{ animationDelay: "0.25s" }}>
              Теннис. Падел.
              <em className="italic text-gold-light"> Тенерифе.</em>
            </h1>

            <p className="animate-fade-up mt-5 font-display text-[clamp(18px,2.5vw,26px)] italic text-sand/60 leading-[1.5]" style={{ animationDelay: "0.35s" }}>
              7 дней, 6 тренировок, до 12 человек.<br className="hidden sm:block" />
              Теннис или падел — на выбор. Утром — океан и вулканы. Вечером — корт.
            </p>

            {/* Lifestyle bullets */}
            <div className="animate-fade-up mt-8 grid grid-cols-2 gap-x-8 gap-y-3" style={{ animationDelay: "0.48s" }}>
              {[
                "Тренировки на берегу океана",
                "Яхта вдоль побережья",
                "Вулкан Тейде · 3 718 м",
                "Сёрфинг и чёрные пляжи",
                "Банкет в средневековом замке",
                "12 единомышленников",
              ].map((b) => (
                <p key={b} className="text-[13px] text-sand/50 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {b}
                </p>
              ))}
            </div>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ animationDelay: "0.55s" }}>
              <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-300">
                Хочу поехать
                <ArrowRight size={14} />
              </a>
              <a href="#programme" className="inline-block py-4 px-10 border border-gold/30 text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold/10 transition-all duration-300">
                Как это выглядит
              </a>
            </div>

            <div className="animate-fade-up mt-6 flex items-center gap-4" style={{ animationDelay: "0.6s" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] text-sand/45 tracking-[1px]">Осталось 8 мест из 12 · сентябрь 2026</span>
            </div>
          </div>
        </div>

        {/* Hero bottom — emotional stats */}
        <div className="animate-fade-up relative z-10 py-8 px-6 lg:px-16 flex gap-10 lg:gap-16 flex-wrap items-center border-t border-gold/10" style={{ animationDelay: "0.7s" }}>
          {[
            { num: "7", label: "дней в Европе" },
            { num: "6", label: "тренировок" },
            { num: "12", label: "участников max" },
            { num: "2", label: "спорта · теннис и падел" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-[32px] lg:text-[36px] font-light text-gold leading-none">{s.num}</span>
              <span className="text-[9px] tracking-[2.5px] uppercase text-sand/35">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EMOTIONAL HOOK — "Not just a camp" ─── */}
      <section className="bg-forest py-[100px] lg:py-[140px] px-6 lg:px-16 relative overflow-hidden" id="about">
        <div className="absolute left-[-200px] top-[-200px] w-[600px] h-[600px] rounded-full border border-gold/5" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-6">
            <span className="block w-8 h-px bg-gold" />
            Это не кемп
            <span className="block w-8 h-px bg-gold" />
          </p>
          <h2 className="font-display font-light text-[clamp(34px,5vw,60px)] text-sand-light leading-[1.1] mb-8">
            Не просто поездка.<br /><em className="italic text-gold">Теннис. Падел. Океан.</em>
          </h2>

          <div className="max-w-[640px] mx-auto">
            <p className="text-[16px] md:text-[18px] text-sand/60 leading-[1.85] font-light">
              Представьте: утром вы стоите на краю вулкана — 3 718 метров над облаками. Днём — яхта вдоль побережья. Вечером — полтора часа тенниса или падела на профессиональных кортах с видом на Атлантику.
            </p>
            <p className="text-[16px] md:text-[18px] text-sand/60 leading-[1.85] font-light mt-5">
              А между всем этим — закаты, рестораны, разговоры с людьми, с которыми хочется оставаться на связи. Океанский ветер. Температура +25. Ощущение, что вы живёте, а не отдыхаете.
            </p>
            <p className="font-display italic text-[clamp(20px,2.5vw,28px)] text-gold mt-10 leading-[1.4]">
              Это опыт, который меняет настроение на месяцы вперёд.
            </p>
          </div>

          {/* Visual lifestyle grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] mt-14">
            {[
              { emoji: "🌅", text: "Закаты над океаном" },
              { emoji: "🍷", text: "Рестораны и вино" },
              { emoji: "🏄", text: "Сёрфинг и пляжи" },
              { emoji: "🎾", text: "Теннис и падел" },
            ].map((item) => (
              <div key={item.text} className="reveal p-6 lg:p-8 border border-gold/10 text-center">
                <span className="text-[28px] block mb-3">{item.emoji}</span>
                <p className="text-[12px] text-sand/45 tracking-[1.5px] uppercase">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── "WHY IT WORKS" — 3 cards ─── */}
      <section className="bg-cream py-[100px] lg:py-[120px] px-6 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Почему это работает
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[620px] mb-[72px]">
          Не просто поездка.<br /><em className="italic text-gold">Теннис. Падел. Океан.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            {
              num: "01",
              title: "Теннис или падел — каждый день",
              text: "Вечерние тренировки в Tenerife Tennis Academy — 1,5 часа в малой группе до 12 человек. Каждый выбирает: теннис или падел. Новички и любители в приоритете — тренер работает с каждым.",
            },
            {
              num: "02",
              title: "Сильное окружение",
              text: "12 человек со всего мира — предприниматели, фрилансеры, путешественники. Вместе на корте, на яхте, на вулкане. К третьему дню вы команда. Это не случайная группа — это комьюнити.",
            },
            {
              num: "03",
              title: "Два пакета — всё понятно",
              text: "Спортивный пакет: тренировки, активности, трансферы. Турпакет через нашего партнёра: перелёт, отель, страховка, виза. Два платежа — и вся поездка собрана за тебя.",
            },
          ].map((card) => (
            <div key={card.num} className="reveal bg-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <span className="font-display text-[48px] font-light text-forest/10 leading-none block mb-4">{card.num}</span>
              <h3 className="font-display text-[20px] font-normal text-forest mb-3 leading-[1.2]">{card.title}</h3>
              <p className="text-[13px] leading-[1.75] text-text-body font-light">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOR WHOM ─── */}
      <section className="bg-sand-light py-[100px] lg:py-[120px] px-6 lg:px-16" id="for-whom">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Для кого
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[620px] mb-6">
          Если вы узнаёте себя —<br /><em className="italic text-gold">вам сюда.</em>
        </h2>
        <p className="text-[14px] text-text-body leading-[1.7] font-light max-w-[540px] mb-[60px]">
          Это не про профессиональный спорт. Это про людей, которые ценят опыт, новые впечатления и качественный отдых в Европе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { icon: "🎾", title: "Теннисист или падел-игрок", text: "Играете раз в неделю или раз в год. Хотите прокачать уровень: тёплый климат, профессиональный тренер, океан за кортом." },
            { icon: "✈️", title: "Путешественник", text: "Устали от пляжных all-inclusive. Ищете опыт, а не просто отпуск. Хотите увидеть Канары не из окна автобуса." },
            { icon: "👥", title: "Нетворкер", text: "Хотите провести неделю в компании 12 интересных людей. Не случайные попутчики — единомышленники." },
            { icon: "🔄", title: "Перезагрузка", text: "Нужен разрыв шаблона. Океан вместо офиса. Корт вместо зума. Закат вместо экрана." },
          ].map((c) => (
            <div key={c.title} className="reveal bg-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <span className="text-[32px] mb-5 block">{c.icon}</span>
              <h3 className="font-display text-[20px] font-normal text-forest mb-3 leading-[1.2]">{c.title}</h3>
              <p className="text-[13px] leading-[1.75] text-text-body font-light">{c.text}</p>
            </div>
          ))}
        </div>
        {/* Anti-audience */}
        <div className="mt-12 max-w-[700px]">
          <p className="text-[12px] tracking-[2px] uppercase text-text-muted-custom/60 mb-4">Это не для вас, если:</p>
          <div className="flex flex-wrap gap-3">
            {["Ищете санаторий", "Нужен детский лагерь", "Хотите all-inclusive у бассейна", "Не готовы к активному отдыху"].map((item) => (
              <span key={item} className="text-[12px] text-text-muted-custom/50 border border-border px-4 py-2 font-light">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED — 4 categories ─── */}
      <section className="bg-forest py-[100px] lg:py-[120px] px-6 lg:px-16" id="whats-included">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Что входит
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.15] max-w-[560px] mb-[72px]">
          Четыре грани<br /><em className="italic text-gold">одной недели.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            {
              icon: <Trophy size={28} className="text-gold" />,
              title: "Теннис и падел",
              items: ["6 тренировок × 1,5 часа", "Теннис или падел на выбор", "Ракетки и мячи включены", "Итоговый турнир"],
            },
            {
              icon: <Sun size={28} className="text-gold" />,
              title: "Lifestyle",
              items: ["Закаты на океане", "Рестораны и ужины", "Банкет в замке Сан-Мигель", "Свободное время для себя"],
            },
            {
              icon: <Mountain size={28} className="text-gold" />,
              title: "Путешествия",
              items: ["Вулкан Тейде (3 718 м)", "Ущелье Маска", "Яхта вдоль побережья", "Сёрфинг и чёрные пляжи"],
            },
            {
              icon: <Users size={28} className="text-gold" />,
              title: "Комьюнити",
              items: ["Группа до 12 человек", "Совместные приключения", "Нетворкинг каждый день", "Закрытый чат после кемпа"],
            },
          ].map((cat) => (
            <div key={cat.title} className="reveal p-8 lg:p-10 border border-gold/10">
              <div className="mb-5">{cat.icon}</div>
              <h3 className="font-display text-[22px] font-normal text-sand-light mb-5 leading-[1.2]">{cat.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[13px] text-sand/50 flex items-start gap-3">
                    <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── MID-PAGE CTA after "What's Included" ─── */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
          <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
            Записаться в кемп
            <ArrowRight size={14} />
          </a>
          <p className="text-[12px] text-sand/35 tracking-[1px]">Группа до 12 человек · осталось 8 мест</p>
        </div>
      </section>

      {/* ─── TRAINER ─── */}
      <div id="trainer">
        <TrainerSection />
      </div>

      {/* ─── PROGRAMME ─── */}
      <section className="bg-sand-light py-[100px] lg:py-[120px] px-6 lg:px-16" id="programme">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          14 — 20 сентября 2026
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-4">
          7 дней.<br /><em className="italic text-gold">Ни одного похожего.</em>
        </h2>
        <p className="text-[14px] text-text-body leading-[1.7] font-light max-w-[520px] mb-[72px]">
          Утром — приключение. Вечером — корт. Каждый день расписан, но оставляет место для свободы.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[2px]">
          {days.map((d) => (
            <div key={d.date} className={`reveal p-6 lg:p-8 flex flex-col gap-5 transition-colors duration-300 group ${d.finale ? "bg-forest" : "bg-card hover:bg-forest"}`}>
              <span className={`font-display text-[42px] font-light leading-none transition-colors duration-300 ${d.finale ? "text-gold" : "text-forest group-hover:text-gold"}`}>{d.date}</span>
              <span className={`text-[9px] tracking-[2px] uppercase -mt-3 transition-colors duration-300 ${d.finale ? "text-sand/40" : "text-text-muted-custom group-hover:text-sand/50"}`}>{d.weekday}</span>
              <div className={`h-px transition-colors duration-300 ${d.finale ? "bg-gold/15" : "bg-forest/10 group-hover:bg-gold/20"}`} />
              <div>
                <p className={`text-[8px] tracking-[2px] uppercase transition-colors duration-300 ${d.finale ? "text-gold/50" : "text-gold/60 group-hover:text-gold/50"}`}>{d.label || "День"}</p>
                <p className={`text-[13px] leading-[1.5] mt-1 font-light transition-colors duration-300 ${d.finale ? "text-sand-light" : "text-text-body group-hover:text-sand-light"}`}>{d.theme}</p>
              </div>
              <div>
                <p className={`text-[8px] tracking-[2px] uppercase transition-colors duration-300 ${d.finale ? "text-gold/50" : "text-gold/60 group-hover:text-sand/40"}`}>Вечер</p>
                <p className={`text-[12px] mt-1 font-normal transition-colors duration-300 ${d.finale ? "text-gold-light" : "text-gold group-hover:text-gold-light"}`}>{d.tennis}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MID-PAGE CTA after Programme ─── */}
        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 reveal">
          <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-all duration-300">
            Получить программу и даты
            <ArrowRight size={14} />
          </a>
          <p className="text-[12px] text-text-muted-custom tracking-[1px]">Ответим за 2 часа</p>
        </div>
      </section>

      {/* ─── FORMAT ─── */}
      <section className="bg-cream py-[100px] lg:py-[120px] px-6 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Формат
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Теннис или падел.<br /><em className="italic text-gold">Ты выбираешь.</em>
        </h2>

        {/* 4 numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mb-16">
          {[
            { num: "12", label: "Участников максимум" },
            { num: "1", label: "Тренировка в день · 1,5 часа · вечер 16–18" },
            { num: "2", label: "Спорта на выбор · теннис или падел" },
            { num: "7", label: "Дней на Тенерифе" },
          ].map((s) => (
            <div key={s.label} className="reveal bg-card p-8 text-center">
              <span className="font-display text-[48px] font-light text-forest leading-none block mb-3">{s.num}</span>
              <span className="text-[11px] tracking-[1.5px] uppercase text-text-muted-custom">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Two columns: sport package / tour package */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          <div className="bg-forest p-8 lg:p-12">
            <p className="text-[9px] tracking-[3px] uppercase text-gold/60 mb-3">Спортивный пакет · 850 €</p>
            <ul className="flex flex-col gap-3">
              {[
                "6 тренировок: теннис или падел на выбор",
                "Аренда кортов и ракеток, мячи",
                "Яхта, вулкан Тейде, ущелье Маска, сёрфинг",
                "Итоговый турнир и банкет в замке Сан-Мигель",
                "Трансферы по острову",
                "Организация и сопровождение",
              ].map((f) => (
                <li key={f} className="text-[13px] text-sand/60 flex items-start gap-3">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-8 lg:p-12">
            <p className="text-[9px] tracking-[3px] uppercase text-text-muted-custom mb-3">Турпакет · через оператора</p>
            <ul className="flex flex-col gap-3">
              {[
                "Перелёт туда-обратно — от 60 000 ₽",
                "Проживание 7 ночей — от 40 000 ₽",
              ].map((f) => (
                <li key={f} className="text-[13px] text-text-body flex items-start gap-3">
                  <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="bg-forest py-[100px] lg:py-[120px] px-6 lg:px-16 relative overflow-hidden" id="location">
        <div className="absolute right-[-150px] bottom-[-150px] w-[500px] h-[500px] rounded-full border border-gold/5" />
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5 relative z-10">
          <span className="block w-6 h-px bg-gold" />
          Локация
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.15] max-w-[560px] mb-6 relative z-10">
          Тенерифе.<br /><em className="italic text-gold">Остров вечной весны.</em>
        </h2>
        <p className="text-[15px] text-sand/50 leading-[1.75] font-light max-w-[560px] mb-[60px] relative z-10">
          Канарские острова, Испания. Европа без европейского холода. +25°C в сентябре. Вулкан, океан, чёрные пляжи — и всё это в зоне Шенгена.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] relative z-10">
          {[
            { icon: <MapPin size={20} />, label: "Канарские острова", sub: "Испания · Евросоюз" },
            { icon: <Sun size={20} />, label: "+25°C в сентябре", sub: "300 солнечных дней в году" },
            { icon: <Waves size={20} />, label: "Атлантический океан", sub: "Пляжи в 15 минутах" },
            { icon: <Plane size={20} />, label: "4.5 часа из Москвы", sub: "Прямые рейсы" },
          ].map((item) => (
            <div key={item.label} className="reveal p-8 border border-gold/10">
              <div className="text-gold mb-4">{item.icon}</div>
              <p className="font-display text-[16px] text-sand-light mb-1">{item.label}</p>
              <p className="text-[11px] text-sand/40 tracking-[1px]">{item.sub}</p>
            </div>
          ))}
        </div>
        {/* Location photo placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px] mt-[60px] relative z-10">
          {["Вулкан Тейде · 3 718 м", "Чёрный пляж · Атлантика", "Tenerife Tennis Academy"].map((label) => (
            <div key={label} className="aspect-[16/9] bg-forest-light border border-gold/10 flex items-center justify-center">
              <p className="text-[10px] tracking-[2px] uppercase text-gold/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <Advantages />

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── PRICING — 2 packages ─── */}
      <section className="bg-cream py-[100px] lg:py-[120px] px-6 lg:px-16" id="pricing">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Пакеты и стоимость
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-6">
          Два пакета.<br /><em className="italic text-gold">Всё прозрачно.</em>
        </h2>
        <p className="text-[14px] text-text-body leading-[1.7] font-light max-w-[500px] mb-[72px]">
          Спортивный пакет — всё, что на острове. Турпакет — всё, что до острова.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[900px]">
          {/* Sport package — featured */}
          <div className="reveal p-8 lg:p-12 flex flex-col relative overflow-hidden bg-forest">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
            <span className="inline-block self-start text-[9px] tracking-[3px] uppercase bg-gold text-forest px-3 py-1 mb-6 font-medium">
              Основной
            </span>
            <p className="text-[9px] tracking-[3px] uppercase text-gold/60 mb-2">Спортивный пакет</p>
            <h3 className="font-display text-[22px] font-normal text-sand-light mb-6 leading-[1.2]">
              Тренировки + активности
            </h3>
            <div className="font-display text-[48px] lg:text-[56px] font-light text-gold leading-none">€850</div>
            <p className="text-[11px] tracking-[1px] mt-2 mb-8 text-sand/40">на человека · тренировки + активности</p>
            <div className="h-px my-4 bg-gold/15" />
            <ul className="flex flex-col gap-3 flex-1">
              {[
                "6 тренировок теннис/падел",
                "Яхта, Тейде, Маска, сёрфинг, банкет",
                "Трансферы по острову",
                "Итоговый турнир",
                "Организация и сопровождение",
              ].map((f) => (
                <li key={f} className="text-[13px] text-sand/60 flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline transition-all duration-300 block bg-gold text-forest hover:bg-gold-light"
            >
              Записаться
            </a>
          </div>

          {/* Tour package */}
          <div className="reveal p-8 lg:p-12 flex flex-col relative overflow-hidden bg-card">
            <p className="text-[9px] tracking-[3px] uppercase text-text-muted-custom mb-2">Турпакет · через оператора</p>
            <h3 className="font-display text-[22px] font-normal text-forest mb-6 leading-[1.2]">
              Перелёт + отель + виза
            </h3>
            <div className="font-display text-[44px] lg:text-[48px] font-light text-forest leading-none">от 116 000 ₽</div>
            <p className="text-[11px] tracking-[1px] mt-2 mb-8 text-text-muted-custom">перелёт + отель + виза + страховка</p>
            <div className="h-px my-4 bg-forest/10" />
            <ul className="flex flex-col gap-3 flex-1">
              {[
                "Перелёт от 60 000 ₽",
                "Проживание от 40 000 ₽",
                "Виза от 16 000 ₽",
                "Страховка",
              ].map((f) => (
                <li key={f} className="text-[13px] text-text-body flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline transition-all duration-300 block border border-gold/30 text-gold hover:bg-gold/5 hover:border-gold"
            >
              Узнать подробнее
            </a>
          </div>
        </div>

        {/* Deposit info */}
        <div className="max-w-[900px] mt-[2px] bg-card p-8 lg:p-10 reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-display text-[20px] text-forest mb-1">Депозит — 30% от спортивного пакета (255 €)</p>
              <p className="text-[13px] text-text-body font-light">Остаток — до вылета или по договорённости. Оплата в рублях или евро.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
                <Check size={14} className="text-gold" />
              </div>
              <p className="text-[13px] text-forest font-normal">Полный возврат, если кемп не состоится</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUR STEPS ─── */}
      <section className="bg-cream py-[100px] lg:py-[120px] px-6 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Как это работает
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Четыре шага<br /><em className="italic text-gold">до кемпа.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { num: "1", title: "Напишите нам", text: "В Telegram @oceaninthesky. Ответим на вопросы, подберём турпакет." },
            { num: "2", title: "Бронируем место", text: "Депозит 30% от спортивного пакета (255\u202F€). Место зафиксировано." },
            { num: "3", title: "Оформляем поездку", text: "Туроператор берёт на себя перелёт, отель, визу, страховку. Вам не нужно искать самим." },
            { num: "4", title: "Летим на Тенерифе", text: "14 сентября. Ракетка, хорошее настроение." },
          ].map((step) => (
            <div key={step.num} className="reveal bg-forest p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <span className="font-display text-[48px] font-light text-gold leading-none block mb-5">{step.num}</span>
              <h3 className="font-display text-[18px] font-normal text-sand-light mb-3 leading-[1.2]">{step.title}</h3>
              <p className="text-[13px] leading-[1.75] text-text-muted font-light">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-sand-light py-[100px] lg:py-[120px] px-6 lg:px-16" id="faq">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Частые вопросы
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Отвечаем<br /><em className="italic text-gold">честно.</em>
        </h2>
        <div className="max-w-[720px]">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal border-b border-forest/10 overflow-hidden">
              <button
                className="w-full bg-transparent border-none cursor-pointer py-7 flex justify-between items-center gap-6 text-left"
                onClick={() => toggleFaq(i)}
              >
                <span className="font-display text-[18px] lg:text-[20px] font-normal text-forest leading-[1.3]">{faq.q}</span>
                <span className="w-6 h-6 flex-shrink-0 rounded-full border border-gold/40 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-px bg-gold" />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-2.5 bg-gold transition-all duration-300 ${faqOpen === i ? "opacity-0 rotate-90" : ""}`} />
                </span>
              </button>
              <div
                className="text-[14px] leading-[1.75] text-text-body font-light overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: faqOpen === i ? "300px" : "0",
                  paddingBottom: faqOpen === i ? "28px" : "0",
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-forest py-[100px] lg:py-[140px] px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative overflow-hidden" id="cta">
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] rounded-full border border-gold/5" />
        <div className="absolute right-[-60px] top-[-60px] w-[360px] h-[360px] rounded-full border border-gold/5" />

        <div className="relative z-10">
          <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-8">
            <span className="block w-6 h-px bg-gold" />
            Последний шаг
          </p>
          <h2 className="font-display font-light text-[clamp(36px,4.5vw,60px)] text-sand-light leading-[1.08] mb-5">
            Через полгода вы<br />будете вспоминать<br /><em className="italic text-gold">эту неделю.</em>
          </h2>
          <p className="text-[15px] text-sand/50 leading-[1.75] max-w-[420px] mt-6">
            Спортивный пакет — 850 €. Турпакет (перелёт, отель, виза) — от 116 000 ₽ через нашего оператора. Виза оформляется за 2–4 недели. Напишите — всё расскажем.
          </p>

          {/* Urgency block */}
          <div className="mt-8 p-6 border border-gold/15 max-w-[380px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="font-display text-[20px] text-gold">Осталось 8 мест из 12</span>
            </div>
            <p className="text-[12px] text-sand/40 leading-[1.6]">
              Группа строго до 12 человек. Мы не добираем — когда места заканчиваются, запись закрывается.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "Ответим на любые вопросы за 2 часа",
              "Поможем с визой и билетами",
              "Зафиксируем место без полной оплаты",
            ].map((b) => (
              <p key={b} className="text-[13px] text-sand/50 flex items-center gap-3">
                <Check size={14} className="text-gold flex-shrink-0" />
                {b}
              </p>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[2px] uppercase text-sand/30">Имя</label>
                <input className="bg-card/5 border border-gold/15 py-3.5 px-5 text-sand-light font-body text-[13px] font-light outline-none focus:border-gold/50 transition-colors placeholder:text-sand/20" type="text" placeholder="Ваше имя" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[2px] uppercase text-sand/30">Телефон / Telegram</label>
                <input className="bg-card/5 border border-gold/15 py-3.5 px-5 text-sand-light font-body text-[13px] font-light outline-none focus:border-gold/50 transition-colors placeholder:text-sand/20" type="text" placeholder="+7 ···" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-[2px] uppercase text-sand/30">Уровень тенниса</label>
              <div className="grid grid-cols-3 gap-[2px]">
                {["Новичок", "Любитель", "Уверенный"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setTennisLevel(level)}
                    className={`py-3 border font-body text-[12px] font-light cursor-pointer transition-colors duration-300 ${
                      tennisLevel === level
                        ? "bg-gold/15 border-gold text-gold"
                        : "bg-card/5 border-gold/15 text-sand/40 hover:border-gold/50 hover:text-sand-light"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <button
              className={`mt-2 py-[18px] w-full font-body text-[11px] font-medium tracking-[3px] uppercase border-none cursor-pointer transition-colors duration-300 ${
                submitted ? "bg-forest-light text-sand-light" : "bg-gold text-forest hover:bg-gold-light"
              }`}
              onClick={() => setSubmitted(true)}
            >
              {submitted ? "Заявка отправлена ✓" : "Записаться в кемп"}
            </button>
            <p className="text-center text-[10px] text-sand/30 font-light -mt-1">
              Без обязательств — свяжемся и ответим на вопросы
            </p>
            <p className="text-center text-[10px] text-sand/20 tracking-[2px] uppercase my-1">или</p>
            <a
              href="https://t.me/oceaninthesky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-4 bg-transparent border border-gold/25 text-gold font-body text-[11px] font-normal tracking-[2px] uppercase no-underline hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-10 px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
        <span className="font-display text-[16px] italic text-gold tracking-[3px]">Tennis · Padel · Tenerife · 2026</span>
        <span className="text-[10px] tracking-[1px] text-sand/30">14 — 20 сентября 2026 · Tenerife Tennis Academy</span>
        <div className="flex items-center gap-5">
          <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-sand/30 hover:text-gold transition-colors duration-300" aria-label="Telegram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
          </a>
          <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="text-sand/30 hover:text-gold transition-colors duration-300" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
