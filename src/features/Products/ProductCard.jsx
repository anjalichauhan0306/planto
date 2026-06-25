import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const title = product?.title || "Calathea plant";
  const price = product?.price || "Rs. 359/-";
  const description = product?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";
  const image = product?.image || "https://via.placeholder.com/180";

  return (
    <article
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)",
      }}
      className="flex flex-col justify-end items-start relative
                 w-full max-w-87.5 sm:max-w-95 lg:w-105
                       h-92 sm:h-98 lg:h-104
                       rounded-[48px] lg:rounded-[68px] border border-white/10 backdrop-blur-xl
                       p-8 shadow-[0_35px_70px_rgba(0,0,0,0.4)] overflow-visible"
    >
      <div className="absolute top-[-22%] sm:top-[-25%] lg:top-[-28%] left-1/2 transform -translate-x-1/2 w-[75%] sm:w-[80%] aspect-square flex items-center justify-center z-20">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.65)] md:drop-shadow-[0_25px_25px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* CONTENT LAYER - Centered & aligned nicely below the arch path */}
      <div className="w-full flex flex-col text-left mt-auto z-10 ">
        {/* Title */}
        <h4 className="text-[#e2e8f0] text-lg sm:text-xl md:text-[22px] font-medium tracking-normal opacity-95 line-clamp-1">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-white/45 text-xs md:text-[13px] leading-relaxed mt-2 md:mt-3 line-clamp-3 font-light tracking-wide">
          {description}
        </p>
        
        {/* Price & Bag Button Row */}
        <div className="w-full flex items-center justify-between mt-6 md:mt-8">
          <span className="text-white text-lg sm:text-xl md:text-[22px] font-medium tracking-wide">
            {price}
          </span>
          <button
            className="w-10 h-10 md:w-11 md:h-11 border border-white/10 hover:border-white/30 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Add to shopping bag"
          >
            <ShoppingBag className="w-4 h-4 md:w-4.5 md:h-4.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;