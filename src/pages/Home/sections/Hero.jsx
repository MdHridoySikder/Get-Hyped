import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      // ENTRY ANIMATION
      const tl = gsap.timeline();

      tl.from(".title-line", {
        y: "120%",
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      })
        .from(
          ".subtext",
          {
            opacity: 0,
            y: 10,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".card",
          {
            y: 180,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.5",
        );

      // FLOAT
      cards.forEach((card) => {
        gsap.to(card, {
          y: "-10",
          rotate: "+=0.8",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random(),
        });
      });

      // MOUSE PARALLAX
      const onMove = (e) => {
        const { innerWidth, innerHeight } = window;

        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 20;

        gsap.to(".card", {
          x,
          y,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", onMove);

      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: container },
  );

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      rotate: 0,
      duration: 0.4,
      ease: "power3.out",
      zIndex: 100,
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={container}
      className="relative py-90  w-full min-h-screen bg-brand-bg px-6 md:px-10 mx-auto pt-40 overflow-hidden  "
    >
      {/* TEXT */}
      <div className="mb-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tighter">
          <div>Get Hyped. Get</div>
          <div>Noticed. Get Results.</div>
        </h1>

        <p className="mt-5 text-base md:text-2xl max-w-xl leading-relaxed font-medium">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>
      </div>

      {/* FLOATING UI TILES */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[340px] pointer-events-none">
        {/* TILE 1 */}
        <div
          className="card absolute left-[10%] bottom-0 w-60 h-80 bg-blue-500 text-white p-5 -rotate-6 z-30 pointer-events-auto"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="text-5xl font-black">10M+</div>
          <div className="mt-2 text-xs uppercase">Organische views</div>
        </div>

        {/* TILE 2 IMAGE */}
        <div
          className="card absolute left-[32%] bottom-0 w-60 h-80 overflow-hidden rotate-2 z-20 pointer-events-auto"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <video
            className="w-full h-full object-cover"
            src="/public/Loop Salontopper.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* TILE 3 */}
        <div
          className="card absolute left-[54%] bottom-0 w-60 h-80 bg-green-400 text-black p-5 -rotate-3 z-40 pointer-events-auto"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="text-5xl font-black">30+</div>
          <div className="mt-2 text-xs uppercase">Merken geholpen</div>
        </div>

        {/* TILE 4 IMAGE */}
        <div
          className="card absolute left-[76%] bottom-0 w-60 h-80 overflow-hidden rotate-6 z-10 pointer-events-auto"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <video
            className="w-full h-full object-cover"
            src="/public/petrolhead-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
