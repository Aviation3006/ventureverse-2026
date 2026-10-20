# Notes for explaining VentureVerse 2026

## File walkthrough

### `index.html`

This is the page structure. The header contains the EDC logo, navigation links, and the mobile menu button. The main element contains the hero, about section, schedule, guests, and demo registration form in the required order. The footer contains the EDC and JSS branding plus clearly fictional contact and social placeholders.

The page uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`. The only main heading is the event name in the hero. Each later section has an `h2`.

### `css/style.css`

The first block defines CSS variables for colors, an 8px spacing scale, and the three font families. Later blocks are grouped by purpose: base rules, header, hero, about, schedule, guests, registration, footer, reveal motion, and responsive breakpoints.

The page is mainly a CSS Grid layout. At smaller widths, the grids become one or two columns and the navigation becomes a fixed dropdown. The visual system is deliberately restrained: large type, spacing, thin rules, and solid color sections do most of the work.

### `js/main.js`

The script is intentionally short and uses one function for each feature:

- `toggleMenu()` opens or closes the mobile navigation and keeps `aria-expanded` in sync.
- `closeMenu()` closes the navigation after a link is tapped.
- `updateCountdown()` compares the current time with the event start and end timestamps, then updates the four number boxes and status message.
- `validateForm(event)` prevents a real submission, checks the three required fields using browser validity, and shows either field messages or a friendly demo success message.
- `revealOnScroll()` uses `IntersectionObserver` to add `.is-visible` once each marked element enters the viewport.

The event time strings include `+05:30`, so the countdown target is explicitly India Standard Time.

## Ten likely interview questions

### 1. Why did you use plain HTML, CSS, and JavaScript?

The task allows and encourages a simple first-year solution. Plain files make the page easy to open by double-clicking and easy to explain.

### 2. How does the mobile menu work?

The button toggles a CSS class on the nav and updates its `aria-expanded` value. CSS changes the nav from hidden to visible, and each link calls `closeMenu()`.

### 3. How does the countdown handle time zones?

The event date uses an ISO timestamp with the `+05:30` offset. JavaScript converts both that timestamp and the current time to comparable Date values.

### 4. What happens after the event starts?

The countdown numbers become zero and the status changes to “Event started”. After the 3:00 PM end timestamp, it changes to “Event ended”.

### 5. Why is the registration form only a demo?

The brief says it must be a demo and nothing should be sent. Client-side validation demonstrates interaction without pretending to have a backend.

### 6. How did you make the page responsive?

The layout starts mobile-friendly, then uses CSS Grid and two media queries to adjust navigation, typography, speaker placement, schedule rows, and footer columns.

### 7. Why are CSS variables useful here?

They keep repeated colors, fonts, and spacing values consistent. They also make the design system easier to change in one place.

### 8. How did you approach accessibility?

I used semantic landmarks, labels for inputs, visible focus styles, `aria-expanded` and `aria-controls` on the menu, an `aria-live` countdown status, alt text for logos, and reduced-motion support.

### 9. Why use `IntersectionObserver`?

It lets the browser detect when reveal elements enter the viewport without repeatedly calculating scroll positions. Each element is observed only until it becomes visible.

### 10. What would you improve with more time?

I would test with real users, connect the form to an approved backend, and check the page with a formal accessibility audit and more browsers. I would keep the current scope rather than adding unfinished features.
