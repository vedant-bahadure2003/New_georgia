import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "1st Year",
    subjects: [
      "Anatomy, Physiology, Medical Genetics, Biochemistry, Molecular Biology, Histology & Embryology, History of Medicine.",
    ],
  },
  {
    year: "2nd Year",
    subjects: [
      "Haematology, Immunology, Biochemistry, Biophysics, Introduction to Public Health, Endocrine, Nanomedicine, Renal & Reproductive Systems.",
    ],
  },
  {
    year: "3rd Year",
    subjects: [
      "Neuroanatomy, Neurophysiology, Behaviour medicine, Pharmacology, Pathology, Intro to Clinical Diagnostics 2, Clinical Skills.",
    ],
  },
  {
    year: "4th Year",
    subjects: [
      "Pulmonology, Internal Medicine, Nephrology, Urology, General Surgery, System Biology, Hepatology, clinical radiology, and laboratory medicine.",
    ],
  },
  {
    year: "5th Year",
    subjects: [
      "Internal Medicine, Clinical Immunology, Dermatology, Stomatology, Ophthalmology, Emergency Medicine, Infectious Diseases, Forensic medicine, Medical Toxicology.",
    ],
  },
  {
    year: "6th Year",
    subjects: [
      "Gynaecology, Family Medicine 3, Pediatrics, Narcology, Clinical practices, Palliative care.",
    ],
  },
];

const DocumentReq = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required at Akaki Tsereteli State University
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          The admission process at Akaki Tsereteli State University will be
          complete when the following documents are submitted:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "The candidate must submit the filled application form",
            "Passport copy (valid)",
            "ID proof (Aadhar Card, PAN card, etc)",
            "NEET-UG scorecard",
            "The latest Passport photographs",
            "10th and 12th marksheets",
            "Character Certificate",
            "In case the documents are being submitted by someone other than the student, then a letter certifying the power of attorney is mandatory.",
            "Migration certificate",
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
          Akaki Tsereteli State University - MBBS Syllabus
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          The MBBS course syllabus at Akaki Tsereteli State University
          integrates theoretical knowledge and practical training in medical
          sciences, as outlined below:
        </p>

        {/* Syllabus Table */}
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
                    <ul className="list-inside">
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
