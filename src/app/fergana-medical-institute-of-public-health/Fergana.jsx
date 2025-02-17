import React from "react";
import HeroSection from "@/_components/fergana-medical-institute/homepage/HeroSection";
import Xyz from "@/_components/fergana-medical-institute/homepage/Xyz";

import HighLightTable from "@/_components/fergana-medical-institute/homepage/HighLightTable";
import WhyStudy from "@/_components/fergana-medical-institute/homepage/WhyStudy";
import KeyFacts from "@/_components/fergana-medical-institute/homepage/KeyFacts";
import FeesStructure from "@/_components/fergana-medical-institute/homepage/FeesStructure";
import Elegibility from "@/_components/fergana-medical-institute/homepage/Eligibility";
import Admission from "@/_components/fergana-medical-institute/homepage/Admission";
import DocumentReq from "@/_components/fergana-medical-institute/homepage/DocumentReq";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Intake from "@/_components/fergana-medical-institute/homepage/Intake";
import CourseOffered from "@/_components/fergana-medical-institute/homepage/CourseOffered";
import Faq from "@/_components/fergana-medical-institute/homepage/faq";
// import TableOfContent from "@/_components/mbbsinuzbekistan/colleges/TableOfContent";

export default function page() {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] lg:pr-[50px]">
          <Xyz />
          {/* <TableOfContent /> */}

          <HighLightTable />
          {/* <YouTube /> */}
          <WhyStudy />
          <KeyFacts />
          <FeesStructure />
          <Elegibility />
          <Admission />
          <DocumentReq />
          {/* <Course /> */}
          <Intake />
          <CourseOffered />
          <Faq />
        </div>

        <div className="w-[30%] mt-8">
          <Form />
        </div>
      </div>
    </>
  );
}
