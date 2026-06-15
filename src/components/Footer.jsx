const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#1B261B] px-6 sm:px-12 md:px-[80px] lg:px-[120px] pt-20 pb-12"
    >
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.55fr_1fr] gap-14 md:gap-20 text-white">
        <div className="scroll-reveal">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <img
              src="/plant21.png"
              alt="Planto logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-[44px] font-black leading-none tracking-tight">
              Planto.
            </span>
          </a>
          <p className="text-white/82 text-[16px] leading-[135%] mt-9 max-w-[440px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-12 mt-20 text-[14px] font-bold text-white">
            <a href="#home" className="hover:text-white/70 transition-colors">
              FB
            </a>
            <a href="#home" className="hover:text-white/70 transition-colors">
              TW
            </a>
            <a href="#home" className="hover:text-white/70 transition-colors">
              LI
            </a>
          </div>
        </div>

        <div className="pt-3 scroll-reveal" style={{ "--reveal-delay": "120ms" }}>
          <h3 className="text-[17px] font-extrabold mb-7">Quick Link's</h3>
          <nav className="flex flex-col gap-4 text-white/78 text-[14px] font-semibold">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#indoor" className="hover:text-white transition-colors">
              Type's Of plant's
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#more" className="hover:text-white transition-colors">
              Privacy
            </a>
          </nav>
        </div>

        <div className="pt-3 scroll-reveal" style={{ "--reveal-delay": "220ms" }}>
          <h3 className="text-[17px] font-extrabold mb-9">For Every Update.</h3>
          <form className="flex w-full max-w-[560px] h-[46px] border border-white/70 rounded-[4px] overflow-hidden bg-transparent">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 min-w-0 bg-transparent px-6 text-[13px] font-semibold text-white placeholder:text-white/82 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#1a2a18] px-5 sm:px-7 text-[12px] font-black tracking-wide hover:bg-white/85 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-white/82 text-[13px] font-semibold mt-28 md:mt-36">
            planto © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
