import React from "react";

const feesData = [
  { year: "1st Year", tuition: "4,500 USD", hostel: "500 USD" },
  { year: "2nd Year", tuition: "4,500 USD", hostel: "500 USD" },
  { year: "3rd Year", tuition: "4,500 USD", hostel: "500 USD" },
  { year: "4th Year", tuition: "4,500 USD", hostel: "500 USD" },
  { year: "5th Year", tuition: "4,500 USD", hostel: "500 USD" },
  { year: "6th Year", tuition: "4,500 USD", hostel: "500 USD" },
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
    <div className="py-6 w-full max-w-5xl   mx-auto px-4">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  sm:text-left mb-4">
        Akaki Tsereteli State University MBBS Fee Structure 2025{" "}
      </h2>

      <p className="text-[14px] sm:text-[16px] text-justify mb-6">
        Akaki Tsereteli State University offers affordable and transparent fees
        to the students pursuing the MBBS course. The total fees for Akaki
        Tsereteli State University in Georgia typically range from USD 30,000
        for a 6-year course covering tuition, hostel charges, and extra costs
        like medical insurance and one-time deposits.
        <br /> <br /> Here is the detailed breakdown of the fees for the MBBS
        course:
      </p>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-black text-center text-xs sm:text-sm">
          <thead className="bg-[#FFF7EE] text-black">
            <tr className="text-[14px] sm:text-[16px] ">
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
            <tr className="bg-[#f8f9fa] font-bold">
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
      <div className="bg-[#FFF7EE] mt-5 p-3 text-[14px] sm:text-[16px] ">
        <p>
          <strong>Note:</strong> The MBBS tuition fees at Andijan State Medical
          Institute are subject to change.
        </p>
      </div>
    </div>
  );
};

export default FeeStructure;
