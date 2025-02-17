import React from "react";

const syllabusData = [
  {
    year: "First Year",
    subjects: [
      "Medical Chemistry",
      "Fundamentals of Psychology",
      "Histology",
      "Bioorganic",
    ],
  },
  {
    year: "Second Year",
    subjects: ["Histology", "Physiology", "Human Anatomy", "Biochemistry"],
  },
  {
    year: "Third Year",
    subjects: ["Pharmacology", "Paediatrics", "Internal Medicine", "Genera"],
  },
  {
    year: "Fourth Year",
    subjects: [
      "Tuberculosis",
      "Surgery",
      "Obstetrics and Gynecology",
      "Urology",
    ],
  },
  {
    year: "Fifth Year",
    subjects: ["Infectious Diseases", "Oncology", "Gynecology", "Traumatolog"],
  },
  {
    year: "Sixth Year",
    subjects: ["General Practice", "Elective courses"],
  },
];

export default function Home() {
  return (
    <div className="flex justify-center lg:w-[95%] lg:mx-auto lg:justify-start items-start bg-gray-50 ml-3">
      {/* Main Content Wrapper */}
      <div className="bg-white shadow-lg p-5 rounded-lg w-full">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-bold text-gray-800 mb-4 text-center">
          Andijan State Medicalll Institute - MBBS Course Syllabus
        </h2>
        <p className="text-black font-semibold text-center mb-6 sm:mb-8 text-[14px] sm:text-[16px]">
          The complete syllabus for studying MBBS at Andijan State Medical
          Institute is as follows:
        </p>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto w-full">
          {/* Table */}
          <table className="min-w-[600px] max-w-full border-collapse border border-gray-300 text-[14px] sm:text-[16px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300 text-black">
                  Year
                </th>
                <th className="px-4 py-2 border border-gray-300 text-black">
                  Subjects
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {syllabusData.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {data.year}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <ul className="list-disc list-inside">
                      {data.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>{subject}</li>
                      ))}
                    </ul>
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
