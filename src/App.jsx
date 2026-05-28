import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./features/Hero/HeroSection";
import TrendyPlantsSection from "./features/Hero/TrendyPlantsSection";
import ProductGrid from "./features/Products/ProductGrid"; 

function App() {
  return (
    // Pure Page ka Base Background exact solid dark green (#111A12) hai
    <div className="min-h-screen w-full bg-[#111A12] text-white relative flex flex-col overflow-x-hidden">
      
      {/* 
        TOP CONTAINER: 
        Figma ke mutabik image sirf Hero aur Trendy section tak hi center me fixed hai.
        Isliye humne image ko ek alag div wrapper me rakha hai jo niche tak extend nahi hogi.
      */}
      <div className="w-full bg-[url('/assets/background.jpg')] bg-no-repeat bg-[center_top] bg-[length:1728px_auto] relative">
        
        {/* Navbar Layer */}
        <div className="w-full relative z-20">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 relative z-10">
          <HeroSection />
        </div>

        {/* Our Trendy Plants Section - Image boundary ends here */}
        <div className="w-full mt-10 xl:mt-12 relative z-10">
          <TrendyPlantsSection />
        </div>
        
        {/* Shadow Layer overlay taaki bottom dark color ke sath smooth blend mile */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111A12] to-transparent pointer-events-none z-0" />
      </div>

      {/* 
        BOTTOM CONTAINER:
        Yahan se background bilkul clean, plain solid dark hai jaisa MacBook Pro 16_ - 1.jpg me dikh raha hai.
      */}
      <main className="relative w-full flex flex-col bg-[#111A12]">
        
        {/* Our Top Selling Section */}
        <div className="w-full mt-12 md:mt-20">
          <ProductGrid />
        </div>

        {/* Yahan aap apne aage ke baki sections (Customer Review, Footer) bina kisi image tension ke add kar sakte hain */}

      </main>
    </div>
  );
}

export default App;