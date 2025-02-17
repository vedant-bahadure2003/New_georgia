import React from "react";

const CoursesOffered = () => {
  // Dynamic data for courses offered in Georgia
  const courses = [
    { name: "MBBS / MD (Doctor of Medicine)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Pharmacy", duration: "4 Years" },
    { name: "Nursing", duration: "4 Years" },
  ];

  return (
    <div className="px-4 lg:w-[95%] lg:mx-auto md:px-0">
      <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
        Courses Offered by Georgia Medical Universities
      </h2>
      <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3 md:text-left">
        Georgia's medical universities offer various programs covering multiple
        medical fields, including MBBS, Dentistry, Pharmacy, and Nursing. These
        courses equip students with in-depth theoretical knowledge and hands-on
        practical experience in healthcare.
      </p>

      {/* Dynamic Courses Table */}
      <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black mt-5">
        <thead>
          <tr className="bg-[#FFF7EE] border">
            <th className="px-4 py-2 border border-black text-black text-center">
              Course Name
            </th>
            <th className="px-4 py-2 border border-black text-black text-center">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the courses data */}
          {courses.map((course, index) => (
            <tr
              key={index}
              className={`odd:bg-white even:bg-[#FFF7EE] ${
                index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"
              }`}
            >
              <td className="px-4 py-2 border border-black">{course.name}</td>
              <td className="px-4 py-2 border border-black">
                {course.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesOffered;
