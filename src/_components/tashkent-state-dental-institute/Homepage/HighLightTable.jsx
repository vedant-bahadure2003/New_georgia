import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "../../mbbsingeorgia/Planningform";
const HighLightTable = () => {
  return (
    <>
      <div
        id="HighLight"
        className="border border-[#C7183A] lg:w-[95%] lg:mx-auto ml-3 z-20 rounded-lg shadow-lg     mb-7  sm:mb-10 bg-[#C7183A] "
      >
        {/* Header Section */}
        <div className="bg-[#C7183A] text-white rounded-t-lg p-4">
          <div className="flex items-center gap-2">
            <Image
              src={Star}
              alt="Star Icon"
              className="w-[20px] h-[20px] mb-16 lg:mb-0 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[26px] font-[700] ">
              Tashkent State Dental Institute - Quick Highlights 2025{" "}
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] font-[550]  mt-1 sm:mt-2">
            Below is the table for quick highlights about the Tashkent State
            Dental Institute:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                { key: "Intake for MBBS Course", value: "September - October" },
                {
                  key: "Recognition",
                  value: "NMC and WHO Approved",
                },
                {
                  key: "Eligibility",
                  value: "50% in Physics, Chemistry and Biology Aggregate",
                },
                {
                  key: "Annual Tuition Fees (Approx.)",
                  value: "3500 USD",
                },
                { key: "Medium of Teaching ", value: "English " },
                {
                  key: "Course Duration",
                  value: "6 Years (with 1-year internship)",
                },
                {
                  key: "NEET",
                  value: "Yes, Compulsory",
                },
                {
                  key: "University Ranking",
                  value: "Country - 62 , World - 10775",
                },
                {
                  key: "Type ",
                  value: "Government ",
                },
                {
                  key: "Year of Establishment ",
                  value: "2014",
                },
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
      <div className=" ">
        <Planningform />
      </div>
    </>
  );
};

export default HighLightTable;
