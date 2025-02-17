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
      "Is the degree from Samarkand State Medical University recognised in India?",
    answer:
      "The degree obtained from Samarkand State Medical University is recognised in India. The university is approved by the NMC, and graduates can practice in India after clearing the FMGE/NEXT examination.",
  },
  {
    question:
      "What is the medium of teaching for medicine programs at Samarkand State Medical University?",
    answer:
      "The medium of instruction for all the medical courses in Samarkand State Medical University is English, which is most appropriate for Indian and other foreign students.",
  },
  {
    question:
      "Is there Indian food available at Samarkand State Medical University?",
    answer:
      "Of course, the university also has Indian food. It also houses Indian food for the students through a canteen and common kitchen, which enable the students to cook their own food.",
  },
  {
    question: "What are the fees of MBBS at Samarkand University?",
    answer:
      "The total amount of fees for the MBBS course that is spread over 6 years at Samarkand State Medical University is 3400 USD annually .",
  },
  {
    question: "What is the rank of Samarkand Medical University in the world?",
    answer:
      "Samarkand State Medical University has an overall ranking of 5827th in the world and 3rd in the national ranking. Hence, according to the current situation, Samarkand State Medical University has a good reputation in the field of medical education.",
  },
  {
    question: "Is Samarkand State Medical University government or private?",
    answer:
      "Samarkand State Medical University is a government college established in 1930 which provides quality education at an affordable cost.",
  },
];

// Accordion Component
const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 text-[14px] sm:text-[16px] font-semibold cursor-pointer"
      >
        <span>{question}</span>
        <Image src={isOpen ? Minus : Plus} alt="Toggle" className="w-5 h-5" />
      </p>
      {isOpen && (
        <p className="text-[14px] sm:text-[16px] text-gray-800">{answer}</p>
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
    <div className="w-[90%] md:w-[90%] mx-4  mt-[50px] md:mt-[71px]">
      {/* Heading */}
      <h2 className="text-[22px] lg:text-[28px] text-[#C7183A] font-[700]">
        Samarkand State Medical University - Important FAQs
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col   gap-2 md:gap-4 mt-5 md:mt-10 w-[95%] md:w-[99%]  p-3 md:p-0">
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
