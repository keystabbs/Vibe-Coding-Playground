# TECH_STACK.md
> Технологический стек с обоснованием каждого выбора

---

## Быстрый обзор

| Категория | Технология | Версия |
|-----------|-----------|--------|
| Фреймворк | Next.js | 14+ (App Router) |
| Язык | TypeScript | 5+ |
| Стили | Tailwind CSS | v4 |
| Анимации | Framer Motion | 11+ |
| 3D / Canvas | Three.js | r163+ |
| Плавный скролл | Lenis | 1.1+ |
| Темы | next-themes | 0.3+ |
| Конфетти | canvas-confetti | 1.9+ |
| Шрифты | Syne + Space Grotesk | Google Fonts |
| Деплой | Vercel | — |

---

## Детальное обоснование

### Next.js 14 (App Router)

**Почему не Vite + React?**

Для showcase-сайта нужны:
- **SSG (Static Site Generation)** — мгновенная загрузка, хорошие Core Web Vitals
- **Автоматическая оптимизация** шрифтов, изображений (`next/font`, `next/image`)
- **File-based routing** — структура папок = маршруты
- **Zero-config деплой** на Vercel

Next.js 14 с App Router даёт всё это из коробки. Vite потребует ручной настройки SSG и оптимизаций.

```bash
npx create-next-app@latest vibe-coding-playground \
  --typescript --tailwind --app --src-dir --import-alias "@/*"
```

---

### TypeScript 5

**Обязателен.** Причины:
- Типизация props = понятные интерфейсы компонентов
- IDE автодополнение ускоряет разработку с Cursor
- Ранние ошибки, не runtime
- `satisfies` оператор для типизации анимационных конфигов

---

### Tailwind CSS v4

**Почему Tailwind, а не CSS Modules / Styled Components?**

Для showcase-проекта скорость важнее идеальной архитектуры стилей.
- Утилитарные классы = не переключаешься между файлами
- v4 убрал `tailwind.config.js`, использует CSS-файл для конфига
- Нативная поддержка CSS Custom Properties
- `@apply` для повторяемых паттернов в компонентах

```css
/* tailwind.config в v4 — в CSS-файле */
@import "tailwindcss";

@theme {
  --color-accent-primary: #7c5cfc;
  --color-accent-secondary: #ff4ecd;
  --color-accent-cyan: #00d4ff;
}
```

---

### Framer Motion 11

**Главная библиотека анимаций проекта.**

**Почему Framer Motion, а не GSAP / CSS-анимации?**

| | Framer Motion | GSAP | CSS |
|---|---|---|---|
| React-интеграция | Нативная | Ручная | Нет |
| Layout animations | ✅ Автоматические | Сложно | Невозможно |
| Gesture API | Drag, Pan, Hover | Нет | Нет |
| Bundle size | ~45kb | ~67kb | 0 |
| Декларативность | ✅ | Императивно | Декларативно |

Framer Motion позволяет писать анимации как JSX-props:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03, rotate: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
```

**Используется для:**
- Stagger-появление карточек
- Hover/tap эффекты (whileHover, whileTap)
- Layout animations (морфинг)
- Scroll-triggered анимации (useScroll, useTransform)
- Page-level motion (AnimatePresence)

---

### Three.js (только Hero-секция)

**Почему Three.js только для Hero?**

Three.js = тяжёлая зависимость (~600kb). Оправдана только для WOW-эффекта в Hero. Остальные визуальные эффекты делаются через CSS + SVG.

**Что делается через Three.js:**
- Поле частиц (~500 Points) с кастомным шейдером
- Реакция на движение мыши
- Оптимизация: lazy load через `dynamic(() => import(...), { ssr: false })`

```tsx
// Загружаем только на клиенте, только когда нужно
const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />
})
```

---

### Lenis (плавный скролл)

**Почему Lenis, а не нативный скролл?**

Lenis добавляет momentum-скролл (инерция) — ощущение "физического" прокручивания страницы. Критично для showcase-проекта где скролл = часть UX-опыта.

```ts
// Синхронизируется с Framer Motion:
import { useLenis } from 'lenis/react'
lenis.on('scroll', () => {
  // Обновляем scroll-triggered анимации
})
```

---

### next-themes

Самый простой способ dark/light режима в Next.js App Router.

```tsx
// layout.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

CSS Custom Properties меняются автоматически через `[data-theme="light"]` селектор.

---

### canvas-confetti

