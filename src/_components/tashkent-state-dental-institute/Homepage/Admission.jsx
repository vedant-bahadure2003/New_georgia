import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";
const Admission = () => {
  const admissionSteps = [
    {
      step: 1,
      description: " Apply Online.",
    },
    {
      step: 2,
      description: "Submit Application.",
    },
    {
      step: 3,
      description: "Application review by government authorities.",
    },
    {
      step: 4,
      description: "Acceptance letter from the University.",
    },
    {
      step: 5,
      description: "Visa Application.",
    },
  ];

  return (
    <div className=" flex flex-col lg:w-[95%] lg:mx-auto ml-3  ">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Tashkent State Dental Institute Admission Process{" "}
      </h2>

      {/* Description */}
      <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
        Admission to Tashkent State Dental Institute 2025 will begin in June and
        July for the September intake cycle. To seek admission to the MBBS
        program, students can apply directly through the institute's official
        website. For Indian nationals, a good NEET score is required to process
        admission procedures further.
      </p>

      {/* Document List */}
      <p className="font-bold text-[14px] sm:text-[16px] pb-3">
        Steps to Admission:
      </p>
      <div className="text-[14px] sm:text-[16px] flex flex-col gap-4 text-black">
        {admissionSteps.map((stepItem, index) => (
          <div key={index} className="flex  ">
            <p className="w-[60px] text-[#C7183A] font-[700] text-[14px] sm:text-[16px] ">
              Step {stepItem.step}:
            </p>
            <p className="  flex-1 text-[14px] sm:text-[16px]">
              {stepItem.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <span id="Eligibility" className=" text-black font-[550]">
          Read More:
        </span>{" "}
        <Link href="/tashkent-state-dental-institute/admission">
          {" "}
          <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base rounded-md font-[550] ">
            TSDI Tashkent Admission Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
