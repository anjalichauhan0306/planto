import { useState } from "react";
import { ChevronDown, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-['Inter'] select-none">

      {/* ─── MAIN BAR ─── */}
      <div className="w-full h-[68px] md:h-[76px] flex items-center justify-between px-7 md:px-8 lg:px-9 max-w-[1120px] mx-auto">

        {/* ── LEFT: Logo ── */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0 no-underline">
          <img
            src="/plant21.png"
            alt="Planto Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="text-[14px] md:text-[15px] font-black text-white leading-none tracking-tight">
            Planto.
          </span>
        </a>

        {/* ── CENTER: Nav Links (desktop) ── */}
        <div className="hidden md:flex items-center gap-8 lg:gap-11 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">

          <a href="#home"
            className="text-white/75 hover:text-white text-[10px] font-medium transition-colors duration-200 whitespace-nowrap">
            Home
          </a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/75 hover:text-white text-[10px] font-medium transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer p-0">
              Plants Type
              <ChevronDown
                size={13}
                className="mt-[1px] transition-transform duration-200 group-hover:rotate-180"
                strokeWidth={2.5}
              />
            </button>

            {/* Dropdown menu */}
            <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-44 bg-[#111e16] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1.5 z-50">
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
            className="text-white/75 hover:text-white text-[10px] font-medium transition-colors duration-200 whitespace-nowrap">
            More
          </a>

          <a href="#contact"
            className="text-white/75 hover:text-white text-[10px] font-medium transition-colors duration-200 whitespace-nowrap">
            Contact
          </a>
        </div>

        {/* ── RIGHT: Icons ── */}
        <div className="flex items-center gap-6 md:gap-7 flex-shrink-0">

          {/* Search */}
          <button
            aria-label="Search"
            className="text-white/75 hover:text-white transition-colors duration-200 flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <img src="/assets/search-icon.png" alt="" className="w-[13px] h-[13px]" />
          </button>

          {/* Bag */}
          <button
            aria-label="Shopping cart"
            className="relative text-white/75 hover:text-white transition-colors duration-200 flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <ShoppingBag size={14} strokeWidth={2} />
            <span className="absolute -top-1 -right-1 w-[7px] h-[7px] bg-emerald-400 rounded-full border-[1.5px] border-[#0d1f14]" />
          </button>

          {/* Hamburger — desktop & mobile */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-end justify-center gap-[4px] text-white/75 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 w-5"
          >
            <span className="block h-[2px] w-5 bg-current rounded-sm transition-all duration-200" />
            <span className={`block h-[2px] bg-current rounded-sm transition-all duration-200 ${isOpen ? "w-5" : "w-3"}`} />
          </button>

        </div>
      </div>

      {/* ─── MOBILE DRAWER ─── */}
      <div
        className={`md:hidden w-full bg-[#0d1f14]/95 backdrop-blur-md border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-2 font-['Inter']">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white py-3.5 text-[15px] font-medium border-b border-white/[0.07] transition-colors duration-150"
          >
            Home
          </a>

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between text-white/70 hover:text-white py-3.5 text-[15px] font-medium border-b border-white/[0.07] bg-transparent border-none cursor-pointer px-0 w-full transition-colors duration-150"
          >
            <span>Plants Type</span>
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Mobile sub-links */}
          <div className={`overflow-hidden transition-all duration-200 ${dropdownOpen ? "max-h-28" : "max-h-0"}`}>
            <a
              href="#indoor"
              onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
              className="block pl-4 py-2.5 text-[14px] text-white/50 hover:text-white border-b border-white/[0.05] transition-colors duration-150"
            >
              Indoor Plants
            </a>
            <a
              href="#outdoor"
              onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
              className="block pl-4 py-2.5 text-[14px] text-white/50 hover:text-white border-b border-white/[0.07] transition-colors duration-150"
            >
              Outdoor Plants
            </a>
          </div>

          <a
            href="#more"
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white py-3.5 text-[15px] font-medium border-b border-white/[0.07] transition-colors duration-150"
          >
            More
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white py-3.5 text-[15px] font-medium transition-colors duration-150"
          >
            Contact
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
