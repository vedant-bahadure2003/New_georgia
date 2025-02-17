import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start ml-3 ">
      <div className="flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Why Study MBBS at Akaki Tsereteli State University?
        </h2>

        {/* Description */}
        <p className="text-justify font-[550] text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-2">
          Read below to know why Akaki University is the perfect choice for MBBS
          Course for you:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
          {[
            "Complete your MBBS in 6 years, including a practical 1-year internship.",
            "Get a globally recognized MBBS degree approved by NMC, WHO, and FAIMER.",
            "Study at affordable fees with a low cost of living in Georgia.",
            "English works as a connective language, so there’s no language barrier for international students.",
            "Enjoy modern facilities like advanced labs, digital tools, and smart classrooms.",
            "Be part of a welcoming community with 1,200+ Indian students already studying here.",
            "Learn from experienced professors who focus on practical and research-based education.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] sm:h-[18px] sm:w-[18px] mt-1"
              />
              <p className="text-justify">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
