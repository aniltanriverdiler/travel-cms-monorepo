import RecentProduct from "@/components/layout/recent/RecentProduct";
import React from "react";
import Hero from "./_components/Hero/Hero";
import SpecialOffer from "./_components/SpecialOffer/SpecialOffer";
import WelcomeSection from "./_components/SpecialOffer/WelcomeSection";

function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-24"></div>
      <SpecialOffer />
      <WelcomeSection />
      <div className="min-h-24"></div>
      <RecentProduct />
      <div className="min-h-64"></div>
    </div>
  );
}

export default Home;
