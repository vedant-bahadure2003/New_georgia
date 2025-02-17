import React from "react";

const feesData = [
  { year: "1st Year", tuition: "3,500 USD", hostel: "400 USD" },
  { year: "2nd Year", tuition: "3,500 USD", hostel: "400 USD" },
  { year: "3rd Year", tuition: "3,500 USD", hostel: "400 USD" },
  { year: "4th Year", tuition: "3,500 USD", hostel: "400 USD" },
  { year: "5th Year", tuition: "3,500 USD", hostel: "400 USD" },
  { year: "6th Year", tuition: "3,500 USD", hostel: "400 USD" },
];

const FeeStructure = () => {
  // Calculate total tuition and hostel fees
  const totalTuition = feesData.reduce(
    (sum, row) => sum + parseInt(row.tuition.replace(/\D/g, "")),
    0
  );
  const totalHostel = feesData.reduce(
    (sum, row) => sum + parseInt(row.hostel.replace(/\D/g, "")),
    0
  );

  return (
    <div className="py-6 w-full lg:w-[95%] pr-3 lg:mx-auto">
      <div className="py-6 w-full mx-3">
        <div className="relative overflow-x-auto mx-auto">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
            Fergana Medical Institute of Public Health - MBBS Fee Structure 2025
          </h2>
          <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
            The complete fee breakdown for Fergana Medical Institute of Public
            Health's 2025 MBBS program appears below. Students can pursue MBBS
            at this institute through an economic program structure alongside
            specialised teaching departments that serve different medical
            learning needs. International students receive quality education at
            affordable costs through the budget-friendly and comprehensive fee
            structure.
          </p>
          {/* Responsive Table Container */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[290px] sm:min-w-[390px] border border-black text-center text-[12px] sm:text-[14px] md:text-[16px]">
              {/* Table Header */}
              <thead className="odd:bg-[#FFF7EE] text-[14px] sm:text-[16px] text-black">
                <tr>
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

              {/* Table Body */}
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

                {/* Total Row */}
                <tr className="bg-[#f8f9fa] font-bold text-[14px] sm:text-[16px]">
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
            <p className="text-sm sm:text-[14px] leading-5">
              <strong>Note:</strong> The MBBS tuition fees at Fergana Medical
              Institute of Public Health are subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
