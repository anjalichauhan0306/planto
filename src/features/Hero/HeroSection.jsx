import React from 'react';
import { Play, ChevronRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] max-w-[1600px] mx-auto px-6 md:px-[57px] grid grid-cols-1 xl:grid-cols-12 items-start relative gap-8 pb-14 xl:pb-0">

      {/* ================= LEFT SECTION ================= */}
      <div className="xl:col-span-7 flex flex-col justify-start items-start z-10 mt-16 xl:mt-24 h-full">

        <h1
          className="font-semibold tracking-tight text-white leading-[105%]
                     text-[48px] sm:text-[64px] md:text-[76px] lg:text-[88px] 2xl:text-[100px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Breath Natural
        </h1>

        <p
          className="text-gray-300/80 text-[14px] md:text-[16px] xl:text-[17px] leading-[165%] mt-5 max-w-[480px] font-normal"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-8">
          <button
            className="px-8 py-[11px] bg-transparent border border-white/35 hover:border-white/80
                       rounded-xl font-medium text-[14px] text-white tracking-wide
                       transition-all duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore
          </button>

          <button
            className="flex items-center gap-3 group text-white transition-opacity duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div
              className="w-10 h-10 rounded-full border border-white/35 flex items-center justify-center
                         bg-white/5 group-hover:bg-white/10 transition-all duration-200"
            >
              <Play size={13} fill="white" className="ml-[2px] text-white" />
            </div>
            <span className="font-medium text-[14px] text-white/75 group-hover:text-white/100 transition-colors duration-200">
              Live Demo...
            </span>
          </button>
        </div>

        {/* Testimonial Card - Added higher mt-24/mt-32 to push down as per figma */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.012) 100%)',
            fontFamily: "'Inter', sans-serif",
          }}
          className="flex mt-24 xl:mt-32 w-[330px] h-[130px] rounded-[24px] border border-white/10
                     backdrop-blur-md p-4 items-start gap-3 shadow-2xl shrink-0"
        >
          {/* Avatar */}
          <div className="w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="alena Patel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col text-left min-w-0">
            <span className="font-bold text-white text-[15px] leading-tight">alena Patel</span>
            <div className="flex items-center gap-[2px] mt-[4px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#f59e0b" stroke="none" className="text-amber-400" />
              ))}
            </div>
            <p className="text-white/45 text-[11px] leading-[145%] mt-[6px] line-clamp-2 pr-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore...
            </p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SECTION: PLANT CARD ================= */}
      <div className="xl:col-span-5 flex justify-center xl:justify-end items-start w-full z-10 mt-32 xl:mt-[140px]">
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.015) 100%)',
          }}
          className="flex flex-col justify-end items-center relative
                     w-full max-w-[310px] xl:max-w-[340px] 2xl:max-w-[370px]
                     h-[400px] xl:h-[430px] 2xl:h-[470px]
                     rounded-[38px] border border-white/10 backdrop-blur-xl
                     p-6 xl:p-7 shadow-2xl overflow-visible"
        >

          {/* Floating Plant Image */}
          <div
            className="absolute left-1/2 -translate-x-1/2
                       -top-[100px] xl:-top-[115px] 2xl:-top-[130px]
                       w-[230px] h-[255px]
                       sm:w-[250px] sm:h-[275px]
                       xl:w-[275px] xl:h-[305px]
                       2xl:w-[310px] 2xl:h-[345px]
                       drop-shadow-[0_32px_28px_rgba(0,0,0,0.65)]
                       hover:scale-[1.04] transition-transform duration-500
                       z-20"
          >
            <img
              src="./assets/rose.png"
              alt="Calathea Plant"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Card Content */}
          <div className="w-full text-left mb-2 z-10" style={{ fontFamily: "'Inter', sans-serif" }}>

            <span className="text-[12px] text-white/45 tracking-[0.4px] block font-normal">
              Trendy House Plant
            </span>

            <div className="flex items-center justify-between mt-1">
              <h3 className="text-[26px] sm:text-[28px] xl:text-[32px] font-[350] text-white tracking-[0.3px] leading-tight">
                Calathea plant
              </h3>
              <button className="text-white/75 hover:text-white transition-colors duration-200 p-1 -mr-1">
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>

            <button
              className="w-full mt-5 py-[11px] border border-white/18 hover:border-white/55
                         text-white font-medium rounded-[18px] tracking-[0.3px]
                         bg-white/[0.04] hover:bg-white/[0.08]
                         transition-all duration-200 text-[13px] xl:text-[14px]"
            >
              Buy Now
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-[6px] mt-5">
              <span className="w-[18px] h-[5px] rounded-full bg-white block transition-all duration-300" />
              <span className="w-[5px] h-[5px] rounded-full bg-white/35 block transition-all duration-300" />
              <span className="w-[5px] h-[5px] rounded-full bg-white/35 block transition-all duration-300" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;