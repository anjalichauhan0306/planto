# Planto. - Breath Natural 🌱

Planto is a premium, modern e-commerce landing page designed for indoor, trendy, and air-purifying plants. Built with a sophisticated dark green aesthetic, this project focuses on a seamless, visually rich user experience to showcase high-quality botanical products.

## 📸 Preview

Here is a preview of the landing page layout:

![Planto Website Preview](MacBook Pro 16_ - 1.png)

---

## ✨ Features

- **Hero & Navigation:** A clean header layout featuring a responsive Navbar, quick navigation links, and a high-impact intro section with CTA buttons.
- **Trendy Plants Display:** Highlights featured plants using custom-curated interactive layouts.
- **Product Catalog Grid:** A reusable card system showcasing top-selling products with pricing, short descriptions, and quick "Add to Cart" interactions.
- **Customer Reviews:** A testimonial carousel/grid highlighting customer feedback and rating metrics.
- **Best O2 Plants:** A specialized featured collection showcasing plants that maximize indoor oxygen levels.
- **Polished Footer:** Complete with newsletter subscription functionality, social links, and organized resource mapping.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS / Modern CSS3
- **Icons:** React Icons / SVGs

---

## 📁 Project Structure

The project follows a modular, feature-based architecture for clean code organization and scalability as shown below:

```text
src/
├── assets/                  # Static assets (Images, SVGs)
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/              # Global reusable UI components
│   ├── Button.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── context/                 # Global state management files
├── features/                # Feature-driven modules
│   ├── BestO2/
│   │   └── BestO2Section.jsx
│   ├── Hero/
│   │   ├── HeroSection.jsx
│   │   └── TrendyPlantsSection.jsx
│   ├── Products/
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   └── Review/
│       └── CustomerReview.jsx
├── hooks/                   # Custom React hooks
├── App.css                  # Component-specific global styles
├── App.jsx                  # Main application entry layout
└── index.css                # Global Tailwind directives & core styles


🚀 Getting Started
To get a local copy up and running, follow these simple steps:

Prerequisites
Ensure you have Node.js installed on your machine.

Installation
Clone the repository:

Bash
   git clone [https://github.com/your-username/planto-react.git](https://github.com/your-username/planto-react.git)
Navigate into the project directory:

Bash
   cd planto-react
Install dependencies:

Bash
   npm install
Running the Application
To start the development server:

Bash
npm run dev
Open your browser and navigate to the local URL provided in your terminal (typically http://localhost:5173).

Production Build
To build the application for production deployment:

Bash
npm run build
The optimized output will be generated inside the dist/ directory.

📄 License
This project is open-source and available under the MIT License.
