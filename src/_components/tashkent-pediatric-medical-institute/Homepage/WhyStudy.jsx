import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start  ml-3 ">
      <div className=" flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
          Why Study MBBS at Tashkent Pediatric Medical Institute?
        </h2>

        {/* Description */}
        <p className="text-justify font-[550] text-[14px] sm:text-[16px]  pr-4 sm:pr-8 mt-2  ">
          Here are some key benefits of pursuing an MBBS degree at Tashkent
          Pediatric Medical Institute:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4  pr-4 sm:pr-8">
          {[
            "Tashkent Pediatric Medical Institute is certified by both the World Health Organization and the National Medical Commission.",
            "The MBBS course is taught using English as its language of instruction. ",
            "It's one of Uzbekistan's premier institutions offering pediatric education.",
            "Graduates can quickly secure employment in any Uzbek hospital upon obtaining a degree at Tashkent Pediatric Medical Institute.",
            "Its internationally recognised degrees allow graduates to pursue careers worldwide.",
            "Tashkent Pediatric Medical Institute's staff of professionals offer student attention.",
            "The Institute strictly prohibits any form of racial, ethnic or gender discrimination.",
            "NEET remains their only entrance exam.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mt-1"
              />
              <p className="text-justify">{text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div id="keyfact" className=" mt-6  ">
          <button className="mt-3  text-black p-2 text-xs sm:text-sm font-medium rounded-md   shadow-lg ">
            <span className="text-[#C7183A] font-medium ">Read More :</span> Why
            Study MBBS at Andijan State Medical Institute?
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhyStudy;
