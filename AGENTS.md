# AGENTS.md

## Overview
This repository contains a personal portfolio website with interactive elements, animations, and customizable assets. The content is built with HTML, CSS, and JavaScript, organized to provide a visually engaging and responsive user experience.

### Key Files
- **HTML Files**: Content structure and page layout (e.g., `index.html`, `about.html`, `coding.html`).
- **CSS**: Styles are defined in `assets/styles.css`.
- **JavaScript**: Interaction logic resides in `main.js`.

## How To Investigate

1. **Read the main entry points first:**
   - `index.html` serves as the default homepage.
   - `main.js` includes multiple interactive features:
     - Scroll reveal animations.
     - Sticky header.
     - Active navigation styling.
     - Orb and hover effects for cards.
     - Play button animations.
   
   Look for `data-*` attributes in HTML for JavaScript hooks.

2. **Pay attention to entry points:**
   - Navigation links dynamically activate based on the current path (`main.js: line 34`).
   - Smooth scroll logic applies to `#anchor` links (`main.js: lines 44–51`).

## Operational Notes
- **Testing Animations**:
  - Interactions like hover tilt, sticky headers, and scroll reveal require browser testing. Test changes using a live server to see effects immediately.
  
- **Responsive Features**:
  - Ensure added content is responsive. CSS refers to `--` prefixed variables for theming.

- **Dynamic Behaviors**:
  - `main.js` depends on clean class names (e.g., `.revealed`, `.scrolled`). Keep consistent naming when altering effects.

## Development Tips
- Use `live-server` or `VSCode Live Preview` to test your changes.
- Changes to assets (e.g., images) should match the `assets/` directory structure.

## Known Quirks
- **Manual updates required**:
  - **Footer year:** Auto-updates dynamically (`main.js: line 40`).
  - **Orb cursor effect:** Heavy CPU usage; disable for testing on low-performance machines.

## Commands & Tools
- Run a basic server for live preview:
  ```bash
  npx live-server
  ```
- Validate formatting by ensuring clean separation of concerns:
  - HTML: Semantic structure.
  - CSS: Isolated styles (avoid inline styles unless dynamic).
  - JS: Pure logic (no direct style manipulation unless required).