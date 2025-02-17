import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const syllabusData = [
  {
    year: "1st Year",
    subjects: [
      "Anatomy, Molecular Biology, Biochemistry, Medical Genetics, History of Medicine, Clinical and Professional Skills 1 & 2, Cardio & Respiratory System",
    ],
  },
  {
    year: "2nd Year",
    subjects: [
      "Immunology, Hematology, Biophysics, Clinical & Professional Skills 3, Endocrine, Intro to Public Health, Renal & Reproductive Systems, Nanomedicines, Philosophy",
    ],
  },
  {
    year: "3rd Year",
    subjects: [
      "Neurophysiology, Behavioural Medicine, Pharmacology, Pathology, Neuroanatomy, Physical Diagnosis, Clinical Skills, Medical Management",
    ],
  },
  {
    year: "4th Year",
    subjects: [
      "Pulmonology, Urology, General Surgery, Nephrology, Internal Medicine, General Surgery, Family Medicine, Clinical Radiology, Lab Medicine, System Biology",
    ],
  },
  {
    year: "5th Year",
    subjects: [
      "Clinical Immunology, Internal Medicine, Dermatology, Ophthalmology, Stomatology, Infectious Diseases, Forensic Medicine, and Medical Toxicology",
    ],
  },
  {
    year: "6th Year",
    subjects: [
      "Gynaecology, Family Medicine 3, Pediatrics, Narcology, Clinical Practice, Palliative Care",
    ],
  },
];

const DocumentReq = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Documents Required at Alte University
        </h2>

        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          Alte University is going to complete its admission procedures if the
          students can submit the following documents. Such documents include:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "Filled out the application form",
            "A valid copy of passport",
            "ID form bearing proof (Aadhar, PAN, etc.)",
            "NEET-UG card (if required)",
            "Passport size photographs",
            "Class 10th and 12th mark sheets",
            "Legal guardianship or authorisation proof (in case documents have been submitted by someone other than the student)",
            "Birth certificate",
            "Certificate of medical fitness",
            "Certificate for English language proficiency (if the candidate is not from a country where English is the first language)",
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

      {/* MBBS Syllabus Section */}
      <div className="mt-5  lg:w-[95%] ml-3 lg:mx-auto">
        <h2 className="text-[20px] lg:text-[28px] font-[700] text-[#C7183A] px-2 sm:px-0">
          Alte University - MBBS Syllabus
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black px-2 sm:px-0">
          The MBBS course syllabus at Alte University integrates theoretical
          knowledge and practical training in medical sciences. The table covers
          the syllabus for the entire MBBS course below:
        </p>

        <div className="max-w-full overflow-x-auto ">
          <table className="w-full table-fixed  border border-black border-collapse text-left text-sm sm:text-base">
            <thead className="bg-blaborder-black">
              <tr className="bg-[#FFF7EE]">
                <th className="border border-black p-2 w-1/4 whitespace-normal break-words">
                  Year
                </th>
                <th className="border border-black p-2 w-3/4 whitespace-normal break-words">
                  Subjects
                </th>
              </tr>
            </thead>
            <tbody>
              {syllabusData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                  <td className="border border-black p-2 align-top whitespace-normal break-words">
                    {item.year}
                  </td>
                  <td className="border border-black p-2 whitespace-normal break-words">
                    {item.subjects.join(", ")}
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
