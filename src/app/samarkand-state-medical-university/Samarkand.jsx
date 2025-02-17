import React from "react";
import HeroSection from "@/_components/samarkand-state-medical-university/homepage/HeroSection";
import Xyz from "@/_components/samarkand-state-medical-university/homepage/Xyz";

import HighLightTable from "@/_components/samarkand-state-medical-university/homepage/HighLightTable";
import WhyStudy from "@/_components/samarkand-state-medical-university/homepage/WhyStudy";
import KeyFacts from "@/_components/samarkand-state-medical-university/homepage/KeyFacts";
import FeesStructure from "@/_components/samarkand-state-medical-university/homepage/FeesStructure";
import Elegibility from "@/_components/samarkand-state-medical-university/homepage/Eligibility";
import Admission from "@/_components/samarkand-state-medical-university/homepage/Admission";
import DocumentReq from "@/_components/samarkand-state-medical-university/homepage/DocumentReq";
import CourseOffered from "@/_components/samarkand-state-medical-university/homepage/CourseOffered";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Intake from "@/_components/samarkand-state-medical-university/homepage/Intake";
import Course from "@/_components/samarkand-state-medical-university/homepage/Course";
import TableOfContent from "@/_components/samarkand-state-medical-university/homepage/TableOfContent";
import Faq from "@/_components/samarkand-state-medical-university/homepage/Faq";
import AdmissionSteps from "@/_components/samarkand-state-medical-university/homepage/AdmissionSteps";
import Form from "@/_components/mainform/Form";
export default function page() {
  return (
    <>
      <HeroSection />
      <div className="flex lg:px-[150px]">
        <div className="lg:w-[70%] ml-1 lg:pr-[50px]">
          <Xyz />
          {/* <TableOfContent /> */}

          <HighLightTable />
          {/* <YouTube /> */}
          <WhyStudy />
          <KeyFacts />
          <FeesStructure />
          <Elegibility />
          <Admission />
          {/* <AdmissionSteps /> */}
          <DocumentReq />
          <Course />
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
