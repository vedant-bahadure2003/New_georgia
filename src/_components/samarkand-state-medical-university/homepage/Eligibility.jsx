import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const eligibilityCriteria = [
  {
    id: 1,
    text: "Candidates should have scored 50% or above in 10+2 or any equivalent examination approved by a board of education in India.",
  },
  {
    id: 2,
    text: "Three Science subjects, namely, Physics, Chemistry, and Biology, should be covered in the 10+2 stage of education or an equivalent standard.",
  },
  {
    id: 3,
    text: "To be eligible for admission, the candidate should be 17 years of age as of 31st December of the same year.",
  },
  {
    id: 4,
    text: "Applicants should have been qualified under NEET as well.",
  },
];

const Eligibility = () => {
  return (
    <div className="flex flex-col bg-[#FFF9EA] py-6 ml-3 lg:py-10 p-5">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Eligibility Criteria to Study MBBS at Samarkand State Medical University
      </h2>

      <p className="text-justify font-medium py-4 text-[14px] sm:text-[16px]">
        The eligibility criteria for admission at Samarkand State Medical
        University are listed below:
      </p>

      <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-4">
        {eligibilityCriteria.map((criteria) => (
          <div key={criteria.id} className="flex gap-3">
            <Image
              src={vector}
              alt="Checkmark icon"
              className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
            />
            <p className="text-justify text-[14px] sm:text-[16px]">
              {criteria.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eligibility;
