import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";

const Admission = () => {
  const admissionSteps = [
    {
      step: 1,
      description:
        "Complete an online application form on the university's official website before arriving for interviews at their chosen program.",
    },
    {
      step: 2,
      description:
        "Upload and submit all required documents as instructed on the form. After processing, an admission letter will be delivered via email within two weeks.",
    },
    {
      step: 3,
      description:
        "When applying for a student visa at the Embassy, bring both your admission letter and passport with you to make your submission.",
    },
    {
      step: 4,
      description:
        "Once your visa has been approved, proceed with booking travel tickets.",
    },
  ];
  return (
    <div className="flex flex-col lg:w-[95%] lg:mx-auto ml-3 py-6">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Tashkent Medical Academy Admission Process 2025
      </h2>

      {/* Description */}
      <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
        Indian students wishing to enroll at Tashkent Medical Academy need only
        follow an easy admissions process in order to complete an MBBS program
        there. Students find the admission procedure straightforward.
      </p>

      {/* Steps for Admission */}
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

      <div className="mt-2">
        <span id="Eligibility" className=" text-black font-[550]">
          Read More:
        </span>{" "}
        <Link href="/tashkent-medical-academy/admission">
          {" "}
          <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base rounded-md font-[550] ">
            TMA Uzbekistan Fees Structure
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
