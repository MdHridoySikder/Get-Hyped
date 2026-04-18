import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ─────────────────────────────────────────────────────────────────────────────
// ServicesSection — Anti-Gravity Motion System
//   • Existing ScrollTrigger reveal preserved (scroll in stagger)
//   • Added GSAP hover lift + scale micro-interaction on service cards
//   • UI markup UNCHANGED
// ─────────────────────────────────────────────────────────────────────────────

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Short Form Video",
    desc: "TikTok, Reels, & YouTube Shorts designed to go viral.",
  },
  {
    id: "02",
    title: "Brand Identity",
    desc: "Crafting visually striking and conceptually deep identities.",
  },
  {
    id: "03",
    title: "Campaign Strategy",
    desc: "Data-driven creative campaigns that convert.",
  },
  {
    id: "04",
    title: "High-End Photography",
    desc: "Premium product and lifestyle photography.",
  },
];

const ServicesSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  // ── Hover micro-interactions ─────────────────────────────────────────────
  const handleCardEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -6,
      scale: 1.02,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={container}
      className="py-32 px-6 md:px-12 bg-white text-brand-dark"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-16">
          Services.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="service-card group relative p-10 rounded-3xl bg-brand-light overflow-hidden hover:text-white transition-colors duration-500 cursor-pointer"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              {/* Hover Background Shape */}
              <div className="absolute inset-0 bg-brand-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] z-0" />

              <div className="relative z-10 flex flex-col h-full min-h-[200px]">
                <span className="text-lg font-bold opacity-50 mb-auto">
                  {svc.id}
                </span>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{svc.title}</h3>
                  <p className="opacity-80 font-medium">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
