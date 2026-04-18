import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeSection = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      // Infinite marquee animation using GSAP horizontal translation duplicate setup
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
    },
    { scope: scrollRef },
  );

  return (
    <section className="py-24 overflow-hidden bg-brand-bg relative z-30">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-black uppercase tracking-widest opacity-40">
          These brands got hyped.
        </h2>
      </div>

      <div ref={scrollRef} className="flex relative w-full overflow-hidden">
        <div className="marquee-content flex gap-16 whitespace-nowrap min-w-full">
          {/* Dual blocks for seamless infinite loop */}
          {[1, 2].map((block) => (
            <div key={block} className="flex gap-24 items-center">
              <span className="text-6xl font-black text-black/20">NIKE</span>
              <span className="text-6xl font-black text-black/20">
                RED BULL
              </span>
              <span className="text-6xl font-black text-black/20">SPOTIFY</span>
              <span className="text-6xl font-black text-black/20">GUCCI</span>
              <span className="text-6xl font-black text-black/20">BULLIT</span>
              <span className="text-6xl font-black text-black/20">ROASTA</span>
              <span className="text-6xl font-black text-black/20">LOCO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
