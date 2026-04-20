import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const brands = [
  "/brand1.svg",
  "/brand2.svg",
  "/brand3.svg",
  "/brand4.svg",
  "/brand5.svg",
  "/brand6.svg",
  "/brand7.svg",
  "/brand8.svg",
  "/brand9.svg",
  "/brand10.svg",
  "/brand11.svg",
];

const MarqueeSection = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 8,
        repeat: -1,
      });
    },
    { scope: scrollRef },
  );

  const handlePressAll = () => {
    const rotateValues = [-8, 5, -6, 7, -4, 9, -7, 6, -5, 8, -3];

    gsap.utils.toArray(".brand-card").forEach((card, index) => {
      gsap.to(card, {
        rotate: rotateValues[index % rotateValues.length],
        scale: 0.97,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.02,
        overwrite: "auto",
      });
    });
  };

  const handleReleaseAll = () => {
    gsap.to(".brand-card", {
      rotate: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1,0.5)",
      stagger: 0.015,
      overwrite: "auto",
    });
  };

  return (
    <section className="mt-[-200px] md:mt-[-350px] mb-20 overflow-hidden bg-brand-bg relative z-30">
      <div className="ml-8 mb-12 font-bold  ">
        <h1 className="text-4xl md:text-6xl leading-tight">
          These brands
          <br className="hidden md:block" /> got hyped.
        </h1>
      </div>

      <div ref={scrollRef} className="flex relative w-full overflow-hidden">
        <div className="marquee-content flex gap-3 whitespace-nowrap min-w-full">
          {[1, 2].map((block) => (
            <div key={block} className="flex gap-2 items-center">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  onMouseDown={handlePressAll}
                  onMouseUp={handleReleaseAll}
                  onMouseLeave={handleReleaseAll}
                  onTouchStart={handlePressAll}
                  onTouchEnd={handleReleaseAll}
                  className="brand-card w-32 h-32 md:w-64 md:h-64 border border-gray-400 rounded-xl flex items-center justify-center bg-brand-bg shrink-0 cursor-pointer will-change-transform"
                >
                  <img
                    src={brand}
                    alt={`brand-${index + 1}`}
                    className="max-w-[70%] max-h-[70%] md:max-w-[100%] md:max-h-[100%] object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
