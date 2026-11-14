<div align="center">

  # 🌟 Sakin Arshad Ayan — Developer Portfolio

  <p align="center">
    <strong>A modern, high-performance, and interactive developer portfolio built with React 19, Vite, Tailwind CSS v4, and Motion.</strong>
  </p>

  <p align="center">
    <a href="https://portfoliomain-snowy.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-6366f1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/ayan1906/Portfolio" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Motion-Framer-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  </p>

</div>

---

## 📖 Overview

This repository contains the source code for the personal portfolio of **Sakin Arshad Ayan** — Frontend Developer, UI/UX Enthusiast, and Diploma in Engineering student at CPI. 

Designed with a sleek cyberpunk-inspired dark aesthetic, fluid spring physics animations, and modular React architecture, this portfolio showcases personal projects, technical skill proficiency, educational milestones, and interactive experiences.

🌐 **Live Website:** [portfoliomain-snowy.vercel.app](https://portfoliomain-snowy.vercel.app/)

---

## ✨ Key Features

- 🎨 **Modern Cyber-Dark UI**: Designed with glassmorphism, dynamic radial glows, gradient accents, and responsive typography.
- ⚡ **Cutting-Edge Stack**: Powered by **React 19**, **Vite**, and the latest **Tailwind CSS v4** engine.
- 🪄 **Fluid Motion & Micro-Interactions**: Smooth entrance staggered reveals, floating cards, hover spring physics, and page transitions using `motion/react`.
- 🤖 **Interactive AI-Style ChatBot**: An intelligent in-browser helper answering questions regarding skills, bio, pricing, and contact info with suggested prompt pills.
- 🎮 **Interactive Challenge (Tic-Tac-Toe)**: Built-in playable game with score counter and AI/player logic to engage visitors.
- 📬 **Live Contact Form via EmailJS**: Direct email delivery with client-side validation using `react-hook-form` and custom animated swipe toast feedback.
- 📊 **Animated Skill Proficiency Bars**: Viewport-triggered animated percentage meters showcasing competency across web tech and machine learning.
- 🖼️ **Visual Archive & Modal Gallery**: Interactive project and community leadership gallery with lightbox modal views.
- 📱 **100% Mobile & Tablet Responsive**: Seamlessly optimized from ultra-wide desktops down to mobile viewports.

---

## 🛠️ Tech Stack & Libraries

| Category | Technologies & Tools |
| :--- | :--- |
| **Framework & Core** | [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [React Router v7](https://reactrouter.com/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), `@fontsource-variable/geist`, `styled-components` |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/), `tw-animate-css` |
| **Icons & UI** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), `@hugeicons/react` |
| **Form & Services** | [React Hook Form](https://react-hook-form.com/), [@emailjs/browser](https://www.emailjs.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── images/              # Profile photos, project banners, skill icons
│   ├── favicon.svg          # Custom favicon
│   ├── robots.txt           # Search engine crawler config
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── assets/              # Static SVG and image assets
│   ├── components/
│   │   ├── chatbot/         # Custom portfolio ChatBot & FAQ knowledge base
│   │   ├── ui/              # Button and Toast primitives
│   │   ├── Abouttop.jsx     # Hero section of About page
│   │   ├── Card.jsx         # Modular service & feature cards
│   │   ├── Contact.jsx      # EmailJS contact form with validation
│   │   ├── Dservice.jsx     # Digital services showcase
│   │   ├── Footer.jsx       # Global footer & social links
│   │   ├── Gallary.jsx      # Visual archive with modal preview
│   │   ├── Journeylife.jsx  # Education & timeline highlights
│   │   ├── LanguageProficiency.jsx # Animated skill counter bars
│   │   ├── motionVariants.js# Reusable Framer Motion transitions
│   │   ├── Navbar.jsx       # Responsive header navigation
│   │   ├── Projectcard.jsx  # Featured project cards
│   │   ├── Skillcard.jsx    # Tech stack grid
│   │   └── Tictactoe.jsx    # Interactive Tic-Tac-Toe challenge
│   ├── layouts/
│   │   └── MainLayout.jsx   # Shared layout wrapper (Navbar, Outlet, Footer, ChatBot)
│   ├── Pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # Bio, mission, vision & visual gallery
│   │   ├── Project.jsx      # Featured showcase projects
│   │   ├── Skills.jsx       # Comprehensive skills & proficiency
│   │   ├── Journey.jsx      # Educational journey & background
│   │   └── Challenge.jsx    # Interactive game challenge
│   ├── routes/
│   │   └── Routes.jsx       # React Router route definitions
│   ├── App.jsx              # Root application component
│   ├── index.css            # Tailwind directives & theme configuration
│   └── main.jsx             # React DOM entry point
├── .env.example             # Environment variable template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started Locally

Follow these instructions to set up and run the portfolio locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayan1906/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🌐 Featured Projects Displayed in Portfolio

- **[FlowFlix](https://flowflix-jet.vercel.app/)** — Modern movie & TV show streaming application built with React, Tailwind CSS, and Firebase Auth.
- **[CPI ICT Club](https://cpi-ict-club1.vercel.app/)** — Official responsive web platform for the CPI ICT Club with modern UI and club news.
- **[Movie Explorer](https://ayan1906.github.io/Movieexplore/)** — Fast movie discovery engine with search and category filtering.

---

## 📬 Contact & Connect

- **Portfolio:** [portfoliomain-snowy.vercel.app](https://portfoliomain-snowy.vercel.app/)
- **GitHub:** [@ayan1906](https://github.com/ayan1906)
- **LinkedIn:** [Sakin Arshad Ayan](https://www.linkedin.com/in/sakin-ayan-a7953b346/)
- **Email:** [adasr0099@gmail.com](mailto:adasr0099@gmail.com)
- **WhatsApp:** [+880 1708-561481](https://wa.me/8801708561481)
- **Facebook:** [@Iamayan1906](https://www.facebook.com/Iamayan1906)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Sakin Arshad Ayan</strong>.</sub>
</div>
