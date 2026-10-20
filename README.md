# VentureVerse 2026 — Ideas into Action

## What it is

A single-page event landing page for the fictional VentureVerse 2026 event organised by the Entrepreneurship Development Cell (EDC), JSS University, Noida. It is built for Task 01 of the EDC Technical Team Task Round.

## How to view it

Double-click `index.html` to open the page in a browser. No server, install step, framework, or build command is required.

## File structure

```text
index.html
css/
  style.css
js/
  main.js
assets/
  edc-logo-light.png
  edc-logo-dark.png
  jss-logo.png
README.md
NOTES_FOR_ME.md
```

## Page sections

The page includes a sticky EDC header, event hero, about and highlights, six-part schedule, fictional guest profiles, a demo registration form, and a branded footer.

## The three working features

1. **Mobile menu:** the menu button updates `aria-expanded`, opens a responsive navigation panel, and closes it when a navigation link is tapped.
2. **Live countdown:** JavaScript counts down to 12 November 2026 at 10:00 AM IST. It switches to an event-started message during the event and an event-ended message after 3:00 PM IST.
3. **Demo registration:** the form checks the name, email, engineering course, and year fields in the browser, then shows a success message. It is labelled as a demo and does not send data.

## Design decisions

The page uses warm paper as its main surface, ink navy for contrast, EDC orange as the main accent, and cyan sparingly. Bricolage Grotesque creates the large editorial display type, Instrument Sans keeps body copy readable, and JetBrains Mono handles dates, times, and labels. The design was intentionally simplified so the typography, spacing, rules, and color blocks carry the visual identity instead of lots of decorative micro-elements.

The layout uses plain CSS grid and responsive breakpoints rather than a framework. Motion is limited to small reveal and hover transitions, and `prefers-reduced-motion` removes non-essential movement.

## Fictional and placeholder note

The venue is the fictional placeholder “University Auditorium”. The guest profiles, contact details, social handles, and demo registration are fictional placeholders for this task. No real registration link, people, sponsors, or claims are included.

## Credits

- EDC and JSS logos: supplied by EDC for the task.
- Google Fonts: Bricolage Grotesque, Instrument Sans, and JetBrains Mono.

## AI disclosure

GitHub Copilot was used to generate the first version.

## What I changed or tested myself

- 
- 
- 
