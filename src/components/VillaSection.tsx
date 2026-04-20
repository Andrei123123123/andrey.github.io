import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const villaImages = [
  { src: villa1, alt: "Вилла с бассейном и видом на океан" },
  { src: villa2, alt: "Просторная спальня с видом на море" },
  { src: villa3, alt: "Ужин на террасе с видом на океан" },
  { src: villa4, alt: "Бассейн с подсветкой вечером" },
];

const VillaSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? villaImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === villaImages.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Проживание и питание</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-6">
          Вилла у океана
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[700px] mb-14">
          Вы живёте не в отеле, а на частной вилле — с бассейном, террасой и видом на Атлантику. Это ваш дом на неделю.
        </p>

        {/* Villa photo carousel */}
        <div className="reveal relative rounded-lg overflow-hidden mb-10">
          <div className="relative h-[320px] md:h-[500px]">
            {villaImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />

            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer">
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {villaImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "bg-gold w-8" : "bg-sand/40"}`}
                />
              ))}
            </div>

            <div className="absolute bottom-12 left-6">
              <p className="text-[14px] text-sand/90 font-medium drop-shadow-lg">{villaImages[current].alt}</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="reveal bg-card rounded-lg p-8 border border-border">
            <h3 className="font-display text-[26px] font-semibold text-forest mb-6">🏠 Вилла</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Частная вилла на юге Тенерифе, 10 минут от океана",
                "Бассейн с подогревом и шезлонги",
                "Просторные комнаты (1-2 человека в номере)",
                "Терраса с видом на горы и океан",
                "Полностью оборудованная кухня",
                "Wi-Fi, кондиционер, стиральная машина",
                "Парковка и закрытая территория",
              ].map((item) => (
                <li key={item} className="text-[16px] text-text-body leading-[1.65] flex gap-3 items-start">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal bg-card rounded-lg p-8 border border-border">
            <h3 className="font-display text-[26px] font-semibold text-forest mb-6">🍽 Питание</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "Завтрак, обед и ужин — 3 раза в день",
                "Готовит персональный повар на вилле",
                "Средиземноморская кухня из свежих продуктов",
                "Учитываем аллергии и предпочтения",
                "Свежие фрукты, соки, снэки — весь день",
              ].map((item) => (
                <li key={item} className="text-[16px] text-text-body leading-[1.65] flex gap-3 items-start">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flight info */}
        <div className="reveal bg-forest rounded-lg p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3">✈️ Перелёт</h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Рейсы из Москвы и Санкт-Петербурга с одной пересадкой (~9 часов). Аэропорт Тенерифе Юг (TFS). Помогаем с выбором оптимальных рейсов и дат.<br /><br />(Помогаем с подбором авиабилетов и из регионов России)
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3">🛂 Виза</h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Тенерифе — территория Испании (шенген). Оформляем приглашение от Tenerife Tennis Academy, помогаем с документами. Стоимость визы входит в турпакет.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3">🚗 Трансфер</h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Встречаем в аэропорту, довозим до виллы. Все перемещения по острову на экскурсии — включены. Обратный трансфер в аэропорт тоже.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaSection;
