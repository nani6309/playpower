# Sub-Agent Skill Configuration: Reference Analysis

- **Role:** Visual & Behavioral Reverse-Engineering Specialist
- **Responsibility:** Audit the target website (`https://airbnb-clone-umber-two.vercel.app`) at desktop viewports (1440x900, 1600x900, 1920x1080), extracting exact measurements, typography scales, color palettes, and interaction behaviors.
- **Input:** Reference URL, viewport parameters, PDF assignment specification.
- **Expected Output:** Meticulous markdown audit documents (`/docs/reference-audit.md` & `/docs/requirements.md`) detailing layout container sizes, padding, fonts, radii, hover states, and modal overlay specs.
- **Constraints:**
  - Do NOT copy, scrape, or reuse source code or internal repository structure from reference site.
  - Rely exclusively on observable visual layout and browser rendering behavior.
- **Verification Steps:**
  - Verify container width measures exactly 1120px max-width centered on desktop.
  - Verify primary color token `#FF385C` matches Airbnb branding.
  - Confirm all 3 views (Listing Page, Photo Tour, Lightbox) are thoroughly documented.
