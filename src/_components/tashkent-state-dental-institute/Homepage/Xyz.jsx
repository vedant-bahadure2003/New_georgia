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
                Established in 2014,{" "}
                <span className=" font-bold">
                  The Tashkent State Dental Institute
                </span>{" "}
                is located in the architecturally striking and culturally
                dynamic city of Tashkent, famous worldwide as a medical research
                and higher education center.
                <br /> <br />
                The MBBS duration at Tashkent State Dental Institute, faculty of
                Medicine is 6 years long with 1 year included internship. It is
                recognised by various organisations such as WHO, FAIMER, NMC
                (National Medical Commission), and the Ministry of Higher and
                Secondary Specialised Education of Uzbekistan.
                <br /> <br />
                Although the public institute is a rather new institution, it
                has been one of the top dental institutes of its time, earning
                various awards for teaching methods of a new, avant-garde
                standard and the level of high academic standards.
                <br /> <br />
                The total fees for a 6-year medicine program at Tashkent State
                Dental Institute in Uzbekistan are around 21,000 USD (approx INR
                18 Lacs*). The MBBS program is taught entirely in English,
                making it the best choice for Indian and international students.
                <br /> <br />
                The institute offers several specialised programs in the fields
                of Physiology and Pathology, General Medicine, Surgery, and
                Orthopaedics to provide students with holistic training.
                <br /> <br />
                The greatest strength of the institute is the highly qualified
                teaching staff, which is committed to helping students achieve
                academic and professional success. Furthermore, the university
                fosters a research-based culture that inspires students to
                participate in innovative initiatives to prepare them for future
                medical problems.
                <br /> <br />
                Students are allowed clean stay in dorms and have a canteen
                providing wholesome food to ensure a comfortable living
                environment. So, at present, the institute has 60 postgraduate
                students and 164 clinical residents, which constitute a very
                diversified academic community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
