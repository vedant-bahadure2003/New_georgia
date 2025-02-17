"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../../../public/Images/minus.png";
import Plus from "../../../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question: "What is the length of Tashkent Medical Academy's MBBS program?",
    answer:
      "At Tashkent Medical Academy, the full MBBS course lasts six years including one year for internship",
  },
  {
    question:
      "Are classes being conducted in English at Tashkent Medical Academy?",
    answer:
      "Yes, all classes, exams, and tests for students are held exclusively in English.",
  },
  {
    question: "Does Tashkent Medical Academy provide hostel facilities?",
    answer:
      "Yes, on-campus hostels for boys and girls are available, featuring 24/7 security, kitchens, laundry services, and an Indian mess.",
  },
  {
    question:
      "What are the eligibility criteria for Tashkent Medical Academy's MBBS admissions?",
    answer:
      "Students must be at least 17 years old, have successfully completed 12th grade with Physics, Chemistry, and Biology courses as subjects, and hold an NEET score not older than three years.",
  },
];

// Accordion Component
const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 text-[14px] sm:text-[16px] font-[550]  cursor-pointer"
      >
        <span>{question}</span>
        <Image src={isOpen ? Minus : Plus} alt="Toggle" className="w-5 h-5" />
      </p>
      {isOpen && (
        <p className="text-[14px] sm:text-[16px] text-gray-900">{answer}</p>
      )}
    </div>
  );
};

// FAQ Component
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[95%] lg:mx-auto py-8 p-4">
      {/* Heading */}
      <h2 className="text-[22px] md:text-[28px] font-[700] text-[#C7183A]   ">
        Tashkent Medical Academy - Important FAQs{" "}
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col gap-2 md:gap-4 divide-y  w-[90%] md:w-[90%]  p-3 md:p-0">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}
