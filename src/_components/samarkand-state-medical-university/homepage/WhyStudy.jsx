import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start lg:mt-20 ml-3 ">
      <div className=" flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
          Why study for an MBBS at Samarkand State Medical University?
        </h2>

        {/* Description */}
        <p className="text-justify font-semibold text-[14px] sm:text-[16px]  pr-4 sm:pr-8 mt-3 sm:mt-4">
          Below are some of the benefits of studying MBBS at Samarkand State
          Medical University:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "Affordable MBBS tuition fees of 4000 USD per year.",
            "Recognised globally by WHO, NMC, FAIMER, and UNESCO.",
            "Modern infrastructure with advanced classrooms, science labs, and libraries.",
            "Home to students from 15+ countries, encouraging cultural diversity.",
            "Safe and comfortable hostels with separate facilities for boys and girls.",
            "Convenient location with direct flights from major Indian cities to Samarkand International Airport.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
              />
              <p className="text-justify">{text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div id="keyfact" className=" mt-6  ">
          <button className="mt-3  text-black p-2 text-[14px] sm:text-[16px] font-medium rounded-md   shadow-lg ">
            <span className="text-[#C7183A] text-[14px] sm:text-[16px] font-medium ">
              Read More :
            </span>{" "}
            Why Study MBBS at Samarkand State Medical Institute?
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhyStudy;
