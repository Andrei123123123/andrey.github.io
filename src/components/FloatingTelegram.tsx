import { useEffect, useState } from "react";

const TelegramIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const FloatingTelegram = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://t.me/tennis_tenerife"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className={`fixed z-40 right-5 md:right-8 bottom-[84px] md:bottom-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold text-forest shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-gold-light transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <TelegramIcon size={22} />
    </a>
  );
};

export default FloatingTelegram;
