import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "@/_components/mbbsingeorgia/Planningform";
const HighLightTable = () => {
  return (
    <>
      <div
        id="HighLight"
        className="border border-[#C7183A] lg:w-[95%] lg:mx-auto ml-3 z-20 rounded-lg shadow-lg   mt-6 sm:mt-10 mb-7  sm:mb-10 bg-[#C7183A] "
      >
        {/* Header Section */}
        <div className="bg-[#C7183A] text-white rounded-t-lg p-4">
          <div className="flex items-center gap-2">
            <Image
              src={Star}
              alt="Star Icon"
              className="w-[20px] h-[20px] mb-16 lg:mb-10 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[28px] font-[700]">
              Samarkand State Medical University - Quick Highlights 2025
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] mt-1 sm:mt-2">
            Below is the table for quick highlights about the Samarkand State
            Medical University:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                {
                  key: "Course Duration",
                  value: "6 years (including 1 year internship)",
                },
                {
                  key: "Type",
                  value: "Government Institution",
                },
                { key: "Fees", value: "3400 USD/year (Approx.)" },
                { key: "Medium of Instruction", value: "English" },
                { key: "NEET ", value: "Medium of Instruction" },
                { key: "Indian Students", value: "1,500+" },
                {
                  key: " Rankings",
                  value: "Country - 3 ,    World - 5827",
                },
                { key: "Recognition", value: "NMC, WHO, FAIMER, UNESCO" },
                {
                  key: "Location",
                  value: "Samarkand, Uzbekistan",
                },
                {
                  key: "Year of Establishment",
                  value: "1930",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"}`}
                >
                  <td className="px-8 py-3 border border-[#C7183A]  text-[14px] sm:text-[16px]">
                    {row.key}
                  </td>
                  <td className="px-4 py-3 border border-[#C7183A]  text-[14px] sm:text-[16px]">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Section: Planning Form */}
      <div className=" ">
        <Planningform />
      </div>
    </>
  );
};

export default HighLightTable;
