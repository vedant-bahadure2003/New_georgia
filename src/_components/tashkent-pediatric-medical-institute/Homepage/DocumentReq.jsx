import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "1st Year",
    subjects: ["Anatomy, Histology"],
  },
  {
    year: "2nd Year",
    subjects: [
      "Anatomy, Biochemistry, Histology, Physiology, General Pathology, Cell Biology, Microbiology",
    ],
  },
  {
    year: "3rd Year",
    subjects: [
      "Forensic Medicine, Pharmacology, Family Health, Internal Medicine, Pathophysiology, Obstetrics & Gynaecology, Applied Epidemiology, Genetics, Principles of Clinical Medicine",
    ],
  },
  {
    year: "4th - 6th Year",
    subjects: [
      "Pediatrics, Oncology, Neurology & Psychiatry, ENT, Cardiology, Psychology, Gynaecology & Obstetrics, Emergency Medicine, Internal Medicine, General Surgery",
    ],
  },
];

const DocumentReq = () => {
  // Define the years corresponding to the columns in the original table

  // For each year, collect subjects from each row (each row represents a set of subjects by year)

  return (
    <>
      <div className="flex flex-col lg:w-[95%] lg:mx-auto  ml-3 bg-white">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required at Tashkent Pediatric Medical Institute
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          The following documents are necessary at the time of admission at
          Tashkent Pediatric Medical Institute:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "NEET Scorecard ",
            "Complete the application form, ",
            "10th Mark Sheet. ",
            "12th Mark Sheet. ",
            "Proof of payment of fees",
            "Financial proof (sufficient balance in the bank)",
            "Four photos (3x4) and a copy of your passport are needed.",
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
          Tashkent Pediatric Medical Institute - MBBS Syllabus{" "}
        </h2>
        <p className="text-justify  py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          Tashkent Pediatric Medical Institute provides an intensive 6-year MBBS
          program that combines theoretical knowledge with hands-on clinical
          training. Experienced faculty deliver this curriculum using
          state-of-the-art clinical laboratories and modern medical instruments.
          The complete syllabus for studying MBBS at Tashkent Pediatric Medical
          Institute is as follows:
        </p>

        {/* New Table Format: Two Columns (Year & Subjects) */}
        <div className="w-[95vw] max-w-full overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#C7183A] scrollbar-track-gray-100">
          {/* Dynamic Syllabus Table */}
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
