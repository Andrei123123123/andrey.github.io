import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";
import { useT } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";


const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.496.969z" />
  </svg>
);

const MaxIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm7 4a6 6 0 1 0 3.6 10.8l1.9 1.4a.6.6 0 0 0 .96-.48v-3.06A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const VKIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.72-.576.72z" />
  </svg>
);

const socials = [
  { href: "https://t.me/tennis_tenerife", label: "Telegram", icon: <TelegramIcon size={18} /> },
  { href: "https://max.ru/join/9wYM0HGN_D99_aZwmjCL4Aaombn8s4Qhb7K3Qge-1gI", label: "MAX", icon: <MaxIcon size={18} /> },
  { href: "https://api.whatsapp.com/send/?phone=89655096888", label: "WhatsApp", icon: <WhatsAppIcon size={18} /> },
  { href: "https://instagram.com/tenerife.tennis.camp", label: "Instagram", icon: <InstagramIcon size={18} /> },
  { href: "https://vk.com/tennistenerife", label: "VK", icon: <VKIcon size={18} /> },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBookingModal();
  const t = useT();

  const navLinks = [
    { href: "#programme", label: t("Программа", "Programme") },
    { href: "#trainer", label: t("Команда", "Team") },
    { href: "#villa", label: t("Вилла", "Villa") },
    { href: "#location", label: t("Тенерифе", "Tenerife") },
    { href: "#pricing", label: t("Стоимость", "Pricing") },
    { href: "#faq", label: t("FAQ", "FAQ") },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuOverlay = (
    <div
      className={`fixed inset-0 z-[70] backdrop-blur-sm flex flex-col transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "hsl(var(--forest) / 0.96)" }}
    >
      <div className="flex justify-between items-center py-9 px-8">
        <span className="font-display text-[15px] italic text-gold tracking-[3px] uppercase">
          Tennis · Tenerife
        </span>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-gold border border-gold/20 bg-transparent cursor-pointer"
            aria-label={t("Закрыть меню", "Close menu")}
          >
            <X size={20} />
          </button>
        </div>
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

      <div className="px-8 pb-12 space-y-6">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            openBooking();
          }}
          className="block w-full py-4 text-center bg-gold text-forest font-body text-[13px] font-medium tracking-[3px] uppercase border-none cursor-pointer rounded-md"
        >
          {t("Забронировать место", "Reserve your spot")}
        </button>
        <div className="flex items-center justify-center gap-6 pt-2 border-t border-gold/10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-sand/70 hover:text-gold transition-colors pt-5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        <LanguageSwitcher />
        <a
          href="https://t.me/tennis_tenerife"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-sand/70 hover:text-gold transition-colors"
        >
          <TelegramIcon size={18} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=89655096888"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-sand/70 hover:text-gold transition-colors"
        >
          <WhatsAppIcon size={18} />
        </a>
        <button
          onClick={() => setOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-gold border border-gold/20 bg-transparent cursor-pointer ml-1"
          aria-label={t("Открыть меню", "Open menu")}
        >
          <Menu size={20} />
        </button>
      </div>

      {typeof document !== "undefined" ? createPortal(menuOverlay, document.body) : null}
    </>
  );
};

export default MobileMenu;
