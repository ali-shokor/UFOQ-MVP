# IMKAN Academy — Complete Project Bible

> **Purpose of this document:** This file contains EVERYTHING about this project — architecture, design system, business logic, data models, component inventory, styling conventions, deployment, and design philosophy. Give this to any AI or developer and they should be able to rebuild the entire site from scratch.

---

## 1. Project Overview

**IMKAN Academy** is a premium educational platform for university students (starting with Lebanese universities). Students can browse courses by major/year/semester, select individual courses or buy bundle packages, and enroll via WhatsApp or email. The site is a single-page application with a dark, modern, glassmorphism UI.

**Brand:**
- Name: **IMKAN Academy**
- Tagline: "Master Your Academic Journey"
- Brand statement: "Because You Can." / "Learn. Grow. Achieve."
- WhatsApp: `+96178957416`
- Email: `imkanacademy@gmail.com` / `ali.shokor.dev@gmail.com`
- Location: Lebanon

**GitHub:** `https://github.com/ali-shokor/UFOQ-MVP.git`

---

## 2. Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.1 | UI library |
| Vite | 6.3 | Build tool / dev server |
| React Router DOM | 7.x | Client-side routing (HashRouter) |
| Framer Motion | 12.x | Animations |
| Lucide React | 1.17 | Icon library |
| gh-pages | 6.3 | Deployment to GitHub Pages |

**No TypeScript. No CSS-in-JS. No state management library beyond React Context + useReducer.**

---

## 3. Project Structure

```
Ufoq-temp2/
├── index.html                     # Entry point, loads Spline viewer CDN
├── package.json                   # "name": "imkan-academy"
├── vite.config.js                 # base: "/UFOQ-MVP/", manual chunks
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.svg                   # SVG logo mark (navy/teal/orange)
└── src/
    ├── main.jsx                   # ReactDOM.createRoot, renders <App />
    ├── App.jsx                    # HashRouter, Routes, Providers
    ├── App.css                    # .app-layout container
    ├── index.css                  # Global CSS variables, resets, scrollbar
    ├── context/
    │   ├── CartContext.jsx        # Cart state (useReducer), pricing logic
    │   └── AuthContext.jsx        # Placeholder (empty provider)
    ├── data/
    │   ├── courses.js             # courseDatabase object + helper functions
    │   ├── majors.js              # Array of major objects (9 majors)
    │   ├── packages.js            # Package definitions (4 packages)
    │   └── years.js               # Year definitions (3 years)
    ├── utils/
    │   ├── whatsapp.js            # WhatsApp + email message builders
    │   └── validation.js          # Phone/email/name validators
    ├── pages/
    │   ├── HomePage.jsx           # Landing page (Hero + 8 lazy sections)
    │   ├── AcademicsPage.jsx      # Renders <YearSelector />
    │   ├── MajorPage.jsx          # Dynamic route /academics/:majorId
    │   ├── PackagesPage.jsx       # Full packages view
    │   ├── ContactPage.jsx        # Full contact form
    │   └── NotFoundPage.jsx       # 404 page
    └── components/
        ├── layout/
        │   ├── Layout.jsx         # Wraps Header + CartSidebar + main + Footer + ChatbotWidget
        │   ├── Header.jsx         # Fixed navbar, logo, nav links, cart, mobile menu
        │   ├── Header.css
        │   ├── Footer.jsx         # Footer with links, contact, copyright
        │   └── Footer.css
        ├── hero/
        │   ├── Hero.jsx           # Full hero with animated SVG education path
        │   └── Hero.css           # ~740 lines of hero + SVG path animations
        ├── sections/
        │   ├── ProblemSolution.jsx/css  # Problem vs Solution card columns
        │   ├── WhyUFOQ.jsx/css         # "What We Offer" scroll column
        │   ├── Testimonials.jsx/css    # Student testimonials (hidden on mobile)
        │   ├── AboutUs.jsx/css         # About IMKAN section
        │   ├── FAQ.jsx/css             # Accordion FAQ
        │   ├── Marquee.jsx/css         # Scrolling text strip
        │   ├── Stats.jsx/css           # Stats component (exists, not currently in HomePage)
        │   └── ReelSection.jsx/css     # Reel section (exists, not currently in HomePage)
        ├── years/
        │   ├── YearSelector.jsx        # Year tabs + SemesterView (useIsMobile hook)
        │   └── YearSelector.css
        ├── majors/
        │   ├── MajorCard.jsx/css       # Major selection cards
        │   └── (SemesterView is in years/)
        ├── courses/
        │   ├── CourseCard.jsx/css      # Individual course card with add-to-cart
        │   └── SemesterView.jsx/css    # Course list for a semester
        ├── packages/
        │   ├── PackageSection.jsx/css  # Package cards grid
        │   └── (PackagePage uses this)
        ├── cart/
        │   └── CartSidebar.jsx/css     # Slide-out cart sidebar
        ├── contact/
        │   ├── ContactSection.jsx/css  # Contact form + Spline 3D viewer
        ├── chatbot/
        │   ├── ChatbotWidget.jsx/css   # Floating chatbot widget
        │   └── (Simulated responses)
        └── ui/
            ├── Button.jsx/css          # Reusable Button (primary/secondary/outline/ghost/danger/whatsapp)
            ├── Card.jsx/css            # Reusable Card wrapper
            ├── Modal.jsx/css           # Modal component
            ├── CustomCursor.jsx/css    # Custom cursor effect
            └── LogoMark.jsx            # Inline SVG logo component
```

