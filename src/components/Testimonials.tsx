import SectionTag from "./SectionTag";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей К.",
    city: "Москва",
    text: "Ожидал просто теннис, а получил полноценный перезапуск. Тренировки, океан, компания — всё сложилось идеально. Уже планирую вернуться.",
  },
  {
    name: "Марина С.",
    city: "Санкт-Петербург",
    text: "Ехала одна и немного переживала. К третьему дню мы были как команда. Тренер подстраивается под каждого — это чувствуется.",
  },
  {
    name: "Дмитрий Р.",
    city: "Дубай",
    text: "Организация на высшем уровне. Не нужно думать ни о чём — визу помогли, трансферы, жильё. Просто бери ракетку и лети.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-cream py-[120px] px-8 lg:px-16">
      <SectionTag>Отзывы</SectionTag>
      <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
        Уже были.<br />
        <em className="italic text-gold">Говорят сами.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="reveal bg-card p-10 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Text */}
            <p className="text-[14px] text-text-body leading-[1.75] font-light flex-1">
              «{t.text}»
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-forest/10">
              <div className="w-10 h-10 rounded-full bg-forest/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[14px] text-forest">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-[13px] font-normal text-forest">{t.name}</p>
                <p className="text-[11px] text-text-muted-custom">{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-text-muted-custom/60 mt-8 tracking-[1px]">
        * Имена изменены по просьбе участников. Реальные отзывы.
      </p>
    </section>
  );
};

export default Testimonials;
