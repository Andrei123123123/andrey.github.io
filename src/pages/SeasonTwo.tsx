import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-tenerife.jpg";

const SeasonTwo = () => {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !telegram.trim()) {
      toast({ title: "Заполните имя и Telegram", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-booking", {
        body: { name, telegram, note, season: "02" },
      });
      if (error) throw error;
      setDone(true);
    } catch {
      toast({ title: "Что-то пошло не так. Напишите нам в Telegram.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-forest text-sand-light">
      <Helmet>
        <title>Season 02 — лист ожидания Tennerife Tennis Retreat (осень 2027)</title>
        <meta name="description" content="Лист ожидания на Season 02 Tennerife Tennis Retreat — осень 2027. Участникам вейтлиста открываем продажи на 2 недели раньше публичного старта." />
        <link rel="canonical" href="https://tennerife-tennis.com/season-02" />
        <meta property="og:url" content="https://tennerife-tennis.com/season-02" />
        <meta property="og:title" content="Season 02 — лист ожидания Tennerife Tennis Retreat" />
        <meta property="og:description" content="Лист ожидания Season 02 — осень 2027. Приоритетный доступ к продажам за 2 недели до публичного старта." />
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/75 to-forest" />
        </div>

        <nav className="relative z-10 px-6 lg:px-16 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase text-sand/70 hover:text-gold transition-colors no-underline">
            <ArrowLeft size={14} /> На главную
          </Link>
        </nav>

        <div className="relative z-10 flex-1 flex items-center px-6 lg:px-16 py-20">
          <div className="max-w-[920px] mx-auto w-full">
            <p className="text-[12px] tracking-[4px] uppercase text-gold mb-8 font-medium">
              Season 02 · Осень 2027
            </p>
            <h1 className="font-display font-medium text-[clamp(40px,6.5vw,88px)] leading-[1.02] tracking-[-0.5px] max-w-[820px]">
              Места на сезон 2026<br /><em className="not-italic text-gold">распределяются.</em>
            </h1>
            <p className="mt-8 text-[18px] md:text-[20px] text-sand/80 leading-[1.6] font-light max-w-[640px]">
              Если хотите попасть в следующий выпуск — оставьте заявку. Откроем продажи Season 02 для участников вейтлиста на 2 недели раньше остальных.
            </p>

            {/* Form / Confirmation */}
            <div className="mt-14 max-w-[560px]">
              {done ? (
                <div className="p-8 lg:p-10 bg-forest-light/40 border border-gold/25 rounded-2xl">
                  <p className="text-[12px] tracking-[3px] uppercase text-gold mb-4 font-medium">Заявка принята</p>
                  <p className="font-display text-[28px] leading-[1.25] mb-3">Вы в листе Season 02.</p>
                  <p className="text-[15px] text-sand/70 leading-[1.7]">
                    Свяжемся первыми, как откроем даты и продажи. Никаких рассылок.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="season2-name" className="block text-[11px] tracking-[2px] uppercase text-sand/55 mb-2 font-medium">Имя</label>
                    <input
                      id="season2-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-b border-sand/25 py-3 text-[16px] text-sand-light focus:outline-none focus:border-gold transition-colors"
                      placeholder="Как к вам обращаться"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="season2-telegram" className="block text-[11px] tracking-[2px] uppercase text-sand/55 mb-2 font-medium">Telegram</label>
                    <input
                      id="season2-telegram"
                      type="text"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      className="w-full bg-transparent border-b border-sand/25 py-3 text-[16px] text-sand-light focus:outline-none focus:border-gold transition-colors"
                      placeholder="@username"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="season2-note" className="block text-[11px] tracking-[2px] uppercase text-sand/55 mb-2 font-medium">Комментарий <span className="opacity-50 normal-case tracking-normal">— по желанию</span></label>
                    <textarea
                      id="season2-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="w-full bg-transparent border-b border-sand/25 py-3 text-[16px] text-sand-light focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Уровень тенниса, чем занимаетесь, ожидания"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex items-center justify-center gap-3 py-4 px-10 bg-gold text-forest font-body text-[12px] font-semibold tracking-[2.5px] uppercase border-none cursor-pointer hover:bg-gold-light transition-all duration-300 rounded-md disabled:opacity-60 disabled:cursor-not-allowed self-start"
                  >
                    {submitting ? "Отправляем…" : (<>В лист Season 02 <ArrowRight size={16} /></>)}
                  </button>
                  <p className="text-[12px] text-sand/45 leading-[1.6] mt-2">
                    Заявка ничего не обязывает. Просто закрепляет за вами приоритет.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeasonTwo;
