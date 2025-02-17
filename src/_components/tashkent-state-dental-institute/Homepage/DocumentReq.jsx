import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "First Year",
    subjects: [
      "Medical Chemistry, Fundamentals of Psychology, Histology, Bioorganic Chemistry, Cytology, Embryology, Human Anatomy, Elective Courses",
    ],
  },
  {
    year: "Second Year",
    subjects: [
      "Histology, Physiology, Human Anatomy, Biochemistry, Microbiology, Emergency Medicine, Patient Care, Embryology",
    ],
  },
  {
    year: "Third Year",
    subjects: [
      "Pharmacology, Pathomorphology, Pediatrics, Internal Medicine, General Surgery, Ecology, Radiology, Elective Courses, Biostatistics",
    ],
  },
  {
    year: "Fourth Year",
    subjects: [
      "Tuberculosis, Surgery, Obstetrics and Gynecology, Urology, Neurology, Ophthalmology, Narcology, Medical Psychology, Forensic Medicine, Social Medicine",
    ],
  },
  {
    year: "Fifth Year",
    subjects: [
      "Infectious Diseases, Oncology, Epidemiology, Gynecology, Traumatology, Medical Genetics, Social Medicine, Obstetrics, Clinical Immunology",
    ],
  },
];

const DocumentReq = () => {
  // Define the years corresponding to the columns in the original table

  // For each year, collect subjects from each row (each row represents a set of subjects by year)

  return (
    <>
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required at Tashkent State Dental Institute{" "}
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          The following documents are necessary at the time of admission to
          Tashkent State Dental Institute:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "10th Grade Mark Sheet",
            "12th Grade Mark Sheet",
            "NEET Scorecard",
            "Certificate of Physical Fitness",
            "Completed Application Form (to be submitted upon arrival in Uzbekistan)",
            "4 Passport-size Photographs (3x4)",
            "Proof of Citizenship (National Identity Card or Passport)",
            "Original Certificate confirming two years of education abroad (for candidates enrolled in general education programs overseas)",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Image
                src={vector}
                alt="vector"
                className="mt-1 h-[18px] w-[18px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 lg:w-[95%] ml-2 lg:mx-auto">
        <h2 className="text-[20px] lg:text-[28px] font-[700] text-[#C7183A] px-2 sm:px-0">
          Tashkent State Dental Institute - MBBS Course Syllabus
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          The complete year wise syllabus for studying MBBS at Tashkent State
          Dental Institute is as follows:
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
