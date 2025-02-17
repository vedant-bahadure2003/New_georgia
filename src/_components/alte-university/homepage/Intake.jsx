import React from "react";
import vector from "../../../../public/Images/vector.png";
import Image from "next/image";

const Intake = () => {
  return (
    <>
      {/* Courses Offered Section */}
      <div
        id="Courses"
        className="lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Courses Offered at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Alte University offers diverse courses in the domain of medical
          science and other subjects for both undergraduates and postgraduates.
        </p>
        <ul className="list-disc pl-5">
          {[
            "Faculty of Medical Science",
            "Faculty of Arts & Humanities",
            "School of Law and Social Sciences",
            "Faculty of Business Administration",
            "Faculty of Health Sciences",
            "School of Applied Sciences",
            "Faculty of Social Sciences",
            "Faculty of Pedagogy",
          ].map((course, index) => (
            <li key={index} className="text-[14px] sm:text-[16px] font-medium">
              {course}
            </li>
          ))}
        </ul>
      </div>

      {/* MBBS Duration */}
      <div
        id="Duration"
        className="lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Duration of MBBS at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Alte University offers various medical courses, including MBBS, for 6
          years. The program combines academic studies and practical internship
          to ensure comprehensive training.
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black text-center font-[700]">
                Course
              </td>
              <td className="px-4 py-2 border border-black text-center font-[700]">
                Duration
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black text-center">
                MBBS
              </td>
              <td className="px-4 py-2 border border-black text-center">
                5 + 1-year Internship
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Admission Dates & Deadlines */}
      <div className="lg:w-[95%] lg:mx-auto flex flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Alte University - Admission Dates & Deadlines 2025-26
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          To secure your place and get admission in the 25-26 cycle, the
          students need to adhere to the following timelines and dates:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black text-center font-[700]">
                Event
              </td>
              <td className="px-4 py-2 border border-black text-center font-[700]">
                Date
              </td>
            </tr>
            {[
              { event: "Application start date", date: "March/April" },
              { event: "Application Deadline", date: "July 2025" },
              { event: "Visa Processing", date: "September" },
              { event: "Start of Classes", date: "October" },
            ].map((item, index) => (
              <tr key={index} className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">{item.event}</td>
                <td className="px-4 py-2 border border-black">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ranking */}
      <div className="lg:w-[95%] lg:mx-auto flex flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Alte University Ranking 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Alte University is ranked among the top medical universities in
          Georgia. According to 4icu.org, the following is the country and world
          ranking for Alte University:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <tbody>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <td className="px-4 py-2 border border-black text-center font-[700]">
                Country Ranking
              </td>
              <td className="px-4 py-2 border border-black text-center font-[700]">
                World Ranking
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black text-center">33</td>
              <td className="px-4 py-2 border border-black text-center">
                10936
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Infrastructure & Facilities */}
      <div className="lg:w-[95%] lg:mx-auto flex flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Infrastructure & Facilities at Alte University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Alte University provides excellent facilities to create an academic as
          well as a holistic student experience. The campus boasts modern
          amenities to support learning as well as individual development:
        </p>
        <ul className="list-disc pl-5">
          {[
            "Quiet rooms and collaborative learning spaces with internet access are available throughout the campus, including hostels.",
            "Equipped with TVs and relaxing areas to make sure students have a comfortable place to relax when they need some downtime.",
            "Well-kept sports ground for basketball, volleyball, football, and other fitness activities.",
            "Various clubs of the university include cultural events, arts, seminars, and workshops for the engagement and social life of students.",
            "Spacious and modern lecture halls for interactive learning, designed with the latest teaching technologies.",
          ].map((facility, index) => (
            <li key={index} className="text-[14px] sm:text-[16px] font-medium">
              {facility}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Intake;
