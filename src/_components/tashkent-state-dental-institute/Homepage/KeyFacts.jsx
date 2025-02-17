import React from "react";
import Image from "next/image";

// Import Images
import keyfacts1 from "../../../../public/Images/keyfacts1.png";
import keyfacts2 from "../../../../public/Images/keyfacts2.png";
import keyfacts3 from "../../../../public/Images/keyfacts3.png";
import keyfacts4 from "../../../../public/Images/keyfacts4.png";

const KeyFacts = () => {
  const facts = [
    { icon: keyfacts1, number: 6, text: "No. of Faculties" },
    { icon: keyfacts2, number: 2000, text: "No. of Students" },
    { icon: keyfacts3, number: 10, text: "No. of Departments" },
    { icon: keyfacts4, number: "1:5", text: "Student-Faculty Ratio" },
  ];

  return (
    <div className="flex flex-col items-start lg:w-[95%] lg:mx-auto ml-3   py-4 ">
      {/* Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] mb-6 text-[#C7183A]">
        Key Facts About Tashkent State Dental Institute
      </h2>

      {/* Facts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center border border-[#C7183A] rounded-lg p-6 pt-10 shadow-md bg-white"
          >
            {/* Image Icon - Positioned on the top border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
              <Image src={fact.icon} alt={fact.text} width={50} height={50} />
            </div>

            {/* Number */}
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#C7183A] mt-6">
              {fact.number}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFacts;
