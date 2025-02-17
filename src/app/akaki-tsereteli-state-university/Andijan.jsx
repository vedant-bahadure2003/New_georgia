import React from "react";
import HeroSection from "@/_components/mbbsingeorgia/colleges/HeroSection";
import Xyz from "@/_components/mbbsingeorgia/colleges/Xyz";

import HighLightTable from "@/_components/mbbsingeorgia/colleges/HighLightTable";
import WhyStudy from "@/_components/mbbsingeorgia/colleges/WhyStudy";
import KeyFacts from "@/_components/mbbsingeorgia/colleges/KeyFacts";
import FeesStructure from "@/_components/mbbsingeorgia/colleges/FeesStructure";
import Elegibility from "@/_components/mbbsingeorgia/colleges/Eligibility";
import Admission from "@/_components/mbbsingeorgia/colleges/Admission";
import DocumentReq from "@/_components/mbbsingeorgia/colleges/DocumentReq";
import Course from "@/_components/mbbsingeorgia/colleges/Course";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Intake from "@/_components/mbbsingeorgia/colleges/Intake";
import CourseOffered from "@/_components/mbbsingeorgia/colleges/CourseOffered";
import Faq from "@/_components/mbbsingeorgia/colleges/faq";
import Form from "@/_components/mainform/Form";
// import TableOfContent from "@/_components/mbbsinuzbekistan/colleges/TableOfContent";

export default function page() {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%]  lg:pr-[50px]">
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
