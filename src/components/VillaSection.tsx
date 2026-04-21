import { useState } from "react";
import { BadgeCheck, CarFront, Check, ChefHat, ChevronLeft, ChevronRight, Home, MapPin, Plane, TreePalm, Waves, type LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import livingRoom from "@/assets/villa-living-room.avif";
import dining from "@/assets/villa-dining.avif";
import terrace from "@/assets/villa-terrace.avif";
import pool from "@/assets/villa-pool.avif";
import bbq from "@/assets/villa-bbq.avif";
import bedroom1 from "@/assets/villa-bedroom-1.avif";
import bedroom2 from "@/assets/villa-bedroom-2.avif";
import bedroom3 from "@/assets/villa-bedroom-3.jpg";
import bedroom4 from "@/assets/villa-bedroom-4.avif";
import bathroom1 from "@/assets/villa-bathroom-1.avif";
import bathroom2 from "@/assets/villa-bathroom-2.avif";
import bathroom3 from "@/assets/villa-bathroom-3.avif";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const villaImages = [
  { src: pool, alt: "Бассейн с подогревом" },
  { src: bbq, alt: "Зона барбекю с бассейном на заднем плане" },
  { src: livingRoom, alt: "Светлая гостиная с панорамными окнами" },
  { src: dining, alt: "Обеденная зона для общих ужинов" },
  { src: terrace, alt: "Терраса для отдыха под солнцем Тенерифе" },
  { src: bedroom1, alt: "Уютная спальня с натуральным светом" },
  { src: bedroom2, alt: "Просторная спальня с видом на сад" },
  { src: bedroom3, alt: "Спальня с мягким светом" },
  { src: bedroom4, alt: "Минималистичная спальня в тёплых тонах" },
  { src: bathroom1, alt: "Современная ванная комната" },
  { src: bathroom2, alt: "Ванная с тропическим душем" },
  { src: bathroom3, alt: "Светлая ванная комната" },
];

const detailCards: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Проживание",
    icon: Home,
    items: [
      "Вилла 650 м² в престижной Чайофе",
      "10 спален, до 16 гостей",
      "Главная вилла, квартира и студия",
      "Прямой выход к бассейну и саду",
      "Просторная гостиная и обеденный стол на 8",
      "Полностью оборудованные кухни",
      "Терраса с видом на океан",
    ],
  },
  {
    title: "Бассейн и сад",
    icon: Waves,
    items: [
      "Бассейн с подогревом 5,6 × 3,9 м",
      "Контролируемый доступ для детей",
      "Огромный сад с пальмами и газоном",
      "Зона барбекю и тенистая столовая",
      "Шезлонги и зона отдыха с видом на море",
    ],
  },
  {
    title: "Питание",
    icon: ChefHat,
    items: [
      "Завтрак, обед и ужин — 3 раза в день",
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
      "5 минут до Лос-Кристианос и Коста-Адехе",
      "Рядом аквапарк Siam Park",
      "Wi-Fi 600 Мбит/с во всех комнатах",
      "Кондиционеры, стиральная машина",
      "Частная парковка на 5 машин",
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
      <CarouselPrevious className="hidden md:flex -left-4 bg-forest/80 text-gold border-gold/20 hover:bg-forest" />
      <CarouselNext className="hidden md:flex -right-4 bg-forest/80 text-gold border-gold/20 hover:bg-forest" />
    </Carousel>
  </div>
);

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
          Живем в частной вилле с бассейном, террасой и видом на Атлантику. Это ваш дом на неделю.
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
                Рейсы из Москвы и Санкт-Петербурга с одной пересадкой (~9 часов). Аэропорт Тенерифе Юг (TFS). Помогаем с выбором оптимальных рейсов и дат.<br /><br />(Помогаем с подбором авиабилетов и из регионов России)
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold text-gold mb-3 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={18} strokeWidth={1.7} />
                </span>Виза
              </h3>
              <p className="text-[16px] text-sand/80 leading-[1.75]">
                Тенерифе — территория Испании (шенген). Оформляем приглашение от Tenerife Tennis Academy, помогаем с документами., сопровождаем на всех этапах.
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
