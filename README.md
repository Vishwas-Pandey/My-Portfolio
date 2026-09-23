# 3D Developer Portfolio

This is my personal portfolio: a single-page React site with Three.js scenes, built with React Three Fiber and Drei. It has an interactive 3D hero scene, an About grid with a 3D globe, a project carousel that plays each project's preview video on a 3D computer screen, a work-experience timeline with an animated 3D avatar, a contact form that sends email through EmailJS, and a small keyword-based chat assistant that answers questions about my skills and projects.

Live demo: https://vishwas-pandey.vercel.app

## Credits

Built by following the JavaScript Mastery 3D portfolio tutorial (https://youtu.be/kt0FrkQgw8w). The layout, the 3D scenes, the section components and the 3D models/textures in `public/` come from that tutorial. I typed the code myself while following along.

What I added or changed beyond the tutorial, based on the git history:

- **Chat assistant (`src/components/ChatBot.jsx`, new).** A floating chat widget mounted globally in `App.jsx`. Replies are rendered with `react-markdown`.
  - First version (commit `c491d36`): called Google Gemini from the browser through `@google/generative-ai`. The system prompt told the model to answer only from my profile data.
  - Current version (commit `df746fc`): I replaced the Gemini call with a local rule-based responder. It matches keywords (skills, projects, experience, education, contact, specific project names) and builds replies from `myData.js`, so no API key is needed and no request leaves the browser.
- **Profile data (`src/constants/myData.js`, new).** Structured data about my education, tech stack, internships and projects that the chat assistant reads.
- **Projects and experience (`src/constants/index.js`).** I replaced the tutorial's sample projects with my own (Type Strike, AI-HRMS, DayMark, Hate Speech Detection, Binary Tree Visualizer), including links and tech tags, and replaced the sample work history with my three internships.
- **Contact form (`src/sections/Contact.jsx`).** Pointed the EmailJS payload at my own inbox and updated the placeholders. The EmailJS service, template and public key come from environment variables.
- **Testimonials removed.** The tutorial's placeholder testimonials (`Clients.jsx`, `clientReviews`) are gone.
- **Hero target model (`src/components/Target.jsx`).** Replaced the remotely hosted target model with the local `/models/cube.glb` and rewrote the GSAP float animation.
- **Smaller changes:** night-time globe texture in `About.jsx`, footer copyright, new tech icons in `public/assets/` (Express, Java, MongoDB, Node.js, Python), and a replaced monitor screen texture.

## Features

- Hero: a 3D hacker-room model with a camera that follows the mouse (`HeroCamera`) and floating models (`Cube`, `Rings`, `ReactLogo`, `Target`). Sizes are set per breakpoint with `react-responsive` (`calculateSizes` in `constants/index.js`).
- About: a bento grid with bio, tech stack, a `react-globe.gl` globe and a copy-email-to-clipboard button.
- Projects: previous/next navigation through `myProjects`. Each project's MP4 plays as a video texture on the `DemoComputer` model.
- Experience: hovering or clicking an entry plays a different animation on the `Developer` avatar (idle, salute, clapping, victory FBX clips).
- Contact: a name/email/message form sent with `@emailjs/browser`, with success and error alerts (`useAlert` + `Alert`).
- Chat assistant: the keyword-based Q&A widget described above.

## Tech stack

- React 18, Vite 7
- Three.js, @react-three/fiber, @react-three/drei, maath, three-stdlib
- GSAP (`@gsap/react`) for small animations
- Tailwind CSS 3
- EmailJS (`@emailjs/browser`) for the contact form
- react-globe.gl, react-responsive, react-markdown
- Deployed on Vercel

## How it works

- `src/App.jsx` puts the sections in order: `Navbar`, `Hero`, `About`, `Projects`, `WorkExperience`, `Contact`, `Footer`, plus `ChatBot`.
- The content lives in `src/constants/index.js` (nav links, projects, work experience, responsive sizes) and `src/constants/myData.js` (chat assistant data). The sections read from these files, so updating content usually means editing data, not components.
- The 3D components in `src/components/` load GLB/FBX models from `public/models/` with Drei's `useGLTF` / `useFBX`. Most were generated with `gltfjsx`. Each `<Canvas>` is wrapped in `Suspense` with a `Loading` fallback.
- On submit, the contact form calls `emailjs.send(serviceId, templateId, payload, publicKey)` straight from the browser. There is no backend.

## Running locally

Requires Node.js and npm.

```bash
npm install
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the build locally
npm run lint      # ESLint
```

Create a `.env` file in the project root (it is gitignored) with your EmailJS values:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The recipient address is set in `Contact.jsx`. Change it if you fork the project.

## Known limitations / next steps

- There are no automated tests.
- `myData.js` is out of sync with `constants/index.js`: the chat assistant lists different projects from the ones the Projects section shows.
- `@google/generative-ai` is still in `package.json` even though the current chat assistant does not use it.
- The project preview videos in `public/textures/project/` have not changed since the initial commit. They should be checked against, or replaced with, recordings of the projects now listed.
- The 3D models and textures in `public/` are large and loaded on page load. Nothing is lazy-loaded below the fold, and there is no reduced-motion or low-power fallback.
- Keyword matching is plain substring matching (for example, "hi" matches inside "this").
- The favicon path is still `/assets/jsm-logo.png` from the tutorial.