---

## 4. Design System

### 4.1 Color Palette

**Current active palette (dark theme):**

```css
:root {
  /* Backgrounds */
  --bg-deep: #06060e;
  --bg-primary: #0a0a16;
  --bg-secondary: #0e0e22;
  --bg-elevated: #131330;
  --bg-card: rgba(255, 255, 255, 0.025);
  --bg-card-hover: rgba(255, 255, 255, 0.05);
  --bg-glass: rgba(255, 255, 255, 0.035);

  /* Text */
  --text-primary: #eeeeF5;
  --text-secondary: #9d9db8;
  --text-muted: #5e5e78;

  /* Accent (purple) */
  --accent: #8b5cf6;
  --accent-light: #a78bfa;
  --accent-deep: #6d28d9;
  --accent-glow: rgba(139, 92, 246, 0.3);
  --accent-subtle: rgba(139, 92, 246, 0.07);
  --accent-wash: rgba(139, 92, 246, 0.04);

  /* Secondary colors */
  --violet: #a78bfa;
  --violet-glow: rgba(167, 139, 250, 0.2);
  --green: #34d399;
  --green-glow: rgba(52, 211, 153, 0.2);
  --amber: #fbbf24;

  /* Borders */
  --border: rgba(255, 255, 255, 0.055);
  --border-hover: rgba(255, 255, 255, 0.1);
  --border-glow: rgba(139, 92, 246, 0.2);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-2xl: 36px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.45);
  --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px var(--accent-glow);
}
```

**Planned new palette (for future redesign — not yet applied):**

| Name | Hex | Usage |
|------|-----|-------|
| Deep Navy | `#023061` | Primary brand color, logo, headers |
| Royal Blue | `#024E95` | Hover states, secondary navy |
| Teal | `#01A8BB` | Secondary accent, links, highlights |
| Bright Cyan | `#01C5CF` | Teal hover states |
| Warm Orange | `#FA640D` | Primary CTA buttons, gradient start |
| Soft Orange | `#FD8F1A` | CTA hover, gradient end |
| Background Light Gray | `#F9F7F7` | Light theme background |
| Pure White | `#FFFFFF` | Cards, surfaces |

**CTA gradient:** `linear-gradient(135deg, #FA640D, #FD8F1A)`

### 4.2 Typography

```css
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

- Loaded from Google Fonts: `Inter` (weights 400-900)
- Planned: `Poppins` (English headings), `Cairo` (Arabic text) — not yet implemented
- Font import: `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");`

### 4.3 Design Philosophy

- **Dark-first:** All UI is designed on a near-black background (`#06060e`)
- **Glassmorphism:** Cards and surfaces use semi-transparent backgrounds with `backdrop-filter: blur()`
- **Glow effects:** Purple accent glows on hover, focus, and active states
- **Subtle animations:** Fade-up on scroll (`whileInView`), hover scale, spring physics
- **No heavy illustrations:** SVG animations (education path), gradient orbs, grid patterns
- **Mobile-first responsive:** Three breakpoints: 968px, 768px, 480px

