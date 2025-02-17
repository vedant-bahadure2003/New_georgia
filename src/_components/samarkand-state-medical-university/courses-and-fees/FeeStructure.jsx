import React from "react";

const feesData = [
  { year: "1st Year", tuition: "3,400 USD", hostel: "500 USD" },
  { year: "2nd Year", tuition: "3,400 USD", hostel: "500 USD" },
  { year: "3rd Year", tuition: "3,400 USD", hostel: "500 USD" },
  { year: "4th Year", tuition: "3,400 USD", hostel: "500 USD" },
  { year: "5th Year", tuition: "3,400 USD", hostel: "500 USD" },
  { year: "6th Year", tuition: "3,400 USD", hostel: "500 USD" },
];
const FeeStructure = () => {
  const totalTuition = feesData.reduce(
    (sum, row) => sum + parseInt(row.tuition.replace(/\D/g, "")),
    0
  );
  const totalHostel = feesData.reduce(
    (sum, row) => sum + parseInt(row.hostel.replace(/\D/g, "")),
    0
  );
  return (
    <div className="py-4 w-full lg:w-[95%] lg:mx-auto">
      <div className="py-6 w-full">
        <div className="relative overflow-x-auto mx-auto">
          {/* Title */}
          <h2 className=" text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  md:text-left">
            Samarkand State Medical University - MBBS Fee Structure 2025
          </h2>
          <p className="text-justify w-full text-sm sm:text-[14px] leading-5 py-3">
            Samarkand State Medical University provides an affordable MBBS fee
            structure and a range of specialized faculties to support diverse
            medical education needs. The total fee is approximately 20,400 USD
            for six years. <br />
            This cost-effective structure includes both tuition fees and hostel
            fees at the university. <br />
            The fee structure is provided in the table below:
          </p>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border border-black text-center text-xs sm:text-sm">
              <thead className="bg-[#FFF7EE] text-black">
                <tr className="text-[14px] sm:text-[16px] ">
                  <th className="border border-black px-2 sm:px-4 py-2">
                    Year
                  </th>
                  <th className="border border-black px-2 sm:px-4 py-2">
                    Tuition Fees
                  </th>
                  <th className="border border-black px-2 sm:px-4 py-2">
                    Hostel Fees
                  </th>
                </tr>
              </thead>
              <tbody>
                {feesData.map((row, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white text-[14px] sm:text-[16px] even:bg-[#FFF7EE]"
                  >
                    <td className="border border-black px-2 sm:px-4 py-2">
                      {row.year}
                    </td>
                    <td className="border border-black px-2 sm:px-4 py-2">
                      {row.tuition}
                    </td>
                    <td className="border border-black px-2 sm:px-4 py-2">
                      {row.hostel}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#f8f9fa] font-bold text-[14px] sm:text-[16px]  ">
                  <td className="border border-black px-2 sm:px-4 py-2">
                    Total
                  </td>
                  <td className="border border-black px-2 sm:px-4 py-2">
                    {totalTuition} USD
                  </td>
                  <td className="border border-black px-2 sm:px-4 py-2">
                    {totalHostel} USD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note Section */}
          <div className="w-full bg-[#FFF7EE] mt-5 p-3 text-justify text-xs md:text-sm">
            <p>
              <strong>Note:</strong> The MBBS tuition fees at Samarkand State
              Medical University are subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
