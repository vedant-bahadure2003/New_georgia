import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const intakeDates = [
  { event: "Application Start Date", date: "January and September" },
  { event: "Invitation Letter", date: "2-3 weeks" },
  { event: "Admission Start Date", date: "Yet to be declared" },
  { event: "Last Date of Admission Form", date: "Yet to be declared" },
];

const Intake = () => {
  return (
    <>
      {/* MBBS Fees in Uzbekistan Section */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Courses offered at Fergana Medical Institute of Public Health
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Fergana Medical Institute of Public Health provides
                undergraduate, graduate, and doctoral medical education. It also
                offers language and preparatory programs for students preferring
                to study in their native language. Both local and international
                students can pursue courses like:
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {[
            "Preventive medicine",
            "Traditional medicine",
            "General medicine",
            "Biomedical engineering",
            "Nursing",
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

      {/* Duration */}
      <div className="  lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 ml-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Fergana Medical Institute of Public Health - MBBS Duration
        </h2>
        <p className="text-[14px] sm:text-[16px] ">
          The MBBS program at Fergana Medical Institute of Public Health lasts 6
          years, 5 years of study, and an additional 1 year for internship. The
          curriculum includes clinical rotations and internships, essential for
          becoming a doctor anywhere in the world, including in Fergana.
          <br /> <br />
          Students will gain theoretical knowledge and practical experience,
          with opportunities to learn from experienced doctors.
        </p>
        <table className="w-full mt-2 text-[14px] sm:text-[16px] text-center border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-[700]">
                Course
              </td>
              <td className="px-4 py-2 border border-black font-[700]">
                Duration
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black">MBBS</td>
              <td className="px-4 py-2 border border-black">
                5 + 1 (Including Internship)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-[95%] mx-auto flex flex-col gap-4 py-6">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Fergana Medical Institute of Public Health - Intake Dates & Deadlines
          2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Below are the important admission dates and deadlines:
        </p>

        {/* Intake Dates Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
            <thead>
              <tr className="bg-[#FFF7EE] border border-black">
                <th className="px-4 py-2 border border-black font-semibold text-center">
                  Events
                </th>
                <th className="px-4 py-2 border border-black font-semibold text-center">
                  Dates
                </th>
              </tr>
            </thead>
            <tbody>
              {intakeDates.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                  <td className="px-4 py-2 border border-black ">
                    {item.event}
                  </td>
                  <td className="px-4 py-2 border border-black ">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="  lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 ml-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Fergana Medical Institute of Public Health Ranking 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          As per 4icu.org, Fergana Medical Institute of Public Health holds
          notable rankings nationally and globally, reflecting its academic
          excellence and reputation.
        </p>
        <table className="w-full mt-2 text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Country
              </td>
              <td className="px-4 py-2 border border-black font-[700] text-center">
                World
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-medium text-center">
                72
              </td>
              <td className="px-4 py-2 border border-black text-center">
                12823
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Infrastructure and facilities */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto lg:flex-row lg:justify-start items-center lg:items-start  ml-3">
        <div className=" flex flex-col py-6 bg-white">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
            Fergana Medical Institute of Public Health - Infrastructure &
            Facilities
          </h2>

          {/* Description */}
          <p className="text-justify font-semibold text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-2 sm:mt-3">
            Fergana Medical Institute of Public Health provides top-notch
            facilities to ensure a comfortable and productive environment for
            its students:
          </p>

          {/* Content Section */}
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4 pr-4 sm:pr-8">
            {[
              "A wide selection of medical books, journals, and online resources are available for students and faculty.",
              "Spacious, well-lit classrooms with audiovisual aids to enhance learning.",
              "High-speed internet access and modern software for research and academic work.",
              "Hands-on training with simulated patients and medical equipment (if available).",
              "Provides medical care and counseling services to students.",
              "Offers psychological and academic support.",
              "Gym, sports ground, and other recreational areas for fitness and well-being.",
              "Organizes students' cultural, social, and extracurricular events.",
            ].map((text, index) => (
              <div
                id="accrediation"
                key={index}
                className="flex items-start gap-2"
              >
                <Image
                  src={vector}
                  alt="vector"
                  className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
                />
                <p className="text-justify text-[14px] sm:text-[16px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intake;
