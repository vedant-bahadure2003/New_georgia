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
          Tashkent Pediatric Medical Institute Fees 2025{" "}
        </h2>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] text-black mb-6">
          At the Tashkent Pediatric Medical Institute, the total fees for a
          6-year MBBS program are approximately 21,000 USD. Other charges
          include a hostel fee of 700 USD/year for the MBBS program at this
          university.
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
        <div className="mt-4">
          <span id="Eligibility" className="text-black font-medium">
            Read More:
          </span>{" "}
          <Link href="/tashkent-pediatric-medical-institute/courses-and-fees">
            <button className="text-[#C7183A] hover:underline py-2 text-[14px] sm:text-[16px] font-[550] rounded-md ">
              TashPMI Courses and Fees
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
