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
              className="w-[20px] h-[20px] mb-16 lg:mb-10 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[26px] font-[700] ">
              Tashkent Pediatric Medical Institute - Quick Highlights 2025{" "}
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] font-[550]  mt-1 sm:mt-2">
            Below is the table for quick highlights about the Tashkent Pediatric
            Medical Institute:
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                { key: "Intake for MBBS Course", value: "September - October" },
                {
                  key: "Basic Eligibility",
                  value: "50% in PCB for General",
                },
                { key: "NEET Exam", value: "Yes, it is compulsory" },
                {
                  key: "Annual Tuition Fees (Approx.)",
                  value: "3500 USD",
                },
                { key: "Type", value: "Government" },
                {
                  key: "Course Duration",
                  value: "6 years (including Internship)",
                },
                {
                  key: "Medium of Education",
                  value: "English",
                },
                {
                  key: "University Ranking",
                  value: "Country - 35  ,  World - 8993",
                },
                {
                  key: "University Recognition",
                  value: "Approved by NMC, WHO",
                },
                {
                  key: "Established",
                  value: "1972",
                },

                {
                  key: "Nearest Airport",
                  value: "Tashkent International Airport",
                },
                {
                  key: "Processing Time for MBBS Admission",
                  value: "25 - 30 days",
                },
                {
                  key: "Location",
                  value: "Tashkent, Uzbekistan",
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
