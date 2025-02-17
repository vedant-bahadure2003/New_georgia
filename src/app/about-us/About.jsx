// import AboutUsHeroPage from "@/components/about-us/HeroPage";
// import OurImpact from "@/components/about-us/OurImpact";
// import TrustPage from "@/components/about-us/TrustPage";
// import VisionAndMission from "@/components/about-us/VisionAndMission";
// import GetPersonalizedGuidanceForm from "@/components/contact-form/CommonContactForm";
import React from "react";
import AboutUsHeroPage from "@/_components/about-us/HeroPage";
import TrustPage from "@/_components/about-us/TrustPage";
import VisionAndMission from "@/_components/about-us/VisionAndMission";
import OurImpact from "@/_components/about-us/OurImpact";

function page() {
  return (
    <div className="overflow-hidden lg:-mb-10">
      {/* <AboutUsHeroPage />
      <TrustPage />
      <VisionAndMission />
      <OurImpact />
      <GetPersonalizedGuidanceForm/> */}
      <AboutUsHeroPage />
      <TrustPage />
      <VisionAndMission />
      <OurImpact />
    </div>
  );
}

export default page;
