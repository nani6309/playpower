# AI-Assisted Development Prompt Sequence

Below is the chronological sequence of prompts utilized during the development lifecycle of this project:

---

### Phase 1: Reference Analysis & Requirements Extraction
> **Prompt 1:**  
> "Analyze the target Airbnb listing reference URL `https://airbnb-clone-umber-two.vercel.app` and attached PDF specifications. Perform a thorough visual & behavioral audit covering layout structures, container widths, color tokens, typography scales, photo gallery grid rules, photo tour overlay, lightbox interactions, and keyboard navigation. Generate `/docs/reference-audit.md` and `/docs/requirements.md`."

---

### Phase 2: Architecture & Component Specification
> **Prompt 2:**  
> "Design a clean, modular React 18 + TypeScript + Vite project architecture with vanilla CSS Modules and centralized CSS variables (`src/styles/tokens.css`). Define typed interfaces for `Listing`, `Photo`, `RoomCategory`, `Host`, and `PriceBreakdown` in `src/types/listing.ts`, and create the local data module in `src/data/listing.ts` representing 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10' with 18 high-resolution photos."

---

### Phase 3: Core UI Component Engineering
> **Prompt 3:**  
> "Implement the core Listing Page components: `Header.tsx` (Airbnb brand logo, search pill, host menu), `ListingTitleHeader.tsx` (title, star rating, share/save buttons), `ListingGallery.tsx` (5-image asymmetric hero grid with 'Show all photos' floating CTA), `ListingContent.tsx` (host details, 10% promo banner, highlights, description, sleeping arrangements, amenities grid), and `BookingCard.tsx` (sticky 370px reservation card with itemized price math)."

---

### Phase 4: Overlay Modals & Accessibility Engineering
> **Prompt 4:**  
> "Build the two overlay views: `PhotoTour.tsx` (full-screen room photo stream with sticky room category filter chips) and `Lightbox.tsx` (dark backdrop single-photo viewer with prev/next arrows and index counter). Implement custom hooks `useScrollLock.ts`, `useFocusTrap.ts`, and `useKeyboardNavigation.ts` to enforce background scroll locking, keyboard focus trapping, and `ArrowLeft` / `ArrowRight` / `Escape` key handling."

---

### Phase 5: Verification & Architectural Documentation
> **Prompt 5:**  
> "Write automated Vitest unit & integration tests (`src/tests/listing.test.tsx`), compile the Visual QA Audit report (`docs/visual-qa.md`), create the high-scale Production Architecture Diagram & Thinking document (`docs/architecture-thinking.md`), write all subagent configuration files (`ai-workflow/config/*.md`), and author a comprehensive project README (`README.md`)."
