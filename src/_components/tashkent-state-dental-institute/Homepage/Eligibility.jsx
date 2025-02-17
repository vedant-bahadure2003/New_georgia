import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

// Eligibility criteria data
const eligibilityCriteria = [
  "Tashkent State Dental Institute offers a recognised program.",
  "They need to have an SSC and HSC, i.e. 10+2, from a recognised state board.",
  "HSC should be completed in Science subjects, including – biology, physics, and chemistry.",
  "The applicant should have completed his age of 17 years before 31st December of the year of admission.",
  "The candidate should have scored a minimum of 50% marks in his/her HSC boards from a recognised board of examination.",
  "Applicants must clear the NEET exam.",
];

const Eligibility = () => {
  return (
    <div className="flex flex-col lg:w-[95%] lg:mx-auto p-3  py-3  lg:py-6 ">
      {/* Title */}
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
        Eligibility Criteria to Study MBBS at Tashkent State Dental Institute
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        Here is the eligibility criteria to get admission to the university:
      </p>

      {/* Eligibility List */}
      <div className="text-[14px] sm:text-[16px] ml-3 py-4 bg-[#FFF9EA] flex flex-col gap-4">
        {eligibilityCriteria.map((point, index) => (
          <div key={index} className="flex gap-3">
            <Image
              src={vector}
              alt="vector"
              className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mt-1"
            />
            <p className="text-justify text-[14px] sm:text-[16px]">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eligibility;
