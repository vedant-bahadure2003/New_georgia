import React from "react";
import Herosection from "@/_components/mbbsingeorgia/Herosection";
import Highlight from "@/_components/mbbsingeorgia/Highlight";
import Planningform from "@/_components/mbbsingeorgia/Planningform";

import Whystudy from "@/_components/mbbsingeorgia/Whystudy";
import FeesStructure from "@/_components/mbbsingeorgia/FeesStructure";
import Eligibility from "@/_components/mbbsingeorgia/Eligibility";
import AdmissionProcess from "@/_components/mbbsingeorgia/AdmissionProcess";
import Document from "@/_components/mbbsingeorgia/Document";
import Syllabus from "@/_components/mbbsingeorgia/Syllabus";
import Intake from "@/_components/mbbsingeorgia/Intake";
import Accreditation from "@/_components/mbbsingeorgia/Accreditation";
import UzbekistanVsIndiaMbbs from "@/_components/mbbsingeorgia/UzbekistanVsIndiaMbbs";
import CourseOffered from "@/_components/mbbsingeorgia/CourseOffered";
import CareerScope from "@/_components/mbbsingeorgia/CareerScope";
import PassingPercentage from "@/_components/mbbsingeorgia/PassingPercentage";
import HostelFacility from "@/_components/mbbsingeorgia/HostelFacility";
import UniversitySection from "@/_components/mbbsingeorgia/UniversitySection";
import MainForm from "@/_components/mbbsingeorgia/MainForm";
import Xyz from "@/_components/mbbsingeorgia/Xyz";
import Faq from "@/_components/mbbsingeorgia/faq";
import Form from "@/_components/mainform/Form";

const MBBS_Uzbekistan = () => {
  return (
    <div className="w-full">
      <Herosection />
      <div className="flex w-full lg:px-[150px]">
        <div className="lg:w-[70%] mx-2  pr-0 w-full lg:pr-[40px]">
          <Xyz />
          <Highlight />
          {/* <YtFrame /> */}
          <Planningform />
          <Whystudy />
          <FeesStructure />
          <Eligibility />
          <AdmissionProcess />
          <Document />
          <Syllabus />
          <UniversitySection />
          <Intake />
          <Accreditation />
          <UzbekistanVsIndiaMbbs />
          <CourseOffered />
          <CareerScope />

          {/* <HostelFacility /> */}
          <Faq />
        </div>
        <div className="w-[30%] mt-10">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MBBS_Uzbekistan;
