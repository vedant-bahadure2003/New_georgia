import Image from "next/image";
import React from "react";

import vector from "../../../../public/Images/vector.png";

const FacultiesOffered = () => {
  return (
    <div className="lg:w-[95%] w-[90%]  lg:mx-auto">
      <div className="w-full mx-4 ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Faculties of Fergana Medical Institute of Public Health
        </h2>

        <div className="flex flex-col gap-4">
          {[
            "Faculty of General Medicine",
            "Faculty of Preventive Medicine",
            "Faculty of Higher Nursing",
            "Faculty of Traditional Medicine",
            "Faculty of Professional Education",
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
      </div>
    </div>
  );
};

export default FacultiesOffered;
