import { Check } from "lucide-react";
import villaHero from "@/assets/villa-hero.jpg";
import villaDining from "@/assets/villa-dining.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VillaSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[12px] tracking-[3px] uppercase text-gold mb-4 font-medium">Проживание и питание</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-6">
          Вилла у океана
        </h2>
        <p className="reveal text-[16px] text-text-body leading-[1.7] max-w-[650px] mb-14">
          Вы живёте не в отеле, а на частной вилле — с бассейном, террасой и видом на Атлантику. Это ваш дом на неделю.
        </p>

        {/* Villa hero image */}
        <div className="reveal rounded-lg overflow-hidden mb-8">
          <img src={villaHero} alt="Вилла с бассейном на Тенерифе" className="w-full h-[300px] md:h-[450px] object-cover" loading="lazy" />
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Villa details */}
          <div className="reveal bg-card rounded-lg p-8 border border-border">
            <h3 className="font-display text-[22px] font-medium text-forest mb-6">🏠 Вилла</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Частная вилла на юге Тенерифе, 10 минут от океана",
                "Бассейн с подогревом и шезлонги",
                "Просторные комнаты (1-2 человека в номере)",
                "Терраса с видом на горы и океан",
                "Полностью оборудованная кухня",
                "Wi-Fi, кондиционер, стиральная машина",
                "Парковка и закрытая территория",
              ].map((item) => (
                <li key={item} className="text-[15px] text-text-body leading-[1.6] flex gap-3 items-start">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dining details */}
          <div className="reveal bg-card rounded-lg overflow-hidden border border-border">
            <img src={villaDining} alt="Ужин на террасе виллы" className="w-full h-[220px] object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="font-display text-[22px] font-medium text-forest mb-6">🍽 Питание</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Завтрак, обед и ужин — 3 раза в день",
                  "Готовит персональный повар на вилле",
                  "Средиземноморская кухня из свежих продуктов",
                  "Учитываем аллергии и предпочтения",
                  "Свежие фрукты, соки, снэки — весь день",
                ].map((item) => (
                  <li key={item} className="text-[15px] text-text-body leading-[1.6] flex gap-3 items-start">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Flight info */}
        <div className="reveal bg-forest rounded-lg p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-[20px] font-medium text-gold mb-3">✈️ Перелёт</h3>
              <p className="text-[15px] text-sand/70 leading-[1.7]">
                Рейсы из Москвы и Санкт-Петербурга с одной пересадкой (~9 часов). Аэропорт Тенерифе Юг (TFS). Помогаем с выбором оптимальных рейсов и дат.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] font-medium text-gold mb-3">🛂 Виза</h3>
              <p className="text-[15px] text-sand/70 leading-[1.7]">
                Тенерифе — территория Испании (шенген). Оформляем приглашение от Tenerife Tennis Academy, помогаем с документами. Стоимость визы входит в турпакет.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] font-medium text-gold mb-3">🚗 Трансфер</h3>
              <p className="text-[15px] text-sand/70 leading-[1.7]">
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
