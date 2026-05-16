# Kalisetti Tejaswi — Personal Portfolio

A fully responsive, animated personal portfolio website built with React + Vite.

## 🔗 Live Demo

**[View Live Site →](https://portfolio-1-two-green.vercel.app/)**

> After deploying, update this link with your actual Vercel/Netlify URL.

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Animations**: CSS Transitions + IntersectionObserver API + requestAnimationFrame
- **Fonts**: Syne + DM Sans via Google Fonts
- **Deployment**: Vercel / Netlify

---

## ✨ Features

- Fully Responsive — Mobile (375px), Tablet (768px), Desktop (1280px+)
- Parallax Scrolling — Hero background orbs move at different scroll speeds
- 3+ On-Scroll Animations — Fade-in, slide-left, slide-right, staggered reveals
- Typewriter Effect — Animated role titles in the hero
- Accessible — prefers-reduced-motion, ARIA labels, keyboard navigation
- SEO Optimized — Meta title, description, Open Graph tags

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+

### Install & Run

```bash
git clone https://github.com/sindhutej-6/portfolio_1.git
cd portfolio
npm install
npm run dev
```

Visit http://localhost:5173

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌐 Deployment (Vercel)

1. Push code to a public GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy
4. Every push to `main` triggers auto-redeploy

---

## ♿ Accessibility

All animations respect `@media (prefers-reduced-motion: reduce)`. Semantic HTML5, ARIA labels, and keyboard navigation included.

---

## 📝 Customization

- **Personal info**: Edit `src/sections/Hero.jsx` and `src/sections/About.jsx`
- **Projects**: Update `PROJECTS` array in `src/sections/Projects.jsx`
- **Skills**: Update `SKILLS` and `TECH_TAGS` in `src/sections/Skills.jsx`
- **Contact**: Update email/GitHub/LinkedIn in `src/sections/Contact.jsx`
- **Colors**: Adjust CSS variables in `src/index.css`

---

MIT License
