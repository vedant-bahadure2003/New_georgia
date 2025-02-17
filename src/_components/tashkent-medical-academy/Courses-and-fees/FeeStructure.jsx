import React from "react";

const FeeStructure = () => {
  // Calculate totals
  const numberOfYears = 6;
  const collegeFeePerYear = 3500;
  const hostelFeePerYear = 600;
  const totalCollegeFee = collegeFeePerYear * numberOfYears;
  const totalHostelFee = hostelFeePerYear * numberOfYears;

  return (
    <div className="py-4 w-full lg:w-[95%] lg:mx-auto">
      <div className="py-6 w-full">
        <div className="relative overflow-x-auto mx-auto">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
            Tashkent Medical Academy - MBBS Fee Structure 2025
          </h2>
          <p className="text-justify w-full text-[14px] sm:text-[16px] leading-5 py-3">
            Tashkent Medical Academy's 2025 MBBS program features an economic
            fee breakdown and features teaching departments dedicated to
            different medical learning needs. Students may pursue this program
            with ease at this institute. The total cost for a 6 year MBBS
            program at the university is 21,000 USD, which is very affordable in
            comparison to Indian medical universities.
            <br /> <br />
            International students benefit from high-quality education at
            affordable costs thanks to our flexible fee structure and
            budget-friendly options.
          </p>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left mt-5 border-collapse">
              <thead>
                <tr className="bg-[#FFF7EE]">
                  <th className="px-4 py-2 border border-gray-400 text-black">
                    Year
                  </th>
                  <th className="px-4 py-2 border border-gray-400 text-black">
                    Tution Fee
                  </th>
                  <th className="px-4 py-2 border border-gray-400 text-black">
                    Hostel Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(numberOfYears)].map((_, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-4 py-2 border border-gray-400 font-semibold">
                      {index + 1}
                      {index === 0
                        ? "st"
                        : index === 1
                        ? "nd"
                        : index === 2
                        ? "rd"
                        : "th"}{" "}
                      Year
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      {collegeFeePerYear} USD
                    </td>
                    <td className="px-4 py-2 border border-gray-400">
                      {hostelFeePerYear} USD
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-[#FFF7EE]">
                  <td className="px-4 py-2 border border-gray-400 font-semibold">
                    Total
                  </td>
                  <td className="px-4 py-2 font-bold border border-gray-400">
                    {totalCollegeFee} USD
                  </td>
                  <td className="px-4 py-2 font-bold border border-gray-400">
                    {totalHostelFee} USD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note Section */}
          <div className="w-full bg-[#FFF7EE] mt-5 text-[14px] sm:text-[16px]">
            <p>
              <strong>Note:</strong> The MBBS tuition fees at Tashkent Medical
              Academy are subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
