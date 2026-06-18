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
    <section className="w-full max-w-[1120px] mx-auto px-7 md:px-8 lg:px-9 pt-0 pb-16 relative z-10 select-none">
      
      <div className="w-full flex justify-center mb-[88px] mt-0 scroll-reveal">
        <div className="section-title-frame">
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-2 -bottom-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
          <h2 className="text-white text-[31px] md:text-[34px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10">
            Our Trendy plants
          </h2>
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-2 -top-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-[92px] max-w-[1000px] mx-auto relative">
        {plants.map((plant, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={plant.id}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              className="w-full rounded-[62px] border border-white/12 backdrop-blur-xl scroll-reveal
                         grid grid-cols-1 md:grid-cols-12 min-h-[305px]
                         items-center relative shadow-2xl overflow-visible p-8 md:p-0">
              
              <div
                className={`col-span-1 md:col-span-5 relative h-full flex justify-center items-center md:px-10
                  ${isReversed ? "md:order-2" : "md:order-1"}`}
              >
                <div className={`md:absolute w-[300px] md:w-[360px] drop-shadow-[0_42px_32px_rgba(0,0,0,0.65)] transform hover:scale-[1.02] transition-transform duration-500 z-20 ${
                  isReversed ? "md:-top-[66px] md:right-[24px]" : "md:-top-[78px] md:left-[18px]"
                }`}>
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div
                className={`col-span-1 md:col-span-7 flex flex-col justify-center text-left font-sans py-10

                  ${isReversed ? "md:order-1 pl-4 md:pl-[78px] pr-8" : "md:order-2 pl-4 md:pl-[38px] pr-8 md:pr-[72px]"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <h3 className="text-white text-[18px] md:text-[20px] font-semibold tracking-normal leading-tight">
                  {plant.title}
                </h3>
                <p className="text-white/70 text-[9px] md:text-[10px] leading-[150%] mt-4 max-w-[390px] font-semibold">
                  {plant.description}
                </p>
                <div className="text-white text-[20px] font-semibold tracking-wide mt-3">
                  {plant.price}
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <button className="w-[126px] h-[36px] bg-transparent hover:bg-white/10 border border-white/55 hover:border-white/80 text-white font-medium rounded-[4px] text-[12px] tracking-wide transition-all duration-200">
                    Explore
                  </button>
                  <button className="w-9 h-9 border border-white/55 hover:border-white/80 flex items-center justify-center rounded-[4px] bg-transparent hover:bg-white/10 text-white transition-all duration-200">
                    <ShoppingBag size={15} strokeWidth={1.8} />
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
