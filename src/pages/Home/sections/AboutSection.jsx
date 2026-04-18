import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 px-6 md:px-12 bg-white text-brand-dark rounded-t-[3rem] -mt-10 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/3">
          <h2 className="about-text text-xl font-bold uppercase tracking-widest text-brand-accent">
            Who We Are
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="about-text text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight">
            We don't just create content. We build cultural momentum for your
            brand. Our approach is grounded in strategy, designed for the
            social-first generation, and focused purely on impact.
          </h3>

          <div className="about-text mt-12 flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold">50+</span>
              <span className="text-sm font-medium uppercase tracking-widest opacity-60">
                Brands Trust Us
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-bold">1B+</span>
              <span className="text-sm font-medium uppercase tracking-widest opacity-60">
                Views Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
