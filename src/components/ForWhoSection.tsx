import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    emoji: "🎾",
    title: "Дети 6–12 лет",
    subtitle: "Первые шаги в теннисе в игровой форме",
    items: [
      "Игровой подход: учимся через веселье и соревнования",
      "Группы до 4 детей на тренера — каждый под присмотром",
      "Безопасные корты с мягким покрытием",
      "Развитие координации, ловкости и командного духа",
    ],
    footer: "Подходит: новичкам и тем, кто уже немного играет",
  },
  {
    emoji: "🏆",
    title: "Подростки 13–16 лет",
    subtitle: "Серьёзная подготовка для тех, кто хочет расти в рейтинге",
    items: [
      "До 6 часов тенниса в день: техника, тактика, физподготовка",
      "Видеоразбор ударов с тренером",
      "Товарищеские матчи и мини-турниры внутри кемпа",
      "Психология победителя: работа с концентрацией и давлением",
    ],
    footer: "Подходит: любители с опытом и те, кто участвует в турнирах",
  },
  {
    emoji: "🌴",
    title: "Взрослые игроки (18+)",
    subtitle: "Теннисный отдых без компромиссов: спорт + Тенерифе",
    items: [
      "Индивидуальные тренировки или малые группы (2–4 чел.)",
      "Разбор вашей игры и составление плана развития",
      "Вилла с бассейном, питание, трансфер — всё включено",
      "Падел: отдельная программа для начинающих и опытных",
    ],
    footer: "Подходит: от новичка до игрока с рейтингом НТРП 4.5+",
  },
];

const ForWhoSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="for-who">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-medium">Для кого</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-14">
          Кому подходит кемп?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="reveal bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <span className="text-[36px] mb-4">{card.emoji}</span>
              <h3 className="font-display text-[22px] font-semibold text-forest mb-1">{card.title}</h3>
              <p className="text-[14px] text-text-muted-custom italic mb-5">{card.subtitle}</p>

              <ul className="flex flex-col gap-3 flex-1 mb-6">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[14px] text-text-body leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[13px] text-text-muted-custom font-medium border-t border-border pt-4 mt-auto">
                {card.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
