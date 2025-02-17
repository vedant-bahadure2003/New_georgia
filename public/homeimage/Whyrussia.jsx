"use client";
import React from "react";
import Image from "next/image";
import TrustedStudentImg from "../../../public/assets/home-images/georgiaMedi.png";
import expertise from "../../../public/assets/expertiseImg.png";
import studentImg from "../../../public/assets/studentImg.png";
import Education from "../../../public/assets/Education.png";
import visa from "../../../public/assets/visa.png";
import Link from "next/link";
import { GraduationCap, FileText, DollarSign, Users } from "lucide-react";

const Whyrussia = () => {
  const features = [
    {
      Icon: GraduationCap,
      title: "Admission Support",
      description:
        "Georgia Medi helps Indian students get admitted to top Georgia universities.",
    },
    {
      Icon: FileText,
      title: "Documentation Support",
      description:
        "Get hassle-free assistance with all necessary documentation required for MBBS admissions abroad.",
    },
    {
      Icon: DollarSign,
      title: "Free Counselling and Career Guidance",
      description:
        "They have a team of expert counselors who can help you select the right university and program.",
    },
    {
      Icon: Users,
      title: "Free Counseling & Career Guidance",
      description:
        "Receive personalized career advice and counselling to pave the way for a successful medical career.",
    },
  ];

  const statistics = [
    { number: "12+", text: "Years of Expertise", img: expertise },
    { number: "1500+", text: "Satisfied Students Counseled", img: studentImg },
    { number: "10+", text: "Universities Affiliated with Us!", img: Education },
    { number: "100+", text: "Visa Assistance", img: visa },
  ];

  return (
    <div>
      <div className="w-[95%] sm:w-[85%] lg:w-[80%] mx-auto pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-1 py-[60px]">
          {/* Left Section */}
          <div className="text-center sm:text-left md:pr-32">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-snug">
              Why{" "}
              <span className="text-[#C7183A] underline">Georgia Medi?</span>
            </h2>

            {/* Mobile Image */}
            <div className="block sm:hidden mt-6">
              <Image
                src={TrustedStudentImg}
                alt="Trusted Student"
                className="w-[80%] mx-auto"
              />
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-3 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-2 sm:px-0"
                >
                  <feature.Icon className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] text-[#C7183A]" />
                  {/* <Image
                    src={feature.img}
                    alt={`Feature-${index}`}
                    className="w-[40px] h-[40px] sm:w-[47px] sm:h-[47px]"
                  /> */}
                  <div className="">
                    <p className="text-[16px] md:text-[18px] font-[600] text-start mt-1">
                      {feature.title}
                    </p>
                    <p className="text-[14px] md:text-[16px] font-[400] text-start mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about-us">
              <button className="px-6 py-2 mt-6 sm:mt-8 font-[500] text-white bg-[#C7183A] rounded-[6px]">
                Read More
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden sm:block">
            <Image
              src={TrustedStudentImg}
              className="w-full"
              alt="Trusted Student"
            />
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/home-images/fifthSectionBg.png')] bg-cover bg-center">
        <div className="w-[95%] sm:w-[85%] lg:w-[80%] mx-auto py-8">
          <div className=" py-10 flex flex-col mt-[40px]">
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-14 w-full">
              {statistics.map((state, index) => (
                <div
                  key={index}
                  className="w-[160px] sm:w-full h-[180px] sm:h-[220px] bg-white rounded-[25px] shadow-lg flex flex-col items-center justify-center relative p-5"
                >
                  <p className="text-[28px] sm:text-[36px] text-center font-semibold text-[#C7183A]">
                    {state.number}
                  </p>
                  <p className="text-sm sm:text-base text-center mt-2">
                    {state.text}
                  </p>
                  <div className="w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full border flex justify-center items-center absolute top-[-20%] sm:top-[-25%] shadow-lg bg-white">
                    <Image
                      src={state.img}
                      alt={state.text}
                      className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyrussia;
