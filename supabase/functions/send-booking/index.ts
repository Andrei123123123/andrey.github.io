const ALLOWED_ORIGINS = [
  "https://tennerife-tennis.com",
  "https://www.tennerife-tennis.com",
  "https://tennis-tenerife.lovable.app",
];
const ALLOWED_ORIGIN_SUFFIXES = [".lovable.app", ".lovableproject.com"];

const baseCorsHeaders = {
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
};

const isOriginAllowed = (origin: string | null): boolean => {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_ORIGIN_SUFFIXES.some((s) => host.endsWith(s));
  } catch {
    return false;
  }
};

const buildCors = (origin: string | null) => ({
  ...baseCorsHeaders,
  "Access-Control-Allow-Origin": isOriginAllowed(origin) ? (origin as string) : "null",
});

const GATEWAY_URL = "https://connector-gateway.lovable.dev/telegram";

const clean = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = buildCors(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!isOriginAllowed(origin)) {
    return new Response(JSON.stringify({ ok: false, error: "Forbidden" }), {
      status: 403,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const TELEGRAM_API_KEY = Deno.env.get("TELEGRAM_API_KEY");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY || !TELEGRAM_CHAT_ID) {
      throw new Error("Missing required environment variables");
    }

    const body = await req.json().catch(() => ({}));

    // Honeypot: silently accept bot submissions
    const honeypot = clean(body?.website ?? body?.hp, 200);
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }


    // Extended application form fields
    const name = clean(body?.name, 100);
    const telegram = clean(body?.telegram, 80);
    const instagram = clean(body?.instagram, 80);
    const age = clean(body?.age, 10);
    const level = clean(body?.level, 80);
    const occupation = clean(body?.occupation, 200);
    // Optional / legacy
    const phone = clean(body?.phone, 50);
    const flightHelp = clean(body?.flightHelp, 10);
    const visaHelp = clean(body?.visaHelp, 10);
    const beenTenerife = clean(body?.beenTenerife, 10);
    const season = clean(body?.season, 20);
    const note = clean(body?.note, 1000);

    if (!name || (!telegram && !phone)) {
      return new Response(
        JSON.stringify({ error: "Имя и Telegram обязательны" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const isWaitlist = season === "02" || season === "season-02";
    const title = isWaitlist
      ? `⏳ <b>Waitlist Season 02 — Tennerife Tennis Retreat</b>`
      : `🎾 <b>Новая заявка — Tennerife Tennis Retreat</b>`;

    const lines: string[] = [
      title,
      ``,
      `<b>Имя:</b> ${escape(name)}`,
    ];
    if (telegram) lines.push(`<b>Telegram:</b> ${escape(telegram)}`);
    if (instagram) lines.push(`<b>Instagram:</b> ${escape(instagram)}`);
    if (phone) lines.push(`<b>Телефон:</b> ${escape(phone)}`);
    if (age) lines.push(`<b>Возраст:</b> ${escape(age)}`);
    if (level) lines.push(`<b>Уровень тенниса:</b> ${escape(level)}`);
    if (occupation) lines.push(`<b>Чем занимается:</b> ${escape(occupation)}`);
    if (beenTenerife) lines.push(`<b>Был на Тенерифе:</b> ${escape(beenTenerife)}`);
    if (flightHelp) lines.push(`<b>Нужен перелёт:</b> ${escape(flightHelp)}`);
    if (visaHelp) lines.push(`<b>Нужна виза:</b> ${escape(visaHelp)}`);
    if (note) lines.push(``, `<b>Комментарий:</b>`, escape(note));
    lines.push(``, `<i>tennerife-tennis.com${isWaitlist ? " · /season-02" : ""}</i>`);

    const text = lines.join("\n");

    const tgRes = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TELEGRAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    const data = await tgRes.json();
    if (!tgRes.ok) {
      console.error("Telegram error:", data);
      throw new Error(`Telegram API failed [${tgRes.status}]`);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("send-booking error:", message);
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
