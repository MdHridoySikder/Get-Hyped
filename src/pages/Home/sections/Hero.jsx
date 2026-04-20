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
          y: "-=15",
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
      scale: 1.1,
      rotate: 0,
      duration: 0.4,
      ease: "power3.out",
      zIndex: 100,
    });
  };

  const handleLeave = (e) => {
    const originalRotate = e.currentTarget.dataset.rotate;
    gsap.to(e.currentTarget, {
      scale: 1,
      rotate: originalRotate,
      duration: 0.5,
      ease: "power3.out",
      zIndex: e.currentTarget.dataset.zindex,
    });
  };

  return (
    <section className="relative py-90  w-full min-h-screen bg-brand-bg px-6 md:px-10 mx-auto pt-40 overflow-hidden">
      {/* TEXT */}
      <div className="mb-6 relative z-50">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tighter">
          <div className="overflow-hidden">
            <div className="title-line">Get Hyped. Get</div>
          </div>
          <div className="overflow-hidden">
            <div className="title-line">Noticed. Get Results.</div>
          </div>
        </h1>

        <p className="subtext mt-5 text-base md:text-2xl max-w-xl leading-relaxed font-medium">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>
      </div>

      {/* FLOATING UI TILES */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] md:h-[340px] pointer-events-none mt-10 md:mt-0 ">
        {/* TILE 1 */}
        <div
          data-rotate="-8"
          data-zindex="30"
          className="card absolute left-[5%] md:left-[10%] bottom-0 w-40 h-52 md:w-70 md:h-90 bg-[#007AFF] text-black p-4 md:p-6 -rotate-[8deg] z-30 rounded-[25px] md:rounded-[35px] pointer-events-auto flex flex-col justify-between shadow-xl"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="text-[40px] md:text-[75px] font-semibold leading-none tracking-tighter">
            10M+
          </div>
          <div className="flex flex-col gap-1 md:gap-1.5">
            <div className="w-full border-b border-black pb-1 md:pb-2">
              <div className="text-sm md:text-xl font-semibold tracking-tight">
                Organische views
              </div>
            </div>
            <div className="text-[8px] md:text-[11px] font-bold uppercase">
              Slimme content
            </div>
          </div>
        </div>

        {/* TILE 2 VIDEO */}
        <div
          data-rotate="-4"
          data-zindex="20"
          className="card absolute left-[35%] md:left-[32%] bottom-10 md:bottom-4 w-40 h-52 md:w-70 md:h-90 overflow-hidden -rotate-[4deg] z-20 rounded-[25px] md:rounded-[35px] pointer-events-auto shadow-xl"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <video
            className="w-full h-full object-cover"
            src="/Loop Salontopper.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* TILE 3 */}
        <div
          data-rotate="3"
          data-zindex="40"
          className="card absolute left-[60%] md:left-[54%] bottom-4 md:bottom-8 w-40 h-52 md:w-70 md:h-90 bg-[#3AC589] text-black p-4 md:p-6 rotate-[3deg] z-40 rounded-[25px] md:rounded-[35px] pointer-events-auto flex flex-col justify-between shadow-xl"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="text-[40px] md:text-[75px] font-semibold leading-none tracking-tighter">
            30+
          </div>
          <div className="flex flex-col gap-1 md:gap-1.5">
            <div className="w-full border-b border-black/40 pb-1 md:pb-2">
              <div className="text-sm md:text-xl font-semibold tracking-tight">
                Merken
              </div>
            </div>
            <div className="text-[8px] md:text-[10px] font-medium text-black/70 uppercase">
              Start-up to Multi
            </div>
          </div>
        </div>

        {/* TILE 4 VIDEO - Hidden on Mobile */}
        <div
          data-rotate="8"
          data-zindex="10"
          className="card hidden md:flex absolute left-[76%] bottom-2 w-70 h-90 overflow-hidden rotate-[8deg] z-10 rounded-[35px] pointer-events-auto shadow-xl flex-col"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <video
            className="w-full h-full object-cover"
            src="/petrolhead-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <span className="bg-white text-black text-[12px] font-black uppercase px-2 py-1 -rotate-3 inline-block">
              Die Klinkt Toch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
