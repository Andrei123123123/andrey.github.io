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
      className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in"
      style={{ background: "rgba(28,43,30,0.95)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-2.5 md:py-3 flex items-center gap-3 md:gap-5 border-t border-gold/15">
        <p className="font-body text-[12px] md:text-[13px] leading-[1.4] text-sand/80 flex-1">
          Используем cookie для аналитики.{" "}
          <Link
            to="/privacy"
            className="text-gold/90 underline underline-offset-2 hover:text-gold"
          >
            Политика конфиденциальности
          </Link>
        </p>

        <button
          onClick={accept}
          className="px-4 md:px-5 py-1.5 md:py-2 bg-gold/90 text-forest font-body text-[11px] tracking-[2px] uppercase font-semibold hover:bg-gold transition-colors rounded-sm shrink-0"
        >
          Ок
        </button>
        <button
          onClick={accept}
          aria-label="Закрыть"
          className="p-1 text-sand/50 hover:text-sand transition-colors shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
