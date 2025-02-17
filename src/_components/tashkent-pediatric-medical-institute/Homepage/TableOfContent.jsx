"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TableOfContent = () => {
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
    { title: "Key Facts", id: "keyfact", href: "#benefits" },
    { title: "Admission Process", id: "admission", href: "#admission" },
    { title: "Eligibility Criteria", id: "Eligibility", href: "#eligibility" },
    { title: "Document Required", id: "document", href: "#Document" },
    { title: "Syllabus", id: "syllabus", href: "#syllabus" },
    { title: "Intake&Deadline", id: "Intake", href: "#pilot-test" },
    { title: "Accrediation", id: "accrediation", href: "#duration" },
    { title: "CourseOffered", id: "skill-set", href: "#skill-set" },
  ];

  return (
    <div className="w-[100%] lg:w-[95%] lg:mx-auto p-3 ">
      <div
        className={`flex justify-between items-center border border-black bg-[#deffff] text-black font-[700] px-4 py-3 cursor-pointer rounded-md ${
          isOpen ? "rounded-b-none border-b-0" : ""
        }`}
        onClick={toggleContent}
      >
        <span className="text-sm md:text-base">Table of Content</span>
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="border border-black bg-[#e2ffff] rounded-b-lg shadow-md p-4 border-t-0">
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

export default TableOfContent;
