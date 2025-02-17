"use client";
import Image from "next/image";
import React from "react";

import Andijan from "../../public/UniversityLogo/Andijan State Medical Institute.webp";
import Bukhara from "../../public/UniversityLogo/Bukhara State Medical InstituTE.webp";
import Fergana from "../../public/UniversityLogo/Fergana Medical Institute.webp";
import Samarkand from "../../public/UniversityLogo/samarkand State.webp";
import Tashkent from "../../public/UniversityLogo/Tashkent Medical Academy.webp";
import TashkentDental from "../../public/UniversityLogo/Tashkent State Dental Institute.webp";
import TashkentPediatric from "../../public/UniversityLogo/Tashkent Pediatric Medical Institute.webp";
const Partner = () => {
  return (
    <div className="w-full bg-[#F5F5F7] py-10 ">
      <div className="w-[80%] mx-auto">
        <h2 className="text-[24px] md:text-[36px] font-[700] w-full text-center">
          Our Partner{" "}
          <span className="text-[#C7183A] underline">Universities</span>
        </h2>
        <p className="text-center mt-2 text-[16px] lg:text-[18px]">
          We are affiliated with these medical universities
        </p>

        {/* Marquee Container */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex w-[200%] animate-marquee items-center">
            {[
              Andijan,
              Bukhara,
              Fergana,
              Samarkand,
              Tashkent,
              TashkentDental,
              TashkentPediatric,
            ].map((img, index) => (
              <div key={`original-${index}`} className="mx-8 flex-shrink-0">
                <Image
                  src={img}
                  alt="University Logo"
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
            ))}

            {[
              Andijan,
              Bukhara,
              Fergana,
              Samarkand,
              Tashkent,
              TashkentDental,
              TashkentPediatric,
            ].map((img, index) => (
              <div key={`duplicate-${index}`} className="mx-8 flex-shrink-0">
                <Image
                  src={img}
                  alt="University Logo"
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
            ))}

            {[
              Andijan,
              Bukhara,
              Fergana,
              Samarkand,
              Tashkent,
              TashkentDental,
              TashkentPediatric,
            ].map((img, index) => (
              <div key={`duplicate-${index}`} className="mx-8 flex-shrink-0">
                <Image
                  src={img}
                  alt="University Logo"
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
            ))}

            {[
              Andijan,
              Bukhara,
              Fergana,
              Samarkand,
              Tashkent,
              TashkentDental,
              TashkentPediatric,
            ].map((img, index) => (
              <div key={`duplicate-${index}`} className="mx-8 flex-shrink-0">
                <Image
                  src={img}
                  alt="University Logo"
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partner;
