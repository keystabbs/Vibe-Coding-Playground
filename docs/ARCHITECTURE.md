# ARCHITECTURE.md
> Архитектура компонентов — детальное описание каждого файла и его ответственности

---

## Полная структура файлов

```
src/
├── app/
│   ├── layout.tsx               ← Root layout: шрифты, ThemeProvider, метаданные
│   ├── page.tsx                 ← Главная страница: собирает все секции
│   └── globals.css              ← Базовые стили, CSS reset, скролл-поведение
│
├── components/
│   │
│   ├── sections/                ← СЕКЦИИ СТРАНИЦЫ
│   │   │
│   │   ├── HeroSection/
│   │   │   ├── index.tsx        ← Точка входа секции, компоновка
│   │   │   ├── ParticleField.tsx← Three.js канвас с частицами
│   │   │   ├── GradientOrb.tsx  ← Анимированные градиентные сферы (CSS/SVG)
│   │   │   └── HeroText.tsx     ← Заголовок с stagger-анимацией появления
│   │   │
│   │   ├── AnimationsSection/
│   │   │   ├── index.tsx        ← Layout секции, заголовок, описание
│   │   │   ├── StaggerCards.tsx ← 6 карточек с поочерёдным появлением
│   │   │   ├── ScrollReveal.tsx ← Элементы, появляющиеся при скролле
│   │   │   └── FloatingElements.tsx ← Парящие элементы с parallax
│   │   │
│   │   ├── InteractivitySection/
│   │   │   ├── index.tsx        ← Layout секции
│   │   │   ├── ConfettiButton.tsx  ← Кнопка → взрыв конфетти
│   │   │   ├── MorphButton.tsx     ← Кнопка морфируется в другую форму
│   │   │   ├── AnimatedSlider.tsx  ← Кастомный слайдер с анимацией трека
│   │   │   ├── ToggleSwitch.tsx    ← Переключатель с fluid-анимацией
│   │   │   └── RippleButton.tsx    ← Кнопка с ripple-эффектом при клике
│   │   │
│   │   ├── VisualEffectsSection/
│   │   │   ├── index.tsx           ← Layout секции
│   │   │   ├── GlassmorphismCard.tsx ← Стеклянная карточка с blur/opacity
│   │   │   ├── GradientCard.tsx    ← Карточка с анимированным градиентом
│   │   │   ├── GlowEffect.tsx      ← Элемент с neon glow при hover
│   │   │   ├── NeonText.tsx        ← Текст с неоновым свечением
│   │   │   └── AuroraBg.tsx        ← Animated aurora-градиент на фоне
│   │   │
│   │   ├── ResponsiveSection/
│   │   │   ├── index.tsx           ← Layout секции
│   │   │   ├── DevicePreview.tsx   ← Фрейм-превью (desktop/tablet/mobile)
│   │   │   └── ViewportToggle.tsx  ← Кнопки переключения режима просмотра
│   │   │
│   │   └── FooterSection/
│   │       └── index.tsx           ← Footer: ссылки, CTA, credits
│   │
│   ├── ui/                      ← БАЗОВЫЕ UI-КОМПОНЕНТЫ
│   │   ├── Button.tsx           ← Универсальная кнопка (variant, size, glow)
│   │   ├── Card.tsx             ← Базовая карточка (glass, gradient, solid)
│   │   ├── Badge.tsx            ← Бейдж/тег для меток технологий
│   │   ├── SectionLabel.tsx     ← Маленький лейбл над заголовком секции
│   │   └── GradientText.tsx     ← Текст с градиентной заливкой
│   │
│   └── layout/                  ← НАВИГАЦИЯ И ОБЁРТКИ
│       ├── Navbar.tsx           ← Фиксированный navbar с навигацией
│       ├── ThemeToggle.tsx      ← Кнопка переключения dark/light
│       └── SmoothScroll.tsx     ← Провайдер плавного скролла (Lenis)
│
├── hooks/
│   ├── useScrollProgress.ts    ← Прогресс скролла страницы (0..1)
│   ├── useInView.ts            ← Элемент в viewport (IntersectionObserver)
│   ├── useMousePosition.ts     ← Позиция мыши для parallax-эффектов
│   └── useReducedMotion.ts     ← Проверяет prefers-reduced-motion
│
├── lib/
│   ├── animations.ts           ← Shared Framer Motion variants
│   ├── utils.ts                ← cn(), clamp() и другие утилиты
│   └── constants.ts            ← Цвета, breakpoints, конфиг секций
│
├── styles/
│   ├── globals.css             ← CSS reset, base styles
│   └── themes.css              ← CSS Custom Properties для тем
│
└── types/
    └── index.ts                ← Типы: Section, Theme, AnimationVariant
```

