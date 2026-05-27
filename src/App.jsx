import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './features/Hero/HeroSection';
import TrendyPlantsSection from './features/Hero/TrendyPlantsSection'; // Sub-folder path check kar lena apne hisab se

function App() {
  return (
    /* Background configuration aligned to a solid dark base layout */
    <div 
      className="min-h-screen w-full bg-[#111A12] bg-[url('/assets/background.jpg')] bg-cover bg-top bg-no-repeat text-white relative flex flex-col overflow-x-hidden"
    >
      {/* Soft overlay mask for premium contrast */}
      {/* <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div> */}

      {/* Navbar layer positioned right at the top layout */}
      <div className="w-full relative z-20">
        <Navbar />
      </div>

      {/* Hero Content Section */}
      <main className="relative w-full z-10 flex flex-col">
        {/* Hero layout structure */}
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-20">
          <HeroSection />
        </div>
        
        {/* Trendy Plants Section - Rendered below Hero layout with clean vertical spacing */}
        <div className="w-full mt-24 xl:mt-36">
          <TrendyPlantsSection />
        </div>
      </main>
    </div>
  );
}

export default App;