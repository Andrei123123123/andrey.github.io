import { useRef, useState } from "react";
import { BadgeCheck, CarFront, Check, ChefHat, ChevronLeft, ChevronRight, Home, MapPin, Plane, Waves, type LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import livingRoom from "@/assets/villa-living-room.avif";
import dining from "@/assets/villa-dining.avif";
import terrace from "@/assets/villa-terrace.avif";
import pool from "@/assets/villa-pool.avif";
import bedroom1 from "@/assets/villa-bedroom-1.avif";
import bedroom2 from "@/assets/villa-bedroom-2.avif";
import bedroom4 from "@/assets/villa-bedroom-4.avif";
import bathroom1 from "@/assets/villa-bathroom-1.avif";
import bathroom2 from "@/assets/villa-bathroom-2.avif";
import bathroom3 from "@/assets/villa-bathroom-3.avif";
import bbq from "@/assets/villa-bbq.avif";
import extra1 from "@/assets/villa-extra-1.avif";
import extra2 from "@/assets/villa-extra-2.avif";
import extra3 from "@/assets/villa-extra-3.avif";
import extra4 from "@/assets/villa-extra-4.avif";
import extra5 from "@/assets/villa-extra-5.avif";
import extra6 from "@/assets/villa-extra-6.avif";
import extra7 from "@/assets/villa-extra-7.avif";
import extra8 from "@/assets/villa-extra-8.avif";
import extra9 from "@/assets/villa-extra-9.avif";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useT } from "@/i18n/LanguageContext";

