import { Play, ChevronRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[515px] max-w-[1120px] mx-auto px-7 md:px-8 lg:px-9 grid grid-cols-1 md:grid-cols-12 items-start relative gap-8 pb-8">
      <div className="md:col-span-8 flex flex-col justify-start items-start z-10 mt-[82px] md:mt-[90px] h-full scroll-reveal">
        <h1
          className="font-semibold tracking-tight text-white leading-[105%]
                     text-[48px] sm:text-[58px] md:text-[64px] lg:text-[70px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Breath Natural
        </h1>

        <p
          className="text-gray-300/85 text-[10px] md:text-[11px] leading-[135%] mt-3 max-w-[560px] font-semibold"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center gap-5 mt-5">
          <button
            className="w-[126px] h-[37px] bg-transparent border border-white/45 hover:border-white/80
                       rounded-[4px] font-medium text-[13px] text-white tracking-wide
                       transition-all duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore
          </button>

          <button
            className="flex items-center gap-3 group text-white transition-opacity duration-200"
            style={{ fontFamily: "'Inter'" }}
          >
            <div
              className="w-10 h-10 rounded-full border border-white/45 flex items-center justify-center
                         bg-white/5 group-hover:bg-white/10 transition-all duration-200"
            >
              <Play size={13} fill="white" className="ml-[2px] text-white" />
            </div>
            <span className="font-medium text-[12px] text-white/75 group-hover:text-white/100 transition-colors duration-200">
              Live Demo...
            </span>
          </button>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.012) 100%)",
            fontFamily: "'Inter',",
          }}
          className="flex mt-[124px] w-[245px] h-[110px] rounded-[24px] border border-white/10
                     backdrop-blur-md p-4 items-start gap-3 shadow-2xl shrink-0 figma-mini-surface"
        >
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden shrink-0 border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="alena Patel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-left min-w-0">
            <span className="font-bold text-white text-[10px] leading-tight">
              alena Patel
            </span>
            <div className="flex items-center gap-[2px] mt-[4px]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={8}
                  fill="#f59e0b"
                  stroke="none"
                  className="text-amber-400"
                />
              ))}
            </div>
            <p className="text-white/45 text-[8px] leading-[145%] mt-[6px] line-clamp-3 pr-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore...
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 flex justify-center md:justify-end items-start w-full z-10 mt-[92px] scroll-reveal" style={{ "--reveal-delay": "180ms" }}>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.015) 100%)",
          }}
          className="flex flex-col justify-end items-center relative
                     w-full max-w-[310px] xl:max-w-[340px] 2xl:max-w-[370px]
                     md:max-w-[300px]
                     h-[365px]
                     rounded-[44px] border border-white/12 backdrop-blur-xl
                     p-6 shadow-2xl overflow-visible"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2
                       -top-[64px]
                       w-[245px] h-[250px]
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

          <div
            className="w-full text-left mb-2 z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-[11px] text-white/45 tracking-[0.4px] block font-normal">
              Trendy House Plant
            </span>

            <div className="flex items-center justify-between mt-1">
              <h3 className="text-[21px] font-[350] text-white tracking-[0.3px] leading-tight">
                Calathea plant
              </h3>
              <button className="text-white/75 hover:text-white transition-colors duration-200 p-1 -mr-1">
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>

            <button
              className="w-[126px] mt-4 py-[8px] border border-white/28 hover:border-white/55
                         text-white font-medium rounded-[4px] tracking-[0.3px]
                         bg-white/[0.04] hover:bg-white/[0.08]
                         transition-all duration-200 text-[12px]"
            >
              Buy Now
            </button>

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
