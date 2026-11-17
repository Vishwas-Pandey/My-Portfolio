# Portfolio

My personal portfolio: a single-page React and Vite site covering my work, the Bougsk checkout flow, and my experience.

Live: https://vishwas-pandey.vercel.app

## Run it

```bash
npm install
npm run dev       # development server
npm run build     # production build to dist/
npm run lint
```

## Structure

- `src/data.js` holds all the content (projects, experience, skills, the checkout trace). Edit this file to update the site.
- `src/App.jsx` has the sections as small components, plus two hooks: scroll reveal and a count-up for the stats.
- `src/index.css` has the design tokens (colours, type scale, spacing) and all the styles. There is no CSS framework.

## Notes

- The site respects `prefers-reduced-motion`: all content shows without animation.
- The "checkout trace" in the hero and the "checkout flow" section describe how Bougsk, my live shop, handles a payment. It is a simplified illustration, not live data.
