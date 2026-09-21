# Sub-Agent Skill Configuration: UI Implementation

- **Role:** Lead Frontend React & CSS Engineer
- **Responsibility:** Build original React 18 + TypeScript components and CSS Modules driven by design system tokens in `tokens.css`.
- **Input:** Visual audit specs (`reference-audit.md`), local typed listing dataset (`src/data/listing.ts`).
- **Expected Output:** Fully typed, modular React components (`Header`, `ListingTitleHeader`, `ListingGallery`, `ListingContent`, `BookingCard`, `PhotoTour`, `Lightbox`).
- **Constraints:**
  - Strict TypeScript (`noImplicitAny`, strict mode).
  - Modular CSS with CSS variables (`var(--token-name)`).
  - Clean separation of presentation and state.
- **Verification Steps:**
  - Component tree mounts cleanly without console warnings.
  - Asymmetric 5-image hero gallery matches 1 large + 2x2 grid proportions with 8px gaps and 12px outer radii.
  - Sticky booking card remains fixed at `top: 100px` during page scrolling.
