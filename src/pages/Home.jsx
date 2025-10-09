import React from "react";
// import HeroSlider from "../components/HeroSlider";
// import AboutSection from "../components/AboutSection";
// import StatementOverlay from "../components/StatementOverlay";
import HomeSection from "../components/HomeSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import VenueSection from "../components/VenueSection";

export default function Home() {
  return (
    <main className="relative">
      <HomeSection />
      {/* <HeroSlider />
      <AboutSection />
      <StatementOverlay /> */}
      <StatsSection />
      <GallerySection />
      <VenueSection />
    </main>
  );
}
