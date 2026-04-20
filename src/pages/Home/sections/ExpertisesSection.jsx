import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const expertises = [
  {
    id: "01",
    label: "Expertise",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
    bgColor: "bg-[#F9F9F9]",
    textColor: "text-[#1A1A1A]",
    btnBg: "bg-[#FF5C2C]",
    link: "Meer over social strategie",
    media: "/card01.mp4",
  },
  {
    id: "02",
    label: "Expertise",
    title: "Content creation",
    subtitle: "Creatieve content. Impactvol resultaat.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    bgColor: "bg-[#F6B3F7]",
    textColor: "text-[#000000]",
    btnBg: "bg-black text-white",
    link: "Meer over content creatie",
    media: "/card02.mp4",
  },
  {
    id: "03",
    label: "Expertise",
    title: "Activation",
    subtitle: "",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    bgColor: "bg-brand-green",
    textColor: "text-brand-text",
    btnBg: "bg-black",
    link: "Meer over activatie",
    media: "/card03.mp4",
  },
  {
    id: "04",
    label: "Expertise",
    title: "Data",
    subtitle: "",
    desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    bgColor: "bg-brand-blue",
    textColor: "text-white",
    btnBg: "bg-black",
    link: "Meer over data",
    media: "/card04.mp4",
  },
];

const ExpertisesSection = () => {
  const container = useRef();
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: container.current,
          end: "bottom bottom",
        });

        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.8,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full mt-10 bg-brand-bg pb-[10vh]"
    >
      <div className="flex flex-col items-center">
        {expertises.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`relative w-[95%] h-[80vh] ${item.bgColor} ${item.textColor} 
                       rounded-[2.5rem] md:rounded-[3rem] mb-[5vh] p-6 md:p-20 shadow-2xl 
                       flex flex-row justify-between items-center overflow-hidden border border-black/5`}
          >
            {/* Background ID */}
            <div className="absolute top-4 right-6 text-4xl md:text-7xl font-bold text-orange-100/50 leading-none select-none pointer-events-none">
              {item.id}
            </div>

            {/* Left side: Text Content - Mobile e 70% width nibe */}
            <div className="flex flex-col items-start gap-3 md:gap-6 w-[65%] md:max-w-2xl z-10">
              <span className="px-3 py-1 bg-black/5 rounded-lg text-[10px] md:text-sm font-bold tracking-widest opacity-60 uppercase">
                {item.label}
              </span>

              <h3 className="text-2xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
                {item.title}
              </h3>

              <div className="mt-2 md:mt-10 space-y-2 md:space-y-4">
                {item.subtitle && (
                  <h4 className="text-sm md:text-2xl font-bold italic opacity-90">
                    {item.subtitle}
                  </h4>
                )}
                <p className="text-[12px] md:text-xl font-medium leading-tight md:mr-40 line-clamp-3 md:line-clamp-none">
                  {item.desc}
                </p>

                <button
                  className={`${item.btnBg} text-white px-3 py-1.5 md:px-5 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 font-bold text-[10px] md:text-sm transition-all duration-300 ease-out hover:-rotate-5 hover:scale-105 group whitespace-nowrap`}
                >
                  <span>{item.link}</span>
                  <div className="bg-white rounded-lg p-1 text-black">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Right side: Floating Media Section - Mobile e 30% width nibe */}
            <div className="relative z-10 w-[30%] md:w-[280px] aspect-[4/5]">
              <div className="w-full h-full border-[4px] md:border-[8px] border-[#FF5C2C] rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl transform rotate-3">
                <video
                  src={item.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertisesSection;
