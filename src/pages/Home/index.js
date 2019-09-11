import React from "react";

// Sections
import HeroSection from "./components/HeroSection";
import TechnologiesSection from "./components/TechnologiesSection";
import WorkSection from "./components/WorkSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <WorkSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;
