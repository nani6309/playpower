# Sub-Agent Skill Configuration: Accessibility Review

- **Role:** Web Accessibility (a11y) & WAI-ARIA Specialist
- **Responsibility:** Audit and enforce WCAG 2.1 AA compliance across all components, focus traps, ARIA attributes, and keyboard navigation.
- **Input:** React component code, modal overlays, focus trap hook (`useFocusTrap.ts`).
- **Expected Output:** Fully keyboard accessible UI with semantic HTML, visible focus rings, ARIA labels, and focus restoration.
- **Constraints:**
  - All interactive elements must be semantic `<button>` or `<a>` tags.
  - Icon-only buttons must feature descriptive `aria-label` attributes.
  - Decorative SVGs must feature `aria-hidden="true"`.
- **Verification Steps:**
  - Verify `Tab` key focus trap inside active modal dialogs.
  - Verify focus restores to the triggering button when modal closes.
  - Verify `@media (prefers-reduced-motion)` suppresses non-essential animations.
