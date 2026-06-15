import { Dumbbell, Home, ChefHat, Map, Compass } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Dumbbell, t: "Тренировки", d: "Теннис и падел с командой академии" },
  { icon: Home, t: "Вилла", d: "Частная вилла у океана, своя комната" },
  { icon: ChefHat, t: "Повар", d: "Завтраки, обеды и ужины на вилле" },
  { icon: Map, t: "Активности", d: "Яхта, Тейде, сёрфинг, винодельня" },
  { icon: Compass, t: "Сопровождение", d: "Трансфер, виза, перелёт — помогаем" },
];

const WhatsIncludedSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-forest py-20 lg:py-24 px-6 lg:px-16 border-t border-gold/10">
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-[12px] tracking-[4px] uppercase text-gold mb-5 font-medium">Что включено</p>
        <h2 className="reveal font-display font-medium text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-5 max-w-[680px]">
          Неделя на Тенерифе.<br />
          <em className="italic text-gold">Всё включено</em>.&nbsp;помогаем с перелётом и визой.
        </h2>
        <p className="reveal text-[16px] text-sand/65 leading-[1.7] mb-12 max-w-[600px]">
          Один пакет €1950. Без апселлов и скрытых опций.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.t} className="reveal p-5 bg-forest-light/25 border border-gold/15 rounded-xl hover:border-gold/35 transition-colors">
                <span className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 text-gold flex items-center justify-center mb-4">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <p className="font-display text-[18px] text-sand-light mb-1.5 leading-tight">{it.t}</p>
                <p className="text-[13px] text-sand/60 leading-[1.55]">{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
