import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./features/Hero/HeroSection";
import TrendyPlantsSection from "./features/Hero/TrendyPlantsSection";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111A12] bg-[url('/assets/background.jpg')] bg-cover bg-top bg-no-repeat text-white relative flex flex-col overflow-x-hidden">
      <div className="w-full relative z-20">
        <Navbar />
      </div>

      <main className="relative w-full z-10 flex flex-col">
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-20">
          <HeroSection />
        </div>

        <div className="w-full mt-10 xl:mt-12">
          <TrendyPlantsSection />
        </div>
      </main>
    </div>
  );
}

export default App;
