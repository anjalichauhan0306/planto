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
    <section className="w-full max-w-[1728px] mx-auto px-6 sm:px-12 md:px-[140px] py-24 relative z-10">  
      <div className="w-full flex justify-center mb-40">
        <div className="relative px-10 py-3 flex items-center justify-center">
          <div className="absolute -left-2 -top-2 w-8 h-8 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 4 H14 C8 4 4 8 4 14 V28" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="absolute -right-2 -bottom-2 w-8 h-8 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 28 H18 C24 28 28 24 28 18 V4" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 
            className="text-white text-[32px] md:text-[38px] font-semibold tracking-normal text-center whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Top Selling
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-32 md:gap-y-36 max-w-[1140px] mx-auto overflow-visible px-4 sm:px-0">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;