import { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Check, ArrowRight, MapPin, Sun, Plane, Zap, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-tenerife.jpg";
import day14 from "@/assets/day-14.jpg";
import day15 from "@/assets/day-15.jpg";
import day16 from "@/assets/day-16.jpg";
import day17 from "@/assets/day-17.jpg";
import day18 from "@/assets/day-18.jpg";
import day19 from "@/assets/day-19.jpg";
import day20 from "@/assets/day-20.jpg";
import bgFormats from "@/assets/bg-formats.jpg";
import bgPricing from "@/assets/bg-pricing.jpg";

const BOOKED = 4;
const TOTAL = 12;

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
    { q: "Сколько часов тенниса в день?", a: "2 часа вечерняя тренировка каждый день. Итого 6 полноценных тренировок за неделю: разминка, техника, игровые сеты." },
    { q: "Включён ли перелёт?", a: "Нет, перелёт бронируется через турпакет (200 000 ₽) или самостоятельно. Аэропорт — Тенерифе Юг (TFS), ~5 часов из Москвы." },
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
            { href: "#programme", label: "Программа" },
            { href: "#trainer", label: "Тренер" },
            { href: "#location", label: "Тенерифе" },
            { href: "#pricing", label: "Стоимость" },
            { href: "#faq", label: "FAQ" },
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

      {/* ─── 01. HERO ─── */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(28,43,30,0.72), rgba(28,43,30,0.72))" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-28 pb-16 flex-1 flex items-center">
          <div className="max-w-[700px]">
            <h1 className="animate-fade-up font-display font-light text-[clamp(36px,5vw,64px)] leading-[1.08] text-sand-light tracking-[-0.5px]">
              Теннис на Тенерифе.<br /><em className="italic text-gold">7 дней, которые меняют игру</em>
            </h1>

            <p className="animate-fade-up mt-5 text-[15px] text-sand/70 leading-[1.6]" style={{ animationDelay: "0.15s" }}>
              Сентябрь 2026 · 25°C · группы по уровням · {TOTAL} участников
            </p>

            <ul className="animate-fade-up mt-6 flex flex-col gap-2.5 list-none" style={{ animationDelay: "0.2s" }}>
              {[
                "6 тренировок на открытых кортах (2 ч каждая)",
                "Видеоразбор техники ударов",
                "Проживание на вилле у океана",
                "Питание от повара",
                "Трансфер аэропорт — вилла — аэропорт",
                "Турнир среди участников в финальный день",
                "Экскурсии: Тейде, яхта, Маска, сёрфинг",
                "Делаем **всё под ключ**",
                "Оформляем шенген с пригласительным письмом от Tenerife Tennis Academy",
              ].map((item) => (
                <li key={item} className="text-[14px] text-sand/60 flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-gold font-semibold">$1</span>') }} />
                </li>
              ))}
            </ul>

            <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#cta" className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase no-underline hover:bg-gold-light transition-all duration-300">
                Забронировать место <ArrowRight size={14} />
              </a>
              <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-[hsl(200,100%,40%)] text-white font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-[hsl(200,100%,48%)] transition-all duration-300">
                <TelegramIcon size={16} /> Написать в Telegram
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

      {/* ─── ПРОГРАММА ПО ДНЯМ (Accordion) ─── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="programme">
        <div className="max-w-[1000px]">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">14–20 сентября 2026</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-4">
            Программа по дням
          </h2>
          <p className="reveal text-[15px] text-text-body leading-[1.6] font-light mb-12">
            Каждый день — новый маршрут утром и тренировка вечером. 6 тренировок × 2 часа = 12 часов на корте за неделю.
          </p>

          <div className="flex flex-col gap-3">
            {days.map((day, i) => {
              const isOpen = activeDay === i;
              return (
                <div key={day.d} className="reveal">
                  <button
                    className={`w-full cursor-pointer rounded-lg p-5 md:p-6 flex items-start gap-5 text-left transition-all duration-300 border ${isOpen ? "bg-forest border-forest shadow-xl" : "bg-card border-border hover:border-gold/40 hover:shadow-md"}`}
                    onClick={() => setActiveDay(isOpen ? -1 : i)}
                  >
                    <div className={`flex flex-col items-center flex-shrink-0 ${isOpen ? "text-gold" : "text-gold"}`}>
                      <span className="font-display text-[32px] font-light leading-none">{day.d}</span>
                      <span className="text-[10px] tracking-[2px] uppercase mt-1 opacity-60">{day.wd}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-display text-[18px] md:text-[20px] transition-colors duration-300 ${isOpen ? "text-sand-light" : "text-forest"}`}>{day.title}</p>
                      <p className={`text-[13px] leading-[1.5] mt-1.5 font-light transition-colors duration-300 ${isOpen ? "text-sand/60" : "text-text-body/70"}`}>{day.preview}</p>
                      {!isOpen && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {day.tags.map((tag) => (
                            <span key={tag} className="text-[10px] tracking-[1px] uppercase px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${isOpen ? "border-gold/60 bg-gold/10 rotate-45" : "border-gold/30"}`}>
                      <span className="w-3 h-px bg-gold" />
                      <span className={`absolute w-px h-3 bg-gold transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    </span>
                  </button>

                  <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: isOpen ? "600px" : "0" }}>
                    <div className="pt-0 px-1">
                      <div className="rounded-b-lg overflow-hidden bg-forest border border-t-0 border-forest">
                        <div className="relative">
                          <img src={day.img} alt={`День ${day.d} — ${day.title}`} className="w-full h-[220px] md:h-[300px] object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                            <p className="font-display text-[14px] text-gold/80 mb-2 tracking-[1px] uppercase">Расписание дня</p>
                          </div>
                        </div>
                        <div className="p-5 md:p-6 pt-2 md:pt-3">
                          <ul className="flex flex-col gap-3 list-none">
                            {day.activities.map((a) => (
                              <li key={a} className="text-[14px] text-sand/70 leading-[1.5] font-light flex gap-3 items-start">
                                <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 reveal">
            <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-forest text-gold font-body text-[11px] font-medium tracking-[3px] uppercase no-underline rounded-lg hover:bg-forest-mid transition-all duration-300">
              Забронировать <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── ТРЕНЕР ─── */}
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
              [3–4 предложения: кто, сколько лет тренирует, специализация, почему Тенерифе, с кем работал, какой стиль.]
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

      {/* ─── МЕСТО — ТЕНЕРИФЕ ─── */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden" id="location">
        <div className="absolute inset-0">
          <img src={bgFormats} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-forest/90" />
        </div>
        <div className="relative z-10 max-w-[1000px]">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold/60 mb-4">Место</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-12">
            Тенерифе в сентябре — лучшее время для тенниса
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mb-12">
            {[
              { icon: <Sun size={24} />, num: "25–27°C", label: "Температура воздуха" },
              { icon: <Zap size={24} />, num: "55–60%", label: "Влажность · нет жары" },
              { icon: <Mountain size={24} />, num: "300+", label: "Солнечных дней в году" },
              { icon: <Plane size={24} />, num: "~9 ч", label: "перелет с одной пересадкой" },
            ].map((f) => (
              <div key={f.label} className="reveal p-6 border border-gold/10 bg-forest/30 backdrop-blur-sm text-center">
                <div className="text-gold mb-2 flex justify-center">{f.icon}</div>
                <span className="font-display text-[28px] font-light text-gold leading-none block">{f.num}</span>
                <span className="text-[11px] tracking-[1px] text-sand/50 mt-2 block">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal">
              <h3 className="font-display text-[18px] text-sand-light mb-4">Почему сентябрь</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Жара спала — комфортно играть весь день",
                  "Туристический сезон заканчивается — меньше людей",
                  "Море тёплое — купаться после тренировки",
                  "Стабильная погода без дождей",
                ].map((f) => (
                  <li key={f} className="text-[14px] text-sand/60 flex gap-3 items-start">
                    <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3 className="font-display text-[18px] text-sand-light mb-4">Как добраться</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Рейсы с минимумом пересадок ",
                  "Аэропорт Тенерифе Юг (TFS) — ближайший к кортам",
                  "Трансфер аэропорт → вилла включён",
                  "Помогаем с выбором рейсов",
                ].map((f) => (
                  <li key={f} className="text-[14px] text-sand/60 flex gap-3 items-start">
                    <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="reveal text-[13px] text-sand/40 mt-8">
            Тренировки проходят в Tenerife Tennis Academy — профессиональные хардовые корты с освещением.
          </p>
        </div>
      </section>

      {/* ─── ЦЕНА И ТАРИФЫ ─── */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-cream/92" />
        </div>
        <div className="relative z-10 max-w-[900px]">
          <p className="reveal text-[11px] tracking-[3px] uppercase text-gold mb-4">Стоимость</p>
          <h2 className="reveal font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12">
            Два пакета
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            <div className="reveal bg-forest p-8 lg:p-12 flex flex-col">
              <p className="text-[11px] tracking-[3px] uppercase text-gold/60 mb-4">Спортивный пакет</p>
              <div className="font-display text-[52px] font-light text-gold leading-none mb-2">€900</div>
              <p className="text-[13px] text-sand/40 mb-8">на человека</p>
              <ul className="flex flex-col gap-3 flex-1">
                {["6 тренировок теннис/падел (2 ч каждая)", "Видеоразбор техники", "Яхта, Тейде, Маска, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову", "Организация"].map((f) => (
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
              <div className="font-display text-[44px] font-light text-forest leading-none mb-2">200 000 ₽</div>
              <p className="text-[13px] text-text-muted-custom mb-8">перелёт + вилла + питание + виза + страховка</p>
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Перелёт Москва/Питер — Тенерифе — 90 000 ₽",
                  "Проживание на вилле у моря",
                  "Питание от повара (3 раза в день)",
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
          <p className="text-[12px] text-text-muted-custom mt-4">Цены действительны при бронировании до 1 августа 2026.</p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
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

      {/* ─── ФИНАЛЬНЫЙ CTA + ФОРМА ─── */}
      <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16" id="cta">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="reveal font-display font-light text-[clamp(28px,4vw,44px)] text-sand-light leading-[1.1] mb-2">
            Осталось {TOTAL - BOOKED} мест на сентябрь
          </h2>
          <p className="reveal text-[14px] text-sand/45 mb-10 leading-[1.7]">
            Ответим в течение 2 часов в рабочее время
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://wa.me/?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D0%B5%D0%BC%D0%BF%D0%B5"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-[hsl(142,70%,35%)] text-white font-body text-[11px] font-medium tracking-[2px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] transition-all duration-300"
            >
              <WhatsAppIcon size={18} /> Написать в WhatsApp
            </a>
            <a
              href="https://t.me/oceaninthesky"
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
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">WhatsApp</a> или{" "}
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
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Телефон</label>
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
                <label className="text-[11px] tracking-[2px] uppercase text-sand/40 block mb-2">Уровень игры</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] font-light outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="beginner" className="bg-forest text-sand-light">Новичок</option>
                  <option value="starter" className="bg-forest text-sand-light">Начинающий</option>
                  <option value="intermediate" className="bg-forest text-sand-light">Любитель</option>
                  <option value="advanced" className="bg-forest text-sand-light">Разрядник</option>
                </select>
              </div>
              <button type="submit" className="mt-4 py-4 bg-gold text-forest font-body text-[11px] font-medium tracking-[3px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300">
                Отправить заявку
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
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">WhatsApp</a>
            <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-[13px] text-sand/40 hover:text-gold transition-colors no-underline">Telegram: @oceaninthesky</a>
          </div>
          <div className="md:text-right">
            <span className="text-[12px] text-sand/25 block">© 2026 Tennis Tenerife</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  );
};

export default Index;
