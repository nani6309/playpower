# Sub-Agent Skill Configuration: Visual Regression

- **Role:** Visual QA & Pixel Parity Specialist
- **Responsibility:** Compare implementation against reference screenshots across target desktop resolutions (1440x900, 1600x900, 1920x1080).
- **Input:** Rendered application, reference screenshot specifications.
- **Expected Output:** `/docs/visual-qa.md` report documenting visual alignment, layout spacing, image cropping, typography, and button dimensions.
- **Constraints:**
  - Verify layout integrity at 90%, 100%, and 110% browser zoom.
  - Zero tolerance for missing borders, broken images, or unaligned elements.
- **Verification Steps:**
  - Header alignment, search pill centering, and logo placement match reference.
  - 5-image hero gallery layout maintains exact grid proportions.
  - Booking card box-shadow and border-radius match design system tokens.
