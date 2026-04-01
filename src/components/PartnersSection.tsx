import { useScrollReveal } from "@/hooks/useScrollReveal";

const PartnersSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[12px] tracking-[3px] uppercase text-gold mb-4 font-medium">Партнёры</p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] mb-14">
          С кем мы работаем
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vizago */}
          <div className="reveal bg-card rounded-lg p-8 lg:p-10 border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-forest/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[20px] font-bold text-forest">V</span>
              </div>
              <div>
                <h3 className="font-display text-[22px] font-medium text-forest">Vizago</h3>
                <p className="text-[13px] text-text-muted-custom">Визовый оператор</p>
              </div>
            </div>
            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Vizago — надёжный визовый оператор, который помогает с оформлением шенгенских виз для поездки на Тенерифе. Берёт на себя весь процесс: от подготовки документов до записи в консульство.
            </p>
            <a
              href="https://vizago.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-[13px] font-medium tracking-[1px] hover:text-gold-light transition-colors no-underline"
            >
              vizago.ru →
            </a>
          </div>

          {/* Tenerife Tennis Academy */}
          <div className="reveal bg-card rounded-lg p-8 lg:p-10 border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-forest/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[28px]">🎾</span>
              </div>
              <div>
                <h3 className="font-display text-[22px] font-medium text-forest">Tenerife Tennis Academy</h3>
                <p className="text-[13px] text-text-muted-custom">Теннисная академия</p>
              </div>
            </div>
            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Профессиональная академия тенниса и падела на юге Тенерифе. Предоставляет корты, тренеров и оборудование для нашего кемпа. Сертифицированные тренеры с международным опытом.
            </p>
            <a
              href="https://tenerifetennisacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-[13px] font-medium tracking-[1px] hover:text-gold-light transition-colors no-underline"
            >
              tenerifetennisacademy.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
