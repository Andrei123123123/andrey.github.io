import SectionTag from "./SectionTag";
import { Check, MapPin, Sun, Zap, Mountain, Plane } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="bg-forest py-20 lg:py-28 px-6 lg:px-16" id="location">
      <div className="max-w-[1000px]">
        <SectionTag>Локация</SectionTag>
        <h2 className="font-display font-light text-[clamp(28px,3.5vw,44px)] text-sand-light leading-[1.15] mb-12">
          Тенерифе — идеальный<br />
          <em className="italic text-gold">остров для тенниса.</em>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mb-12">
          {[
            { icon: <Sun size={24} />, num: "25–27°C", label: "Температура воздуха" },
            { icon: <Zap size={24} />, num: "55–60%", label: "Влажность · нет жары" },
            { icon: <Mountain size={24} />, num: "300+", label: "Солнечных дней в году" },
            { icon: <Plane size={24} />, num: "~9 ч", label: "Перелёт с пересадкой" },
          ].map((f) => (
            <div key={f.label} className="reveal p-6 border border-gold/10 bg-forest-mid/50 backdrop-blur-sm text-center">
              <div className="text-gold mb-2 flex justify-center">{f.icon}</div>
              <span className="font-display text-[28px] font-light text-gold leading-none block">{f.num}</span>
              <span className="text-[11px] tracking-[1px] text-sand/50 mt-2 block">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="reveal mb-12 border border-gold/10 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3!2d-16.7!3d28.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAzJzAwLjAiTiAxNsKwNDInMDAuMCJX!5e0!3m2!1sru!2ses!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tenerife Tennis Academy на карте"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal">
            <h3 className="font-display text-[18px] text-sand-light mb-4">Почему сентябрь</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Жара спала — комфортно играть весь день",
                "Туристический сезон заканчивается — меньше людей",
                "Море тёплое — купаться после тренировки",
                "Стабильная погода без дождей",
              ].map((f) => (
                <li key={f} className="text-[14px] text-sand/60 flex gap-3 items-start">
                  <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="font-display text-[18px] text-sand-light mb-4">Инфраструктура</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Профессиональные хардовые корты с освещением",
                "Раздевалки и душевые на территории",
                "Вилла с бассейном в 10 мин от кортов",
                "Пляж и океан — 5 минут пешком",
              ].map((f) => (
                <li key={f} className="text-[14px] text-sand/60 flex gap-3 items-start">
                  <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
