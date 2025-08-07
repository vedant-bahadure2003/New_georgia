"use client";

import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const cards = [
  { src: "/e-chalan.png", label: "Pay e-Challan" },
  { src: "/report-lost.png", label: "Report Lost/Found Information" },
  {
    src: "/block-stolen.png",
    label: "Block Stolen/Lost Mobile",
  },
  { src: "/financial-fraud.png", label: "Report Financial Fraud" },
  { src: "/tenant-info.png", label: "Register Tenant Information" },
  {
    src: "/report-crime-against-women.png",
    label: "Report Crime Against Women/Children",
  },
  { src: "/lost-phone.png", label: "Notify Lost Mobile" },
  {
    src: "/cyber-crime.png",
    label: "Report Other Cyber Crimes",
  },
];

const ComplaintSection = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center px-4 md:px-6 lg:px-12 py-8 md:py-12 ">
      <div className="w-full lg:max-w-6xl  ">
        {" "}
        <h1 className="text-[34px] sm:text-3xl md:text-[36px]  lg:text-[48px] text-black mb-2  leading-tight">
          Complaint, Information & Security - At One Click
        </h1>
        <p className="text-gray-800 max-w-xl   text-[20px]  md:text-[20px] lg:mt-6 mb-6 md:mb-8 ">
          They perform many important tasks for the safety and order of society.
          Their responsibilities span across various sectors.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative w-full max-w-6xl mb-6 md:mb-12">
        <input
          type="text"
          placeholder="Search for Pay e-Challan, Missing Person, Download Forms..."
          className="w-full px-4 md:px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base pr-12"
        />
        <FaSearch className="absolute top-3.5 right-4 text-gray-500" />
      </div>

      {/* Main Content: Sidebar + Cards */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6 lg:gap-8">
        {/* Sidebar - Desktop */}
        <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left hidden lg:block">
          <div className=" lg:w-3/4">
            {" "}
            <h2 className="text-[#57462a] border-b border-[#57462a] p-4 text-[20px] md:text-[24px] cursor-pointer hover:text-[#6b5332] transition-colors">
              Online Services & Forms ▾
            </h2>
            <h2 className="text-[#57462a] border-b border-[#57462a] p-4 text-[20px] md:text-[24px] cursor-pointer hover:text-[#6b5332] transition-colors">
              Popular Information ▾
            </h2>
            <h2 className="text-[#57462a] border-b border-[#57462a] p-4 text-[20px] md:text-[24px] cursor-pointer hover:text-[#6b5332] transition-colors">
              What's New? ▾
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full lg:w-3/4">
          {/* Mobile Grid - 2 columns, equal heights */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md relative group aspect-square"
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Yellow gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded leading-tight">
                  {card.label}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid - Masonry Layout */}
          <div className=" hidden lg:grid grid-cols-4 auto-rows-[180px] gap-4">
            {cards.map((card, index) => {
              let spanClass = "";

              switch (index) {
                case 0:
                  spanClass = "col-span-1 row-span-1"; // Pay e-Challan
                  break;
                case 1:
                  spanClass = "col-span-1 row-span-1"; // Report Lost/Found Information
                  break;
                case 2:
                  spanClass = "row-span-1"; // Block Stolen/Lost Mobile
                  break;
                case 3:
                  spanClass = "row-span-2"; // Report Financial Fraud
                  break;
                case 4:
                  spanClass = "col-span-1 row-span-2 "; // Register Tenant Information
                  break;
                case 5:
                  spanClass = "col-span-2 row-span-2"; // Report Crime Against Women/Children
                  break;
                case 6:
                  spanClass = "col-span-3"; // Notify Lost Mobile
                  break;
                case 7:
                  spanClass =
                    "col-span-1 row-span-2 lg:relative lg:bottom-[196px] "; // Report Other Cyber Crimes
                  break;
                default:
                  spanClass = "col-span-1 row-span-1";
                  break;
              }

              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-md relative group ${spanClass}`}
                >
                  <Image
                    src={card.src}
                    alt={card.label}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Yellow gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                    {card.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet Grid - 3 columns, simplified layout */}
          <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4">
            {cards.map((card, index) => {
              let spanClass = "aspect-square";
              if (index === 5) {
                spanClass = "col-span-2 aspect-[2/1]";
              } else if (index === 6) {
                spanClass = "col-span-3 aspect-[3/1]";
              }
              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-md relative group ${spanClass}`}
                >
                  <Image
                    src={card.src}
                    alt={card.label}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Yellow gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                  <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded leading-tight">
                    {card.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar - Mobile (bottom) */}
        <div className="w-full space-y-3 text-left block lg:hidden mt-6">
          <h2 className="text-[#57462a]  text-lg sm:text-xl cursor-pointer hover:text-[#6b5332] transition-colors ">
            Online Services & Forms ▾
          </h2>
          <h2 className="text-[#57462a] text-lg sm:text-xl cursor-pointer hover:text-[#6b5332] transition-colors">
            Popular Information ▾
          </h2>
          <h2 className="text-[#57462a] text-lg sm:text-xl cursor-pointer hover:text-[#6b5332] transition-colors">
            What's New? ▾
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSection;
