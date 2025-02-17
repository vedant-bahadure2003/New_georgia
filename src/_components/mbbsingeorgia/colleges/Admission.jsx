import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";

const Admission = () => {
  return (
    <div className=" flex flex-col lg:w-[95%] lg:mx-auto ml-3 py-6 ">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Akaki Tsereteli State University Admission Process 2025
      </h2>

      {/* Description */}
      <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
        Applicants seeking admission to Akaki Tsereteli State University can
        follow the simple and straightforward admission procedure outlined by
        the university. The process is hassle-free, with minimal documentation
        and paperwork required. This makes it easier for students to apply and
        secure their place at the university without unnecessary delays or
        complications. The university ensures a smooth and efficient application
        process for all prospective candidates.
      </p>

      {/* Document List */}
      <div className="flex flex-col gap-4">
        {[
          "Complete the online application form on the university’s official website.",
          "Submit academic transcripts (12th grade) and other required documents.",
          "Provide proof of NEET qualification and other supporting documents.",
          "No IELTS/TOEFL is required, but English proficiency may be tested if needed.",
          "Pay the one-time admission fee and annual tuition fee.",
          "Apply for a student visa with the necessary documents.",
        ].map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Image
              src={vector}
              alt="vector"
              width={18}
              height={18}
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-3">
        <span className="text-black font-[550]">Read More:</span>
        <Link href="/akaki-tsereteli-state-university/admission">
          <button
            id="document"
            className=" text-[#C7183A]  font-[550] hover:underline py-2 px-1 text-sm sm:text-base  "
          >
            Akaki Tsereteli State University Admission Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
