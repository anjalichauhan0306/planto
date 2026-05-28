import React from "react";

import { ShoppingBag } from "lucide-react";

const TrendyPlantsSection = () => {
  const plants = [
    {
      id: 1,
      title: "For Small Decs Ai Plat",
      price: "Rs. 599/-",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./assets/image1.png",
    },
    {
      id: 2,
      title: "For Fresh Decs Ai Plat",
      price: "Rs. 579/-",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./assets/image2.png",
    },
  ];

  return (
    <section className="w-full max-w-[1728px] mx-auto px-6 md:px-[120px] pt-4 pb-20 relative z-10 select-none">
      
      <div className="w-full flex justify-center mb-44 mt-0">
        <div className="relative w-[476px] h-[67px] flex items-center justify-center">
      
          <div className="absolute -left-6 -bottom-6 w-16 h-16 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54 60 H28 C14.5 60 4 49.5 4 36 V4"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Top-Right Vector Corner */}

          <div className="absolute -right-6 -top-6 w-16 h-16 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4 H36 C49.5 4 60 14.5 60 28 V56"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Title Text */}

          <h2
            className="text-white text-[55px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              lineHeight: "67px",
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.36), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.27372), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.234572), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.205522), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.18), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.154478), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.125428), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0862802)",
            }}
          >
            Our Trendy plants
          </h2>
        </div>
      </div>
      
      <div className="flex flex-col gap-40 max-w-[1360px] mx-auto relative">
        {plants.map((plant, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={plant.id}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              className="w-full rounded-[64px] border border-white/10 backdrop-blur-xl
                         grid grid-cols-1 md:grid-cols-12 min-h-[380px]
                         items-center relative shadow-2xl overflow-visible p-8 md:p-0">
              
              <div
                className={`col-span-1 md:col-span-5 relative h-full flex justify-center items-center md:px-10
                  ${isReversed ? "md:order-2" : "md:order-1"}`}
              >
                <div className="absolute -top-40 w-[380px] md:w-[540px] drop-shadow-[0_50px_35px_rgba(0,0,0,0.7)] transform hover:scale-[1.02] transition-transform duration-500 z-20">
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div
                className={`col-span-1 md:col-span-7 flex flex-col justify-center text-left font-sans py-14

                  ${isReversed ? "md:order-1 pl-16 md:pl-28 pr-8" : "md:order-2 pl-8 pr-16 md:pr-28"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <h3 className="text-white text-[34px] md:text-[36px] font-medium tracking-wide leading-tight">
                  {plant.title}
                </h3>
                <p className="text-white/40 text-[14px] md:text-[15px] leading-[170%] mt-4 max-w-[540px] font-normal">
                  {plant.description}
                </p>
                <div className="text-white text-[28px] font-semibold tracking-wide mt-5">
                  {plant.price}
                </div>
                <div className="flex items-center gap-5 mt-8">
                  <button className="px-12 py-3.5 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white/70 text-white font-medium rounded-xl text-[14px] tracking-wide transition-all duration-200">
                    Explore
                  </button>
                  <button className="w-14 h-14 border border-white/30 hover:border-white/70 flex items-center justify-center rounded-xl bg-transparent hover:bg-white/10 text-white transition-all duration-200">
                    <ShoppingBag size={20} strokeWidth={2} />
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
