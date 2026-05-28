import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  // Dummy data generated dynamically mapping your Figma reference grid visual assets
  const topSellingProducts = [
    { id: 1, title: "Calathea plant", price: "Rs. 309/-", image: "./assets/image.png" },
    { id: 2, title: "Desk plant", price: "Rs. 359/-", image: "./assets/top2.png" },
    { id: 3, title: "Calathea ai plant", price: "Rs. 399/-", image: "./assets/top3.png" },
    { id: 4, title: "Cal 874 plant", price: "Rs. 259/-", image: "./assets/top4.png" },
    { id: 5, title: "Show plant", price: "Rs. 759/-", image: "./assets/top5.png" },
    { id: 6, title: "Calat O2 plant", price: "Rs. 659/-", image: "./assets/top6.png" },
  ];

  return (
    // Grid Outer Wrapper targeting seamless MacBook Pro fluid setups
    <section className="w-full max-w-[1728px] mx-auto px-6 sm:px-12 md:px-[140px] py-24 relative z-10">
      
      {/* Sub-heading Title Container with Signature Figma Corner Borders */}
      <div className="w-full flex justify-center mb-40">
        <div className="relative px-10 py-3 flex items-center justify-center">
          
          {/* Top-Left Tiny Custom Vector Corner */}
          <div className="absolute -left-2 -top-2 w-8 h-8 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 4 H14 C8 4 4 8 4 14 V28" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Bottom-Right Tiny Custom Vector Corner */}
          <div className="absolute -right-2 -bottom-2 w-8 h-8 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 28 H18 C24 28 28 24 28 18 V4" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Heading Text */}
          <h3 
            className="text-white text-[32px] md:text-[38px] font-semibold tracking-normal text-center whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Top Selling
          </h3>
        </div>
      </div>

      {/* 3-Column Balanced Responsive Grid Layout */}
      {/* 
        Mobile view par items stacking clear vertical gap manage karenge.
        Desktop view par row gaps ko `row-gap-36` kiya hai taaki top-floating images layout overlap na karein.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-32 md:gap-y-36 max-w-[1140px] mx-auto overflow-visible px-4 sm:px-0">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductGrid;