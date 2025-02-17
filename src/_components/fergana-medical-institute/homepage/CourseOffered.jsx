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
          Recognition and Accreditations of Fergana Medical Institute of Public
          Health
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          The university is accredited by:
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
            WHO - World Health Organization
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            NMC - The Medical Council of India
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            FAIMER - Foundation for Advancement of International Medical
            Education and Research
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            WFME - World Federation for Medical Education
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Medical councils of various countries
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
            Students Life at Fergana Medical Institute of Public Health
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                The university organizes various extracurricular and cultural
                events to ensure the holistic development of its students.
                <br /> <br />
                Students are encouraged to participate actively in outdoor
                sports at the university. Facilities like a swimming pool, gym,
                and sports areas have been provided to help students relax and
                improve their focus.
                <br /> <br />
                The main building now includes a large cafeteria offering
                various cuisines and delicious meals. The campus security is
                well-planned and implemented, allowing students to move around
                freely and safely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel & Accommodation at Andijan State Medical Institute */}

      <div className=" flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel and Accommodation at Fergana Medical Institute of Public Health
        </h2>

        <p className="text-justify py-2 text-[14px] sm:text-[16px] text-black">
          Fergana Medical Institute of Public Health provides hostel facilities
          on campus. The hostels offer comfortable rooms and healthy meals for
          students.
          <br /> <br />
          Advanced security features like video surveillance, fire alarms, and
          24/7 security ensure a safe environment.
          <br /> <br />
          Separate dorms and rooms are available for boys and girls, with 2, 3,
          or 4 bedroom options. An Indian mess is available for students, and
          kitchens in each wing allow them to cook their meals. A laundry room
          with washing machines is also provided for students' convenience.
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "Well-Furnished Rooms",
            "Study and Computer Rooms",
            "Kitchen and Restrooms",
            "Modern Amenities",
            "Internet Room",
            "Student Gym",
            "Reading Room",
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
