import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";
const admissionpoint = [
  {
    id: 1,
    text: "Download the application form from the university's official website.",
  },
  {
    id: 2,
    text: "Enter your postal address, email ID, and mobile phone number for contact.",
  },
  {
    id: 3,
    text: "Upload all required documents.",
  },
  {
    id: 4,
    text: "Pay the tuition fee and keep the receipt for future reference.",
  },
  {
    id: 5,
    text: "Apply for a VISA.",
  },
  {
    id: 6,
    text: "Present all required documents in hard copy upon arrival at the university.",
  },
];

const Admission = () => {
  return (
    <div className=" flex flex-col lg:w-[95%] lg:mx-auto ml-3 py-6 ">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Samarkand State Medical University Admission Process 2025
      </h2>

      {/* Description */}
      <p className="text-justify  py-3 text-[14px] sm:text-[16px] text-black">
        Admission to Samarkand State Medical Institute for the 2025 academic
        year will open in September, with the program starting in September.
        Indian students can apply directly through the official website, and a
        valid NEET score is necessary to proceed with the admission process.
        Samarkand State Medical University's admission process is
        straightforward and hassle-free, ensuring applicants can easily secure
        their spot in the MBBS programme.
      </p>
      <div className="text-base sm:text-lg py-3 flex flex-col gap-4">
        {admissionpoint.map((criteria) => (
          <div key={criteria.id} className="flex gap-3">
            <Image
              src={vector}
              alt="Checkmark icon"
              className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
            />
            <p className="text-justify text-sm sm:text-base">{criteria.text}</p>
          </div>
        ))}
      </div>
      {/* CTA Button */}
      <div className="mt-1">
        <span id="Eligibility" className=" text-black font-[550]">
          Read More:
        </span>{" "}
        <Link href="/samarkand-state-medical-university/admission">
          {" "}
          <button className="text-[#C7183A] hover:underline py-2 px-1 text-sm sm:text-base rounded-md font-[550] ">
            SSMU Uzbekistan Admission Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
