import React from 'react';
import { ShoppingBag } from 'lucide-react';

const TrendyPlantsSection = () => {
  const plants = [
    {
      id: 1,
      title: "For Small Decs Ai Plat",
      price: "Rs. 599/-",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./assets/image1.png", // Replace with your top card plant image path
      imageLeft: true,
    },
    {
      id: 2,
      title: "For Fresh Decs Ai Plat",
      price: "Rs. 579/-",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./assets/image2.png", // Replace with your bottom card plant image path
      imageLeft: false,
    }
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-[57px] py-20 relative z-10 select-none">
      
      {/* Section Heading */}
      <div className="w-full flex justify-center mb-16 xl:mb-24">
        <h2 
          className="text-white text-[32px] md:text-[40px] font-medium tracking-wide relative pb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Our Trendy plants
          {/* Decorative bottom border like figma line */}
          <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-white/20" />
        </h2>
      </div>

      {/* Cards Container System */}
      <div className="flex flex-col gap-12 lg:gap-16 max-w-[1100px] mx-auto relative">
        
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            }}
            className={`w-full rounded-[40px] border border-white/10 backdrop-blur-xl 
                       p-8 md:p-12 min-h-[280px] md:min-h-[320px] grid grid-cols-1 md:grid-cols-12 
                       items-center gap-8 relative shadow-2xl overflow-visible`}
          >
            {/* Plant Image Wrapper with Absolute Overhang */}
            <div 
              className={`col-span-1 md:col-span-5 flex justify-center relative h-full
                         ${plant.imageLeft ? 'order-1 md:justify-start' : 'order-1 md:order-2 md:justify-end'}`}
            >
              <div 
                className={`absolute -top-[70px] md:-top-[90px] w-[220px] sm:w-[260px] md:w-[290px] xl:w-[320px] 
                           drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)] transform hover:scale-105 
                           transition-transform duration-500 z-20
                           ${plant.imageLeft ? 'md:left-4' : 'md:right-4'}`}
              >
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Ghost spacer to keep layout grid intact on smaller screens */}
              <div className="h-[160px] md:hidden" />
            </div>

            {/* Content Specifications */}
            <div 
              className={`col-span-1 md:col-span-7 flex flex-col justify-center text-left font-sans
                         ${plant.imageLeft ? 'order-2' : 'order-2 md:order-1'}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-medium tracking-wide leading-tight">
                {plant.title}
              </h3>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-3 max-w-[460px] opacity-80">
                {plant.description}
              </p>
              
              <div className="text-white text-[22px] md:text-[26px] font-semibold tracking-wide mt-5">
                {plant.price}
              </div>

              {/* Action Trigger Group */}
              <div className="flex items-center gap-4 mt-6">
                <button className="px-7 py-2.5 bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 hover:border-white/60 text-white font-medium rounded-xl text-sm tracking-wide transition-all duration-200">
                  Explore
                </button>
                
                <button className="w-11 h-11 border border-white/20 hover:border-white/60 flex items-center justify-center rounded-xl bg-white/[0.02] hover:bg-white/[0.08] text-white transition-all duration-200">
                  <ShoppingBag size={18} strokeWidth={1.8} />
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default TrendyPlantsSection;