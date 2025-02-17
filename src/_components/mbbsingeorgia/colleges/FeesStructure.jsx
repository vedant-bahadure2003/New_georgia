import React from "react";
import Link from "next/link";
const FeesStructure = () => {
  // Dynamic data for courses and fees
  const coursesAndFees = [{ course: "MBBS", fee: "30000 USD" }];

  return (
    <div className="py-6 lg:w-[95%] lg:mx-auto flex justify-center ml-3 lg:justify-start">
      <div className="relative overflow-x-auto bg-white  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Akaki Tsereteli State University Fees 2025
        </h2>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] text-black mb-6">
          The total MBBS fee at Akaki Tsereteli State University in Georgia for
          students is approximately USD 30,000 for the six-year program,
          covering tuition, hostel, and transportation expenses. <br /> <br />
          At{" "}
          <span className="font-bold">
            Akaki Tsereteli State University,
          </span>{" "}
          the MBBS fees provide affordability and quality education, which is
          approximately listed below:
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
          <Link href="/akaki-tsereteli-state-university/courses-and-fees">
            {" "}
            <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base rounded-md font-[550] ">
              ATSU Fees Structure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
