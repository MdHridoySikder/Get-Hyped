import React, { useState, useRef, useEffect } from "react";
import { Flame, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);
  const isHidden = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const isAtBottom = currentY + windowHeight >= docHeight - 10;
      const scrollingDown = currentY > lastScrollY.current;

      if (isAtBottom || (scrollingDown && currentY > 80)) {
        if (!isHidden.current) {
          navbarRef.current.style.transform = "translateY(-110%)";
          isHidden.current = true;
        }
      } else if (!scrollingDown) {
        if (isHidden.current) {
          navbarRef.current.style.transform = "translateY(0)";
          isHidden.current = false;
        }
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <>
      <header
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-[999] transition-transform duration-500"
      >
        <div className="max-w-[1200px] mx-auto py-6 px-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="transform -rotate-[6deg] origin-bottom-left">
            <h1
              className="text-black font-black text-3xl md:text-4xl tracking-[-0.05em] leading-none uppercase italic"
              style={{
                WebkitTextStroke: "7px white",
                paintOrder: "stroke fill",
              }}
            >
              GET
              <span
                style={{
                  WebkitTextStroke: "7px black",
                  paintOrder: "stroke fill",
                }}
                className="text-white rounded-xl p-1"
              >
                HYPED
              </span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center bg-white rounded-xl border border-black/5 shadow-md">
            {["Expertises", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative overflow-hidden bg-white px-2 py-2 rounded-xl gap-0.5 font-bold text-black transition-colors duration-300 ease-in-out text-[12px] tracking-widest before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:text-white"
              >
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:flex items-center justify-between rounded-xl bg-[#F6B3F7] p-1 gap-2 transition-transform duration-300 ease-out hover:-rotate-6 hover:scale-105 active:scale-95 "
            >
              <span className="text-base font-bold text-black pl-3 pr-1">
                Get Results
              </span>
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-[#FF5722] shadow-sm">
                <Flame size={24} fill="currentColor" />
              </div>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden z-[1001] relative w-10 h-10 bg-[#F6B3F7] rounded-full flex flex-col items-center justify-center gap-1.5 shadow-md active:scale-90 transition-transform"
            >
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-0" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - DESIGNED LIKE IMAGE */}
      <div
        className={`fixed inset-0 z-[1000] bg-[#F6B3F7] flex flex-col justify-between items-center py-10 transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Section with Logo and Close Button */}
        <div className="w-full px-6 flex justify-between items-start">
          <div className="transform -rotate-[6deg] origin-bottom-left">
            <h1
              className="text-black font-black text-3xl md:text-4xl tracking-[-0.05em] leading-none uppercase italic"
              style={{
                WebkitTextStroke: "7px white",
                paintOrder: "stroke fill",
              }}
            >
              GET
              <span
                style={{
                  WebkitTextStroke: "7px black",
                  paintOrder: "stroke fill",
                }}
                className="text-white rounded-xl p-1"
              >
                HYPED
              </span>
            </h1>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

        {/* Center Nav Links - White Pill Style */}
        <nav className="flex flex-col gap-4 items-center">
          {["Expertises", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative overflow-hidden bg-white px-4 py-4 rounded-xl gap-0.5 font-bold text-black transition-colors duration-300 ease-in-out text-[15px] tracking-widest before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:text-white"
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA Button - Black Pill Style */}
        <div className="w-full px-10 flex justify-center">
          <button
            onClick={handleClick}
            className="bg-[#1A1A1A] text-white flex items-center justify-between gap-1 px-2 py-2 rounded-xl min-w-[150px] shadow-lg"
          >
            <span className="font-semibold text-sm">Get Results</span>
            <div className="bg-white rounded-xl p-2">
              <Flame size={20} className="text-[#FF5722]" fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