### 4.4 Global CSS Patterns

```css
/* Glass card pattern */
background: rgba(255, 255, 255, 0.025);
border: 1px solid rgba(255, 255, 255, 0.055);
backdrop-filter: blur(16px) saturate(150%);
border-radius: var(--radius-lg);

/* Glow hover */
box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
border-color: rgba(139, 92, 246, 0.5);

/* Section tag */
.section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--accent-light), var(--violet));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.25); border-radius: 3px; }

/* Selection */
::selection { background: rgba(139, 92, 246, 0.35); color: #fff; }
```

### 4.5 Logo

The logo is an inline SVG React component (`src/components/ui/LogoMark.jsx`) rendered in Header and Footer. It consists of:
- Navy vertical bar ("I") with rounded corners
- Orange circle (dot on the "i")
- Teal swooping arrow (bottom-left to top-right)
- Navy "K" leg shape
- Orange triangle accent at bottom

Colors: Navy `#023061`, Teal `#01A8BB`, Orange `#FA640D`
ViewBox: `0 0 64 64`

Also exists as `public/logo.svg` (same content, for non-React usage).

---

## 5. Routing

Uses `HashRouter` (not BrowserRouter) for GitHub Pages compatibility.

```
/               → HomePage.jsx          (landing page with all sections)
/academics      → AcademicsPage.jsx     (year selector + courses)
/academics/:id  → MajorPage.jsx         (courses for a specific major)
/packages       → PackagesPage.jsx      (package pricing cards)
/contact        → ContactPage.jsx       (enrollment form)
*               → NotFoundPage.jsx      (404)
```

Route definition in `App.jsx`:
```jsx
<HashRouter>
  <ScrollToTop />
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/academics/:majorId" element={<MajorPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
</HashRouter>
```

`ScrollToTop` component scrolls to top on route change.

---

## 6. State Management

### 6.1 CartContext (the core business logic)

Located at `src/context/CartContext.jsx`. Uses `useReducer` + `useCallback` + `useMemo`.

**State shape:**
```js
{
  selectedCourses: [],       // Array of course objects { code, title, credits, price, ... }
  sessions: [],              // Array of { courseCode, courseTitle, hours, pricePerHour: 20 }
  isCartOpen: false,
  isBundleActive: false,     // Full Bundle ($119)
  isHalfBundleActive: false, // Half Bundle ($79)
  bundleYear: null,
  bundleSemester: null,
  bundleCourseCodes: [],     // Course codes covered by the full bundle
}
```

**Actions:** `ADD_COURSE`, `REMOVE_COURSE`, `ADD_SESSION`, `REMOVE_SESSION`, `SET_BUNDLE_ACTIVE`, `SET_BUNDLE_INACTIVE`, `SET_HALF_BUNDLE_ACTIVE`, `SET_HALF_BUNDLE_INACTIVE`, `CLEAR_CART`, `TOGGLE_CART`, `OPEN_CART`, `CLOSE_CART`

**Pricing logic:**
- **No bundle:** `courseTotal + sessionTotal`
- **Full Bundle active:** `$119 + extraCourseTotal + sessionTotal` (extra = courses not in bundle)
- **Half Bundle active:** `$79 + extraCourseTotal + sessionTotal` (covers up to 15 credits)
- **1:1 Sessions:** `$20/hr` per course

**Half Bundle details:**
- Max credits: 15
- `halfBundleCoveredCodes`: First N courses (in order added) that fit within 15 credits
- `canAddToHalfBundle(credits)`: Checks if adding a course would exceed 15 credits
- `halfBundleCreditsLeft`: Remaining credits available

### 6.2 AuthContext

Placeholder — `AuthProvider` wraps the app but provides no functionality yet.

---

## 7. Data Models

### 7.1 Course Database (`src/data/courses.js`)

Nested object: `courseDatabase[majorId][year][semester]`

