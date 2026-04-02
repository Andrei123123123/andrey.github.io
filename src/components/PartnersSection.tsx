import { useScrollReveal } from "@/hooks/useScrollReveal";
import vizagoLogo from "@/assets/vizago-logo.jpeg";
import ttaLogo from "@/assets/tta-logo.png";

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
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 rounded-2xl bg-white shadow-lg border border-gold/15 flex items-center justify-center overflow-hidden p-3 mb-5">
                <img src={vizagoLogo} alt="Vizago" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-[28px] font-semibold text-forest">ВизаGO</h3>
              <p className="text-[14px] text-text-muted-custom mt-1">Визовый оператор</p>
            </div>
            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Vizago — надёжный визовый оператор, который помогает с оформлением шенгенских виз для поездки на Тенерифе. Берёт на себя весь процесс: от подготовки документов до записи в консульство.
            </p>
            <a
              href="https://vizago.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-[14px] font-semibold tracking-[1px] hover:text-gold-light transition-colors no-underline"
            >
              vizago.ru →
            </a>
          </div>

          {/* Tenerife Tennis Academy */}
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 rounded-2xl bg-white shadow-lg border border-gold/15 flex items-center justify-center overflow-hidden p-3 mb-5">
                <img src={ttaLogo} alt="Tenerife Tennis Academy" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-[28px] font-semibold text-forest">Tenerife Tennis Academy</h3>
              <p className="text-[14px] text-text-muted-custom mt-1">Теннисная академия</p>
            </div>
            <p className="text-[15px] text-text-body leading-[1.7] mb-6">
              Профессиональная академия тенниса и падела на юге Тенерифе. Предоставляет корты, тренеров и оборудование для нашего кемпа. Сертифицированные тренеры с международным опытом.
            </p>
            <a
              href="https://tenerifetennisacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-[14px] font-semibold tracking-[1px] hover:text-gold-light transition-colors no-underline"
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
