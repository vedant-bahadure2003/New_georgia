import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";

const Admission = () => {
  const admissionSteps = [
    {
      step: 1,
      description:
        " Complete the online application form on the university’s official website.",
    },
    {
      step: 2,
      description:
        "Upload and submit all necessary documents as instructed in the form.",
    },
    {
      step: 3,
      description:
        "After processing, the admission letter will be sent via email within two weeks.",
    },
    {
      step: 4,
      description:
        "Apply for a student visa by submitting the admission letter and passport to the Russian Embassy.",
    },
    {
      step: 5,
      description:
        "Once your visa is approved, proceed with booking your travel tickets.",
    },
  ];

  return (
    <div className="flex flex-col lg:w-[95%] lg:mx-auto ml-3 py-6">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Fergana Medical Institute of Public Health Admission Process 2025
      </h2>

      {/* Description */}
      <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
        Indian students need to follow a straightforward admission process for
        MBBS at Fergana Medical Institute of Public Health. Students find the
        admission procedure simple because of its straightforward nature.
      </p>
      <p className="font-[550]">Steps to take admission:</p>
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

      {/* Button */}
      <div className="mt-2">
        <button className="text-black py-2 flex flex-row gap-2  font-[700]  text-[14px] sm:text-[16px]  ">
          Read More:
          <Link href="/fergana-medical-institute-of-public-health/admission">
            <span id="Eligibility" className="text-[#C7183A] hover:underline">
              FMIPH Uzbekistan Admission Process
            </span>{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Admission;
