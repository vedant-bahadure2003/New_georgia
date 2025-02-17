import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start  ml-3 ">
      <div className=" flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
          Why Study MBBS at Fergana Medical Institute of Public Health?
        </h2>

        {/* Description */}
        <p className="text-justify font-[550] text-[14px] sm:text-[16px]  pr-4 sm:pr-8 mt-2  ">
          Students from India can consider the FMIPH advantages before applying
          to this institute:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4  pr-4 sm:pr-8">
          {[
            "The duration of the MBBS course is 6 years, including 1 year of internship.",
            "The MBBS in Uzbekistan is relatively very affordable. It is approximately 3500 USD per year, 4 to 5 times cheaper than the private medical colleges in India.",
            "Uzbekistan is strategically close to India; one can fly directly to Tashkent on Uzbek Airways in only 3 hours.",
            "A significant number of students are already from India. It forms a great student community.",
            "The MBBS program delivers content in English, which enables both Indian and international students to participate.",
            "The cost of annual tuition amounts to USD 3,500, which makes medical education affordable for international students.",
            "Quality accommodation is available near the campus at affordable prices.",
            "The medical institution holds MCI/NMC approval and provides students with state-of-the-art facilities, including laboratories and a spacious library, together with medical staff.  ",
            "Every student receives individualized attention through the college's 15:1 student-teacher ratio.",
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
