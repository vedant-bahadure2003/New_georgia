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
      "Is NEET required for admission to Tashkent State Dental Institute?",
    answer:
      "Yes, NEET is a necessity for Indian students to get into the Tashkent State Dental Institute. NEET is considered the eligibility criteria for pursuing dental courses overseas.",
  },
  {
    question:
      "What are the fees for the MBBS program at Tashkent State Dental Institute?",
    answer:
      "The entire 6-year MBBS program at Tashkent State Dental Institute costs 21,000 USD, which includes tuition fees alongside hostel fees and other necessary costs. ",
  },
  {
    question:
      " Is the degree from Tashkent State Dental Institute recognised in India?",
    answer:
      "Yes, the degree awarded by Tashkent State Dental Institute is recognised in India.",
  },
  {
    question: "Is Indian food available at Tashkent State Dental Institute?",
    answer:
      "Yes, Indian food is available. The TSDI Tashkent provides facilities such as a common kitchen and food options tailored for Indian students, ensuring they have access to familiar meals.",
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
        Tashkent State Dental Institute - Important FAQs{" "}
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
