"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../../public/Images/minus.png";
import Plus from "../../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question: "Are MBBS Degrees from Georgia Valid in India?",
    answer:
      "Yes, MBBS degrees obtained from recognized medical universities in Georgia are recognized by the NMC. Each MBBS degree from such an institution meets all NMC regulations, as stated in its gazette.",
  },
  {
    question: "What Is the Cost of MBBS in Georgia?",
    answer:
      "Georgia offers more competitively-priced medical school fees than countries such as Australia or the US, with average fees ranging between USD 4,000 and USD 8,500 (INR 3.5 lacs to 7 lacs) annually for public universities, while it may rise up to USD 15,000 (INR 13 lacs) per year at private institutions.",
  },
  {
    question: "Are NEET tests necessary for Georgia MBBS applications?",
    answer:
      "Yes, the NEET exam is mandatory for Indian students seeking admission to Georgia MBBS programs.",
  },
  {
    question:
      "What Is the Minimum Percentage Required to Enroll in an MBBS Program in Georgia?",
    answer:
      "At least 50% marks must be achieved in 10+2 with Physics, Chemistry, and Biology as core subjects.",
  },
];

// Accordion Component
const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 text-[14px] sm:text-[16px] font-[550] cursor-pointer"
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
    <div className="w-[90%] md:w-[90%] mx-auto mt-[10px] md:mt-[21px]">
      {/* Heading */}
      <h2 className="text-[22px] md:text-[28px] font-[700] text-[#C7183A]">
        MBBS in Georgia - FAQs
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col gap-2 md:gap-4 divide-y w-[90%] md:w-[90%] md:p-0">
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
