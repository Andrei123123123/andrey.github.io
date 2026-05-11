import { useState } from "react";
import { ChefHat, Leaf, Utensils, ChevronLeft, ChevronRight, Sunrise, UtensilsCrossed } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import menuPaella from "@/assets/menu-paella.png";
import menuFish from "@/assets/menu-fish.png";
import menuShrimpPasta from "@/assets/menu-shrimp-pasta.png";
import menuBreakfast from "@/assets/menu-breakfast.png";
import menuTapas from "@/assets/menu-tapas.png";
import menuCheese from "@/assets/menu-cheese.png";
import menuBolognese from "@/assets/menu-bolognese.png";
import menuCabbageRolls from "@/assets/menu-cabbage-rolls.png";
import menuOats from "@/assets/menu-oats.png";
import menuZucchini from "@/assets/menu-zucchini.png";

type Day = { day: string; breakfast: string; lunch: string };

type MenuVariant = {
  id: string;
  label: string;
  tagline: string;
  description: string;
  icon: typeof ChefHat;
  days: Day[];
  images: { src: string; alt: string }[];
};

const variants: MenuVariant[] = [
  {
    id: "med",
    label: "Средиземноморский",
    tagline: "Рыба, овощи, оливковое масло",
    description:
      "Базовое меню для большинства гостей. Лёгкие завтраки и питательные обеды — энергия для вечерних тренировок.",
    icon: Utensils,
    days: [
      { day: "Пн", breakfast: "Омлет с овощами и сыром, тосты, авокадо, фрукты", lunch: "Куриная грудка гриль, киноа, овощи на пару" },
      { day: "Вт", breakfast: "Греческий йогурт с гранолой и ягодами, мёд", lunch: "Лосось запечённый, картофель, салат с оливковым маслом" },
      { day: "Ср", breakfast: "Овсянка с орехами и бананом, яйца пашот", lunch: "Паста с курицей и овощами, зелёный салат" },
      { day: "Чт", breakfast: "Творог с фруктами и мёдом, орехи", lunch: "Говядина тушёная, рис басмати, овощи" },
      { day: "Пт", breakfast: "Скрэмбл с лососем, тосты, авокадо", lunch: "Салат нисуаз с тунцом, яйцом и картофелем" },
      { day: "Сб", breakfast: "Панкейки с ягодами и йогуртом", lunch: "Курица терияки, рис, овощи wok" },
      { day: "Вс", breakfast: "Яйца бенедикт, салат, фрукты", lunch: "Рыба на гриле, булгур, овощи" },
    ],
    images: [
      { src: menuPaella, alt: "Паэлья де мариска с морепродуктами" },
      { src: menuFish, alt: "Рыба, запечённая с зеленью и овощами" },
      { src: menuShrimpPasta, alt: "Паста с креветками в сливочном соусе" },
      { src: menuBreakfast, alt: "Завтрак: яйца, тосты с песто, фрукты" },
    ],
  },
  {
    id: "world",
    label: "Гастрономический тур",
    tagline: "Азия, Италия, домашняя кухня",
    description:
      "Альтернативный сценарий с большим разнообразием. Каждый день — другой вкус и настроение стола.",
    icon: ChefHat,
    days: [
      { day: "Пн", breakfast: "Шакшука с тостами", lunch: "Индейка с бататом и салатом" },
      { day: "Вт", breakfast: "Рисовая каша с кокосовым молоком и манго", lunch: "Пад тай с курицей" },
      { day: "Ср", breakfast: "Сырники с йогуртом и ягодами", lunch: "Говядина stir-fry с овощами и рисом" },
      { day: "Чт", breakfast: "Тосты с арахисовой пастой и бананом, яйца", lunch: "Куриный суп и сэндвич с индейкой" },
      { day: "Пт", breakfast: "Омлет с грибами и зеленью", lunch: "Паста болоньезе" },
      { day: "Сб", breakfast: "Чиа-пудинг с ягодами", lunch: "Стейк, картофель запечённый, салат" },
      { day: "Вс", breakfast: "Круассаны, яйца, фрукты", lunch: "Поке с лососем и рисом" },
    ],
    images: [
      { src: menuTapas, alt: "Доска с испанскими тапас и сырами" },
      { src: menuCheese, alt: "Сырная и закусочная тарелка" },
      { src: menuBolognese, alt: "Спагетти болоньезе с пармезаном" },
      { src: menuCabbageRolls, alt: "Голубцы под томатным соусом" },
    ],
  },
  {
    id: "vegan",
    label: "Веганский",
    tagline: "По запросу, полноценный по белку",
    description:
      "Опция для гостей, которые не едят животные продукты. Готовится параллельно общему меню — без компромиссов по вкусу.",
    icon: Leaf,
    days: [
      { day: "Пн", breakfast: "Овсянка на растительном молоке с орехами и ягодами", lunch: "Киноа с нутом и овощами" },
      { day: "Вт", breakfast: "Чиа-пудинг с манго", lunch: "Тофу терияки, рис, овощи" },
      { day: "Ср", breakfast: "Смузи-боул (банан, ягоды, гранола)", lunch: "Паста с томатным соусом и чечевицей" },
      { day: "Чт", breakfast: "Тосты с авокадо и томатами", lunch: "Карри с нутом и рисом" },
      { day: "Пт", breakfast: "Гречка с орехами и фруктами", lunch: "Фалафель, хумус, питта, овощи" },
      { day: "Сб", breakfast: "Веганские панкейки с ягодами", lunch: "Будда-боул (тофу, киноа, овощи, тахини)" },
      { day: "Вс", breakfast: "Смузи, орехи, фрукты", lunch: "Рис с фасолью и овощами по-латиноамерикански" },
    ],
    images: [
      { src: menuOats, alt: "Овсянка с бананом — основа веганского завтрака" },
      { src: menuZucchini, alt: "Фаршированные цукини с овощами" },
      { src: menuBreakfast, alt: "Лёгкий завтрак с овощами и фруктами" },
    ],
  },
];

