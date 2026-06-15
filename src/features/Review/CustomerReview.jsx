import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Maxn Raval",
    initials: "MR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    delay: "0ms",
  },
  {
    id: 2,
    name: "venely k",
    initials: "VK",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    delay: "120ms",
  },
  {
    id: 3,
    name: "Lii thakur",
    initials: "LT",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
    delay: "240ms",
  },
];

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="w-full max-w-[1728px] mx-auto bg-[#111A12] px-6 sm:px-12 md:px-[120px] pt-24 md:pt-32 pb-24 md:pb-36 overflow-hidden"
    >
      <div className="w-full flex justify-center mb-20 md:mb-28">
        <div className="section-title-frame scroll-reveal">
          <img
            src="./assets/image9.png"
            alt=""
            className="absolute -left-2 -bottom-2 w-14 h-14 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />
          <h2 className="text-white text-[30px] md:text-[42px] font-semibold tracking-normal text-center whitespace-nowrap relative z-10">
            Customer Review
          </h2>
          <img
            src="./assets/image.png"
            alt=""
            className="absolute -right-2 -top-2 w-14 h-14 md:w-16 md:h-16 object-contain pointer-events-none select-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1140px] mx-auto">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="review-card figma-card-surface scroll-reveal"
            style={{ animationDelay: review.delay }}
          >
            <div className="flex items-center gap-4 mb-7">
              <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden border border-white/20 shadow-[0_10px_18px_rgba(0,0,0,0.35)] bg-[linear-gradient(135deg,#d79a72,#5e765f)] flex items-center justify-center text-white text-[14px] font-bold">
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
              <div>
                <h3 className="text-white text-[19px] md:text-[20px] font-semibold leading-none">
                  {review.name}
                </h3>
                <div className="flex items-center gap-[3px] mt-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      fill="#f4ce46"
                      stroke="none"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/62 text-[13px] md:text-[14px] leading-[155%] max-w-[280px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
