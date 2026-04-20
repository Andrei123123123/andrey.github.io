import SectionTag from "./SectionTag";

const TrainerSection = () => {
  return (
    <section className="bg-cream py-[120px] px-8 lg:px-16">
      <SectionTag>Тренер</SectionTag>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px]">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] bg-forest/10 border border-gold/20 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-forest/15 border-2 border-gold/30 mx-auto mb-6 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <p className="text-[13px] tracking-[2px] uppercase text-text-muted-custom">Фото тренера</p>
              <p className="text-[12px] text-text-muted-custom/50 mt-1">Портрет · крупный план</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/15" />
        </div>

        {/* Info */}
        <div>
          <h2 className="font-display font-light text-[clamp(32px,4vw,48px)] text-forest leading-[1.15] mb-2">
            Человек, которому<br />вы доверите корт.
          </h2>
          <p className="font-display text-[clamp(20px,2.5vw,28px)] italic text-gold leading-[1.2] mb-8">
            Русскоязычный. Живёт на Тенерифе.
          </p>

          <div className="mb-8">
            <h3 className="font-display text-[24px] font-normal text-forest mb-1">
              [Имя Фамилия]
            </h3>
            <p className="text-[13px] tracking-[2px] uppercase text-gold mb-6">
              Тренер · Tenerife Tennis Academy
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Лицензированный тренер Tenerife Tennis Academy",
                "Более 10 лет тренерского опыта",
                "Работает с любым уровнем — от первого удара до турнирной подготовки",
                "Русскоязычный, живёт на Тенерифе постоянно",
              ].map((line) => (
                <p key={line} className="text-[16px] text-text-body leading-[1.7] font-light flex gap-3 items-start">
                  <span className="text-gold flex-shrink-0">—</span>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <blockquote className="border-l-2 border-gold/30 pl-6 mb-10">
            <p className="font-display text-[18px] italic text-forest/80 leading-[1.6]">
              «На Тенерифе люди раскрываются по-другому. Нет городского стресса, есть океан и корт. За неделю я вижу, как меняется не только техника — меняется человек.»
            </p>
          </blockquote>

          <a
            href="https://t.me/tennis_tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 bg-forest text-gold font-body text-[13px] font-medium tracking-[3px] uppercase no-underline hover:bg-forest-mid transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
            </svg>
            Написать тренеру
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
