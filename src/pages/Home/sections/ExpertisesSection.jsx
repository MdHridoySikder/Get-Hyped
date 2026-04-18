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
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    bgColor: "bg-[#F9F9F9]",
    textColor: "text-[#1A1A1A]",
    btnBg: "bg-[#FF5C2C]",
    link: "Meer over social strategie",
    media: "/public/card01.mp4",
  },
  {
    id: "02",
    label: "Expertise",
    title: "Content creation",
    subtitle: "Creatieve content. Impactvol resultaat.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    bgColor: "bg-[#FFD1D1]",
    textColor: "text-[#1A1A1A]",
    btnBg: "bg-[#FF5C2C]",
    link: "Meer over content creatie",
    media: "/public/card02.mp4",
  },
  {
    id: "03",
    label: "Expertise",
    title: "Activation",
    subtitle: "",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    bgColor: "bg-brand-green",
    textColor: "text-brand-text",
    btnBg: "bg-black",
    link: "Meer over activatie",
    media: "/public/card03.mp4",
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
    media: "/public/card04.mp4",
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

  // 3. INTERACTION HELPERS
  const onMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      y: -10,
      scale: 1.01,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const onMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={container}
      className="relative w-full mt-10 bg-brand-bg pb-[10vh]"
    >
      {/* Header Space */}

      {/* Cards Stack */}
      <div className="flex flex-col items-center">
        {expertises.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave(index)}
            className={`relative w-[95%] h-[85vh] md:h-[80vh] ${item.bgColor} ${item.textColor} 
                       rounded-[3rem] mb-[5vh] p-8 md:p-20 shadow-2xl flex flex-col md:flex-row 
                       justify-between items-center overflow-hidden border border-black/5`}
          >
            {/* Background ID */}
            <div className="absolute top-2 right-3 text-5xl md:text-7xl font-bold text-orange-100 leading-none select-none pointer-events-none pr-8 pt-8">
              {item.id}
            </div>

            {/* Left side: Text Content */}
            <div className="inner-content flex flex-col items-start gap-6 max-w-2xl z-10">
              <span className="px-4 py-1.5 bg-black/5 rounded-lg text-sm font-bold  tracking-widest opacity-60">
                {item.label}
              </span>

              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.8] uppercase">
                {item.title}
              </h3>

              <div className="mt-15 space-y-4">
                <h4 className="text-2xl md:text-2xl font-bold italic opacity-90 text-black">
                  {item.subtitle}
                </h4>
                <p className="text-xl md:text-xl font-medium mr-80 ">
                  {item.desc}
                </p>
                {/* Action Button */}
                <button
                  className={`${item.btnBg} text-white px-6 py-3 rounded-xl flex items-center gap-4 font-bold text-sm mt- 
                           hover:pr-8 transition-all duration-500 group`}
                >
                  {item.link}
                  <div className="bg-white rounded-full p-1.5 text-black group-hover:rotate-40 transition-transform duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Right side: Floating Media Section */}
            <div className="floating-image relative z-10 w-full md:w-[280px] aspect-[4/5] mt-10 md:mt-0">
              <div className="w-full h-full border-[8px] border-[#FF5C2C] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform transition-transform duration-700 hover:rotate-0 rotate-3">
                <video
                  src={item.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
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
