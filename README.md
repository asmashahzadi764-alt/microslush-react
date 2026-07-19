<div align="center">

# 🚀 Microslush — React Clone

A component-based React recreation of the Microslush software agency landing page — built with **Vite + React**, converted from a static HTML/CSS clone into clean, reusable components.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00bcd4?style=for-the-badge&logo=vercel&logoColor=white)](https://microslush-react.vercel.app/)
[![Original Site](https://img.shields.io/badge/Original-microslush.com-1A61FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://microslush.com)

### Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🔗 Preview

**Live:** [microslush-react.vercel.app](https://microslush-react.vercel.app/)

**Original Reference:** [microslush.com](https://microslush.com)

---

## 📦 About

This project recreates the full Microslush landing page as a React application — broken down into independent, reusable components instead of one static HTML file. Every repeated UI block (service cards, tech icons, footer columns, nav dropdowns, stats) is its own component and rendered dynamically from data arrays.

## 🧩 Features

- Sticky header with hover dropdown navigation (Services, Hire Developer)
- Hero section with call-to-action
- Stats bar (Clients, Experience, Global Partners)
- Services overview section with image
- 6-card services grid (Web, Mobile, Trading, Custom Software, .NET, Blockchain)
- 20-icon technology stack showcase (PHP, Laravel, Rails, MERN, MEAN, Java, Django, Python, WordPress, Node JS, Angular, React, Rust, JavaScript, VueJS, Golang, Flutter, and more)
- Multi-column footer with global office locations (US, UK, Lahore)

## 🗂️ Project Structure

```
microslush-react/
├── public/
│   └── assets/              # icons & images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NavDropdown.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── StatItem.jsx
│   │   ├── ServicesOverview.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TechStack.jsx
│   │   ├── TechItem.jsx
│   │   ├── Footer.jsx
│   │   └── FooterColumn.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── index.html
```

## ⚙️ Getting Started

```bash
git clone https://github.com/asmashahzadi764-alt/microslush-reactgit
cd microslush-react
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server & bundler
- **Plain CSS** — no frameworks, custom styling matching the original design

## 👩‍💻 Author

**Asma Shahzadi**