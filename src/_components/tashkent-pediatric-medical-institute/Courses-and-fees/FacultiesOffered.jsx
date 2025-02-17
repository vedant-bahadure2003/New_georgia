import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";

const facultiesData = [
  {
    subjects: [
      "I - Pediatric faculty",
      "II - Pediatrics and Medical Biology Faculty",
      "Medical - Pedagogical and Medical Faculty  ",
      "Internal Faculty",
      "Faculty of Nursing with Higher Education",
    ],
  },
];

const FacultiesOffered = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto">
      <div className="w-full px-4 sm:px-0 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] mb-4">
          Faculties at Tashkent Pediatric Medical Institute
        </h2>
        <p className="text-[14px] sm:text-[16px]  ">
          Tashkent Pediatric Medical Institute offers a diverse range of
          faculties, providing a comprehensive platform for medical education
          and training:
        </p>
        {/* Faculty Boxes */}
        <div className="flex flex-col gap-5 w-full">
          {facultiesData.map((faculty, index) => (
            <div
              key={index}
              className="w-full md:w-[90%]  flex flex-col justify-start bg-white  p-4  "
            >
              {/* Faculty Title */}
              <p className="font-semibold pb-3 text-[14px] sm:text-[16px]">
                {faculty.faculty}
              </p>

              {/* Subject List */}
              <div className="flex flex-col justify-between h-full space-y-2 sm:space-y-3 md:space-y-4">
                {faculty.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Image
                      src={rightsign}
                      alt="checkmark"
                      width={16} // ✅ Explicit width
                      height={16} // ✅ Explicit height
                      className="w-4 h-4"
                    />
                    <p className="text-[14px] sm:text-[16px]">{subject}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultiesOffered;
