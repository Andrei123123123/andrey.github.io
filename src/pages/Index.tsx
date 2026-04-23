import { useState, useCallback, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import MobileMenu from "@/components/MobileMenu";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TeamSection from "@/components/TeamSection";
import VillaSection from "@/components/VillaSection";
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

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Index = () => {
  const containerRef = useScrollReveal();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const toggleFaq = useCallback((i: number) => {
    setFaqOpen((prev) => (prev === i ? null : i));
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqs = [
    { q: "Нужна ли виза?", a: "Да, нужна испанская виза (Тенерифе — территория Испании/ЕС). Наш партнер оформляет приглашение, документы и подачу. Стоимость 20 000 ₽. Срок оформления — 2–4 недели." },
    { q: "Какой уровень игры нужен?", a: "Принимаем от начинающих (кто хочет попробовать для себя что-то новое) до уверенных любителей. В первый день разбиваем на группы по уровню. Можно выбрать теннис или падел." },
    { q: "Нужна ли своя ракетка?", a: "Нет, академия предоставит. Если хотите играть своей — отлично, берите с собой." },
    { q: "Еду один — не буду ли чужим?", a: "80% участников едут одни. До отъезда создаём общий чат, где все знакомятся. После первого ужина эта тревога исчезает." },
    { q: "Сколько часов тенниса в день?", a: "2 часа вечерняя тренировка каждый день. Итого 6 полноценных тренировок за неделю: разминка, техника, игровые сеты." },
    { q: "Включён ли перелёт?", a: "Мы помогаем с подбором авиабилетов для комфортного перелета.  Аэропорт — Тенерифе Юг (TFS), ~9 часов из Москвы с пересадкой." },
    { q: "Что если не смогу поехать?", a: "Кемп не состоялся — 100% возврат. Отмена за 30+ дней — полный возврат. За 14–30 дней — 50%. Менее 14 дней — без возврата." },
  ];

  const days = [
    { d: "14", wd: "Пн", title: "Прилёт и знакомство", preview: "Трансфер из аэропорта, заселение на виллу у океана. Вечером — знакомство за ужином и первая тренировка для оценки уровня.", tags: ["Трансфер", "Ужин", "Тренировка"], activities: ["Встреча в аэропорту TFS, трансфер на виллу", "Заселение, отдых, пляж", "Знакомство группы за ужином", "Первая вечерняя тренировка — разминка и оценка уровня"], img: day14 },
    { d: "15", wd: "Вт", title: "Санта-Крус-де-Тенерифе + Loro Parque", preview: "Loro Parque с его дельфинами и косатками, столица острова Санта-Крус-де-Тенерифе и Ботанический сад. Вечером играем в теннис или падел", tags: ["Loro Parque", "Столица", "Техника"], activities: ["Loro Parque — один из лучших зоопарков мира", "Прогулка по Санта-Крус-де-Тенерифе — столице острова", "Ботанический сад в Пуэрто-де-ла-Крус", "Вечерняя тренировка: работа над техникой ударов"], img: day15 },
    { d: "16", wd: "Ср", title: "Яхта + корт", preview: "Морская прогулка вдоль скал Los Gigantes, купание в открытом океане с дельфинами. Вечером — подача и приём.", tags: ["Яхта", "Океан", "Подача"], activities: ["Морская прогулка вдоль побережья Los Gigantes", "Купание в открытом океане, дельфины", "Обед на яхте", "Вечерняя тренировка: подача и приём"], img: day16 },
    { d: "17", wd: "Чт", title: "Свободный день + корт", preview: "Расслабленный день: бассейн, чёрный вулканический пляж, шоппинг или спа. Вечером - теннис или падел на закате", tags: ["Отдых", "Пляж", "Разбор"], activities: ["Отдых: бассейн, чёрный пляж, шоппинг или спа", "Свободное время на острове", "Обед", "Вечерняя тренировка: индивидуальный разбор ошибок"], img: day17 },
    { d: "18", wd: "Пт", title: "Вулкан Тейде + корт", preview: "Подъём на высшую точку Испании (3 718 м) по канатной дороге — виды над облаками. Вечером тактика и розыгрыши.", tags: ["Вулкан", "3718 м", "Тактика"], activities: ["Тейде (3 718 м) — высшая точка Испании", "Подъём на канатной дороге, виды над облаками", "Обед", "Вечерняя тренировка: тактика и розыгрыши"], img: day18 },
    { d: "19", wd: "Сб", title: "Сёрфинг + корт", preview: "Урок сёрфинга на волнах Атлантики — подходит для любого уровня. Вечером предтурнирная тренировка парных комбинаций.", tags: ["Сёрфинг", "Волны", "Парная игра"], activities: ["Урок сёрфинга с инструктором, любой уровень", "Волны Атлантики, пляж", "Обед", "Предтурнирная тренировка: парные комбинации"], img: day19 },
    { d: "20", wd: "Вс", title: "Турнир и банкет", preview: "Финальный дружеский турнир, награждение победителей и прощальный ужин в средневековом замке Сан-Мигель.", tags: ["Турнир", "Награждение", "Банкет"], activities: ["Финальный дружеский турнир среди участников", "Награждение победителей", "Прощальный банкет в замке Сан-Мигель", "Трансфер в аэропорт"], img: day20 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formSubmitting) return;
    setFormSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-booking", {
        body: { name: formData.name, phone: formData.phone },
      });
      if (error || !data?.ok) {
        throw new Error(error?.message || "Не удалось отправить заявку");
      }
      setFormSent(true);
      toast({
        title: "Заявка отправлена ✓",
        description: "Свяжемся с вами в течение 2 часов.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Что-то пошло не так";
      toast({
        title: "Ошибка отправки",
        description: `${message}. Напишите нам в Telegram: @oceaninthesky`,
        variant: "destructive",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <main ref={containerRef}>
      {/* ─── STICKY NAV ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-16 flex justify-between items-center transition-all duration-300 ${navScrolled ? "bg-forest/95 backdrop-blur-md shadow-lg" : ""}`}>
        <span className="font-display text-[17px] italic text-gold tracking-[2px]">Tennis · Tenerife</span>

        <ul className="hidden lg:flex gap-8 list-none">
          {[
            { href: "#programme", label: "Программа" },
            { href: "#trainer", label: "Команда" },
            { href: "#location", label: "Тенерифе" },
            { href: "#pricing", label: "Стоимость" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] tracking-[1.5px] uppercase text-sand/90 no-underline hover:text-gold transition-colors duration-300 font-semibold">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Social icons + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={18} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-gold transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon size={18} />
            </a>
            <a href="https://instagram.com/tenerife.tennis.camp" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://vk.com/tennistenerife" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-gold transition-colors" aria-label="VK">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z" />
              </svg>
            </a>
          </div>
          <a href="#cta" className="py-2.5 px-6 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2px] uppercase no-underline hover:bg-gold-light transition-colors duration-300 rounded-md">
            Забронировать
          </a>
        </div>
        <MobileMenu />
      </nav>

      {/* ─── 01. HERO ─── */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" aria-hidden="true">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(28,43,30,0.75), rgba(28,43,30,0.75))" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-28 pb-16 flex-1 flex items-center">
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="animate-fade-up text-[13px] tracking-[3px] uppercase text-gold mb-5 font-semibold">
                14–20 сентября 2026 · Тенерифе
              </p>
              <h1 className="animate-fade-up font-display font-medium text-[clamp(40px,5.2vw,72px)] leading-[1.05] text-sand-light tracking-[-0.5px]">
                Неделя тенниса<br />на Канарах —<br /><em className="not-italic text-gold">всё под ключ</em>
              </h1>

              <p className="animate-fade-up mt-6 text-[19px] text-sand/85 leading-[1.6] font-medium max-w-[520px]" style={{ animationDelay: "0.15s" }}>
                Вилла, корты, повар, трансферы и виза — мы собрали всё. Вы просто прилетаете и играете. Группа до 12 человек.
              </p>

              <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
                <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 py-4 px-10 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline hover:bg-gold-light transition-all duration-300 rounded-md">
                  <TelegramIcon size={18} /> Узнать детали
                </a>
                <a href="#cta" className="inline-flex items-center justify-center gap-3 py-4 px-8 border-2 border-sand/30 text-sand-light font-body text-[13px] font-medium tracking-[2px] uppercase no-underline hover:border-gold hover:text-gold transition-all duration-300 rounded-md">
                  Забронировать <ArrowRight size={16} />
                </a>
              </div>

              <p className="animate-fade-up mt-5 text-[13px] text-sand/60" style={{ animationDelay: "0.4s" }}>
                Депозит 270 € · Полный возврат, если кемп не состоится
              </p>
            </div>


            {/* Right side — 4 ключевые выгоды */}
            <div className="animate-fade-up hidden lg:block" style={{ animationDelay: "0.25s" }}>
              <div className="card-premium-dark card-premium-accent backdrop-blur-md p-8 bg-forest/40">
                <p className="text-[13px] tracking-[3px] uppercase text-gold mb-6 font-semibold">Что вы получаете</p>
                <ul className="flex flex-col gap-4">
                  {[
                    "6 тренировок на кортах с видом на океан",
                    "Вилла у океана с поваром и трансферами",
                    "Экскурсии: Тейде, яхта, сёрфинг",
                    "Индивидуальная Шенген-виза по приглашению теннисной академии Тенерифе",
                  ].map((item) => (
                    <li key={item} className="text-[17px] text-sand/85 flex gap-3 items-start leading-[1.5]">
                      <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ПРОГРАММА ПО ДНЯМ ─── */}
      <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="programme">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-medium">14–20 сентября 2026</p>
          <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-4">
            Программа по дням
          </h2>
          <p className="reveal text-[17px] text-text-body leading-[1.7] mb-14 max-w-[650px]">
            Каждый день — новый маршрут утром и тренировка вечером. 6 тренировок × 2 часа = 12 часов на корте за неделю.
          </p>

          <div className="flex flex-col gap-3">
            {days.map((day, i) => {
              const isOpen = activeDay === i;
              return (
                <div key={day.d} className="reveal">
                  <button
                    className={`w-full cursor-pointer rounded-2xl p-5 md:p-6 flex items-start gap-5 text-left transition-all duration-500 border ${isOpen ? "bg-forest border-gold/30 shadow-[0_2px_4px_rgba(0,0,0,0.12),0_28px_56px_-16px_rgba(0,0,0,0.5)]" : "bg-card border-gold/15 shadow-[0_1px_2px_rgba(28,43,30,0.04),0_8px_24px_-12px_rgba(28,43,30,0.12)] hover:border-gold/30 hover:shadow-[0_2px_4px_rgba(28,43,30,0.05),0_24px_48px_-16px_rgba(28,43,30,0.18)] hover:-translate-y-0.5"}`}
                    onClick={() => setActiveDay(isOpen ? -1 : i)}
                  >
                    <div className="flex flex-col items-center flex-shrink-0 text-gold">
                      <span className="font-display text-[36px] font-medium leading-none">{day.d}</span>
                      <span className="text-[12px] tracking-[2px] uppercase mt-1 opacity-60">{day.wd}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`block font-display text-[20px] md:text-[22px] font-medium transition-colors duration-300 ${isOpen ? "text-sand-light" : "text-forest"}`}>{day.title}</span>
                      <span className={`block text-[16px] leading-[1.6] mt-2 transition-colors duration-300 ${isOpen ? "text-sand/60" : "text-text-body/70"}`}>{day.preview}</span>
                      {!isOpen && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {day.tags.map((tag) => (
                            <span key={tag} className="text-[12px] tracking-[1px] uppercase px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 font-medium">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className={`w-8 h-8 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${isOpen ? "border-gold/60 bg-gold/10 rotate-45" : "border-gold/30"}`}>
                      <span className="w-3.5 h-px bg-gold" />
                      <span className={`absolute w-px h-3.5 bg-gold transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    </span>
                  </button>

                  <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: isOpen ? "600px" : "0" }}>
                    <div className="pt-0 px-1">
                      <div className="rounded-b-2xl overflow-hidden bg-forest border border-t-0 border-gold/20 -mt-2 mx-2 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.4)]">
                        <div className="relative">
                          <img src={day.img} alt={`День ${day.d} — ${day.title}`} className="w-full h-[220px] md:h-[300px] object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                            <span className="block font-display text-[15px] text-gold/80 mb-2 tracking-[1px] uppercase font-medium">Расписание дня</span>
                          </div>
                        </div>
                        <div className="p-5 md:p-6 pt-2 md:pt-3">
                          <ul className="flex flex-col gap-3 list-none">
                            {day.activities.map((a) => (
                              <li key={a} className="text-[16px] text-sand/70 leading-[1.6] flex gap-3 items-start">
                                <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />{a}
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

          <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 reveal">
            <a href="#cta" className="inline-flex items-center gap-3 py-4 px-10 bg-forest text-gold font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline rounded-md hover:bg-forest-mid transition-all duration-300">
              Забронировать <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── КОМАНДА ─── */}
      <TeamSection />

      {/* ─── ВИЛЛА И ПИТАНИЕ ─── */}
      <VillaSection />

      {/* ─── ТЕНЕРИФЕ ─── */}
      <TenerifeSection />


      {/* ─── ЦЕНА И ТАРИФЫ ─── */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-16 overflow-hidden" id="pricing">
        <div className="absolute inset-0">
          <img src={bgPricing} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-cream/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Стоимость</p>
          <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-14">
            Два пакета
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal card-premium-dark card-premium-accent p-8 lg:p-12 flex flex-col">
              <p className="text-[13px] tracking-[3px] uppercase text-gold/60 mb-4 font-medium">Спортивный пакет</p>
              <div className="font-display text-[56px] font-medium text-gold leading-none mb-2">€1250</div>
              <p className="text-[15px] text-sand/40 mb-10">на человека</p>
              <ul className="flex flex-col gap-3.5 flex-1">
                {["6 тренировок теннис/падел (2 ч каждая)", "Питание от повара каждый день", "Яхта, Тейде, пляжи, сёрфинг", "Турнир и банкет в замке", "Трансферы по острову и в аэропорт", "Организация"].map((f) => (
                  <li key={f} className="text-[17px] text-sand/70 flex gap-3 items-start leading-[1.6]">
                    <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-10 py-4 text-center font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline bg-gold text-forest hover:bg-gold-light transition-all duration-300 block rounded-md">
                Забронировать — €1250
              </a>
            </div>

            <div className="reveal card-premium card-premium-accent p-8 lg:p-12 flex flex-col">
               <p className="text-[13px] tracking-[3px] uppercase text-text-muted-custom mb-4 font-medium">ТУРАГЕНТ</p>
              <div className="font-display font-medium text-forest leading-none mb-2 text-4xl">Индивидуально</div>
              <p className="text-[15px] text-text-muted-custom mb-10">перелёт + вилла + виза + страховка</p>
              <ul className="flex flex-col gap-3.5 flex-1">
                {[
                  "Перелёт Москва/Питер — Тенерифе  и обратно",
                  "Проживание на вилле у моря",
                  "Сопровождение для получения шенгена",
                  "Виза — 20 000 ₽",
                  "Страховка",
                ].map((f) => (
                  <li key={f} className="text-[17px] text-text-body flex gap-3 items-start leading-[1.6]">
                    <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="mt-10 py-4 text-center font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline border-2 border-gold/30 text-gold hover:bg-gold/5 transition-all duration-300 block rounded-md">
                Узнать подробнее
              </a>
            </div>
          </div>
          <p className="text-[15px] text-text-muted-custom mt-6 leading-relaxed">Цены действительны при бронировании до 1 августа 2026. Стоимость турпакета и проживания может варьироваться в зависимости от даты бронирования, сезона и выбранных условий — уточняйте актуальную стоимость у организаторов.</p>
        </div>
      </section>

      <CommunitySection />

      {/* ─── FAQ ─── */}
      <section className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="faq">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-14">
            Частые вопросы
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal border-b border-forest/10">
              <button className="w-full bg-transparent border-none cursor-pointer py-7 flex justify-between items-center gap-6 text-left" onClick={() => toggleFaq(i)}>
                <span className="font-display text-[22px] font-semibold text-forest leading-[1.3]">{faq.q}</span>
                <span className="w-6 h-6 flex-shrink-0 rounded-full border border-gold/40 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-px bg-gold" />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3 bg-gold transition-all duration-300 ${faqOpen === i ? "opacity-0 rotate-90" : ""}`} />
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: faqOpen === i ? "400px" : "0", paddingBottom: faqOpen === i ? "24px" : "0" }}>
                <p className="text-[18px] leading-[1.75] text-text-body">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ФИНАЛЬНЫЙ CTA + ФОРМА ─── */}
      <section className="bg-forest py-24 lg:py-32 px-6 lg:px-16" id="cta">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="reveal font-display font-medium text-[clamp(32px,4.5vw,52px)] text-sand-light leading-[1.1] mb-3">
            Всего {TOTAL} мест
          </h2>
          <p className="reveal text-[17px] text-sand/50 mb-12 leading-[1.7]">
            Ответим в течение 2 часов в рабочее время
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/34600000000?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D0%B5%D0%BC%D0%BF%D0%B5"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-[hsl(142,70%,35%)] text-white font-body text-[13px] font-semibold tracking-[2px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] transition-all duration-300 rounded-md"
            >
              <WhatsAppIcon size={20} /> WhatsApp
            </a>
            <a
              href="https://t.me/tennis_tenerife"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-8 bg-[hsl(200,70%,45%)] text-white font-body text-[13px] font-semibold tracking-[2px] uppercase no-underline hover:bg-[hsl(200,70%,50%)] transition-all duration-300 rounded-md"
            >
              <TelegramIcon size={20} /> Telegram
            </a>
          </div>

          <div className="reveal text-[14px] text-sand/30 mb-8 uppercase tracking-[3px] font-medium">или оставьте заявку</div>

          {formSent ? (
            <div className="reveal bg-forest-light/40 border border-gold/20 p-10 text-center rounded-lg">
              <p className="font-display text-[24px] font-medium text-sand-light mb-3">Заявка принята!</p>
              <p className="text-[17px] text-sand/60 leading-[1.7]">
                Мы свяжемся в течение 2 часов.<br />
                Если срочно — напишите в{" "}
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">WhatsApp</a> или{" "}
                <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">Telegram</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal flex flex-col gap-5 text-left">
              <div>
                <label className="text-[13px] tracking-[2px] uppercase text-sand/40 block mb-2 font-medium">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-4 px-5 text-[16px] outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20 rounded-md"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="text-[13px] tracking-[2px] uppercase text-sand/40 block mb-2 font-medium">Телефон</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-4 px-5 text-[16px] outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20 rounded-md"
                  placeholder="+7 999 999 99 99"
                />
              </div>
              <button type="submit" disabled={formSubmitting} className="mt-4 py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300 rounded-md disabled:opacity-60 disabled:cursor-not-allowed">
                {formSubmitting ? "Отправляем..." : "Отправить заявку"}
              </button>
              <p className="text-[13px] text-sand/25 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[hsl(137,22%,8%)] py-12 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="font-display text-[17px] italic text-gold tracking-[2px] block">Tennis · Tenerife</span>
            <span className="text-[14px] text-sand/30 mt-1 block">14–20 сентября 2026</span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="https://t.me/tennis_tenerife" target="_blank" rel="noopener noreferrer" className="text-sand/40 hover:text-gold transition-colors" aria-label="Telegram">
              <TelegramIcon size={22} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sand/40 hover:text-gold transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon size={22} />
            </a>
            <a href="https://instagram.com/tenerife.tennis.camp" target="_blank" rel="noopener noreferrer" className="text-sand/40 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <a href="https://vk.com/tennistenerife" target="_blank" rel="noopener noreferrer" className="text-sand/40 hover:text-gold transition-colors" aria-label="VK">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z" />
              </svg>
            </a>
          </div>
          <div className="md:text-right space-y-2">
            <a
              href="/privacy"
              className="text-[13px] text-sand/60 hover:text-gold transition-colors block"
            >
              Политика конфиденциальности
            </a>
            <span className="text-[13px] text-sand/40 block">© 2026 Tennis Tenerife</span>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />

      {/* ─── SUCCESS MODAL ─── */}
      {formSent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-fade-in"
          style={{ background: "rgba(28,43,30,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setFormSent(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div
            className="relative max-w-[480px] w-full bg-forest border border-gold/30 rounded-2xl p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-gold" strokeWidth={2} />
            </div>
            <h3 id="success-title" className="font-display text-[28px] font-medium text-sand-light mb-3">
              Заявка отправлена!
            </h3>
            <p className="text-[16px] text-sand/70 leading-[1.7] mb-8">
              Спасибо, {formData.name || "друг"}! Мы свяжемся с вами в течение 2 часов.
              <br />Если срочно — напишите в{" "}
              <a href="https://t.me/oceaninthesky" target="_blank" rel="noopener noreferrer" className="text-gold no-underline hover:underline">
                Telegram
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setFormSent(false)}
              className="w-full py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase border-none rounded-md hover:bg-gold-light transition-colors cursor-pointer"
            >
              Отлично
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
