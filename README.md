# Airbnb Listing Clone — PlayPower Labs Take-Home Assignment

An original, pixel-perfect, accessible desktop recreation of the Airbnb listing page experience (`https://airbnb-clone-umber-two.vercel.app`), built with **React 18**, **TypeScript**, **Vite**, and **Vanilla CSS Modules**.

---

## 🌟 Features & Parity Highlights

- **100% Visual & Behavioral Parity:** Meticulously engineered desktop layout (1440x900, 1600x900, 1920x1080) matching Airbnb typography, `#FF385C` primary brand colors, 1120px max-width container, and exact spacing.
- **View 1: Main Listing Page:**
  - Sticky header bar with brand logo, search pill, host menu.
  - Title, star rating (★ 4.92), 14 reviews link, Superhost tag, location details, Share & Save action buttons.
  - 5-image asymmetric hero grid (1 main left hero + 2x2 right grid) with floating "Show all photos" CTA button.
  - Detailed property info: Host section, 10% promo claim banner, highlight badges, description, sleeping arrangements, amenities grid.
  - Sticky booking reserve card (~370px) with ₹4,850/night pricing, date picker, guest dropdown, Coral gradient "Reserve" button, and fee breakdown.
- **View 2: Photo Tour Overlay:**
  - Full-screen modal overlay with smooth `slideUp` animation and body scroll lock.
  - Sticky horizontal category filter chips ("Living room 1", "Living room 2", "Full kitchen", "Bedroom", "Full bathroom", "Gym", "Exterior", "Pool", "Additional photos").
  - Grouped photo sections with titles and descriptions. Clicking any photo opens the single-photo Lightbox.
- **View 3: Accessible Lightbox Modal:**
  - Dark backdrop single-photo viewer (`rgba(0, 0, 0, 0.9)`).
  - Photo counter display ("X / 18"), close button, previous/next circular arrow controls.
  - Full keyboard control (`ArrowLeft`, `ArrowRight`, `Escape`).
- **Production-Grade Accessibility (a11y):**
  - Keyboard focus trapping (`useFocusTrap`) and focus restoration upon modal unmounting.
  - Background body scroll locking (`useScrollLock`).
  - WAI-ARIA labels, semantic HTML landmarks, and `@media (prefers-reduced-motion)` support.
- **AI-Native Workflow Evidence:**
  - Complete prompt sequences and multi-agent execution logs (`/ai-workflow/ai-workflow.md`, `/ai-workflow/prompt-sequence.md`).
  - 6 modular AI subagent skill configuration files (`/ai-workflow/config/`).
- **Production Architecture Thinking:**
  - Scalable vacation-rental marketplace architecture documentation (`/docs/architecture-thinking.md`).
  - Production architecture diagram (`/docs/architecture-diagram.png` & `/docs/architecture-diagram.svg`).

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Vanilla CSS Modules with centralized CSS design tokens (`/src/styles/tokens.css`)
- **Icons:** `lucide-react`
- **Testing:** Vitest + Testing Library

---

## 🚀 Setup & Execution Instructions

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```

### Run Automated Tests
```bash
npm run test
```

### Build Production Bundle
```bash
npm run build
```

---

## 📁 Repository Structure

```
d:/assignment/
├── ai-workflow/
│   ├── ai-workflow.md
│   ├── prompt-sequence.md
│   └── config/
│       ├── reference-analysis.md
│       ├── ui-implementation.md
│       ├── interaction-testing.md
│       ├── accessibility-review.md
│       ├── visual-regression.md
│       └── final-review.md
│
├── docs/
│   ├── reference-audit.md
│   ├── requirements.md
│   ├── visual-qa.md
│   ├── architecture-thinking.md
│   ├── architecture-diagram.svg
│   └── architecture-diagram.png
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Listing/
│   │   ├── PhotoTour/
│   │   └── Lightbox/
│   ├── data/
│   │   └── listing.ts
│   ├── hooks/
│   │   ├── useScrollLock.ts
│   │   ├── useFocusTrap.ts
│   │   └── useKeyboardNavigation.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   ├── tests/
│   │   ├── setup.ts
│   │   └── listing.test.tsx
│   ├── types/
│   │   └── listing.ts
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔒 Originality & Anti-Plagiarism Statement

This codebase is 100% original, independently engineered code written specifically for the PlayPower Labs take-home assessment. No source code, CSS files, or internal repository structures from the reference site were scraped, decompiled, or reproduced. All visual parity is achieved through independent reverse-engineering of observable layout specifications and design tokens.
