import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Advantages from "@/components/Advantages";
import TrainerSection from "@/components/TrainerSection";
import Testimonials from "@/components/Testimonials";

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
    { date: "15", weekday: "Вт", label: "День · Горы", theme: "Ущелье Маска. Запад острова.", tennis: "Теннис 16–18" },
    { date: "16", weekday: "Ср", label: "День · Море", theme: "Яхта. Пляж Айдохо.", tennis: "Теннис 16–18" },
    { date: "17", weekday: "Чт", label: "День · Море", theme: "Два пляжа.", tennis: "Теннис 16–18" },
    { date: "18", weekday: "Пт", label: "День · Горы", theme: "Вулкан Тейде.", tennis: "Теннис 16–18" },
    { date: "19", weekday: "Сб", label: "День · Море", theme: "Сёрфинг. Купание.", tennis: "Теннис 16–18" },
    { date: "20", weekday: "Вс", label: "Финал", theme: "Замок Сан-Мигель. Банкет.", tennis: "Теннис + турнир", finale: true },
  ];

  const faqs = [
    { q: "Нужна ли виза и как её получить?", a: "Тенерифе — это Испания, шенгенская виза. Tenerife Tennis Academy оформляет спортивное приглашение для каждого участника бесплатно. По опыту — срабатывает почти всегда. Срок рассмотрения 2–4 недели, поэтому бронировать место нужно минимум за 6 недель до вылета." },
    { q: "Какой уровень тенниса нужен?", a: "Кемп подходит для новичков и любителей. Держать ракетку умеете — достаточно. Тренировки строятся индивидуально внутри группы: одни работают над подачей, другие над тактикой. Профессиональный уровень не нужен и не ожидается." },
    { q: "Можно ли поехать одному?", a: "Да. Большинство участников едут именно так. Формат малой группы помогает познакомиться быстро — общие тренировки, совместные активности, вечера. К третьему дню группа становится командой." },
    { q: "Что взять с собой?", a: "Теннисные кроссовки (обязательно), удобную форму для корта, купальник, лёгкую куртку для Тейде — там прохладно даже в сентябре. Ракетки есть в академии, но если привезёте свою — лучше. Мячи включены." },
    { q: "Как забронировать место?", a: "Напишите нам в Telegram или заполните форму ниже. Мы свяжемся, ответим на все вопросы и зафиксируем место. Группа — 12 человек, места заканчиваются." },
    { q: "Это первый кемп или вы уже проводили раньше?", a: "Да, это первый сезон Tennis · Tenerife. Но за организацией стоят люди с опытом в спортивных мероприятиях и путешествиях. Тренировки проводит лицензированная Tenerife Tennis Academy. Мы работаем прозрачно: договор, чёткий список услуг, гарантия возврата депозита." },
    { q: "Что если я передумаю — можно вернуть деньги?", a: "Да. Депозит возвращается полностью, если кемп не состоится. При отмене по вашей инициативе — возврат зависит от сроков: более чем за 30 дней до начала — 100%, за 14–30 дней — 50%. Детали обсуждаем индивидуально." },
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
        {/* Background decorations */}
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
              { href: "#advantages", label: "Преимущества" },
              { href: "#programme", label: "Программа" },
              { href: "#format", label: "Формат" },
              { href: "#price", label: "Стоимость" },
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
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center max-w-[660px]">
            <p className="animate-fade-up flex items-center gap-4 text-[10px] tracking-[4px] uppercase text-gold mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="block w-8 h-px bg-gold" />
              Тенерифе · Сентябрь 2026
            </p>
            <h1 className="animate-fade-up font-display font-light text-[clamp(48px,6vw,82px)] leading-[1.0] text-sand-light tracking-[-1px]" style={{ animationDelay: "0.25s" }}>
              Теннис.<br /><em className="italic text-gold-light block">Тенерифе.</em><br />Сентябрь.
            </h1>
            <p className="animate-fade-up mt-7 text-[15px] font-light text-text-muted-custom leading-[1.7] max-w-[440px] tracking-[0.3px]" style={{ animationDelay: "0.4s" }}>
              7 дней, 12 тренировок по 2 часа, 12 человек. Европа без лишнего. Каждое утро — океан или вулкан. Каждый вечер — корт.
            </p>
            <div className="animate-fade-up mt-[48px] flex items-center gap-10" style={{ animationDelay: "0.55s" }}>
              <a href="#cta" className="inline-block py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-300">
                Забронировать место
              </a>
              <span className="text-[11px] text-text-muted-custom/70 tracking-[1px]">Осталось 12 мест</span>
            </div>
          </div>

          {/* Right — photo grid */}
          <div className="animate-fade-up flex-1 max-w-[480px] w-full" style={{ animationDelay: "0.5s" }}>
            <div className="grid grid-cols-2 gap-[3px]">
              {/* Large photo */}
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
              {/* Two smaller photos */}
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
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-[36px] font-light text-gold leading-none">{s.num}</span>
              <span className="text-[9px] tracking-[2.5px] uppercase text-text-muted-custom">{s.label}</span>
            </div>
          ))}
          {/* Trainer avatar */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-11 h-11 rounded-full bg-forest-light border border-gold/25 flex items-center justify-center overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-sand-light font-light">[Имя тренера]</p>
              <p className="text-[9px] tracking-[2px] uppercase text-text-muted-custom">Тренер · RU</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRAINER ─── */}
      <div id="trainer">
        <TrainerSection />
      </div>

      {/* ─── WHY ─── */}
      <section className="bg-sand-light py-[120px] px-8 lg:px-16">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Почему это работает
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Не просто поездка.<br /><em className="italic text-gold">Смена режима.</em>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">
          {[
            { num: "01", title: "Теннис каждый день", text: "Тренировки с русскоязычным тренером Tenerife Tennis Academy. Два часа вечером в малой группе до 12 человек — каждый получает внимание. Подача, техника, игровая практика. С нуля или с уровнем — не важно." },
            { num: "02", title: "Остров целиком", text: "Яхта, вулкан Тейде, ущелье Маска, сёрфинг, банкет в замке — каждый день другая Канария. Утро для приключений, вечер для корта. Семь дней без повторений." },
            { num: "03", title: "Всё под ключ", text: "Виза с приглашением от академии, жильё, корты, трансферы по острову — организовано за тебя. Ты берёшь ракетку. Остальное — наша работа." },
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

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── PROGRAMME ─── */}
      <section className="bg-sand-light py-[120px] px-8 lg:px-16" id="programme">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          14 — 20 сентября 2026
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Программа<br /><em className="italic text-gold">по дням</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[2px]">
          {days.map((d) => (
            <div key={d.date} className={`reveal p-8 flex flex-col gap-5 transition-colors duration-300 group ${d.finale ? "bg-forest" : "bg-card hover:bg-forest"}`}>
              <span className={`font-display text-[42px] font-light leading-none transition-colors duration-300 ${d.finale ? "text-gold" : "text-forest group-hover:text-gold"}`}>{d.date}</span>
              <span className={`text-[9px] tracking-[2px] uppercase -mt-3 transition-colors duration-300 ${d.finale ? "text-text-muted-custom" : "text-text-muted-custom group-hover:text-text-muted-custom/70"}`}>{d.weekday}</span>
              <div className={`h-px transition-colors duration-300 ${d.finale ? "bg-gold/15" : "bg-forest/10 group-hover:bg-gold/20"}`} />
              <div>
                <p className={`text-[8px] tracking-[2px] uppercase transition-colors duration-300 ${d.finale ? "text-text-muted-custom" : "text-text-muted-custom group-hover:text-text-muted-custom"}`}>{d.label || "День"}</p>
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
            { big: "12", label: "Тренировок по 2 часа\nза 7 дней кемпа." },
            { big: "3", label: "Корта в академии\nTenerife Tennis Academy." },
            { big: "7", label: "Дней. Один итоговый\nтурнир в последний день." },
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
                "Жильё на 7 ночей",
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
            <h3 className="font-display text-[20px] font-normal text-sand mb-6 pb-4 border-b border-gold/15">Не включено</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Перелёт (помогаем с выбором рейсов)",
                "Личные расходы, сувениры",
                "Питание вне программы",
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

      {/* ─── PRICE ─── */}
      <section className="bg-cream py-[120px] px-8 lg:px-16" id="price">
        <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
          <span className="block w-6 h-px bg-gold" />
          Стоимость
        </p>
        <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
          Прозрачная цена.<br /><em className="italic text-gold">Без сюрпризов.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[860px]">
          <div className="reveal bg-card p-14">
            <p className="text-[9px] tracking-[3px] uppercase text-text-muted-custom mb-8">Наши услуги</p>
            <div className="font-display text-[56px] font-light text-forest leading-none">
              <span className="text-[20px] align-super text-gold mr-1 font-display">от</span>60 000 ₽
            </div>
            <p className="text-[11px] tracking-[1px] text-text-muted-custom mt-2">на человека · 600 €</p>
            <div className="h-px bg-forest/10 my-7" />
            <ul className="flex flex-col gap-3">
              {[
                "Жильё на 7 ночей рядом с академией",
                "12 тренировок × 2ч в Tenerife Tennis Academy",
                "Все активности по программе",
                "Трансферы по острову",
                "Итоговый турнир и банкет в замке Сан-Мигель",
              ].map((f) => (
                <li key={f} className="text-[13px] text-text-body flex gap-3 items-start">
                  <span className="text-gold text-[12px] flex-shrink-0 mt-px">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal bg-forest p-14">
            <p className="text-[9px] tracking-[3px] uppercase text-text-muted-custom/60 mb-8">Депозит при бронировании</p>
            <div className="font-display text-[56px] font-light text-gold leading-none">
              <span className="text-[20px] align-super text-gold mr-1 font-display">от</span>18 000 ₽
            </div>
            <p className="text-[11px] tracking-[1px] text-text-muted-custom mt-2">30% от стоимости · место гарантировано</p>
            <div className="h-px bg-gold/15 my-7" />
            <ul className="flex flex-col gap-3">
              {[
                "Остаток — до вылета или по договорённости",
                "Жильё и перелёт — отдельно, помогаем подобрать",
                "Визовое приглашение от академии — бесплатно",
                "Депозит возвращается полностью, если кемп не состоится",
              ].map((f) => (
                <li key={f} className="text-[13px] text-text-muted-custom flex gap-3 items-start">
                  <span className="text-gold text-[12px] flex-shrink-0 mt-px">✓</span>
                  {f}
                </li>
              ))}
            </ul>
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
            Осталось<br /><em className="italic text-gold">12 мест.</em><br />Сентябрь 2026.
          </h2>
          <p className="text-[13px] text-text-muted-custom leading-[1.7] max-w-[400px] mt-6">
            Виза оформляется за 2–4 недели. Чем раньше — тем спокойнее. Напишите нам или оставьте контакт — мы всё расскажем.
          </p>
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
