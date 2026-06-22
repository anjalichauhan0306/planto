import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./features/Hero/HeroSection";
import TrendyPlantsSection from "./features/Hero/TrendyPlantsSection";
import ProductGrid from "./features/Products/ProductGrid"; 
import CustomerReviews from "./features/Review/CustomerReview"
import BestO2Section from "./features/BestO2/BestO2Section";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -70px 0px" }
    );

    elements.forEach((element, index) => {
      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${(index % 5) * 80}ms`);
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#111A12] text-white relative flex flex-col overflow-x-hidden">
      <div className="w-full bg-[url('/assets/background.jpg')] bg-no-repeat bg-[center_top] bg-[length:1728px_auto] relative">
        <div className="w-full relative z-20">
          <Navbar />
        </div>
        <div className="flex items-start justify-center pt-10 relative z-10">
          <HeroSection />
        </div>
        <div className="w-full mt-10 xl:mt-12 relative z-10">
          <TrendyPlantsSection />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111A12] to-transparent pointer-events-none z-0" />
      </div>
      <main className="relative w-full flex flex-col bg-[#111A12]">
        <div className="w-full mt-12 md:mt-20">
          <ProductGrid />
        </div>
        <div className="w-full mt-12 md:mt-20">
          <CustomerReviews/>
        </div>
        <BestO2Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
