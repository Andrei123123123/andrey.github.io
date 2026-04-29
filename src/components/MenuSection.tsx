import { useState } from "react";
import { ChefHat, Leaf, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import menuPlaceholder from "@/assets/menu-placeholder.jpg";

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
    tagline: "Сбалансированный · рыба, овощи, оливковое масло",
    description:
      "Базовое меню для большинства гостей. Лёгкие завтраки, питательные обеды — энергия для вечерних тренировок.",
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
      { src: menuPlaceholder, alt: "Средиземноморское меню" },
      { src: menuPlaceholder, alt: "Свежая рыба и овощи" },
      { src: menuPlaceholder, alt: "Обед на террасе" },
    ],
  },
  {
    id: "mix",
    label: "Микс кухонь",
    tagline: "Азия · домашняя · Италия",
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
      { src: menuPlaceholder, alt: "Микс кухонь" },
      { src: menuPlaceholder, alt: "Азиатские блюда" },
      { src: menuPlaceholder, alt: "Стейк с овощами" },
    ],
  },
  {
    id: "vegan",
    label: "Веганский",
    tagline: "По запросу · полноценный по белку",
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
      { src: menuPlaceholder, alt: "Веганское меню" },
      { src: menuPlaceholder, alt: "Будда-боул" },
      { src: menuPlaceholder, alt: "Свежие овощи" },
    ],
  },
];

const MenuSection = () => {
  const ref = useScrollReveal();
  const [activeId, setActiveId] = useState(variants[0].id);
  const [slide, setSlide] = useState(0);
  const active = variants.find((v) => v.id === activeId)!;

  const switchVariant = (id: string) => {
    setActiveId(id);
    setSlide(0);
  };

  const prev = () => setSlide((s) => (s === 0 ? active.images.length - 1 : s - 1));
  const next = () => setSlide((s) => (s === active.images.length - 1 ? 0 : s + 1));

  return (
    <section ref={ref} className="bg-sand/30 py-24 lg:py-32 px-6 lg:px-16" id="menu">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Питание</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-6">
          Меню от повара на вилле
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[720px] mb-12">
          Завтраки и обеды готовит личный шеф из свежих локальных продуктов. Меню адаптировано под тренировки —
          вкусный lifestyle, а не фитнес-диета. Учитываем аллергии и предпочтения.
        </p>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {variants.map((v) => {
            const Icon = v.icon;
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => switchVariant(v.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-semibold tracking-[0.5px] transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-forest text-gold border-forest shadow-md"
                    : "bg-cream text-forest/75 border-forest/15 hover:border-gold/50 hover:text-forest"
                }`}
              >
                <Icon size={16} strokeWidth={1.8} />
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div key={active.id} className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 animate-fade-in">
          {/* Carousel */}
          <div className="reveal">
            <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[460px]">
              {active.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent pointer-events-none" />

              {active.images.length > 1 && (
                <>
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
                    {active.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Фото ${i + 1}`}
                        onClick={() => setSlide(i)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                          i === slide ? "bg-gold w-8" : "bg-sand/50 w-2.5"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <p className="text-[13px] text-text-body/70 mt-3 italic">{active.tagline}</p>
          </div>

          {/* Days table */}
          <div className="reveal">
            <p className="text-[15px] text-text-body leading-[1.7] mb-6">{active.description}</p>
            <div className="card-premium card-premium-accent p-6 lg:p-8">
              <ul className="flex flex-col divide-y divide-forest/10">
                {active.days.map((d) => (
                  <li key={d.day} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-display text-[18px] text-gold font-semibold w-8">{d.day}</span>
                      <span className="text-[12px] uppercase tracking-[2px] text-forest/60">Завтрак</span>
                    </div>
                    <p className="text-[14.5px] text-text-body leading-[1.55] pl-11 mb-2">{d.breakfast}</p>
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="w-8" />
                      <span className="text-[12px] uppercase tracking-[2px] text-forest/60">Обед</span>
                    </div>
                    <p className="text-[14.5px] text-text-body leading-[1.55] pl-11">{d.lunch}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[13px] text-text-body/65 mt-4 leading-[1.6]">
              Ужины — отдельная история: каждый вечер шеф готовит блюда испанской и канарской кухни за общим столом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
