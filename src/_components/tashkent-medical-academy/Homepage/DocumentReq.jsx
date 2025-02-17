import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "First Year",
    subjects: [
      "Medical Chemistry, Histology, Cytology Embryology, Elective Courses, Fundamentals of Psychology, Bioorganic Chemistry, Human Anatomy",
    ],
  },
  {
    year: "Second Year",
    subjects: [
      "Human Anatomy, Biochemistry, Emergency Medicine, Embryology , Physiology, Microbiology, Patient Care",
    ],
  },
  {
    year: "Third Year",
    subjects: [
      " Human Anatony, Physiology Fundamentals, Embryology, Elective Courses , Medical Chemistry,  Bioorganic Chemistry, Cytology ",
    ],
  },
  {
    year: "Fourth Year",
    subjects: [
      "Embryology, Histology, Microbiology, Human Anatomy,Patient Care, Emergency Medicine, Biochemistry, Physiology",
    ],
  },
  {
    year: "Fifth Year",
    subjects: [
      "The areas of Obstetrics, Clinical Immunology, Traumatology, Epidemiology  , Medical Genetics, Gynaecology, Oncology",
    ],
  },
  {
    year: "Sixth Year",
    subjects: ["Clinical, Elective Courses"],
  },
];

const DocumentReq = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-2 ml-3 bg-white">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required for Tashkent Medical Academy
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          When applying to TMA Uzbekistan, students need to provide the
          following documents:
        </p>
        <div className="flex flex-col gap-4">
          {[
            "12th-grade mark sheet",
            "10th-grade mark sheet",
            "NEET scorecard",
            "Valid passport (original)",
            "Invitation letter from Tashkent Medical Academy",
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
                width={18}
                height={18}
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 lg:w-[95%] ml-3 lg:mx-auto">
        <h2 className="text-[20px] lg:text-[28px] font-[700] text-[#C7183A] px-2 sm:px-0">
          Tashkent Medical Academy - MBBS Course Syllabus
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          The complete syllabus for studying MBBS at Tashkent Medical Academy is
          as follows:
        </p>
        <div className="w-[95vw] max-w-full overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#C7183A] scrollbar-track-gray-100">
          <table className="w-full bg-[#FFF7EE] text-sm sm:text-base text-left rtl:text-right border border-black mt-5">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-[14px] sm:text-[16px] font-semibold border-black text-center">
                  Year
                </th>
                <th className="px-4 py-2 border text-[14px] sm:text-[16px] font-semibold border-black text-center">
                  Subjects
                </th>
              </tr>
            </thead>
            <tbody>
              {syllabusData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                  <td className="text-[14px] sm:text-[16px] px-4 py-2 border border-black">
                    {item.year}
                  </td>
                  <td className="text-[14px] sm:text-[16px] px-4 py-2 border border-black">
                    <ul className=" list-inside">
                      {item.subjects.map((subject, subIndex) => (
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
    </>
  );
};

export default DocumentReq;
