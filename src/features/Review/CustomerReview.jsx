import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Maxn Raval",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
      id: 2,
      name: "venely k",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
      id: 3,
      name: "Lii thakur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    }
  ];

  return (
    <section className="w-full max-w-[1728px] mx-auto relative bg-[#0B100C] py-28 px-6 sm:px-12 md:px-[140px] overflow-hidden">
      
      {/* TITLE AREA WITH BRACKETS */}
      <div className="w-full flex justify-center mb-24 bg-transparent px-6 relative z-10">
        <div className="relative px-12 py-4 flex items-center justify-center bg-transparent max-w-max mx-auto">
          <img 
            src="./assets/image9.png" 
            alt="Left Bracket"
            className="absolute -left-2 -bottom-2 w-16 h-16 object-contain pointer-events-none select-none"
          />
          <h3 
            className="text-white text-[28px] md:text-[38px] font-semibold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Customer Review
          </h3>
          <img 
            src="./assets/image.png" 
            alt="Right Bracket"
            className="absolute -right-2 -top-2 w-16 h-16 object-contain pointer-events-none select-none"
          />
        </div>
      </div>

      {/* REVIEWS GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1140px] mx-auto px-4 sm:px-0 relative z-10">
        {reviews.map((user) => (
          <div
            key={user.id}
            className="w-full max-w-[340px] h-[350px] flex flex-col pt-12 pb-10 px-10 relative select-none transition-transform duration-300 hover:-translate-y-1 mx-auto"
          >
            
            {/* =============================================================
              EXACT FIGMA VECTOR PATH (image_e3aadc.png WAVE SHAPE)
              =============================================================
              D1, D2 curves ko center nodes me adjust kiya hai taaki four edges 
              bich me se organically smooth ho kar andar dip karein.
            */}
            <div className="absolute inset-0 z-0">
              <svg 
                className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" 
                viewBox="0 0 340 350" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 55 12 
                     C 110 20, 230 20, 285 12 
                     C 325 15, 328 60, 325 115 
                     C 320 175, 320 205, 325 240 
                     C 328 290, 325 335, 285 338 
                     C 230 330, 110 330, 55 338 
                     C 15 335, 12 290, 15 240 
                     C 20 205, 20 175, 15 115 
                     C 12 60, 15 15, 55 12 Z" 
                  fill="url(#smoothWaveGradient)"
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="1.2"
                />
                <defs>
                  {/* Figma design color style matte scheme gradient */}
                  <linearGradient id="smoothWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E2620" />
                    <stop offset="100%" stopColor="#141915" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* CONTENT CONTAINER LAYER */}
            <div className="relative z-10 w-full h-full flex flex-col justify-start">
              
              {/* USER INFO HEADER ROW */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/[0.08]"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-full blur-[3px] z-0 transform translate-y-0.5" />
                </div>
                
                <div className="flex flex-col text-left">
                  <h4 className="text-white text-[20px] font-medium tracking-wide">
                    {user.name}
                  </h4>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(user.rating)].map((_, index) => (
                      <svg 
                        key={index} 
                        className="w-[13px] h-[13px] fill-[#EAB308]" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* REVIEW TEXT BLOCK */}
              <p className="text-white/50 text-[14px] leading-relaxed text-left font-light tracking-wide line-clamp-5">
                {user.reviewText}
              </p>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default CustomerReviews;