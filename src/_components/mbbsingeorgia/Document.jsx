import Image from "next/image";
import React from "react";
import rightsign from "../../../public/Images/vector.png";

const Document = () => {
  // Array of required documents
  const requiredDocuments = [
    "Copy of Passport and Invitation Letter, ",
    "10th Marksheet",
    "Birth Certificate and Medical Certificate ",
    "12th Marksheet",
    "NEET Certificate",
    "8 passport-size photographs",
  ];

  return (
    <>
      {/* Documents Required for MBBS in Uzbekistan */}
      <div id="document" className=" p-3 md:px-0  lg:w-[95%] lg:mx-auto ">
        <div className="flex flex-col justify-center items-start ">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  md:text-left">
            Document Required for MBBS in Georgia{" "}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[550]  md:text-left">
            Before enrolling, MBBS candidates in Georgia should ensure they have
            all necessary documents ready. Below is a list of essential document
            items.
          </p>
        </div>
        <div className="text-[14px] sm:text-[16px]  flex flex-col gap-2 mt-3">
          {requiredDocuments.map((document, index) => (
            <div
              key={index}
              className="flex gap-3 items-start sm:gap-4 justify-start"
            >
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />
              <p
                id="syllabus"
                className="text-[14px] sm:text-[16px] text-justify"
              >
                {document}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Document;
