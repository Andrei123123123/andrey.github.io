import { useState } from "react";
import { Users, Sparkles, MessageCircle, Wine, Calendar, Heart } from "lucide-react";
import SectionTag from "./SectionTag";

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const formatItems = [
  {
    icon: Users,
    title: "Камерная группа",
    text: "Четырнадцать участников. Все на одной вилле, на одних кортах, за одним столом.",
  },
  {
    icon: Heart,
    title: "Без формальностей",
    text: "Без лекций и тимбилдингов. Естественные знакомства через спорт, океан и совместные ужины.",
  },
  {
    icon: MessageCircle,
    title: "Чат до и после",
    text: "За месяц до старта собираем общий Telegram-чат. После недели связь остаётся.",
  },
];

const activities = [
  {
    icon: Calendar,
    label: "Совместные тренировки каждый вечер",
    description: "Шесть вечерних тренировок по 1,5 часа на профессиональных кортах Tenerife Tennis Academy. Делимся на группы по уровню — комфортно и новичкам, и опытным.",
  },
  {
    icon: Wine,
    label: "Ужины с шеф-поваром на вилле",
    description: "Каждый вечер личный шеф готовит ужин из локальных продуктов — испанская и канарская кухня. Длинный стол, вино, разговоры до ночи.",
  },
  {
    icon: Sparkles,
    label: "Яхта, вулкан Тейде, сёрфинг",
    description: "Морская прогулка к скалам Los Gigantes с дельфинами, подъём на высшую точку Испании 3 718 м и урок сёрфинга в Атлантике — для любого уровня.",
  },
  {
    icon: Users,
    label: "Финал на винодельне Bodegas Reverón",
    description: "В последний день — дружеский турнир, награждение и закрытый ужин на винодельне в горах юга Тенерифе с дегустацией вин с вулканических террас.",
  },
];

const CommunitySection = () => {
  const [activeActivity, setActiveActivity] = useState(0);
  return (
    <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="community">
      <div className="max-w-[1200px] mx-auto">
        <SectionTag>Окружение</SectionTag>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] max-w-[760px] mb-6">
          Приезжаете одни. <em className="italic text-gold font-light">Уезжаете в кругу.</em>
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[680px] mb-16">
          Это не только теннис. Это неделя с людьми, которые разделяют тот же ритм:
          активный отдых, спорт, океан и хорошая компания за ужином.
        </p>

        {/* Format cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {formatItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal card-premium p-8 lg:p-10">
              <div className="w-12 h-12 rounded-full border border-gold/25 bg-gold/10 text-gold flex items-center justify-center mb-6">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-[24px] font-semibold text-forest leading-[1.25] mb-3">
                {title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-text-body">{text}</p>
            </div>
          ))}
        </div>

        {/* Activities + CTA */}
        <div className="reveal card-premium-dark rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
            <div className="p-10 lg:p-14">
              <p className="text-[12px] tracking-[3px] uppercase text-gold/70 mb-4">
                Что нас объединяет
              </p>
              <h3 className="font-display text-[28px] lg:text-[34px] font-light text-sand-light leading-[1.2] mb-8">
                Активности, после которых <em className="italic text-gold">остаются истории</em>
              </h3>
              <ul className="flex flex-col gap-2">
                {activities.map(({ icon: Icon, label }, i) => {
                  const isActive = activeActivity === i;
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveActivity(i)}
                        onFocus={() => setActiveActivity(i)}
                        onClick={() => setActiveActivity(i)}
                        className={`w-full flex items-center gap-4 text-left text-[16px] rounded-lg px-3 py-2.5 -mx-3 transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-gold/10 text-sand-light"
                            : "text-sand/70 hover:text-sand-light hover:bg-gold/5"
                        }`}
                      >
                        <span
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-gold text-forest border border-gold"
                              : "border border-gold/25 bg-gold/10 text-gold"
                          }`}
                        >
                          <Icon size={16} strokeWidth={1.7} />
                        </span>
                        <span>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div
                key={activeActivity}
                className="mt-6 pt-6 border-t border-gold/15 text-[15px] leading-[1.7] text-sand/75 animate-fade-in"
              >
                {activities[activeActivity].description}
              </div>
            </div>

            <div className="bg-forest/40 p-10 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gold/15">
              <p className="font-display text-[22px] lg:text-[26px] font-light text-sand-light leading-[1.35] mb-6">
                Общий чат открываем за месяц до прилёта.
              </p>
              <a
                href="https://t.me/tennis_tenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 py-4 px-6 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline rounded-md hover:bg-gold/90 transition-all duration-300"
              >
                <TelegramIcon size={18} />
                Присоединиться
              </a>
              <p className="text-[13px] text-sand/50 mt-4 text-center">
                @tennis_tenerife · ответим лично
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
