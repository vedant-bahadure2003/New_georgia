import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";
import Link from "next/link";
const Admission = () => {
  return (
    <div className=" flex flex-col lg:w-[95%] lg:mx-auto ml-3 py-6 ">
      {/* Section Heading */}
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
        Tashkent Pediatric Medical Institute Admission Process{" "}
      </h2>

      {/* Description */}
      <p className="text-justify font-[700] py-3 text-[14px] sm:text-[16px] text-black">
        For the intake of the September-October cycle at the university,
        students must adhere to the admission procedure. Here are the steps
        needed for admission into TashPMI:
      </p>

      {/* Document List */}
      <div className="flex flex-col gap-4">
        {[
          "Complete an online application form provided by Tashkent Pediatric Medical University. Print, sign and fax back a signed form along with required documents as outlined below to the University.",
          "Email Tashkent Pediatric Medical Institute with your documents for review. ",
          "Once verified, students will be sent their invitation letter.",
          " Candidates should pay the initial fees and receive the Fee Acknowledgment Letter. ",
          "Initial payments of initial fees must be made upon acceptance.",
          "Once this occurs, they will receive their fee acknowledgement letter from the university. ",
          "Should an applicant be accepted by a university, they must immediately apply for a student visa for Uzbekistan.",
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

      {/* CTA Button */}
      <div className="mt-4">
        <span id="Eligibility" className="text-black font-medium">
          Read More:
        </span>{" "}
        <Link href="/tashkent-pediatric-medical-institute/admission">
          <button className="text-[#C7183A] hover:underline py-2 text-[14px] sm:text-[16px] font-[550] ">
            TashPMI Amission Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admission;
