"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import TrustPageimg from "../../../public/aboutus/Group 1707485468.svg";
import vector from "../../../public/Images/vector.png";
import LeadFormModalPopup from "../lead-form/LeadFormModalPopup";

const TrustPage = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false); // Track if left arrow should be shown

  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle scrolling
  const scrollUniversities = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "forward" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full pt-10">
        {/* Desktop View */}
        <div className="hidden md:block w-[90%] sm:w-[80%] mx-auto pb-8">
          <div className="flex justify-center items-center gap-5 flex-wrap">
            <div className="w-[494px] h-[494px] -mt-28 sm:-mt-0">
              <Image
                src={TrustPageimg}
                alt="TrustPage"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-semibold text-[24px]">
                Your Expert Guide to <br />
                <span className="text-[#C7183A]">MBBS Studies in Georgia</span>
              </h2>
              <div className="flex items-center mt-7 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Georgia Medi is a sister company of KlickEdu.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Helping you turn your dream of studying MBBS in Georgia into a
                  reality.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Providing accurate, up-to-date information about universities
                  and admissions.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Connecting students with world-class medical education
                  opportunities.
                </p>
              </div>
              {/* Register Now Button now opens the popup */}
              <button
                type="button"
                className="bg-[#C7183A] mt-7 text-white py-2.5 px-6 rounded-lg text-[16px]"
                onClick={() => setShowModal(true)}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden w-[90%] sm:w-[80%] mx-auto mt-4 pb-8">
          <div className="flex justify-center items-center flex-wrap">
            <h2 className="font-semibold text-[24px] -mt-24 text-center">
              Your Expert Guide to
              <br />
              <span className="text-[#C7183A]">MBBS Studies in Georgia</span>
            </h2>
            <div className="w-[494px] h-[494px] sm:-mt-0 -mt-20">
              <Image
                src={TrustPageimg}
                alt="TrustPage"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="-mt-12">
              <div className="flex items-center gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Georgia Medi is a sister company of KlickEdu.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Helping you turn your dream of studying MBBS in Georgia into a
                  reality.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Providing accurate, up-to-date information about universities
                  and admissions.
                </p>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={vector}
                  alt="Tick"
                  className="mt-1 sm:w-[20px] sm:h-[20px]"
                />
                <p className="text-[16px]">
                  Connecting students with world-class medical education
                  opportunities.
                </p>
              </div>
              {/* Learn More Us Button now opens the popup */}
              <button
                type="button"
                className="bg-[#C7183A] mt-7 text-white py-2.5 px-6 rounded-lg text-[16px]"
                onClick={() => setShowModal(true)}
              >
                Learn More Us
              </button>
            </div>
          </div>
        </div>

        {/* Render the Lead Form Modal Popup when showModal is true */}
        {showModal && (
          <LeadFormModalPopup
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default TrustPage;
