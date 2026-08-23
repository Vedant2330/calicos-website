# Calicos — Handcrafted Luxury Fashion Web Experience

[![Next.js 16](https://img.shields.io/badge/Next.js-16_App_Router-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-calicos--website.vercel.app-10B981?style=flat-square)](https://calicos-website.vercel.app)

> **Calicos** is a production editorial fashion web application designed for a handcrafted kurta brand originating in Pune, India. Built with Next.js 16 App Router, Tailwind CSS, and Framer Motion, it delivers fluid spatial transitions, responsive catalog layouts, and editorial visual hierarchy.

---

## 🎨 Visual & Technical Architecture

```
[ Next.js 16 App Router ]
           │
  ┌────────┴────────┐
  ▼                 ▼
[ Server Layout ]  [ Dynamic Client Components ]
  │                 ├── Motion Transitions (Framer Motion)
  │                 ├── Interactive Filtering Engine
  │                 └── Responsive Product Gallery
  ▼
[ Optimized Vercel Edge Deployment ]
```

### Key Engineering Highlights
* **Next.js 16 App Router Architecture**: Server Components for instant initial paint paired with localized Client Components for interactive UI controls.
* **Editorial Design System**: Custom typography, restrained monochrome palette with warm ivory accents, and high-density image grids.
* **Fluid Page Transitions**: Intercepting route structures and Framer Motion layout animations for smooth catalog browsing.
* **Performance Optimization**: Dynamic image loading, pre-rendered static routes, and cumulative layout shift (CLS) mitigation.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 16 (React 19, App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Animation**: Framer Motion
* **Deployment**: Vercel Edge Network

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+
* npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Vedant2330/calicos-website.git
cd calicos-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🌐 Live Demo

Visit the live deployed application: [calicos-website.vercel.app](https://calicos-website.vercel.app)

---

## 📄 License

MIT License © [Vedant Bodekar](https://github.com/Vedant2330)
