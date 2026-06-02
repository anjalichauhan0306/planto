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
      <div className="w-full flex justify-center mb-40 bg-transparent px-6 sm:px-12 md:px-[140px]">
        <div className="relative px-16 py-8 flex items-center justify-center bg-transparent">
          <img 
            src="./assets/image9.png" 
            alt="decor-left" 
            className="absolute -left-4 -bottom-4 w-16 h-16 md:w-20 md:h-20 object-contain pointer-events-none bg-transparent"
          />
          <img 
            src="./assets/image.png" 
            alt="decor-right" 
            className="absolute -right-4 -top-4 w-16 h-16 md:w-20 md:h-20 object-contain pointer-events-none bg-transparent"
          />
          <h3 
            className="text-white text-[32px] md:text-[46px] font-bold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Top Selling
          </h3>

        </div>
      </div>
      <div className="w-full bg-[#111A12] py-20 px-6 sm:px-12 md:px-[140px]">
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