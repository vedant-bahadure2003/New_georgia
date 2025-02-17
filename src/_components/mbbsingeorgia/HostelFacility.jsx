import React from "react";
import HostelImg from "../../../public/Images/hostelImg.png";
import Image from "next/image";
const HostelFacility = () => {
  return (
    <>
      <div className=" py-4 lg:w-[95%] lg:mx-auto p-4 sm:p-0 ">
        {/* Title Section */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] flex justify-start    text-[#C7183A] max-w-[90%] md:max-w-[500px] py-3 ">
          Are There Any Hostel Facilities Provided By Uzbekistan Medical
          Universities?
        </h2>
        <p className="text-[14px] lg:text-[16px] font-[550] max-w-[90%] md:max-w-[600px] text-justify ">
          It’s a good idea to research an institution’s accreditation with
          recognised bodies like the World Directory of Medical Schools (WDOMS),
          the Educational Commission for Foreign Medical Graduates (ECFMG), etc.
          before making a decision. It’s a profession. Therefore, you must make
          a wise decision.
        </p>

        {/* Hostel Image Section */}
        <div className=" w-[90%] flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 mt-6 p-5">
          {/* Image Card 1 */}
          <div className="relative w-[90%] max-w-[264.69px] h-[215.66px] rounded-xl ">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#C7183A] to-transparent rounded-xl">
              <p className="font-semibold text-sm">Hostel For Students</p>
              <p className="text-sm">Affordable for college students</p>
            </div>
          </div>
          {/* Image Card 2 */}
          <div className="relative w-[90%] max-w-[264.69px] h-[215.66px] rounded-xl mx-auto">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#C7183A] to-transparent rounded-xl">
              <p className="font-semibold text-sm">Hostel For Students</p>
              <p className="text-sm">Affordable for college students</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center  w-[85%] mt-6">
          <button className="bg-[#C7183A]  py-2 md:px-8 md:py-3 rounded-lg text-white text-sm md:text-lg">
            Visit Gallery
          </button>
        </div>
      </div>
    </>
  );
};

export default HostelFacility;
