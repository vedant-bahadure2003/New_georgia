import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

// Eligibility criteria data
const eligibilityCriteria = [
  "Applicants must be at least 17 years old.",
  "Reserved category students (OBC, SC, ST) must have a minimum of 50% in their 12th-grade PCB exams.",
  "Physics, Chemistry, and Biology must be the core subjects taken in 12th grade with an aggregate of 40% marks.",
  "The candidate must have passed the NEET UG exam.",
  "NEET scorecards must not be more than three years old.",
];

const Eligibility = () => {
  return (
    <div className="flex flex-col py-2 lg:py-4 p-2">
      {/* Title */}
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
        Eligibility Criteria to Study MBBS at Tashkent Medical Academy
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        Indian students must fulfill the following criteria to seek admission to
        the MBBS program at Tashkent Medical Academy:
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
