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
    <section id="indoor" className="w-full max-w-[1728px] mx-auto relative z-10 bg-transparent pt-12">
      
      {/* =========================================
        COMPACT & BALANCED TITLE AREA (Figma Style)
        =========================================
      */}
      <div className="w-full flex justify-center mb-32 bg-transparent px-6 scroll-reveal">
        <div className="relative px-12 py-4 flex items-center justify-center bg-transparent max-w-max mx-auto">
          
          {/* LEFT-BOTTOM BRACKET IMAGE */}
          <img 
            src="./assets/image9.png" 
            alt="Left Bracket"
            className="absolute -left-2 -bottom-2 w-16 h-16 object-contain pointer-events-none select-none"
          />

          {/* TITLE TEXT */}
          <h3 
            className="text-white text-[28px] md:text-[38px] font-semibold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10"
            style={{ fontFamily: "'Inter'" }}
          >
            Our Top Selling
          </h3>

          {/* RIGHT-TOP BRACKET IMAGE */}
          <img 
            src="./assets/image.png" 
            alt="Right Bracket"
            className="absolute -right-2 -top-2 w-16 h-16 object-contain pointer-events-none select-none"
          />

        </div>
      </div>

      {/* =========================================
        PRODUCT CARDS CONTAINER (Figma Dark Theme)
        =========================================
      */}
      <div className="w-full bg-[#111A12] pt-20 md:pt-28 pb-10 px-6 sm:px-12 md:px-[140px]">
        {/* gap-y-40 lagaya hai taaki absolute images upar se overlap perfectly maintain karein bina layout tode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-40 max-w-[1140px] mx-auto overflow-visible px-4 sm:px-0">
          {topSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductGrid;
