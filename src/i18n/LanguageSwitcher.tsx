import { useLang } from "./LanguageContext";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

const LanguageSwitcher = ({ variant = "light", className = "" }: Props) => {
  const { lang, setLang } = useLang();

  const base =
    "px-2 py-1 text-[11px] tracking-[2px] uppercase font-medium transition-colors cursor-pointer bg-transparent border-none";
  const activeCls = "text-gold";
  const idleCls = variant === "dark" ? "text-forest/55 hover:text-gold" : "text-sand/55 hover:text-gold";
  const sepCls = variant === "dark" ? "text-forest/25" : "text-sand/25";

  return (
    <div className={`inline-flex items-center ${className}`} role="group" aria-label="Language / Язык">
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={`${base} ${lang === "ru" ? activeCls : idleCls}`}
        aria-pressed={lang === "ru"}
        aria-label="Русский"
      >
        RU
      </button>
      <span className={`text-[10px] ${sepCls}`} aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? activeCls : idleCls}`}
        aria-pressed={lang === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
