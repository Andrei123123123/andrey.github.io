import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-forest text-sand-light flex items-center justify-center px-6">
      <div className="max-w-[560px] text-center">
        <p className="text-[12px] tracking-[4px] uppercase text-gold mb-6 font-medium">
          404 · Страница не найдена
        </p>
        <h1 className="font-display font-medium text-[clamp(40px,6vw,72px)] leading-[1.05] text-sand-light tracking-[-0.5px]">
          Этой страницы<br /><em className="not-italic text-gold">здесь нет</em>
        </h1>
        <p className="mt-8 text-[17px] text-sand/70 leading-[1.65]">
          Возможно, ссылка устарела или вы перешли по неверному адресу. Вернитесь на главную и продолжите знакомство с ретритом.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-3 mt-10 py-4 px-10 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase no-underline cursor-pointer hover:bg-gold-light transition-colors duration-300 rounded-md"
        >
          На главную <ArrowRight size={16} />
        </a>
      </div>
    </main>
  );
};

export default NotFound;
