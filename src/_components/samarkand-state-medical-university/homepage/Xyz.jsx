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
            <div className=" text-justify  w-full text-[14px] sm:text-[16px] leading-5 py-3 px-4 sm:px-6 relative">
              <p>
                <span className="font-bold">
                  {" "}
                  Samarkand State Medical University
                </span>{" "}
                is a government institution established in 1930. It is a top
                medical university in Uzbekistan. Due to its outstanding
                education standards and global recognition, this university is
                frequently chosen by Indian students looking for overseas MBBS
                opportunities. They offer 6-year MBBS programs with 1-year
                internships, all taught in English - making it an attractive
                destination for international students.
                <br />
                <br />
                Samarkand State Medical University has a country rank of 3,
                which makes it the best medical university in Uzbekistan and a
                world rank of 5827. <br /> <br />
                Home to over 11,000 students - 2,270 from abroad, Samarkand
                State Medical University offers comprehensive education across
                fields including medicine, dentistry, pharmacy paediatrics and
                pedagogy - with over 74 departments including modern classrooms
                as well as multimedia auditoriums and personal computers
                available at every campus location.
                <br /> <br />
                Samarkand State Medical University's MBBS program has earned
                international acclaim, receiving accolades from organisations
                such as the National Medical Commission (NMC), FAIMER, and the
                World Health Organization (WHO). The total fees for a 6-year
                MBBS program at Samarkand State Medical University in Uzbekistan
                for students are approximately 24,000 USD, covering tuition,
                hostel, food, living expenses, and other costs.
                <br />
                <br />
                Studying MBBS in Uzbekistan at Samarkand State Medical
                University is widely acclaimed for its modern amenities,
                research-driven faculty, and advanced medical training
                facilities. <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
