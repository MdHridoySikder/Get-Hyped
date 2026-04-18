import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Flame } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTASection = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".cta-box", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-brand-footer py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="cta-box bg-white w-full rounded-[3rem] p-16 md:p-32 flex flex-col items-center justify-center text-center shadow-xl">
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase mb-12 flex flex-col leading-[0.9]">
            <span>Let's Get</span>
            <span className="text-brand-orange">Hyped!</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <a href="mailto:info@gethyped.nl" className="bg-brand-text text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300">
              Mail ons direct
            </a>
            <a href="#contact" className="bg-brand-orange text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl shadow-brand-orange/30">
              Get Results <Flame size={20} fill="currentColor" stroke="currentColor" className="text-yellow-300"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
