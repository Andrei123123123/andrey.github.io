import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      const ctaSection = document.getElementById("cta");
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
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-2.5 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ background: "rgba(28,43,30,0.95)", backdropFilter: "blur(10px)" }}
    >
      <a
        href="https://t.me/tennis_tenerife"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3.5 text-center bg-gold text-forest font-body text-[13px] font-medium tracking-[3px] uppercase no-underline"
      >
        Забронировать место
      </a>
    </div>
  );
};

export default StickyMobileCTA;
