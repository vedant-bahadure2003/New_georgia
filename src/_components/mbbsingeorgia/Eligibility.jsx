import React from "react";
import rightsign from "../../../public/Images/vector.png";
import Image from "next/image";

const Eligibility = () => {
  const eligibilityCriteria = [
    {
      text: "Students need to turn 17 years old before December 31st of the admission year without any age restriction applied. ",
    },
    {
      text: "The National Eligibility Test, or NEET, serves as an essential requirement for Indian students who want to study MBBS at Georgia medical schools before they can proceed with their admission process.",
    },
    {
      text: "Students need to score at least 50% marks during their 10+2 studies when physics, chemistry, and biology serve as fundamental subjects.",
    },
  ];

  return (
    <>
      {/* Eligibility Criteria for MBBS in Uzbekistan */}
      <div className="lg:w-[95%] lg:mx-auto mt-3 p-3 lg:p-0 ">
        <div className="gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
            Eligibility Criteria for MBBS Admission in Georgia{" "}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[550]  md:text-left">
            The entry requirements for MBBS universities in Georgia might follow
            separate standards. Most colleges require candidates to fulfill
            these general admission criteria:
          </p>
        </div>
        <div className=" mt-3">
          <div className="text-[14px] sm:text-[16px] flex flex-col gap-3 md:gap-2">
            {eligibilityCriteria.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src={rightsign}
                  alt="vector"
                  className="h-[18px] w-[18px] mt-1"
                />
                <p className="flex gap-2 text-[14px] sm:text-[16px] text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
