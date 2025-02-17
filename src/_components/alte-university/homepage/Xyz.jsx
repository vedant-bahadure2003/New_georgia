"use client";

import { useState } from "react";
import Image from "next/image";
import Profile from "../../../../public/Images/profile.png";
import greentick from "../../../../public/Images/greentick.png";
import Muhammad from "../../../../public/Images/muhammad_riyaz.jpg";
import Link from "next/link";

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
                <span className="font-[550]"> Alte University </span> is a
                top-ranking private university in Georgia, established in 2002,
                with nearly 2,500 students from about 45 countries. It offers
                diverse courses across four colleges: Business, International
                Medicine, Law and Social Sciences, and Information Technology.
                It is famous for its modern methods of instruction and
                up-to-date facilities; it is an ideal option for international
                students due to its plethora of programs.
                <br /> <br />
                As a top medical university in Georgia, Alte University has a
                country rank of 33 and a world rank of 10,936. It recognises
                modern ways of teaching, is multidisciplinary and boasts
                fantastic infrastructure. The medium of instruction is English.
                The total 6-year MBBS fee is around USD 36,000, including
                accommodation, making it affordable for quality education
                abroad.
                <br /> <br />
                The MBBS course is a six-year study program in which a clinical
                internship is part of the study. As a top medical university, it
                is internationally accredited by the WHO, NMC, WFME, and other
                bodies. Alte University School of Medicine amalgamates
                cutting-edge academic study in the arts, medicine, social
                sciences, technology, business, and applied research in a
                student-friendly atmosphere.
                <br /> <br />
                Here, the real aim of the institution is applied research and
                innovative learning experiences, meeting real-world challenges
                to nurture students into empathetic and respectful beings while
                accompanying academic excellence so that they may become
                competent professionals in the world.
                <br /> <br />
                Besides academics, Alte University comprises a wonderful campus
                experience, modern laboratories, interactive classrooms, and
                robust student support services. Education here is a lifetime
                experience that instils confidence and excellent skills to work
                in this fast-paced world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
