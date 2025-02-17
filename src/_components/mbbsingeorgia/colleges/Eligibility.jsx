import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const eligibilityCriteria = [
  "A candidate must have a Minimum 50% aggregate in Physics, Chemistry, and Biology (PCB) in the 12th grade.",
  "She/he must be over 18 years old at the time of admission.",
  "NEET (National Eligibility cum Entrance Test) qualifying marks are required.",
  "No IELTS or TOEFL is required for admission.",
  "A valid passport and relevant documents for international students.",
  "Students must meet the health and medical fitness criteria.",
];

const Eligibility = () => {
  return (
    <div className="flex flex-col py-6 lg:py-2 p-2">
      {/* Title */}
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
        Eligibility Criteria to Study MBBS at Akaki Tsereteli State University
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        For those students who want to apply for the MBBS course at Akaki
        Tsereteli State University, ensure that you fulfill the eligibility
        criteria provided by the university:
      </p>

      {/* Eligibility List */}
      <div className="text-[14px] sm:text-[16px] ml-3 py-4 bg-[#FFF9EA] flex flex-col gap-4">
        {eligibilityCriteria.map((point, index) => (
          <div key={index} className="flex gap-3">
            <Image
              src={vector}
              alt="vector"
              className="h-[18px] w-[18px] sm:h-[18px] sm:w-[18px] mt-1"
            />
            <p className="text-justify text-[14px] sm:text-[16px]">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eligibility;
