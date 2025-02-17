import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const DocumentReq = () => {
  return (
    <div className=" flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white ">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Documents Required at Samarkand State Medical University
      </h2>

      <p className="text-justify font-[550] py-4 text-[14px] sm:text-[16px] text-black">
        The following documents are required at the time of admission to
        Samarkand State Medical University:
      </p>

      {/* Document List */}
      <div className="flex flex-col gap-4 text-[14px] sm:text-[16px]">
        {[
          "X, XII Mark Sheets, and notarised translation copy.",
          "Medical Fitness Certificate.",
          "X, XII Certificates and notarised translated copies.",
          "NEET Marksheet.",
          "Original Passport and notarised translation copy.",
          "Receipt of Tuition fee payment.",
          "6 photographs (3.5 x 4.5 cm).",
        ].map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Image
              src={vector}
              alt="vector"
              width={18}
              height={18}
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="mt-6">
        <button className=" text-black py-2 px-4 text-[14px] sm:text-[16px] rounded-md shadow-lg  w-full sm:w-auto">
          <span id="syllabus" className="text-[#C7183A] font-medium ">
            Read More:
          </span>{" "}
          Why Study MBBS at Samarkand State Medical Institute?
        </button>
      </div> */}
    </div>
  );
};

export default DocumentReq;
