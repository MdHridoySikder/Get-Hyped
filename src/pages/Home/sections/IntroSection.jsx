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

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-brand-bg px-4 md:px-12 py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        {/* TOP BIG TEXT - ml-20 maintain kora hoyeche */}
        <div className="ml-10 md:ml-20">
          <h2 className="text-xl md:text-5xl font-semibold leading-tight">
            Wij maken content die opvalt. Die
            <br /> blijft hangen. Die jouw doelgroep
            <br /> raakt en jouw merk in beweging
            <br /> brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        {/* BOTTOM AREA - Desktop er moto grid mobile e o fixed */}
        <div className="mt-20 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-20 items-end">
          {/* IMAGE - Left Side */}
          <div className="flex justify-start intro-anim">
            <div className="w-[80px] h-[100px] md:w-[200px] md:h-[300px] rounded-[15px] md:rounded-[20px] overflow-hidden">
              <img
                src="/p1.webp"
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT + BUTTON - Middle Area */}
          <div className="max-w-[760px] intro-anim">
            <p className="text-[14px] md:text-2xl leading-[1.2] md:leading-[1.22] font-semibold tracking-tight text-brand-text">
              We stoppen niet bij mooie plaatjes en
              <br className="hidden md:block" /> vette beelden. We maken het
              meetbaar.
              <br className="hidden md:block" /> Zo weet je precies wat werkt en
              wat niet.
              <br className="hidden md:block" /> Nooit meer content zonder
              strategie.
              <br className="hidden md:block" /> Nooit meer content zonder
              resultaat.
            </p>

            <a className="group mt-4 md:mt-8 inline-flex items-center border border-black rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-rotate-6">
              <span className="px-2 md:px-3 py-1 md:py-2 text-[12px] md:text-lg font-medium text-brand-text">
                Leer ons kennen
              </span>
              <span className="w-7 h-7 md:w-10 md:h-10 mr-0.5 rounded-lg md:rounded-xl bg-black text-white flex items-center justify-center">
                <ArrowRight size={14} className="md:w-[20px]" />
              </span>
            </a>
          </div>

          {/* DOWN BUTTON - Right Side */}
          <div className="intro-anim flex justify-end">
            <button
              onMouseEnter={handleEnter}
              onClick={handleClick}
              className="group w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl border border-black flex items-center justify-center cursor-pointer"
            >
              <ArrowDown
                ref={arrowRef}
                size={16}
                className="text-orange-500 md:w-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
