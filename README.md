# Responsive Navbar (React + Vite)

A mobile-first responsive navigation bar built with React and plain CSS.

| Screen | Width | Layout |
|---|---|---|
| Desktop | ≥ 1024px | White horizontal bar: Logo, 4 links, dark-green "Create Account" button |
| Tablet | 640–1023px | Hamburger opens a full-width green panel with an X icon; links stay horizontal |
| Mobile | < 640px | Hamburger opens a full-screen green vertical menu, centered links, "Create Account" at the bottom |

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173) and resize the browser.

## Build
```bash
npm run build
npm run preview
```

## Deploy
- **Vercel:** import the repo (or run `npx vercel`) – settings are auto-detected.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js`, build, and publish `dist`.

## Structure
```
src/
├─ components/Navbar.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
```
