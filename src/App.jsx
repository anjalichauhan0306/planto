import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './features/Hero/HeroSection';

function App() {
  return (
    /* CHANGE 1: min-h-screen kiya taaki content badhne par page stretch ho sake.
       CHANGE 2: bg-fixed lagaya! Yeh sabse important hai, isse background image screen par chipak jayegi (scroll nahi hogi), 
       lekin iske upar ka saara content niche scroll hoga.
    */
    <div 
      className="min-h-screen w-full bg-[url('/assets/background.jpg')] bg-cover bg-[center_top_12%] bg-no-repeat bg-fixed text-white relative flex flex-col"
    >
      {/* Premium Gradient Mask Overlay (Fixed overlay) */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* Fixed Transparent Navbar Layer */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section Container (Section 1) */}
      {/* h-screen ya min-h-[100vh] se hero section pehle screen poori cover karega */}
        <HeroSection />
      

      {/* ================= SECTION 2: EXAMPLE FOR TESTING SCROLL ================= */}
      {/* Jab aap apne baki sections (Our Trendy Plants, Top Selling, etc.) banayenge, 
          toh unhe yahan niche add karte jana. Ye test section dikhayega ki scroll kaise chal raha hai.
      */}
      {/* <section className="w-full max-w-[1600px] mx-auto px-6 md:px-[57px] relative z-10 min-h-screen py-20 bg-[#111e16]/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center mb-10">Our Trendy Plants Section</h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto">
          Ab aap yahan niche scroll kar sakte hain! Aap dekhenge ki background image wahi freeze hai, 
          lekin ye text aur card sections smoothly upar ki taraf scroll ho rahe hain.
        </p>
      </section> */}

    </div>
  );
}

export default App;