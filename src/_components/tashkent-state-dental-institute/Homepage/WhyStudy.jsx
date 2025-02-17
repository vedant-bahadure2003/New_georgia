import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start  ml-3 ">
      <div className=" flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
          Why Study MBBS at Tashkent State Dental Institute?{" "}
        </h2>

        {/* Description */}
        <p className="text-justify font-[550] text-[14px] sm:text-[16px]  pr-4 sm:pr-8 mt-2  ">
          Here are some key benefits of pursuing an MBBS degree at Tashkent
          State Dental Institute:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4  pr-4 sm:pr-8">
          {[
            "International competitions and research programs are invited to the students.",
            "Internships are offered to students by the university after their fifth year of work experience.",
            "The fees for this medicine program is relatively low when compared to several well-known universities",
            "Different opportunities are available to the students for classroom practice and for hands-on training.",
            "Located in the capital city of the nation, Tashkent. Urbanisation is well known here.",
            "Tashkent State Dental Institute, Faculty of Medicine has many positive ties with various foreign universities across the world.",
            "For students, it has safe and cosy dormitories. Besides accommodations, the university also provides its students with a highly advanced library.",
            "The teaching faculty of the institute is well-equipped and well-experienced.",
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
