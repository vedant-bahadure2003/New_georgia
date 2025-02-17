"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../../../public/Images/minus.png";
import Plus from "../../../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question: "What are the fees for MBBS at Akaki Tsereteli State University?",
    answer:
      "The fees for MBBS at Akaki Tsereteli State University in Georgia are approximately $3,500 per year or around INR 2,69,500 per year.",
  },
  {
    question:
      "What is the duration of the MBBS course at Akaki Tsereteli State University?",
    answer:
      "The MBBS course at Akaki Tsereteli State University is 6 years long, including a one-year internship.",
  },
  {
    question: "How do I apply for MBBS at Akaki Tsereteli State University?",
    answer:
      "You need to fill out the online application form on the university’s official website, upload the required documents, and pay the course fee after receiving the offer letter.",
  },
  {
    question:
      "What is the process for visa application for international students?",
    answer:
      "International students must apply for a student visa after receiving the offer letter from the university. The visa processing usually takes 30 days.",
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
    <div className="lg:w-[95%] lg:mx-auto py-8 p-4">
      {/* Heading */}
      <h2 className="text-[22px] md:text-[28px] font-[700] text-[#C7183A]">
        Akaki Tsereteli State University - Important FAQs
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col gap-2 md:gap-4 divide-y w-[90%] md:w-[90%] p-3 md:p-0">
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
