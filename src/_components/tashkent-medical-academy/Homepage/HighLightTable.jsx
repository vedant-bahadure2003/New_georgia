import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "../../mbbsingeorgia/Planningform";

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
              className="w-[20px] h-[20px] mb-10 lg:mb-2 sm:w-[25px] sm:h-[25px]"
            />
            <h2 className="text-[22px] lg:text-[26px] font-[700]">
              Tashkent Medical Academy - Quick Highlights 2025
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] font-[550] mt-1 sm:mt-2">
            Students interested in pursuing an MBBS degree at the Tashkent
            Medical Academy in Uzbekistan are encouraged to explore the
            program's key highlights before enrolling.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto p-4">
          <table className="w-full border-collapse border border-[#C7183A] text-left">
            <tbody>
              {[
                { key: "Admission intakes", value: "September" },
                { key: "Type", value: "Government" },
                { key: "Tuition Fee (Approx.)", value: "3500 USD/Year" },
                {
                  key: "Eligibility Criteria",
                  value: "50% in Physics, Chemistry and Biology Aggregate",
                },
                {
                  key: "NEET Examination",
                  value: "Yes (with qualifying marks)",
                },
                {
                  key: "Ranking",
                  value: "Country Rank - 17 | World Rank - 7463",
                },
                {
                  key: "Accreditation by",
                  value:
                    "WHO, NMC, UNESCO and medical council of other countries",
                },
                {
                  key: "Course Duration",
                  value: "5 years + 1-year Internship",
                },
                { key: "Medium of Teaching", value: "Fully English Medium" },
                { key: "Location", value: "Tashkent, Uzbekistan" },
                { key: "Established Year", value: "2005" },
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
