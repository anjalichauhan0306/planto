import { Play, ChevronRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full relative flex items-center justify-center pt-32 md:pt-40 pb-16 px-6 sm:px-10 md:px-12 xl:px-12 max-w-360 mx-auto select-none overflow-visible">

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-start overflow-visible">

        {/* ── LEFT SECTION ── */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start text-left z-10 pt-4 lg:pt-8">
          <h1
            className="font-bold tracking-tight text-white leading-[1.05] text-[52px] sm:text-[64px] md:text-[74px] xl:text-[82px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Breath Natural
          </h1>

          <p
            className="text-white/60 text-[14px] sm:text-[15px] leading-[1.6] mt-5 max-w-130 font-normal"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-5 mt-7">
            <button
              className="w-32.5 h-10 bg-transparent border border-white/30 hover:border-white rounded-sm font-medium text-[14px] text-white tracking-wide transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore
            </button>

            <button
              className="flex items-center gap-3 group text-white bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all duration-200">
                <Play size={12} fill="white" className="ml-0.5 text-white" />
              </div>
              <span className="font-medium text-[14px] text-white/70 group-hover:text-white transition-colors duration-200">
                Live Demo...
              </span>
            </button>
          </div>

          {/* ── ALENA PATEL CARD: PUSHED DOWN (mt-24 lg:mt-36) ── */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
            }}
            className="flex mt-24 lg:mt-36 w-full max-w-67.5 rounded-[22px] border border-white/10 backdrop-blur-md p-4 items-start gap-3.5 shadow-xl"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="alena Patel"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col text-left min-w-0">
              <span className="font-bold text-white text-[12px] tracking-wide">
                alena Patel
              </span>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <p className="text-white/40 text-[9px] leading-[1.4] mt-1.5 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT SECTION: WIDER AND SHORTER CARD LAYOUT ── */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-start w-full z-10 pt-4 lg:pt-8 overflow-visible">
          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)",
            }}
            className="flex flex-col justify-end items-start relative
                       w-full max-w-87.5 sm:max-w-95 lg:w-105
                       h-100 sm:h-107.5 lg:h-115
                       rounded-[48px] lg:rounded-[64px] border border-white/10 backdrop-blur-xl
                       p-8 shadow-[0_35px_70px_rgba(0,0,0,0.4)] overflow-visible"
          >
            {/* Absolute Plant Overlap - Height aur positioning scale accurate kiya */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-32%] sm:top-[-38%] lg:-top-40 w-[90%] sm:w-[86%] lg:w-97.5 aspect-square transition-transform duration-500 hover:scale-[1.02] z-20 overflow-visible">
              <img
                src="/assets/rose.png"
                alt="Calathea Plant"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Bottom Card Content */}
            <div className="w-full text-left z-10 mt-auto">
              <span className="text-[12px] sm:text-[13px] text-white/40 tracking-[0.5px] block font-medium">
                Trendy House Plant
              </span>

              <div className="flex items-center justify-between mt-1">
                <h3 className="text-[24px] sm:text-[26px] lg:text-[30px] font-light text-white tracking-wide leading-tight">
                  Calathea plant
                </h3>
                <button className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1">
                  <ChevronRight size={26} strokeWidth={1.5} />
                </button>
              </div>

              <button
                className="w-28.75 sm:w-32.5 mt-4 py-2.5 border border-white/20 hover:border-white/50
                           text-white font-medium rounded-sm text-[13px] tracking-wide
                           bg-white/2 hover:bg-white/6 transition-all duration-200 cursor-pointer"
              >
                Buy Now
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-2 mt-6 lg:mt-8">
                <span className="w-5 h-1 rounded-full bg-white block transition-all duration-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 block transition-all duration-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 block transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;