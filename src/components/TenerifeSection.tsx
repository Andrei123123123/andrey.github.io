import { useRef, useState } from "react";
import { Check, MapPin, Sun, Mountain, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import tenerife1 from "@/assets/tenerife-1.jpg";
import tenerife2 from "@/assets/tenerife-2.jpg";
import tenerife3 from "@/assets/tenerife-3.jpg";
import tenerife4 from "@/assets/tenerife-4.jpg";
import tenerife5 from "@/assets/tenerife-5.jpg";
import tenerife6 from "@/assets/tenerife-6.jpg";
import tenerife7 from "@/assets/tenerife-7.jpg";
import tenerife8 from "@/assets/tenerife-8.jpg";
import tenerife9 from "@/assets/tenerife-9.jpg";
import tenerife10 from "@/assets/tenerife-10.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useT } from "@/i18n/LanguageContext";

const TenerifeSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const t = useT();

  const images = [
    { src: tenerife1, alt: t("Побережье Тенерифе — чёрный вулканический пляж", "Tenerife coastline — black volcanic beach") },
    { src: tenerife2, alt: t("Виды Тенерифе", "Tenerife views") },
    { src: tenerife3, alt: t("Виды Тенерифе", "Tenerife views") },
    { src: tenerife4, alt: t("Виды Тенерифе", "Tenerife views") },
    { src: tenerife5, alt: t("Бирюзовые воды у скал Los Gigantes", "Turquoise waters by Los Gigantes cliffs") },
    { src: tenerife6, alt: t("Виды Тенерифе", "Tenerife views") },
    { src: tenerife7, alt: t("Вулкан Тейде над облаками на рассвете", "Mount Teide above the clouds at dawn") },
    { src: tenerife8, alt: t("Бирюзовые волны и чёрные вулканические камни", "Turquoise waves and black volcanic rocks") },
    { src: tenerife9, alt: t("Деревня Маска в зелёной долине среди скал", "Masca village in a green valley among cliffs") },
    { src: tenerife10, alt: t("Закат над Атлантикой с видом на Ла Гомеру", "Sunset over the Atlantic with a view of La Gomera") },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-forest overflow-hidden" id="location">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold/70 mb-4 font-semibold">{t("Место", "Location")}</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-sand-light leading-[1.1] mb-6">
          {t("Тенерифе — остров", "Tenerife — island")}<br className="hidden md:block" /> {t("вечного лета", "of endless summer")}
        </h2>
        <p className="reveal text-[18px] text-sand/70 leading-[1.75] max-w-[650px] mb-14">
          {t(
            "Круглый год мягкий климат, потрясающая природа и атмосфера, в которой хочется играть и отдыхать одновременно.",
            "Mild climate year-round, breathtaking nature and an atmosphere where you want to play and rest at the same time."
          )}
        </p>

        <div
          className="reveal relative rounded-lg overflow-hidden mb-14"
          role="region"
          aria-roledescription={t("карусель", "carousel")}
          aria-label={t("Фотографии Тенерифе", "Photos of Tenerife")}
        >
          <div className="relative h-[320px] md:h-[520px] touch-pan-y" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                aria-hidden={i === current ? undefined : true}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={prev}
              aria-label={t("Предыдущее фото Тенерифе", "Previous Tenerife photo")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t("Следующее фото Тенерифе", "Next Tenerife photo")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={t(`Фото ${i + 1} из ${images.length}`, `Photo ${i + 1} of ${images.length}`)}
                  aria-current={i === current ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "bg-gold w-8" : "bg-sand/40 w-2.5"}`}
                />
              ))}
            </div>
          </div>

          <p
            aria-live="polite"
            className="text-[13px] md:text-[14px] text-sand/70 mt-3 px-1"
          >
            {images[current].alt}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {[
            { icon: <Sun size={22} strokeWidth={1.7} />, num: "25–27°C", label: t("Температура воздуха", "Air temperature") },
            { icon: <Mountain size={22} strokeWidth={1.7} />, num: "300+", label: t("Солнечных дней в году", "Sunny days a year") },
            { icon: <Plane size={22} strokeWidth={1.7} />, num: t("~9 ч", "~9 hrs"), label: t("Перелёт с пересадкой", "Flight with one stop") },
          ].map((f) => (
            <div key={f.label} className="reveal card-premium-dark p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-3 flex items-center justify-center">{f.icon}</div>
              <span className="font-display text-[36px] font-semibold text-gold leading-none block">{f.num}</span>
              <span className="text-[13px] tracking-[1px] text-sand/60 mt-2 block">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal">
            <h3 className="font-display text-[24px] font-semibold text-sand-light mb-5">{t("Почему Тенерифе", "Why Tenerife")}</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                t("Вечная весна — комфортно играть круглый год", "Eternal spring — comfortable tennis year-round"),
                t("Вулканические пейзажи и чёрные пляжи", "Volcanic landscapes and black-sand beaches"),
                t("Тёплое море — купаться после тренировки", "Warm ocean — swim after training"),
                t("Стабильная погода без резких перепадов", "Stable weather without sudden changes"),
                t("Дружелюбная атмосфера и безопасность", "Friendly atmosphere and a safe island"),
              ].map((f) => (
                <li key={f} className="text-[16px] text-sand/70 flex gap-3 items-start leading-[1.65]">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="font-display text-[24px] font-semibold text-sand-light mb-5">{t("Как добраться", "How to get there")}</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                t("Рейсы из Москвы и Питера с одной пересадкой", "Flights from Moscow and St. Petersburg with one stop"),
                t("Аэропорт Тенерифе Юг (TFS) — ближайший к кортам", "Tenerife South (TFS) — closest airport to the courts"),
                t("Трансфер аэропорт → вилла включён в стоимость", "Airport → villa transfer included"),
                t("Помогаем с выбором рейсов и стыковок", "We help you choose flights and connections"),
                t("Шенгенская виза — оформляем с приглашением", "Schengen visa — we provide an invitation"),
              ].map((f) => (
                <li key={f} className="text-[16px] text-sand/70 flex gap-3 items-start leading-[1.65]">
                  <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenerifeSection;
