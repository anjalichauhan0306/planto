import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#1B261B] px-6 sm:px-12 md:px-[80px] lg:px-[120px] pt-16 md:pt-20 pb-12"
    >
      {/* Grid columns ko perfectly scale kiya hai: Mobile par single-col aur tablet/desktop par side-by-side columns */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.55fr_1fr] gap-10 sm:gap-14 md:gap-20 text-white">
        
        {/* FIRST COLUMN: LOGO & ABOUT */}
        <div className="scroll-reveal flex flex-col items-start text-left">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <img
              src="/plant21.png"
              alt="Planto logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <span className="text-[32px] sm:text-[38px] md:text-[44px] font-black leading-none tracking-tight">
              Planto.
            </span>
          </a>
          <p className="text-white/82 text-[14px] md:text-[16px] leading-[135%] mt-6 md:mt-9 max-w-[440px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Social Links Margin for Mobile Fixed */}
          <div className="flex items-center gap-8 md:gap-12 mt-10 md:mt-20 text-[14px] font-bold text-white">
            <a href="#home" className="hover:text-white/70 transition-colors">FB</a>
            <a href="#home" className="hover:text-white/70 transition-colors">TW</a>
            <a href="#home" className="hover:text-white/70 transition-colors">LI</a>
          </div>
        </div>

        {/* SECOND COLUMN: QUICK LINKS */}
        <div className="pt-3 scroll-reveal text-left flex flex-col items-start" style={{ "--reveal-delay": "120ms" }}>
          <h3 className="text-[16px] md:text-[17px] font-extrabold mb-5 md:mb-7">Quick Link's</h3>
          <nav className="flex flex-col gap-3 md:gap-4 text-white/78 text-[14px] font-semibold">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#indoor" className="hover:text-white transition-colors">Type's Of plant's</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#more" className="hover:text-white transition-colors">Privacy</a>
          </nav>
        </div>

        {/* THIRD COLUMN: NEWSLETTER & COPYRIGHT */}
        <div className="pt-3 scroll-reveal text-left flex flex-col items-start" style={{ "--reveal-delay": "220ms" }}>
          <h3 className="text-[16px] md:text-[17px] font-extrabold mb-6 md:mb-9">For Every Update.</h3>
          
          {/* Form container code scales elegantly on smaller break points */}
          <form className="flex w-full max-w-[560px] h-[46px] border border-white/70 rounded-[4px] overflow-hidden bg-transparent">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 min-w-0 bg-transparent px-4 md:px-6 text-[13px] font-semibold text-white placeholder:text-white/82 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#1a2a18] px-4 sm:px-7 text-[12px] font-black tracking-wide hover:bg-white/85 transition-colors cursor-pointer shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>

          {/* Copyright margin bottom spacing fixed for compact mobile reading layout */}
          <p className="text-white/82 text-[13px] font-semibold mt-16 md:mt-36">
            planto © all right reserve
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;