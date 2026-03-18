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
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  const days = [
    { date: "14", weekday: "Пн", theme: "Прилёт. Пляж. Первый закат.", tennis: "Теннис 16–18" },
    { date: "15", weekday: "Вт", label: "Горы", theme: "Ущелье Маска. Запад острова.", tennis: "Теннис 16–18" },
    { date: "16", weekday: "Ср", label: "Море", theme: "Яхта. Пляж. Ресторан на закате.", tennis: "Теннис 16–18" },
    { date: "17", weekday: "Чт", label: "Отдых", theme: "Два пляжа. Свободный вечер.", tennis: "Теннис 16–18" },
    { date: "18", weekday: "Пт", label: "Горы", theme: "Вулкан Тейде. 3 718 м над облаками.", tennis: "Теннис 16–18" },
    { date: "19", weekday: "Сб", label: "Море", theme: "Сёрфинг. Океанское купание.", tennis: "Теннис 16–18" },
    { date: "20", weekday: "Вс", label: "Финал", theme: "Замок Сан-Мигель. Банкет.", tennis: "Теннис + турнир", finale: true },
  ];

  const faqs = [
    { q: "Нужна ли виза и как её получить?", a: "Тенерифе — это Испания, шенгенская виза. Tenerife Tennis Academy оформляет спортивное приглашение для каждого участника бесплатно. По опыту — одобрение почти 100%. Срок рассмотрения 2–4 недели. Мы сопровождаем весь процесс." },
    { q: "Какой уровень тенниса нужен?", a: "Любой. Никогда не держали ракетку — отлично, научим. Играете 10 лет — тренер доведёт технику. Тренировки адаптируются индивидуально внутри группы." },
    { q: "Можно ли поехать одному?", a: "80% участников едут одни. Малая группа, общие тренировки, совместные приключения — к третьему дню вы команда. Многие участники потом путешествуют вместе." },
    { q: "Что входит в стоимость?", a: "Все тренировки, активности по программе, трансферы по острову, турнир и банкет. Жильё — в пакетах Standard и Premium. Перелёт — отдельно, но помогаем с подбором." },
    { q: "Что взять с собой?", a: "Теннисные кроссовки, спортивную форму, купальник, лёгкую куртку для Тейде. Ракетки есть в академии, но свою лучше. Мячи включены." },
    { q: "Это первый кемп?", a: "Да, это первый сезон. За организацией — команда с опытом в спортивных мероприятиях и travel. Тренировки проводит лицензированная Tenerife Tennis Academy. Договор, гарантия возврата депозита, полная прозрачность." },
    { q: "Можно вернуть деньги, если передумаю?", a: "Да. Кемп не состоялся — 100% возврат. Отмена за 30+ дней — 100%. За 14–30 дней — 50%. Детали обсуждаем индивидуально." },
  ];

  const tiers = [
    {
      name: "Base",
      subtitle: "Теннис + активности",
      price: "60 000 ₽",
      priceEur: "600 €",
      features: [
        "12 тренировок × 2 часа",
        "Все активности по программе",
        "Трансферы по острову",
        "Итоговый турнир",
        "Банкет в замке Сан-Мигель",
        "Визовое приглашение от академии",
      ],
      notIncluded: ["Жильё", "Перелёт"],
      highlight: false,
    },
    {
      name: "Standard",
      subtitle: "Теннис + жильё + всё включено",
      price: "95 000 ₽",
      priceEur: "950 €",
      features: [
        "Всё из Base",
        "Жильё на 7 ночей рядом с кортами",
        "Завтраки каждый день",
        "Помощь с подбором авиабилетов",
        "Трансфер аэропорт — жильё",
        "Закрытое сообщество участников",
      ],
      notIncluded: ["Перелёт"],
      highlight: true,
    },
    {
      name: "Premium",
      subtitle: "Всё включено + персональный подход",
      price: "145 000 ₽",
      priceEur: "1 450 €",
      features: [
        "Всё из Standard",
        "Улучшенное жильё с видом на океан",
        "Полный пансион (завтраки + обеды)",
        "2 персональные тренировки с тренером",
        "Фото- и видеосъёмка за неделю",
        "Приоритетная визовая поддержка",
      ],
      notIncluded: ["Перелёт"],
      highlight: false,
    },
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
          <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Tenerife</span>
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
              Теннис + lifestyle<br />experience
              <em className="italic text-gold-light"> на Тенерифе</em>
            </h1>

            <p className="animate-fade-up mt-5 font-display text-[clamp(18px,2.5vw,26px)] italic text-sand/60 leading-[1.5]" style={{ animationDelay: "0.35s" }}>
              7 дней в Европе: спорт, океан, путешествия<br className="hidden sm:block" /> и сильное окружение
            </p>

            <p className="animate-fade-up mt-7 text-[15px] md:text-[16px] font-light text-sand/55 leading-[1.8] max-w-[540px]" style={{ animationDelay: "0.42s" }}>
              Не спортлагерь. Не отпуск у бассейна. А неделя жизни на Тенерифе с теннисом, людьми и атмосферой, в которую хочется вернуться.
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
            { num: "12", label: "тренировок" },
            { num: "12", label: "участников max" },
            { num: "+25°", label: "в сентябре" },
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
            Забудьте слово<br /><em className="italic text-gold">«спортивный лагерь».</em>
          </h2>

          <div className="max-w-[640px] mx-auto">
            <p className="text-[16px] md:text-[18px] text-sand/60 leading-[1.85] font-light">
              Представьте: утром вы стоите на краю вулкана — 3 718 метров над облаками. Днём — яхта вдоль побережья. Вечером — два часа тенниса на профессиональных кортах с видом на Атлантику.
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
              { emoji: "🎾", text: "Теннис каждый день" },
            ].map((item) => (
              <div key={item.text} className="reveal p-6 lg:p-8 border border-gold/10 text-center">
                <span className="text-[28px] block mb-3">{item.emoji}</span>
                <p className="text-[12px] text-sand/45 tracking-[1.5px] uppercase">{item.text}</p>
              </div>
            ))}
          </div>
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
            { icon: "🎾", title: "Теннисист-любитель", text: "Играете раз в неделю или раз в год. Хотите прокачать уровень: тёплый климат, профессиональный тренер, океан за кортом." },
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
              title: "Теннис",
              items: ["12 тренировок × 2 часа", "Профессиональный тренер", "Ракетки и мячи включены", "Итоговый турнир"],
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

      {/* ─── PRICING ─── */}
      <section className="bg-cream py-[100px] lg:py-[120px] px-6 lg:px-16" id="pricing">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Пакеты и стоимость
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-6">
          Три пакета.<br /><em className="italic text-gold">Одна неделя мечты.</em>
        </h2>
        <p className="text-[14px] text-text-body leading-[1.7] font-light max-w-[500px] mb-[72px]">
          Выберите уровень комфорта. Программа и впечатления — одинаковые для всех.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] max-w-[1100px]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`reveal p-8 lg:p-12 flex flex-col relative overflow-hidden ${
                tier.highlight ? "bg-forest" : "bg-card"
              }`}
            >
              {tier.highlight && <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />}
              {tier.highlight && (
                <span className="inline-block self-start text-[9px] tracking-[3px] uppercase bg-gold text-forest px-3 py-1 mb-6 font-medium">
                  Популярный
                </span>
              )}
              <p className={`text-[9px] tracking-[3px] uppercase mb-2 ${tier.highlight ? "text-gold/60" : "text-text-muted-custom"}`}>
                {tier.name}
              </p>
              <h3 className={`font-display text-[22px] font-normal mb-6 leading-[1.2] ${tier.highlight ? "text-sand-light" : "text-forest"}`}>
                {tier.subtitle}
              </h3>
              <div className={`font-display text-[44px] lg:text-[48px] font-light leading-none ${tier.highlight ? "text-gold" : "text-forest"}`}>
                {tier.price}
              </div>
              <p className={`text-[11px] tracking-[1px] mt-2 mb-8 ${tier.highlight ? "text-sand/40" : "text-text-muted-custom"}`}>
                на человека · {tier.priceEur}
              </p>
              <div className={`h-px my-6 ${tier.highlight ? "bg-gold/15" : "bg-forest/10"}`} />
              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`text-[13px] flex gap-3 items-start ${tier.highlight ? "text-sand/60" : "text-text-body"}`}>
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              {tier.notIncluded.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gold/10">
                  <p className={`text-[9px] tracking-[2px] uppercase mb-2 ${tier.highlight ? "text-sand/30" : "text-text-muted-custom/60"}`}>Не включено</p>
                  {tier.notIncluded.map((ni) => (
                    <p key={ni} className={`text-[12px] ${tier.highlight ? "text-sand/40" : "text-text-muted-custom"}`}>— {ni}</p>
                  ))}
                </div>
              )}
              <a
                href="#cta"
                className={`mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline transition-all duration-300 block ${
                  tier.highlight
                    ? "bg-gold text-forest hover:bg-gold-light"
                    : "border border-gold/30 text-gold hover:bg-gold/5 hover:border-gold"
                }`}
              >
                Выбрать {tier.name}
              </a>
            </div>
          ))}
        </div>

        {/* Deposit info */}
        <div className="max-w-[1100px] mt-[2px] bg-card p-8 lg:p-10 reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-display text-[20px] text-forest mb-1">Депозит — 30% от стоимости</p>
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

      {/* ─── FINAL CTA — strong close ─── */}
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
            14–20 сентября 2026. Визу нужно начать оформлять за 6 недель. Чем раньше решитесь — тем спокойнее.
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
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-[2px] uppercase text-sand/30">Интересующий пакет</label>
              <div className="grid grid-cols-3 gap-[2px]">
                {["Base", "Standard", "Premium"].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setSelectedPkg(pkg)}
                    className={`py-3 border font-body text-[12px] font-light cursor-pointer transition-colors duration-300 ${
                      selectedPkg === pkg
                        ? "bg-gold/15 border-gold text-gold"
                        : "bg-card/5 border-gold/15 text-sand/40 hover:border-gold/50 hover:text-sand-light"
                    }`}
                  >
                    {pkg}
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
              href="https://t.me/username"
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
        <span className="font-display text-[16px] italic text-gold tracking-[3px]">Tennis · Tenerife · 2026</span>
        <span className="text-[10px] tracking-[1px] text-sand/30">14 — 20 сентября 2026 · Tenerife Tennis Academy</span>
        <div className="flex items-center gap-5">
          <a href="https://t.me/username" className="text-sand/30 hover:text-gold transition-colors duration-300" aria-label="Telegram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
          </a>
          <a href="https://instagram.com/username" className="text-sand/30 hover:text-gold transition-colors duration-300" aria-label="Instagram">
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
