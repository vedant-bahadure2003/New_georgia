import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "@/_components/mbbsingeorgia/Planningform";

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
              className="w-[20px] h-[20px] mb-16 lg:mb-10 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[28px] font-[700] ">
              Alte University - Quick Highlights 2025
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] font-[550] mt-1 sm:mt-2">
            All the essential highlights for Alte University School of Medicine
            that you need are given below:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-3">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                {
                  key: "Duration",
                  value: "6 years (including 1 year internship)",
                },
                { key: "Intake", value: "September" },
                { key: "Type", value: "Private institution" },
                {
                  key: "NEET Eligibility",
                  value: "NEET score is mandatory for MBBS",
                },
                {
                  key: "Eligibility Criteria",
                  value:
                    "Minimum 55% in your 10+2 level exam PCB and in English",
                },
                { key: "Tuition Fees", value: "$5,500 USD annually" },
                { key: "Rankings", value: "Country - 33, World - 10936" },
                { key: "Medium of Instruction", value: "English" },
                { key: "IELTS/TOEFL", value: "Not required" },
                { key: "Recognition", value: "WHO, WFME and NMC" },
                {
                  key: "International Students",
                  value: "Nearly 2,500 students from 45 countries",
                },
                { key: "Location", value: "Tbilisi, Georgia" },
                { key: "Year of Establishment", value: "2002" },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"}`}
                >
                  <td className="px-8 py-3 border border-[#C7183A] font-medium text-[14px] sm:text-[16px]">
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
      <div className=" ">
        <Planningform />
      </div>
    </>
  );
};

export default HighLightTable;
