"use client";

import { useState } from "react";
import Image from "next/image";
import Profile from "../../../../public/Images/profile.png";
import greentick from "../../../../public/Images/greentick.png";
import TableContent from "../TableContent";

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
                <span className="font-[550]">
                  {" "}
                  Akaki Tsereteli State University{" "}
                </span>{" "}
                was founded in 1930 as a government educational institution. It
                is a top medical university in Georgia, famous worldwide for its
                MBBS program for international students. It is an especially
                popular destination among Indian MBBS aspirants looking to study
                abroad. Akaki Tsereteli State University has a country rank of
                10, which makes it one of the top medical universities in
                Georgia and a world rank of 7803.br <br /> <br />
                At Akaki Tsereteli State University, the 6-year MBBS course,
                including a 1-year internship fee, is affordable. The total
                6-year MBBS program fee, including tuition, hostel, and
                transportation, is approximately $30,000 USD. English medium
                courses are designed for international as well as indian
                students. <br /> <br />
                The Akaki Tsereteli State University is famous for its modern
                teaching techniques, research-based curriculum, and
                well-equipped facilities, providing students with an excellent
                understanding of medical science and clinical practice. There
                are more than 10,000 students worldwide and over 1200 Indian
                students, including a rapidly increasing number of international
                students. <br /> <br /> Akaki Tsereteli State University grants
                an MBBS program recognized by prominent organizations, including
                the National Medical Commission (NMC), UNESCO, and WHO. This
                makes the degrees worldwide acceptable. <br /> <br />
                The availability of on-campus accommodation and student support
                services enhances the whole experience of international
                students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
