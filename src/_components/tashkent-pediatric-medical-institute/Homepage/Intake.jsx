import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const Intake = () => {
  return (
    <>
      {/* Courses Offered Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          Courses Offered at Tashkent Pediatric Medical Institute
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3  md:text-left">
          Tashkent Pediatric Medical Institute offers the following medical
          programs for MBBS students:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "I - Pediatric faculty",
            "II - Pediatrics and Medical Biology Faculty",
            "Medical - Pedagogical and Medical Faculty",
            "Internal Faculty",
            "Faculty of Nursing with Higher Education",
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
            Duration of MBBS at Tashkent Pediatric Medical Institute
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                The duration of the MBBS course at Tashkent Pediatric Medical
                Institute is 6 years, which further consists of 5 years of
                academic study and 1 year of internship.
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
                MBBS{" "}
              </td>
              <td className="px-4 py-2 border border-black text-center">
                5 + 1 (including internship)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" hidden lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Tashkent Pediatric Medical Institute - Admission Dates & Deadlines
          2025-26{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          The admission dates for the 2025 - 26 intake cycle at Tashkent
          Pediatric Medical University are as follows:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border  border-black font-[700] text-center">
                Events
              </td>
              <td className="px-4 py-2 border border-black font-[700] text-center  ">
                Dates
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Commencement of 2025 Intake Cycle{" "}
              </td>
              <td className="px-4 py-2 border border-black text-center">
                September 2025
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black ">
                Commencement of Application
              </td>
              <td className="px-4 py-2 border border-black text-center">
                Jan-Feb 2025
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black ">
                Admission Later
              </td>
              <td className="px-4 py-2 border border-black text-center">
                within the next 3-4 weeks
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden lg:w-[95%] lg:mx-auto  ">
        <div className="flex flex-col gap-3 py-4 px-4">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Tashkent Pediatric Medical Institute - Admission Dates & Deadlines
            2025-26{" "}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-semibold">
            The admission dates for the 2025 - 26 intake cycle at Tashkent
            Pediatric Medical University are as follows:
          </p>
          <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
            <tbody>
              <tr className="odd:bg-[#FFF7EE] even:bg-white border">
                <td className="px-4 py-2 border text-center  border-black font-[700]">
                  Events
                </td>
                <td className="px-4 py-2 border text-center border-black font-[700]">
                  Dates
                </td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white border">
                <td className="px-2 py-1 border border-black font-medium">
                  Commencement of 2025 intake cycle
                </td>
                <td className="px-2 py-1 border border-black text-center">
                  September 2025
                </td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-2 py-1 border border-black">
                  Commencement of Application
                </td>
                <td className="px-2 py-1 border border-black text-center">
                  Jan-Feb 2025
                </td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-2 py-1 border border-black">
                  Admission Letter
                </td>
                <td className="px-2 py-1 border border-black  text-center">
                  within the next 3-4 weeks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="  lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 ml-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Tashkent Pediatric Medical Institute Ranking 2025{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          As per 4icu.org, Tashkent Pediatric Medical Institute holds notable
          rankings both nationally and globally, reflecting its academic
          excellence and reputation.
        </p>
        <table className="w-full mt-3 text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black font-[700] text-center">
                Country Rank
              </td>
              <td className="px-4 py-2 border border-black font-[700] text-center">
                World Rank
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black text-center ">35</td>
              <td className="px-4 py-2 border border-black text-center">
                8993
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Medium of teaching */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Medium of Teaching at Tashkent Pediatric Medical Institute{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              {/* Content Section */}
              <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
                {[
                  "Students from India and other nations choose Tashkent Pediatric Medical Institute because its MBBS program uses English as the language of instruction. ",
                  "The use of English as the instructional language enables students to achieve a better understanding and participate in a multicultural learning atmosphere, which draws international candidates.",
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
        </div>
      </div>

      {/* Infrastructure and facilities */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto lg:flex-row lg:justify-start items-center lg:items-start  ml-3">
        <div className=" flex flex-col py-6 bg-white">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
            Infrastructure & Facilities at Tashkent Pediatric Medical Institute
          </h2>

          {/* Description */}
          <p className="text-justify font-[700] text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-3 sm:mt-4">
            Academic Facilities
          </p>

          {/* Content Section */}
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
            {[
              "Equipped with digital learning tools and comfortable seating for an interactive study environment.  ",
              "Hands-on training facilities with cutting-edge medical instruments.  ",
              "The medical research facilities at TashPMI operate out of dedicated research centres which support scientific innovation.  ",
              "Extensive online resources and study materials for academic support.  ",
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
          <p className="text-justify font-[700] text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-3 sm:mt-4">
            Recreational & Extracurricular Facilities{" "}
          </p>
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
            {[
              "Spacious areas for football, basketball, and other outdoor activities.    ",
              "The gymnasium includes complete facilities to support student physical fitness as well as well-being.   ",
              "The institution provides auditoriums along with seminar halls, which serve as spaces for guest lectures, academic seminars and cultural programs.   ",
              "The institution provides clean dining facilities and suitable residential spaces for students who come from abroad.   ",
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
