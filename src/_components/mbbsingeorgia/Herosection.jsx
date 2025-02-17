import React from "react";
import bgUzImg from "../../../public/Images/mbbsUzImg.png";
import uzBg from "../../../public/Images/uzBg.png";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="relative  w-ful h-[300px] sm:h-[400px]">
      <div className="absolute h-[400px] w-full">
        <Image
          src={bgUzImg}
          alt="MBBS In Georgia"
          className="w-full h-[300px] object-cover sm:hidden"
        />

        <Image
          src={uzBg}
          alt="MBBS In Georgia"
          className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
        />

        <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
      </div>

      <div className="absolute top-20 sm:top-[90px] text-white font-semibold px-4 sm:px-[170px] text-xs sm:text-sm">
        <p>
          <Link href="/">Home / </Link>
          <span className="text-[#9ca3a0]">MBBS In Georgia</span>
        </p>
      </div>

      <div className="absolute top-28 sm:top-40 w-full px-4 sm:px-[170px]">
        <h1 className="text-[24px] sm:text-[36px] font-semibold mt-3 text-white">
          MBBS In <span className="text-[#C7183A]">Georgia</span>
        </h1>
      </div>
    </div>
  );
};

export default Herosection;
