# 🍃 Planto - Modern Interactive Landing Page

Planto (also referred to as *Breath Natural*) is a premium, modern, and highly interactive landing page design for an eco-friendly plant and lifestyle brand. This project is a pixel-perfect frontend implementation built from a Figma UI/UX design tutorial.

## ✨ Features

- **Modern Tech Stack:** Powered by React 19, Vite, and the latest Tailwind CSS v4.
- **Component-Driven Architecture:** Modular folder structure featuring scalable global components and separate feature sections.
- **Micro-Interactions & Animations:** Smooth transitions and modern hover effects for product items and interactive UI elements.
- **Fully Responsive:** Tailored layout optimized for desktops (MacBook Pro standard), tablets, and mobile devices.
- **Cart Context Ready:** Includes global state management (React Context) pre-configured for the shopping bag/cart interactions.

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components, Hooks)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (Using the new `@import "tailwindcss"` configuration)
- **Icons:** React Icons / SVG custom graphics

## 📁 Project Structure

```text
planto/
├── public/
│   └── assets/            # Static high-res images (plants, bags, hero graphics)
├── src/
│   ├── assets/            # Inline SVGs & UI graphics
│   ├── components/        # Reusable Global UI Elements (Navbar, Footer, Buttons)
│   ├── features/          # Feature-specific modules (Hero section, Product grids)
│   ├── context/           # Global State Management (Cart state for the bag icon)
│   ├── hooks/             # Custom utility hooks
│   ├── App.jsx            # Layout orchestrator
│   └── index.css          # Tailwind CSS v4 directives

```
