import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const Intake = () => {
  const intakeDates = [
    { event: "Application Start Date", date: "September 2025" },
    { event: "Invitation Letter", date: "2-3 weeks" },
    { event: "Admission Start Date", date: "Yet to be declared" },
    { event: "Last Date of Admission Form", date: "Yet to be declared" },
  ];
  return (
    <>
      {/* Courses Offered Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          Courses Offered at Tashkent Medical Academy
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3  md:text-left">
          Tashkent Medical Academy offers undergraduate, graduate, and doctoral
          medical education to both local and international students.
          Furthermore, language and preparatory programs are also provided so
          they may study in their native tongue. Course offerings at TMA
          Uzbekistan include:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "General Medicine",
            "Medical Pedagogy",
            "Preventive Medicine",
            "Nursing",
            "Medical Biology",
            "Military Medicine",
          ].map((text, index) => (
            <div
              id="accrediation"
              key={index}
              className="flex items-start gap-2"
            >
              <Image
                src={vector}
                alt="Vector Icon"
                className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mt-1"
              />
              <p className="text-justify text-[14px] sm:text-[16px]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Tashkent Medical Academy - MBBS Duration
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Tashkent Medical Academy's six-year MBBS program features five
                years of study and one internship. The curriculum incorporates
                clinical rotations and internships - essential elements in
                becoming a physician anywhere around the world, including India.
                Students will gain theoretical and practical knowledge from
                experienced physicians.
              </p>
            </div>
          </div>
        </div>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-medium">
                Course
              </td>
              <td className="px-4 py-2 border border-black">Duration</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-medium">
                MBBS
              </td>
              <td className="px-4 py-2 border border-black">
                5 + 1 year internship
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[95%] mx-auto flex flex-col gap-4 py-6">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Tashkent Medical Academy - Intake Dates & Deadlines 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Please refer to the table below for detailed information on deadlines
          and critical timelines for the key admission dates for 2025-26 season:
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
          Tashkent Medical Academy Ranking 2025{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          As per 4icu.org, Tashkent Medical Academy holds notable rankings
          nationally and globally, reflecting its academic excellence and
          reputation:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
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
              <td className="px-4 py-2 border border-black text-center">17</td>
              <td className="px-4 py-2 border border-black text-center">
                7463
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Medium of teaching */}
      {/* <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Medium of Teaching in Andijan State Medical Institute
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Andijan State Medical Institute's MBBS program is conducted in
                English, making it very popular among Indian and international
                students. Since the instruction language is English, students
                will have better comprehension and a more significant influx of
                students from different parts of the globe.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Infrastructure and facilities */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto lg:flex-row lg:justify-start items-center lg:items-start lg:mt-4 ml-3">
        <div className=" flex flex-col py-6 bg-white">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
            Tashkent Medical Academy - Infrastructure & Facilities{" "}
          </h2>

          {/* Description */}
          <p className="text-justify font-semibold text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-3 sm:mt-4">
            Tashkent Medical Academy boasts state-of-the-art facilities designed
            to create an ideal learning environment for its students:
          </p>

          {/* Content Section */}
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
            {[
              "Students and faculty alike benefit from extensive library resources, including diverse medical textbooks, journals, and databases that support their academic endeavors.",
              "Attractive classrooms that are equipped with cutting-edge audiovisual technology create an inviting learning experience.",
              "High-speed internet access and cutting-edge software tools enable research and collaboration.",
              "Students receive hands-on experience using simulated patients and modern medical equipment in preparation for clinical practice.",
              "Medical care and counseling services ensure physical and mental well-being support for students.",
              "An expansive gym, sports grounds, and recreational areas with all necessary equipment ensure student health and well-being.",
              "Cultural, social, and extracurricular events help foster peer engagement.",
              "Workshops and seminars build professional capabilities, equipping students for successful medical careers.",
            ].map((text, index) => (
              <div
                id="accrediation"
                key={index}
                className="flex items-start gap-2"
              >
                <Image
                  src={vector}
                  alt="vector"
                  className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mt-1"
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
