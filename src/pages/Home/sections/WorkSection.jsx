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
    img: "/public/Bullit _ Loop.mp4",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    color: "#007BFF",
    img: "/public/roasta-loop.mp4",
  },
  {
    id: 3,
    title: "Content die écht smaakt (en raakt)",
    client: "Loco",
    color: "#00C853",
    img: "/public/loco-bites-loop.mp4",
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
  };

  return (
    <section className="py-20 px-6 md:px-12 w-full max-w-[1400px] mx-auto bg-brand-bg relative z-30">
      <div className="flex flex-col md:flex-row justify-between md:items-end ml-20 mb-16 gap-8 work-header">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-black">
            Content
            <br />
            dat scoort.
          </h2>
          <p className="mt-8 font-medium text-lg md:text-2xl text-black/90 leading-tight">
            Wij vertellen jouw verhaal. Op
            <br />
            een manier die écht past bij jouw
            <br />
            doelgroep. Met creatieve content
            <br />
            die werkt en het verschil maakt.
          </p>
          <a className="group mt-10 inline-flex items-center border-2 border-black rounded-2xl overflow-hidden cursor-pointer bg-transparent hover:bg-black transition-colors duration-300">
            <span className="px-6 py-3 text-sm font-bold text-black group-hover:text-white">
              Bekijk al ons werk
            </span>
            <span className="w-10 h-10 m-1 rounded-xl bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight size={20} />
            </span>
          </a>
        </div>
      </div>

      <div className="relative mt-32 min-h-[700px] md:min-h-[850px]">
        {works.map((work, index) => (
          <div
            key={work.id}
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
            className={`work-card group absolute w-full cursor-pointer
              ${index === 0 ? "left-0 md:left-4 top-0" : ""}
              ${index === 1 ? "left-1/2 -translate-x-1/2 top-[-100px]" : ""}
              ${index === 2 ? "right-0 md:right-4 top-[-200px]" : ""}
            `}
            style={{
              maxWidth: "360px",
              zIndex: index === 1 ? 30 : index === 0 ? 20 : 10,
            }}
          >
            <div
              className="relative rounded-4xl overflow-hidden border-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 m-4"
              style={{ borderColor: work.color }}
            >
              <div className="relative aspect-[4/5.2] overflow-hidden">
                <video
                  src={work.img}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
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

                <h3 className="font-extrabold text-[22px] md:text-[26px] leading-[1.1] mb-5 pr-8 tracking-tight">
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
