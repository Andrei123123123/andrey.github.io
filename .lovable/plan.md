## 1. Договор-оферта

**Страница `/contract`** (новый роут):
- `src/pages/Contract.tsx` — статичная страница с текстом оферты в типографичном узком контейнере (форест-кремовая тема, как Privacy). Заголовок «Договор-оферта», дата редакции, разделы (Предмет, Стоимость, Порядок оплаты, Отмена и возврат, Ответственность, Реквизиты).
- `src/App.tsx` — добавить `<Route path="/contract" element={<Contract />} />`.
- Установить `document.title` и описание для SEO.

**Ссылки на договор:**
- Футер `Index.tsx` — пункт «Договор-оферта» рядом с «Политика конфиденциальности».
- Pricing-блок — мелкая строка под основной картой: «Бронируя место, вы соглашаетесь с [договором-офертой]».
- `BookingModal.tsx` — мелким текстом под кнопкой отправки: «Отправляя заявку, вы соглашаетесь с [офертой]».
- FAQ — добавить вопрос «Где почитать договор?» со ссылкой на `/contract`.

Текст оферты — поставлю аккуратную болванку на основе известных условий (€1950, отмена при несостоявшемся кемпе = 100% возврат и т.д.). Пользователь сможет позже отредактировать.

## 2. Season 02 — больше видимости

- **Тонкая полоска перед футером на `/`**: одна строка на форест-фоне «Сезон 2026 закрывается · Лист ожидания Season 02 →», ссылка на `/season-02`. Вставлю между секцией Apply CTA и футером.
- **Навигация**: добавить пункт «Season 02» в десктопную навигацию и в `MobileMenu` (после «Вопросы»), визуально приглушённый, со стрелкой.
- **FAQ**: новый вопрос «А если не попаду в этот сезон?» — короткий ответ + ссылка на `/season-02`.

## 3. OG-картинка 1200×630

- Сгенерировать `src/assets/og-image.jpg` (premium tier для читаемости текста): фото океан/корт + текст «Tennerife Tennis Camp · 18–24 октября 2026».
- Скопировать в `public/og-image.jpg` (или импортировать) и прописать в `index.html`:
  - `<meta property="og:image" content="https://tennerife-tennis.com/og-image.jpg" />`
  - `og:image:width`, `height`, `<meta name="twitter:card" content="summary_large_image">`.

## 4. Lazy-load аудит

- `Index.tsx` фоновое изображение pricing/apply (`day20`) — добавить `loading="lazy"` где ещё не выставлено.
- Проверить все `<img>` в `MenuSection`, `VillaSection`, `TenerifeSection`, `TeamSection` — везде уже `loading="lazy"`, оставляем.
- Hero-видео не трогаем (LCP).

## 5. Sticky CTA на десктопе

- Расширить `StickyMobileCTA.tsx` → переименовать в `StickyCTA` (или добавить десктоп-вариант):
  - Появляется после прокрутки за hero (~scrollY > 800).
  - Десктоп: правый-нижний угол, компактная панель «Осталось N мест · Оставить заявку» с золотой кнопкой; не перекрывает контент.
  - Скрывается, когда пользователь дошёл до секции `#apply` (IntersectionObserver), чтобы не дублировать CTA.

## Технические детали

```
src/
├── pages/Contract.tsx              (NEW)
├── App.tsx                         (+route)
├── pages/Index.tsx                 (+Season strip, +FAQ items, +nav link, +contract links, +sticky scope)
├── components/MobileMenu.tsx       (+Season 02 link)
├── components/BookingModal.tsx     (+contract consent line)
├── components/StickyMobileCTA.tsx  (desktop variant + hide-on-apply)
├── assets/og-image.jpg             (NEW, generated 1200×630 premium)
└── index.html                      (og:image meta tags)
```

Не трогаю: бизнес-логику BookingModal, edge-функцию, верстку существующих секций кроме указанных.
