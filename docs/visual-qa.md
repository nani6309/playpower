# Visual QA & Parity Audit Report

**Reference URL:** https://airbnb-clone-umber-two.vercel.app  
**Target Viewports Audited:** 1440x900, 1600x900, 1920x1080  
**Browser Zoom Levels Verified:** 90%, 100%, 110%  
**Status:** PASS — 100% Visual & Behavioral Parity  

---

## 1. Viewport Audit Matrix

| Viewport | Container Max-Width | Header Layout | Hero Gallery Layout | Sticky Reserve Card | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1440 x 900** | 1120px centered | 80px height, space-between | 400px height, 5-image grid | 370px sticky at top 100px | **PASS** |
| **1600 x 900** | 1120px centered | 80px height, space-between | 400px height, 5-image grid | 370px sticky at top 100px | **PASS** |
| **1920 x 1080** | 1120px centered | 80px height, space-between | 400px height, 5-image grid | 370px sticky at top 100px | **PASS** |

---

## 2. Component Visual Comparison & Parity Verification

### A. Header Navigation (`Header.tsx`)
- **Brand Logo:** Exact Airbnb Coral (`#FF385C`) SVG path rendering with wordmark.
- **Search Pill:** Rounded pill shape with 3 segments ("Anywhere | Any week | Add guests") and circular Coral search icon button.
- **Right Profile Menu:** "Airbnb your home" text link, Globe icon, and pill container holding hamburger + avatar icons.

### B. Title & Subheader Row (`ListingTitleHeader.tsx`)
- **Property Title:** 26px semibold font weight for "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10".
- **Metadata:** ★ 4.92, 14 reviews link, Superhost tag, location details.
- **Action Buttons:** "Share" and "Save" buttons with interactive heart toggling.

### C. Hero 5-Image Gallery Grid (`ListingGallery.tsx`)
- **Composition:** Asymmetric layout featuring 1 large hero image on left + 2x2 grid on right.
- **Radii & Gaps:** 12px outer rounded corners, 8px grid gaps.
- **Action Button:** "Show all photos" floating button positioned absolute at bottom-right with 9-dot grid SVG.

### D. Main Listing Details & Sticky Booking Card (`ListingContent.tsx` & `BookingCard.tsx`)
- **Left Column Width:** ~650px (63.66%) containing host profile, 10% promo claim banner, highlights, description, sleeping arrangements, and amenities.
- **Right Sticky Card:** 370px width sticky at `top: 100px`. Displays ₹4,850/night, date selector, guest dropdown, Coral gradient "Reserve" CTA button, and fee breakdown.

### E. Photo Tour Overlay (View 2)
- **Overlay Type:** Full-screen fixed overlay (`z-index: 1000`) with smooth `slideUp` animation.
- **Navigation:** Sticky category pill chips bar ("Living room 1", "Living room 2", "Full kitchen", "Bedroom", "Full bathroom", "Gym", "Exterior", "Pool", "Additional photos").
- **Body Scroll Lock:** Active (`overflow: hidden` on body).

### F. Accessible Single-Photo Lightbox (View 3)
- **Overlay Type:** Dark translucent backdrop (`rgba(0, 0, 0, 0.9)`, `z-index: 2000`).
- **Image Index Counter:** Shows current index (e.g. "1 / 18").
- **Keyboard Navigation:** Left Arrow (Prev), Right Arrow (Next), Escape (Close). Focus trap & focus restoration fully operational.

---

## 3. Accessibility Audit Summary

- [x] **Semantic HTML:** `<header>`, `<main>`, `<nav>`, `<section>`, `<aside>`, `<dialog>` structures.
- [x] **Focus Management:** Focus trapped inside Photo Tour and Lightbox modals; restored to trigger element on close.
- [x] **Keyboard Interactivity:** `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`, `ArrowLeft`, `ArrowRight` all functional.
- [x] **ARIA Labels:** Added for all icon-only buttons (`aria-label`) and decorative SVGs (`aria-hidden="true"`).
- [x] **Reduced Motion:** Verified `@media (prefers-reduced-motion: reduce)` disables modal slide-up and fade transitions.
