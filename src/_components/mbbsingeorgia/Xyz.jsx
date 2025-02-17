"use client";

import React, { useState } from "react";
import Image from "next/image";
import Profile from "../../../public/Images/profile.png";
import Muhammad from "../../../public/Images/muhammad_riyaz.jpg";
// import TableContent from "./TableContent";
import greentick from "../../../public/Images/greentick.png";
import Link from "next/link";

const Xyz = () => {
  return (
    <>
      {/* Content */}
      <div className="w-full ">
        {/* Main content container */}
        <div className="flex w-full  items-center mt-[1rem] px-1 sm:px-2 lg:px-0">
          <div className="h-fit w-full flex flex-col bg-white rounded-md ">
            {/* Profile section */}
            <div className="flex gap-3 w-full h-[3.125rem] items-center px-4 sm:px-6">
              <div className="w-[55px] h-[55px]">
                <Image
                  src={Muhammad}
                  alt="profile"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div className="text-[14px] lg:text-[16px] font-[450]">
                <h2>
                  <Link href="https://www.linkedin.com/in/muhammed-riyaz-0a3223139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <span className="text-blue-600 font-[550] ">
                      Muhammed Riyaz, <br />{" "}
                    </span>{" "}
                  </Link>{" "}
                  MBBS Admission Expert{" "}
                </h2>
              </div>

              <div className=" relative bottom-[10px] right-10">
                <Image
                  src={greentick}
                  alt="greentick"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>

            {/* Text section */}
            <div className="text-justify   w-full leading-5 py-3 px-4 sm:px-6 relative">
              <p className="text-black text-[14px] sm:text-[16px] ">
                <span className="font-bold"> MBBS in Georgia</span> is an
                excellent and ideal choice for International students. It is a
                popular and safe choice for many Indian students to study at
                MBBS. European nations are widely recognised for their modern
                healthcare facilities and outstanding faculty.
                <br /> <br />
                The duration of the MBBS course in Georgia is 6 years, which
                includes 5 years of theoretical classes and 1 year of
                internship.The annual cost of an MBBS degree in Georgia 2025
                ranges between $4,000 to 8,000 USD, making the cost much lower
                than in India.
                <br /> <br />
                Europe stands out as a beacon for medical education standards of
                global distinction. The top universities offering MBBS programs
                include Alte University, Georgian National University SEU,
                University of Georgia Tbilisi and many more.
                <br /> <br />
                The MBBS course in Georgia is taught in English to ensure smooth
                learning for international students. Admissions for MBBS/MD in
                Georgia begin in October and March, with classes starting in
                September and March respectively.
                <br /> <br />
                Eligibility requirements include a NEET qualification and a
                minimum of 50% in Physics, Chemistry, and Biology in high
                school. Medical universities in Georgia are recognised by NMC,
                WHO, WFME, ECFMG, and FAIMER as official MBBS institutions.{" "}
                <br /> <br />
                Over 12,000 Indian students choose the best medical universities
                in Georgia for studies due to its high-quality education,
                affordability, world-class healthcare facilities, 100% safety,
                and an excellent teacher-student ratio of 12:1.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="p-5">
          <TableContent />
        </div> */}
      </div>
    </>
  );
};

export default Xyz;
