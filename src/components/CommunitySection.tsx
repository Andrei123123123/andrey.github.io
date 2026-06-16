import { useState } from "react";
import { Users, Sparkles, MessageCircle, Wine, Calendar, Heart } from "lucide-react";
import SectionTag from "./SectionTag";
import { useT } from "@/i18n/LanguageContext";

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const CommunitySection = () => {
  const [activeActivity, setActiveActivity] = useState(0);
  const t = useT();

  const formatItems = [
    {
      icon: Users,
      title: t("Камерная группа", "Intimate group"),
      text: t("Четырнадцать участников. Все на одной вилле, на одних кортах, за одним столом.", "Fourteen people. One villa, the same courts, the same table."),
    },
    {
      icon: Heart,
      title: t("Без формальностей", "No formalities"),
      text: t("Без лекций и тимбилдингов. Естественные знакомства через спорт, океан и совместные ужины.", "No lectures, no team-building. Real connections through sport, ocean and shared dinners."),
    },
    {
      icon: MessageCircle,
      title: t("Чат до и после", "Chat before and after"),
      text: t("За месяц до старта собираем общий Telegram-чат. После недели связь остаётся.", "A shared Telegram chat opens a month before. After the week, the connection stays."),
    },
  ];

  const activities = [
    {
      icon: Calendar,
      label: t("Совместные тренировки каждый вечер", "Group training every evening"),
      description: t(
        "Шесть вечерних тренировок по 1,5 часа на профессиональных кортах Tenerife Tennis Academy. Делимся на группы по уровню — комфортно и новичкам, и опытным.",
        "Six 1.5-hour evening sessions on the professional courts of Tenerife Tennis Academy. Split by level — comfortable for beginners and experienced players alike."
      ),
    },
    {
      icon: Wine,
      label: t("Ужины с шеф-поваром на вилле", "Chef dinners at the villa"),
      description: t(
        "Каждый вечер личный шеф готовит ужин из локальных продуктов — испанская и канарская кухня. Длинный стол, вино, разговоры до ночи.",
        "Every evening a private chef cooks dinner from local produce — Spanish and Canarian cuisine. A long table, wine, conversations late into the night."
      ),
    },
    {
      icon: Sparkles,
      label: t("Яхта, вулкан Тейде, сёрфинг", "Yacht, Mount Teide, surfing"),
      description: t(
        "Морская прогулка к скалам Los Gigantes с дельфинами, подъём на высшую точку Испании 3 718 м и урок сёрфинга в Атлантике — для любого уровня.",
        "Sailing to Los Gigantes cliffs with dolphins, climb to Spain's highest point at 3,718 m and a surfing lesson in the Atlantic — for any level."
      ),
    },
    {
      icon: Users,
      label: t("Финал на винодельне Bodegas Reverón", "Finale at Bodegas Reverón winery"),
      description: t(
        "В последний день — дружеский турнир, награждение и закрытый ужин на винодельне в горах юга Тенерифе с дегустацией вин с вулканических террас.",
        "On the final day — a friendly tournament, awards and a private dinner at a winery in the southern Tenerife mountains, with a tasting of wines from volcanic terraces."
      ),
    },
  ];

  return (
    <section className="bg-cream py-24 lg:py-32 px-6 lg:px-16" id="community">
      <div className="max-w-[1200px] mx-auto">
        <SectionTag>{t("Окружение", "Community")}</SectionTag>
        <h2 className="reveal font-display font-semibold text-[clamp(36px,4.5vw,56px)] text-forest leading-[1.1] max-w-[760px] mb-6">
          {t("Приезжаете одни.", "Arrive alone.")} <em className="italic text-gold font-light">{t("Уезжаете в кругу.", "Leave in a circle.")}</em>
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.75] max-w-[680px] mb-16">
          {t(
            "Это не только теннис. Это неделя с людьми, которые разделяют тот же ритм: активный отдых, спорт, океан и хорошая компания за ужином.",
            "It's not only tennis. It's a week with people who share the same rhythm: active days, sport, ocean and good company at dinner."
          )}
        </p>

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

        <div className="reveal card-premium-dark rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
            <div className="p-10 lg:p-14">
              <p className="text-[12px] tracking-[3px] uppercase text-gold/70 mb-4">
                {t("Что нас объединяет", "What brings us together")}
              </p>
              <h3 className="font-display text-[28px] lg:text-[34px] font-light text-sand-light leading-[1.2] mb-8">
                {t("Активности, после которых", "Experiences that")} <em className="italic text-gold">{t("остаются истории", "become stories")}</em>
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
                {t("Общий чат открываем за месяц до прилёта.", "The shared chat opens a month before arrival.")}
              </p>
              <a
                href="https://t.me/tennis_tenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 py-4 px-6 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase no-underline rounded-md hover:bg-gold/90 transition-all duration-300"
              >
                <TelegramIcon size={18} />
                {t("Присоединиться", "Join")}
              </a>
              <p className="text-[13px] text-sand/50 mt-4 text-center">
                {t("@tennis_tenerife · ответим лично", "@tennis_tenerife · personal reply")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
