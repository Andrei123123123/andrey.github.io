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

        <div className="grid grid-cols-1 gap-8">
          {/* Vizago */}
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gold/15 flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
                <img src={vizagoLogo} alt="Vizago" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">ВизаGO</h3>
                <p className="text-[13px] text-text-muted-custom">Визовый оператор · Официальный турагент кемпа</p>
              </div>
            </div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-8">
              ВизаGO — визовый оператор и официальный турагент кемпа. Более 500 успешно оформленных шенгенских виз, включая сложные случаи без визовой истории. Берёт на себя всё: приглашение от академии, подготовка документов, запись в консульство, подбор и оформление авиабилетов. Персональный менеджер ведёт вас от заявки до возвращения домой.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-5 border-y border-border">
              <div className="text-center">
                <p className="font-display text-[24px] font-semibold text-forest">500+</p>
                <p className="text-[12px] text-text-muted-custom mt-1">виз оформлено</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[24px] font-semibold text-forest">97%</p>
                <p className="text-[12px] text-text-muted-custom mt-1">одобрение шенгена</p>
              </div>
              <div className="text-center">
                <p className="font-display text-[24px] font-semibold text-forest">24/7</p>
                <p className="text-[12px] text-text-muted-custom mt-1">на связи в Telegram</p>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {[
                "Шенгенская виза через приглашение от Tenerife Tennis Academy",
                "Полный пакет документов и запись в консульство",
                "Подбор и оформление авиабилетов по лучшей цене",
                "Персональный менеджер на всём протяжении поездки",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-text-body leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <a
                href="https://vizago.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-[14px] font-semibold tracking-[1px] hover:text-gold-light transition-colors no-underline"
              >
                vizago.ru →
              </a>
              <span className="text-[13px] text-text-muted-custom border border-border rounded-full px-4 py-1.5">Официальный партнёр</span>
            </div>
          </div>

          {/* Tenerife Tennis Academy */}
          <div className="reveal bg-card rounded-xl p-8 lg:p-10 border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gold/15 flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
                <img src={ttaLogo} alt="Tenerife Tennis Academy" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-forest">Tenerife Tennis Academy</h3>
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
