"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Universityimg from "../../public/homeimage/universityImg.png";
// import TashkentPediatric from "../../public/bannerImg/Tashkent Pediatric Medical Institute final.webp";
// import Andijan from "../../public/bannerImg/Andijan state medical university final.webp";
// import Bukhara from "../../public/bannerImg/Bukhara State Medical Institute final.webp";
// import Fergana from "../../public/bannerImg/Fergana medical institute of public helath final.webp";
// import Samarkand from "../../public/bannerImg/Samarkand state medical university final.webp";
// import Tashkent from "../../public/bannerImg/Tashkent Medical Academy final.webp";
// import TashkentDental from "../../public/bannerImg/Tashkent state dental institute final.webp";
// Import the Lead Form modal popup component
import LeadFormModalPopup from "./lead-form/LeadFormModalPopup";

const Univercity = () => {
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

  // Function to check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
    }
  };

  // Run scroll check on mount and when scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const colleges = [
    {
      name: "Alte University",
      fees: "3500 USD",
      duration: "6 years",
      link: "/alte-university",
      image: Universityimg,
    },
    {
      name: "Akaki Tsereteli State University",
      fees: "3400 USD",
      duration: "6 years",
      link: "/akaki-tsereteli-state-university",
      image: Universityimg,
    },
    {
      name: "Geomedi Medical University",
      fees: "3500 USD",
      duration: "6 years",
      link: "#",
      image: Universityimg,
    },
    {
      name: "European University Georgia",
      fees: "3200 USD",
      duration: "6 years",
      link: "#",
      image: Universityimg,
    },
    {
      name: "Georgian National University SEU",
      fees: "3500 USD",
      duration: "6 years",
      link: "#",
      image: Universityimg,
    },
    {
      name: "Ilia State University",
      fees: "3500 USD",
      duration: "6 years",
      link: "#",
      image: Universityimg,
    },
    {
      name: "university of georgia tbilisi",
      fees: "3500 USD",
      duration: "6 years",
      link: "#",
      image: Universityimg,
    },
  ];

  // Function to handle Apply Now button click
  const handleApplyNowClick = () => {
    setShowModal(true);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-[20px] relative">
      <h2 className="text-[24px] md:text-[36px] font-bold text-center">
        Explore{" "}
        <span className="text-[#C7183A] underline">Medical Universities</span>{" "}
        in Gerogia
      </h2>
      <p className="text-center mt-2 text-[16px]">
        We are affiliated with these medical Georgia
      </p>
      <div className="w-full h-full mt-4 md:mt-10">
        <div
          className="w-full py-7 flex gap-5 overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          {colleges.map((college, index) => (
            <div
              className="w-[270px] flex-shrink-0 border shadow-xl rounded-lg"
              key={index}
            >
              <div className="w-full h-[160px] overflow-hidden">
                <Image
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                  width={270}
                  height={160}
                />
              </div>
              <div className="p-3 flex flex-col justify-between h-[200px]">
                <h3 className="text-[#C7183A] text-[20px] font-semibold">
                  {college.name}
                </h3>
                <p className="mt-2">Fees Structure: {college.fees}</p>
                <p>Duration: {college.duration}</p>
                <div className="flex justify-between mt-4">
                  {/* Apply Now Button with onClick to open modal */}
                  <button
                    onClick={handleApplyNowClick}
                    className="bg-[#C7183A] px-4 py-1.5 font-semibold rounded-md text-white"
                  >
                    Apply Now
                  </button>
                  <Link href={college.link}>
                    <button className="border border-[#C7183A] px-4 py-1.5 font-semibold text-[#C7183A] rounded-md">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backward Scroll Button - Hides initially */}
      {canScrollLeft && (
        <button
          className="absolute left-0 top-[60%] transform -translate-y-1/2 bg-[#C7183A] p-3 rounded-full text-white shadow-lg"
          onClick={() => scrollUniversities("backward")}
        >
          <IoIosArrowBack className="text-xl" />
        </button>
      )}

      {/* Forward Scroll Button */}
      <button
        className="absolute right-0 top-[60%] transform -translate-y-1/2 bg-[#C7183A] p-3 rounded-full text-white shadow-lg"
        onClick={() => scrollUniversities("forward")}
      >
        <IoIosArrowForward className="text-xl" />
      </button>

      {/* Render the Lead Form Modal Popup when showModal is true */}
      {showModal && (
        <LeadFormModalPopup
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Univercity;
