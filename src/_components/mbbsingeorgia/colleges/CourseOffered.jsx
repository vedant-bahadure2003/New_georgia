import React from "react";
import universityimg from "../../../../public/Images/hat.png";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const CourseOffered = () => {
  return (
    <>
      {/* Accreditation Section */}
      <div className="bg-[#FFF9EA] ml-3 lg:w-[95%] lg:mx-auto md:p-12 p-6 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-[#C7183A] text-[22px] lg:text-[28px] font-[700] mb-4">
          Accreditation and Recognition of Akaki Tsereteli State University
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Akaki Tsereteli State University, Georgia, is accredited by various
          international bodies, some of which are mentioned below:
        </p>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <Image
              src={universityimg}
              alt="University Image"
              width={176}
              height={128}
              className="w-32 h-24 sm:w-44 sm:h-32"
            />
          </div>
        </div>

        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          {[
            "Approved by UNESCO",
            "Recognized by WHO",
            "NMC (National Medical Commission)",
            "World Federation Of Medical Education (WFME)",
            "Foundation For Advancement Of International Medical Education And Research (FAIMER)",
            "Education Commission For Foreign Medical Graduates (ECFMG)",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Students life */}
      <div
        id="Intake"
        className="lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Students Life at Akaki Tsereteli State University
          </h2>
        </div>
        <p className="text-[14px] sm:text-[16px]">
          Life at Akaki Tsereteli State University is designed to offer a
          balanced experience. Students have access to a variety of academic and
          recreational facilities. They can participate in:
        </p>
        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          {[
            "Social & Cultural Events",
            "Clubs and Societies",
            "Research Opportunities",
            "Growth and Collaboration",
            "Sports",
            "Studies",
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
        </ul>
      </div>

      {/* Hostel & Accommodation */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel & Accommodation at Akaki Tsereteli State University
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          The hostel and accommodation facilities at Akaki Tsereteli State
          University are as follows:
        </p>
        <div className="flex flex-col gap-4">
          {[
            "The university offers comfortable hostel accommodation with basic amenities for international students.",
            "The university is equipped with modern facilities and air-conditioning. Standard kitchens, restrooms, and study rooms for students. ",
            "All the campus buildings have reading halls, a cafeteria, and a sports ground.",
            "Students will enjoy the pleasant and supportive ambience of studying.",
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
      </div>
    </>
  );
};

export default CourseOffered;
