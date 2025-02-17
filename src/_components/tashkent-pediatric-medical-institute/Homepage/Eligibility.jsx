import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

// Eligibility criteria data
const eligibilityCriteria = [
  "Students must first pass both their SSC and HSC (10+2) exams from an official state board before enrolling.",
  "Higher secondary education should consist of studies in science subjects like biology, physics, and chemistry. Candidates must be 17 years old when admitted.",
  "Furthermore, at least 50% of HSC boards administered by recognised boards must be achieved for admission to this level of schooling.",
  "Candidates must pass the National Eligibility Test (NEET).",
];

const Eligibility = () => {
  return (
    <div className="flex flex-col  py-2  lg:py-4 p-2">
      {/* Title */}
      <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
        Eligibility Criteria for Tashkent Pediatric Medical Institute{" "}
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        Tashkent Pediatric Medical Institute offers students with a recognised
        MBBS program. The applicant must be eligible:
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
