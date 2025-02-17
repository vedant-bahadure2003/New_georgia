"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Minus from "../../public/Images/minus.png";
import Plus from "../../public/Images/plus.png";

// FAQ Data
const faqs = [
  {
    question:
      "How does Georgia Medi assist students with MBBS admissions abroad?",
    answer:
      "Georgia Medi offers complete support, including university selection, application assistance, documentation, visa processing, and pre-departure guidance.",
    isAccordionOpen: true,
  },
  {
    question:
      "Are the universities recommended by Georgia Medi internationally recognized?",
    answer:
      "Yes, we recommend only universities recognized by global bodies like WHO, NMC, and others, ensuring globally accepted medical degrees.",
    isAccordionOpen: false,
  },
  {
    question: "Is studying MBBS in Georgia affordable for Indian students?",
    answer:
      "Yes, Georgia provides high-quality medical education at affordable tuition fees, coupled with reasonable living costs, making it an excellent choice.",
    isAccordionOpen: false,
  },
  {
    question: "Can Georgia Medi help with visa and travel arrangements?",
    answer:
      "Absolutely! We provide assistance with visa processing, travel arrangements, and guidance to help students settle comfortably in Georgia.",
    isAccordionOpen: false,
  },
];

// Accordion Component
const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 text-[16px] lg:text-[18px] font-[500] cursor-pointer"
      >
        <span>{question}</span>
        <Image src={isOpen ? Minus : Plus} alt="Toggle" className="w-5 h-5" />
      </p>
      {isOpen && <p className="text-sm sm:text-base text-gray-700">{answer}</p>}
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
    <div className="w-[90%] md:w-[90%] mx-auto mt-[50px] md:mt-[71px]">
      <div className="bg-[url('/homeimage/FAQBG.png')] bg-cover bg-center">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[36px] font-semibold text-center">
          <span className="text-[#C7183A] ">F</span>requently{" "}
          <span className="text-[#C7183A] ">A</span>sked{" "}
          <span className="text-[#C7183A] ">Q</span>uestions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-2 md:gap-4 divide-y mt-5 md:mt-10 w-[90%] md:w-[80%] mx-auto p-3 md:p-0">
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
    </div>
  );
}
