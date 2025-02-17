import React from "react";

const feesData = [
  { year: "1st Year", tuition: "$5,500", hostel: "$500" },
  { year: "2nd Year", tuition: "$5,500", hostel: "$500" },
  { year: "3rd Year", tuition: "$5,500", hostel: "$500" },
  { year: "4th Year", tuition: "$5,500", hostel: "$500" },
  { year: "5th Year", tuition: "$5,500", hostel: "$500" },
  { year: "6th Year", tuition: "$5,500", hostel: "$500" },
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
    <div className="py-6 w-full lg:w-[95%] pr-4 lg:mx-auto">
      <div className="py-6 w-full mx-4">
        <div className="relative overflow-x-auto mx-auto">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
            Alte University - MBBS Fee Structure 2025
          </h2>
          <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
            Alte University is well-known for its exceptional education and
            cutting-edge programs, drawing students worldwide. Its MBBS course
            stands out for its affordable tuition, state-of-the-art facilities,
            and knowledgeable faculty.
            <br />
            <br />
            The total fees for a 6-year MBBS program at Alte University in
            Georgia for students are approximately USD 36,000, covering tuition,
            hostel, food, living expenses, and other costs.
            <br />
            <br />
            Here is the detailed breakdown of the fees for the MBBS course:
          </p>

          {/* Responsive Table Container */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[290px] sm:min-w-[390px] border border-black text-center text-[12px] sm:text-[14px] md:text-[16px]">
              {/* Table Header */}
              <thead className="odd:bg-[#FFF7EE] text-black">
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
                  <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
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
                <tr className="bg-[#f8f9fa] font-bold">
                  <td className="border border-black px-2 sm:px-4 py-2">
                    Total
                  </td>
                  <td className="border border-black px-2 sm:px-4 py-2">
                    ${totalTuition}
                  </td>
                  <td className="border border-black px-2 sm:px-4 py-2">
                    ${totalHostel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note Section */}
          <div className="w-full bg-[#FFF7EE] mt-5 p-3 text-justify text-xs md:text-sm">
            <p className="text-sm sm:text-[14px] leading-5">
              <strong>Note:</strong> The MBBS tuition fees at Alte University
              are subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
