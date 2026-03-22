# CURRENT_STATUS.md
> Текущий прогресс и план реализации по этапам

---

## Статус: АРХИТЕКТУРА ГОТОВА → Начинаем фазу 1

**Дата последнего обновления:** [заполни при старте]
**Текущая фаза:** 0 (архитектура) → переходим к Фазе 1

---

## Фазы реализации

### Фаза 0 — Архитектура (ГОТОВО ✅)

- [x] Документация в `/docs`
- [x] PROJECT_OVERVIEW.md
- [x] ARCHITECTURE.md
- [x] TECH_STACK.md
- [x] CURRENT_STATUS.md (этот файл)

---

### Фаза 1 — Основа проекта (Старт здесь)

**Цель:** Рабочий Next.js проект с базовой структурой

**Задачи:**

- [ ] `npx create-next-app@latest` с флагами из TECH_STACK.md
- [ ] Установить все зависимости (framer-motion, three, lenis, next-themes, canvas-confetti)
- [ ] Настроить Tailwind v4 + CSS Custom Properties (цвета из TECH_STACK.md)
- [ ] Создать `src/styles/themes.css` с тёмной и светлой темой
- [ ] Настроить шрифты Syne + Space Grotesk через `next/font/google`
- [ ] Создать `app/layout.tsx` с ThemeProvider + SmoothScroll
- [ ] Создать базовый `app/page.tsx` (пустые плейсхолдеры секций)
- [ ] Создать `lib/utils.ts` (cn() функция)
- [ ] Создать `lib/animations.ts` (shared variants)
- [ ] Создать `.cursorrules` файл
- [ ] Убедиться что `npm run dev` работает без ошибок

**Результат Фазы 1:** Пустая страница с правильными шрифтами и тёмной темой

---

### Фаза 2 — Hero Section

**Цель:** Wow-эффект при загрузке страницы

**Задачи:**

- [ ] Создать папку `components/sections/HeroSection/`
- [ ] Реализовать `HeroText.tsx` — заголовок со stagger-анимацией
- [ ] Реализовать `GradientOrb.tsx` — CSS/SVG анимированные сферы на фоне
- [ ] Реализовать `ParticleField.tsx` — Three.js частицы (dynamic import)
- [ ] Собрать `HeroSection/index.tsx`
- [ ] Добавить Navbar с ThemeToggle
- [ ] Scroll-down индикатор

**Проверка:** Страница загружается с wow-эффектом, анимация плавная, смена темы работает

---

### Фаза 3 — Animations Section

**Цель:** Показать возможности Framer Motion

**Задачи:**

- [ ] Создать `components/sections/AnimationsSection/`
- [ ] `StaggerCards.tsx` — 6 карточек с IntersectionObserver trigger
- [ ] `ScrollReveal.tsx` — элементы с разными easing при скролле
- [ ] `FloatingElements.tsx` — parallax с useMousePosition
- [ ] Хук `hooks/useInView.ts`
- [ ] Хук `hooks/useMousePosition.ts`
- [ ] Хук `hooks/useScrollProgress.ts`

**Проверка:** При скролле к секции карточки появляются по очереди

---

### Фаза 4 — Interactivity Section

**Цель:** "Живые" интерактивные элементы

**Задачи:**

- [ ] Создать `components/sections/InteractivitySection/`
- [ ] `ConfettiButton.tsx` — конфетти при клике
- [ ] `MorphButton.tsx` — морфинг формы
- [ ] `AnimatedSlider.tsx` — draggable кастомный слайдер
- [ ] `ToggleSwitch.tsx` — fluid-переключатель
- [ ] `RippleButton.tsx` — ripple эффект

**Проверка:** Все элементы отзываются на взаимодействие, нет задержек

---

### Фаза 5 — Visual Effects Section

**Цель:** Демонстрация визуальных техник

**Задачи:**

- [ ] Создать `components/sections/VisualEffectsSection/`
- [ ] `GlassmorphismCard.tsx` — стеклянная карточка + spotlight
- [ ] `GradientCard.tsx` — анимированный градиент
- [ ] `GlowEffect.tsx` — neon glow при hover
- [ ] `NeonText.tsx` — текст со свечением
- [ ] `AuroraBg.tsx` — aurora-анимация

**Проверка:** Все эффекты работают в тёмной И светлой теме

---

### Фаза 6 — Responsive Section

**Цель:** Показать адаптивность наглядно

**Задачи:**

- [ ] `DevicePreview.tsx` — frame-контейнер с Framer Motion layout
- [ ] `ViewportToggle.tsx` — переключатель desktop/tablet/mobile
- [ ] Реальное изменение размера с перестройкой контента

**Проверка:** Переключение между режимами анимированное и smooth

---

### Фаза 7 — Footer + Полировка

**Цель:** Финальные штрихи

**Задачи:**

- [ ] `FooterSection/index.tsx` — footer с CTA
- [ ] SEO: og:image, description, title
- [ ] Performance audit (Lighthouse)
- [ ] Проверить `prefers-reduced-motion` — все анимации должны выключаться
- [ ] Проверить на мобильных устройствах (реальный тест)
- [ ] Проверить светлую тему — все элементы должны выглядеть хорошо
- [ ] Финальный review кода

---

### Фаза 8 — Деплой

- [ ] Создать репозиторий на GitHub
- [ ] Подключить Vercel
- [ ] Настроить домен (опционально)
- [ ] Добавить GitHub ссылку в Footer
- [ ] Обновить CURRENT_STATUS.md

---

## Известные решения / Gotchas

| Проблема | Решение |
|----------|---------|
| Three.js SSR ошибки | `dynamic(() => import('./ParticleField'), { ssr: false })` |
| Framer Motion + next-themes мигание | `suppressHydrationWarning` на `<html>` |
| Backdrop-filter не работает в Firefox | Fallback: `background: rgba(..., 0.15)` без blur |
| Canvas-confetti на мобильном | `window.innerWidth < 768 ? particleCount: 60 : 120` |
| Lenis + Framer Motion конфликт | Синхронизация через `lenis.on('scroll', () => ScrollTrigger.update())` |

---

## Команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Проверить TypeScript
npm run type-check

# Линтер
npm run lint

# Превью production build
npm run start
```

---

## Следующее действие

**→ Открой терминал и выполни:**
```bash
npx create-next-app@latest vibe-coding-playground \
  --typescript --tailwind --app --src-dir --import-alias "@/*" --no-eslint
```

**→ Затем следуй Фазе 1 в этом файле**
