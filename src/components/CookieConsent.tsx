import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "tt_cookie_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
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
      aria-label="Уведомление о cookie"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-50 sm:max-w-[340px] animate-fade-in rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      style={{ background: "rgba(28,43,30,0.96)", backdropFilter: "blur(10px)" }}
    >
      <div className="px-4 py-3 flex items-start gap-3 border border-gold/15 rounded-lg">
        <p className="font-body text-[12px] leading-[1.5] text-sand/80 flex-1">
          Используем cookie для аналитики.{" "}
          <Link
            to="/privacy"
            className="text-gold/90 underline underline-offset-2 hover:text-gold"
          >
            Подробнее
          </Link>
        </p>
        <button
          onClick={accept}
          className="px-3 py-1 bg-gold/90 text-forest font-body text-[10.5px] tracking-[1.5px] uppercase font-semibold hover:bg-gold transition-colors rounded-sm shrink-0"
        >
          Ок
        </button>
        <button
          onClick={accept}
          aria-label="Закрыть"
          className="p-0.5 text-sand/50 hover:text-sand transition-colors shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
