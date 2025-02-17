"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../../../public/Images/minus.png";
import Plus from "../../../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question:
      "What is the duration of the MBBS program at the Fergana Medical Institute of Public Health?",
    answer:
      "The total duration of the MBBS course at FMIPH is 6 years, including 1 year of the internship.",
  },
  {
    question:
      "Is the medium of instruction English at Fergana Medical Institute of Public Health?",
    answer:
      "Yes, all classes, exams, and tests are conducted in English for all the students.",
  },
  {
    question:
      "Does Fergana Medical Institute of Public Health provide hostel facilities?",
    answer:
      "Yes, the university offers on-campus hostel facilities for both boys and girls. Rooms are well-furnished, and amenities include 24/7 security, kitchens for cooking, and laundry services. Students can also access an Indian mess for meals and enjoy a safe, comfortable stay.",
  },
  {
    question:
      "What are the eligibility criteria for MBBS admission at Fergana Medical Institute of Public Health?",
    answer:
      "To apply, students must be at least 17 years old and have completed 12th grade with Physics, Chemistry, and Biology as the main subjects. A valid NEET score is also required; the NEET scorecard should not be over three years old.",
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
        Fergana Medical Institute of Public Health - Important FAQs
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
