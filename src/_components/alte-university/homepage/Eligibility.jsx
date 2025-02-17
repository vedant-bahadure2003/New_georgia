import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

// Eligibility criteria data
const eligibilityCriteria = [
  "The candidate’s Physics, Chemistry, and Biology (PCB) aggregate is not less than 50 per cent in the 12th grade.",
  "Applicants must have attained 18 years of age at the time of applying for admission.",
  "NEET passing score is a must.",
  "All international students require a valid passport and other documentation.",
  "The university may further require a birth certificate and a medical report.",
  "If necessary, an entrance interview will be an important component of the final selection.",
  "The university’s admissions office must approve applicants' documents before giving the final verdict.",
];

const Eligibility = () => {
  return (
    <div className="flex flex-col py-2 lg:py-4 p-2">
      {/* Title */}
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
        Eligibility Criteria to Study MBBS at Alte University
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        The students who want to apply for the MBBS course at Alte University
        would ensure that they fulfil the eligibility criteria provided by the
        university-
      </p>

      {/* Eligibility List */}
      <div className="text-[14px] sm:text-[16px] ml-3 py-4 bg-[#FFF9EA] flex flex-col gap-4">
        {eligibilityCriteria.map((point, index) => (
          <div key={index} className="flex gap-3">
            <Image
              src={vector}
              alt="vector"
              className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
            />
            <p className="text-justify text-[14px] sm:text-[16px]">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eligibility;
