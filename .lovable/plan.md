## Изменение

В `src/components/TeamSection.tsx` (строки 50–75) заменить «фото-зону» с круглым аватаром на полноразмерный прямоугольный портрет:

- Убрать декоративный градиент-фон, два кольца и точечную текстуру.
- Контейнер фото: `h-[360px]` (мобильно) / `lg:h-[420px]`, `w-full`, `relative overflow-hidden`.
- `<img>` с `object-cover object-top` (чтобы лица не обрезались), `w-full h-full`.
- Поверх фото — мягкий градиент снизу `bg-gradient-to-t from-forest/55 via-forest/15 to-transparent` для читаемости бейджа.
- Бейдж «Организатор» вынести в правый верхний угол: `absolute top-4 right-4`, стиль — `border border-gold/40 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] tracking-[2px] uppercase text-gold font-semibold`.
- Имя организатора оставить в нижней части карточки (как сейчас), либо опционально продублировать поверх фото внизу слева крупным `font-display` текстом золотом — уточню по результату, по умолчанию оставляем имя в текстовом блоке.

Остальная часть карточки (описание, список зон ответственности, кнопка «Написать в Telegram») — без изменений.

## Что трогаем

- Только `src/components/TeamSection.tsx`, блок «Photo zone with decorative background» (строки 51–75).
- Файлы фото `andreyPhoto`, `ivanPhoto` уже есть, переснимать не надо.