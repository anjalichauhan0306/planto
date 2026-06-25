import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Maln Josi",
    initials: "MJ",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    delay: "0ms",
  },
  {
    id: 2,
    name: "Alina Thakur",
    initials: "AT",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    delay: "120ms",
  },
  {
    id: 3,
    name: "Max Makvana",
    initials: "MM",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
    delay: "240ms",
  },
];

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="w-full max-w-[1440px] mx-auto bg-[#111A12] px-4 sm:px-8 md:px-16 lg:px-[100px]  md:pt-32 pb-24 md:pb-36 overflow-hidden"
    >  
      <div className="w-full flex justify-center mb-20 md:mb-24 px-6 scroll-reveal">
        <div className="relative px-8 py-3 md:px-12 md:py-4 flex items-center justify-center bg-transparent max-w-max mx-auto">
          {/* LEFT-BOTTOM BRACKET IMAGE */}
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-1 -bottom-1 md:-left-2 md:-bottom-2 w-10 h-10 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />

          {/* TITLE TEXT */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-[38px] font-semibold tracking-wide text-center whitespace-nowrap bg-transparent select-none relative z-10">
            Customer Review
          </h2>

          {/* RIGHT-TOP BRACKET IMAGE */}
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-1 -top-1 md:-right-2 md:-top-2 w-10 h-10 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />
        </div>
        </div>
      {/* =========================================
        REVIEWS GRID CONTAINER
        =========================================
      */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-[1440px] mx-auto overflow-visible bg-transparent border-none">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="review-card flex flex-col justify-start items-start"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='404' viewBox='28 24 543 405' fill='none'%3E%3Cpath d='M25.5 98.0084C25.5 47.2335 70.1879 7.95131 120.719 12.9256C171.229 17.8978 232.745 22.715 281.5 22.715C330.255 22.715 391.771 17.8978 442.281 12.9256C492.812 7.95131 537.5 47.2335 537.5 98.0084V332.144C537.5 378.535 499.892 416.144 453.5 416.144H109.5C63.1081 416.144 25.5 378.535 25.5 332.144V98.0084Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M442.38 13.9209C492.341 9.00294 536.5 47.8442 536.5 98.0088V332.144C536.5 377.983 499.34 415.144 453.5 415.144H109.5C63.6604 415.144 26.5 377.983 26.5 332.144V98.0088C26.5 47.8442 70.6586 9.00294 120.62 13.9209C171.137 18.8938 232.694 23.7148 281.5 23.7148C330.306 23.7148 391.863 18.8938 442.38 13.9209Z'  fill='white'
  fill-opacity='0.05'/%3E%3C/svg%3E")`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* User Profile Info Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 shadow-[0_8px_16px_rgba(0,0,0,0.3)] bg-white/10 flex items-center justify-center text-white text-xs font-bold shrink-0">
                <span>{review.initials}</span>
                <img
                  src={review.image}
                  alt={review.name}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <h3 className="text-white text-base sm:text-lg font-medium leading-tight">
                  {review.name}
                </h3>
                <div className="flex items-center gap-[3px] mt-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={12}
                      fill="#f4ce46"
                      stroke="none"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Review Body Content */}
            <p className="text-white/60 text-xs sm:text-[13px] leading-[160%] text-left line-clamp-4 font-light tracking-wide w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
