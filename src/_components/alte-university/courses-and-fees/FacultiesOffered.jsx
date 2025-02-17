import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";
import vector from "../../../../public/Images/vector.png"; // ✅ Importing vector properly

const FacultiesOffered = () => {
  return (
    <>
      {/* Faculties at Alte University Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          Faculties at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3 md:text-left">
          Alte University provides diversified programs of specialization at
          various faculties to deliver a complete education in the medical field
          and others:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "School of Business",
            "International School of Medicine",
            "School of Law and Social Sciences",
            "School of Information Technology",
            "Faculty of Engineering",
            "Faculty of Humanities and Social Sciences",
            "Faculty of Natural and Applied Sciences",
            "Faculty of Agricultural Sciences",
            "Faculty of Arts and Design",
            "Faculty of Economics and Finance",
          ].map((text, index) => (
            <div
              id="accrediation"
              key={index}
              className="flex items-start gap-2"
            >
              <Image
                src={vector}
                alt="Vector Icon"
                width={16} // Explicit width
                height={16} // Explicit height
                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
              />
              <p className="text-justify text-[14px] sm:text-[16px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FacultiesOffered;
