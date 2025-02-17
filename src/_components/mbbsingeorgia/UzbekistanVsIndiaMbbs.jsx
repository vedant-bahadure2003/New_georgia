import React from "react";

const GeorgiaVsIndiaMbbs = () => {
  const comparisonData = [
    {
      title: "Course Duration",
      georgia: "6 years (5 years academic + 1-year internship)",
      india: "5.5 years (4.5 years study + 1-year paid internship)",
    },
    {
      title: "Degree Awarded",
      georgia: "MD (Doctor of Medicine)",
      india: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
    },
    {
      title: "Eligibility Criteria",
      georgia: "NEET qualification required",
      india: "NEET qualification required",
    },
    {
      title: "Admission Process",
      georgia: "Direct application process",
      india: "NEET exam followed by centralized counseling",
    },
    {
      title: "Teaching Language",
      georgia: "English",
      india: "English",
    },
    {
      title: "Annual Tuition Fees",
      georgia: "$4,000 - $7,000 (Approx. ₹3.3 - ₹5.8 Lakh)",
      india: "$75,000 - $85,000 (Approx. ₹54 - ₹70 Lakh)",
    },
    {
      title: "Cost of Living",
      georgia: "Around $250/month (₹20,000 - ₹25,000)",
      india: "Around $200/month (₹15,000 - ₹20,000)",
    },
    {
      title: "Learning Approach",
      georgia: "European-style curriculum with theory and practical exposure",
      india: "Theoretical knowledge combined with hands-on training",
    },
    {
      title: "Career Opportunities",
      georgia: "Work as a doctor in Georgia or pursue PG studies abroad",
      india:
        "Higher career prospects in corporate and government hospitals, with the option to establish a private clinic",
    },
  ];

  return (
    <div className="py-6 px-3 lg:w-[95%] lg:mx-auto sm:px-6 md:px-0">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        MBBS in Georgia vs MBBS in India
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3">
        Studying medicine in both Georgia and India is a popular choice among
        Indian students, but there are significant differences between the two
        options.
      </p>

      {/* Comparison Table */}
      <table className="w-full text-[14px] sm:text-[16px] text-left border border-black mt-4">
        <thead>
          <tr className="bg-[#FFF7EE]">
            <th className="px-3 py-2 border border-black text-center">
              Particulars
            </th>
            <th className="px-3 py-2 border border-black text-center">
              MBBS in Georgia
            </th>
            <th className="px-3 py-2 border border-black text-center">
              MBBS in India
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-[#FFF7EE] border">
              <td className="px-3 py-2 border font-bold border-black">
                {item.title}
              </td>
              <td className="px-3 py-2 border border-black">{item.georgia}</td>
              <td className="px-3 py-2 border border-black">{item.india}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeorgiaVsIndiaMbbs;
