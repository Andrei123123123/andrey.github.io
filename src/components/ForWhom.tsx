import { useState } from "react";
import SectionTag from "./SectionTag";
import { User, Users, Baby, Target } from "lucide-react";

const cards = [
  {
    icon: <User size={28} />,
    title: "Новички",
    short: "Никогда не играли? Идеально.",
    description:
      "Научим правильной хватке, стойке и базовым ударам. За неделю вы будете уверенно держать ракетку и играть первые розыгрыши. Тренер адаптирует нагрузку под каждого.",
  },
  {
    icon: <Users size={28} />,
    title: "Любители",
    short: "Играете, но хотите расти.",
    description:
      "Разберём ошибки, поставим технику ударов, подачу и приём. Видеоразбор покажет прогресс. Вы уедете с чётким планом развития.",
  },
  {
    icon: <Baby size={28} />,
    title: "Дети",
    short: "Занятия для юных игроков.",
    description:
      "Принимаем детей от 7 лет. Игровая форма тренировки, адаптированные упражнения, безопасный корт. Ребёнок влюбится в теннис.",
  },
  {
    icon: <Target size={28} />,
    title: "Индивидуально",
    short: "Максимум внимания тренера.",
    description:
      "Персональная работа над вашими слабыми местами. Подходит для тех, кто хочет максимального прогресса за ограниченное время.",
  },
];

const ForWhom = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-cream py-20 lg:py-28 px-6 lg:px-16" id="for-whom">
      <SectionTag>Для кого</SectionTag>
      <h2 className="font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-4 max-w-[560px]">
        Подходит каждому,<br />
        <em className="italic text-gold">кто хочет на корт.</em>
      </h2>
      <p className="reveal text-[15px] text-text-body leading-[1.6] font-light mb-12 max-w-[520px]">
        Не важно, держали ли вы ракетку раньше. Тренер выстроит программу под ваш уровень и цели.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {cards.map((card, i) => {
          const isOpen = expanded === i;
          return (
            <div
              key={card.title}
              className="reveal group bg-card border border-border hover:border-gold/40 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              onClick={() => setExpanded(isOpen ? null : i)}
            >
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <div className="text-gold mb-5">{card.icon}</div>
              <h3 className="font-display text-[22px] font-light text-forest mb-2">{card.title}</h3>
              <p className="text-[13px] text-text-muted-custom font-light leading-[1.6]">{card.short}</p>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: isOpen ? "200px" : "0", marginTop: isOpen ? "12px" : "0" }}
              >
                <p className="text-[13px] text-text-body leading-[1.7] font-light">{card.description}</p>
              </div>
              <span className="mt-4 inline-block text-[10px] tracking-[2px] uppercase text-gold">
                {isOpen ? "Свернуть" : "Подробнее"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ForWhom;
