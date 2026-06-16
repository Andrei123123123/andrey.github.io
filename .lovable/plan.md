# План: двуязычный сайт (RU/EN)

## Что делаем
1. Добавляем лёгкий i18n без библиотек: контекст `LanguageProvider` + хук `useT()`.
2. По умолчанию — RU. Выбор языка сохраняем в `localStorage` (`lang`), URL не трогаем.
3. В шапке (Navigation, desktop + mobile) — компактный переключатель `RU / EN`.
4. Перевожу весь контент сайта на английский в премиум-тоне (private, curated, retreat, ocean energy и т.д.).
5. Обновляю `<html lang>` динамически при переключении.

## Архитектура переводов

```text
src/i18n/
  LanguageContext.tsx    // provider, useLang(), useT()
  translations.ts        // { ru: {...}, en: {...} } — плоские ключи по секциям
  LanguageSwitcher.tsx   // кнопка RU | EN
```

- `useT()` возвращает функцию `t("hero.title")`.
- Ключи группируются по компонентам: `nav.*`, `hero.*`, `whatsIncluded.*`, `programme.*`, `villa.*`, `team.*`, `tenerife.*`, `menu.*`, `pricing.*`, `faq.*`, `community.*`, `partners.*`, `footer.*`, `booking.*`, `notFound.*`, `cookie.*`.
- Provider оборачивает App в `src/App.tsx`.

## Переключатель языка
- Desktop: справа в Navigation, перед CTA «Забронировать».
- Mobile: в шапке MobileMenu (вверху overlay) и в обычной мобильной шапке.
- Вид: две маленькие кнопки `RU` / `EN`, активная — gold, неактивная — sand/60. Без флагов, премиально и тихо.

## Какие файлы трогаем
Замена строк через `t(...)` в:
- `Navigation`, `MobileMenu`, `StickyMobileCTA`, `FloatingTelegram` (aria-labels)
- `HeroSection`, `WhatsIncludedSection`, `ProgrammeSection`, `VillaSection`, `TeamSection`, `TenerifeSection`, `MenuSection`, `CommunitySection`, `PartnersSection`, `PricingSection`, `FAQSection`, `Footer`
- `BookingModal` (поля формы, плейсхолдеры, ошибки, success)
- `CookieConsent`
- `pages/NotFound.tsx`, `pages/Privacy.tsx`, `pages/Contract.tsx`, `pages/SeasonTwo.tsx`
- `index.html` (title/description оставляем RU как дефолт; динамический title/description обновляется через провайдер при смене языка)

## SEO
- Один URL, язык переключается клиентом. `<html lang>` синхронизируется. JSON-LD оставляем на RU как основном (можно дополнить, если попросишь).
- Канонический URL не меняется.

## Тон перевода (EN)
- Короткие, уверенные фразы. Никакого AI-fluff и продажного «hurry up».
- Лексика: private retreat, ambitious people, curated week, ocean energy, community, lifestyle.
- Заголовок Hero: *Private tennis retreat for ambitious people*.
- Цены оставляем `€1950`, даты `18–24 October 2026`.

## Что НЕ делаем
- Не добавляем библиотеку i18next (избыточно для двух языков).
- Не меняем структуру роутов и URL.
- Не трогаем интеграцию с Telegram и edge-функцию.

После апрува переключаюсь в build mode и реализую за один проход.