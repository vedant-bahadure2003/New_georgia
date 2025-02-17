import React from "react";
import Link from "next/link";
const FeesStructure = () => {
  // Dynamic data for courses and fees
  const coursesAndFees = [{ course: "MBBS", fee: "24,000 USD" }];

  return (
    <div className="py-6 lg:w-[95%] lg:mx-auto flex justify-center p-3 lg:p-0  lg:justify-start">
      <div className="relative overflow-x-auto bg-white  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A] mb-4">
          Samarkand State Medical University Fees 2025
        </h2>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] text-black mb-6">
          The fees for students at Samarkand State Medical University for a 6
          year MBBS course in Uzbekistan are around 24,000 USD. Studying at
          Samarkand State Medical University offers great value for Indian
          students, with affordable fees for both tuition and accommodation.
        </p>

        {/* Dynamic Courses and Fees Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] sm:text-[16px] text-left border border-black mt-5">
            <thead className="bg-[#FFF7EE] text-black">
              <tr>
                <th className="px-4 py-2 border border-black text-center font-semibold">
                  Course
                </th>
                <th className="px-4 py-2 border border-black text-center font-semibold">
                  Total Fees
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the courses and fees data */}
              {coursesAndFees.map((item, index) => (
                <tr
                  key={index}
                  className={`odd:bg-[#F8F9FA] even:bg-white ${
                    index % 2 === 0 ? "bg-[#F8F9FA]" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-4 text-center border border-black">
                    {item.course}
                  </td>
                  <td className="px-4 py-4 text-center border border-black">
                    {item.fee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional Button (If Needed) */}
        <div className="mt-6">
          <span id="Eligibility" className=" text-black font-[550]">
            Read More:
          </span>{" "}
          <Link href="/samarkand-state-medical-university/courses-and-fees">
            {" "}
            <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base rounded-md font-[550] ">
              SSMU Uzbekistan Fees Structure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
