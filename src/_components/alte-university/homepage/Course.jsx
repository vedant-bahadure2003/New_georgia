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
  // Get the maximum number of subjects across all years
  const maxSubjects = Math.max(
    ...syllabusData.map((data) => data.subjects.length)
  );

  return (
    <div className="flex justify-center lg:w-[95%] lg:mx-auto lg:justify-start items-start bg-gray-50 ml-3">
      {/* Main Content Wrapper */}
      <div className="bg-white shadow-lg p-5 rounded-lg w-full">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-gray-800 mb-4 text-center">
          Andijan State Medical Institute - MBBS Course Syllabus
        </h2>
        <p className="text-bkack font-semibold text-center mb-6 sm:mb-8 text-[14px] sm:text-[16px]">
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
                {syllabusData.map((data, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 border border-gray-300 text-black"
                  >
                    {data.year}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Loop through each row and display subjects for each year */}
              {Array.from({ length: maxSubjects }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {syllabusData.map((data, columnIndex) => (
                    <td
                      key={columnIndex}
                      className="px-4 py-2 border border-gray-300"
                    >
                      {/* Display the subject if it exists for this row, otherwise leave blank */}
                      {data.subjects[rowIndex] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
