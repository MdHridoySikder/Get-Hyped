import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Flame } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTASection = () => {
  const container = useRef();
  const [text, setText] = useState([]);

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

  // 🖱️ throttle control (IMPORTANT)
  let lastTime = 0;

  const handleMouseMove = (e) => {
    const now = Date.now();

    // 👉 only allow 120ms gap (one-by-one effect)
    if (now - lastTime < 120) return;
    lastTime = now;

    const rect = container.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = now;

    setText((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setText((prev) => prev.filter((t) => t.id !== id));
    }, 900);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="w-full bg-brand-bg  py-32 px-6 md:px-12 relative z-20 overflow-hidden "
    >
      {/* 🔥 FLOATING TEXT */}
      {text.map((t) => (
        <span
          key={t.id}
          className="absolute pointer-events-none text-4xl md:text-6xl font-black text-black uppercase opacity-20 animate-pop"
          style={{
            left: t.x,
            top: t.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          GETHYPED
        </span>
      ))}

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto cta-content flex flex-col items-center justify-center text-center relative z-10">
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gray-300" />

        <h2 className="text-8xl font-black tracking-tight text-black leading-none mb-10 mt-30">
          Let's Get Hyped!
        </h2>

        <div className="flex flex-col md:flex-row gap-5 items-center">
          <a
            href="mailto:hridoy702345@gmail.com"
            className="flex items-center justify-between rounded-xl border border-black/30 px-1 gap-1"
          >
            <span className="text-sm font-semibold text-black px-3">
              Mail ons direct
            </span>

            <div className="w-10 h-10 m-1 rounded-xl bg-black flex items-center justify-center text-white">
              <Mail size={25} />
            </div>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-between rounded-xl p-1 bg-[#FF5A1F] px-1 gap-1.5"
          >
            <span className="text-sm font-semibold text-white px-3">
              Get Results
            </span>

            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#FF4D00]">
              <Flame size={25} />
            </div>
          </a>
        </div>
      </div>

      {/* 🔥 POP ANIMATION */}
      <style jsx>{`
        .animate-pop {
          animation: pop 0.9s ease-out forwards;
        }

        @keyframes pop {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