Единственная зависимость для конфетти-эффекта в секции Interactivity.
- Размер: ~14kb
- Zero dependencies
- Поддерживает кастомные цвета, формы, физику

```ts
import confetti from 'canvas-confetti'
confetti({
  particleCount: 120,
  spread: 80,
  colors: ['#7c5cfc', '#ff4ecd', '#00d4ff'],
  origin: { x: buttonX / window.innerWidth, y: buttonY / window.innerHeight }
})
```

---

## Цветовая палитра

### Тёмная тема (по умолчанию)

```css
:root, [data-theme="dark"] {
  /* Фоны */
  --bg-base: #080810;        /* Основной фон — почти чёрный с синим */
  --bg-surface: #0f0f1a;     /* Поверхность карточек */
  --bg-elevated: #161625;    /* Поднятые элементы (navbar, modal) */

  /* Акценты */
  --accent-primary: #7c5cfc;   /* Электрик-фиолетовый — главный */
  --accent-secondary: #ff4ecd; /* Hot pink — второстепенный */
  --accent-cyan: #00d4ff;      /* Cyan — третичный */
  --accent-gold: #ffb800;      /* Золотой — для особых моментов */

  /* Текст */
  --text-primary: #f0f0ff;     /* Основной текст */
  --text-secondary: #a0a0c0;   /* Вторичный (описания) */
  --text-muted: #606080;       /* Заглушённый (метки) */

  /* Границы */
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.16);
  --border-accent: rgba(124, 92, 252, 0.4);
}
```

### Светлая тема

```css
[data-theme="light"] {
  /* Фоны */
  --bg-base: #f5f5ff;
  --bg-surface: #ffffff;
  --bg-elevated: #ebebff;

  /* Акценты — те же, но чуть темнее для контраста */
  --accent-primary: #6b46fb;
  --accent-secondary: #e93db5;
  --accent-cyan: #0099cc;
  --accent-gold: #d49400;

  /* Текст */
  --text-primary: #0a0a1a;
  --text-secondary: #404060;
  --text-muted: #808090;

  /* Границы */
  --border-default: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.16);
  --border-accent: rgba(107, 70, 251, 0.3);
}
```

### Использование в Tailwind v4

```css
@theme {
  --color-accent-primary: var(--accent-primary);
  --color-accent-secondary: var(--accent-secondary);
  --color-bg-base: var(--bg-base);
  --color-bg-surface: var(--bg-surface);
  /* ... */
}
```

Использование в JSX:
```tsx
<div className="bg-bg-surface text-text-primary border border-border-default">
```

---

## Шрифты

### Syne — display/заголовки

Геометрический, современный, немного агрессивный. Идеален для больших заголовков.
- Hero h1, секционные заголовки
- Weights: 400, 700, 800

### Space Grotesk — тело

Техничный, читаемый, немного retro-futuristic. Отлично работает на тёмном фоне.
- Основной текст, UI-элементы
- Weights: 300, 400, 500, 600

```tsx
// layout.tsx
import { Syne, Space_Grotesk } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], variable: '--font-display', weight: ['400', '700', '800'] })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '500', '600'] })
```

---

## Package.json зависимости

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.3.0",
    "three": "^0.165.0",
    "@types/three": "^0.165.0",
    "lenis": "^1.1.0",
    "next-themes": "^0.3.0",
    "canvas-confetti": "^1.9.3",
    "@types/canvas-confetti": "^1.6.4",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

---

## Конфигурация .cursorrules

```
Ты помогаешь разрабатывать "Vibe Coding Playground" — showcase-сайт на Next.js 14.

Стек: Next.js 14 (App Router), TypeScript, Tailwind CSS v4, Framer Motion 11, Three.js.

Правила:
1. Анимации через Framer Motion, НЕ через CSS transition напрямую (кроме микро-анимаций)
2. Стили через Tailwind-классы, кастомные CSS только для сложных эффектов (glassmorphism, glow)
3. Каждая секция в отдельной папке src/components/sections/[Name]Section/
4. Хуки в src/hooks/, утилиты в src/lib/
5. TypeScript strict mode — типизируй всё
6. "use client" только там, где реально нужен клиент (анимации, события, состояние)
7. Оптимизация: Three.js — dynamic import с { ssr: false }
8. Цвета через CSS Custom Properties (см. TECH_STACK.md), НЕ хардкодить hex в JSX
9. Уважай prefers-reduced-motion (хук useReducedMotion)
10. Читай docs/ перед работой над новой секцией
```
