import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const topSellingProducts = [
    { id: 1, title: "Calathea plant", price: "Rs. 309/-", image: "./assets/image2.png" },
    { id: 2, title: "Desk plant", price: "Rs. 359/-", image: "./assets/rose.png" },
    { id: 3, title: "Calathea ai plant", price: "Rs. 399/-", image: "./assets/ig3.png" },
    { id: 4, title: "Cal 874 plant", price: "Rs. 259/-", image: "./assets/ig4.png" },
    { id: 5, title: "Show plant", price: "Rs. 759/-", image: "./assets/7.png" },
    { id: 6, title: "Calat O2 plant", price: "Rs. 659/-", image: "./assets/ig5.png" },
  ];

  return (
    <section className="w-full max-w-[1728px] mx-auto relative z-10 bg-transparent">
      
      {/* =========================================
        COMPACT & BALANCED TITLE AREA
        =========================================
      */}
      <div className="w-full flex justify-center mb-24 bg-transparent px-6">
        
        {/* max-w-max lagane se wrapper sirf text ke jitna bada hoga, corners door nahi bhagenge */}
        <div className="relative px-12 py-4 flex items-center justify-center bg-transparent max-w-max mx-auto">
          
          {/* LEFT-BOTTOM BRACKET: Size adjusted to 64px for a cleaner look */}
          <div className="absolute -left-2 -bottom-2 w-16 h-16 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 12 15 L 12 78 C 12 88, 22 88, 32 88 L 85 88" 
                stroke="url(#greenGradientLeft)" 
                strokeWidth="6" 
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="greenGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A3E635" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#4D7C0F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4D7C0F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* RIGHT-TOP BRACKET */}
          <div className="absolute -right-2 -top-2 w-16 h-16 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 88 85 L 88 22 C 88 12, 78 12, 68 12 L 15 12" 
                stroke="url(#greenGradientRight)" 
                strokeWidth="6" 
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="greenGradientRight" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#A3E635" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#4D7C0F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4D7C0F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* TEXT LAYER: Text size reduced from 56px to 36px/40px for perfect desktop balance */}
          <h3 
            className="text-white text-[28px] md:text-[38px] font-semibold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Top Selling
          </h3>

        </div>
      </div>

      {/* =========================================
        PRODUCT CARDS CONTAINER (Solid Color #111A12)
        =========================================
      */}
      <div className="w-full bg-[#111A12] py-16 px-6 sm:px-12 md:px-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-32 md:gap-y-36 max-w-[1140px] mx-auto overflow-visible px-4 sm:px-0">
          {topSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductGrid;