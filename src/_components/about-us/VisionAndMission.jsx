import React from "react";
import MainImage from "../../../public/aboutus/Group 1707485460.svg";
import vector from "../../../public/Images/vector.png";
// import MobileView from "../../../public/aboutus/21225 1.svg";
import MobileView from "../../../public/aboutus/21225 1.svg";
import SecondMainImage from "../../../public/aboutus/Frame 1000002123.svg";
import SecondMobileView from "../../../public/aboutus/men-women-hospital-gowns-hold-medical-equipment-their-hands 1.svg";

import Image from "next/image";

function VisionAndMission() {
  return (
    <div className="h-full">
      <div className="h-auto hidden md:block pb-10 relative">
        <div className="w-full h-full relative left-[60%]">
          <Image
            src={MainImage}
            className="w-[454px] h-[373px]"
            alt="Main Image"
          />
        </div>
        <div className="absolute top-[3%] left-36">
          <h2
            className="text-[24px] text-[#C7183A] font-bold 
        "
          >
            Our Vision
          </h2>
          <div className="flex items-center mt-7 gap-2">
            <Image
              src={vector}
              alt="Tick"
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[16px]">
              To make the journey of studying medicine easy and stress-free for
              students.
            </p>
          </div>
          <div className="flex items-center mt-7 gap-2">
            <Image
              src={vector}
              alt="Tick"
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[16px]">
              To be a trusted leader in helping students study MBBS abroad.
            </p>
          </div>
          <div className="flex items-center mt-7 gap-2">
            <Image
              src={vector}
              alt="Tick"
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[16px]">
              To empower future doctors by giving them access to world-class
              medical education <br /> at affordable costs.
            </p>
          </div>
          <div className="flex items-center mt-7 gap-2">
            <Image
              src={vector}
              alt="Tick"
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[16px]">
              To make the journey of studying medicine easy and stress-free for
              students.
            </p>
          </div>
          <div className="flex items-center mt-7 gap-2">
            <Image
              src={vector}
              alt="Tick"
              className="mt-1 sm:w-[20px] sm:h-[20px]"
            />
            <p className="text-[16px]">
              To leave a lasting impact by making medical education accessible
              and achievable for all.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-full relative">
            <Image
              src={SecondMainImage}
              className="mx-auto h-full"
              alt="Main Image"
            />
          </div>
          <div className="absolute top-[10%] right-[15%]">
            <h2
              className="text-[24px] text-[#C7183A]  mt-8 font-bold 
        "
            >
              Our Mission
            </h2>
            <div className="flex items-center mt-3 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[16px]">
                To guide and support Indian students in fulfilling their dream
                of studying <br /> MBBS abroad.
              </p>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To provide clear, reliable, and personalized help with choosing
                universities, admission <br /> processes, and career planning.
              </p>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To make studying abroad simple by offering complete support for
                documentation, visa <br /> processing, and pre-departure
                preparations.
              </p>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To connect students with affordable, high-quality medical
                education in top global <br /> universities.
              </p>
            </div>
            <div className="flex items-center mt-3 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To build trust with students and parents by focusing on their
                success and happiness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view  */}
      <div className="h-auto pb-10 relative mt-5 block md:hidden">
        <h2
          className="text-[24px] text-center mb-5 font-bold 
        "
        >
          Our <span className="text-[#C7183A]">Vision</span>
        </h2>
        <div className="border shadow-md rounded-lg w-[94%] mx-auto overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={MobileView}
              className="w-full h-full"
              alt="Main Image"
            />
          </div>
          <div className="px-2 py-6">
            <div className="flex items-center  gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To be a trusted leader in helping students study MBBS abroad.
              </p>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To empower future doctors by giving them access to world-class
                medical education at affordable costs.
              </p>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To make the journey of studying medicine easy and stress-free
                for students.
              </p>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To help shape a brighter future for global healthcare by
                supporting aspiring medical professionals.
              </p>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <Image
                src={vector}
                alt="Tick"
                className="mt-1 sm:w-[20px] sm:h-[20px]"
              />
              <p className="text-[14px]">
                To leave a lasting impact by making medical education accessible
                and achievable for all.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <h2
            className="text-[24px] text-center mt-8 mb-5 font-bold 
        "
          >
            Our <span className="text-[#C7183A]">Mission</span>
          </h2>
          <div className="border shadow-md rounded-lg w-[94%] mx-auto overflow-hidden">
            <div className="w-full h-full -mt-1">
              <Image
                src={SecondMobileView}
                className="w-full h-full"
                alt="Main Image"
              />
            </div>
            <div className="px-2 py-6">
              <div className="flex gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px]">
                  To guide and support Indian students in fulfilling their dream
                  of studying MBBS abroad.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px]">
                  To provide clear, reliable, and personalized help with
                  choosing universities, admission processes, and career
                  planning.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px]">
                  To make studying abroad simple by offering complete support
                  for documentation, visa processing, and pre-departure
                  preparations.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px]">
                  To connect students with affordable, high-quality medical
                  education in top global universities.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[14px]">
                  To build trust with students and parents by focusing on their
                  success and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
