import { useScrollReveal } from "@/hooks/useScrollReveal";

const TeamSection = () => {
  const ref = useScrollReveal();

  const team = [
    {
      name: "[Организатор 1]",
      role: "Основатель проекта",
      desc: "Идейный вдохновитель кемпа. Организует все процессы: от виллы и перелётов до визовой поддержки. Живёт между Москвой и Тенерифе.",
      placeholder: "Фото организатора",
    },
    {
      name: "[Организатор 2]",
      role: "Со-организатор",
      desc: "Отвечает за программу активностей, экскурсии и логистику на острове. Курирует группу на протяжении всего кемпа.",
      placeholder: "Фото со-организатора",
    },
  ];

  return (
    <section ref={ref} className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="trainer">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[13px] tracking-[3px] uppercase text-gold mb-4 font-medium">Команда</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-6">
          Наша команда
        </h2>
        <p className="reveal text-[18px] text-text-body leading-[1.7] max-w-[600px] mb-16">
          Два организатора, которые проведут вас через весь процесс — от бронирования до последнего дня на острове. Тренировки ведут профессионалы Tenerife Tennis Academy.
        </p>

        {/* Organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {team.map((person) => (
            <div key={person.name} className="reveal bg-card rounded-lg overflow-hidden shadow-sm border border-border">
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
                <h3 className="font-display text-[24px] font-medium text-forest mb-1">{person.name}</h3>
                <p className="text-[13px] tracking-[2px] uppercase text-gold mb-4 font-medium">{person.role}</p>
                <p className="text-[16px] text-text-body leading-[1.7]">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tennis Academy Card */}
        <div className="reveal bg-forest rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-[16/10] lg:aspect-auto bg-forest-light flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-28 h-28 rounded-full bg-gold/10 border-2 border-gold/30 mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-[32px] text-gold">🎾</span>
                </div>
                <p className="text-[13px] tracking-[2px] uppercase text-sand/50">Логотип академии</p>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-[13px] tracking-[3px] uppercase text-gold/60 mb-3 font-medium">Тренеры</p>
              <h3 className="font-display text-[28px] font-medium text-sand-light mb-4">
                Tenerife Tennis Academy
              </h3>
              <p className="text-[17px] text-sand/70 leading-[1.7] mb-6">
                Профессиональная академия тенниса на юге Тенерифе. Лицензированные тренеры с международным опытом работают с игроками любого уровня — от первого удара до турнирной подготовки.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {[
                  "Хардовые корты с вечерним освещением",
                  "Индивидуальный подход к каждому участнику",
                  "Видеоанализ техники ударов",
                  "Русскоязычные тренеры",
                ].map((item) => (
                  <li key={item} className="text-[16px] text-sand/60 flex gap-3 items-start">
                    <span className="text-gold flex-shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <a
                href="https://tenerifetennisacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-[14px] font-medium tracking-[1px] hover:text-gold-light transition-colors no-underline"
              >
                tenerifetennisacademy.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
