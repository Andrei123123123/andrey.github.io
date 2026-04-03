import SectionTag from "./SectionTag";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей К.",
    city: "Москва",
    text: "Ожидал теннис, а получил полноценный перезапуск. Тренировки, океан, компания единомышленников — всё сложилось. Уже планирую вернуться в следующем сезоне.",
  },
  {
    name: "Марина С.",
    city: "Санкт-Петербург",
    text: "Ехала одна и переживала. К третьему дню мы были командой. Тренер подстраивается под каждого — за неделю мой уровень вырос больше, чем за год дома.",
  },
  {
    name: "Дмитрий Р.",
    city: "Дубай",
    text: "Организация на высшем уровне. Визу помогли, трансферы, жильё — не думал ни о чём. Просто взял ракетку и прилетел. Вулкан Тейде и банкет в замке — отдельный шедевр.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-sand-light py-[120px] px-8 lg:px-16">
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

            <div className="flex justify-between items-start">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <Quote size={20} className="text-gold/20" />
            </div>

            <p className="text-[16px] text-text-body leading-[1.75] font-light flex-1">
              «{t.text}»
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-forest/10">
              <div className="w-10 h-10 rounded-full bg-forest/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[16px] text-forest">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-forest">{t.name}</p>
                <p className="text-[13px] text-text-muted-custom">{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[13px] text-text-muted-custom/60 mt-8 tracking-[1px]">
        * Имена изменены по просьбе участников. Реальные отзывы.
      </p>
    </section>
  );
};

export default Testimonials;
