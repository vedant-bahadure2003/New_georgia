import Image from "next/image";
import React from "react";
import Accrediation from "../../../public/Images/accrediation.png";

const Accreditation = () => {
  return (
    <div
      id="accrediation"
      className="bg-[#FFF9EA] w-[92%]   lg:w-[95%] lg:mx-auto rounded-md shadow-md shadow-gray-400 flex flex-col items-start justify-start ml-3 "
    >
      <h2 className="text-[#C7183A] pl-6 p-4 text-[22px] lg:text-[28px] font-[700] ">
        MBBS in Georgia - Accreditation & Recognition
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550] pl-6  ">
        The top universities of Georgia are recognised and accredited by various
        renowned medical bodies such as:
      </p>

      <div className="flex justify-center w-[100%]   items-center ">
        <div className="relative">
          <Image
            src={Accrediation}
            alt="img"
            className="w-[221px] h-[251px] sm:w-[261px] sm:h-[251px]"
          />
        </div>

        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            NMC (National Medical Commission)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            WHO (World Health Organisation)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Ministry of Education, Georgia,
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Educational Commission for Foreign Medical Graduates (ECFMG),
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            World Federation for Medical Education (WFME),
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Foundation for Advancement of International Medical Education and
            Research (FAIMER)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accreditation;
