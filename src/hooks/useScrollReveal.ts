import { useEffect, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [lang]);

  return ref;
}