---

## Детальное описание компонентов

### `app/layout.tsx`

```tsx
// Ответственность: корневой layout приложения
// - Подключает шрифты (Google Fonts: Space Grotesk + Syne)
// - Оборачивает в ThemeProvider (next-themes)
// - Подключает SmoothScroll провайдер
// - Добавляет Navbar
// - Устанавливает базовые метаданные (title, og:image)
```

### `app/page.tsx`

```tsx
// Ответственность: сборка всех секций на одной странице
// - Импортирует все Section-компоненты
// - Расставляет их в правильном порядке
// - НЕ содержит бизнес-логику — только компоновку
```

---

### `components/sections/HeroSection/index.tsx`

**Ответственность:** Первое впечатление. Должен захватить внимание за 2 секунды.

```tsx
// Состав:
// - Полноэкранный контейнер (100vh)
// - ParticleField на фоне (Three.js канвас)
// - GradientOrb — несколько анимированных сфер
// - HeroText — основной текст с stagger-появлением
// - CTA-кнопка "Explore →" со скроллом вниз

// Анимации:
// - При загрузке: stagger fade-in снизу вверх (0.1s между элементами)
// - Постоянно: частицы дрейфуют, сферы медленно пульсируют
// - При скролле: parallax — элементы двигаются с разной скоростью
```

### `components/sections/HeroSection/ParticleField.tsx`

```tsx
// Three.js сцена с ~500 частицами
// - BufferGeometry с рандомными позициями
// - PointsMaterial с кастомным шейдером (glow)
// - Медленное вращение всего поля (RotationY += 0.0005 per frame)
// - Реагирует на позицию мыши (subtle tilt)
// - Оптимизация: requestAnimationFrame, dispose при unmount
```

### `components/sections/HeroSection/HeroText.tsx`

```tsx
// Stagger-анимация для текстового блока
// Использует Framer Motion:
// container variant: staggerChildren: 0.12
// child variant: { hidden: {y: 40, opacity: 0}, visible: {y: 0, opacity: 1} }

// Состав:
// - SectionLabel: "Powered by Claude + Cursor"
// - h1: "Vibe Coding Playground" (font-size: clamp(3rem, 8vw, 7rem))
// - p: подзаголовок
// - CTA кнопка
```

---

### `components/sections/AnimationsSection/index.tsx`

**Ответственность:** Показать мощь анимаций — stagger, scroll-triggered, hover.

```tsx
// Layout: заголовок секции + 3 демо-зоны
// Демо 1: StaggerCards — 6 карточек появляются при входе в viewport
// Демо 2: ScrollReveal — элементы с разными ease/delay
// Демо 3: FloatingElements — парящие иконки с parallax
```

### `components/sections/AnimationsSection/StaggerCards.tsx`

```tsx
// 6 карточек в сетке 3x2
// При входе карточки в IntersectionObserver:
//   animate({ opacity: 1, y: 0, transition: { delay: index * 0.1 } })
// Hover: scale(1.03), rotate(1deg), shadow-xl
// Каждая карточка показывает одну анимационную технику с названием
```

---

### `components/sections/InteractivitySection/ConfettiButton.tsx`

**Ответственность:** Эффект радости от клика.

```tsx
// При клике:
// 1. Framer Motion: кнопка scale(0.95) → scale(1.1) → scale(1)
// 2. canvas-confetti: shoot from button position
//    { particleCount: 100, spread: 70, origin: { x, y } }
// 3. После 0.3s: кнопка меняет текст "🎉 Clicked!" на 2 секунды

// Библиотека: canvas-confetti
```

### `components/sections/InteractivitySection/MorphButton.tsx`

```tsx
// Кнопка с morphing формы через CSS clip-path
// Состояния: pill → circle → square → pill
// Transition: cubic-bezier(0.34, 1.56, 0.64, 1) — spring-эффект
// Использует Framer Motion animate() для layout animations
```

### `components/sections/InteractivitySection/AnimatedSlider.tsx`

```tsx
// Кастомный слайдер (не нативный input[type=range])
// - Draggable thumb (Framer Motion drag с constraints)
// - Анимированный цветной трек (gradient меняется с позицией)
// - Числовое значение появляется/прячется над thumb
// - Haptic feedback (vibration API где доступно)
```

---

