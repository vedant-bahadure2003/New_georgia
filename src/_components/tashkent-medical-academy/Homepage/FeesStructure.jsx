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
          Tashkent Medical Academy Fees 2025
        </h2>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] text-black mb-6">
          Tashkent Medical Academy in Uzbekistan charges a total cost of 21,000
          USD for its six-year MBBS course, which covers tuition fees as well as
          additional expenses such as visa extension, government registration
          fees, medical costs, and miscellaneous charges such as food. Hostel
          fees totaling 600 are extra expenses. <br /> <br />
          Overall, these fees offer an affordable solution to medical students
          looking to pursue their studies abroad without incurring excessive
          financial costs.
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
              <tr key={index} className="odd:bg-[#FFF7EE] even:bg-white">
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
          <span id="Eligibility" className=" text-black font-[550]">
            Read More:
          </span>{" "}
          <Link href="/tashkent-medical-academy/courses-and-fees">
            {" "}
            <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base  font-[550] ">
              TMA Uzbekistan Fees Structure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
