import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./features/Hero/HeroSection";
import TrendyPlantsSection from "./features/Hero/TrendyPlantsSection";
import ProductGrid from "./features/Products/ProductGrid"; 

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111A12] text-white relative flex flex-col overflow-x-hidden">
      <div className="w-full bg-[url('/assets/background.jpg')] bg-no-repeat bg-[center_top] bg-[length:1728px_auto] relative">
        <div className="w-full relative z-20">
          <Navbar />
        </div>
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 relative z-10">
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
      </main>
    </div>
  );
}

export default App;