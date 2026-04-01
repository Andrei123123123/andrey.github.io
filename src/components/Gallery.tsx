import { useState } from "react";
import SectionTag from "./SectionTag";
import { X } from "lucide-react";
import day14 from "@/assets/day-14.jpg";
import day15 from "@/assets/day-15.jpg";
import day16 from "@/assets/day-16.jpg";
import day17 from "@/assets/day-17.jpg";
import day18 from "@/assets/day-18.jpg";
import day19 from "@/assets/day-19.jpg";
import day20 from "@/assets/day-20.jpg";

const images = [
  { src: day14, alt: "Тренировка на корте с видом на океан" },
  { src: day15, alt: "Каньон Маска — хайкинг" },
  { src: day16, alt: "Яхта вдоль побережья Los Gigantes" },
  { src: day17, alt: "Чёрный вулканический пляж" },
  { src: day18, alt: "Вулкан Тейде — виды над облаками" },
  { src: day19, alt: "Сёрфинг на волнах Атлантики" },
  { src: day20, alt: "Банкет в замке Сан-Мигель" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-sand-light py-20 lg:py-28 px-6 lg:px-16" id="gallery">
      <SectionTag>Галерея</SectionTag>
      <h2 className="font-display font-light text-[clamp(28px,3.5vw,44px)] text-forest leading-[1.15] mb-12 max-w-[560px]">
        Эмоции,<br />
        <em className="italic text-gold">которые остаются.</em>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`reveal relative overflow-hidden cursor-pointer group ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => setLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-all duration-300 flex items-end p-4">
              <p className="text-[12px] text-sand-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-sand border border-sand/20 bg-transparent cursor-pointer hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
          />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all ${
                  i === lightbox ? "bg-gold w-6" : "bg-sand/30"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
