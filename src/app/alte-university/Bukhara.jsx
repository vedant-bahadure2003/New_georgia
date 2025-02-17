import React from "react";
import HeroSection from "@/_components/alte-university/homepage/HeroSection";
import Xyz from "@/_components/alte-university/homepage/Xyz";

import HighLightTable from "@/_components/alte-university/homepage/HighLightTable";
import WhyStudy from "@/_components/alte-university/homepage/WhyStudy";
import KeyFacts from "@/_components/alte-university/homepage/KeyFacts";
import FeesStructure from "@/_components/alte-university/homepage/FeesStructure";
import Elegibility from "@/_components/alte-university/homepage/Eligibility";
import Admission from "@/_components/alte-university/homepage/Admission";
import DocumentReq from "@/_components/alte-university/homepage/DocumentReq";
import Course from "@/_components/mbbsingeorgia/colleges/Course";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Intake from "@/_components/alte-university/homepage/Intake";
import CourseOffered from "@/_components/alte-university/homepage/CourseOffered";
import Faq from "@/_components/alte-university/homepage/faq";
import Form from "@/_components/mainform/Form";
// import TableOfContent from "@/_components/mbbsinuzbekistan/colleges/TableOfContent";

export default function page() {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] pr-2 lg:pr-[50px]">
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
