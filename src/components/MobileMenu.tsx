import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#programme", label: "Программа" },
  { href: "#trainer", label: "Команда" },
  { href: "#location", label: "Тенерифе" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#faq", label: "FAQ" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden w-10 h-10 flex items-center justify-center text-gold border border-gold/20 bg-transparent cursor-pointer"
        aria-label="Открыть меню"
      >
        <Menu size={20} />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-forest/95 backdrop-blur-sm flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
      >
        <div className="flex justify-between items-center py-9 px-8">
          <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">
            Tennis · Tenerife
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-gold border border-gold/20 bg-transparent cursor-pointer"
            aria-label="Закрыть меню"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-[28px] font-light text-sand-light py-3 no-underline hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-8 pb-12">
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block w-full py-4 text-center bg-gold text-forest font-body text-[13px] font-medium tracking-[3px] uppercase no-underline"
          >
            Забронировать место
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
