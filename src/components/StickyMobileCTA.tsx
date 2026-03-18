import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-forest/95 backdrop-blur-sm border-t border-gold/15 px-4 py-3 flex gap-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#cta"
        className="flex-1 py-3.5 text-center bg-gold text-forest font-body text-[11px] font-medium tracking-[2px] uppercase no-underline"
      >
        Забронировать
      </a>
      <a
        href="https://t.me/username"
        className="w-12 flex items-center justify-center border border-gold/30 text-gold no-underline"
        aria-label="Telegram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
        </svg>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
