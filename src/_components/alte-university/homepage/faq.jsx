"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../../../public/Images/minus.png";
import Plus from "../../../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question: "What is the rank of Alte University in the world?",
    answer:
      "According to 4icu, Alte University has an overall ranking of 10,936 in the world and 33rd in the national ranking. Hence, in terms of the current situation, Alte University is one of the best medical schools in Georgia.",
  },
  {
    question: "Is Alte University government or private?",
    answer:
      "Alte University School of Medicine is a private university in Georgia.",
  },
  {
    question:
      "What is the medium of teaching for medicine programs at Alte University?",
    answer:
      "The medium of instruction for all the medical courses, including MBBS in Alte University, is English, which is most appropriate for Indian and other foreign students.",
  },
  {
    question: "Is the degree from Alte University Recognised in India?",
    answer:
      "The degree obtained from Alte University is recognised in India. The NMC approves the university, and graduates can practice in India after clearing the FMGE/NExT examination.",
  },
  {
    question: "What are the fees of MBBS at Alte Medical University?",
    answer:
      "The total fee for the MBBS course that is spread over 6 years at Alte University is $33,000, including hostel and tuition fees.",
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
      <h2 className="text-[22px] md:text-[28px] font-[700] text-[#C7183A]">
        Alte University - Important FAQs
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