```js
{
  cs: {  // Computer Science (only major with data)
    1: {  // Year 1
      1: [ // Semester 1
        { code: "M1100", title: "Algebra I", credits: 6, price: 20, instructor: "Ali Shokor", available: true },
        ...
      ],
      2: [ // Semester 2
        { code: "I1101", title: "C Programming Language", credits: 6, price: 25, ... },
        ...
      ],
    },
    2: { ... },  // Year 2
    3: { ... },  // Year 3 (real courses added: Software Engineering, PHP, OS II, etc.)
  },
}
```

**Course object shape:**
```js
{ code: "I2201", title: "Web Development - Client Side", description: "...", credits: 4, price: 20, instructor: "Ali Shokor", available: true }
```

**Helper functions:**
- `getCourses(majorId, year, semester)` → array of courses
- `getAvailableSemesters(majorId, year)` → array of semester numbers
- `getAvailableYears(majorId)` → array of year numbers

**Year 3 CS courses (real university courses):**
- Sem 1: I3301 Software Engineering (4cr/$20), I3302 PHP (4cr/$20), I3303 OS II (4cr/$30), I3304 Networks II (4cr/$25), I3305 GUI (3cr/$20), I3306 DB II (3cr/$15), I3350 Mobile Dev (5cr/$30)
- Sem 2: I3307 Theory of Computation (4cr/$30), I3308 ArcGIS (4cr/$20), I3340 Parallel Programming (4cr/$30), I3344 Numerical Analysis (6cr/$30), I3330 Project Management (3cr/$15), I3332 ASP.NET (3cr/$20), I3335 Intro to AI (3cr/$15), I3336 Intro to Cyber Security (3cr/$15)

### 7.2 Majors (`src/data/majors.js`)

```js
[
  { id: "cs", name: "Computer Science", icon: "Monitor", active: true, color: "#6366f1" },
  { id: "physics", name: "Physics", icon: "Atom", active: false, color: "#8b5cf6" },
  { id: "math", name: "Mathematics", icon: "Calculator", active: false, color: "#a855f7" },
  { id: "electronics", name: "Electronics", icon: "Cpu", active: false, color: "#d946ef" },
  { id: "stats", name: "Statistics", icon: "BarChart3", active: false, color: "#ec4899" },
  { id: "biology", name: "Biology", icon: "Dna", active: false, color: "#f43f5e" },
  { id: "biochem", name: "Biochemistry", icon: "FlaskConical", active: false, color: "#f97316" },
  { id: "geology", name: "Geology", icon: "Mountain", active: false, color: "#eab308" },
  { id: "chemistry", name: "Chemistry", icon: "TestTubes", active: false, color: "#22c55e" },
]
```

Only Computer Science (`cs`) has course data. All others have `active: false`.

### 7.3 Packages (`src/data/packages.js`)

```js
[
  { id: "full-bundle", name: "Full Semester Package", price: 119, originalPrice: 300, highlighted: true, badge: "Best Value" },
  { id: "half-bundle", name: "Half Bundle", price: 79, originalPrice: 200 },
  { id: "separate", name: "Separate Courses", price: "15-30", period: "per course" },
  { id: "private-sessions", name: "1:1 Private Sessions", price: 20, period: "per hour" },
]
```

### 7.4 Years (`src/data/years.js`)

```js
[
  { id: 1, label: "Year 1", description: "Foundation courses" },
  { id: 2, label: "Year 2", description: "Core specializations" },
  { id: 3, label: "Year 3", description: "Advanced studies" },
]
```

---

## 8. Component Inventory

### 8.1 Layout Components

| Component | File | Description |
|-----------|------|-------------|
| **Layout** | `layout/Layout.jsx` | Wraps everything: PageBackground + Header + CartSidebar + main (animated) + Footer + ChatbotWidget |
| **Header** | `layout/Header.jsx` | Fixed glassmorphism header. LogoMark + "IMKAN" + "Academy" badge. Nav: Home, Courses, Packages, Contact. Cart icon with badge. "Enroll Now" CTA. Mobile hamburger menu with slide-down. |
| **Footer** | `layout/Footer.jsx` | 4-column grid: Brand + Programs + Company + Support. Contact info. Copyright. |

### 8.2 Homepage Sections (in order)

