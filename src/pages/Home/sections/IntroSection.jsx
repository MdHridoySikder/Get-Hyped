import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowDown } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IntroSection = () => {
  const container = useRef();
  const arrowRef = useRef();

  useGSAP(
    () => {
      gsap.from(".intro-anim", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  // 🔁 Hover → one-time down & up
  const handleEnter = () => {
    gsap.fromTo(
      arrowRef.current,
      { y: 0 },
      {
        y: 10,
        duration: 0.25,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      },
    );
  };

  // ⬇️ Click → SCROLL DOWN (FIXED)
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2, // ⬅️ ensures DOWN scroll (not top only)
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={container}
      className="bg-brand-bg px-6 md:px-12 py-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* TOP BIG TEXT */}
        <div className="ml-20">
          <h2 className="text-2xl md:text-5xl font-semibold ">
            Wij maken content die opvalt. Die<br></br> blijft hangen. Die jouw
            doelgroep<br></br>raakt en jouw merk in beweging<br></br> brengt.
            Snel, krachtig en energiek.
          </h2>
        </div>

        {/* BOTTOM AREA */}
        <div className="mt-20 md:mt-20 grid grid-cols md:grid-cols-[300px_1fr_70px] gap-8 md:gap-20 items-end">
          {/* IMAGE */}
          <div className="flex justify-start">
            <div className="w-[140px] h-[160px] md:w-[200px] md:h-[300px] rounded-[20px] overflow-hidden">
              <img
                src="/p1.webp"
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT + BUTTON */}
          <div className="max-w-[760px]">
            <p className="text-xl md:text-2xl leading-[1.22] font-semibold tracking-tight text-brand-text">
              We stoppen niet bij mooie plaatjes en<br></br> vette beelden. We
              maken het meetbaar.<br></br> Zo weet je precies wat werkt en wat
              niet.<br></br> Nooit meer content zonder strategie.<br></br> Nooit
              meer content zonder resultaat.
            </p>

            <a className="group mt-8 inline-flex items-center border border-black rounded-2xl overflow-hidden cursor-pointer">
              <span className="px-3 py-2 text-lg font-medium text-brand-text transition-transform duration-300 ease-out group-hover:translate-y-1">
                Leer ons kennen
              </span>

              <span className="w-10 h-10 mr-0.5 rounded-xl bg-black text-white flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* DOWN BUTTON */}
          <div className="intro-anim flex justify-end">
            <button
              onMouseEnter={handleEnter}
              onClick={handleClick}
              className="group w-12 h-12 rounded-2xl border border-black flex items-center justify-center cursor-pointer"
            >
              <ArrowDown ref={arrowRef} size={20} className="text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
