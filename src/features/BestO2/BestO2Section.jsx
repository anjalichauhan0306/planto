import { ChevronLeft, ChevronRight } from "lucide-react";

const BestO2Section = () => {
  return (
    <section
      id="more"
      className="w-full max-w-[1728px] mx-auto bg-[#111A12] px-6 sm:px-12 md:px-[120px] pb-32 md:pb-40 "
    >
      <div className="w-full flex justify-center mb-24 md:mb-36">
        <div className="section-title-frame scroll-reveal">
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-2 -bottom-2 w-14 h-14 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />
          <h2 className="text-white text-[30px] md:text-[42px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10">
            Our Best o2
          </h2>
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-2 -top-2 w-14 h-14 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />
        </div>
      </div>

      <div className="best-card figma-card-surface scroll-reveal">
        <div className="relative min-h-[270px] md:min-h-[440px] flex items-end md:items-center justify-center md:justify-start">
          <img
            src="./assets/rose.png"
            alt="Best O2 plant"
            className="best-card-plant"
          />
        </div>

        <div className="flex flex-col justify-center py-8 md:py-0 md:pl-6 lg:pl-10">
          <h3 className="text-white/78 text-[24px] md:text-[29px] lg:text-[32px] font-semibold leading-[122%] max-w-[560px]">
            We Have Small And Best O2 Plants Collection's
          </h3>
          <p className="text-white/68 text-[13px] md:text-[15px] leading-[155%] mt-8 max-w-[590px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-white/68 text-[13px] md:text-[15px] leading-[155%] mt-7 max-w-[590px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="flex items-center justify-between gap-6 mt-9 max-w-[600px]">
            <button className="px-12 py-3 border border-white/32 rounded-[8px] text-white/80 text-[13px] font-medium hover:bg-white/10 hover:text-white transition-all duration-300">
              Explore
            </button>
            <div className="flex items-center gap-7 text-white/58">
              <button
                aria-label="Previous plant"
                className="hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={22} strokeWidth={1.6} />
              </button>
              <span className="text-white/78 text-[11px] font-bold tracking-wide">
                01/04
              </span>
              <button
                aria-label="Next plant"
                className="hover:text-white transition-colors duration-300"
              >
                <ChevronRight size={22} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[9px] mt-24">
        <span className="w-[10px] h-[10px] rounded-full bg-white/80" />
        <span className="w-[10px] h-[10px] rounded-full bg-white/80" />
        <span className="w-[10px] h-[10px] rounded-full bg-white/80" />
      </div>
    </section>
  );
};

export default BestO2Section;
