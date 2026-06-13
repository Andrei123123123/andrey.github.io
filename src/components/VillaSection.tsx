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

const villaImages = [
  { src: terrace, alt: "Бассейн виллы на закате" },
  { src: livingRoom, alt: "Светлая гостиная с выходом на террасу" },
  { src: pool, alt: "Полностью оборудованная кухня" },
  { src: dining, alt: "Лаунж-зона на террасе на закате" },
  { src: bedroom1, alt: "Уютная спальня с деревянным изголовьем" },
  { src: bedroom2, alt: "Шезлонги на террасе у бассейна" },
  { src: bedroom4, alt: "Бассейн с вечерней подсветкой" },
  { src: bathroom1, alt: "Джакузи в люкс-сюите" },
  { src: bathroom2, alt: "Вид на виллу и бассейн на закате" },
  { src: bathroom3, alt: "Ванная комната с двойной раковиной" },
  { src: bbq, alt: "Спальня с двумя кроватями" },
  { src: extra1, alt: "Спальня с двуспальной кроватью" },
  { src: extra2, alt: "Турецкая баня (хамам) с мозаикой" },
  { src: extra3, alt: "Зимний сад с видом на пальмы" },
  { src: extra4, alt: "Большой обеденный стол под навесом" },
  { src: extra5, alt: "Спальня с выходом к бассейну" },
  { src: extra6, alt: "Ванная комната с ванной" },
  { src: extra7, alt: "Терраса с джакузи на закате" },
  { src: extra8, alt: "Спальня с рабочей зоной" },
  { src: extra9, alt: "Бассейн с пальмами вечером" },
];

const detailCards: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Проживание",
    icon: Home,
    items: [
      "Villa Ginevra — 600 м² в престижной Чайофе",
      "16 спален и 16 ванных комнат",
      "Каждому участнику — своя спальня",
      "Просторная гостиная с панорамными окнами",
      "Полностью оборудованная кухня",
      "Кондиционеры, Wi-Fi",
      "Бельё и полотенца включены",
    ],
  },
  {
    title: "Бассейн, сад и спа",
    icon: Waves,
    items: [
      "Подогреваемый бассейн и джакузи",
      "Частная сауна и турецкая баня",
      "Большой сад, открытая и крытая террасы",
      "Зона барбекю и обеденный стол на улице",
      "Шезлонги, лежаки, зонтики, душ у бассейна",
    ],
  },
  {
    title: "Питание",
    icon: ChefHat,
    items: [
      "Завтраки, обеды, ужины и общая атмосфера — 3 раза в день",
      "Персональный повар на вилле",
      "Средиземноморская кухня из свежих продуктов",
      "Учитываем аллергии и предпочтения",
      "Свежие фрукты, соки, снэки — весь день",
    ],
  },
  {
    title: "Локация и удобства",
    icon: MapPin,
    items: [
      "Тихая Чайофа рядом с Ароной",
      "Вид на океан и горы",
      "Супермаркет в 160 м, ресторан в 330 м",
      "Пляж Лос-Кристианос — 5,3 км",
      "Аэропорт Тенерифе Юг (TFS) — 17 км",
      "Бесплатная парковка у виллы",
    ],
  },
];

const DetailsCarousel = () => (
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
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-semibold">Проживание и питание</p>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] mb-6">
          Вилла у океана
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[700px] mb-14">
          Живем в частной вилле с бассейном, террасой и видом на Атлантику. Это ваш дом на неделю.
        </p>

        {/* Villa photo carousel */}
        <div
          className="reveal relative rounded-lg overflow-hidden mb-10"
          role="region"
          aria-roledescription="карусель"
          aria-label="Фотографии виллы"
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
              aria-label="Предыдущее фото виллы"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-forest/80 transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующее фото виллы"
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
                  aria-label={`Фото ${i + 1} из ${villaImages.length}`}
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

        {/* Details carousel */}
        <DetailsCarousel />


        {/* Flight info */}
        <div className="reveal card-premium-dark p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Plane size={18} strokeWidth={1.7} />
                </span>Перелёт
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Рейсы из Москвы и Санкт-Петербурга с одной пересадкой (~9 часов). Аэропорт Тенерифе Юг (TFS). Помогаем с выбором оптимальных рейсов и дат.<br /><br />(Помогаем с подбором авиабилетов также и из регионов России)
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={18} strokeWidth={1.7} />
                </span>Виза
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Тенерифе — территория Испании (шенген). Оформляем индивидуальное приглашение от Tenerife Tennis Academy, помогаем с документами, сопровождаем на всех этапах.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <CarFront size={18} strokeWidth={1.7} />
                </span>Трансфер
              </h3>
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
