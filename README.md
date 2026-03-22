# Portfolio — Harshit Mittal

Personal portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

Single-page site with a boot sequence, interactive terminal, featured projects, competitive programming stats, and contact flows (Gmail / Outlook / mailto).

**Live:** Deploy on [Vercel](https://vercel.com) (or your host of choice) from this repo.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Motion:** [Framer Motion](https://www.framer.com/motion/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)

## Features

- Boot-style intro animation
- Custom cursor and particle background
- Sections: Hero, About (journey timeline), Projects, Competitive programming, Skills, Terminal, Contact
- Resume PDF served from `/public` (`Harshit_Mittal_Resume.pdf`)
- Project modals with links to GitHub and live demos where applicable

## Getting started

```bash
git clone https://github.com/harshitt0418/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Configuration

- **Site constants** (LinkedIn, resume path): `lib/constants.ts`
- **CP profile URLs & stats:** `lib/cp-platforms.ts`
- **Projects & links:** `components/projects-section.tsx`

## License

Private / personal use unless you choose to add a license.

---

Built by [Harshit Mittal](https://github.com/harshitt0418).
