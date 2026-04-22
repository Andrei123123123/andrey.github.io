import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "tt_cookie_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, ts: Date.now() }));
    } catch {
      /* no-op */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о cookie и политике конфиденциальности"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-6 md:pb-6 animate-fade-in"
    >
      <div
        className="max-w-[1100px] mx-auto rounded-lg shadow-[0_20px_60px_-15px_rgba(28,43,30,0.45)] border border-gold/20 px-5 py-4 md:px-7 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        style={{ background: "rgba(28,43,30,0.97)", backdropFilter: "blur(12px)" }}
      >
        <p className="font-body text-[13px] md:text-[14px] leading-[1.6] text-sand flex-1">
          Мы используем cookie для корректной работы сайта и анонимной аналитики.
          Продолжая просмотр, вы соглашаетесь с{" "}
          <Link
            to="/privacy"
            className="text-gold underline underline-offset-2 hover:text-gold/80"
          >
            Политикой конфиденциальности
          </Link>
          .
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={accept}
            className="px-6 py-3 bg-gold text-forest font-body text-[12px] tracking-[2.5px] uppercase font-medium hover:bg-gold/90 transition-colors rounded-sm"
          >
            Принять
          </button>
          <button
            onClick={accept}
            aria-label="Закрыть"
            className="p-2 text-sand/60 hover:text-sand transition-colors md:hidden"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
