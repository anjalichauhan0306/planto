import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div 
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      }}
      className="w-full rounded-[36px] border border-white/10 backdrop-blur-md 
                 flex flex-col pt-32 pb-6 px-6 relative shadow-xl overflow-visible group select-none"
    >
      {/* Floating Plant Image - Centers horizontally and floats halfway out of the top border */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[160px] sm:w-[180px] h-[200px] flex items-center justify-center z-20">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-w-full max-h-full object-contain drop-shadow-[0_25px_15px_rgba(0,0,0,0.5)] 
                     transform group-hover:scale-[1.05] transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Content Details */}
      <div className="w-full flex flex-col text-left font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Product Title */}
        <h4 className="text-white text-[18px] md:text-[20px] font-medium tracking-wide">
          {product.title}
        </h4>
        
        {/* Short Sub/Description */}
        <p className="text-white/30 text-[11px] md:text-[12px] leading-relaxed mt-2 line-clamp-2 max-w-[220px] font-normal">
          {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        {/* Footer Row: Price & Minimalist Bag Icon Button */}
        <div className="w-full flex items-center justify-between mt-5">
          <span className="text-white text-[16px] md:text-[18px] font-semibold tracking-wide">
            {product.price}
          </span>
          
          <button className="w-9 h-9 border border-white/20 hover:border-white/60 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-200">
            <ShoppingBag size={14} strokeWidth={2} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;