const MenuSection = () => {
  const ref = useScrollReveal();
  const [activeId, setActiveId] = useState(variants[0].id);
  const [slides, setSlides] = useState<Record<string, number>>(
    Object.fromEntries(variants.map((v) => [v.id, 0])),
  );
  const active = variants.find((v) => v.id === activeId)!;
  const slide = slides[active.id] ?? 0;

  const setSlide = (i: number) => setSlides((s) => ({ ...s, [active.id]: i }));
  const prev = () => setSlide(slide === 0 ? active.images.length - 1 : slide - 1);
  const next = () => setSlide(slide === active.images.length - 1 ? 0 : slide + 1);

  return (
    <section ref={ref} className="bg-sand/30 py-24 lg:py-28 px-6 lg:px-16" id="menu">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Питание</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,52px)] text-forest leading-[1.1] mb-5">
          Меню от повара на вилле
        </h2>
        <p className="reveal text-[17px] text-text-body leading-[1.7] max-w-[680px] mb-10">
          Завтраки, обеды и ужины готовит личный шеф из свежих локальных продуктов — 3 раза в день.
          Меню адаптировано под тренировки. Учитываем аллергии и предпочтения.
        </p>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {variants.map((v) => {
            const Icon = v.icon;
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveId(v.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-[0.3px] transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-forest text-gold border-forest shadow-md"
                    : "bg-cream text-forest/70 border-forest/15 hover:border-gold/50 hover:text-forest"
                }`}
              >
                <Icon size={15} strokeWidth={1.8} />
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="reveal card-premium overflow-hidden rounded-2xl bg-cream border border-forest/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Carousel */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-auto lg:min-h-[520px] bg-forest/10">
              {active.images.map((img, i) => (
                <img
                  key={`${active.id}-${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/70 backdrop-blur-sm text-gold text-[11px] tracking-[2px] uppercase font-semibold">
                <active.icon size={13} strokeWidth={1.8} />
                {active.label}
              </div>

              {active.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Предыдущее фото"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Следующее фото"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {active.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Фото ${i + 1}`}
                        onClick={() => setSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                          i === slide ? "bg-gold w-7" : "bg-sand/60 w-2"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Days */}
            <div className="p-7 lg:p-9">
              <p className="text-[12px] tracking-[2.5px] uppercase text-gold/80 font-semibold mb-2">
                {active.tagline}
              </p>
              <p className="text-[14.5px] text-text-body/85 leading-[1.6] mb-6">{active.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5">
                {active.days.map((d) => (
                  <div key={d.day} className="border-t border-forest/10 pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-[18px] text-forest font-semibold">{d.day}</span>
                      <span className="h-px flex-1 bg-forest/10 mx-3" />
                      <span className="text-[10px] uppercase tracking-[2px] text-gold/70">День</span>
                    </div>
                    <div className="flex gap-2 items-start text-[13.5px] text-text-body leading-[1.5] mb-1.5">
                      <Sunrise size={13} className="text-gold/80 flex-shrink-0 mt-1" strokeWidth={1.7} />
                      <span>{d.breakfast}</span>
                    </div>
                    <div className="flex gap-2 items-start text-[13.5px] text-text-body leading-[1.5]">
                      <UtensilsCrossed size={13} className="text-gold/80 flex-shrink-0 mt-1" strokeWidth={1.7} />
                      <span>{d.lunch}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[12.5px] text-text-body/65 mt-6 pt-5 border-t border-forest/10 leading-[1.55] italic">
                Ужины — отдельная история: каждый вечер шеф готовит блюда испанской и канарской кухни за общим
                столом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
