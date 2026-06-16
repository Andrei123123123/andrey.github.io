import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useT } from "@/i18n/LanguageContext";
import menuPaella from "@/assets/menu-paella.png";
import menuFish from "@/assets/menu-fish.png";
import menuShrimpPasta from "@/assets/menu-shrimp-pasta.png";
import menuBreakfast from "@/assets/menu-breakfast.png";
import menuTapas from "@/assets/menu-tapas.png";
import menuCheese from "@/assets/menu-cheese.png";

const MenuSection = () => {
  const ref = useScrollReveal();
  const [slide, setSlide] = useState(0);
  const t = useT();

  const images = [
    { src: menuPaella, alt: t("Паэлья де мариска с морепродуктами", "Seafood paella de marisco") },
    { src: menuFish, alt: t("Рыба, запечённая с зеленью и овощами", "Fish baked with herbs and vegetables") },
    { src: menuShrimpPasta, alt: t("Паста с креветками в сливочном соусе", "Shrimp pasta in cream sauce") },
    { src: menuTapas, alt: t("Доска с испанскими тапас и сырами", "A board of Spanish tapas and cheese") },
    { src: menuCheese, alt: t("Сырная и закусочная тарелка", "Cheese and appetiser plate") },
    { src: menuBreakfast, alt: t("Завтрак: яйца, тосты с песто, фрукты", "Breakfast: eggs, pesto toast, fruit") },
  ];

  const prev = () => setSlide(slide === 0 ? images.length - 1 : slide - 1);
  const next = () => setSlide(slide === images.length - 1 ? 0 : slide + 1);

  return (
    <section ref={ref} className="bg-sand/30 py-24 lg:py-28 px-6 lg:px-16" id="menu">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">{t("Питание", "Dining")}</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,52px)] text-forest leading-[1.1] mb-5">
          {t("Шеф-повар на вилле", "Private chef at the villa")}
        </h2>
        <p className="reveal text-[17px] text-text-body leading-[1.7] max-w-[680px] mb-12">
          {t(
            "Завтрак, ланч и ужин — каждый день. Средиземноморская и канарская кухня из свежих локальных продуктов. Адаптируем под предпочтения: пескетариан, веган, без глютена — по запросу.",
            "Breakfast, lunch and dinner — every day. Mediterranean and Canarian cuisine from fresh local produce. Adapted to your preferences: pescatarian, vegan, gluten-free — on request."
          )}
        </p>

        <div
          className="reveal relative rounded-2xl overflow-hidden bg-forest/5"
          role="region"
          aria-roledescription={t("карусель", "carousel")}
          aria-label={t("Фотографии блюд", "Photos of dishes")}
        >
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
              aria-label={t("Предыдущее фото", "Previous photo")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t("Следующее фото", "Next photo")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={t(`Фото ${i + 1} из ${images.length}`, `Photo ${i + 1} of ${images.length}`)}
                  aria-current={i === slide ? "true" : undefined}
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
          {t(
            "Ужины — отдельная история. Каждый вечер шеф готовит блюда испанской и канарской кухни за общим столом.",
            "Dinners are their own story. Every evening the chef prepares Spanish and Canarian dishes at a shared table."
          )}
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
