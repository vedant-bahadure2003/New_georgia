import React from "react";
import YtFrame from "./YtFrame";

const Highlight = () => {
  const highlightsData = [
    { title: "Degree", detail: "MD (Equivalent to MBBS)" },
    { title: "Intake", detail: "September" },
    { title: "Duration", detail: "5+1 Years (Theoretical + Internship)" },
    {
      title: "Eligibility",
      detail: "50% Marks in PCB, NEET Mandatory",
    },
    { title: "Medium of Teaching", detail: "English" },
    {
      title: "Annual Fees",
      detail: "4000 USD - 8000 USD (3 Lacs - 7 Lacs INR)*",
    },
    {
      title: "Monthly Cost of Living",
      detail: "250 USD - 270 USD (20,000 - 25,000 INR)*",
    },
    {
      title: "Top Medical Universities",
      detail:
        "Alte University, Georgian National University SEU, University of Georgia Tbilisi and many more",
    },
    {
      title: "Recognition",
      detail: "WHO, FAIMER, NMC, Ministry of Education, Georgia",
    },
  ];

  return (
    <>
      <div id="HighLight" className="mt-5 p-2 ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          MBBS in Georgia - Quick Highlights 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] ">
          Below are the key points to remember while applying to study MBBS at
          Georgia:
        </p>

        {/* Table Section */}
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
            <tbody>
              <tr className="text-center font-[700] text-black ">
                <td className="px-4 py-2 border border-black">Category</td>
                <td className="px-4 py-2 border border-black">Details</td>
              </tr>
              {highlightsData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"
                  } border`}
                >
                  <td className="px-4 py-2 border border-black">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {item.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* YouTube Frame Section */}
        {/* <YtFrame /> */}
      </div>
    </>
  );
};

export default Highlight;
