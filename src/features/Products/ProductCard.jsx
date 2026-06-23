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
        /* Figma ka exact inverted-U / Dome shape arc profile */
        borderRadius: "140px 140px 40px 40px / 180px 180px 40px 40px",
      }}
      className="flex flex-col justify-end items-start relative
                 w-full max-w-[21.875rem] sm:max-w-[23.75rem] lg:w-[26.25rem]
                 h-[26rem] sm:h-[28rem] lg:h-[30rem]
                 border border-white/10 backdrop-blur-xl
                 p-6 sm:p-8 shadow-[0_35px_70px_rgba(0,0,0,0.4)] overflow-visible mx-auto group"
    >
      {/* Absolute Plant Image Container - Responsive position aur sizing */}
      <div className="absolute top-[-22%] sm:top-[-25%] lg:top-[-28%] left-1/2 transform -translate-x-1/2 w-[75%] sm:w-[80%] aspect-square flex items-center justify-center z-20">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.65)] md:drop-shadow-[0_25px_25px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* CONTENT LAYER - Centered & aligned nicely below the arch path */}
      <div className="w-full flex flex-col text-left mt-auto z-10 pt-12">
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
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;