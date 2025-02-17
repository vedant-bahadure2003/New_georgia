import React from "react";
import FacultiesOffered from "@/_components/fergana-medical-institute/courses-and-fees/FacultiesOffered";
import HeroSection from "@/_components/fergana-medical-institute/homepage/HeroSection";
import FeeStructure from "@/_components/fergana-medical-institute/courses-and-fees/FeeStructure";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] lg:pr-[50px]">
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
