import React from "react";

const feesData = [
  { year: "1st Year", tuition: "3,500 USD", hostel: "500 USD" },
  { year: "2nd Year", tuition: "3,500 USD", hostel: "500 USD" },
  { year: "3rd Year", tuition: "3,500 USD", hostel: "500 USD" },
  { year: "4th Year", tuition: "3,500 USD", hostel: "500 USD" },
  { year: "5th Year", tuition: "3,500 USD", hostel: "500 USD" },
  { year: "6th Year", tuition: "3,500 USD", hostel: "500 USD" },
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
    <div className="py-6 w-full max-w-5xl text  mx-auto px-4">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  sm:text-left mb-4">
        Tashkent Pediatric Medical Institute - MBBS Fee Structure 2025
      </h2>

      <p className="text-sm sm:text-base text-justify mb-6">
        Tashkent Pediatric Medical Institute offers an affordable MBBS fee
        structure along with a variety of specialised faculties to offer an
        excellent education to diverse medical applicants. The total cost of
        studying MBBS at Tashkent Pediatric Medical Institute for six years is
        21,000 USD. This amount consists of tuition fees, hostel charges, food
        and meals, living expenses, and other expenses for the student on
        average while studying MBBS at Tashkent Pediatric Medical Institute,
        Uzbekistan. <br /> <br />
        The fee structure is provided in the table below:
      </p>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-black text-center text-xs sm:text-sm">
          <thead className="bg-[#FFF7EE] text-black">
            <tr>
              <th className="border border-black px-2 sm:px-4 py-2">Year</th>
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
            <tr className="bg-[#f8f9fa] font-bold text-[14px] sm:text-[16px]">
              <td className="border border-black px-2 sm:px-4 py-2">Total</td>
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
      <div className="bg-[#FFF7EE] mt-5 p-3 text-xs sm:text-sm text-justify">
        <p>
          <strong>Note:</strong> The MBBS tuition fees at Tashkent Pediatric
          Medical Institute are subject to change.
        </p>
      </div>
    </div>
  );
};

export default FeeStructure;
