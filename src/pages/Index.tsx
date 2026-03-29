import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Check, ArrowRight, MapPin, Sun } from "lucide-react";
import heroImg from "@/assets/hero-tenerife.jpg";

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  const faqs = [
    { q: "Нужна ли виза?", a: "Да, шенгенская. Наш оператор оформляет приглашение, документы и подачу. Стоимость от 16 000 ₽ входит в турпакет. Срок — 2–4 недели." },
    { q: "Какой уровень нужен?", a: "Любой. Новичок — научим основам. Любитель — прокачаем технику и тактику. Можно выбрать теннис или падел." },
    { q: "Можно поехать одному?", a: "Да. 80% участников едут одни. К третьему дню группа становится командой." },
    { q: "Что входит в 850 €?", a: "6 тренировок, яхта, Тейде, Маска, сёрфинг, турнир, банкет, трансферы, организация. Перелёт и отель — отдельно через турпакет." },
    { q: "Можно вернуть деньги?", a: "Кемп не состоялся — 100% возврат. Отмена за 30+ дней — 100%. За 14–30 дней — 50%." },
    { q: "Что взять с собой?", a: "Спортивную обувь, купальник, лёгкую куртку для Тейде. Ракетки есть в академии." },
  ];

  return (
    <div ref={containerRef}>
      {/* ─── HERO ─── */}
      <section className="min-h-screen relative flex flex-col overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Теннисный корт на Тенерифе" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/30" />
        </div>

        <nav className="relative z-10 py-8 px-6 lg:px-16 flex justify-between items-center">
          <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">Tennis · Padel · Tenerife</span>
          <ul className="hidden md:flex gap-10 list-none">
            {[
              { href: "#formats", label: "Форматы" },
              { href: "#trainer", label: "Тренер" },
              { href: "#pricing", label: "Цены" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] tracking-[2.5px] uppercase text-sand/50 no-underline hover:text-gold transition-colors duration-300">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="hidden md:inline-block py-3 px-7 border border-gold/40 text-gold font-body text-[10px] font-medium tracking-[2.5px] uppercase no-underline hover:bg-gold/10 transition-colors duration-300">
            Записаться
          </a>
          <MobileMenu />
        </nav>

        <div className="relative z-10 flex-1 flex items-center px-6 lg:px-16 pb-16">
          <div className="max-w-[700px]">
            <h1 className="animate-fade-up font-display font-light text-[clamp(36px,5vw,64px)] leading-[1.08] text-sand-light tracking-[-0.5px]">
              Теннис и падел на Тенерифе<br />
              <em className="italic text-gold">с личным тренером</em>
            </h1>

            <p className="animate-fade-up mt-5 text-[clamp(16px,2vw,20px)] text-sand/65 leading-[1.6] max-w-[540px]" style={{ animationDelay: "0.15s" }}>
              Для начинающих и продвинутых. Прокачайте игру за 7 дней на профессиональных кортах у океана.
            </p>

            <div className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.3s" }}>
              {["6 тренировок по 1,5 часа", "Группа до 12 человек", "14–20 сентября 2026"].map((b) => (
                <span key={b} className="text-[13px] text-sand/50 flex items-center gap-2.5">
                  <Check size={14} className="text-gold flex-shrink-0" />
                  {b}
                </span>
              ))}
            </div>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <a href="#cta" className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
                Записаться <ArrowRight size={14} />
              </a>
              <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 py-4 px-8 border border-gold/30 text-gold font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-gold/10 transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Что вы получите
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { num: "6", title: "Тренировок", desc: "По 1,5 часа каждый вечер. Теннис или падел — на выбор. Тренер работает с каждым." },
            { num: "7", title: "Дней на острове", desc: "Яхта, вулкан Тейде, ущелье Маска, сёрфинг, чёрные пляжи, банкет в замке." },
            { num: "12", title: "Участников max", desc: "Малая группа. Индивидуальный подход к каждому. Не конвейер." },
            { num: "1", title: "Результат", desc: "За неделю — рост техники, новые связи, перезагрузка. Конкретный прогресс." },
          ].map((c) => (
            <div key={c.title} className="reveal bg-card p-8 lg:p-10">
              <span className="font-display text-[48px] font-light text-gold leading-none block mb-3">{c.num}</span>
              <h3 className="font-display text-[20px] text-forest mb-2">{c.title}</h3>
              <p className="text-[15px] leading-[1.65] text-text-body font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRAINING FORMATS ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16" id="formats">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-12">
          Форматы занятий
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            { title: "Теннис", desc: "Классика. Удары, подачи, тактика. Для тех, кто хочет играть лучше или начать с нуля.", items: ["Техника ударов", "Подача и приём", "Тактика одиночной и парной игры"] },
            { title: "Падел", desc: "Популярный ракеточный спорт. Проще входить, но не менее азартный. Кортов полно.", items: ["Основы для новичков", "Стратегия у стенки", "Парная игра"] },
            { title: "Турнир", desc: "Финальный день — дружеский турнир среди участников. Призы, эмоции, банкет.", items: ["Одиночный и парный формат", "Судейство тренером", "Награждение на банкете"] },
          ].map((f) => (
            <div key={f.title} className="reveal p-8 lg:p-10 border border-gold/10">
              <h3 className="font-display text-[22px] text-sand-light mb-3">{f.title}</h3>
              <p className="text-[15px] leading-[1.65] text-sand/55 font-light mb-6">{f.desc}</p>
              <ul className="flex flex-col gap-2">
                {f.items.map((item) => (
                  <li key={item} className="text-[14px] text-sand/45 flex items-start gap-3">
                    <span className="text-gold mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
          <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
            Записаться <ArrowRight size={14} />
          </a>
          <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">
            или написать в Telegram →
          </a>
        </div>
      </section>

      {/* ─── HOW IT WORKS (daily) ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-4">
          Как проходит неделя
        </h2>
        <p className="reveal text-[15px] text-text-body leading-[1.6] font-light max-w-[480px] mb-12">
          Каждый день — новое приключение утром и тренировка вечером.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[2px]">
          {[
            { d: "14", wd: "Пн", am: "Прилёт, пляж", pm: "Теннис / падел" },
            { d: "15", wd: "Вт", am: "Ущелье Маска", pm: "Теннис / падел" },
            { d: "16", wd: "Ср", am: "Яхта на закате", pm: "Теннис / падел" },
            { d: "17", wd: "Чт", am: "Свободный день", pm: "Теннис / падел" },
            { d: "18", wd: "Пт", am: "Вулкан Тейде", pm: "Теннис / падел" },
            { d: "19", wd: "Сб", am: "Сёрфинг", pm: "Теннис / падел" },
            { d: "20", wd: "Вс", am: "Замок Сан-Мигель", pm: "Турнир + банкет", last: true },
          ].map((day) => (
            <div key={day.d} className={`reveal p-5 lg:p-7 flex flex-col gap-3 ${day.last ? "bg-forest" : "bg-card"}`}>
              <span className={`font-display text-[36px] font-light leading-none ${day.last ? "text-gold" : "text-forest"}`}>{day.d}</span>
              <span className={`text-[9px] tracking-[2px] uppercase ${day.last ? "text-sand/40" : "text-text-muted-custom"}`}>{day.wd}</span>
              <div className={`h-px ${day.last ? "bg-gold/15" : "bg-forest/10"}`} />
              <p className={`text-[13px] leading-[1.4] font-light ${day.last ? "text-sand-light" : "text-text-body"}`}>{day.am}</p>
              <p className={`text-[12px] font-normal ${day.last ? "text-gold" : "text-gold"}`}>{day.pm}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOR WHOM ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Для кого
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            { level: "Новичок", desc: "Никогда не играли? Тренер научит основам за 3–4 занятия. К концу недели будете уверенно держать ракетку и вести розыгрыш." },
            { level: "Любитель", desc: "Играете иногда? Прокачаем технику, поставим подачу, разберём тактику. Корт каждый день — прогресс гарантирован." },
            { level: "Продвинутый", desc: "Играете регулярно? Спарринги, игровые ситуации, работа над слабыми местами. Турнир в финале — проверите себя." },
          ].map((a) => (
            <div key={a.level} className="reveal bg-card p-8 lg:p-10">
              <h3 className="font-display text-[22px] text-forest mb-3">{a.level}</h3>
              <p className="text-[15px] leading-[1.65] text-text-body font-light">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 reveal">
          <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-all duration-300">
            Записаться <ArrowRight size={14} />
          </a>
          <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-text-muted-custom hover:text-gold transition-colors no-underline">
            или написать в Telegram →
          </a>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="pricing">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Стоимость
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[900px]">
          {/* Sport */}
          <div className="reveal bg-forest p-8 lg:p-12 flex flex-col">
            <p className="text-[10px] tracking-[3px] uppercase text-gold/60 mb-4">Спортивный пакет</p>
            <div className="font-display text-[52px] font-light text-gold leading-none mb-2">€850</div>
            <p className="text-[13px] text-sand/40 mb-8">на человека</p>
            <ul className="flex flex-col gap-3 flex-1">
              {["6 тренировок теннис/падел", "Яхта, Тейде, Маска, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову", "Организация"].map((f) => (
                <li key={f} className="text-[14px] text-sand/55 flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 py-4 text-center font-body text-[11px] font-medium tracking-[3px] uppercase no-underline bg-gold text-forest hover:bg-gold-light transition-all duration-300 block">
              Записаться
            </a>
          </div>

          {/* Tour */}
          <div className="reveal bg-card p-8 lg:p-12 flex flex-col">
            <p className="text-[10px] tracking-[3px] uppercase text-text-muted-custom mb-4">Турпакет · через оператора</p>
            <div className="font-display text-[44px] font-light text-forest leading-none mb-2">от 116 000 ₽</div>
            <p className="text-[13px] text-text-muted-custom mb-8">перелёт + отель + виза + страховка</p>
            <ul className="flex flex-col gap-3 flex-1">
              {["Перелёт от 60 000 ₽", "Проживание от 40 000 ₽", "Виза от 16 000 ₽", "Страховка"].map((f) => (
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

        <div className="max-w-[900px] mt-[2px] bg-card p-6 lg:p-8 reveal flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-display text-[18px] text-forest">Депозит — 255 € (30%)</p>
            <p className="text-[14px] text-text-body font-light">Полный возврат, если кемп не состоится.</p>
          </div>
          <a href="#cta" className="text-[12px] text-gold tracking-[2px] uppercase no-underline hover:underline">Забронировать →</a>
        </div>
      </section>

      {/* ─── TRAINER ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="trainer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1000px]">
          <div className="aspect-[3/4] bg-forest/10 border border-gold/20 flex items-center justify-center">
            <p className="text-[10px] tracking-[2px] uppercase text-text-muted-custom">Фото тренера</p>
          </div>
          <div>
            <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-6">
              Тренер
            </h2>
            <h3 className="font-display text-[22px] text-forest mb-1">[Имя Фамилия]</h3>
            <p className="text-[12px] tracking-[2px] uppercase text-gold mb-6">Tenerife Tennis Academy</p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Лицензированный тренер академии",
                "10+ лет опыта",
                "Работает с любым уровнем",
                "Русскоязычный, живёт на Тенерифе",
              ].map((f) => (
                <p key={f} className="text-[15px] text-text-body leading-[1.6] font-light flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-1" />{f}
                </p>
              ))}
            </div>
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-8 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-colors duration-300">
              Написать тренеру
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
          Почему мы
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { title: "Личный тренер", desc: "Не групповая разминка. Тренер видит каждого и корректирует технику индивидуально." },
            { title: "Малая группа", desc: "До 12 человек. Все знакомы друг с другом. Никакого конвейера." },
            { title: "Всё организовано", desc: "Виза, билеты, трансферы, жильё — мы берём на себя. Вы просто прилетаете." },
            { title: "Русскоязычный", desc: "Тренер говорит по-русски. Никаких языковых барьеров на корте." },
          ].map((c) => (
            <div key={c.title} className="reveal bg-card p-8">
              <h3 className="font-display text-[18px] text-forest mb-2">{c.title}</h3>
              <p className="text-[15px] leading-[1.65] text-text-body font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LOCATION (brief) ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16">
        <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-6">
          Тенерифе
        </h2>
        <p className="reveal text-[15px] text-sand/50 leading-[1.65] font-light max-w-[500px] mb-12">
          Канарские острова, Испания. +25°C в сентябре. 4,5 часа из Москвы. Шенгенская зона.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {[
            { label: "Канарские острова", sub: "Испания · Евросоюз" },
            { label: "+25°C в сентябре", sub: "300 солнечных дней" },
            { label: "Атлантический океан", sub: "Пляжи в 15 мин" },
            { label: "4,5 ч из Москвы", sub: "Прямые рейсы" },
          ].map((item) => (
            <div key={item.label} className="reveal p-6 border border-gold/10">
              <p className="font-display text-[16px] text-sand-light mb-1">{item.label}</p>
              <p className="text-[12px] text-sand/40">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="faq">
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

      {/* ─── FINAL CTA ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16 text-center" id="cta">
        <h2 className="reveal font-display font-light text-[clamp(32px,4vw,52px)] text-sand-light leading-[1.1] mb-4">
          Записаться в кемп
        </h2>
        <p className="reveal text-[15px] text-sand/50 leading-[1.6] max-w-[440px] mx-auto mb-4">
          850 € — спортивный пакет. Группа до 12 человек.<br />
          14–20 сентября 2026.
        </p>
        <p className="reveal text-[13px] text-sand/35 mb-10">Осталось 8 мест</p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
            Написать в Telegram
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-10 border border-gold/30 text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold/10 transition-all duration-300">
            WhatsApp
          </a>
        </div>
        <p className="text-[12px] text-sand/30">Ответим за 2 часа. Без обязательств.</p>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-8 px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-display text-[15px] italic text-gold tracking-[3px]">Tennis · Padel · Tenerife · 2026</span>
        <span className="text-[11px] text-sand/30">14–20 сентября 2026</span>
        <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-sand/30 hover:text-gold transition-colors" aria-label="Telegram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z"/></svg>
        </a>
      </footer>

      <StickyMobileCTA />
    </div>
  );
};

export default Index;
