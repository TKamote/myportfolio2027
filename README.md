# Portfolio Website - David V Onquit

Modern, mobile-friendly portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Mobile-first responsive design
- ✅ Compact layout with minimal padding
- ✅ Modern UI with smooth animations
- ✅ All sections from content strategy implemented
- ✅ SEO optimized
- ✅ Fast loading and performance optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
myportfolio2027/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   └── projects/
│       ├── page.tsx         # Projects listing
│       └── [id]/
│           └── page.tsx     # Project detail page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── WhatIDo.tsx         # What I Do section
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx    # Individual project card
│   ├── Skills.tsx         # Skills/technologies
│   ├── Content.tsx         # YouTube/Facebook section
│   └── Contact.tsx         # Contact section
├── lib/
│   └── data.ts             # Portfolio data/content
└── public/                 # Static assets
```

## Deployment

The project is configured for deployment on Vercel:

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Auto-deploy on push
4. Point Vercel to Hostinger domain

## Content Updates

All content is managed in `/lib/data.ts`. Update the data file to change portfolio content.

