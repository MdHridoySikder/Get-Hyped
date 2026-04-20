import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const works = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    client: "Bullit",
    color: "#FF4D00",
    img: "/Bullit _ Loop.mp4",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    color: "#007BFF",
    img: "/roasta-loop.mp4",
  },
  {
    id: 3,
    title: "Content die écht smaakt (en raakt)",
    client: "Loco",
    color: "#00C853",
    img: "/loco-bites-loop.mp4",
  },
];

const WorkSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".work-header", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".work-card", {
        scrollTrigger: {
          trigger: ".work-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  const handleCardEnter = (e) => {
    gsap.to(e.currentTarget, {
      rotate: -3,
      y: -10,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });

    const icon = e.currentTarget.querySelector(".arrow-icon-circle");
    gsap.to(icon, {
      x: 10,
      duration: 0.4,
      ease: "power2.out",
    });

    const video = e.currentTarget.querySelector("video");
    if (video) video.play().catch(() => {});
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotate: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });

    const icon = e.currentTarget.querySelector(".arrow-icon-circle");
    gsap.to(icon, {
      x: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    const video = e.currentTarget.querySelector("video");
    if (video) video.pause();
  };

  return (
    <section className="py-20 px-6 md:px-12 w-full max-w-[1400px] mx-auto bg-brand-bg relative z-30">
      {/* Header Section - Mobile fixed (ml-20 removed for mobile) */}
      <div className="flex flex-col md:flex-row justify-between md:items-end md:ml-20 mb-16 gap-8 work-header">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-black">
            Content
            <br />
            dat scoort.
          </h2>

          <p className="mt-8 font-medium text-lg md:text-2xl text-black/90 leading-tight">
            Wij vertellen jouw verhaal. Op
            <br className="hidden md:block" />
            een manier die écht past bij jouw
            <br className="hidden md:block" />
            doelgroep. Met creatieve content
            <br className="hidden md:block" />
            die werkt এবং het verschil maakt.
          </p>

          <a className="group mt-8 inline-flex items-center border-2 border-black rounded-2xl overflow-hidden cursor-pointer bg-transparent transition-transform duration-300 ease-out hover:-rotate-6">
            <span className="px-3 py-2 text-sm font-bold text-black">
              Bekijk al ons werk
            </span>

            <span className="w-10 h-10 m-1 rounded-xl bg-black text-white flex items-center justify-center">
              <ArrowRight size={20} />
            </span>
          </a>
        </div>
      </div>

      {/* WORK CARDS - Mobile responsive layout */}
      <div className="relative mt-12 md:mt-32 flex flex-col items-center md:block gap-10 min-h-screen md:min-h-[850px]">
        {works.map((work, index) => (
          <div
            key={work.id}
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
            // Mobile: relative position, Desktop: absolute position as before
            className={`work-card group relative md:absolute w-full max-w-[320px] md:max-w-[360px] cursor-pointer
              ${index === 0 ? "md:left-0 md:left-4 md:top-0" : ""}
              ${index === 1 ? "md:left-1/2 md:-translate-x-1/2 md:top-[-100px]" : ""}
              ${index === 2 ? "md:right-0 md:right-4 md:top-[-200px]" : ""}
            `}
            style={{
              zIndex: index === 1 ? 30 : index === 0 ? 20 : 10,
            }}
          >
            <div
              className="relative rounded-4xl overflow-hidden border-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 m-2 md:m-4"
              style={{ borderColor: work.color }}
            >
              <div className="relative aspect-[4/5.2] overflow-hidden">
                <video
                  src={work.img}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div
                className="absolute bottom-[-2px] left-[-2px] right-[-2px] p-5 pt-10 text-white m-4 rounded-3xl"
                style={{
                  backgroundColor: work.color,
                  clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <div className="arrow-icon-circle absolute top-4 right-6 w-11 h-11 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>

                <h3 className="font-extrabold text-[20px] md:text-[26px] leading-[1.1] mb-5 pr-8 tracking-tight">
                  {work.title}
                </h3>

                <span className="inline-block bg-white/30 backdrop-blur-md text-white text-[10px] font-bold px-2 py-2 rounded-sm border border-white/10 uppercase tracking-wider">
                  {work.client}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
