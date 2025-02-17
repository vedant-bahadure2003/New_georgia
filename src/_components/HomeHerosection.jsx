"use client";
import Image from "next/image";
import React, { useState } from "react";
import BgheroImage from "../../public/homeimage/bannerImg.png";
import bgmobi from "../../public/homeimage/mobileViewBgBanner.png";
import LeadFormModalPopup from "./lead-form/LeadFormModalPopup";
import BookIcon from "../../public/homeimage/bannerBook-icon.svg";
import MedalIcon from "../../public/homeimage/bannerMedal-icon.svg";
import GobleIcon from "../../public/homeimage/bannerGoble-icon.svg";
import MoneyIcon from "../../public/homeimage/bannerMoney-icon.svg";

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Low-cost",
      description: "Low-cost medical education starting from INR 5 Lacs*",
      image: BookIcon,
    },
    {
      id: 2,
      title: "NMC & WHO recognized",
      description: "Study in NMC & WHO recognized medical colleges",
      image: MedalIcon,
    },
  ];

  const listItems = [
    {
      id: 1,
      text: "NMC & WHO recognized",
      image: MedalIcon,
    },
    {
      id: 2,
      text: "Affordable tuition fees",
      image: BookIcon,
    },
    {
      id: 3,
      text: "No donation required",
      image: MoneyIcon,
    },
    {
      id: 4,
      text: "Globally accepted degrees",
      image: GobleIcon,
    },
  ];
  return (
    <>
      <div className="w-full hidden md:block :h-[90vh] relative ">
        <Image
          src={BgheroImage}
          alt="bg hero Image"
          className="w-full h-full object-cover"
        />
        <div className=" flex items-center justify-between absolute top-[30%] left-[12%] text-white">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-[58px] font-[500] leading-[64px] text-black">
                Study <span className="text-[#C7183A]">MBBS</span> <br /> In{" "}
                <span className="text-[#C7183A]">Georgia</span>
              </h1>
              <div className="relative text-black">
                <div className="mt-8 flex flex-col gap-4">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="flex items-center gap-4 bg-white shadow-lg rounded-md p-5 border border-gray-200"
                    >
                      <div className="text-[#000]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-[500] text-[#000]">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:hidden h-[60vh] overflow-hidden">
        <Image
          src={bgmobi}
          alt="mobileheroimg"
          className="absolute top-0 left-0 min-h-full w-full"
        />

        <div className="absolute top-3 left-0 z-20 w-full h-full flex flex-col items-start justify-center gap-4 pl-5">
          <h3 className="text-[32px] font-[600] leading-[38px] text-black">
            Study <span className="text-[#C7183A]">MBBS</span> <br /> In{" "}
            <span className="text-[#C7183A]">Georgia</span>
          </h3>
          <div className="w-full space-y-2 text-black">
            {listItems.map((item) => (
              <li key={item.id} className="flex gap-2 text-[14px]">
                <Image
                  src={item.image}
                  alt={`icon-${item.id}`}
                  width={18}
                  height={18}
                  className="object-contain"
                />
                {item.text}
              </li>
            ))}
          </div>
          <button className="px-6 py-2 mt-6 sm:mt-8 font-[500] text-white bg-[#C7183A] rounded-[6px]">
            Apply Now
          </button>
        </div>
      </div>
      {isOpen && (
        <LeadFormModalPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Herosection;
