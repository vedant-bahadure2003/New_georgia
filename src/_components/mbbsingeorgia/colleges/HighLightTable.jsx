import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "../Planningform";

const HighLightTable = () => {
  return (
    <>
      <div
        id="HighLight"
        className="border border-[#C7183A] lg:w-[95%] lg:mx-auto ml-3 z-20 rounded-lg shadow-lg mb-7 sm:mb-10 bg-[#C7183A]"
      >
        {/* Header Section */}
        <div className="bg-[#C7183A] text-white rounded-t-lg p-4">
          <div className="flex items-center gap-2">
            <Image
              src={Star}
              alt="Star Icon"
              className="w-[20px] h-[20px] mb-16 lg:mb-2 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[26px] font-[700]">
              Akaki Tsereteli State University - Quick Highlights
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] font-[550] mt-1 sm:mt-2">
            All the essential highlights for Akaki Tsereteli State University
            are given below:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                { key: "Type", value: "Government institution" },
                {
                  key: "Duration",
                  value: "6 years (including 1-year internship)",
                },
                { key: "Fees", value: "$4500 USD/year" },
                {
                  key: "Eligibility",
                  value: "50% aggregate in PCB (Physics, Chemistry, Biology)",
                },
                { key: "Recognition", value: "NMC, WHO, FAIMER, UNESCO" },
                { key: "Medium of instruction", value: "English" },
                { key: "IELTS/TOEFL", value: "Not required" },
                { key: "NEET", value: "Qualifying marks required" },
                {
                  key: "Rankings",
                  value: "Country Rank - 10 | World Rank - 7803",
                },
                { key: "Indian students", value: "1200+" },
                { key: "Location", value: "Kutaisi, Georgia" },
                { key: "Year of Establishment", value: "1930" },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"}`}
                >
                  <td className="px-4 py-3 border border-[#C7183A] font-medium text-[14px] sm:text-[16px]">
                    {row.key}
                  </td>
                  <td className="px-4 py-3 border border-[#C7183A] text-[14px] sm:text-[16px]">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Section: Planning Form */}
      <div>
        <Planningform />
      </div>
    </>
  );
};

export default HighLightTable;
