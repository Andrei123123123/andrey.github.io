import SectionTag from "./SectionTag";
import { Check } from "lucide-react";
import visaImg from "@/assets/visa-support.jpg";
import allInclusiveImg from "@/assets/all-inclusive.jpg";
import communityImg from "@/assets/community.jpg";

const advantages = [
  {
    num: "01",
    id: "visa",
    title: "Визовая поддержка",
    subtitle: "Пригласительное письмо от академии",
    description:
      "Tenerife Tennis Academy оформляет официальное спортивное приглашение для шенгенской визы. Бесплатно для каждого участника. По опыту — одобрение почти 100%. Мы сопровождаем весь процесс от подачи до получения.",
    features: [
      "Официальное приглашение от Tenerife Tennis Academy",
      "Помощь со сбором документов",
      "Сопровождение до получения визы",
      "Бесплатно для участников кемпа",
    ],
    image: visaImg,
  },
  {
    num: "02",
    id: "tour",
    title: "Полный тур",
    subtitle: "Перелёт · Проживание · Питание",
    description:
      "Всё включено — от билетов до питания. Помогаем подобрать рейсы, бронируем комфортное жильё рядом с академией и организуем 3-разовое питание на весь период. Ты просто приезжаешь.",
    features: [
      "Помощь с подбором и бронированием авиабилетов",
      "Комфортное жильё на 7 ночей рядом с кортами",
      "Завтраки, обеды и ужины — 3 раза в день",
      "Трансферы аэропорт — жильё — корты",
    ],
    image: allInclusiveImg,
  },
  {
    num: "03",
    id: "community",
    title: "Community",
    subtitle: "Больше, чем просто теннис",
    description:
      "Камерная группа из 14 человек, где каждый находит единомышленников. Совместные тренировки, приключения на острове и вечера формируют связи, которые остаются надолго после кемпа.",
    features: [
      "Малая группа — максимум 14 участников",
      "Совместные активности каждый день",
      "Нетворкинг с интересными людьми",
      "Закрытое сообщество после кемпа",
    ],
    image: communityImg,
  },
];

const Advantages = () => {
  return (
    <section className="bg-sand-light py-[120px] px-8 lg:px-16" id="advantages">
      <SectionTag>Наши преимущества</SectionTag>
      <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
        Больше, чем кемп.
        <br />
        <em className="italic text-gold">Полный сервис.</em>
      </h2>

      <div className="flex flex-col gap-[2px]">
        {advantages.map((item, i) => (
          <div
            key={item.num}
            id={item.id}
            className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-0 bg-forest overflow-hidden group transition-transform duration-300 scroll-mt-24 ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Image side */}
            <div
              className={`relative h-64 lg:h-auto overflow-hidden ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest/30" />
              <span className="absolute top-8 left-8 font-display text-[80px] font-light leading-none text-gold/20">
                {item.num}
              </span>
            </div>

            {/* Content side */}
            <div
              className={`p-10 lg:p-14 flex flex-col justify-center ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <p className="text-[12px] tracking-[3px] uppercase text-gold/60 mb-3">
                {item.subtitle}
              </p>
              <h3 className="font-display text-[28px] lg:text-[36px] font-light text-sand-light mb-5 leading-[1.2]">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[1.75] text-sand/70 font-light mb-8 max-w-[420px]">
                {item.description}
              </p>
              <ul className="flex flex-col gap-3">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="text-[16px] text-sand/70 flex items-start gap-3"
                  >
                    <Check size={16} strokeWidth={1.7} className="text-gold flex-shrink-0 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
