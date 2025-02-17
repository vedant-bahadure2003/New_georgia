import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";

const requiredDocuments = [
  "Faculty of Medical Science",
  "Faculty of Dentistry",
  "Faculty of Nursing",
  "Faculty of Surgery",
  " Faculty of Postgraduate Programs",
  " Faculty of Pharmacy",
];
const FacultiesOffered = () => {
  return (
    <div className="  lg:w-[95%] lg:mx-auto">
      <div className="w-full   py-6">
        <h2 className=" text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Faculties of Samarkand State Medical Institute
        </h2>

        {/* Faculty Boxes */}
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
    </div>
  );
};

export default FacultiesOffered;
