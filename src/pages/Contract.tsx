import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { useT, useLang } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

const Contract = () => {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-sand">
      <Helmet>
        <title>{t("Договор-оферта — Tennerife Tennis Camp", "Terms of Service — Tennerife Tennis Camp")}</title>
        <meta name="description" content={t(
          "Публичный договор-оферта Tennerife Tennis Camp 18–24 октября 2026: состав услуг, стоимость €1950, условия оплаты, отмены и возврата.",
          "Tennerife Tennis Camp public offer 18–24 October 2026: services, €1950 price, payment, cancellation and refund terms."
        )} />
        <link rel="canonical" href="https://tennerife-tennis.com/contract" />
      </Helmet>
      <header className="border-b border-forest/10 bg-sand-light">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-[12px] tracking-[2px] uppercase text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> {t("На главную", "Home")}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="dark" />
            <span className="font-display text-[18px] text-forest">Tennerife · Tennis</span>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="font-body text-[12px] tracking-[3px] uppercase text-gold mb-5 font-semibold">
          {t("Публичный договор", "Public offer")}
        </p>
        <h1 className="font-display text-[36px] md:text-[48px] leading-[1.15] text-forest mb-4">
          {t("Договор-оферта на участие в Tennerife Tennis Camp", "Terms of service — Tennerife Tennis Camp")}
        </h1>
        <p className="font-body text-[13px] tracking-[2px] uppercase text-text-body/70 mb-6">
          {t("Редакция от 5 июня 2026 г.", "Edition of 5 June 2026")}
        </p>

        {lang === "en" && (
          <p className="font-body text-[14px] text-text-body/75 leading-[1.65] mb-12 p-4 border-l-2 border-gold bg-card/40 rounded-r-md">
            This document is the public offer governed by Russian law. The Russian version below is the legally binding text — please switch to RU above for the authoritative wording.
          </p>
        )}



        <div className="font-body text-[16px] leading-[1.75] text-text-body space-y-8">
          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">1. Предмет договора</h2>
            <p>
              1.1. Организатор обязуется оказать Участнику услуги по организации и
              проведению теннисного кемпа «Tennerife Tennis Camp» в период с
              18 по 24 октября 2026 года на острове Тенерифе (Испания), а Участник
              обязуется оплатить эти услуги в порядке и на условиях, предусмотренных
              настоящей офертой.
            </p>
            <p className="mt-3">
              1.2. Состав услуг (далее — «Пакет участия»): тренировки и игровые
              сессии по теннису и паделу, аренда кортов и оборудования, проживание
              на вилле с поваром, ежедневные завтраки, обеды и ужины, культурные и
              экскурсионные активности по программе, трансфер аэропорт — вилла —
              аэропорт, организационное сопровождение.
            </p>
            <p className="mt-3">
              1.3. Не входит в стоимость: авиаперелёт до аэропорта Тенерифе Юг (TFS)
              и обратно, оформление шенгенской визы, медицинская страховка, личные
              расходы Участника.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">2. Стоимость и порядок оплаты</h2>
            <p>
              2.1. Полная стоимость Пакета участия составляет 1 950 € (одна тысяча
              девятьсот пятьдесят евро) на одного человека и включает: теннисный
              кемп — 1 350 €, проживание на вилле и услуги повара — 600 €.
            </p>
            <p className="mt-3">
              2.2. Бронирование места осуществляется после внесения оплаты в
              согласованной валюте и форме. Место в группе закрепляется за
              Участником с момента поступления оплаты Организатору.
            </p>
            <p className="mt-3">
              2.3. Количество мест ограничено — 14 участников. Организатор оставляет
              за собой право прекратить приём заявок без предварительного
              уведомления при заполнении группы.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">3. Условия отмены и возврата</h2>
            <p>
              3.1. В случае отмены кемпа по инициативе Организатора (форс-мажор,
              недобор группы, иные обстоятельства) Участнику возвращается 100%
              уплаченной суммы в течение 10 рабочих дней.
            </p>
            <p className="mt-3">
              3.2. В случае отказа Участника от участия условия возврата
              согласовываются индивидуально и зависят от срока до начала кемпа.
              Рекомендуем оформить страховку от невыезда.
            </p>
            <p className="mt-3">
              3.3. Организатор не несёт ответственности за отказ в выдаче визы,
              отмену или задержку авиарейса и иные обстоятельства, находящиеся вне
              контроля Организатора. Возврат стоимости в этих случаях не
              осуществляется.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">4. Права и обязанности сторон</h2>
            <p>
              4.1. Организатор обязуется оказать услуги в соответствии с описанием
              на сайте{" "}
              <a href="https://tennerife-tennis.com" className="text-gold hover:underline">
                tennerife-tennis.com
              </a>{" "}
              и подтверждёнными деталями программы.
            </p>
            <p className="mt-3">
              4.2. Участник обязуется соблюдать программу кемпа, правила проживания
              на вилле, уважать других участников и команду Tenerife Tennis Academy.
              Организатор оставляет за собой право прекратить участие в кемпе без
              возврата стоимости при систематическом нарушении правил.
            </p>
            <p className="mt-3">
              4.3. Участник самостоятельно отвечает за своё физическое состояние,
              наличие медицинской страховки и допустимость занятий теннисом и
              паделом по состоянию здоровья.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">5. Ответственность</h2>
            <p>
              5.1. Стороны несут ответственность за неисполнение или ненадлежащее
              исполнение обязательств в соответствии с действующим
              законодательством.
            </p>
            <p className="mt-3">
              5.2. Организатор не несёт ответственности за ущерб личному имуществу
              Участника, утраченное или повреждённое во время кемпа.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[24px] text-forest mb-3">6. Заключительные положения</h2>
            <p>
              6.1. Настоящая оферта вступает в силу с момента её размещения на
              сайте и действует до момента её отзыва Организатором.
            </p>
            <p className="mt-3">
              6.2. Акцептом настоящей оферты считается оплата Участником Пакета
              участия. С момента акцепта договор считается заключённым.
            </p>
            <p className="mt-3">
              6.3. Все вопросы, не урегулированные настоящей офертой, решаются в
              соответствии с действующим законодательством и путём переговоров.
              По всем вопросам — Telegram{" "}
              <a href="https://t.me/oceaninthesky" className="text-gold hover:underline">
                @oceaninthesky
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-forest/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-[12px] tracking-[2px] uppercase text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> {t("Вернуться на главную", "Back to home")}
          </Link>
          <Link
            to="/privacy"
            className="font-body text-[12px] tracking-[2px] uppercase text-text-body/60 hover:text-gold transition-colors"
          >
            {t("Политика конфиденциальности", "Privacy policy")} →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Contract;
