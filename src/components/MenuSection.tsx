import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import menuPaella from "@/assets/menu-paella.png";
import menuFish from "@/assets/menu-fish.png";
import menuShrimpPasta from "@/assets/menu-shrimp-pasta.png";
import menuBreakfast from "@/assets/menu-breakfast.png";
import menuTapas from "@/assets/menu-tapas.png";
import menuCheese from "@/assets/menu-cheese.png";

const images = [
  { src: menuPaella, alt: "Паэлья де мариска с морепродуктами" },
  { src: menuFish, alt: "Рыба, запечённая с зеленью и овощами" },
  { src: menuShrimpPasta, alt: "Паста с креветками в сливочном соусе" },
  { src: menuTapas, alt: "Доска с испанскими тапас и сырами" },
  { src: menuCheese, alt: "Сырная и закусочная тарелка" },
  { src: menuBreakfast, alt: "Завтрак: яйца, тосты с песто, фрукты" },
];

const MenuSection = () => {
  const ref = useScrollReveal();
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide(slide === 0 ? images.length - 1 : slide - 1);
  const next = () => setSlide(slide === images.length - 1 ? 0 : slide + 1);

  return (
    <section ref={ref} className="bg-sand/30 py-24 lg:py-28 px-6 lg:px-16" id="menu">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Питание</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,52px)] text-forest leading-[1.1] mb-5">
          Шеф-повар на вилле
        </h2>
        <p className="reveal text-[17px] text-text-body leading-[1.7] max-w-[680px] mb-12">
          Завтрак, ланч и ужин — каждый день. Средиземноморская и канарская кухня из свежих
          локальных продуктов. Адаптируем под предпочтения: пескетариан, веган, без глютена — по запросу.
        </p>

        <div className="reveal relative rounded-2xl overflow-hidden bg-forest/5">
          <div className="relative h-[320px] md:h-[520px]">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Фото ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                    i === slide ? "bg-gold w-8" : "bg-forest/20 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="reveal text-[14px] text-text-body/65 mt-6 max-w-[680px] leading-[1.6]">
          Ужины — отдельная история. Каждый вечер шеф готовит блюда испанской и канарской кухни за общим столом.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
