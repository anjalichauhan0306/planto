import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const title = product?.title || "Calathea plant";
  const price = product?.price || "Rs. 359/-";
  const description = product?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";
  const image = product?.image || "https://via.placeholder.com/180";

  return (
    <article
      className="figma-card-surface w-full max-w-[320px] border border-white/[0.07] flex flex-col pt-32 pb-8 px-7 relative shadow-2xl select-none mx-auto group scroll-reveal"
      style={{
        borderRadius: '50px 50px 40px 40px',
        background: 'linear-gradient(180deg, rgba(28, 36, 29, 0.75) 0%, rgba(17, 22, 18, 0.90) 100%)',
        backdropFilter: 'blur(24px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05), 0 30px 60px -15px rgba(0,0,0,0.7)'
      }}
    >
      {/* PLANT IMAGE CONTAINER: Positioned perfectly like the Figma design */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[210px] h-[210px] flex items-center justify-center z-20">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="w-full flex flex-col text-left mt-2 z-10">
        {/* Title */}
        <h4 className="text-[#e2e8f0] text-[22px] font-medium tracking-normal opacity-95">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-white/45 text-[13px] leading-relaxed mt-3 line-clamp-3 font-light tracking-wide">
          {description}
        </p>
        
        {/* Price & Bag Button Row */}
        <div className="w-full flex items-center justify-between mt-8">
          <span className="text-white text-[22px] font-medium tracking-wide">
            {price}
          </span>
          <button
            className="w-11 h-11 border border-white/10 hover:border-white/30 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-300 shadow-lg"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
