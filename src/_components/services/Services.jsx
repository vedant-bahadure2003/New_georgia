import Image from "next/image";
import React from "react";

import ServicesBgImg from "../../../public/Images/ServicesBgImg.png";
import ServicesImg from "../../../public/Images/ServiceImg.png";

import service1 from "../../../public/home-icons/service1.svg";
import service2 from "../../../public/home-icons/service2.svg";
import service3 from "../../../public/home-icons/service3.svg";
import service4 from "../../../public/home-icons/service4.svg";
import service5 from "../../../public/home-icons/service5.svg";
import service6 from "../../../public/home-icons/service6.svg";

const Ourservices = () => {
  // Array of service images and titles
  const services = [
    {
      image: service1,
      title: "Admission",
      subtitle: "Secure admission to top universities.",
    },
    {
      image: service3,
      title: "Visa Processing",
      subtitle: "Simplified visa application support.",
    },
    {
      image: service5,
      title: "Accommodation",
      subtitle: "Safe and comfortable stays for Indian students.",
    },
    {
      image: service2,
      title: "Airport Pickup",
      subtitle: "Welcome service upon arrival.",
    },
    {
      image: service4,
      title: "Documentation",
      subtitle: "Complete support for document verification.",
    },
    {
      image: service6,
      title: "Free Counseling",
      subtitle: "Personalized guidance at every step.",
    },
  ];

  return (
    <>
      <div className="relative  w-full h-[300px] sm:h-[380px] border border-black">
        {/* Bg Image */}
        <div className="absolute h-[400px] w-full">
          <Image
            src={ServicesImg}
            alt="ServicesImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={ServicesBgImg}
            alt="ServicesBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-20 sm:top-24 text-white left-5 lg:left-[10%] text-sm font-semibold">
          <p>
            Home /<span className="text-[#C7183A]"> Services</span>
          </p>
        </div>
        {/* Heading */}
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 lg:left-[10%]  flex flex-col gap-1">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
            Services
          </h2>
        </div>
      </div>
      <div className="py-[30px] sm:py-[60px] bg-[url('/homeimage/sixthSectionBg.png')] bg-cover bg-center">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-snug text-center">
          Our Valuable{" "}
          <span className="text-[#C7183A] underline">Services</span>
        </h2>
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-evenly gap-5 mt-[40px]">
          {/* Services Section */}
          <div className="w-full sm:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4 sm:gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-[#Fff] items-center border-2 rounded-[10px] shadow-md w-[85%] sm:w-[294px] h-[278px] p-6"
                >
                  <div className=" flex items-center justify-center rounded-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] mt-5 sm:text-[24px] font-[600] text-[#C7183A] text-center">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-center mt-2">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourservices;
