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
                Since 1972,{" "}
                <span className="font-bold">
                  Tashkent Pediatric Medical Institute{" "}
                </span>{" "}
                (formerly Central Asian Medical Pediatric Institute) has
                provided over 29500 highly qualified doctors. Based in Tashkent
                - Uzbekistan's capital city - the government university boasts
                its headquarters. It is a top medical university in Uzbekistan
                offering excellent education to students.
                <br /> <br />
                The university offers 6 years of MBBS courses, including 1 year
                of internship. The total fees of the 6-year MBBS course at
                Tashkent Pediatric Medical Institute is 21000 USD (Approx. INR
                18 lacs*)
                <br /> <br />
                The course is taught entirely in English, making the institution
                an ideal choice for both Indian and international students.
                Tashkent Pediatric Medical Institute has earned accreditation
                from both WHO and Uzbekistan's Ministry of Health and enjoys
                global and local recognition among medical authorities.
                <br /> <br />
                Tashkent Pediatric Medical Institute (TashPMI) has an intake
                period from September to October. The university offers modern
                educational infrastructure and top-notch hostel amenities to
                students.
                <br /> <br />
                Pediatrics has long been at the heart of this university.
                Undergraduate programs at UQ offer paediatrics, medical biology,
                medical pedagogy, and general medicine faculties, with multiple
                departments offering specialist courses.
                <br /> <br />
                Students can pursue doctoral studies through two dedicated
                programs while at the same time availing themselves of advanced
                medical courses available in both public and private sectors.
                <br /> <br />
                The University participates actively in exchange programs and
                international collaboration, such as with universities in South
                Korea and Russia. With expert faculty members, seminars and
                research initiatives that take place continuously throughout the
                academic year, it offers the perfect destination for aspiring
                medical professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
