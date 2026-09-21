# Implementation Requirements & Parity Checklist

**Assignment Target:** 100% Visual & Behavioral Parity with https://airbnb-clone-umber-two.vercel.app  
**Platform:** Desktop Viewports (1440x900, 1600x900, 1920x1080)  

---

## 1. Core Listing Page Requirements

- [ ] **Header Navigation Bar:**
  - [ ] Render Airbnb logo with `#FF385C` primary brand color.
  - [ ] Render search pill ("Anywhere | Any week | Add guests").
  - [ ] Render host link ("Airbnb your home"), globe icon, and user menu button.
  - [ ] Sticky positioning at top with `z-index: 100` and bottom border.
- [ ] **Title & Action Row:**
  - [ ] Property title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10".
  - [ ] Sub-header row showing star rating (4.92), 14 reviews link, Superhost tag, location.
  - [ ] Share & Save action buttons with interactive hover effects.
- [ ] **Hero Photo Gallery (5-Image Composition):**
  - [ ] Asymmetric layout: 1 large hero image on left, 2x2 grid on right.
  - [ ] 8px grid gaps, 12px outer rounded corners.
  - [ ] Hover overlay darkening on images.
  - [ ] Floating "Show all photos" button with 9-dot grid icon in bottom-right corner.
  - [ ] Clicking hero images or "Show all photos" opens the Photo Tour overlay.
- [ ] **Property Information Sections:**
  - [ ] Host section: "Entire serviced apartment hosted by Mirashya", subdetails (3 guests, 1 bedroom, 1 bed, 1 bath), avatar.
  - [ ] Promo banner card: "Get 10% off your next stay" with "Claim" action button.
  - [ ] Highlight items (Superhost badge, Great location, Great check-in experience).
  - [ ] Property description text area with "Show more" expander if applicable.
  - [ ] Sleeping arrangements card for Bedroom 1.
  - [ ] Amenities grid (2-column layout with SVGs, "Show all 32 amenities" modal trigger button).
- [ ] **Sticky Reserve / Booking Card:**
  - [ ] Positioned sticky on right side (~370px width).
  - [ ] Pricing header: ₹4,850 / night + rating badge.
  - [ ] Interactive Check-in / Checkout date input box & Guest counter dropdown.
  - [ ] Gradient "Reserve" button (`#E61E4F` to `#D70466`).
  - [ ] Fee breakdown (Nights total, Cleaning fee, Service fee, Total amount).

---

## 2. Photo Tour Overlay Requirements (View 2)

- [ ] **Full-Screen Modal Presentation:**
  - [ ] Full viewport fixed position overlay (`z-index: 1000`).
  - [ ] Background body scroll lock (`overflow: hidden` on `document.body`).
  - [ ] Slide-up / fade-in animation on open.
- [ ] **Header Bar:**
  - [ ] Sticky top header with Back arrow / Close button, Share and Save actions.
- [ ] **Category Filter Chips Bar:**
  - [ ] Sticky horizontal scroll bar of room chips ("Living room 1", "Living room 2", "Full kitchen", "Bedroom", "Full bathroom", "Gym", "Exterior", "Pool", "Additional photos").
  - [ ] Smooth scrolling to target room section upon chip click.
  - [ ] Active chip state highlighting based on scroll position or manual click.
- [ ] **Grouped Photo List:**
  - [ ] Structured by rooms/sections with titles and amenity descriptions.
  - [ ] High resolution photo presentation.
  - [ ] Clicking any photo opens the single-photo Lightbox at that specific index.
- [ ] **Keyboard & Focus Management:**
  - [ ] `Escape` key closes the Photo Tour.
  - [ ] Focus trapped within modal while open.
  - [ ] Focus restored to trigger button on close.

---

## 3. Lightbox Single-Photo Viewer Requirements (View 3)

- [ ] **Modal Backdrop & Container:**
  - [ ] Fullscreen overlay with dark backdrop (`rgba(0,0,0,0.9)`).
  - [ ] `z-index: 2000` (above Photo Tour).
  - [ ] Locks background scroll.
- [ ] **Photo Navigation Controls:**
  - [ ] Previous button (`<`) decrements photo index.
  - [ ] Next button (`>`) increments photo index.
  - [ ] Bound constraints (first image disables prev or wraps around if specified).
  - [ ] Photo counter display ("X / Y").
  - [ ] Close button (`X`) closes lightbox.
- [ ] **Keyboard Controls:**
  - [ ] `ArrowLeft` navigates to previous photo.
  - [ ] `ArrowRight` navigates to next photo.
  - [ ] `Escape` closes lightbox.
- [ ] **Focus Management:**
  - [ ] Initial focus set to Close or Next button when opened.
  - [ ] Tab key cycles strictly within Lightbox controls (Focus Trap).
  - [ ] Closing restores focus to the clicked thumbnail photo in Photo Tour / Gallery.

---

## 4. Visual Parity & Design Token Requirements

- [ ] Meticulous CSS variables for color, typography, spacing, border-radius, box-shadows.
- [ ] Desktop viewport support (1440px, 1600px, 1920px max-width container handling).
- [ ] High-DPI image handling with clean fallback object-fit styling.
- [ ] Hover, active, and focus-visible state indicators matching Airbnb design system.

---

## 5. Accessibility (a11y) Requirements

- [ ] **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<dialog>` or `role="dialog"`.
- [ ] **ARIA Attributes:** `aria-label` for icon-only buttons, `aria-expanded` for dropdowns, `aria-hidden="true"` for decorative SVGs, `aria-modal="true"`.
- [ ] **Keyboard Accessibility:** All controls accessible via `Tab` / `Shift+Tab` with clear `:focus-visible` focus rings.
- [ ] **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables non-essential transitions.

---

## 6. Architecture & AI Workflow Deliverables

- [ ] High-Level Production Architecture Diagram (`/docs/architecture-diagram.png`).
- [ ] AI Workflow documentation (`/ai-workflow/ai-workflow.md`).
- [ ] AI Subagent / Skill configurations (`/ai-workflow/config/*.md`).
- [ ] Comprehensive Visual QA report (`/docs/visual-qa.md`).
- [ ] Clean, fully tested TypeScript + React codebase with Vitest unit tests.
