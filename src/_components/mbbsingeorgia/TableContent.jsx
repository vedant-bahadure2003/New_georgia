"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const topics = [
    {
      title: "MBBS in Uzbekistan - Quick Highlights",
      id: "HighLight",
      href: "HightLight",
    },
    { title: "WhyStudy", id: "whystudy", href: "#benefits" },
    { title: "FeesStructure", id: "fees", href: "#admission" },
    { title: "Eligibility Criteria", id: "Eligibility", href: "#eligibility" },
    { title: "Document Required", id: "document", href: "#Document" },
    { title: "Syllabus", id: "syllabus", href: "#syllabus" },
    { title: "Top Universities", id: "top", href: "#pilot-test" },
    { title: "Accrediation", id: "accrediation", href: "#duration" },
    { title: "Course Offered", id: "course", href: "#skill-set" },
    { title: "Hostel Faculty", id: "hostel", href: "#scholarships" },
  ];

  return (
    <div className="w-[100%]">
      <div
        className={`flex justify-between items-center border border-black bg-[#d6eaff] text-black font-[700] px-4 py-3 cursor-pointer rounded-md ${
          isOpen ? "rounded-b-none border-b-0" : ""
        }`}
        onClick={toggleContent}
      >
        <span className="text-sm md:text-base">Table of Content</span>
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="border border-black bg-[#d6eaff] rounded-b-lg shadow-md p-4 border-t-0">
          <ul className="list-decimal list-inside text-gray-700 space-y-1 text-sm md:text-base">
            {topics.map((topic, index) => (
              <li key={index}>
                <a
                  href={`#${topic.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TableContent;
