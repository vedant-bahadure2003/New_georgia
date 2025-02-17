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
        Tashkent State Dental Institute - MBBS Fee Structure 2025
      </h2>

      <p className="text-sm sm:text-base text-justify mb-6">
        At the Tashkent State Dental Institute, the total fees for the 6-year
        medical program are approximately 21,000 USD. This amount covers all the
        essential expenses a student will need during their studies. It includes
        tuition fees, which cover the cost of education, lectures, practical
        sessions, and exams. The annual hostel fees at Tashkent State Dental
        Institute in Uzbekistan are approximately 250 - 300 USD.
        <br /> <br />
        These fees typically cover accommodation, meals, and other essential
        services. In addition, the hostel and mess fees may also include medical
        insurance and visa extension costs, ensuring that students are fully
        covered for their stay in Uzbekistan. This comprehensive fee structure
        offers students a safe, affordable, and convenient living arrangement
        while they pursue their studies.
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
            <tr className="bg-[#f8f9fa] text-[14px] sm:text-[16px] font-bold">
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
          <strong>Note:</strong> The MBBS tuition fees at Tashkent State Dental
          Institute are subject to change.
        </p>
      </div>
    </div>
  );
};

export default FeeStructure;
