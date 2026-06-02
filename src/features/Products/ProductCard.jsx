import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const title = product?.title || "Calathea plant";
  const price = product?.price || "Rs. 359/-";
  const description = product?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";
  const image = product?.image || "https://via.placeholder.com/180";

  return (
    <div
      className="w-full max-w-[320px] border border-white/10 flex flex-col pt-36 pb-6 px-6 relative shadow-2xl select-none"
      style={{
        borderRadius: '45px 45px 36px 36px / 25px 25px 36px 36px',
        background: 'linear-gradient(180deg, rgba(30, 37, 31, 0.85) 0%, rgba(18, 22, 19, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.5)'
      }}
    >
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[160px] sm:w-[180px] h-[180px] flex items-center justify-center z-20">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="w-full flex flex-col text-left mt-2 z-10">
        <h4 className="text-[#e2e8f0] text-[20px] font-normal tracking-wide opacity-90">
          {title}
        </h4>
        <p className="text-white/40 text-[12px] leading-relaxed mt-2 line-clamp-2 font-light">
          {description}
        </p>
        <div className="w-full flex items-center justify-between mt-6">
          <span className="text-[#f8fafc] text-[20px] font-normal tracking-wide opacity-90">
            {price}
          </span>
          <button
            className="w-10 h-10 border border-white/10 hover:border-white/30 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 shadow-inner"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;