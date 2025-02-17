"use client";

import { useState } from "react";
import Image from "next/image";
import Profile from "../../../../public/Images/profile.png";
import greentick from "../../../../public/Images/greentick.png";
import Link from "next/link";
import Muhammad from "../../../../public/Images/muhammad_riyaz.jpg";

const Xyz = () => {
  return (
    <>
      {" "}
      {/* Xyz employee */}
      <div className="  py-3 w-full  ">
        <div className=" sm:mt-[40px]   ">
          <div className=" bg-white rounded-md">
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
            <div className=" text-justify  w-full text-[14px] sm:text-[16px]  leading-5 py-3 px-4 sm:px-6 relative">
              <p>
                The
                <span className="font-[550]">
                  {" "}
                  Fergana Medical Institute of Public Health{" "}
                </span>{" "}
                (FMIPH) was founded in 1991 as a public university. The
                institute offers an excellent clinical setting to offer great
                exposure to international students. The institute has its own
                hospitals where students can gain practical experience. <br />{" "}
                <br /> Fergana Medical Institute of Public Health is one of the
                top Medical colleges in Uzbekistan and has thousands of students
                from Uzbekistan as well as from other countries. The institute
                currently runs 19 departments and has about 147 faculty members.
                More than 350 students from India are currently studying in the
                English medium MBBS program at the FMIPH.
                <br /> <br />
                The total cost of the 6-year MBBS course at Fergana Medical
                Institute of Public Health in Uzbekistan is 21000 USD. This
                includes tuition fees and other expenses such as visa extension,
                government registration, airfare, food costs, and miscellaneous
                charges. The hostel fee is 750 USD per year.
                <br /> <br />
                The Fergana Medical Institute of Public Health awards
                internationally recognized degrees accredited by the WHO and
                MCI/NMC. The focus on both theory and practice is renowned, and
                the reputation of the institute is one of the reasons for
                setting high academic standards. This is why the applicants
                prefer the institute, especially the Indian students.
                <br /> <br />
                MBBS at FMIPH is a 6 program that includes practical training at
                the associated hospitals. Students receive academic and
                practical knowledge; they are taught by professionals who work
                in the given industry. The whole course is in English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
