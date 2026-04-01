import SectionTag from "./SectionTag";
import { UserCheck, Globe, Sun, TrendingUp, MapPin } from "lucide-react";

const usps = [
  {
    icon: <UserCheck size={28} />,
    title: "Индивидуальный подход",
    text: "Группы по уровню, персональный разбор ошибок, видеоанализ техники для каждого участника.",
  },
  {
    icon: <Globe size={28} />,
    title: "Русскоязычный тренер",
    text: "Никакого языкового барьера. Тренер живёт на Тенерифе и знает остров как свой двор.",
  },
  {
    icon: <Sun size={28} />,
    title: "Круглый год 25°C",
    text: "Тенерифе — вечная весна. Комфортный климат для тренировок без жары и дождей.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Быстрый прогресс",
    text: "12 часов на корте за неделю + видеоразбор. Результат виден уже на 3-й день.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Удобные локации",
    text: "Профессиональные хардовые корты с освещением. Вилла и пляж в 10 минутах.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="why-us">
      <SectionTag>Почему мы</SectionTag>
      <h2 className="font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12 max-w-[560px]">
        Не просто кемп.<br />
        <em className="italic text-gold">Система, которая работает.</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px]">
        {usps.map((usp) => (
          <div
            key={usp.title}
            className="reveal bg-card p-8 group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
            <div className="text-gold mb-5">{usp.icon}</div>
            <h3 className="font-display text-[18px] font-light text-forest mb-3 leading-[1.3]">{usp.title}</h3>
            <p className="text-[13px] text-text-muted-custom leading-[1.7] font-light">{usp.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
