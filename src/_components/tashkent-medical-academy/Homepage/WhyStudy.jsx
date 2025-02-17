import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start ml-3">
      <div className="flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Why Study MBBS at Tashkent Medical Academy?
        </h2>

        {/* Description */}
        <p className="text-justify font-[550] text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-2">
          Before applying to Tashkent Medical Academy from India, prospective
          students should carefully consider its advantages:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
          {[
            "A typical MBBS course lasts six years, including an internship year.",
            "Uzbekistan offers relatively cost-effective MBBS degrees at approximately 3500 USD annually - that is 4 to 5 times less expensive than Indian private medical colleges!",
            "Uzbekistan is conveniently close to India; one can fly directly from New Delhi to Uzbek and then directly to Tashkent.",
            "Students hailing from India form a vibrant student community.",
            "The MBBS program delivers content in English, enabling both Indian and international students to benefit.",
            "Hostel and accommodation costs for international students generally total USD 600 annually, making living cost-effectively achievable.",
            "Medical Institute holds MCI/NMC approval and offers its students state-of-the-art facilities, such as laboratories and a spacious library, in addition to expert medical staff.",
            "Students receive individualised attention through the college's 4:1 student-teacher ratio.",
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
      </div>
    </div>
  );
};

export default WhyStudy;
