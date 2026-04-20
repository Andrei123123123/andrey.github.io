import { useScrollReveal } from "@/hooks/useScrollReveal";
import vizagoLogo from "@/assets/vizago-logo.jpeg";
import ttaLogo from "@/assets/tta-logo.png";

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="trainer">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-medium">Команда</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-6">
          С кем мы работаем
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.7] max-w-[600px] mb-16">
          Два организатора и два партнёра, которые обеспечивают всё — от визы и перелётов до профессиональных тренировок на острове.
        </p>

        {/* Organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              name: "Подковыркин Андрей",
              link: "https://t.me/oceaninthesky",
              role: "Основатель проекта",
              desc: "Идейный вдохновитель кемпа. Организует все процессы: от виллы и перелётов до визовой поддержки. Живёт между Москвой и Тенерифе.",
              placeholder: "Фото организатора",
            },
            {
              name: "Еманаков Иван",
              link: "https://t.me/oceaninthesky",
              role: "Со-организатор",
              desc: "Отвечает за программу активностей, экскурсии и логистику на острове. Курирует группу на протяжении всего кемпа.",
              placeholder: "Фото со-организатора",
            },
          ].map((person) => (
            <div key={person.name} className="reveal bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-forest/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-forest/15 border-2 border-gold/30 mx-auto mb-4 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <p className="text-[13px] tracking-[2px] uppercase text-text-muted-custom">{person.placeholder}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-[24px] font-medium text-forest mb-1">
                  <a href={person.link} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
                    {person.name}
                  </a>
                </h3>
                <p className="text-[13px] tracking-[2px] uppercase text-gold mb-4 font-medium">{person.role}</p>
                <p className="text-[16px] text-text-body leading-[1.7]">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-8 font-medium">Партнёры</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vizago */}
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg border border-gold/20 flex items-center justify-center overflow-hidden p-3 flex-shrink-0">
                <img src={vizagoLogo} alt="Vizago" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">
                  <a href="https://vizago.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
                    ВизаGO
                  </a>
                </h3>
                <p className="text-[14px] text-text-muted-custom">Визовый оператор · Турагент кемпа</p>
              </div>
            </div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              ВизаGO — визовый оператор и официальный турагент кемпа. Более 500 успешно оформленных шенгенских виз. Берёт на себя всё: приглашение от академии, подготовка документов, запись в консульство, подбор авиабилетов. Персональный менеджер от заявки до возвращения домой.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-border">
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">500+</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">виз оформлено</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">97%</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">одобрение шенгена</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">24/7</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">на связи в Telegram</p>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {[
                "Шенгенская виза через приглашение от академии",
                "Полный пакет документов и запись в консульство",
                "Подбор авиабилетов по лучшей цене",
                "Персональный менеджер на всём пути",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-text-body leading-[1.5]">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-4">
              <a
                href="https://vizago.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-[14px] font-semibold tracking-[1px] hover:text-gold-light transition-colors no-underline"
              >
                vizago.ru →
              </a>
              <span className="text-[13px] text-text-muted-custom border border-border rounded-full px-3 py-1">Официальный партнёр</span>
            </div>
          </div>

          {/* Tenerife Tennis Academy */}
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg border border-gold/20 flex items-center justify-center overflow-hidden p-3 flex-shrink-0">
                <img src={ttaLogo} alt="Tenerife Tennis Academy" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">
                  <a href="https://tenerifetennisacademy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
                    Tenerife Tennis Academy
                  </a>
                </h3>
                <p className="text-[14px] text-text-muted-custom">Теннисная академия · Спортивный партнёр кемпа</p>
              </div>
            </div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Tenerife Tennis Academy — ведущая международная теннисная академия на юге Тенерифе, работающая с 2014 года. Профессиональные корты с покрытием хард и грунт, корты для падела, тренеры с опытом подготовки игроков к NCAA и профессиональным турнирам. Тренировки проходят на открытом воздухе 365 дней в году — лучшие климатические условия для тенниса в Европе.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-6 py-4 border-y border-border">
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">10+</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">лет работы</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">10</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">кортов теннис + падел</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">5</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">языков тренеров</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">365</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">дней в году на воздухе</p>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                "Теннис и падел — профессиональные корты хард и грунт",
                "Русскоязычный тренер в составе команды",
                "Программы для любого уровня — от первой подачи до подготовки к турнирам",
                "Спортивное приглашение для оформления шенгенской визы",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-text-body leading-[1.5]">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4">
              <a
                href="https://tenerifetennisacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-[14px] font-semibold tracking-[1px] hover:text-gold-light transition-colors no-underline"
              >
                tenerifetennisacademy.com →
              </a>
              <span className="text-[12px] sm:text-[13px] text-text-muted-custom border border-border rounded-full px-3 py-1 whitespace-nowrap">Официальный партнёр</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
