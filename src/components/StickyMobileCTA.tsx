import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const { open } = useBookingModal();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      const ctaSection = document.getElementById("apply");
      let ctaVisible = false;
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        ctaVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolled && !ctaVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-2.5 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ background: "rgba(28,43,30,0.95)", backdropFilter: "blur(10px)" }}
      >
        <button
          type="button"
          onClick={open}
          className="block w-full py-3 text-center bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer rounded-md"
        >
          Оставить заявку
        </button>
      </div>

      {/* Desktop sticky CTA */}
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-4 pl-5 pr-2 py-2 rounded-full border border-gold/30 shadow-2xl transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ background: "rgba(28,43,30,0.95)", backdropFilter: "blur(12px)" }}
      >
        <span className="text-[11px] tracking-[2px] uppercase text-sand/70 font-medium">
          14 мест · 18–24 окт 2026
        </span>
        <button
          type="button"
          onClick={open}
          className="inline-flex items-center gap-2 py-2.5 px-5 bg-gold text-forest font-body text-[11px] font-semibold tracking-[2px] uppercase border-none cursor-pointer rounded-full hover:bg-gold-light transition-colors"
        >
          Оставить заявку <ArrowRight size={14} />
        </button>
      </div>
    </>
  );
};

export default StickyMobileCTA;