### `components/sections/VisualEffectsSection/GlassmorphismCard.tsx`

**Ответственность:** Демонстрация glassmorphism.

```tsx
// Карточка со стеклянным эффектом
// CSS: backdrop-filter: blur(20px), background: rgba(255,255,255,0.08)
// border: 1px solid rgba(255,255,255,0.12)
// При hover: увеличивает blur до blur(30px), opacity border → 0.25
// Движущийся spotlight при движении мыши внутри карточки
// (CSS radial-gradient следит за cursor через JS mousemove)
```

### `components/sections/VisualEffectsSection/GlowEffect.tsx`

```tsx
// Кнопка/карточка с neon glow
// При hover: box-shadow с 3 слоями (ближний, средний, дальний)
// Цвет glow берётся из CSS Custom Property (кастомизируется)
// Анимация: glow пульсирует (keyframes: 0% 50% 100%)
// Используется для showcasing accent-цветов палитры
```

---

### `components/sections/ResponsiveSection/DevicePreview.tsx`

**Ответственность:** Показать адаптивность наглядно.

```tsx
// Контейнер с имитацией device-frame (браузер/планшет/телефон)
// Внутри — уменьшенная версия Hero-секции или карточек
// При смене viewport (ViewportToggle):
//   Framer Motion layout animation меняет width/height контейнера
//   Внутреннее содержимое перестраивается по-настоящему (реальный CSS)

// Ширины:
//   Desktop: 900px preview (scaled)
//   Tablet: 768px preview
//   Mobile: 375px preview
```

---

### `components/ui/Button.tsx`

```tsx
// Варианты (variant prop):
//   'primary'  — заполненный accent-цветом
//   'outline'  — обводка + прозрачный фон
//   'ghost'    — только текст + hover-фон
//   'glow'     — primary + neon-glow эффект

// Размеры (size prop): 'sm' | 'md' | 'lg'

// Всегда: hover scale(1.02), active scale(0.98), transition 150ms
// Поддерживает asChild паттерн (Radix)
```

### `components/ui/Card.tsx`

```tsx
// Варианты:
//   'solid'    — фоновый цвет поверхности
//   'glass'    — glassmorphism (backdrop-blur)
//   'gradient' — анимированный градиентный border
//   'outlined' — только border

// Hover-состояние задаётся через hoverable={true} prop
```

---

### `hooks/useInView.ts`

```ts
// Обёртка над IntersectionObserver
// Возвращает: { ref, isInView, hasBeenInView }
// hasBeenInView = true после первого появления (не сбрасывается)
// Используется для trigger-once анимаций
// Пример:
//   const { ref, isInView } = useInView({ threshold: 0.2 })
//   <motion.div ref={ref} animate={isInView ? 'visible' : 'hidden'} />
```

### `hooks/useMousePosition.ts`

```ts
// Отслеживает позицию мыши
// Возвращает: { x, y, normalizedX, normalizedY }
// normalizedX/Y — значения от -1 до 1 (относительно центра экрана)
// Используется для parallax и cursor-следящих эффектов
// Throttle: requestAnimationFrame (не addEventListener напрямую)
```

---

### `lib/animations.ts`

```ts
// Shared Framer Motion variants для переиспользования:

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } }
}

// + slideInLeft, slideInRight, rotateIn, blurIn
```

---

## Паттерны и правила кода

### Правило 1: Одна ответственность на секцию
Каждая `Section/index.tsx` — только layout-компонент. Вся логика — в дочерних файлах.

### Правило 2: CSS Custom Properties для всего анимируемого
```css
/* Неправильно */
.card:hover { box-shadow: 0 0 30px #7c5cfc; }

/* Правильно */
.card { --glow-opacity: 0; box-shadow: 0 0 30px rgba(124, 92, 252, var(--glow-opacity)); }
.card:hover { --glow-opacity: 0.6; }
```

### Правило 3: `will-change` только там где нужно
Добавляй `will-change: transform, opacity` только к анимируемым элементам во время анимации, убирай после.

### Правило 4: Новая секция = новая папка
Хочешь добавить секцию `ParallaxSection`? Создаёшь:
```
components/sections/ParallaxSection/
├── index.tsx
└── [дочерние компоненты]
```
Добавляешь в `app/page.tsx`. Готово.

### Правило 5: Типы для всего
```ts
// types/index.ts
export type SectionId = 'hero' | 'animations' | 'interactivity' | 'visual-effects' | 'responsive'
export type Theme = 'dark' | 'light'
export type AnimationVariant = 'hidden' | 'visible'
```
