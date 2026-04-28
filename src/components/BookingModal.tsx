import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useBookingModal } from "@/contexts/BookingModalContext";

const TELEGRAM_URL = "https://t.me/tennis_tenerife";
const MAX_URL = "https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI";
const WHATSAPP_URL = "https://wa.me/79655096888";

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const MaxIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm7 4a6 6 0 1 0 3.6 10.8l1.9 1.4a.6.6 0 0 0 .96-.48v-3.06A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BookingModal = () => {
  const { isOpen, close } = useBookingModal();
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Reset success state when reopening
  useEffect(() => {
    if (isOpen) setFormSent(false);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formSubmitting) return;
    setFormSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-booking", {
        body: { name: formData.name, phone: formData.phone },
      });
      if (error || !data?.ok) {
        throw new Error(error?.message || "Не удалось отправить заявку");
      }
      setFormSent(true);
      toast({
        title: "Заявка отправлена ✓",
        description: "Свяжемся с вами в течение 2 часов.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Что-то пошло не так";
      toast({
        title: "Ошибка отправки",
        description: `${message}. Напишите нам в Telegram: @oceaninthesky`,
        variant: "destructive",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  if (typeof document === "undefined") return null;
  if (!isOpen) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:px-6 animate-fade-in"
      style={{ background: "rgba(28,43,30,0.85)", backdropFilter: "blur(8px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full sm:max-w-[520px] bg-forest border border-gold/25 sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Закрыть окно"
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gold/80 hover:text-gold border border-gold/20 hover:border-gold/40 bg-transparent rounded-full cursor-pointer transition-colors z-10"
        >
          <X size={18} />
        </button>

        <div className="p-7 sm:p-10">
          {formSent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-display text-[26px] font-medium text-sand-light mb-3">
                Заявка отправлена!
              </h3>
              <p className="text-[15px] text-sand/70 leading-[1.7] mb-8">
                Спасибо{formData.name ? `, ${formData.name}` : ""}! Мы свяжемся с вами в течение 2 часов.
              </p>
              <button
                type="button"
                onClick={close}
                className="w-full py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase border-none rounded-md hover:bg-gold-light transition-colors cursor-pointer"
              >
                Отлично
              </button>
            </div>
          ) : (
            <>
              <p className="text-[12px] tracking-[3px] uppercase text-gold mb-3 font-semibold">
                Бронирование
              </p>
              <h3
                id="booking-modal-title"
                className="font-display text-[26px] sm:text-[30px] font-medium text-sand-light leading-[1.15] mb-2"
              >
                Свяжитесь удобным способом
              </h3>
              <p className="text-[14px] text-sand/55 leading-[1.6] mb-6">
                Напишите в мессенджер или оставьте заявку — перезвоним в течение 2 часов.
              </p>

              {/* Messenger buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[hsl(200,70%,45%)] text-white font-body text-[12px] font-semibold tracking-[1.5px] uppercase no-underline hover:bg-[hsl(200,70%,50%)] transition-colors duration-300 rounded-md"
                >
                  <TelegramIcon size={16} /> Telegram
                </a>
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[hsl(220,70%,25%)] text-white font-body text-[12px] font-semibold tracking-[1.5px] uppercase no-underline hover:bg-[hsl(220,70%,32%)] transition-colors duration-300 rounded-md"
                >
                  <MaxIcon size={16} /> MAX
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[hsl(142,70%,35%)] text-white font-body text-[12px] font-semibold tracking-[1.5px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] transition-colors duration-300 rounded-md"
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gold/15" />
                <span className="text-[11px] tracking-[3px] uppercase text-sand/35 font-medium">
                  или заявка на звонок
                </span>
                <div className="flex-1 h-px bg-gold/15" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label className="text-[12px] tracking-[2px] uppercase text-sand/45 block mb-2 font-medium">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20 rounded-md"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-[12px] tracking-[2px] uppercase text-sand/45 block mb-2 font-medium">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] outline-none focus:border-gold/40 transition-colors placeholder:text-sand/20 rounded-md"
                    placeholder="+7 999 999 99 99"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="mt-2 py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formSubmitting ? "Отправляем..." : "Оставить заявку"}
                </button>
                <p className="text-[11px] text-sand/35 text-center leading-[1.6]">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};

export default BookingModal;
