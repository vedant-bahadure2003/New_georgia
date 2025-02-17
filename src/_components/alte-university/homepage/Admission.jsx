import React from "react";
import vector from "../../../../public/Images/vector.png";
import Link from "next/link";
import Image from "next/image";

const Admission = () => {
  return (
    <div className="flex flex-col lg:w-[95%] lg:mx-auto ml-3">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Alte University Admission Process 2025
      </h2>

      {/* Description */}
      <p className="text-justify font-medium py-3 text-[14px] sm:text-[16px] text-black">
        Many students choose to pursue MBBS in Georgia. Interested candidates
        can review the admission criteria at Alte University. The admission
        process is straightforward, requiring minimal documentation. Students
        can understand it with the steps given below:
      </p>

      {/* Document List */}
      <div className="flex flex-col gap-4">
        {[
          "Complete the form on Alte University's official website.",
          "Upload 12th-grade transcripts and required paperwork.",
          "If applicable, include your NEET qualification and other supporting documents.",
          "English proficiency may be tested if required.",
          "Submit the one-time admission and annual tuition fees.",
          "Use the admission letter and required documents to obtain your student visa.",
        ].map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <Image
              src={vector}
              alt="vector"
              className="mt-1 h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]"
            />
            <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <span id="Eligibility" className="text-black font-[550]">
          Read More:
        </span>{" "}
        <Link href="/alte-university/admission">
          <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base font-[550]">
            Alte University Admission Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
