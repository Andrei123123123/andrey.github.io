import { useT } from "@/i18n/LanguageContext";
import schengenAsset from "@/assets/schengen-info.png.asset.json";

const SchengenSection = () => {
  const t = useT();

  return (
    <section className="bg-sand-light py-24 lg:py-32 px-6 lg:px-16" id="visa">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">
          {t("Шенгенская виза", "Schengen visa")}
        </p>
        <h2 className="reveal font-display font-medium text-[clamp(32px,4vw,52px)] text-forest leading-[1.1] mb-6 max-w-[760px]">
          {t("Документы для визы", "Documents for the visa")}{" "}
          <em className="italic text-gold">{t("в Испанию", "to Spain")}</em>
        </h2>
        <p className="reveal text-[17px] text-text-body/75 leading-[1.7] mb-12 max-w-[680px]">
          {t(
            "Список документов от визового агентства Виза-GO для оформления шенгенской визы для участия в кемпе Tennis Tenerife. Помогаем со всем процессом — приглашение от академии включено.",
            "Document checklist from the Visa-GO agency for the Schengen visa to join the Tennis Tenerife retreat. We support you through the whole process — academy invitation is included."
          )}
        </p>

        <div className="reveal rounded-2xl overflow-hidden shadow-2xl border border-forest/10 bg-white">
          <a
            href={schengenAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Открыть инфографику в полном размере", "Open the infographic in full size")}
          >
            <img
              src={schengenAsset.url}
              alt={t(
                "Список документов для шенгенской визы — Tennis Tenerife",
                "Schengen visa document checklist — Tennis Tenerife"
              )}
              className="w-full h-auto block"
              loading="lazy"
            />
          </a>
        </div>

        <p className="reveal text-[13px] text-text-body/55 mt-5 text-center">
          {t(
            "Нажмите на изображение, чтобы открыть в полном размере",
            "Click the image to open it in full size"
          )}
        </p>
      </div>
    </section>
  );
};

export default SchengenSection;
