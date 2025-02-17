import React from "react";
import universityimg from "../../../../public/Images/hat.png";
import vector from "../../../../public/Images/vector.png"; // ✅ Importing vector properly
import Image from "next/image";

const CourseOffered = () => {
  return (
    <>
      {/* Accreditation Section */}
      <div className="bg-[#FFF9EA] ml-3 lg:w-[95%] lg:mx-auto md:p-12 p-6 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-[#00a1ab] text-[22px] lg:text-[28px] font-[700] mb-4">
          Accreditation and Recognition of Tashkent Pediatric Medical Institute{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Tashkent Pediatric Medical Institute holds accreditation from both
          international and national medical authorities:
        </p>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <Image
              src={universityimg}
              alt="University Image"
              width={176} // Explicit width
              height={128} // Explicit height
              className="w-32 h-24 sm:w-44 sm:h-32"
            />
          </div>
        </div>

        <ul className="space-y-2 text-gray-800 text-[14px] sm:text-[16px]">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            It is officially recognised by the World Health Organization (WHO)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Ministry of Health of the Republic of Uzbekistan.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            National Medical Commission (NMC)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Additionally, the institute meets the standards set by medical
            councils, making its degrees globally accepted.
          </li>
        </ul>
      </div>

      {/* Students life */}
      <div
        id="Intake"
        className=" lg:w-[95%] ml-3 lg:mx-auto flex flex-col gap-2 mt-[30px] p-1"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Students Life at Tashkent Pediatric Medical Institute
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col  ">
          <div className="text-[14px] sm:text-[16px] flex flex-col ">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 text-[14px] sm:text-[16px] font-[700]">
                Tashkent is known as the cultural capital of the Islamic world
                and the capital and largest city of Uzbekistan.
              </p>
              <div className="text-[14px] sm:text-[16px] py-3 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-8">
                {[
                  "This beautiful city attracts many tourists with its gardens, mosques, museums, art galleries, shopping markets and delicious food offerings.   ",
                  "Popular locations in Tashkent include Chorsu Bazaar, Chimgon Market, Navoi Opera Theater, and Japanese Garden.  ",
                  "Tashkent offers students who come here for higher education an unforgettable student life experience.",
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

      {/* Hostel & Accommodation at Andijan State Medical Institute */}

      <div className=" flex flex-col lg:w-[95%] lg:mx-auto py-6 ml-3 bg-white ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Hostel & Accommodation at Tashkent Pediatric Medical Institute
        </h2>

        <p className="text-justify font-semibold py-2 text-[14px] sm:text-[16px] text-black">
          Tashkent Pediatric Medical Institute provides hostel facilities to its
          students as their accommodation option:
        </p>

        {/* Document List */}
        <div className="flex flex-col gap-4">
          {[
            "The hostel provides internet access together with a clean and sanitary canteen. ",
            "The hostel facility includes a cooking area for students who prefer to prepare their own meals. ",
            "Students can find comfort in the hostel environment after spending a full day of study.",
            "Nearby shops and supermarkets, canteen, laundry services, gymnasium, sports fields, laboratories, transportation facilities, and grocery stores.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Image
                src={vector}
                alt="vector"
                className="mt-1 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px] sm:text-[16px] text-black">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-6">
              <button className=" text-black py-2 px-4 text-sm sm:text-base rounded-md shadow-lg  w-full sm:w-auto">
                <span id="syllabus" className="text-[#C7183A] font-medium">
                  Read More:
                </span>{" "}
                Why Study MBBS at Andijan State Medical Institute?
              </button>
            </div> */}
      </div>
    </>
  );
};

export default CourseOffered;