| Section | File | Lazy? | Description |
|---------|------|-------|-------------|
| **Hero** | `hero/Hero.jsx` | No | Full-screen hero with animated SVG education path (zigzag with particles, sparkles, milestone labels). Stats: 400+ students, 40+ courses, 90% success. Price pill: $119. CTAs: "Find Your Path" + "View Packages" |
| **Marquee** | `sections/Marquee.jsx` | No | Scrolling text strip |
| **ProblemSolution** | `sections/ProblemSolution.jsx` | Yes | Two-column: Problem (3 cards) vs Solution (3 cards). Red/green icons. |
| **WhyUFOQ** | `sections/WhyUFOQ.jsx` | Yes | "What We Offer" — Left text + right infinite scroll of 11 offering cards. Pauses on hover. |
| **YearSelector** | `years/YearSelector.jsx` | Yes | Year tabs (Year 1/2/3) → Semester view → Course cards. `useIsMobile` hook: shows 3 majors on mobile, all on desktop. |
| **PackageSection** | `packages/PackageSection.jsx` | Yes | 4 package cards with pricing, features, CTA buttons. |
| **Testimonials** | `sections/Testimonials.jsx` | Yes | Student testimonials with star ratings. $119 price reference. |
| **AboutUs** | `sections/AboutUs.jsx` | Yes | About IMKAN section |
| **FAQ** | `sections/FAQ.jsx` | Yes | 8 FAQ items with accordion animation (AnimatePresence). |
| **ContactSection** | `contact/ContactSection.jsx` | Yes | Form: name, phone (numbers+ only), message. Spline 3D viewer (hidden on mobile). Shows selected courses/sessions/total. "Send via WhatsApp" button. |

### 8.3 UI Components

| Component | File | Description |
|-----------|------|-------------|
| **Button** | `ui/Button.jsx` | `forwardRef` button with variants: primary, secondary, outline, ghost, danger, whatsapp. Sizes: sm, md, lg. Supports icon (left/right), loading spinner, fullWidth. Uses `motion.button` with whileHover/whileTap. |
| **Card** | `ui/Card.jsx` | Generic card wrapper |
| **Modal** | `ui/Modal.jsx` | Modal dialog |
| **CustomCursor** | `ui/CustomCursor.jsx` | Custom cursor effect |
| **LogoMark** | `ui/LogoMark.jsx` | Inline SVG logo (navy bar, teal arrow, orange dot/triangle) |

### 8.4 Other Components

| Component | File | Description |
|-----------|------|-------------|
| **CartSidebar** | `cart/CartSidebar.jsx` | Slide-out sidebar showing selected courses, sessions, bundle status, total price. Remove items. Proceed to contact. |
| **ChatbotWidget** | `chatbot/ChatbotWidget.jsx` | Floating chat bubble → expandable chat window. Simulated bot responses. Quick action buttons. |
| **CourseCard** | `courses/CourseCard.jsx` | Individual course card with add/remove from cart. Shows code, title, credits, price. |
| **SemesterView** | `years/SemesterView.jsx` | Course list for a given year+semester |
| **MajorCard** | `majors/MajorCard.jsx` | Major selection card with icon and color |

---

## 9. Business Logic & User Flow

### 9.1 User Journey

1. **Landing (HomePage):** User sees hero, learns about IMKAN, sees packages
2. **Browse Courses (AcademicsPage):** Select major → year → semester → see course list
3. **Select Courses:** Click "Add" on course cards → goes to cart
4. **Choose Package:** Can activate Full Bundle ($119) or Half Bundle ($79) from Packages page
5. **Enroll:** Fill contact form → submit → opens WhatsApp with pre-filled message

### 9.2 Enrollment Flow

1. User selects courses (individual or via bundle)
2. User navigates to `/contact`
3. Fills: name, phone (only numbers and `+` allowed), optional message
4. Clicks "Send via WhatsApp"
5. `sendToWhatsApp()` builds formatted message with:
   - Student name + phone
   - Bundle name + price (if active)
   - Individual course list with prices (if no bundle)
   - Session details with hours × rate
   - Total price
6. Opens `https://wa.me/+96178957416?text=...`
7. Alternative: `sendToEmail()` sends to `imkanacademy@gmail.com`

### 9.3 Bundle Logic

