import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";
import vector from "../../../../public/Images/vector.png";

const FacultiesOffered = () => {
  const intakeDates = [
    { event: "Faculty of Medicine", date: "6 Years" },
    { event: "Faculty of Medicine and Medical Education", date: "6 Years" },
    { event: "Faculty of Preventive Medicine", date: "5 Years" },
    { event: "Faculty of Military Medicine", date: "-" },
    {
      event: "Faculty of Higher Education Nursing School ",
      date: "3 Years",
    },
    { event: "Faculty of Medical Biology", date: "4 Years" },
  ];
  return (
    <div className="lg:w-[95%] lg:mx-auto">
      <div className="w-full  ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Faculties of Tashkent Medical Academy{" "}
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-[700] pb-3  flex gap-2 text-justify">
          Tashkent Pediatric Medical Institute offers a diverse range of
          faculties, providing a comprehensive platform for medical education
          and training:
        </p>
        {/* Faculty Boxes */}
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <thead>
            <tr className="bg-[#FFF7EE] border border-black">
              <th className="px-4 py-2 border border-black font-semibold text-center">
                Faculty
              </th>
              <th className="px-4 py-2 border border-black font-semibold text-center">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {intakeDates.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                <td className="px-4 py-2 border border-black ">{item.event}</td>
                <td className="px-4 py-2 border border-black ">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultiesOffered;
