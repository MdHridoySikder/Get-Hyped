import React, { useRef, useState } from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { Mail, Flame } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const container = useRef();
  const [text, setText] = useState([]);

  // GSAP Animation for the CTA Content
  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  // 🖱️ Mouse Follower Logic
  let lastTime = 0;
  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - lastTime < 120) return;
    lastTime = now;

    const rect = container.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = now;

    setText((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setText((prev) => prev.filter((t) => t.id !== id));
    }, 900);
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="w-full bg-brand-bg relative z-20 overflow-hidden"
    >
      {/* 🔥 FLOATING TEXT ANIMATION */}
      {text.map((t) => (
        <span
          key={t.id}
          className="absolute pointer-events-none text-4xl md:text-6xl font-black text-black uppercase opacity-20 animate-pop z-0"
          style={{
            left: t.x,
            top: t.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          GETHYPED
        </span>
      ))}

      {/* --- TOP SECTION: CTA --- */}
      <div className="max-w-[1400px] mx-auto pt-32 mb-[-150px] px-6 md:px-12 cta-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gray-300" />

        <h2 className="text-6xl md:text-8xl font-black tracking-tight text-black leading-none mb-10 mt-10">
          Let's Get Hyped!
        </h2>

        <div className="flex flex-col md:flex-row gap-5 items-center">
          <a
            href="mailto:hridoy702345@gmail.com"
            className="flex items-center justify-between rounded-xl border border-black/30 bg-white/50 backdrop-blur-sm px-1 gap-1 group hover:border-black transition-colors"
          >
            <span className="text-sm font-semibold text-black px-3">
              Mail ons direct
            </span>
            <div className="w-10 h-10 m-1 rounded-xl bg-black flex items-center justify-center text-white">
              <Mail size={20} />
            </div>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-between rounded-xl p-1 bg-[#FF5A1F] px-1 gap-1.5 hover:bg-[#e64f1a] transition-colors"
          >
            <span className="text-sm font-semibold text-white px-3">
              Get Results
            </span>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#FF4D00]">
              <Flame size={20} />
            </div>
          </a>
        </div>
      </div>

      {/* --- BOTTOM SECTION: ACTUAL FOOTER --- */}
      <div className="max-w-[1400px] mx-auto relative px-4 md:px-10 pb-12 ">
        {/* BACKGROUND SLANT SHAPE */}
        <div
          className="absolute inset-0 bg-[#c2b583] rounded-[20px] mx-5"
          style={{
            clipPath: "polygon(0 80%, 100% 25%, 100% 100%, 0% 100%)",
            zIndex: 0,
          }}
        ></div>

        <div className="relative z-10 p-8 pt-40 flex flex-col md:flex-row justify-between items-end gap-10">
          {/* LEFT SIDE: LARGE LOGO */}
          <div className="absolute bottom-[-10px] left-[-10px] md:left-[-25px] z-20 ">
            <div className="transform -rotate-[10deg] md:-rotate-[10deg] origin-bottom-left ml-3 mb-[-55px]">
              <h1
                className="text-black font-[1000] text-8xl  tracking-[-0.05em] leading-none uppercase italic"
                style={{
                  WebkitTextStroke: "6px white",
                  paintOrder: "stroke fill",
                }}
              >
                GET
                <span
                  style={{
                    WebkitTextStroke: "7px black",
                    paintOrder: "stroke fill",
                  }}
                  className="text-white  6px white rounded-xl p-2"
                >
                  HYPED
                </span>
              </h1>
            </div>
          </div>

          {/* RIGHT SIDE GROUPING */}
          <div className="flex flex-col mt-5 md:flex-row md:items-end md:gap-20 ml-auto w-full md:w-auto ">
            {/* NAVIGATION & SOCIALS */}
            <div className="flex flex-col gap-5  ">
              <div className="flex flex-wrap gap-2">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="
        relative overflow-hidden
        bg-white px-2 py-2 rounded-xl font-semibold text-black 
        transition-colors duration-300 ease-in-out
        text-sm shadow-sm
        
       
        before:content-[''] before:absolute before:bottom-0 before:left-0 
        before:w-full before:h-0 berore:bg before:bg-black 
        before:transition-all before:duration-300 before:ease-in-out
        before:z-0
        
       
        hover:before:h-full hover:text-white
      "
                  >
                    <span className="relative z-10">{item}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 ">
                <span className="font-semibold text-black text-sm  tracking-wider hover:text-orange-400">
                  Follow us
                </span>
                <div className="flex gap-2  ">
                  {[
                    {
                      icon: <FaLinkedinIn className="hover:scale-115" />,
                      link: "#",
                    },
                    {
                      icon: <FaTiktok className="hover:scale-115" />,
                      link: "#",
                    },
                    {
                      icon: <FaInstagram className="hover:scale-115" />,
                      link: "#",
                    },
                    {
                      icon: <FaYoutube className="hover:scale-115" />,
                      link: "#",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-8 h-8 bg-white  rounded-full flex items-center justify-center text-black "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-18 text-[12px] font-bold text-black/40  ">
                <span className="hover:text-orange-400">© 2025 Get Hyped</span>
                <span className="hover:text-orange-400">© Design by Dylan</span>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="flex flex-col gap-2 text-left min-w-[100px] ">
              <div>
                <h4 className="font-bold text-black  text-[12px] tracking-widest hover:text-orange-400 ">
                  Contact
                </h4>
                <div className="text-[12px] font-bold text-black flex flex-col gap-1">
                  <a
                    href="mailto:info@gethyped.nl"
                    className="hover:text-orange-400"
                  >
                    info@gethyped.nl
                  </a>
                  <a href="tel:+31615337496" className="hover:text-orange-400">
                    +31 6 1533 7496
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black  text-[12px] tracking-widest mb-3 hover:text-orange-400">
                  Adres
                </h4>
                <p className="text-[12px] font-bold text-black leading-tight hover:text-orange-400">
                  Beltrumsestraat 6,
                  <br /> 7141 AL Groenlo
                </p>
              </div>

              <a
                href="/privacy"
                className="text-[12px] font-bold text-black/40 hover:underline hover:text-orange-400"
              >
                Privacyvoorwaarden
              </a>
            </div>
          </div>

          {/* ROTATING BADGE */}
          <div className="absolute  top-28 right-5 md:right-10 transform -translate-y-1/2">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg
                className="absolute w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[8px] font-bold uppercase fill-black tracking-[0.1em]">
                  <textPath xlinkHref="#circlePath">
                    • GET HYPED • GET NOTICED • GET RESULTS •
                  </textPath>
                </text>
              </svg>
              <div className="w-20 h-20 bg-[#F6ADFF] rounded-full flex items-center justify-center border-[4px] border-[#F9F7F2] z-10 shadow-lg">
                <span className="text-2xl font-black text-black">GH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-pop {
          animation: pop 0.9s ease-out forwards;
        }

        @keyframes pop {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
