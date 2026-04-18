import React from "react";
import Hero from "../sections/Hero";
import IntroSection from "../sections/IntroSection";
import ExpertisesSection from "../sections/ExpertisesSection";
import WorkSection from "../sections/WorkSection";
import MarqueeSection from "../sections/MarqueeSection";
import CTASection from "../sections/CTASection";

const Home = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <Hero />
      <IntroSection />
      <ExpertisesSection />
      <WorkSection />
      <MarqueeSection />
      <CTASection />
    </div>
  );
};

export default Home;
