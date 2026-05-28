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
    <section className="w-full max-w-[1728px] mx-auto px-6 md:px-[57px] pt-4 pb-20 relative z-10 select-none">
      <div className="w-full flex justify-center mb-16 mt-0">
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

      <div className="flex flex-col gap-28 max-w-[1240px] mx-auto relative">
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
            }}
            className="w-full rounded-[48px] border border-white/10 backdrop-blur-xl 
                       grid grid-cols-1 md:grid-cols-12 min-h-[290px] xl:min-h-[310px]
                       items-center relative shadow-2xl overflow-visible p-8 md:p-0"
          >
            <div className="col-span-1 md:col-span-4 relative h-full min-h-[200px] md:min-h-0">
              <div
                className="absolute 
                           -left-4 sm:-left-10 md:-left-[55px] xl:-left-[75px]
                           -top-20 sm:-top-24 md:-top-[80px] xl:-top-[95px]
                           w-[260px] sm:w-[300px] md:w-[360px] xl:w-[410px] 2xl:w-[430px]
                           drop-shadow-[0_40px_35px_rgba(0,0,0,0.75)] 
                           transform hover:scale-[1.02] transition-transform duration-500 z-20"
              >
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div
              className="col-span-1 md:col-span-8 flex flex-col justify-center text-left font-sans pl-4 md:pl-8 pr-8 md:pr-16"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <h3 className="text-white text-[28px] md:text-[32px] font-normal tracking-wide leading-tight">
                {plant.title}
              </h3>

              <p className="text-white/50 text-[13px] md:text-[14px] leading-[165%] mt-3 max-w-[540px] font-normal">
                {plant.description}
              </p>

              <div className="text-white text-[24px] md:text-[26px] font-medium tracking-wide mt-5">
                {plant.price}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button className="px-8 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/60 text-white font-medium rounded-xl text-[14px] tracking-wide transition-all duration-200">
                  Explore
                </button>

                <button className="w-11 h-11 border border-white/20 hover:border-white/60 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-200">
                  <ShoppingBag size={16} strokeWidth={2} />
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
