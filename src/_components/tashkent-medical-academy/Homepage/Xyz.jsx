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
                The <span className="font-bold">Tashkent Medical Academy</span>{" "}
                was founded in 2005 as a government public university. Students
                enrolled at this institution benefit from exceptional clinical
                training, which provides international students with excellent
                practical experience through their complete access to local
                hospitals.
                <br /> <br />
                The top medical institution in Uzbekistan, known as Tashkent
                Medical Academy, welcomes students from both local and
                international backgrounds with thousands of combined enrolments.
                <br /> <br />
                The institute currently runs 50 departments and has about 631
                teaching staff. More than 8500 students are presently studying
                in the MBBS program at the Tashkent Medical Academy, and it also
                includes many from India.
                <br /> <br />
                The TMA Uzbekistan offers 6 years of MBBS courses, including 1
                year of internship (Clinical Practice). With total tuition fees
                for whole MBBS course at around 21,000 USD (approximately INR 18
                lacs*)
                <br /> <br />
                Tashkent Medical Academy delivers internationally recognised
                degrees that obtain authorization from WHO, MCI/NMC, and various
                medical councils worldwide. Its well-established reputation as
                an institution determines high academic standards at Tashkent
                Medical Academy.
                <br /> <br />
                Students enrolled in the MBBS program at Tashkent Medical
                Academy study for six years while practising their skills at
                hospitals linked to the academy. The whole course is in English.
                Students are taught by professionals who work in the given
                industry, and this focuses on theory and practical knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
