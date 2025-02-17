"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import LeadFormModalPopup from "../lead-form/LeadFormModalPopup";
import Andijan from "../../../public/UniversityLogo/Andijan State Medical Institute.webp";
import Bukhara from "../../../public/UniversityLogo/Bukhara State Medical InstituTE.webp";
import Fergana from "../../../public/UniversityLogo/Fergana Medical Institute.webp";
import Samarkand from "../../../public/UniversityLogo/samarkand State.webp";
import Tashkent from "../../../public/UniversityLogo/Tashkent Medical Academy.webp";
// import TashkentDental from "../../../public/UniversityLogo/Tashkent State Dental Institute.webp";

const UniversityCard = ({ number, university, onApplyNow }) => {
  return (
    <div
      className="rounded-lg overflow-hidden mt-5 p-5 flex flex-col gap-4"
      style={{
        boxShadow:
          "0px 4px 5px rgba(156, 163, 175, 0.6), 0px -0px 5px rgba(156, 163, 175, 0.6)",
      }}
    >
      <h3 className="text-[16px] sm:text-[16px] font-semibold text-center md:text-left">
        {number}. {university.name}
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-center md:justify-start">
          <div className="h-[150px] w-[150px] md:h-[174px] md:w-[174px] relative">
            <Image
              src={university.logo}
              alt={university.name.toLowerCase()}
              className="object-contain rounded-lg"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="text-[14px] sm:text-[16px] list-disc p-3 space-y-1">
            {university.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <tbody>
            {university.info.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "odd:bg-[#FFF7EE]" : "even:bg-white"
                } border`}
              >
                <td className="text-[14px] sm:text-[16px] px-4 py-2 border border-black font-medium">
                  {row.label}
                </td>
                <td className="text-[14px] sm:text-[16px] px-4 py-2 border border-black">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-end sm:flex-row gap-3 mt-2">
        <button
          onClick={onApplyNow}
          className="bg-[#C7183A] w-full sm:w-[132px] h-[40px] rounded-lg text-white text-sm md:text-lg"
        >
          Apply Now
        </button>
        <Link href={university.link}>
          <button className="border border-black w-full sm:w-[132px] h-[40px] rounded-lg text-base">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

const UniversityList = () => {
  const [showModal, setShowModal] = useState(false);
  const universities = [
    {
      name: "Tbilisi State Medical University ",
      logo: Andijan,
      details: [
        "Tbilisi State Medical University Georgia was established in 1918. ",
        "Today, with over 10,000 students enrolled and about 25% foreigners enrolling in its MBBS programs, this university is a premier choice in Georgia and internationally.",
        " Students who graduated from Tbilisi State Medical University can be found working at leading healthcare facilities both domestically and abroad.",
      ],
      link: "#",
      info: [
        { label: "University Recognition", value: "WHO, NMC, FAIMER, ECFMG" },
        { label: "Established Year", value: "1918" },
        { label: "Eligibility", value: "10+2 with 50% marks, NEET" },
        { label: "Language of Instruction", value: "English" },
        { label: "Application Deadline", value: "1st Aug, 2025" },
      ],
    },
    {
      name: "Ilia State University",
      logo: Bukhara,
      details: [
        "Ilia State University (ILIAUNI) is Georgia's leading university, established in 2006 in Tbilisi.",
        "Recognized by WHO, NMC, FAIMER, and ECFMG, it offers a 5+1 year MBBS program in English.",
        "Known for cutting-edge facilities and world-class educational standards.",
      ],
      link: "#",
      info: [
        { label: "Established Year", value: "2006" },
        { label: "Course Duration", value: "5+1 Years" },
        { label: "Eligibility Criteria", value: "10+2 with 50% marks, NEET" },
        { label: "Language of Study", value: "English" },
        { label: "Last Date to Apply", value: "1st Aug, 2025" },
      ],
    },
    {
      name: "Akaki Tsereteli State University",
      logo: Fergana,
      details: [
        "Akaki Tsereteli State University of Georgia was established in 1930 and is one of the oldest state universities in Georgia.",
        "Recognized by WHO, NMC, FAIMER, and ECFMG, it offers a 5+1 year MBBS program in English.",
        "The university educates over 12,000 students across nine faculties.",
      ],
      link: "/akaki-tsereteli-state-university",
      info: [
        { label: "Established Year", value: "1930" },
        { label: "Course Duration", value: "5+1 Years" },
        { label: "Eligibility Criteria", value: "10+2 with 50% marks, NEET" },
        { label: "Language of Study", value: "English" },
        { label: "Last Date to Apply", value: "1st Aug, 2025" },
      ],
    },
    {
      name: "Geomedi Medical University",
      logo: Samarkand,
      details: [
        "Geomedi Medical University was established in 1998 by Professor Marina Pirtskhalava as an authorized higher education institution in Georgia.",
        "Recognized by WHO, NMC, FAIMER, and ECFMG, it offers a 5+1 year MBBS program in English.",
        "The university features modern infrastructure, including advanced laboratories and clinics.",
      ],
      link: "#",
      info: [
        { label: "Established Year", value: "1998" },
        { label: "Course Duration", value: "5+1 Years" },
        { label: "Eligibility Criteria", value: "10+2 with 50% marks, NEET" },
        { label: "Language of Study", value: "English" },
        { label: "Last Date to Apply", value: "1st Aug, 2025" },
      ],
    },

    {
      name: "Batumi Shota Rustaveli State University",
      logo: Tashkent,
      details: [
        "Batumi Shota Rustaveli State University was established in 1923 as a multifunctional medical school providing professional and research-based education.",
        "Recognized by WHO, NMC, FAIMER, and ECFMG, it offers a 5+1 year MBBS program in English.",
        "The institute offers various vocational, bachelor's, master's, and doctoral programs.",
      ],
      link: "#",
      info: [
        { label: "Established Year", value: "1923" },
        { label: "Course Duration", value: "5+1 Years" },
        { label: "Eligibility Criteria", value: "10+2 with 50% marks, NEET" },
        { label: "Language of Study", value: "English" },
        { label: "Last Date to Apply", value: "1st Aug, 2025" },
      ],
    },

    // {
    //   name: "Tashkent Pediatric Medical Institute",
    //   logo: TashkentDental,
    //   details: [
    //     "Established in 2014, Tashkent State Dental Institute is known for its rapid growth and high-quality medical education.",
    //     "Recognized by NMC and WHO, the institute offers a 6-year MBBS program in English, including a 1-year internship.",
    //     "It has a modern infrastructure with state-of-the-art classrooms, an air-conditioned auditorium, and a well-stocked library. ",
    //   ],
    //   link: "/tashkent-pediatric-medical-institute",
    //   info: [
    //     { label: "Established Year", value: "2014" },
    //     { label: "Course Duration", value: "6 Years (with 1-year internship)" },
    //     {
    //       label: "Eligibility Criteria",
    //       value: "50% in Physics, Chemistry, and Biology Aggregate, NEET",
    //     },
    //     { label: "Language of Study", value: "English" },
    //     { label: "Last Date to Apply", value: "1st Aug, 2025" },
    //   ],
    // },
    // Other universities here...
  ];

  return (
    <div>
      {universities.map((university, index) => (
        <UniversityCard
          key={index}
          number={index + 1}
          university={university}
          onApplyNow={() => setShowModal(true)}
        />
      ))}
      {showModal && (
        <LeadFormModalPopup
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default UniversityList;
