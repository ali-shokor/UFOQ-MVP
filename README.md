# UFOQ Academy

A premium, dark-themed educational academy website built with React. Designed for university students — starting with Computer Science, with future expansion to other majors.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Component Library](#component-library)
- [Sections & Pages](#sections--pages)
- [Features](#features)
- [Routing](#routing)
- [Context & State](#context--state)
- [Data Architecture](#data-architecture)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Animations](#animations)
- [Security Architecture](#security-architecture)
- [Future Roadmap](#future-roadmap)

---

## Overview

UFOQ Academy is an MVP educational platform that provides structured, expert-led courses for university students. The website features a premium dark UI with soft gradients, glow effects, and smooth animations. It is designed to feel like a real startup brand — not a generic school page.

**Current active major:** Computer Science  
**Other majors:** Visible but locked/coming soon (Physics, Mathematics, Electronics, Statistics, Biology, Biochemistry, Geology, Chemistry)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19.1 |
| Build Tool | Vite 6.3 |
| Routing | React Router DOM 7 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Styling | CSS (component-scoped, no CSS-in-JS) |
| Font | Inter (Google Fonts) |

**No TypeScript yet** — but the structure is ready for a clean migration to `.tsx` files later.

---

## Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable base components
│   │   ├── Button.jsx + CSS
│   │   ├── Card.jsx + CSS
│   │   └── Modal.jsx + CSS
│   │
│   ├── layout/                 # App shell
│   │   ├── Header.jsx + CSS
│   │   ├── Footer.jsx + CSS
│   │   └── Layout.jsx
│   │
│   ├── hero/                   # Hero section
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── sections/               # Marketing sections
│   │   ├── ProblemSolution.jsx + CSS
│   │   ├── WhyUFOQ.jsx + CSS
│   │   ├── AboutUs.jsx + CSS
│   │   ├── Testimonials.jsx + CSS
│   │   └── FAQ.jsx + CSS
│   │
│   ├── years/                  # Year & major selection
│   │   ├── YearSelector.jsx + CSS
│   │   └── MajorCard.jsx + CSS
│   │
│   ├── courses/                # Course structure
│   │   ├── SemesterView.jsx + CSS
│   │   └── CourseCard.jsx + CSS
│   │
│   ├── packages/               # Pricing
│   │   ├── PackageSection.jsx
│   │   └── PackageSection.css
│   │
│   ├── cart/                   # Selection/cart system
│   │   ├── CartSidebar.jsx
│   │   └── CartSidebar.css
│   │
│   ├── contact/                # Contact form
│   │   ├── ContactSection.jsx
│   │   └── ContactSection.css
│   │
│   └── chatbot/                # Chatbot widget
│       ├── ChatbotWidget.jsx
│       └── ChatbotWidget.css
│
├── pages/
│   ├── HomePage.jsx
│   ├── AcademicsPage.jsx
│   ├── MajorPage.jsx
│   ├── PackagesPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── data/
│   ├── years.js
│   ├── majors.js
│   ├── courses.js
│   └── packages.js
│
├── utils/
│   ├── whatsapp.js
│   └── validation.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Design System

### Design Philosophy

- **Dark premium theme** — not a plain white background
- **Academic but creative** — professional yet modern startup feel
- **Lightweight glass-morphism** — `backdrop-filter: blur()` on cards and headers
- **Subtle glow effects** — purple accent glow on interactive elements
- **Noise texture** — subtle SVG noise overlay for depth
- **Grid pattern** — faded grid lines on hero for futuristic feel
- **3D abstract background** — perspective-transformed gradient planes for depth
- **No emojis** — all icons are vector (Lucide React)

### Visual Style Keywords

`dark` · `glassmorphism` · `gradient accents` · `glow effects` · `soft borders` · `smooth transitions` · `floating cards` · `noise texture` · `3D perspective`

---

## Color Palette

### Background Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Main page background |
| `--bg-secondary` | `#111118` | Alternate section background |
| `--bg-card` | `rgba(255, 255, 255, 0.03)` | Card/panel background |
| `--bg-card-hover` | `rgba(255, 255, 255, 0.06)` | Card hover state |
| `--bg-glass` | `rgba(255, 255, 255, 0.04)` | Glass-morphism panels |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#f0f0f5` | Headings, primary text |
| `--text-secondary` | `#a0a0b8` | Body text, descriptions |
| `--text-muted` | `#6b6b80` | Labels, hints, tertiary |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#7c5cfc` | Primary accent (purple) |
| `--accent-light` | `#9b7dff` | Accent hover/gradient end |
| `--accent-glow` | `rgba(124, 92, 252, 0.25)` | Glow shadow |
| `--accent-subtle` | `rgba(124, 92, 252, 0.08)` | Subtle accent backgrounds |
| `--green` | `#34d399` | Success, checkmarks, active states |
| `--green-glow` | `rgba(52, 211, 153, 0.2)` | Green glow shadow |
| `--violet` | `#a78bfa` | Secondary purple accent |

### Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--border` | `rgba(255, 255, 255, 0.06)` | Default borders |
| `--border-hover` | `rgba(255, 255, 255, 0.12)` | Hover state borders |
| `--border-glow` | `rgba(139, 92, 246, 0.2)` | Glowing borders on featured elements |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Buttons, tags, small elements |
| `--radius-md` | `14px` | Cards, inputs, medium elements |
| `--radius-lg` | `20px` | Large cards, sections |
| `--radius-xl` | `28px` | Featured cards, modals |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.3)` | Subtle elevation |
| `--shadow-md` | `0 8px 32px rgba(0,0,0,0.4)` | Card hover |
| `--shadow-lg` | `0 16px 64px rgba(0,0,0,0.5)` | Modals, overlays |
| `--shadow-glow` | `0 0 40px var(--accent-glow)` | Featured elements |

### Major Card Colors

| Major | Color |
|-------|-------|
| Computer Science | `#6366f1` |
| Physics | `#8b5cf6` |
| Mathematics | `#a855f7` |
| Electronics | `#d946ef` |
| Statistics | `#ec4899` |
| Biology | `#f43f5e` |
| Biochemistry | `#f97316` |
| Geology | `#eab308` |
| Chemistry | `#22c55e` |

---

## Typography

| Property | Value |
|----------|-------|
| Font Family | `Inter` (Google Fonts) |
| Weights Used | 400, 500, 600, 700, 800, 900 |
| Headings | 800-900 weight, `-0.5px` to `-2px` letter-spacing |
| Body | 400-500 weight, `1.6-1.7` line-height |
| Gradient Text | `linear-gradient(135deg, var(--accent), var(--accent-light))` with `-webkit-background-clip: text` |

---

## Component Library

### Button (`components/ui/Button.jsx`)

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | `primary` | `primary`, `secondary`, `outline`, `ghost`, `danger`, `whatsapp` |
| `size` | string | `md` | `sm`, `md`, `lg` |
| `icon` | Component | — | Any Lucide icon |
| `iconPosition` | string | `left` | `left`, `right` |
| `loading` | boolean | `false` | Shows spinner |
| `disabled` | boolean | `false` | Muted state |
| `fullWidth` | boolean | `false` | Full width button |
| `onClick` | function | — | Click handler |

**Variants visual style:**
- `primary` — Purple gradient + glow shadow
- `secondary` — Dark card background + subtle border
- `outline` — Transparent with purple border
- `ghost` — Transparent, subtle hover
- `danger` — Red gradient
- `whatsapp` — Green gradient

### Card (`components/ui/Card.jsx`)

| Prop | Type | Default |
|------|------|---------|
| `hover` | boolean | `true` |
| `glass` | boolean | `false` |
| `glow` | boolean | `false` |
| `padding` | string | `md` |

### Modal (`components/ui/Modal.jsx`)

| Prop | Type | Default |
|------|------|---------|
| `isOpen` | boolean | — |
| `onClose` | function | — |
| `title` | string | — |
| `size` | string | `md` |

---

## Sections & Pages

### HomePage Marketing Flow (in order)

1. **Hero** — Full viewport, animated gradient orbs, 3D perspective plane, compass/education path visual, $120 price tag, stats, dual CTA
2. **Problem/Solution** — Side-by-side columns: 3 problems vs 3 UFOQ solutions
3. **Year/Major Selector** — 3 year tabs + 9 major cards (only CS active)
4. **Package/Pricing** — 2 cards: Full Package ($99) and Half Bundle ($59) with 15-credit pool
5. **Why UFOQ** — 5 benefit cards in a grid
6. **About Us** — Mission/Vision/Promise + stats cards
7. **Testimonials** — 6 student review cards with star ratings
8. **FAQ** — 8 expandable questions with smooth accordion
9. **Contact** — Form (name, phone, email, message) + benefits card + WhatsApp send

### Other Pages

| Route | Page | Content |
|-------|------|---------|
| `/` | HomePage | Full marketing flow |
| `/academics` | AcademicsPage | Year/Major selector |
| `/academics/:majorId` | MajorPage | Semester view with courses |
| `/packages` | PackagesPage | Pricing cards |
| `/contact` | ContactPage | Contact form |
| `*` | NotFoundPage | 404 page |

---

## Features

### Course System
- Year selection (1, 2, 3)
- 9 majors with visual lock states for inactive ones
- Semester navigation (1, 2)
- Course cards with code, title, description, credits, thumbnail placeholder
- Play button overlay for preview
- Add-to-cart toggle
- Credit system for bundle tracking

### Bundle Package System
- **Full Bundle ($99)** — All courses included, lifetime access
- **Half Bundle ($59)** — 15-credit global pool across all semesters
  - Credits auto-calculated based on first 15 credits worth of courses
  - Courses beyond 15 credits charged at individual price
  - Visual distinction: included courses (violet) vs extra courses (amber)
  - Toast notification when credit limit reached
  - Progress bar shows `15/15 +N extra` when over limit

### Cart System
- Context-based state management (CartContext)
- Slide-out sidebar
- Add/remove individual courses
- Clear all
- Total credits calculation
- Bundle breakdown (included + extras)
- Direct link to enrollment

### Contact & Enrollment
- Form validation (name, phone, email)
- Selected courses preview tags
- WhatsApp message generation with all course details
- Email fallback option

### Chatbot Widget
- Floating action button (bottom-right)
- Expandable chat window
- Quick action buttons
- Simulated bot responses
- Ready for real API integration

---

## Routing

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/academics" element={<AcademicsPage />} />
    <Route path="/academics/:majorId" element={<MajorPage />} />
    <Route path="/packages" element={<PackagesPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</BrowserRouter>
```

Layout wraps all routes with Header, Footer, CartSidebar, and ChatbotWidget.

---

## Context & State

### CartContext

```jsx
{
  // Course selection
  selectedCourses: [],          // Array of course objects
  isCourseSelected(code),       // Check if course is in cart
  courseCount,                  // Number of selected courses

  // Session selection
  sessions: [],                 // Array of 1:1 session objects
  addSession(code, title, hrs), // Add a 1:1 session
  removeSession(code),          // Remove a 1:1 session
  isSessionSelected(code),      // Check if session is booked
  getSession(code),             // Get session details
  sessionCount,                 // Number of booked sessions

  // Bundle state
  activeBundle: null,           // 'full' | 'half' | null
  halfBundleCoveredCodes: [],   // Auto-calculated first 15 credits
  halfBundleIsFull: boolean,    // Whether 15-credit limit reached
  canAddToHalfBundle(credits),  // Check if course fits in bundle

  // Cart UI
  isCartOpen: false,            // Sidebar visibility
  addCourse(course),            // Add by course object
  removeCourse(code),           // Remove by course code
  clearCart(),                  // Empty cart
  toggleCart(),                 // Toggle sidebar
  openCart(),                   // Force open
  closeCart(),                  // Force close

  // Pricing
  courseTotal,                  // Individual course total
  extraCourseTotal,             // Extra courses beyond bundle
  sessionTotal,                 // 1:1 sessions total
  totalPrice,                   // Final calculated price
}
```

### AuthContext

```jsx
{
  user: null,             // User object (future)
  isAuthenticated: false, // Login state
  isLoading: false,       // Loading state
  login(credentials),     // Login function (placeholder)
  logout(),               // Logout function
  role: null,             // 'student' | 'mentor' | 'admin' (future)
}
```

---

## Data Architecture

All data is separated into `src/data/` files for easy editing:

### `majors.js`
```js
{ id: "cs", name: "Computer Science", icon: "Monitor", active: true, color: "#6366f1" }
```

### `courses.js`
```js
courseDatabase[majorId][year][semester] = [
  { code: "I2201", title: "...", description: "...", credits: 3, available: true }
]
```

### `packages.js`
```js
{
  id: "full-package",
  name: "Full Package",
  price: 120,
  originalPrice: 200,
  features: [...],
  highlighted: true
}
```

### `years.js`
```js
{ id: 1, label: "Year 1", description: "Foundation courses" }
```

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Desktop | `> 968px` | Full grid layouts, side-by-side columns |
| Tablet | `640px – 968px` | 2-column grids, stacked layouts |
| Mobile | `< 640px` | Single column, full-width buttons, stacked navigation |

**Key responsive behaviors:**
- Header: Desktop nav → hamburger menu on mobile
- Hero: 2-column → single column, visual stacks above content
- Major cards: 3-col → 2-col → 1-col
- Course cards: Auto-fill grid → single column
- Packages: 2-col → single column
- Testimonials: 3-col → 2-col → 1-col
- FAQ: Full width on all screens
- Contact: 2-column → single column
- Chatbot: Fixed position → full screen on mobile

---

## Animations

All animations use **Framer Motion**:

| Element | Animation |
|---------|-----------|
| Page transitions | Fade + slide up (`y: 20 → 0`) |
| Section headers | Fade in on viewport entry |
| Cards | Staggered fade-in, hover lift (`y: -4 to -8`) |
| Hero floating cards | Infinite float keyframes (5-7s) |
| Hero gradient orbs | Infinite drift (18-25s) |
| Hero 3D plane | Perspective-transformed gradient with blur |
| Education path SVG | Path draw animation (3s) + staggered dot appearance |
| Compass | Rotating rings + pulsing core |
| Cart sidebar | Slide from right |
| Chatbot window | Scale + fade in |
| FAQ accordion | Height animation |
| Year tabs | Layout animation indicator |
| Buttons | Scale on hover/tap |
| Cart badge | Scale pop-in |

---

## Security Architecture

Front-end prepared for future backend integration:

- **AuthContext** — Ready for JWT/session-based authentication
- **Role-based access** — `role` field supports `student`, `mentor`, `admin`
- **Protected routes** — Structure ready for route guards
- **Course availability** — `available` flag per course for access control
- **No sensitive data exposure** — WhatsApp sends via `window.open`, not hardcoded endpoints
- **Cart as intent** — Cart collects selection, doesn't process payment
- **Future: paid content** — Structure supports backend-gated video/material access

---

## Future Roadmap

- [ ] TypeScript migration (`.jsx` → `.tsx`)
- [ ] Backend API integration (Node.js / Django)
- [ ] Student login & dashboard
- [ ] Video player with access control
- [ ] Real chatbot integration (AI-powered)
- [ ] Payment processing (Stripe / local)
- [ ] Admin panel for course management
- [ ] Mentor dashboard
- [ ] More majors (Physics, Math, etc.)
- [ ] Certificate generation
- [ ] Student progress tracking
- [ ] Push notifications
- [ ] Mobile app (React Native)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## License

Private — UFOQ Academy. All rights reserved.
