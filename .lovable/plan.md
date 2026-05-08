## Чистка сайта (без новых фото)

### 1. Удалить дубли секций
- `src/components/Advantages.tsx` — удалить файл (виза/тур/community уже раскрыты в FAQ, Pricing, CommunitySection)
- `src/components/Testimonials.tsx` — удалить файл (первый сезон, отзывов нет)
- `src/pages/Index.tsx` — убрать импорт `Advantages` и блок `<Advantages />` между TenerifeSection и Pricing

### 2. Упростить Hero
- `src/pages/Index.tsx` — удалить правую колонку «Наши сильные стороны» (строки ~301–354). Сетка `grid-cols-1 lg:grid-cols-2` → `max-w-[760px]`. Левая колонка с заголовком + 4 UTP-карточками остаётся.

### 3. Починить дни недели в программе
- `src/pages/Index.tsx`, массив `days`: 14 октября 2026 = среда. Поменять `wd`:
  - 14 → Ср, 15 → Чт, 16 → Пт, 17 → Сб, 18 → Вс, 19 → Пн, 20 → Вт

### 4. Уточнить FAQ про перелёт
- `src/pages/Index.tsx`, FAQ «Включён ли перелёт?»:
  «**Нет, перелёт оплачивается отдельно.** Помогаем подобрать рейсы. Аэропорт — Тенерифе Юг (TFS), ~9 часов из Москвы с пересадкой.»

### 5. Финальный CTA — упростить
- `src/pages/Index.tsx`, секция `#cta`: удалить форму с именем/телефоном (строки 572–612) и success-modal (строки 657–693). Оставить заголовок + 3 кнопки мессенджеров (TG/WA/MAX) + строку «или напишите на почту…» (если нужна).
- Также убрать `formData`, `formSent`, `formSubmitting`, `handleSubmit` — больше не используются.

### 6. Память
- Обновить `mem://project/funnel-structure`: убрать упоминания Advantages, Testimonials и формы.

### Файлы
- удалить: `src/components/Advantages.tsx`, `src/components/Testimonials.tsx`
- править: `src/pages/Index.tsx`
- править память: `mem://project/funnel-structure`

### Что НЕ делаю в этом раунде
- MenuSection (3 варианта меню) — оставляю, заказчик не просил
- Карусель Тенерифе — оставляю
- Фото / тренер / OG-image — нужны материалы от заказчика