# Sub-Agent Skill Configuration: Interaction Testing

- **Role:** Interactive Behavioral QA Specialist
- **Responsibility:** Implement and test state synchronization across Listing Page, Photo Tour overlay, and Lightbox single-photo viewer.
- **Input:** Component state handlers, custom hooks (`useScrollLock`, `useKeyboardNavigation`).
- **Expected Output:** Synchronized active photo indexing, seamless transition between hero photos -> Photo Tour -> Lightbox.
- **Constraints:**
  - Background scrolling must lock when any modal overlay is active.
  - Keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`) must trigger correct state transitions.
- **Verification Steps:**
  - Clicking hero photo opens Photo Tour / Lightbox at exact photo index.
  - Pressing `ArrowRight` advances photo index; `ArrowLeft` decrements.
  - Pressing `Escape` closes the active overlay cleanly.
