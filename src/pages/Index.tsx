import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Advantages from "@/components/Advantages";
import TrainerSection from "@/components/TrainerSection";
import Testimonials from "@/components/Testimonials";
import { Star, Check, MapPin, Plane, Users, Trophy, Wine, Mountain, Waves } from "lucide-react";

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [tennisLevel, setTennisLevel] = useState<string | null>(null);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  const days = [
    { date: "14", weekday: "Пн", theme: "Прилёт. Пляж. Волейбол.", tennis: "Теннис 16–18" },
    { date: "15", weekday: "Вт", label: "Горы", theme: "Ущелье Маска. Запад острова.", tennis: "Теннис 16–18" },
    { date: "16", weekday: "Ср", label: "Море", theme: "Яхта. Пляж Айдохо.", tennis: "Теннис 16–18" },
    { date: "17", weekday: "Чт", label: "Море", theme: "Два пляжа.", tennis: "Теннис 16–18" },
    { date: "18", weekday: "Пт", label: "Горы", theme: "Вулкан Тейде.", tennis: "Теннис 16–18" },
    { date: "19", weekday: "Сб", label: "Море", theme: "Сёрфинг. Купание.", tennis: "Теннис 16–18" },
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

  const heroPhotos = [
    { label: "Корт + океан", aspect: "aspect-[4/3]" },
    { label: "Тренировка группы", aspect: "aspect-[4/3]" },
    { label: "Закат Тенерифе", aspect: "aspect-[4/3]" },
  ];

  return (
    <div ref={containerRef}>
      {/* ─── HERO ─── */}
      <section className="min-h-screen bg-forest grid grid-rows-[auto_1fr_auto] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(50,90,55,0.35) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(200,169,110,0.08) 0%, transparent 60%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        {/* Nav */}
        <nav className="relative z-10 py-9 px-8 lg:px-16 flex justify-between items-center">
          <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Tenerife</span>
          <ul className="hidden md:flex gap-10 list-none">
            {[
              { href: "#trainer", label: "Тренер" },
              { href: "#programme", label: "Программа" },
              { href: "#pricing", label: "Пакеты" },
              { href: "#faq", label: "FAQ" },
              { href: "#cta", label: "Забронировать" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] tracking-[2.5px] uppercase text-sand/50 no-underline hover:text-gold transition-colors duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-8 lg:px-16">
          <div className="flex-1 flex flex-col justify-center max-w-[660px]">
            <p className="animate-fade-up flex items-center gap-4 text-[10px] tracking-[4px] uppercase text-gold mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="block w-8 h-px bg-gold" />
              Канарские острова · Сентябрь 2026
            </p>
            <h1 className="animate-fade-up font-display font-light text-[clamp(44px,5.5vw,76px)] leading-[1.05] text-sand-light tracking-[-1px]" style={{ animationDelay: "0.25s" }}>
              Неделя, которая<br />
              <em className="italic text-gold-light">меняет ритм.</em>
            </h1>
            <p className="animate-fade-up mt-7 text-[15px] font-light text-text-muted-custom leading-[1.75] max-w-[480px] tracking-[0.3px]" style={{ animationDelay: "0.4s" }}>
              Теннис на берегу океана, вулканы, яхты и закаты — в компании 12 единомышленников. 
              Не спортивный лагерь. Европейский lifestyle-опыт на Тенерифе.
            </p>

            {/* Bullets */}
            <ul className="animate-fade-up mt-8 flex flex-col gap-3" style={{ animationDelay: "0.48s" }}>
              {[
                "7 дней на Тенерифе, Испания",
                "12 тренировок с русскоязычным тренером",
                "Яхта, вулкан, сёрфинг, банкет в замке",
                "Визовая поддержка и полная организация",
              ].map((b) => (
                <li key={b} className="text-[13px] text-text-muted-custom/80 flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ animationDelay: "0.55s" }}>
              <a href="#cta" className="inline-block py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-300">
                Хочу поехать
              </a>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] text-text-muted-custom/70 tracking-[1px]">Осталось 12 мест</span>
              </div>
            </div>
          </div>

          {/* Right — photo grid */}
          <div className="animate-fade-up flex-1 max-w-[480px] w-full" style={{ animationDelay: "0.5s" }}>
            <div className="grid grid-cols-2 gap-[3px]">
              <div className="col-span-2 aspect-[16/9] bg-forest-light border border-gold/15 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="text-center relative z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40 mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <p className="text-[10px] tracking-[2px] uppercase text-gold/50">{heroPhotos[0].label}</p>
                </div>
              </div>
              {heroPhotos.slice(1).map((p) => (
                <div key={p.label} className="aspect-[4/3] bg-forest-light border border-gold/15 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                  <div className="text-center relative z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40 mx-auto mb-1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    <p className="text-[9px] tracking-[2px] uppercase text-gold/50">{p.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero footer stats */}
        <div className="animate-fade-up relative z-10 py-9 px-8 lg:px-16 flex gap-12 lg:gap-16 flex-wrap items-center border-t border-gold/10" style={{ animationDelay: "0.7s" }}>
          {[
            { num: "7", label: "Дней" },
            { num: "12", label: "Тренировок" },
            { num: "12", label: "Участников" },
            { num: "1", label: "Тренер RU" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-[36px] font-light text-gold leading-none">{s.num}</span>
              <span className="text-[9px] tracking-[2.5px] uppercase text-text-muted-custom">{s.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-11 h-11 rounded-full bg-forest-light border border-gold/25 flex items-center justify-center overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-sand-light font-light">[Имя тренера]</p>
              <p className="text-[9px] tracking-[2px] uppercase text-text-muted-custom">Тренер · Tenerife Tennis Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR WHOM ─── */}
      <section className="bg-cream py-[120px] px-8 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Для кого
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[620px] mb-6">
          Если вы узнаёте себя —<br /><em className="italic text-gold">вам сюда.</em>
        </h2>
        <p className="text-[14px] text-text-body leading-[1.7] font-light max-w-[540px] mb-[60px]">
          Это не про профессиональный спорт. Это про людей, которые ценят опыт, новые впечатления и качественный отдых.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { icon: "🎾", title: "Теннисист-любитель", text: "Играете раз в неделю или раз в год. Хотите прокачать уровень в идеальных условиях — тёплый климат, профессиональный тренер, без спешки." },
            { icon: "✈️", title: "Путешественник", text: "Устали от пляжных all-inclusive. Ищете опыт, а не просто отпуск. Хотите увидеть Тенерифе не из окна автобуса." },
            { icon: "👥", title: "Нетворкер", text: "Хотите провести неделю в компании 12 интересных людей. Не случайные попутчики — единомышленники." },
            { icon: "🔄", title: "Перезагрузка", text: "Нужен разрыв шаблона. Новый ритм, новые люди, новая среда. Океан вместо офиса. Корт вместо зума." },
          ].map((c) => (
            <div key={c.title} className="reveal bg-card p-10 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <span className="text-[32px] mb-5 block">{c.icon}</span>
              <h3 className="font-display text-[20px] font-normal text-forest mb-3 leading-[1.2]">{c.title}</h3>
              <p className="text-[13px] leading-[1.75] text-text-body font-light">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRAINER ─── */}
      <div id="trainer">
        <TrainerSection />
      </div>

      {/* ─── WHY IT WORKS ─── */}
      <section className="bg-sand-light py-[120px] px-8 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Почему это работает
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Не отпуск и не лагерь.<br /><em className="italic text-gold">Другой формат.</em>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">
          {[
            { num: "01", title: "Теннис каждый вечер", text: "2 часа на корте с русскоязычным тренером Tenerife Tennis Academy. До 12 человек — каждый получает внимание. Подача, тактика, игровая практика. С любого уровня." },
            { num: "02", title: "Остров каждое утро", text: "Яхта, вулкан Тейде 3 718 м, ущелье Маска, два океанских пляжа, сёрфинг. Каждый день — новое место. Семь дней без повторений." },
            { num: "03", title: "Всё организовано", text: "Виза, жильё, корты, трансферы — закрыто за вас. Ваша задача: прилететь. Мы берём на себя остальное, от визового приглашения до банкета в финале." },
          ].map((c) => (
            <div key={c.num} className="reveal bg-forest p-[52px_44px] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <div className="font-display text-[64px] font-light text-gold/10 leading-none mb-8">{c.num}</div>
              <h3 className="font-display text-[24px] font-normal text-sand-light mb-4 leading-[1.2]">{c.title}</h3>
              <p className="text-[13px] leading-[1.75] text-text-muted-custom font-light">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <Advantages />

      {/* ─── LOCATION ─── */}
      <section className="bg-forest py-[120px] px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute right-[-150px] bottom-[-150px] w-[500px] h-[500px] rounded-full border border-gold/5" />
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5 relative z-10">
          <span className="block w-6 h-px bg-gold" />
          Локация
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.15] max-w-[560px] mb-6 relative z-10">
          Тенерифе.<br /><em className="italic text-gold">Вечная весна.</em>
        </h2>
        <p className="text-[14px] text-text-muted-custom leading-[1.75] font-light max-w-[540px] mb-[60px] relative z-10">
          Канарские острова, Испания. +25°C в сентябре. Вулкан Тейде — третий по высоте в мире на острове. Чёрные и белые пляжи. 
          Европейский сервис без европейских цен.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] relative z-10">
          {[
            { icon: <MapPin size={20} />, label: "Канарские острова", sub: "Испания, ЕС" },
            { icon: <Mountain size={20} />, label: "+25°C в сентябре", sub: "300 солнечных дней" },
            { icon: <Waves size={20} />, label: "Атлантический океан", sub: "Пляжи в 15 мин" },
            { icon: <Plane size={20} />, label: "4.5 часа из Москвы", sub: "Прямые рейсы" },
          ].map((item) => (
            <div key={item.label} className="reveal p-8 border border-gold/10">
              <div className="text-gold mb-4">{item.icon}</div>
              <p className="font-display text-[16px] text-sand-light mb-1">{item.label}</p>
              <p className="text-[11px] text-text-muted-custom/60 tracking-[1px]">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Location photo placeholders */}
        <div className="grid grid-cols-3 gap-[3px] mt-[60px] relative z-10">
          {["Вулкан Тейде", "Океанский пляж", "Tenerife Tennis Academy"].map((label) => (
            <div key={label} className="aspect-[16/9] bg-forest-light border border-gold/10 flex items-center justify-center">
              <p className="text-[10px] tracking-[2px] uppercase text-gold/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── PROGRAMME ─── */}
      <section className="bg-sand-light py-[120px] px-8 lg:px-16" id="programme">
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
            <div key={d.date} className={`reveal p-8 flex flex-col gap-5 transition-colors duration-300 group ${d.finale ? "bg-forest" : "bg-card hover:bg-forest"}`}>
              <span className={`font-display text-[42px] font-light leading-none transition-colors duration-300 ${d.finale ? "text-gold" : "text-forest group-hover:text-gold"}`}>{d.date}</span>
              <span className={`text-[9px] tracking-[2px] uppercase -mt-3 transition-colors duration-300 ${d.finale ? "text-text-muted-custom" : "text-text-muted-custom group-hover:text-text-muted-custom/70"}`}>{d.weekday}</span>
              <div className={`h-px transition-colors duration-300 ${d.finale ? "bg-gold/15" : "bg-forest/10 group-hover:bg-gold/20"}`} />
              <div>
                <p className={`text-[8px] tracking-[2px] uppercase transition-colors duration-300 ${d.finale ? "text-gold/50" : "text-gold/60 group-hover:text-gold/50"}`}>{d.label || "День"}</p>
                <p className={`text-[13px] leading-[1.5] mt-1 font-light transition-colors duration-300 ${d.finale ? "text-sand-light" : "text-text-body group-hover:text-sand-light"}`}>{d.theme}</p>
              </div>
              <div>
                <p className={`text-[8px] tracking-[2px] uppercase transition-colors duration-300 ${d.finale ? "text-gold/50" : "text-gold/60 group-hover:text-text-muted-custom/60"}`}>Вечер</p>
                <p className={`text-[12px] mt-1 font-normal transition-colors duration-300 ${d.finale ? "text-gold-light" : "text-gold group-hover:text-gold-light"}`}>{d.tennis}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORMAT ─── */}
      <section className="bg-forest py-[120px] px-8 lg:px-16" id="format">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Формат кемпа
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.15] max-w-[480px] mb-[72px]">
          Малая группа.<br /><em className="italic text-gold">Максимум внимания.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { big: "12", label: "Участников максимум.\nКамерный формат." },
            { big: "12", label: "Тренировок по 2 часа.\n84 часа опыта." },
            { big: "3", label: "Корта в академии\nTenerife Tennis Academy." },
            { big: "7", label: "Дней. Один итоговый\nтурнир в финале." },
          ].map((f) => (
            <div key={f.big + f.label} className="reveal p-12 border border-gold/10">
              <div className="font-display text-[72px] font-light text-gold leading-none">{f.big}</div>
              <p className="text-[11px] tracking-[1px] text-text-muted-custom/70 mt-3 leading-[1.5] font-light whitespace-pre-line">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-[72px]">
          <div>
            <h3 className="font-display text-[20px] font-normal text-sand mb-6 pb-4 border-b border-gold/15">Включено в стоимость</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Виза — приглашение от Tenerife Tennis Academy",
                "Аренда кортов и ракеток",
                "Русскоязычный тренер, все 12 тренировок",
                "Трансферы по острову по программе",
                "Все активности по расписанию",
                "Итоговый турнир и банкет в Сан-Мигель",
              ].map((item) => (
                <li key={item} className="text-[13px] text-text-muted-custom leading-[1.5] flex gap-3.5 items-start">
                  <span className="text-gold font-display flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-[20px] font-normal text-sand mb-6 pb-4 border-b border-gold/15">Зависит от пакета</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Жильё (Standard и Premium)",
                "Питание (Standard — завтраки, Premium — полный пансион)",
                "Перелёт (помогаем с выбором рейсов)",
                "Персональные тренировки (Premium)",
              ].map((item) => (
                <li key={item} className="text-[13px] text-text-muted-custom leading-[1.5] flex gap-3.5 items-start">
                  <span className="text-gold font-display flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="bg-cream py-[120px] px-8 lg:px-16" id="pricing">
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
              className={`reveal p-12 flex flex-col relative overflow-hidden ${
                tier.highlight
                  ? "bg-forest"
                  : "bg-card"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
              )}

              {/* Badge */}
              {tier.highlight && (
                <span className="inline-block self-start text-[9px] tracking-[3px] uppercase bg-gold text-forest px-3 py-1 mb-6 font-medium">
                  Популярный
                </span>
              )}

              <p className={`text-[9px] tracking-[3px] uppercase mb-2 ${
                tier.highlight ? "text-gold/60" : "text-text-muted-custom"
              }`}>
                {tier.name}
              </p>
              <h3 className={`font-display text-[22px] font-normal mb-6 leading-[1.2] ${
                tier.highlight ? "text-sand-light" : "text-forest"
              }`}>
                {tier.subtitle}
              </h3>

              <div className={`font-display text-[48px] font-light leading-none ${
                tier.highlight ? "text-gold" : "text-forest"
              }`}>
                {tier.price}
              </div>
              <p className={`text-[11px] tracking-[1px] mt-2 mb-8 ${
                tier.highlight ? "text-text-muted-custom/60" : "text-text-muted-custom"
              }`}>
                на человека · {tier.priceEur}
              </p>

              <div className={`h-px my-6 ${tier.highlight ? "bg-gold/15" : "bg-forest/10"}`} />

              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`text-[13px] flex gap-3 items-start ${
                    tier.highlight ? "text-text-muted-custom" : "text-text-body"
                  }`}>
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {tier.notIncluded.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gold/10">
                  <p className={`text-[9px] tracking-[2px] uppercase mb-2 ${
                    tier.highlight ? "text-text-muted-custom/40" : "text-text-muted-custom/60"
                  }`}>Не включено</p>
                  {tier.notIncluded.map((ni) => (
                    <p key={ni} className={`text-[12px] ${
                      tier.highlight ? "text-text-muted-custom/50" : "text-text-muted-custom"
                    }`}>— {ni}</p>
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
        <div className="max-w-[1100px] mt-[2px] bg-card p-10 reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-display text-[20px] text-forest mb-1">Депозит — 30% от стоимости</p>
              <p className="text-[13px] text-text-body font-light">Остаток — до вылета или по договорённости. Возможна оплата в рублях или евро.</p>
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
      <section className="bg-sand-light py-[120px] px-8 lg:px-16" id="faq">
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
                <span className="font-display text-[20px] font-normal text-forest leading-[1.3]">{faq.q}</span>
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

      {/* ─── CTA ─── */}
      <section className="bg-forest py-[120px] px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden" id="cta">
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] rounded-full border border-gold/5" />
        <div className="absolute right-[-60px] top-[-60px] w-[360px] h-[360px] rounded-full border border-gold/5" />

        <div className="relative z-10">
          <h2 className="font-display font-light text-[clamp(36px,4vw,56px)] text-sand-light leading-[1.1] mb-5">
            Осталось<br /><em className="italic text-gold">12 мест.</em>
          </h2>
          <p className="text-[15px] text-text-muted-custom leading-[1.7] max-w-[400px] mt-6">
            14–20 сентября 2026. Визу нужно начать оформлять за 6 недель. Чем раньше решитесь — тем спокойнее.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {[
              "Ответим на любые вопросы за 2 часа",
              "Поможем с визой и билетами",
              "Зафиксируем место без полной оплаты",
            ].map((b) => (
              <p key={b} className="text-[13px] text-text-muted-custom/80 flex items-center gap-3">
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
                <label className="text-[9px] tracking-[2px] uppercase text-text-muted-custom/60">Имя</label>
                <input className="bg-card/5 border border-gold/15 py-3.5 px-5 text-sand-light font-body text-[13px] font-light outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted-custom/40" type="text" placeholder="Ваше имя" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[2px] uppercase text-text-muted-custom/60">Телефон / Telegram</label>
                <input className="bg-card/5 border border-gold/15 py-3.5 px-5 text-sand-light font-body text-[13px] font-light outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted-custom/40" type="text" placeholder="+7 ···" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-[2px] uppercase text-text-muted-custom/60">Уровень тенниса</label>
              <div className="grid grid-cols-3 gap-[2px]">
                {["Новичок", "Любитель", "Уверенный"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setTennisLevel(level)}
                    className={`py-3 border font-body text-[12px] font-light cursor-pointer transition-colors duration-300 ${
                      tennisLevel === level
                        ? "bg-gold/15 border-gold text-gold"
                        : "bg-card/5 border-gold/15 text-text-muted-custom hover:border-gold/50 hover:text-sand-light"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-[2px] uppercase text-text-muted-custom/60">Интересующий пакет</label>
              <div className="grid grid-cols-3 gap-[2px]">
                {["Base", "Standard", "Premium"].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    className="py-3 border bg-card/5 border-gold/15 text-text-muted-custom font-body text-[12px] font-light cursor-pointer hover:border-gold/50 hover:text-sand-light transition-colors duration-300"
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
              {submitted ? "Заявка отправлена ✓" : "Забронировать место"}
            </button>
            <p className="text-center text-[10px] text-text-muted-custom/50 font-light -mt-1">
              Без обязательств — просто свяжемся и ответим на вопросы
            </p>
            <p className="text-center text-[10px] text-text-muted-custom/40 tracking-[2px] uppercase my-1">или</p>
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
      <footer className="bg-[hsl(137,22%,8%)] py-10 px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">
        <span className="font-display text-[16px] italic text-gold tracking-[3px]">Tennis · Tenerife · 2026</span>
        <span className="text-[10px] tracking-[1px] text-text-muted-custom/40">14 — 20 сентября 2026 · Tenerife Tennis Academy</span>
        <div className="flex items-center gap-5">
          <a href="https://t.me/username" className="text-text-muted-custom/40 hover:text-gold transition-colors duration-300" aria-label="Telegram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
          </a>
          <a href="https://instagram.com/username" className="text-text-muted-custom/40 hover:text-gold transition-colors duration-300" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
