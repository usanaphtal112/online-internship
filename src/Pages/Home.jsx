import React from "react";
import InternBenefits from "../Components/InternBenefits";
import InternshipProcess from "../Components/InternshipProcess";
import Internship from "../Components/Internship";
import HeroSection from "../Components/HeroSection";
import { PartnerSection } from "../Components/PartnerSection";
import { Testimonies } from "../Components/Testimonies";
import FAQPage from "../Components/FAQPage";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Internship />
      <InternshipProcess />
      <InternBenefits />
      <PartnerSection />
      <Testimonies />
      <FAQPage />
    </div>
  );
};

export default Home;
