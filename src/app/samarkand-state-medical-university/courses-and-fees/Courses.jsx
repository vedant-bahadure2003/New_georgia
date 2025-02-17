import React from "react";
import FacultiesOffered from "@/_components/samarkand-state-medical-university/courses-and-fees/FacultiesOffered";
import HeroSection from "@/_components/samarkand-state-medical-university/homepage/HeroSection";
import FeeStructure from "@/_components/samarkand-state-medical-university/courses-and-fees/FeeStructure";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
const page = () => {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] ml-6 lg:pr-[50px]">
          <FeeStructure />
          <FacultiesOffered />
        </div>
        <div className="w-[30%] mt-8">
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
