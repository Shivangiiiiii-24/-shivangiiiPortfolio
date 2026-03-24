# Shivangi Kumari – Portfolio

Modern, responsive personal portfolio website for **Shivangi Kumari** – Computer Science student, Machine Learning enthusiast, and problem solver.

The site is a single-page layout with:

- **Hero / Landing section** with CTAs and profile card
- **About**, **Skills**, **Projects**, **Certificates**, **Achievements**, **Education**, and **Contact** sections
- **Dark / light theme toggle**, smooth scrolling, scroll-triggered animations, and responsive mobile design

## Tech Stack

- **HTML5** for structure
- **Tailwind CSS (CDN)** + small custom CSS in `styles.css` for the modern UI
- **Vanilla JavaScript** (`script.js`) for:
  - Dark/light mode toggle with `localStorage`
  - Mobile navigation
  - Scroll reveal animations
  - Project and certificate detail modals
  - Dynamic year in footer

No build tooling is required; everything runs in the browser.

## Getting Started

1. Open `index.html` directly in your browser  
   **or**
2. Serve the folder using a simple static server (recommended):

```bash
npm install
npm run start
```

Then open the URL shown in the terminal (usually `http://localhost:3000` or similar).

## Customization

- Replace image placeholders in the `assets/` folder (e.g. `profile.jpg`, project and certificate screenshots).
- Update:
  - Contact info (email, LinkedIn, GitHub links) in the **Contact** section
  - Timeline content in **Achievements** and **Education**
  - Project and certificate descriptions in `script.js` (`PROJECT_DETAILS` and `CERTIFICATE_DETAILS`).

## License

MIT – you are free to customize and reuse this portfolio for your own use.