- **Full Bundle ($119):** Activated from Packages page → `navigate("/academics?bundle=full")`. All courses in the selected year+semester are auto-added. Extra courses beyond the bundle are charged individually.
- **Half Bundle ($79):** Activated from Packages page → `navigate("/academics?bundle=half")`. Covers up to 15 credits. User picks courses. If total credits > 15, excess courses charged individually.
- **Separate Courses:** No bundle. Each course priced individually ($15-$30).
- **1:1 Sessions:** $20/hr per course. Can be added alongside any package.

---

## 10. Animations & Effects

### 10.1 Framer Motion Usage

- **Page transitions:** `AnimatePresence mode="wait"` on `<main>` with fade + slide
- **Scroll animations:** `whileInView` with `viewport={{ once: true }}` on all sections
- **Hover effects:** `whileHover={{ y: -8 }}` on cards, `whileHover={{ scale: 1.02 }}` on buttons
- **Tap effects:** `whileTap={{ scale: 0.98 }}` on buttons
- **Mobile menu:** `AnimatePresence` with height 0→auto
- **FAQ accordion:** `AnimatePresence` with height 0→auto
- **Nav indicator:** `layoutId="nav-indicator"` for shared layout animation

### 10.2 CSS Animations

**Hero background:**
- 4 gradient orbs with `orbDrift1/2/3` keyframes (slow drift, 18-26s cycles)
- Aurora pulse (opacity 0.6→1, 12s)
- Grid pattern with radial mask
- Noise overlay (SVG turbulence)

**Education path SVG:**
- `drawPath`: Stroke-dashoffset animation (2.5s)
- `dotAppear` + `dotGlowPulse`: Milestone dots appear sequentially
- `particleFade`: 6 particles flow along path via `<animateMotion>`
- `sparklePop`: Small dots pop in/out along path
- `startRingExpand` / `endRingExpanding`: Expanding rings at start/end
- `rayAppear`: Rays radiate from graduate point

**Price pill:** `pricePulse` (glow box-shadow pulsing, 3s)

**Scroll column (WhyUFOQ):** Infinite vertical scroll, pauses on hover via CSS class toggle

**Marquee:** Continuous horizontal scroll of text

### 10.3 Mobile Performance

```css
@media (max-width: 768px) {
  .hero-orb-purple, .hero-orb-blue, .hero-orb-violet, .hero-orb-deep {
    filter: blur(50px); opacity: 0.7;
  }
  .hero-aurora, .page-bg-aurora { opacity: 0.4; }
  .hero-visual { display: none; } /* Hide SVG path on mobile */
}
```

---

## 11. Responsive Design

### Breakpoints

| Breakpoint | Target |
|------------|--------|
| `968px` | Tablet — single column layout |
| `768px` | Mobile — hide desktop nav, show hamburger, compact spacing |
| `480px` | Small phone — minimal padding, smaller fonts, full-width buttons |

### Key Responsive Behaviors

- **Header:** Desktop nav hidden on mobile, hamburger menu shown. "Enroll Now" text stays visible on mobile. Logo badge hidden. Logo shrinks 42→36px.
- **Hero:** 2-column grid → single column at 968px. SVG visual hidden at 768px. Title scales: 4.1rem → 3.1rem → 3rem → 2.55rem. Stats stack on mobile.
- **Year tabs:** On mobile, all 3 year tabs in one row (flex: 1), descriptions hidden.
- **Testimonials:** Scroll column hidden on mobile, cards shown in grid (260px min).
- **Footer:** 4-column → 2-column at 768px → 3-column at 480px (Programs/Company/Support in one row).
- **Course cards:** `min(380px, 100%)` width.
- **Packages:** `min(340px, 100%)` width on mobile.

### useIsMobile Hook

```js
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};
```

Used in `YearSelector` to show only 3 majors on mobile vs all on desktop.

---

## 12. Deployment

### GitHub Pages via gh-pages

```bash
npm run build    # Vite builds to dist/
npm run deploy   # gh-pages -d dist (pushes to gh-pages branch)
```

**vite.config.js:**
```js
base: "/UFOQ-MVP/",  // Must match GitHub repo name
```

**GitHub settings:** Source = "Deploy from a branch" → `gh-pages` branch

**SPA routing:** Uses `HashRouter` (URLs like `/#/academics`) so GitHub Pages serves `index.html` for all routes.

