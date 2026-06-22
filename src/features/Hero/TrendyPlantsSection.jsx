import { ShoppingBag } from "lucide-react";

const TrendyPlantsSection = () => {
  const plants = [
    {
      id: 1,
      title: "For Small Decs Ai Plat",
      price: "Rs. 599/-",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "./assets/image1.png",
    },
    {
      id: 2,
      title: "For Fresh Decs Ai Plat",
      price: "Rs. 579/-",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "./assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 md:px-16 lg:px-20 max-w-360 mx-auto pt-0 pb-20 relative z-10 select-none">
      <div className="w-full flex justify-center mb-30 mt-0 scroll-reveal">
        <div className="section-title-frame relative">
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-2 -bottom-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
          <h2 className="text-white text-[32px] md:text-[42px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10">
            Our Trendy plants
          </h2>
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-2 -top-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-35 max-w-360 mx-auto relative">
        {plants.map((plant, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={plant.id}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              className="w-full rounded-[60px] md:rounded-[100px] border border-white/10 backdrop-blur-xl 
                         grid grid-cols-1 md:grid-cols-12 min-h-72.5
                         items-center relative shadow-2xl overflow-visible p-6 md:p-0"
            >
              <div
                className={`col-span-1 md:col-span-5 relative h-full flex justify-center items-center
                  ${isReversed ? "md:order-2" : "md:order-1"}`}
              >
                <div
                  className={`relative md:absolute w-75 sm:w-90 md:w-115 lg:w-125 xl:w-135 drop-shadow-[0_50px_40px_rgba(0,0,0,0.65)] transform hover:scale-[1.03] transition-transform duration-500 z-20 
                    ${isReversed
                      ? "md:-top-40 md:-right-15 lg:-right-22.5 xl:-right-17.5"
                      : "md:-top-40 md:-left-15 lg:-left-22.5 xl:-left-17.5"
                    }`}
                >
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div
                className={`col-span-1 md:col-span-7 flex flex-col justify-center text-left font-sans py-12 md:py-16 px-6
                  ${isReversed
                    ? "md:order-1 md:pl-16 lg:pl-24 xl:pl-28 md:pr-8"
                    : "md:order-2 md:pl-8 md:pr-16 lg:pr-24 xl:pr-28"
                  }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <h3 className="text-white text-[24px] md:text-[30px] font-semibold tracking-normal leading-tight">
                  {plant.title}
                </h3>
                <p className="text-white/70 text-[14px] md:text-[15px] leading-[170%] mt-5 max-w-135 font-normal">
                  {plant.description}
                </p>
                <div className="text-white text-[26px] font-semibold tracking-wide mt-6">
                  {plant.price}
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <button className="w-37.5 h-11 bg-transparent hover:bg-white/10 border border-white/55 hover:border-white/80 text-white font-medium rounded-lg text-[14px] tracking-wide transition-all duration-200">
                    Explore
                  </button>
                  <button className="w-11 h-11 border border-white/55 hover:border-white/80 flex items-center justify-center rounded-lg bg-transparent hover:bg-white/10 text-white transition-all duration-200">
                    <ShoppingBag size={19} strokeWidth={1.8} />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendyPlantsSection;