import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "1st Year",
    subjects: [
      "Medical Chemistry, Cytology Embryology, Histology, Elective Courses, Fundamentals of Psychology, Bioorganic Chemistry, Human Anatomy",
    ],
  },
  {
    year: "2nd Year",
    subjects: [
      "Human Anatomy , Biochemistry , Emergency Medicine, Embryology, Physiology, Microbiology, Patient Care",
    ],
  },
  {
    year: "3rd Year",
    subjects: [
      "Human Anatomy, Psychological Fundamentals, Embryology, Elective Courses, Medical Chemistry, Cytology, Bioorganic Chemistry",
    ],
  },
  {
    year: "4th Year",
    subjects: [
      "Embryology, Histology, Microbiology, Human Anatomy, Patient Care, Emergency Medicine, Biochemistry, Physiology",
    ],
  },
  {
    year: "5th Year",
    subjects: [
      "The areas of Obstetrics, Clinical Immunology, Epidemiology, Medical Genetics, Gynecology, Oncology",
    ],
  },
  {
    year: "6th Year",
    subjects: [" Clinical, Elective Courses"],
  },
];

const DocumentReq = () => {
  return (
    <>
      {/* Document Requirements Section */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-2 ml-3 bg-white">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required at Fergana Medical Institute of Public Health
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          Following documents are required at the time of admission to Fergana
          Medical Institute of Public Health:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "12th-grade mark sheet",
            "10th-grade mark sheet",
            "NEET scorecard",
            "Valid passport (original)",
            "Invitation letter from FMIPH",
            "Original birth certificate",
            "Health and medical certificate",
            "10-15 passport-sized photographs",
            "HIV test report",
            "Negative COVID-19 test report",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Image
                src={vector}
                alt="vector"
                className="mt-1 h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
              />
              <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Table */}
      <div className="mt-5 lg:w-[95%] ml-3 lg:mx-auto">
        <h2 className="text-[20px] lg:text-[28px] font-[700] text-[#C7183A] px-2 sm:px-0">
          Fergana Medical Institute of Public Health - MBBS Syllabus
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          Here is the complete MBBS course schedule at Fergana Medical Institute
          of Public Health, providing students with detailed information about
          their academic journey:
        </p>

        <div className="w-[95vw] max-w-full overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#C7183A] scrollbar-track-gray-100">
          <table className="w-full border-collapse border border-black text-[14px] sm:text-[16px] md:text-base">
            <thead>
              <tr className="bg-[#FFF7EE] border-black">
                <th className="px-4 py-2 border border-black font-semibold text-black text-center whitespace-nowrap">
                  Year
                </th>
                <th className="px-4 py-2 border border-black font-semibold text-black text-center whitespace-nowrap">
                  Subjects
                </th>
              </tr>
            </thead>

            <tbody>
              {syllabusData.map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                  <td className="px-4 py-2 border border-black text-center font-semibold">
                    {row.year}
                  </td>
                  <td className="px-4 py-2 border border-black text-left">
                    {row.subjects.map((subject, i) => (
                      <p key={i} className="mb-1">
                        {subject}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DocumentReq;
