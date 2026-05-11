import { useState } from "react";
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

const images = [
  { src: tenerife1, alt: "Побережье Тенерифе — чёрный вулканический пляж" },
  { src: tenerife7, alt: "Вулкан Тейде над облаками на рассвете" },
  { src: tenerife9, alt: "Деревня Маска в зелёной долине среди скал" },
  { src: tenerife5, alt: "Бирюзовые воды у скал Los Gigantes" },
  { src: tenerife8, alt: "Бирюзовые волны и чёрные вулканические камни" },
  { src: tenerife10, alt: "Закат над Атлантикой с видом на Ла Гомеру" },
];

const TenerifeSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="relative py-24 lg:py-32 px-6 lg:px-16 bg-forest overflow-hidden" id="location">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold/70 mb-4 font-semibold">Место</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-sand-light leading-[1.1] mb-6">
          Тенерифе — остров<br className="hidden md:block" /> вечного лета
        </h2>
        <p className="reveal text-[18px] text-sand/70 leading-[1.75] max-w-[650px] mb-14">
          Круглый год мягкий климат, потрясающая природа и атмосфера, в которой хочется играть и отдыхать одновременно.
        </p>

        {/* Photo carousel */}
        <div className="reveal relative rounded-lg overflow-hidden mb-14">
          <div className="relative h-[320px] md:h-[520px]">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />

            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer">
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "bg-gold w-8" : "bg-sand/40"}`}
                />
              ))}
            </div>

            <div className="absolute bottom-12 left-6">
              <p className="text-[14px] text-sand/90 font-medium drop-shadow-lg">{images[current].alt}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {[
            { icon: <Sun size={22} strokeWidth={1.7} />, num: "25–27°C", label: "Температура воздуха" },
            { icon: <Mountain size={22} strokeWidth={1.7} />, num: "300+", label: "Солнечных дней в году" },
            { icon: <Plane size={22} strokeWidth={1.7} />, num: "~9 ч", label: "Перелёт с пересадкой" },
          ].map((f) => (
            <div key={f.label} className="reveal card-premium-dark p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-3 flex items-center justify-center">{f.icon}</div>
              <span className="font-display text-[36px] font-semibold text-gold leading-none block">{f.num}</span>
              <span className="text-[13px] tracking-[1px] text-sand/60 mt-2 block">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal">
            <h3 className="font-display text-[24px] font-semibold text-sand-light mb-5">Почему Тенерифе</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Вечная весна — комфортно играть круглый год",
                "Вулканические пейзажи и чёрные пляжи",
                "Тёплое море — купаться после тренировки",
                "Стабильная погода без резких перепадов",
                "Дружелюбная атмосфера и безопасность",
              ].map((f) => (
                <li key={f} className="text-[16px] text-sand/70 flex gap-3 items-start leading-[1.65]">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="font-display text-[24px] font-semibold text-sand-light mb-5">Как добраться</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Рейсы из Москвы и Питера с одной пересадкой",
                "Аэропорт Тенерифе Юг (TFS) — ближайший к кортам",
                "Трансфер аэропорт → вилла включён в стоимость",
                "Помогаем с выбором рейсов и стыковок",
                "Шенгенская виза — оформляем с приглашением",
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
