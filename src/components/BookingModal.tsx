import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useBookingModal } from "@/contexts/BookingModalContext";

const TELEGRAM_URL = "https://t.me/tennis_tenerife";
const WHATSAPP_URL = "https://wa.me/79655096888";

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type FormState = {
  name: string;
  telegram: string;
  instagram: string;
  age: string;
  level: string;
  occupation: string;
  flightHelp: boolean;
  visaHelp: boolean;
};

const empty: FormState = {
  name: "",
  telegram: "",
  instagram: "",
  age: "",
  level: "",
  occupation: "",
  flightHelp: false,
  visaHelp: false,
};

const inputCls = "w-full bg-forest-light/40 border border-gold/15 text-sand-light py-3.5 px-4 text-[15px] outline-none focus:border-gold/45 transition-colors placeholder:text-sand/25 rounded-md";
const labelCls = "text-[12px] tracking-[2px] uppercase text-sand/55 block mb-2 font-medium";

const BookingModal = () => {
  const { isOpen, close } = useBookingModal();
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number | null>(null);
  const [dragY, setDragY] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    if ((sheetRef.current?.scrollTop ?? 0) > 0) return;
    dragStartY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragStartY.current == null) return;
    const delta = e.touches[0].clientY - dragStartY.current;
    if (delta > 0) setDragY(delta);
  };
  const onTouchEnd = () => {
    if (dragStartY.current == null) return;
    if (dragY > 110) close();
    dragStartY.current = null;
    setDragY(0);
  };

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) { setSent(false); setForm(empty); }
  }, [isOpen]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.name.trim() || !form.telegram.trim()) {
      toast({ title: "Заполните имя и Telegram", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-booking", {
        body: {
          name: form.name,
          telegram: form.telegram,
          instagram: form.instagram,
          age: form.age,
          level: form.level,
          occupation: form.occupation,
          flightHelp: form.flightHelp ? "да" : "",
          visaHelp: form.visaHelp ? "да" : "",
        },
      });
      if (error || !data?.ok) throw new Error(error?.message || "Не удалось отправить");
      setSent(true);
      toast({ title: "Заявка отправлена ✓", description: "Свяжемся в ближайшее время." });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Что-то пошло не так";
      toast({
        title: "Ошибка отправки",
        description: `${message}. Напишите в Telegram: @oceaninthesky`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
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
        ref={sheetRef}
        className="relative w-full sm:max-w-[560px] bg-forest border border-gold/25 sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92dvh] sm:max-h-[92vh] overflow-y-auto overscroll-contain"
        style={{
          transform: dragY ? `translateY(${dragY}px)` : undefined,
          transition: dragStartY.current == null ? "transform 0.25s ease-out" : "none",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="sm:hidden sticky top-0 z-20 flex justify-center pt-2.5 pb-1.5 bg-forest">
          <span className="block w-10 h-1 rounded-full bg-sand/25" aria-hidden="true" />
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Закрыть окно"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gold/80 hover:text-gold border border-gold/20 hover:border-gold/40 bg-forest/80 backdrop-blur rounded-full cursor-pointer transition-colors z-30"
        >
          <X size={18} />
        </button>

        <div className="px-5 pt-3 pb-6 sm:p-10">
          {sent ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-display text-[28px] font-medium text-sand-light mb-3">
                Спасибо{form.name ? `, ${form.name}` : ""}.
              </h3>
              <p className="text-[15px] text-sand/70 leading-[1.7] mb-8">
                Мы получили заявку и свяжемся с вами в ближайшее время — подтвердим детали и поможем с дальнейшими шагами.
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[hsl(200,70%,45%)] text-white font-body text-[12px] font-semibold tracking-[1.5px] uppercase no-underline hover:bg-[hsl(200,70%,50%)] rounded-md">
                  <TelegramIcon size={15} /> Telegram
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[hsl(142,70%,35%)] text-white font-body text-[12px] font-semibold tracking-[1.5px] uppercase no-underline hover:bg-[hsl(142,70%,40%)] rounded-md">
                  <WhatsAppIcon size={15} /> WhatsApp
                </a>
              </div>
              <button type="button" onClick={close}
                className="w-full py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase border-none rounded-md hover:bg-gold-light transition-colors cursor-pointer">
                Закрыть
              </button>
            </div>
          ) : (
            <>
              <p className="text-[12px] tracking-[3px] uppercase text-gold mb-3 font-semibold">
                Tennerife Tennis Retreat · 14 мест
              </p>
              <h3
                id="booking-modal-title"
                className="font-display text-[26px] sm:text-[30px] font-medium text-sand-light leading-[1.15] mb-2"
              >
                Забронировать место
              </h3>
              <p className="text-[14px] text-sand/60 leading-[1.6] mb-6">
                Оставьте заявку — мы свяжемся с вами, подтвердим детали и поможем с дальнейшими шагами.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label className={labelCls}>Имя *</label>
                  <input type="text" required maxLength={100} value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputCls} placeholder="Ваше имя" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Telegram *</label>
                    <input type="text" required maxLength={80} value={form.telegram}
                      onChange={(e) => update("telegram", e.target.value)}
                      className={inputCls} placeholder="@username" />
                  </div>
                  <div>
                    <label className={labelCls}>Instagram</label>
                    <input type="text" maxLength={80} value={form.instagram}
                      onChange={(e) => update("instagram", e.target.value)}
                      className={inputCls} placeholder="@username" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Возраст</label>
                    <input type="number" min={16} max={99} value={form.age}
                      onChange={(e) => update("age", e.target.value)}
                      className={inputCls} placeholder="32" />
                  </div>
                  <div>
                    <label className={labelCls}>Уровень тенниса</label>
                    <select value={form.level}
                      onChange={(e) => update("level", e.target.value)}
                      className={inputCls + " appearance-none cursor-pointer"}>
                      <option value="">Выберите</option>
                      <option value="Никогда не играл">Никогда не играл</option>
                      <option value="Начинающий">Начинающий</option>
                      <option value="Любитель">Любитель</option>
                      <option value="Уверенный любитель">Уверенный любитель</option>
                      <option value="Опытный">Опытный</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Чем занимаетесь</label>
                  <input type="text" maxLength={200} value={form.occupation}
                    onChange={(e) => update("occupation", e.target.value)}
                    className={inputCls} placeholder="Бизнес, проект, сфера" />
                </div>

                <div className="flex flex-col gap-2.5 mt-1">
                  <label className="flex items-center gap-3 text-[14px] text-sand/75 cursor-pointer">
                    <input type="checkbox" checked={form.flightHelp}
                      onChange={(e) => update("flightHelp", e.target.checked)}
                      className="w-4 h-4 accent-gold cursor-pointer" />
                    Нужна помощь с подбором перелёта
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-sand/75 cursor-pointer">
                    <input type="checkbox" checked={form.visaHelp}
                      onChange={(e) => update("visaHelp", e.target.checked)}
                      className="w-4 h-4 accent-gold cursor-pointer" />
                    Нужна помощь с шенгенской визой
                  </label>
                </div>

                <button type="submit" disabled={submitting}
                  className="mt-3 py-4 bg-gold text-forest font-body text-[13px] font-semibold tracking-[2.5px] uppercase cursor-pointer border-none hover:bg-gold-light transition-all duration-300 rounded-md disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Отправляем..." : "Отправить заявку"}
                </button>
                <p className="text-[11px] text-sand/40 text-center leading-[1.6]">
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
