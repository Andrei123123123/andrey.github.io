import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (ru: string, en: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "tt_lang_v1";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ru" || saved === "en") setLangState(saved);
    } catch {
      /* no-op */
    }
  }, []);

  useEffect(() => {
    try {
      document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ru");
    } catch {
      /* no-op */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* no-op */
    }
  }, []);

  const t = useCallback(
    (ru: string, en: string) => (lang === "en" ? en : ru),
    [lang]
  );

  const value = useMemo<Ctx>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = (): Ctx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

export const useT = () => useLang().t;
