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
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10 pt-0 pb-16 relative z-10 select-none">
      
      {/* Section Title */}
      <div className="w-full flex justify-center mb-[96px] mt-0 scroll-reveal">
        <div className="section-title-frame relative">
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-2 -bottom-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
          <h2 className="text-white text-[32px] md:text-[38px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10">
            Our Trendy plants
          </h2>
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-2 -top-2 w-12 h-12 object-contain pointer-events-none select-none"
          />
        </div>
      </div>
      
      {/* Cards container - Width badha kar max-w-full ya max-w-[1100px] kiya hai */}
      <div className="flex flex-col gap-[110px] max-w-[1100px] mx-auto relative">
        {plants.map((plant, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={plant.id}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              }}
              className="w-full rounded-[70px] border border-white/12 backdrop-blur-xl scroll-reveal
                         grid grid-cols-1 md:grid-cols-12 min-h-[360px]
                         items-center relative shadow-2xl overflow-visible p-8 md:p-0"
            >
              
              {/* Image Container */}
              <div
                className={`col-span-1 md:col-span-5 relative h-full flex justify-center items-center
                  ${isReversed ? "md:order-2" : "md:order-1"}`}
              >
                {/* Div bada hone ki wajah se images ka size aur unka negative margins float upar badha diya gaya hai */}
                <div 
                  className={`relative md:absolute w-[290px] sm:w-[340px] md:w-[410px] lg:w-[440px] drop-shadow-[0_45px_35px_rgba(0,0,0,0.6)] transform hover:scale-[1.03] transition-transform duration-500 z-20 
                    ${isReversed 
                      ? "md:-top-[70px] md:-right-[50px] lg:-right-[70px]" 
                      : "md:-top-[80px] md:-left-[50px] lg:-left-[70px]"
                    }`}
                >
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>

              {/* Text / Content Container */}
              {/* Padding badhai hai taaki bade div ke andar text center alignment perfect dikhe */}
              <div
                className={`col-span-1 md:col-span-7 flex flex-col justify-center text-left font-sans py-10 md:py-12
                  ${isReversed 
                    ? "md:order-1 pl-6 md:pl-[85px] lg:pl-[110px] pr-6 md:pr-8" 
                    : "md:order-2 pl-6 md:pl-10 pr-6 md:pr-[85px] lg:pr-[110px]"
                  }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <h3 className="text-white text-[20px] md:text-[24px] font-semibold tracking-normal leading-tight">
                  {plant.title}
                </h3>
                <p className="text-white/70 text-[12px] md:text-[13px] leading-[165%] mt-4 max-w-[440px] font-normal">
                  {plant.description}
                </p>
                <div className="text-white text-[22px] font-semibold tracking-wide mt-5">
                  {plant.price}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <button className="w-[140px] h-[40px] bg-transparent hover:bg-white/10 border border-white/55 hover:border-white/80 text-white font-medium rounded-[6px] text-[13px] tracking-wide transition-all duration-200">
                    Explore
                  </button>
                  <button className="w-10 h-10 border border-white/55 hover:border-white/80 flex items-center justify-center rounded-[6px] bg-transparent hover:bg-white/10 text-white transition-all duration-200">
                    <ShoppingBag size={17} strokeWidth={1.8} />
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