const DetailsCarousel = ({ detailCards, t }: { detailCards: { title: string; icon: LucideIcon; items: string[] }[]; t: (ru: string, en: string) => string }) => (
  <div className="reveal mb-8">
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {detailCards.map((card) => {
          const Icon = card.icon;
          return (
            <CarouselItem key={card.title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <div className="card-premium card-premium-accent p-7 h-full">
                <h3 className="font-display text-[20px] font-semibold text-forest mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 text-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  {card.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-[14px] text-text-body leading-[1.55] flex gap-2 items-start">
                      <Check size={14} className="text-gold flex-shrink-0 mt-1" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="flex left-2 md:-left-4 bg-forest/80 text-gold border-gold/20 hover:bg-forest" />
      <CarouselNext className="flex right-2 md:-right-4 bg-forest/80 text-gold border-gold/20 hover:bg-forest" />
    </Carousel>
  </div>
);

const VillaSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const t = useT();

  const villaImages = [
    { src: terrace, alt: t("Бассейн виллы на закате", "Villa pool at sunset") },
    { src: livingRoom, alt: t("Светлая гостиная с выходом на террасу", "Bright living room opening to the terrace") },
    { src: pool, alt: t("Полностью оборудованная кухня", "Fully equipped kitchen") },
    { src: dining, alt: t("Лаунж-зона на террасе на закате", "Terrace lounge area at sunset") },
    { src: bedroom1, alt: t("Уютная спальня с деревянным изголовьем", "Cozy bedroom with a wooden headboard") },
    { src: bedroom2, alt: t("Шезлонги на террасе у бассейна", "Sunbeds on the poolside terrace") },
    { src: bedroom4, alt: t("Бассейн с вечерней подсветкой", "Pool with evening lighting") },
    { src: bathroom1, alt: t("Джакузи в люкс-сюите", "Jacuzzi in the suite") },
    { src: bathroom2, alt: t("Вид на виллу и бассейн на закате", "Villa and pool view at sunset") },
    { src: bathroom3, alt: t("Ванная комната с двойной раковиной", "Bathroom with double sink") },
    { src: bbq, alt: t("Спальня с двумя кроватями", "Twin-bed room") },
    { src: extra1, alt: t("Спальня с двуспальной кроватью", "Bedroom with a double bed") },
    { src: extra2, alt: t("Турецкая баня (хамам) с мозаикой", "Turkish hammam with mosaic") },
    { src: extra3, alt: t("Зимний сад с видом на пальмы", "Winter garden with palm views") },
    { src: extra4, alt: t("Большой обеденный стол под навесом", "Large covered dining table") },
    { src: extra5, alt: t("Спальня с выходом к бассейну", "Bedroom opening to the pool") },
    { src: extra6, alt: t("Ванная комната с ванной", "Bathroom with a bathtub") },
    { src: extra7, alt: t("Терраса с джакузи на закате", "Terrace with jacuzzi at sunset") },
    { src: extra8, alt: t("Спальня с рабочей зоной", "Bedroom with a workspace") },
    { src: extra9, alt: t("Бассейн с пальмами вечером", "Pool with palms in the evening") },
  ];

  const detailCards: { title: string; icon: LucideIcon; items: string[] }[] = [
    {
      title: t("Проживание", "Accommodation"),
      icon: Home,
      items: [
        t("Villa Ginevra — 600 м² в престижной Чайофе", "Villa Ginevra — 600 m² in prestigious Chayofa"),
        t("16 спален и 16 ванных комнат", "16 bedrooms and 16 bathrooms"),
        t("Каждому участнику — своя спальня", "A private bedroom for every guest"),
        t("Просторная гостиная с панорамными окнами", "Spacious living room with panoramic windows"),
        t("Полностью оборудованная кухня", "Fully equipped kitchen"),
        t("Кондиционеры, Wi-Fi", "Air conditioning, Wi-Fi"),
        t("Бельё и полотенца включены", "Linens and towels included"),
      ],
    },
    {
      title: t("Бассейн, сад и спа", "Pool, garden & spa"),
      icon: Waves,
      items: [
        t("Подогреваемый бассейн и джакузи", "Heated pool and jacuzzi"),
        t("Частная сауна и турецкая баня", "Private sauna and Turkish hammam"),
        t("Большой сад, открытая и крытая террасы", "Large garden, open and covered terraces"),
        t("Зона барбекю и обеденный стол на улице", "BBQ area and outdoor dining table"),
        t("Шезлонги, лежаки, зонтики, душ у бассейна", "Sunbeds, umbrellas, poolside shower"),
      ],
    },
    {
      title: t("Питание", "Dining"),
      icon: ChefHat,
      items: [
        t("Завтраки, обеды, ужины и общая атмосфера — 3 раза в день", "Breakfast, lunch and dinner — three times a day"),
        t("Персональный повар на вилле", "Private chef at the villa"),
        t("Средиземноморская кухня из свежих продуктов", "Mediterranean cuisine from fresh produce"),
        t("Учитываем аллергии и предпочтения", "Allergies and preferences taken into account"),
        t("Свежие фрукты, соки, снэки — весь день", "Fresh fruit, juices, snacks — all day"),
      ],
    },
    {
      title: t("Локация и удобства", "Location & amenities"),
      icon: MapPin,
      items: [
        t("Тихая Чайофа рядом с Ароной", "Quiet Chayofa next to Arona"),
        t("Вид на океан и горы", "Ocean and mountain views"),
        t("Супермаркет в 160 м, ресторан в 330 м", "Supermarket 160 m away, restaurant 330 m away"),
        t("Пляж Лос-Кристианос — 5,3 км", "Los Cristianos beach — 5.3 km"),
        t("Аэропорт Тенерифе Юг (TFS) — 17 км", "Tenerife South Airport (TFS) — 17 km"),
        t("Бесплатная парковка у виллы", "Free parking at the villa"),
      ],
    },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? villaImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === villaImages.length - 1 ? 0 : c + 1));
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section ref={ref} id="villa" className="bg-cream py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">{t("Проживание и питание", "Stay & dining")}</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-6">
          {t("Вилла у океана", "Oceanfront villa")}
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[700px] mb-14">
          {t(
            "Живем в частной вилле с бассейном, террасой и видом на Атлантику. Это ваш дом на неделю.",
            "We stay in a private villa with a pool, terrace and Atlantic views. Your home for the week."
          )}
        </p>

        <div
          className="reveal relative rounded-lg overflow-hidden mb-10"
          role="region"
          aria-roledescription={t("карусель", "carousel")}
          aria-label={t("Фотографии виллы", "Villa photos")}
        >
          <div className="relative h-[320px] md:h-[500px] touch-pan-y" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {villaImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                aria-hidden={i === current ? undefined : true}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={prev}
              aria-label={t("Предыдущее фото виллы", "Previous villa photo")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t("Следующее фото виллы", "Next villa photo")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {villaImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={t(`Фото ${i + 1} из ${villaImages.length}`, `Photo ${i + 1} of ${villaImages.length}`)}
                  aria-current={i === current ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "bg-gold w-8" : "bg-sand/40 w-2.5"}`}
                />
              ))}
            </div>
          </div>

          <p
            aria-live="polite"
            className="text-[13px] md:text-[14px] text-text-body/75 mt-3 px-1"
          >
            {villaImages[current].alt}
          </p>
        </div>

        <DetailsCarousel detailCards={detailCards} t={t} />

        <div className="reveal card-premium-dark p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Plane size={18} strokeWidth={1.7} />
                </span>{t("Перелёт", "Flights")}
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                {t(
                  "Рейсы из Москвы и Санкт-Петербурга с одной пересадкой (~9 часов). Аэропорт Тенерифе Юг (TFS). Помогаем с выбором оптимальных рейсов и дат.",
                  "Flights from Moscow and St. Petersburg with one stop (~9 hours). Tenerife South Airport (TFS). We help you choose the best routes and dates."
                )}<br /><br />
                {t("(Помогаем с подбором авиабилетов также и из регионов России)", "(We can also help with tickets from other Russian regions.)")}
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={18} strokeWidth={1.7} />
                </span>{t("Виза", "Visa")}
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                {t(
                  "Тенерифе — территория Испании (шенген). Оформляем индивидуальное приглашение от Tenerife Tennis Academy, помогаем с документами, сопровождаем на всех этапах.",
                  "Tenerife is part of Spain (Schengen area). We issue a personal invitation from Tenerife Tennis Academy, help with documents and guide you through every step."
                )}
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <CarFront size={18} strokeWidth={1.7} />
                </span>{t("Трансфер", "Transfer")}
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                {t(
                  "Встречаем в аэропорту, довозим до виллы. Все перемещения по острову на экскурсии — включены. Обратный трансфер в аэропорт тоже.",
                  "We meet you at the airport and drive you to the villa. All on-island transfers for excursions are included, return transfer too."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaSection;
