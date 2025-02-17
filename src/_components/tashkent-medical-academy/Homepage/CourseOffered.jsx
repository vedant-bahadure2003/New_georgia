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
          Tashkent Medical Academy - Recognition and Accreditations{" "}
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
            World Health Organization (WHO)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            National Medical Commission (NMC)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            UNESCO - United Nations Educational, Scientific and Cultural
            Organization
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
            Students Life at Tashkent Medical Academy{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Tashkent Medical Academy prioritises holistic development among
                its students through extracurricular and cultural events that
                encourage active participation and create an active campus
                community.
                <br /> <br />
                Students are strongly encouraged to partake in outdoor sports
                activities, using facilities like a swimming pool, gym, and
                various sports areas designed to help them relax and enhance
                focus.
                <br /> <br />
                The main building features a spacious cafeteria offering an
                assortment of cuisines and nutritious meals that cater to
                various dietary preferences. To provide a safe environment,
                campus security measures have been thoughtfully planned and
                effectively implemented, enabling students to move around safely
                on campus grounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel & Accommodation at Andijan State Medical Institute */}

      <div className=" flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel and Accommodation at Tashkent Medical Academy{" "}
        </h2>

        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          At Tashkent Medical Academy, students can find comfortable on-campus
          hostel facilities designed to meet their needs. Each hostel features
          well-furnished rooms and nutritious meals to promote student health
          and well-being.
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "Advanced security measures such as video surveillance, fire alarms, and 24/7 security personnel ensure a safe living environment. Separate dormitories for boys and girls can be provided, offering options of 2, 3, or 4 bedroom arrangements to suit individual preferences.",
            "An Indian mess is available for students who prefer familiar cuisine, while communal kitchens in each wing enable residents to prepare their own meals. ",
            "Furthermore, a laundry room equipped with washing machines provides students with added convenience.",
            "Overall, Tashkent Medical Academy strives to foster an environment that facilitates both academic and personal growth.",
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
