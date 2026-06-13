import { Check, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import vizagoLogo from "@/assets/vizago-logo.jpeg";
import ttaLogo from "@/assets/tta-logo.png";
import andreyPhoto from "@/assets/team/andrey-telegram.jpg";
import ivanPhoto from "@/assets/team/ivan-telegram.jpg";

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="trainer">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-medium">Команда</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-6">
          О нас
        </h2>
        <p className="reveal max-w-[760px] mb-16 rounded-r-xl border-l-2 border-gold bg-card/45 py-5 pl-6 pr-5 text-[19px] lg:text-[21px] text-forest/85 leading-[1.75] shadow-sm">
          Идея простая: взять всё лучшее из отпуска и добавить теннис. Или наоборот — взять теннис и добавить океан, вулкан, яхту и повара, который готовит национальные блюда каждый день. Мы собрали неделю, в которую хотели бы поехать сами. Канарские острова, октябрь, четырнадцать мест и вилла у моря.
        </p>

        {/* Organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              name: "Подковыркин Андрей",
              link: "https://t.me/oceaninthesky",
              role: "Организатор",
              desc: "Теннисист-любитель, который однажды решил, что играть на корте на канарских островах с видом на вулкан лучше, чем на корте у МКАДа. Так появился этот ретрит.",
              responsibilities: [
                "Вилла, билеты, визы",
                "Финансы и партнёры",
                "Подготовка ретрита до прилёта",
              ],
              photo: andreyPhoto,
            },
            {
              name: "Еманаков Иван",
              link: "https://t.me/Solonik3",
              role: "Организатор",
              desc: "Отвечает за всё, что происходит после вашего прилёта. Если что-то пойдёт не по плану, он уже знает, что делать.",
              responsibilities: [
                "Яхта, Тейде, сёрфинг",
                "Трансфер и расписание активностей",
                "Решение любых вопросов на месте",
              ],
              photo: ivanPhoto,
            },
          ].map((person) => (
            <div key={person.name} className="reveal card-premium overflow-hidden flex flex-col">
              {/* Photo zone — full-width portrait */}
              <div className="relative w-full h-[360px] lg:h-[420px] overflow-hidden bg-sand-light">
                <img
                  src={person.photo}
                  alt={`${person.name} — ${person.role}, Tennerife Tennis Retreat`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/15 to-transparent pointer-events-none" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/40 bg-card/90 backdrop-blur-sm text-[11px] tracking-[2px] uppercase text-gold font-semibold">
                  {person.role}
                </span>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-[24px] font-medium text-forest mb-3">
                  {person.name}
                </h3>
                <p className="text-[15.5px] text-text-body leading-[1.7] mb-5">{person.desc}</p>

                <div className="grid grid-cols-1 gap-2.5 mb-6 pt-5 border-t border-border">
                  {person.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-1" strokeWidth={2.2} />
                      <span className="text-[14.5px] text-text-body leading-[1.5]">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/50 text-forest text-[14px] font-semibold tracking-[0.5px] hover:bg-gold hover:text-forest hover:border-gold transition-all no-underline"
                >
                  <Send size={15} strokeWidth={2} />
                  Написать в Telegram
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-8 font-medium">Партнёры</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vizago */}
          <div className="reveal card-premium card-premium-accent p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <a href="https://vizago.ru/" target="_blank" rel="noopener noreferrer" className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg border border-gold/20 flex items-center justify-center overflow-hidden p-3 flex-shrink-0 transition-shadow hover:shadow-xl">
                <img src={vizagoLogo} alt="Vizago" className="w-full h-full object-contain" />
              </a>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">
                  <a href="https://vizago.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
                    ВизаGO
                  </a>
                </h3>
                <p className="text-[14px] text-text-muted-custom">Визовый оператор · Турагент&nbsp;</p>
              </div>
            </div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              ВизаGO — визовый оператор и official турагент ретрита. Более 2500 успешно оформленных шенгенских виз. Берёт на себя всё: приглашение от академии, подготовка документов, запись в консульство, подбор авиабилетов. Персональный менеджер от заявки до возвращения домой.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-border">
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">2500+</p>
                <p className="text-[12px] text-text-muted-custom mt-0.5">виз оформлено</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">98%</p>
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
          <div className="reveal card-premium card-premium-accent p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <a href="https://tenerifetennisacademy.com/" target="_blank" rel="noopener noreferrer" className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg border border-gold/20 flex items-center justify-center overflow-hidden p-3 flex-shrink-0 transition-shadow hover:shadow-xl">
                <img src={ttaLogo} alt="Tenerife Tennis Academy" className="w-full h-full object-contain" />
              </a>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">
                  <a href="https://tenerifetennisacademy.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
                    Tenerife Tennis Academy
                  </a>
                </h3>
                <p className="text-[14px] text-text-muted-custom">Теннисная академия · Спортивный партнёр</p>
              </div>
            </div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Tenerife Tennis Academy — ведущая международная теннисная академия на юге Тенерифе, работающая с 2014 года. Профессиональные корты с покрытием хард и грунт, корты для падела, тренеры с опытом подготовки игроков к NCAA и профессиональным турнирам. Тренировки проходят на открытом воздухе 365 дней в году — лучшие климатические условия для тенниса в Европе.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-6 py-4 border-y border-border">
              <div className="text-center">
                <p className="font-display text-[22px] font-semibold text-forest">15+</p>
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
                "Профессиональные тренеры тенниса и падела",
                "Программы для любого уровня — от первой подачи до подготовки к турнирам",
                "Индивидуальное спортивное приглашение для оформления шенгенской визы",
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
