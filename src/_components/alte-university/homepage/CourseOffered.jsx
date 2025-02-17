import React from "react";
import universityimg from "../../../../public/Images/hat.png";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const CourseOffered = () => {
  return (
    <>
      {/* Accreditation Section */}
      <div className="bg-[#FFF9EA] ml-3 lg:w-[95%] lg:mx-auto md:p-12 p-6 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-[#00a1ab] text-[22px] lg:text-[28px] font-[700] mb-4">
          Alte University - Accreditation & Recognition
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          The recognition and accreditation of Alte State Medical University is
          provided below:
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
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Recognised by the Ministry of Education of Georgia
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Recognised by the World Health Organization (WHO)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            World Directory of Medical Schools (WDOMS)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Member of the European Association of Universities (EAU)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Recognised by the National Medical Commission (NMC), India (for
            medical programs)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Acknowledged by UNESCO for quality education standards
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Recognised by the Foundation for Advancement of International
            Medical Education and Research (FAIMER)
          </li>
        </ul>
      </div>

      {/* Students Life */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Students Life at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Alte University allows students to take part in their diverse and
          multicultural surroundings through interaction, socialisation, and
          personal and professional development. Students may take part in:
        </p>

        <div className="flex flex-col gap-4">
          {[
            " Engage in dance performances, music and theatre, or other cultural-related celebrations.",
            "  Clubs and Societies: Join student-run organisations focused on academic, social, and cultural activities.",
            " The university offers different opportunities for engaging in cultural, academic, and extra-curricular events.",
            " Engage in a range of sports, from football and basketball to fitness activities.",
            " Enjoy state-of-the-art laboratory facilities and opportunities to  engage with faculty-led research projects in the humanities,sciences, and arts.",
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

      {/* Hostel & Accommodation */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel & Accommodation at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Alte University is the best medical university in Georgia when it
          comes to accommodation and hostel facilities. It provides the best
          accommodation choices for foreign students who seek admission to a
          university.
        </p>

        <div className="flex flex-col gap-4">
          {[
            " It has separate amenities for both genders and provides the utmost security for the students.",
            " Students need not worry as their university provides low-cost, comfortable housing facilities to international students.",
            "Students need not worry that their university provides low-cost, comfortable housing facilities to international students.",
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
