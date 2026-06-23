import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const topSellingProducts = [
    { id: 1, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/rose.png" },
    { id: 2, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/image1.png" },
    { id: 3, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/ig3.png" },
    { id: 4, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/ig4.png" },
    { id: 5, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/7.png" },
    { id: 6, title: "Calathea plant", price: "Rs. 359/-", image: "./assets/ig5.png" },
  ];

  return (
    <section id="indoor" className="w-full max-w-[1440px] mx-auto relative z-10 bg-transparent pt-12 overflow-hidden">
      
      {/* =========================================
        COMPACT & BALANCED TITLE AREA (Figma Style)
        =========================================
      */}
      <div className="w-full flex justify-center mb-24 md:mb-32 bg-transparent px-6 scroll-reveal">
        <div className="relative px-8 py-3 md:px-12 md:py-4 flex items-center justify-center bg-transparent max-w-max mx-auto">
          
          {/* LEFT-BOTTOM BRACKET IMAGE */}
          <img 
            src="./assets/image9.png" 
            alt="Left Bracket"
            className="absolute -left-1 -bottom-1 md:-left-2 md:-bottom-2 w-10 h-10 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />

          {/* TITLE TEXT */}
          <h3 
            className="text-white text-2xl sm:text-3xl md:text-[38px] font-semibold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Top Selling
          </h3>

          {/* RIGHT-TOP BRACKET IMAGE */}
          <img 
            src="./assets/image.png" 
            alt="Right Bracket"
            className="absolute -right-1 -top-1 md:-right-2 md:-top-2 w-10 h-10 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />

        </div>
      </div>
      <div className="w-full bg-[#111A12] pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8 gap-y-28 sm:gap-y-32 lg:gap-y-40 max-w-[1440px] mx-auto overflow-visible">
          {topSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductGrid;