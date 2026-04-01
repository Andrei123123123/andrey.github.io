import SectionTag from "./SectionTag";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Beginner Start",
    subtitle: "Для тех, кто начинает с нуля",
    description: "Базовые удары, хватка, стойка. За неделю — уверенная игра на любительском уровне.",
    features: ["6 групповых тренировок", "Видеоразбор техники", "Ракетка предоставляется", "Группа по уровню"],
    highlight: false,
  },
  {
    name: "Tennis Vacation",
    subtitle: "Теннис + отдых на острове",
    description: "Идеальный баланс тренировок и приключений. Тейде, яхта, сёрфинг — и корт каждый вечер.",
    features: ["6 тренировок теннис/падел", "Все экскурсии включены", "Турнир и банкет в замке", "Трансферы по острову"],
    highlight: true,
  },
  {
    name: "Intensive Week",
    subtitle: "Максимум корта за 7 дней",
    description: "Усиленная программа для тех, кто хочет серьёзного прогресса. Дополнительные сессии и индивидуальный разбор.",
    features: ["6 групповых + 2 индивидуальных", "Расширенный видеоразбор", "Персональный план развития", "Работа над слабыми местами"],
    highlight: false,
  },
  {
    name: "Kids Training",
    subtitle: "Для юных теннисистов от 7 лет",
    description: "Игровой формат, безопасная нагрузка, любовь к спорту. Ребёнок получит навыки и новых друзей.",
    features: ["Адаптированные тренировки", "Игровая форма обучения", "Безопасный корт", "Тренер с опытом работы с детьми"],
    highlight: false,
  },
];

const Packages = () => {
  return (
    <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="packages">
      <SectionTag>Форматы участия</SectionTag>
      <h2 className="font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-4 max-w-[560px]">
        Выберите свой формат<br />
        <em className="italic text-gold">тренировок в кемпе.</em>
      </h2>
      <p className="reveal text-[15px] text-text-body leading-[1.6] font-light mb-12 max-w-[520px]">
        Все форматы входят в спортивный пакет (€900). Выберите акцент — мы подстроим программу.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`reveal flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              pkg.highlight
                ? "bg-forest text-sand-light"
                : "bg-card"
            }`}
          >
            {pkg.highlight && (
              <span className="text-[9px] tracking-[3px] uppercase text-gold mb-4 font-medium">Популярный выбор</span>
            )}
            <h3 className={`font-display text-[22px] font-light mb-1 ${pkg.highlight ? "text-sand-light" : "text-forest"}`}>
              {pkg.name}
            </h3>
            <p className={`text-[11px] tracking-[1px] uppercase mb-4 ${pkg.highlight ? "text-gold" : "text-gold"}`}>
              {pkg.subtitle}
            </p>
            <p className={`text-[13px] leading-[1.7] font-light mb-6 flex-1 ${pkg.highlight ? "text-sand/60" : "text-text-body"}`}>
              {pkg.description}
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className={`text-[13px] flex gap-2.5 items-start ${pkg.highlight ? "text-sand/55" : "text-text-body"}`}>
                  <Check size={13} className="text-gold flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`py-3.5 text-center font-body text-[10px] font-medium tracking-[3px] uppercase no-underline transition-all duration-300 block ${
                pkg.highlight
                  ? "bg-gold text-forest hover:bg-gold-light"
                  : "border border-gold/30 text-gold hover:bg-gold/5"
              }`}
            >
              Записаться <ArrowRight size={12} className="inline ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
