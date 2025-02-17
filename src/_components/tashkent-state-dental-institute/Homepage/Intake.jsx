import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const Intake = () => {
  return (
    <>
      {/* Courses Offered Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          Courses Offered at Tashkent State Dental Institute{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3  md:text-left">
          Tashkent State Dental Institute offers the following medical programs
          for undergraduate as well as postgraduate students:
        </p>

        {/* Content Section */}
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
          {[
            "Faculty of Physiology and Pathology",
            "Department of Surgery",
            "Faculty of General Medicine",
            "Faculty of Gynecology and Obs",
            "Faculty of Paediatrics",
            "Faculty of Orthopaedic",
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
            Duration of MBBS at Tashkent State Dental Institute{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                The duration of the medicine course at Tashkent State Dental
                Institute is 6 years, which further consists of 5 years of
                academic study and 1 year of internship. The first 3 years focus
                on the theoretical aspects of dentistry, while the next 3 years
                are dedicated to practical training.
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
              <td className="px-4 py-2 border border-black text-center">
                5 + 1 (including internship)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Intake */}
      <div className="w-full lg:w-[95%] lg:mx-auto flex flex-col gap-3 py-6 p-3  bg-white">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-[#C7183A]">
          Tashkent State Dental Institute - Intake Dates & Deadlines 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          The admission dates for the 2025 - 26 intake cycle at Tashkent State
          Dental Institute are as follows:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
          <thead>
            <tr className="bg-[#FFF7EE]">
              <th className="px-2 sm:px-4 py-1 sm:py-2 border border-black font-[700] text-center">
                Event
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 border border-black font-[700] text-center">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-[#FFF7EE]">
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black">
                Commencement of 2025 intake cycle
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black text-center">
                September 2025
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black">
                Commencement of Application
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black text-center">
                September 2025
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black">
                Admission Letter
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 border border-black text-center">
                Within the next 3-4 weeks
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ranking */}
      <div className="  lg:flex lg:w-[95%] lg:mx-auto   flex-col gap-3 ml-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Tashkent State Dental Institute Ranking
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          As per 4icu.org, Tashkent State Dental Institute holds notable
          rankings both nationally and globally, reflecting its academic
          excellence and reputation:
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
              <td className="px-4 py-2 border border-black text-center">62</td>
              <td className="px-4 py-2 border border-black text-center">
                10775
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Medium of teaching */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[15px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Medium of Teaching in Tashkent State Dental Institute{" "}
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px]">
                Tashkent State Dental Institute’s MBBS program is conducted in
                English, making it very popular among Indian and international
                students. Since the instruction language is English, students
                will have better comprehension and a more significant influx of
                students from different parts of the globe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure and facilities */}
      <div className="flex flex-col lg:w-[95%] lg:mx-auto lg:flex-row lg:justify-start items-center lg:items-start lg:mt-6 ml-3">
        <div className=" flex flex-col py-6 bg-white">
          {/* Title */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  ">
            Infrastructure & Facilities at Tashkent State Dental Institute
          </h2>

          {/* Description */}
          <p className="text-justify font-semibold text-[14px] sm:text-[16px] pr-4 sm:pr-8 mt-3 sm:mt-4">
            The Tashkent State Dental Institute offers a unique student home on
            campus with all essential facilities for a comfortable stay. This
            well-designed university provides everything needed to support
            students academically and personally, ensuring a balanced and
            enjoyable campus life.
          </p>

          {/* Content Section */}
          <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 pr-4 sm:pr-8">
            {[
              "24/7 accessibility of Internet network",
              "Binding books and photocopy amenities",
              "Sports arena and playground",
              "Comfy library amenities",
              "Transportation and Medical Amenities",
              "100% Tight Security",
              "Canteen provisions",
              "Advanced labs",
              "Affiliated medical centers",
              "Affiliated medical centers",
              "Highly experienced staff and professors",
              " Friendly and safe environment",
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
