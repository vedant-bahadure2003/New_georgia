import React from "react";
import universityimg from "../../../../public/Images/hat.png";
import vector from "../../../../public/Images/vector.png"; // ✅ Importing vector properly
import Image from "next/image";

const CourseOffered = () => {
  return (
    <>
      {/* Accreditation Section */}
      <div className="bg-[#FFF9EA] ml-3 lg:w-[95%] lg:mx-auto md:p-12 p-6 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-[#00a1ab] text-[22px] lg:text-[28px] font-[700] mb-4">
          Accreditation and Recognition of Tashkent State Dental Institute{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Tashkent State Dental Institute holds accreditation from both
          international and national medical authorities:
        </p>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <Image
              src={universityimg}
              alt="University Image"
              width={176} // Explicit width
              height={128} // Explicit height
              className="w-32 h-24 sm:w-44 sm:h-32"
            />
          </div>
        </div>

        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            The National Medical Commission (NMC)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            The World Health Organisation (WHO)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            The Republic of Uzbekistan's Ministry of Health
          </li>
        </ul>
      </div>

      {/* Students life */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Students Life at Tashkent State Dental Institute{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                The Tashkent State Dental Institute in Uzbekistan provides
                students with state-of-the-art facilities and a vibrant campus
                life that enhances their academic and personal development.
                <br /> <br />
                The classrooms and lecture halls are equipped with computers and
                projectors. Students have access to the internet. The various
                specialities covered in the training of dentists include
                periodontology, prosthetic dentistry, surgical dentistry,
                therapeutic dentistry, orthodontics, maxillofacial surgery, and
                pediatric surgical dentistry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel & Accommodation at Andijan State Medical Institute */}

      <div className=" flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel & Accommodation at Tashkent State Dental Institute{" "}
        </h2>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "There are fully equipped rooms in each hostel, and all rooms are safe and have hot and cold water all year round.",
            " There is a shared kitchen that students can use to prepare meals.",
            " The institution offers 24-hour Wi-Fi, guest seats, and a washing system. ",
            "All interested students in fitness can be allowed to make use of the gym. ",
            "The hostel has a study space for people who want to read outside of their dorm. The hostel has security, and all visitors have to produce some identification to enter.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Image
                src={vector}
                alt="vector"
                className="mt-1 h-[18px] w-[18px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-6">
              <button className=" text-black py-2 px-4 text-sm sm:text-base rounded-md shadow-lg  w-full sm:w-auto">
                <span id="syllabus" className="text-[#C7183A] font-medium">
                  Read More:
                </span>{" "}
                Why Study MBBS at Andijan State Medical Institute?
              </button>
            </div> */}
      </div>
    </>
  );
};

export default CourseOffered;
