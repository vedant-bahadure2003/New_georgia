import Image from "next/image";
import React from "react";
import rightsign from "../../../public/Images/vector.png";
import PassingPercentage from "./PassingPercentage";

const Syllabus = () => {
  // Dynamic data for the syllabus
  const syllabusData = [
    {
      semester: "1st Semester",
      subjects: [
        "Anatomy Part I, Embryology, Biochemistry, Molecular Biochemistry, Histology, Cytology, Genetics, Language, and Medical Terminology",
      ],
    },
    {
      semester: "2nd Semester",
      subjects: [
        "Immunology, Anatomy Part II, Physiology Part I, Medical Research, Clinical Biochemistry Part I, Lab Chemistry and History of Medicine, Language",
      ],
    },
    {
      semester: "3rd Semester",
      subjects: [
        "Physiology Part II, Biochemistry Part II, Anatomy Part III, Microbiology Part I, Bioethics and Communication Skills, Clinical Skills",
      ],
    },
    {
      semester: "4th Semester",
      subjects: [
        "Pharmacology Part I, Pathology, Physiology of Behaviour, Physiology Part III, Microbiology Part II",
      ],
    },
    {
      semester: "5th Semester",
      subjects: [
        "Surgery Part I, Internal Diseases and Clinical Examination Part I, Clinical Skills Part I, Systemic Pathology Part I, Behavioral Science, Pharmacology Part II",
      ],
    },
    {
      semester: "6th Semester",
      subjects: [
        "Surgery Part II, Systemic Pathology Part II, Pharmacology Part III, Biostatistics, Internal Diseases and Clinical Examination of Patients Part II, Radiology",
      ],
    },
    {
      semester: "7th Semester",
      subjects: [
        "Psychiatry, Neurology, Professional Pathologies, Internal Medicine Part I, Clinical Skills Part II, and Dentistry",
      ],
    },
    {
      semester: "8th Semester",
      subjects: [
        "Infectious Disease, Obstetrics, ECG and Sports Medicine, Surgery, Clinical Parasitology, ENT, Endocrinology",
      ],
    },
    {
      semester: "9th Semester",
      subjects: [
        "Internal Medicine Part II, Gynecology, Pediatrics Part I, Surgery, Dermatovenerology, Nutriology, Traumatology",
      ],
    },
    {
      semester: "10th Semester",
      subjects: [
        "Surgery Part II, Ophthalmology, Forensic Medicine, Clinical Pharmacology, Research Skills Part I, Pediatrics Part II, Clinical Hematology, Clinical Psychology and Pediatric Surgery",
      ],
    },
    {
      semester: "11th Semester",
      subjects: [
        "Pharmacotherapy, Epidemiology, Rehabilitation, Differential Diagnosis of Internal Diseases I, Public Health, Preventive Medicine, Plastic Surgery and Tuberculosis, Oncology",
      ],
    },
    {
      semester: "12th Semester",
      subjects: [
        "Surgery Part III, Critical Care and Anesthesiology, Differential Diagnosis of Internal Diseases Part II, Obstetrics and Gynecology, Toxicology and Emergency Medicine, Oncology, Neurosurgery and Vascular Surgery, Clinical Ethics and Legal Basis of Medical Practice, Plastic Surgery and Tuberculosis",
      ],
    },
  ];

  return (
    <div className="sm:rounded-lg p-4 mt-4">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] sm:text-left">
        MBBS Syllabus in Georgia (Semester-wise)
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550]">
        Students in MBBS Georgia must complete ten semesters of classroom
        instruction followed by a one-year internship. The curriculum includes
        physiology and pathology, pharmacology, microbial science, medical
        procedures, obstetrics and gynecology, and pediatrics.
      </p>

      {/* Dynamic Syllabus Table */}
      <table className="w-full bg-[#FFF7EE] text-sm sm:text-base text-left border border-black mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-[14px] sm:text-[16px] font-semibold border-black text-center">
              Semester
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
                {item.semester}
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

      {/* Total Duration of MBBS */}
      <div className="flex flex-col gap-5 mt-[30px] p-1">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] sm:text-left">
          Total Duration of MBBS in Georgia
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] sm:text-left">
          Georgia universities offer a six-year MBBS program. Here's the
          breakdown:
        </p>
        <div className="text-[14px] sm:text-[16px] flex flex-col gap-2">
          {[
            "Five Years of Classroom Instruction: The initial five years are dedicated to academic studies, covering foundational medical subjects like Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, and other essential disciplines.",
            "One Year of Clinical Internship: The final year is focused on practical training through an internship at affiliated hospitals. Students get the opportunity to apply their theoretical knowledge in real-world clinical environments under the guidance of experienced medical professionals.",
          ].map((durationItem, index) => (
            <div className="flex gap-2" key={index}>
              <Image
                src={rightsign}
                alt="vector"
                className="text-[16px] h-[18px] w-[18px] mt-1"
              />
              <p className="text-[14px] sm:text-[16px]">{durationItem}</p>
            </div>
          ))}
        </div>
      </div>
      <PassingPercentage />
    </div>
  );
};

export default Syllabus;
