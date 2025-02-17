import React from "react";
import AdmissionProcess from "@/_components/samarkand-state-medical-university/admission/AdmissionProcess";
import HeroSection from "@/_components/samarkand-state-medical-university/homepage/HeroSection";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] lg:pr-[50px]">
          <AdmissionProcess />
        </div>
        <div className="w-[30%] mt-8">
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
