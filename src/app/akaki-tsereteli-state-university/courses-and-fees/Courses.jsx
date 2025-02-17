import React from "react";
import FacultiesOffered from "@/_components/mbbsingeorgia/courses/FacultiesOffered";
import HeroSection from "@/_components/mbbsingeorgia/colleges/HeroSection";
import FeeStructure from "@/_components/mbbsingeorgia/courses/FeeStructure";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%]  lg:pr-[50px]">
          <FeeStructure />
          <FacultiesOffered />
        </div>
        <div className="lg:w-[30%] mt-8">
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
