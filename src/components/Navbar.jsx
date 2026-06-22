import { useState } from "react";
import { ChevronDown, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-['Inter'] select-none bg-/40 backdrop-blur-md border-white/[0.05]">
      <div className="w-full h-[60px] md:h-[76px] flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1728px] mx-auto">
        <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 no-underline group">
          <img
            src="/plant21.png"
            alt="Planto Logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain"
          />
          <span className="text-[18px] md:text-[20px] font-bold text-white tracking-wide">
            Planto.
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-white">
          <a href="#home"
            className="hover:text-white/80 text-[14px] font-medium transition-colors duration-200 whitespace-nowrap">
            Home
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-white/80 text-[14px] font-medium transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer p-0">
              Plants Type
              <ChevronDown
                size={14}
                className="transition-transform duration-200 group-hover:rotate-180"
                strokeWidth={2}
              />
            </button>

            {/* Dropdown menu */}
            <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-44 bg-[#0d1f14] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1.5 z-50">
              <a href="#indoor"
                className="block px-4 py-2.5 text-[13px] text-white/60 hover:text-white hover:bg-[#1e2d24] rounded-md transition-colors duration-150">
                Indoor Plants
              </a>
              <a href="#outdoor"
                className="block px-4 py-2.5 text-[13px] text-white/60 hover:text-white hover:bg-[#1e2d24] rounded-md transition-colors duration-150">
                Outdoor Plants
              </a>
            </div>
          </div>

          <a href="#more"
            className="hover:text-white/80 text-[14px] font-medium transition-colors duration-200 whitespace-nowrap">
            More
          </a>

          <a href="#contact"
            className="hover:text-white/80 text-[14px] font-medium transition-colors duration-200 whitespace-nowrap">
            Contact
          </a>
        </div>

        {/* ── RIGHT: Icons & Menu Controls ── */}
        <div className="flex items-center gap-5 md:gap-7 flex-shrink-0 text-white">
          {/* Search */}
          <button
            aria-label="Search"
            className="hover:text-white/80 transition-colors duration-200 flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>

          {/* Shopping Bag */}
          <button
            aria-label="Shopping cart"
            className="relative hover:text-white/80 transition-colors duration-200 flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <ShoppingBag size={18} strokeWidth={2.3} />
            <span className="absolute top-0 right-0 w-[5px] h-[5px] bg-[#10B981] rounded-full" />
          </button>

          {/* Responsive Hamburger Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-end justify-center gap-[5px] hover:text-white/80 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 w-5 h-5"
          >
            <span className={`block h-[2px] bg-current rounded-sm transition-all duration-300 ${isOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
            <span className={`block h-[2px] bg-current rounded-sm transition-all duration-200 ${isOpen ? "w-0 opacity-0" : "w-3.5"}`} />
            <span className={`block h-[2px] bg-current rounded-sm transition-all duration-300 ${isOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
          </button>
        </div>
      </div>

      {/* ─── DYNAMIC MOBILE DRAWER (Smooth Dropdown) ─── */}
      <div
        className={`md:hidden w-full bg-[#0d1f14]/95 backdrop-blur-md border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-white/90">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-[16px] font-medium py-1 hover:text-white transition-colors">
            Home
          </a>
          
          <div>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="w-full flex items-center justify-between text-[16px] font-medium py-1 bg-transparent border-none text-white/90 text-left cursor-pointer"
            >
              <span>Plants Type</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-3 border-l border-white/10">
                <a href="#indoor" onClick={() => setIsOpen(false)} className="text-[14px] text-white/60 hover:text-white">Indoor Plants</a>
                <a href="#outdoor" onClick={() => setIsOpen(false)} className="text-[14px] text-white/60 hover:text-white">Outdoor Plants</a>
              </div>
            )}
          </div>

          <a href="#more" onClick={() => setIsOpen(false)} className="text-[16px] font-medium py-1 hover:text-white transition-colors">
            More
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[16px] font-medium py-1 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;