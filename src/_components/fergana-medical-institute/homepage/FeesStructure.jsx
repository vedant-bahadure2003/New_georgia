import React from "react";
import Link from "next/link";

const FeesStructure = () => {
  // Dynamic data for courses and fees
  const coursesAndFees = [{ course: "MBBS", fee: "21,000 USD" }];

  return (
    <div className="py-6 lg:w-[95%] lg:mx-auto flex justify-center ml-3 lg:justify-start">
      <div className="relative overflow-x-auto bg-white  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Fergana Medical Institute of Public Health Fee Structure 2025
        </h2>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] text-black mb-6">
          The total cost for the 6-year MBBS course at Fergana Medical Institute
          of Public Health (FMIPH) in Uzbekistan is 21000 USD. This amount
          covers tuition fees as well as additional expenses like visa
          extension, government registration, airfare, food, and miscellaneous
          charges. The hostel fee is 750 USD per year. <br /> <br /> In total,
          the fees offer an affordable opportunity for aspiring medical students
          looking to pursue their education abroad without incurring excessive
          financial burdens.
        </p>

        {/* Dynamic Courses and Fees Table */}
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black mt-5">
          <thead>
            <tr className="bg-[#FFF7EE] border-black">
              <th className="px-4 py-2 border border-black font-semibold text-black text-center">
                Course
              </th>
              <th className="px-4 py-2 border border-black font-semibold text-black text-center">
                Total Fees
              </th>
            </tr>
          </thead>
          <tbody>
            {coursesAndFees.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-white">
                <td className="px-4 py-6 border border-black text-center ">
                  {item.course}
                </td>
                <td className="px-4 py-6 border border-black text-center">
                  {item.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Button */}
        <div className="mt-6">
          <button className="text-black py-2 flex flex-row gap-2  font-[700]  text-[14px] sm:text-[16px]  ">
            Read More:
            <Link href="/fergana-medical-institute-of-public-health/courses-and-fees">
              <span id="Eligibility" className="text-[#C7183A] hover:underline">
                FMIPH Uzbekistan Courses and fees.
              </span>{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
