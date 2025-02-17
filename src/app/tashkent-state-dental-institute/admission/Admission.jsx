import React from "react";
import AdmissionProcess from "@/_components/tashkent-state-dental-institute/admission/AdmissionProcess";
import HeroSection from "@/_components/tashkent-state-dental-institute/Homepage/HeroSection";
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
