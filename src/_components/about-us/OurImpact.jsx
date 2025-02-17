import React from "react";
import Image from "next/image";
import coverImg from "../../../public/aboutus/Frame 1000002124.svg";

const OurImpact = () => {
  // Array of statistics
  const stats = [
    {
      number: "12+",
      title: "Years Experience",
      color: "text-[#C7183A]",
    },
    {
      number: "2K+",
      title: "Satisfied Students",
      color: "text-[#C7183A] ",
    },
    {
      number: "400+",
      title: "Team Members",
      color: "text-[#C7183A]",
    },
    {
      number: "30+",
      title: "Branches",
      color: "text-[#C7183A]",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block relative h-full">
        <Image
          src={coverImg}
          alt="collegeImg"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h2 className="text-[24px] font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center text-[#C7183A] py-6 px-16 rounded-xl transition-all duration-300 hover:bg-gradient-to-l from-black to-[#C7183A]  hover:text-white ${stat.color} bg-white`}
              >
                <h3 className="text-[50px] font-bold  ">{stat.number}</h3>
                <p className="text-[16px] font-medium">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative h-full block md:hidden bg-black">
        <div className="h-full flex flex-col items-center justify-center py-8 text-white">
          <h2 className="text-[24px] font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center py-6 px-16 rounded-xl transition-all duration-300 hover:bg-gradient-to-r  hover:from-[#C7183A] to-[#f88098] hover:text-white ${stat.color} bg-white`}
              >
                <h3 className="text-[50px] font-bold">{stat.number}</h3>
                <p className="text-[16px] font-medium">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurImpact;
