import React from "react";

export default function Home() {
  const syllabus = [
    {
      year: "First Year",
      subjects:
        "Medical Chemistry, Cytology Embryology, Bioorganic Chemistry, Human Anatomy,  Fundamentals of Psychology, Histology, Elective Courses",
    },
    {
      year: "Second Year",
      subjects:
        "Human Anatomy, Biochemistry, Patient Care, Microbiology, Physiology,  Emergency Medicine, Embryology",
    },
    {
      year: "Third Year",
      subjects:
        "Human Anatomy, Cytology,  Psychological Fundamentals,  Medical Chemistry,  Embryology, Bioorganic Chemistry, and Elective Courses",
    },
    {
      year: "Fourth Year",
      subjects:
        "Embryology, Biochemistry,  Emergency Medicine, Microbiology, Human Anatomy, Physiology, Patient Care, Histology",
    },
    {
      year: "Fifth Year",
      subjects:
        "The areas of Obstetrics, Clinical Immunology, Medical Genetics, Gynecology, Oncology, Traumatology, and Epidemiology",
    },
    {
      year: "Sixth Year",
      subjects: "Elective Courses and General Practice",
    },
  ];

  return (
    <div className="flex justify-center lg:w-[95%] lg:mx-auto lg:justify-start items-start bg-gray-50 ml-3">
      {/* Main Content Wrapper */}
      <div className="bg-white  p-1  w-full">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4 ">
          Samarkand State Medical University - MBBS Syllabus
        </h2>
        <p className="text-black font-semibold  mb-6 sm:mb-8 text-[14px] sm:text-[16px]">
          The MBBS course syllabus at Samarkand State Medical University
          integrates theoretical knowledge and practical training in medical
          sciences in a structured way:
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#FFF7EE]">
                <th className="text-centre px-2 text-[14px] sm:text-[16px] font-[550] sm:px-4 py-2 border border-gray-300 text-black w-[20%] ">
                  Year
                </th>
                <th className="text-centre px-2 text-[14px] sm:text-[16px] font-[550] sm:px-4 py-2 border border-gray-300 text-black w-[80%]">
                  Subjects
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {syllabus.map(({ year, subjects }, index) => (
                <tr
                  key={index}
                  className={`odd:bg-white even:bg-[#FFF7EE] border text-[14px] sm:text-[16px] ${
                    index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"
                  }`}
                >
                  <td className="px-2 sm:px-4 text-[14px] sm:text-[16px] py-2 border border-gray-300 font-semibold">
                    {year}
                  </td>
                  <td className="px-2 sm:px-4 text-[14px] sm:text-[16px] py-2 border border-gray-300">
                    {subjects}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
