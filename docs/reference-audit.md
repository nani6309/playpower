# Reference Visual & Behavioral Audit

**Reference URL:** https://airbnb-clone-umber-two.vercel.app  
**Property Title:** Romantic Jacuzzi 1BHK Candolim | Mirashya UG10  
**Target Viewports:** 1440x900, 1600x900, 1920x1080  
**Target Zooms:** 90%, 100%, 110%  

---

## 1. Page Structure & Main Layout

### Global Layout Container
- **Max Container Width:** 1120px centered on desktop (`margin: 0 auto; padding: 0 80px`).
- **Header:** Sticky top navigation bar (`position: sticky; top: 0; z-index: 100; height: 80px; background: #ffffff; border-bottom: 1px solid #ebebeb`).
- **Page Grid Structure:** Two-column desktop layout below hero gallery:
  - **Left Column (Main Content):** 63.66% width (~650px). Contains Host info, Highlights, Description, Sleeping arrangements, Amenities, Calendar/Availability, Reviews, Host profile, Location, House Rules.
  - **Right Column (Sticky Reserve Card):** 33.33% width (~370px) positioned sticky (`position: sticky; top: 100px; align-self: flex-start`).
  - **Column Gap:** 8.33% (~80px).

---

## 2. Header Component Specs

- **Height:** 80px
- **Padding:** 0 80px (1440px desktop width)
- **Flex Layout:** Space-between, vertically aligned centered.
- **Left Element:** Airbnb Brand Logo (Coral accent `#FF385C` icon + wordmark).
- **Center Element:** Search Pill (`border: 1px solid #DDDDDD; border-radius: 40px; box-shadow: 0 1px 2px rgba(0,0,0,0.08); padding: 8px 8px 8px 16px`).
  - Text segments: "Anywhere" (font-weight: 600) | "Any week" (font-weight: 600) | "Add guests" (color: #717171).
  - Search icon button: Red circle `#FF385C` with magnifying glass icon.
- **Right Elements:**
  - "Airbnb your home" text button (font-weight: 600, hover background: `#F7F7F7`, border-radius: 22px).
  - Globe icon button (language/currency modal trigger).
  - User Menu Pill (`border: 1px solid #DDDDDD; border-radius: 21px; padding: 5px 5px 5px 12px; flex display: hamburger icon + avatar placeholder`).

---

## 3. Title & Header Action Bar Specs

- **Property Title:** `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`
  - Font Size: 26px (`1.625rem`), Font Weight: 600, Line Height: 1.2, Color: `#222222`.
- **Sub-header Bar:** Flex row below title.
  - Rating: ★ 4.92 (font-weight: 600), `14 reviews` (underlined).
  - Superhost badge: "· Superhost".
  - Location: `Candolim, Goa, India` (underlined, color: `#222222`).
  - **Right Action Buttons:**
    - "Share" button: Share icon + label, hover background `#F7F7F7`, border-radius 8px.
    - "Save" button: Heart icon + label ("Save"), hover background `#F7F7F7`, border-radius 8px.

---

## 4. Listing Hero Photo Gallery Specs

- **Grid Arrangement:** 5-image asymmetric grid composition.
  - **Left Main Hero Image:** Spans 50% width, full height of gallery container (~400px height), top-left radius 12px, bottom-left radius 12px.
  - **Right 4 Auxiliary Images:** 2x2 grid spanning 50% width, height ~196px each with 8px grid gap.
    - Top Right image: top-right radius 12px.
    - Bottom Right image: bottom-right radius 12px.
- **Grid Gaps:** 8px horizontal & vertical gaps.
- **Image Hover State:** Darkening overlay / slight zoom transition on hover (`transition: opacity 0.2s ease-in-out`).
- **"Show all photos" Button:**
  - Position: Absolute, bottom 24px, right 24px.
  - Styling: Background `#FFFFFF`, border `1px solid #222222`, border-radius 8px, padding `7px 15px`, font-weight 600, font-size 14px, box-shadow `0px 1px 2px rgba(0,0,0,0.18)`.
  - Icon: 9-dots grid icon on left of text.
  - Hover state: Background `#F7F7F7`, scale `1.02`.

---

## 5. Main Property Content Specs

### Host & Basic Stats Row
- Title: "Entire serviced apartment hosted by Mirashya" (font-size 22px, font-weight 600).
- Subtitle specs: "3 guests · 1 bedroom · 1 bed · 1 bathroom" (color #717171, font-size 16px).
- Host Avatar: 56px circular avatar right-aligned.

### Promotional Banner Card
- Text: "Get 10% off your next stay"
- Button: "Claim" (Dark button `#222222`, text `#FFFFFF`, radius 8px).

### Highlight Badges
- Superhost badge (Star icon + label + description).
- Great location badge (Map pin icon + label + description).
- Great check-in experience badge (Key icon + label + description).

### Description Section
- Expanded text overview detailing the 1BHK Candolim apartment, interior features, jacuzzi setup, distance to beach, etc.

### Sleeping Arrangements Box
- Card container for Bedroom 1: Double bed icon, title "Bedroom 1", subtext "1 queen bed".

### Amenities Grid
- 2-column grid of icons + labels (Wifi, Air conditioning, Private Jacuzzi, Dedicated workspace, Free parking, TV, Kitchen, Pool, Washer, etc.).
- "Show all 32 amenities" button: Border `#222222`, radius 8px, padding 13px 23px, font-weight 600.

---

## 6. Sticky Booking / Reserve Card Specs

- **Width:** 370px
- **Border & Shadow:** Border `1px solid #DDDDDD`, radius `12px`, box-shadow `0 6px 16px rgba(0,0,0,0.12)`, padding `24px`.
- **Pricing Header:**
  - Price: `₹4,850` per night (font-size 22px, font-weight 600).
  - Rating summary: ★ 4.92 · 14 reviews.
- **Date & Guest Selector Box:**
  - Border `1px solid #B0B0B0`, radius `8px`.
  - Top split row: CHECK-IN / CHECKOUT dates.
  - Bottom row: GUESTS (dropdown selector).
- **Reserve Button:**
  - Background: Gradient `#E61E4F` to `#D70466` (Airbnb Coral gradient).
  - Text: White `#FFFFFF`, font-weight 600, font-size 16px, centered.
  - Full width `100%`, height `48px`, border-radius `8px`.
- **Price Breakdown:**
  - `₹4,850 x 5 nights` -> `₹24,250`
  - Cleaning fee -> `₹1,200`
  - Service fee -> `₹3,200`
  - **Total before taxes:** `₹28,650` (font-weight 600, font-size 16px).

---

## 7. Photo Tour Component Specs (Overlay/View 2)

- **Trigger:** Clicking "Show all photos" OR clicking any individual photo in the Listing Gallery.
- **Type:** Full-screen modal overlay (`position: fixed; inset: 0; background: #ffffff; z-index: 1000; overflow-y: auto`).
- **Header Bar:**
  - Sticky top bar (`height: 64px; border-bottom: 1px solid #EBEBEB; background: #ffffff`).
  - Close button: Back arrow icon / "X" button (`border-radius: 50%; hover background: #F7F7F7`).
  - Right tools: Share & Save buttons.
- **Sticky Room Category Chips Bar:**
  - Horizontal pill navigation: "Living room 1", "Living room 2", "Full kitchen", "Bedroom", "Full bathroom", "Gym", "Exterior", "Pool", "Additional photos".
  - Active chip state: Underline / dark pill indicator `#222222`.
- **Content Layout:**
  - Single column or 2-column image stream grouped into room sections.
  - Each room section heading (e.g. `Living room 1`, subtitle `Sofa · Air conditioning · Ceiling fan · TV`).
  - Images presented with high quality, rounded corners (8px), gap (16px).
  - Hovering/clicking any photo opens the Lightbox!

---

## 8. Lightbox Single-Photo Viewer Specs (Overlay/View 3)

- **Trigger:** Clicking any photo inside the Photo Tour or Listing Gallery.
- **Type:** Modal dialog overlay with dark translucent backdrop (`background: rgba(0, 0, 0, 0.9); z-index: 2000`).
- **Header / Controls:**
  - Top Bar: Close button (X icon, aria-label "Close lightbox", upper left or upper right), Photo Counter ("1 / 18", upper center/left).
  - Prev / Next Arrow Controls: Circular buttons (`width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.9); color: #222222`) positioned on left (`24px`) and right (`24px`).
- **Main View:**
  - High-resolution photo centered (`max-width: 90vw; max-height: 85vh; object-fit: contain`).
  - Smooth fade/scale animation when transitioning between images.
- **Key Navigation & Focus Specs:**
  - `ArrowLeft`: Navigate to previous photo.
  - `ArrowRight`: Navigate to next photo.
  - `Escape`: Close Lightbox, return focus to trigger element.
  - Focus trap active inside Lightbox modal.
  - Body scroll lock active (`overflow: hidden` on body element).

---

## 9. Color Palette Tokens & Typography Tokens

### Colors
- `--color-primary`: `#FF385C` (Airbnb Coral Red)
- `--color-primary-hover`: `#E00B41`
- `--color-text-primary`: `#222222`
- `--color-text-secondary`: `#717171`
- `--color-border-light`: `#EBEBEB`
- `--color-border-medium`: `#DDDDDD`
- `--color-border-dark`: `#222222`
- `--color-bg-surface`: `#FFFFFF`
- `--color-bg-hover`: `#F7F7F7`
- `--color-backdrop`: `rgba(0, 0, 0, 0.9)`

### Typography
- Font Family: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`
- Title H1: `26px / 1.2`, weight `600`
- Section H2: `22px / 1.25`, weight `600`
- Subheading H3: `18px / 1.3`, weight `600`
- Body Regular: `16px / 1.43`, weight `400`
- Body Bold: `16px / 1.43`, weight `600`
- Small Caption: `14px / 1.43`, weight `400` or `600`

---

## 10. Motion & Animation Specs

- Modal backdrop fade-in: `opacity: 0` to `1` over `200ms ease-out`.
- Modal content slide-up: `transform: translateY(20px)` to `translateY(0)` over `250ms cubic-bezier(0.2, 0, 0, 1)`.
- Image hover overlay transition: `opacity 0.2s ease`.
- Lightbox image slide/fade transition: `200ms ease-in-out`.
- Respect `prefers-reduced-motion`: set transition duration to `0.01ms` when reduced motion is preferred.
