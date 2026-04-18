import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactSection = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const container = useRef();

  useGSAP(() => {
    gsap.from(".contact-elem", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 px-6 md:px-12 bg-brand-light text-brand-dark rounded-t-[3rem] -mt-20 relative z-30">
      <div className="max-w-4xl mx-auto">
        <h2 className="contact-elem text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8 text-center">
          Ready?
        </h2>
        <p className="contact-elem text-xl md:text-2xl text-center font-medium opacity-70 mb-16 max-w-2xl mx-auto">
          Drop us a line and let's craft something unforgettable together.
        </p>

        <form className="contact-elem flex flex-col gap-8 max-w-2xl mx-auto text-lg mt-12">
          {["name", "email", "message"].map((field) => (
            <div key={field} className="relative group">
              <label 
                className={`absolute top-0 left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-sm font-bold
                  ${focusedInput === field ? '-translate-y-6 text-brand-accent scale-75' : 'text-brand-dark/50'}`}
              >
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  onFocus={() => setFocusedInput(field)}
                  onBlur={(e) => !e.target.value && setFocusedInput(null)}
                  className="w-full bg-transparent border-b-2 border-brand-dark/20 py-2 focus:outline-none focus:border-brand-accent transition-colors resize-none h-32 peer font-medium"
                />
              ) : (
                <input 
                  type={field === 'email' ? 'email' : 'text'}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={(e) => !e.target.value && setFocusedInput(null)}
                  className="w-full bg-transparent border-b-2 border-brand-dark/20 py-2 focus:outline-none focus:border-brand-accent transition-colors peer font-medium"
                />
              )}
            </div>
          ))}
          
          <button 
            type="button" 
            className="mt-8 bg-brand-dark text-brand-light py-5 px-10 rounded-full uppercase tracking-widest text-sm font-bold w-fit hover:bg-brand-accent transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
