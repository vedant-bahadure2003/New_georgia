import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:w-[95%] lg:mx-auto lg:justify-start items-center lg:items-start  ml-3 ">
        <div className=" flex flex-col py-6 bg-white">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
            Why Study MBBS At Alte University?
          </h2>

          {/* Description */}
          <p className="text-justify font-[550] text-[14px] sm:text-[16px]  pr-4 sm:pr-8 mt-2  ">
            Alte University offers numerous advantages for students seeking
            quality education and a vibrant academic environment. Below are some
            benefits of studying an MBBS at Alte University:
          </p>

          {/* Content Section */}
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4  pr-4 sm:pr-8">
            {[
              "Well-developed academic facilities, a library, and more amenities are provided at the university.",
              "They are offered the best practical education from international medical professionals.",
              "Every teacher has 15 students in his class. Instructors can devote their full attention to each Student.",
              "The university has had international students in medicine for more than 20 years. Over 2100 international students are currently studying in the MBBS program.",
              "Several international organisations recognise Alte University.",
              "The newest campus of Alte University is located in the city centre, which is evident by just a single glance. To meet the students' needs, it is well-equipped.",
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
        </div>
      </div>
    </>
  );
};

export default WhyStudy;
