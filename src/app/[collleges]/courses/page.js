import React from "react";
import Image from "next/image";
import collegeImg from "../../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../../public/Images/collegeBgImg.png";
import { BiRupee } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import FacultiesOffered from "@/_components/mbbsingeorgia/courses/FacultiesOffered";
import FeeStructure from "@/_components/mbbsingeorgia/courses/FeeStructure";

const Page = () => {
  return (
    <>
      {/* Background Section */}
      <section
        aria-labelledby="college-heading"
        className="relative w-full h-[300px] sm:h-[400px]"
      >
        <div className="absolute h-[400px] w-full">
          {/* Responsive Images */}
          <Image
            src={collegeImg}
            alt="Andijan State Medical Institute Front View"
            className="w-full object-cover block sm:hidden h-[300px]"
            priority
          />
          <Image
            src={collegeBgImg}
            alt="Andijan State Medical Institute Background"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
            priority
          />
          <div className="h-[300px] sm:h-[380px] w-full absolute top-0 bg-black opacity-60"></div>
        </div>

        {/* Breadcrumb */}
        <nav className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home / MBBS In Uzbekistan /
            <span className="text-[#C7183A]"> Courses</span>
          </p>
        </nav>

        {/* Main Heading */}
        <div
          id="college-heading"
          className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 flex flex-col gap-1"
        >
          <h1 className="text-[24px] sm:text-4xl font-semibold mt-3">
            Andijan State Medical Institute
          </h1>
          <div className="w-[80%] h-[30px] bg-gradient-to-r from-[#C7183A] to-[#09464900] flex items-center justify-start">
            <h2 className="text-[14px] ml-4">#1 In Uzbekistan</h2>
          </div>

          {/* College Information */}
          <div className="text-white w-[90%]">
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 items-center">
                <BiRupee className="text-3xl text-[#C7183A]" />
                <p className="text-[14px]">3,80,000 / year</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdLocationOn className="text-3xl text-[#C7183A]" />
                <p className="text-[14px]">Andijan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section aria-labelledby="fee-structure">
        <h2 id="fee-structure" className="sr-only">
          Fee Structure
        </h2>
        <FeeStructure />
      </section>

      {/* Faculties Offered Section */}
      <section aria-labelledby="faculties-offered">
        <h2 id="faculties-offered" className="sr-only">
          Faculties Offered
        </h2>
        {[...Array(3)].map((_, index) => (
          <FacultiesOffered key={index} />
        ))}
      </section>
    </>
  );
};

export default Page;
