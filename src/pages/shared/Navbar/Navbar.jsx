import React, { useState, useRef, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";

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

      // 🔥 Bottom e gele navbar hide
      if (isAtBottom) {
        if (!isHidden.current) {
          navbarRef.current.style.transform = "translateY(-110%)";
          isHidden.current = true;
        }
      }

      // 🔥 Scroll down → hide navbar
      else if (scrollingDown && currentY > 80) {
        if (!isHidden.current) {
          navbarRef.current.style.transform = "translateY(-110%)";
          isHidden.current = true;
        }
      }

      // 🔥 Scroll up → show navbar
      else if (!scrollingDown) {
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

  return (
    <>
      {/* NAVBAR */}
      <header
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-[999] transition-transform duration-500"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="bg-black text-white px-4 py-2 rounded-md font-black uppercase tracking-tight text-sm md:text-base -rotate-2 shadow-md">
            Get Hyped
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-5 bg-white text-black px-5 py-3 rounded-xl border border-black/5 shadow-md text-[12px] font-bold tracking-[0.2em]">
            <a href="#expertise">Expertises</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex bg-pink-200 text-black px-2 py-3 rounded-xl font-black text-[11px] tracking-widest items-center gap-2 hover:scale-105 transition"
          >
            Get Results{" "}
            <span className="bg-white p-1 rounded-sm">
              <Flame size={16} />
            </span>
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden block bg-[#ff4d6d] p-3 rounded-full text-black"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[1000] bg-[#ff4d6d] flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 bg-black text-white p-3 rounded-full"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col gap-10 text-5xl font-black uppercase text-black text-center">
          <a onClick={() => setOpen(false)} href="#expertise">
            Expertises
          </a>
          <a onClick={() => setOpen(false)} href="#work">
            Work
          </a>
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="mt-10 text-3xl flex items-center justify-center gap-3"
          >
            Get Results <Flame size={28} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
