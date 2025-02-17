import React from "react";
import universityimg from "../../../../public/Images/hat.png";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";
const CourseOffered = () => {
  // Dynamic data for courses and durations
  const eligibilityCriteria = [
    {
      id: 1,
      text: "There are separate accommodations for boys and girls, with male and female wardens present to assist. ",
    },
    {
      id: 2,
      text: "All hostel rooms feature fully furnished rooms equipped with filtered water systems and central air conditioning for maximum comfort. ",
    },
    {
      id: 3,
      text: "The hostel fee for MBBS students at Samarkand State Medical University is approximately $400 per year.",
    },
  ];
  return (
    <>
      {/* Accreditation Section */}
      <div className="bg-[#FFF9EA] ml-3 lg:w-[95%] lg:mx-auto md:p-12 p-6 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-[#00a1ab] text-[22px] lg:text-[28px] font-[700] mb-2">
          Accreditation and Recognition of Samarkand State Medical University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[700] ">
          As a top medical university in Uzbekistan, Samarkand State Medical
          University is recognised and accredited by some of the most esteemed
          organisations in the world.
        </p>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <Image
              src={universityimg}
              alt="University Image"
              className="w-32 h-24 sm:w-44 sm:h-32"
            />
          </div>
        </div>

        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            United Nations Educational, Scientific, and Cultural Organization
            (UNESCO).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Foundation for Advancement of International Medical Education and
            Research (FAIMER).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            The Ministry of Health of the Republic of Uzbekistan.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            National Medical Commission (NMC).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            World Health Organization (WHO).
          </li>
        </ul>
      </div>

      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        {" "}
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Students Life at Samarkand State Medical University
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Student's life at this university is comfortable with hostel
                accommodations and essential amenities. They are given a
                well-equipped library and on-campus medical services. Social
                events are conducted to promote the holistic development of
                students. <br /> <br />
                The community is multicultural and diverse. Apart from that,
                high-quality medical education with experienced faculty,
                research opportunities, and access to modern labs are available
                to them. <br /> <br />
                Students can spend time with many fun activities like student
                clubs, organisations, events, and music festivals. They organise
                dance, music, and theatre performances where one can showcase
                their talents. The university's strong alumni network serves as
                a good networking opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* hostel accomodation */}
      <div className="flex flex-col mt-4 bg-[#FFF9EA] py-6 ml-3 lg:py-10 p-5">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel & Accommodation at Samarkand State Medical University
        </h2>

        <p className="text-justify font-medium py-4 text-[14px] sm:text-[16px]">
          This institute provides hostel facilities to international students
          from different countries.
        </p>

        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-4">
          {eligibilityCriteria.map((criteria) => (
            <div key={criteria.id} className="flex gap-3">
              <Image
                src={vector}
                alt="Checkmark icon"
                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
              />
              <p className="text-justify text-[14px] sm:text-[16px]">
                {criteria.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseOffered;
