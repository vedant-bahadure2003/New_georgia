import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const Intake = () => {
  return (
    <>
      {/* Courses Offered Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          Courses Offered at Akaki Tsereteli State University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3 md:text-left">
          Akaki Tsereteli State University offers diverse courses in the domain
          of Medical Science for both undergraduates and postgraduates:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "Faculty of Humanities",
            "Faculty of Pedagogy",
            "Faculty of Exact and Natural Sciences",
            "Faculty of Business, Law, and Social Sciences",
            "Faculty of Medicine",
            "Faculty of Technical Engineering",
            "Faculty of Technological Engineering",
            "Faculty of Agriculture",
            "Faculty of Maritime-Transport",
          ].map((text, index) => (
            <div id="course" key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="Vector Icon"
                width={16}
                height={16}
                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
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
            Akaki Tsereteli State University MBBS Duration{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                The duration for the MBBS course at Akaki Tsereteli State
                University is a 6-year duration, which also includes 1-year
                internship:
              </p>
            </div>
          </div>
        </div>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Course
              </td>
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Duration
              </td>
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
      <div className=" hidden lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Akaki Tsereteli State University - Intake Dates & Deadlines 2025{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          To secure your place and get admission to the university, students
          need to adhere to the following timelines and dates:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Events
              </td>
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Dates
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Application Start Date
              </td>
              <td className="px-4 py-2 border border-black">May or April</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Application Deadline
              </td>
              <td className="px-4 py-2 border border-black">June</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Visa Processing</td>
              <td className="px-4 py-2 border border-black">July to August</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Start of Class</td>
              <td className="px-4 py-2 border border-black">September</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden lg:w-[95%] lg:mx-auto  ">
        <div className="flex flex-col gap-3 py-4 px-4">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Akaki Tsereteli State University - Intake Dates & Deadlines 2025{" "}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-semibold">
            To secure your place and get admission to the university, students
            need to adhere to the following timelines and dates:
          </p>
          <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
            <tbody>
              <tr className="odd:bg-[#FFF7EE] even:bg-white border">
                <td className="px-4 py-2 border border-black font-[700] text-center">
                  Events
                </td>
                <td className="px-4 py-2 border border-black font-[700] text-center">
                  Dates
                </td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">
                  Application Start Date
                </td>
                <td className="px-4 py-2 border border-black">May or April</td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">
                  Application Deadline
                </td>
                <td className="px-4 py-2 border border-black">June</td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">
                  Visa Processing
                </td>
                <td className="px-4 py-2 border border-black">
                  July to August
                </td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">
                  Start of Class
                </td>
                <td className="px-4 py-2 border border-black">September</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="  lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 ml-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Akaki Tsereteli State University Ranking 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          According to 4icu.org, the following is the country and world ranking
          for Akaki Tsereteli State University:
        </p>
        <table className="w-full text-[14px] mt-3 sm:text-[16px] text-left rtl:text-right border border-black">
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
                10
              </td>
              <td className="px-4 py-2 border border-black text-center">
                7803
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
      <div className="flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white">
        {/* Section Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Infrastructure & Facilities at Akaki Tsereteli State University
        </h2>
        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          Akaki Tsereteli State University offers a variety of facilities
          designed to enrich academic and student life. The campus has modern
          amenities for learning, research, and recreation:
        </p>

        {/* Facility List */}
        <div className="flex flex-col gap-4">
          {[
            "The rooms are available for self-study and group activities, with internet access throughout the campus, including hostels.",
            "Common rooms with TV and relaxation facilities are available within the university.",
            "The sports ground is provided for games like basketball, volleyball, and football, as well as some other fitness events.",
            "The university caters to many clubs related to cultural events, arts, seminars, and workshops to encourage students' social lives.",
            "The lecture halls are designed for an interactive and spacious learning environment.",
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

export default Intake;
