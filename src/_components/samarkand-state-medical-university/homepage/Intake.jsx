import React from "react";
import Image from "next/image";
import vector from "../../../../public/Images/vector.png";

const admissionData = [
  { event: "Application Start Date", date: "March 2025" },
  { event: "Application Deadline", date: "August 2025" },
  { event: "Program Commencement", date: "September 2025" },
  {
    event: "Admission Letter",
    date: "Issued within two weeks of the commencement date",
  },
];

const courses = [
  {
    name: "MBBS",
    duration: "6 Years",
  },
  { name: "Nursing", duration: "4 Years" },
  { name: "Dentistry", duration: "5 Years" },

  { name: "Pharmacy", duration: "5 Years" },
];

const rankingData = { country: 3, world: 5827 };

const facilities = [
  "The college offers clubs and organisations for the arts, cultural activities, seminars, and workshops to enhance student learning and social life.",
  "There are modern lecture halls.",
  "Advanced laboratory facilities include simulation centres, internet, personal computers, anatomy rooms, and research labs for training in medicine.",
  "The library contains various resources in medical books, journals, and online access.",
  "The university library has a collection of 316,500 resources, comprising 57,262 e-books, and serves 11,023 users.",
  "An e-library allows access to 64,059 resources, 11,085 e-books, and serves 2,134 users.",
  "Clinics and regular medical check-ups are available for emergencies and student health.",
];

const Table = ({ data, headers }) => (
  <table className="w-full text-[14px] text-center sm:text-[16px]text-left border border-black">
    <tbody>
      <tr className=" border odd:bg-[#FFF7EE] even:bg-white">
        {headers.map((header, index) => (
          <td
            key={index}
            className="px-4 py-2 text-center border text-[14px] sm:text-[16px] border-black font-[550]"
          >
            {header}
          </td>
        ))}
      </tr>
      {data.map((row, index) => (
        <tr key={index} className="border odd:bg-[#FFF7EE] even:bg-white">
          {Object.values(row).map((cell, i) => (
            <td
              key={i}
              className="px-4 py-2 border border-black text-[14px] sm:text-[16px] "
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const Intake = () => {
  return (
    <>
      {/* Courses Offered Section */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-[25px] md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  md:text-left">
          Courses Offered at Samarkand State Medical University
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3  md:text-left">
          Samarkand State Medical University offers a wide range of medical
          programs catering to both undergraduate and postgraduate students.
          These include:
        </p>

        {/* Dynamic Courses Table */}
        <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
          <thead>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <th className="px-4 py-2 border border-black text-[14px] sm:text-[16px] text-black text-center">
                Course Name
              </th>
              <th className="px-4 py-2 border border-black text-[14px] sm:text-[16px] text-black text-center">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map through courses array and display each course */}
            {courses.map((course, index) => (
              <tr
                key={index}
                className={`odd:bg-white even:bg-[#FFF7EE] border text-[14px] sm:text-[16px] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FFF7EE]"
                }`}
              >
                <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                  {course.name}
                </td>
                <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                  {course.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Duration */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Duration of MBBS in Samarkand State Medical University
          </h2>
          <p className="text-[14px] sm:text-[16px] font-semibold">
            Samarkand State Medical University offers a range of medical
            courses, including MBBS with a 6-year duration, combining academic
            study and internship:
          </p>
        </div>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
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
                5 + 1 years
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Admission Dates & Deadlines */}
      <div className="lg:w-[95%] mt-3 lg:mx-auto flex flex-col lg:p-0 p-3 gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Samarkand State Medical University - Admission Dates & Deadlines 2025
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550]">
          The intake dates for the 2025 - 2026 intake cycle at Samarkand State
          Medical University are as follows:
        </p>
        <Table data={admissionData} headers={["Events", "Dates"]} />
      </div>

      {/* Ranking */}
      <div className="lg:w-[95%] mt-3 lg:mx-auto flex flex-col p-3 lg:p-0 gap-3 py-1">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Samarkand State Medical University Ranking
        </h2>
        <p className="text-sm font-semibold">
          According to 4icu.org, the following is the country and world ranking:
        </p>
        <Table
          data={[rankingData]}
          headers={["Country Ranking", "World Ranking"]}
        />
      </div>

      {/* Infrastructure and Facilities */}
      <div className="lg:w-[95%] mt-4 lg:mx-auto flex flex-col lg:p-0 p-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Infrastructure & Facilities At Samarkand State Medical University
        </h2>
        <p className="text-justify font-semibold text-[14px] sm:text-[16px] mt-1">
          The university offers study rooms for self-study and group activities,
          along with internet facilities in hostels and across the campus:
        </p>
        <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 mt-2">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mt-1"
              />
              <p className="text-justify">{facility}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Intake;
