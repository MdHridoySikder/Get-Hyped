import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Flame } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTASection = () => {
  const container = useRef();

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

  return (
    <section className="w-full bg-brand-bg py-32 px-6 md:px-12 relative z-20">
      {/* Top Line */}

      <div className="max-w-[1400px] mx-auto cta-content flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-6  right-6  h-[2px] bg-gray-300 " />
        <h2 className="text-8xl font-black tracking-tight text-black leading-none mb-10 mt-30">
          Let's Get Hyped!
        </h2>

        <div className="flex flex-col md:flex-row gap-5 items-center">
          {/* First Button */}
          <a
            href="mailto:hridoy702345@gmail.com"
            className="flex items-center justify-between  rounded-xl border border-black/30 bg-transparent transition-all duration-300 px-1 gap-1"
          >
            <span className="text-sm font-semibold text-black">
              Mail ons direct
            </span>

            <div className="w-10 h-10  m-1 rounded-xl bg-black flex items-center justify-center text-white">
              <Mail size={25} />
            </div>
          </a>

          {/* Second Button */}
          <a
            href="#contact"
            className="flex items-center justify-between  rounded-xl p-1 bg-[#FF5A1F] transition-all duration-300 px-1 gap-1.5"
          >
            <span className="text-sm font-semibold text-white">
              Get Results
            </span>

            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#FF4D00]">
              <Flame size={25} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
