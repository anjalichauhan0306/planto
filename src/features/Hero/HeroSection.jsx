import React from 'react';
import { Play, ChevronRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full h-full relative">
      
      {/* ================= LEFT SIDE: TEXT BLOCK & BUTTONS ================= */}
      {/* MacBook Pro Par: top: 297px, left: 57px, width: 680px */}
      <div 
        className="flex flex-col justify-center items-start px-6 md:px-0
                   md:absolute md:top-[250px] xl:top-[297px] md:left-[57px] md:w-[550px] xl:w-[680px]"
      >
        {/* Main Header: Breath Natural */}
        <h1 
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[48px] md:text-[64px] xl:text-[96px] font-bold tracking-tight leading-[110%] text-white"
        >
          Breath Natural
        </h1>

        {/* Description Paragraph */}
        <p 
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-gray-300 opacity-80 text-sm md:text-base xl:text-[20px] leading-[160%] mt-4 max-w-xl font-normal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CTA Buttons Group (Explore & Live Demo) */}
        <div className="flex items-center gap-6 mt-8">
          {/* Explore Button */}
          <button className="px-8 py-3 bg-transparent border-2 border-white/60 hover:border-white rounded-xl font-medium tracking-wide transition-all text-sm md:text-base">
            Explore
          </button>

          {/* Live Demo Video Button */}
          <button className="flex items-center gap-3 group text-white/80 hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all">
              <Play size={16} fill="currentColor" className="ml-0.5" />
            </div>
            <span className="font-medium text-sm md:text-base font-['Inter']">Live Demo...</span>
          </button>
        </div>
      </div>
      <div 
        style={{
          width: "337px",
          height: "132px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
        }}
        className="hidden xl:flex absolute top-[686px] left-[57px] rounded-3xl border border-white/10 backdrop-blur-md p-4 items-start gap-3 shadow-xl"
      >
        {/* User Profile Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User profile" className="w-full h-full object-cover" />
        </div>
        
        {/* Review Profile Data */}
        <div className="flex flex-col font-['Inter']">
          <span className="font-bold text-white text-[16px]">Asha Patel</span>
          {/* Star Vector Grid */}
          <div className="flex items-center gap-0.5 mt-1 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <p className="text-gray-400 text-[11px] leading-[140%] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna tellus.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE: PREMIUM CALATHEA PLANT CARD ================= */}
      {/* MacBook Pro Par: top: 297px, left: 1118px, width: 425px, height: 521px */}
      <div 
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)",
        }}
        className="mt-12 md:mt-0 px-6 md:px-0 flex flex-col justify-between items-center relative overflow-hidden
                   md:absolute md:top-[250px] xl:top-[297px] md:right-[48px] xl:right-auto xl:left-[1118px] 
                   w-full max-w-[340px] md:w-[320px] xl:w-[425px] h-[450px] xl:h-[521px] 
                   rounded-[40px] border border-white/10 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300"
      >
        {/* Absolute floating background plant illustration frame inside card */}
        <div className="w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] -mt-16 xl:-mt-24 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500">
          <img 
            src="/assets/rose.png" /* Replace with your absolute cut-out plant PNG source */
            alt="Calathea Plant inside card" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Card bottom contextual descriptions frame */}
        <div className="w-full font-['Inter'] relative mt-4">
          <span className="text-xs text-gray-400 tracking-wide block uppercase">Trendy House Plant</span>
          
          <div className="flex items-center justify-between mt-1">
            <h3 className="text-[20px] xl:text-[28px] font-bold text-white tracking-tight">Calathea plant</h3>
            {/* Arrow vector matrix indicator */}
            <button className="text-white opacity-60 hover:opacity-100 transition-opacity p-1">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Action Buy Button Layout bounds */}
          <button className="w-full mt-6 py-3 border-2 border-white/40 hover:border-white text-white font-medium rounded-2xl tracking-wide bg-white/5 hover:bg-white/10 transition-all text-sm xl:text-base">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;