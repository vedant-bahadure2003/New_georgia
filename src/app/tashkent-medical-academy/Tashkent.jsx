import React from "react";
import HeroSection from "@/_components/tashkent-medical-academy/Homepage/HeroSection";
import Xyz from "@/_components/tashkent-medical-academy/Homepage/Xyz";

import HighLightTable from "@/_components/tashkent-medical-academy/Homepage/HighLightTable";
import WhyStudy from "@/_components/tashkent-medical-academy/Homepage/WhyStudy";
import KeyFacts from "@/_components/tashkent-medical-academy/Homepage/KeyFacts";
import FeesStructure from "@/_components/tashkent-medical-academy/Homepage/FeesStructure";
import Elegibility from "@/_components/tashkent-medical-academy/Homepage/Eligibility";
import Admission from "@/_components/tashkent-medical-academy/Homepage/Admission";
import DocumentReq from "@/_components/tashkent-medical-academy/Homepage/DocumentReq";
import Form from "@/_components/mainform/Form";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Intake from "@/_components/tashkent-medical-academy/Homepage/Intake";
import CourseOffered from "@/_components/tashkent-medical-academy/Homepage/CourseOffered";
import Faq from "@/_components/tashkent-medical-academy/Homepage/faq";
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