---

## 13. Build Configuration

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: "/UFOQ-MVP/",
  server: { port: 3000, open: true },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
```

**Known Vite warnings (not errors):**
- YearSelector, PackageSection, ContactSection are dynamically imported by HomePage but statically imported by their respective pages → chunk-splitting warning

---

## 14. External Integrations

### Spline 3D

- Loaded via CDN in `index.html`: `https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js`
- Used in `ContactSection.jsx`: `<spline-viewer url="https://prod.spline.design/djYCBtJtPEzjwxQx/scene.splinecode" loading="lazy" />`
- Hidden on mobile (`display: none`)

### WhatsApp

- Number: `+96178957416`
- Message format: Structured text with `*bold*` markers, `%0A` line breaks
- Opens `https://wa.me/{number}?text={encoded_message}`

### Email

- Fallback: `mailto:imkanacademy@gmail.com?subject=...&body=...`

---

## 15. Key Conventions

1. **Component-scoped CSS:** Every component has a matching `.css` file imported in the JSX
2. **No CSS modules:** Plain CSS with BEM-like class naming (`.hero-title`, `.ps-card-problem`, `.faq-item-open`)
3. **Framer Motion for everything:** All animations use `motion.*` components, not CSS transitions (except infinite scrolls)
4. **Lucide icons:** All icons from `lucide-react`, imported individually
5. **No API calls:** Everything is local data. WhatsApp/email opens external URLs.
6. **No authentication:** AuthContext is a placeholder
7. **No TypeScript:** Pure JSX
8. **Lazy loading:** All homepage sections below Hero/Marquee use `React.lazy()` + `Suspense`
9. **Performance:** Manual chunk splitting, no sourcemaps, mobile orb/aurora reduction

---

## 16. File Naming Conventions

- Components: `PascalCase.jsx` (e.g., `CourseCard.jsx`)
- CSS: Same name as component (e.g., `CourseCard.css`)
- Data: `camelCase.js` (e.g., `courses.js`, `packages.js`)
- Utils: `camelCase.js` (e.g., `whatsapp.js`, `validation.js`)
- Pages: `PascalCase.jsx` with `Page` suffix (e.g., `HomePage.jsx`)
- Directories: `kebab-case` or `camelCase` (e.g., `cart/`, `chatbot/`, `ui/`)

---

## 17. How to Rebuild from Scratch

If rebuilding this project:

1. **Setup:** `npm create vite@latest imkan-academy -- --template react`, install deps
2. **Structure:** Create the folder tree above
3. **Design system:** Copy `index.css` variables, global resets, scrollbar styles
4. **Layout:** Build Layout → Header (glassmorphism, nav, cart) → Footer → PageBackground (orbs, grid)
5. **Data:** Create `courses.js` with nested major→year→semester structure, `packages.js`, `majors.js`, `years.js`
6. **Context:** Build CartContext with useReducer (all pricing/bundle logic)
7. **UI primitives:** Button (with all variants), Card, LogoMark (SVG)
8. **Pages:** HomePage (Hero + lazy sections) → AcademicsPage → MajorPage → PackagesPage → ContactPage
9. **Components:** Build each section component with its CSS
10. **Animations:** Add Framer Motion whileInView, whileHover, AnimatePresence
11. **Responsive:** Add breakpoints at 968/768/480px
12. **Deploy:** Configure `base` in vite.config.js, add gh-pages, `npm run deploy`

---

## 18. Known Issues & TODOs

1. `Stats.jsx` and `ReelSection.jsx` exist but are not used in HomePage
2. Only Computer Science major has course data — all others are placeholders
3. `AuthContext` is a placeholder with no functionality
4. Chatbot responses are simulated (no AI backend)
5. Spline 3D viewer adds ~200KB+ external load
6. The "Full Bundle" activation flow navigates to `/academics?bundle=full` — the YearSelector reads this query param
7. Logo SVG was created from an uploaded PNG image — may need refinement to match original exactly
8. Dark theme is the only theme implemented (light theme planned but not built)
9. Arabic text support (Cairo font) planned but not implemented
10. Price for "Separate Courses" package shows as `"15 – 30"` (string, not number) — rendering quirk in PackageSection
