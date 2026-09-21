# AI-Native Development Workflow & Multi-Agent Execution Strategy

This document details the multi-agent AI orchestration methodology employed to engineer the pixel-perfect, accessible **Airbnb Listing Clone** (`https://airbnb-clone-umber-two.vercel.app`).

---

## 1. Multi-Agent System Architecture

The engineering process was executed across 7 specialized AI agent roles, each bound to specific constraints, input domain boundaries, and verification criteria:

```
[Agent 1: Reference Analysis]
         │
         ▼
[Agent 2: Architecture & Component Planning]
         │
         ▼
[Agent 3: UI & Token Implementation]
         │
         ▼
[Agent 4: Interaction & Modal Logic]
         │
         ▼
[Agent 5: Accessibility Engineering]
         │
         ▼
[Agent 6: Visual QA & Regression]
         │
         ▼
[Agent 7: Final Code Quality & Audit]
```

---

## 2. Agent Roles & Responsibilities Summary

### Agent 1: Reference Analysis Specialist
- **Role:** Deep visual & behavioral audit of the reference web application.
- **Output:** `/docs/reference-audit.md` & `/docs/requirements.md`.
- **Key Task:** Extracted exact container dimensions (1120px max-width), header heights (80px), font scale, color tokens (`#FF385C`), and modal behaviors.

### Agent 2: Systems & Architecture Planner
- **Role:** Data model & system boundary planning.
- **Output:** `/src/types/listing.ts` & `/docs/architecture-thinking.md`.
- **Key Task:** Designed typed data models for 18 photo items, room categories, pricing breakdowns, and production microservices architecture.

### Agent 3: UI & Design Token Developer
- **Role:** Foundation CSS tokens & core listing page component implementation.
- **Output:** `/src/styles/tokens.css`, `Header.tsx`, `ListingTitleHeader.tsx`, `ListingGallery.tsx`, `ListingContent.tsx`, `BookingCard.tsx`.
- **Key Task:** Implemented 5-image asymmetric grid hero composition and sticky 370px booking card.

### Agent 4: Interaction & State Specialist
- **Role:** Modal overlay state, photo tour navigation, and lightbox slideshow engine.
- **Output:** `PhotoTour.tsx`, `Lightbox.tsx`, `useScrollLock.ts`, `useKeyboardNavigation.ts`.
- **Key Task:** Integrated body scroll locking and keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).

### Agent 5: Accessibility Engineer
- **Role:** WAI-ARIA compliance, focus trap management, screen reader labels.
- **Output:** `useFocusTrap.ts`, ARIA attributes, semantic HTML landmarks.
- **Key Task:** Guaranteed keyboard focus trap inside Photo Tour and Lightbox modals with focus restoration upon unmount.

### Agent 6: Visual QA Specialist
- **Role:** Cross-viewport audit and layout verification across 1440x900, 1600x900, 1920x1080.
- **Output:** `/docs/visual-qa.md`.
- **Key Task:** Iteratively verified pixel placement of header, hero grid, sticky card, and modal overlays.

### Agent 7: Final Quality Gate Auditor
- **Role:** Linting, TypeScript type safety, Vitest unit test suite verification.
- **Output:** `/src/tests/listing.test.tsx` & clean build verification.
