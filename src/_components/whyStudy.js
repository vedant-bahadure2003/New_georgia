import Image from "next/image";
import React from "react";
import Whystudyimg from "../../public/homeimage/why.png";
import Link from "next/link";
import Icon1 from "../../public/homeimage/icon1.svg";
import Icon2 from "../../public/homeimage/contract.svg";
import Icon3 from "../../public/homeimage/Budget.svg";
import Icon4 from "../../public/homeimage/hands.svg";
import Icon5 from "../../public/homeimage/subway_world.svg";
import Icon6 from "../../public/homeimage/Hotel.svg";
import MobileViewImg from "../../public/homeimage/mobileViewImg.png";

const Whystudy = () => {
  const data = [
    {
      id: 1,
      image: Icon1,
      description:
        "Experience world-class education at top medical universities in Georgia with modern facilities and expert faculty.",
    },
    {
      id: 2,
      image: Icon2,
      description:
        "It's easy to get admission to NMC-approved universities in Georgia.",
    },
    {
      id: 3,
      image: Icon3,
      description:
        "Study MBBS at low tuition fees, making Georgia an ideal choice for foreign students.",
    },
    {
      id: 4,
      image: Icon4,
      description:
        "Georgia is one of the safest European countries, offering a secure atmosphere for abroad students.",
    },
    {
      id: 5,
      image: Icon5,
      description:
        "MBBS degrees from Georgian universities are accepted worldwide, ensuring excellent career opportunities.",
    },
    {
      id: 6,
      image: Icon6,
      description:
        "Enjoy an affordable lifestyle in Georgia, with living expenses starting at just $62/month, including accommodation.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[95%] sm:w-[85%] lg:w-[80%] mx-auto py-10">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] text-center font-semibold py-6 mb-3 leading-snug">
          Why Study MBBS in{" "}
          <span className="text-[#C7183A] underline">Georgia?</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-center">
          {/* Left Section */}
          <div>
            {/* Mobile Image */}
            <div className="block sm:hidden">
              <Image
                src={MobileViewImg}
                alt="Why study in Georgia (Mobile)"
                className="w-[80%] mx-auto sm:w-[70%] md:w-[90%] lg:w-full"
              />
            </div>
            {/* Desktop Image */}
            <div className="hidden sm:block">
              <Image
                src={Whystudyimg}
                alt="Why study in Georgia"
                className="w-[80%] mx-auto sm:w-[70%] md:w-[90%] lg:w-full"
              />
            </div>
          </div>
          {/* Right Section */}
          <div>
            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start space-y-2 p-4"
                >
                  <Image
                    src={item.image}
                    alt={`icon-${item.id}`}
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                  <p className=" text-[16px] md:text-[18px] text-[#282828 ] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Mobile Scrollable Section */}
            <div className="sm:hidden flex flex-col space-y-4">
              {data.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 px-2 ">
                  <Image
                    src={item.image}
                    alt={`icon-${item.id}`}
                    width={50}
                    height={50}
                    className="object-contain flex-shrink-0"
                  />
                  <p className="text-[14px] leading-snug">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="block sm:hidden">
              <div className="flex justify-center">
                <Link href={"/mbbs-in-russia"}>
                  <button className="mt-5 px-6 py-2 text-[16px] md:text-[18px] font-medium text-white bg-[#C7183A] rounded-[6px] hover:bg-[#a5142f] transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            {/* Desktop Button */}
            <div className="hidden sm:block">
              <Link href={"/mbbs-in-russia"}>
                <button className="mt-5 px-6 py-2 text-[16px] md:text-[18px] font-medium text-white bg-[#C7183A] rounded-[4px] hover:bg-[#a5142f] transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whystudy;
