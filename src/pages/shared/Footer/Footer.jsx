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

  const lastTimeRef = useRef(0);
  const handleMouseMove = (e) => {
    const now = Date.now();

    if (now - lastTimeRef.current < 600) return;
    lastTimeRef.current = now;

    const rect = container.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = now;

    setText((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setText((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  };

  return (
    <footer className="w-full bg-brand-bg relative z-20 overflow-hidden">
      {/* --- MOUSE HOVER POPUP LOGO --- */}
      {text.map((t) => (
        <div
          key={t.id}
          className="absolute pointer-events-none animate-pop z-0 select-none"
          style={{
            left: t.x,
            top: t.y,
            transform: "translate(-50%, -50%)", // Zoom সরাতে হলে এখানে scale রাখা যাবে না
          }}
        >
          <div className="transform -rotate-[6deg] origin-bottom-left">
            <h1
              className="text-black font-black text-3xl md:text-4xl tracking-[-0.05em] leading-none uppercase italic whitespace-nowrap flex items-center"
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
                className="text-white rounded-xl p-1 ml-1"
              >
                HYPED
              </span>
            </h1>
          </div>
        </div>
      ))}

      {/* --- TOP SECTION: CTA --- */}
      <div
        onMouseMove={handleMouseMove}
        className="max-w-[1400px] mx-auto pt-20 md:pt-32 mb-[-70px] md:mb-[-140px] px-4 md:px-12 cta-content flex flex-col items-center justify-center text-center relative z-10"
      >
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gray-300" />

        <h2 className="text-4xl md:text-8xl font-black tracking-tight text-black leading-none mb-6 md:mb-10 mt-10">
          Let's Get Hyped!
        </h2>

        <div className="flex flex-row gap-3 md:gap-5 items-center">
          <a
            href="mailto:hridoy702345@gmail.com"
            className="flex items-center justify-between rounded-lg md:rounded-xl border border-black/30 bg-white/50 backdrop-blur-sm px-1 gap-1 group hover:border-black transition-colors"
          >
            <span className="text-[10px] md:text-sm font-semibold text-black px-2 md:px-3">
              Mail ons direct
            </span>
            <div className="w-7 h-7 md:w-10 md:h-10 m-1 rounded-lg md:rounded-xl bg-black flex items-center justify-center text-white">
              <Mail size={14} className="md:w-5 md:h-5" />
            </div>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-between rounded-lg md:rounded-xl p-1 bg-[#FF5A1F] px-1 gap-1 md:gap-1.5 hover:bg-[#e64f1a] transition-colors"
          >
            <span className="text-[10px] md:text-sm font-semibold text-white px-2 md:px-3">
              Get Results
            </span>
            <div className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-[#FF4D00]">
              <Flame size={14} className="md:w-5 md:h-5" />
            </div>
          </a>
        </div>
      </div>

      {/* --- BOTTOM SECTION: ACTUAL FOOTER --- */}
      <div className="max-w-[1400px] mx-auto relative px-2 md:px-10 pb-8 md:pb-12 ">
        <div
          className="absolute inset-0 bg-[#74716038] rounded-[15px] md:rounded-[20px] mx-2 md:mx-5"
          style={{
            clipPath: "polygon(0 80%, 100% 25%, 100% 100%, 0% 100%)",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10 p-4 md:p-8 pt-32 md:pt-40 flex flex-row justify-between items-end gap-2 md:gap-10">
          <div className="relative md:absolute bottom-[-5px] md:bottom-[-10px] left-0 md:left-[-25px] z-20 ">
            <div className="transform -rotate-[10deg] origin-bottom-left ml-1 md:ml-3 mb-[-25px] md:mb-[-55px]">
              <h1
                className="text-black font-[1000] text-3xl md:text-8xl tracking-[-0.05em] leading-none uppercase italic flex items-center"
                style={{
                  WebkitTextStroke: "2px white",
                  mdWebkitTextStroke: "6px white",
                  paintOrder: "stroke fill",
                }}
              >
                GET
                <span
                  style={{
                    WebkitTextStroke: "2px black",
                    mdWebkitTextStroke: "7px black",
                    paintOrder: "stroke fill",
                  }}
                  className="text-white rounded-lg md:rounded-xl p-1 md:p-2 ml-1"
                >
                  HYPED
                </span>
              </h1>
            </div>
          </div>

          <div className="flex flex-row items-end gap-4 md:gap-20 ml-auto md:mt-10">
            <div className="flex flex-col gap-3 md:gap-4 ">
              <div className="flex flex-row flex-wrap justify-end gap-1 md:gap-2">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative overflow-hidden bg-white px-1.5 py-1 md:px-2 md:py-2 rounded-lg md:rounded-xl font-semibold text-black text-[8px] md:text-sm shadow-sm transition-colors duration-300 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:text-white"
                  >
                    <span className="relative z-10">{item}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2">
                <span className="font-semibold text-black text-[9px] md:text-sm tracking-wider">
                  Follow us
                </span>
                <div className="flex gap-1 md:gap-2">
                  {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-black transition-all duration-300 ease-out hover:scale-125 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <Icon size={12} className="md:w-4 md:h-4" />
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 md:gap-18 text-[7px] md:text-[12px] font-bold text-black/40">
                <span className="hover:text-orange-300">© 2025 Get Hyped</span>
                <span className="hover:text-orange-300">© Design by Dylan</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left min-w-[70px] md:min-w-[100px]">
              <div>
                <h4 className="font-bold text-black text-[8px] md:text-[12px] tracking-widest hover:text-orange-300">
                  Contact
                </h4>
                <div className="text-[7px] md:text-[12px] font-bold text-black flex flex-col gap-0.5 md:gap-1">
                  <a
                    href="mailto:info@gethyped.nl "
                    className="hover:text-orange-300"
                  >
                    info@gethyped.nl
                  </a>
                  <a href="tel:+31615337496" className="hover:text-orange-300">
                    +31 6 1533 7496
                  </a>
                </div>
              </div>

              <div className="hidden sm:block">
                <h4 className="font-bold text-black text-[12px] tracking-widest hover:text-orange-300">
                  Adres
                </h4>
                <p className="text-[12px] font-bold text-black leading-tight hover:text-orange-300">
                  Beltrumsestraat 6, 7141 AL Groenlo
                </p>
              </div>

              <a
                href="/privacy"
                className="text-[7px] md:text-[12px] font-bold text-black/40 hover:text-orange-300"
              >
                Privacyvoorwaarden
              </a>
            </div>
          </div>

          <div className="absolute top-24 md:top-28 right-2 md:right-10 transform -translate-y-1/2 scale-[0.6] md:scale-100">
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
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
              <div className="w-14 h-14 md:w-20 md:h-20 bg-[#F6ADFF] rounded-full flex items-center justify-center border-[3px] md:border-[4px] border-[#F9F7F2] z-10 shadow-lg">
                <span className="text-xl md:text-2xl font-black text-black">
                  GH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS UPDATED (NO ZOOM) */}
      <style jsx>{`
        .animate-pop {
          animation: pop 3s ease-out forwards;
        }
        @keyframes pop {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
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
          animation: spin-slow 100s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
