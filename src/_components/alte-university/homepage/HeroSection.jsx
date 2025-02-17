"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import Bukhara from "../../../../public/bannerImg/Bukhara State Medical Institute final.webp";
import bukhara from "../../../../public/bannerImg/Bukhara State Medical Institute final 1.webp";
const navLinks = [
  { name: "Overview", link: "/alte-university" },
  {
    name: "Courses & Fees",
    link: "/alte-university/courses-and-fees",
  },
  {
    name: "Admission",
    link: "/alte-university/admission",
  },
];

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const isSpecialPage =
    pathname.includes("/courses-and-fees") || pathname.includes("/admission");

  return (
    <div className="absolute top-20 sm:top-[90px] text-white font-semibold px-4 sm:px-[170px] text-xs sm:text-sm">
      <p>
        <Link href="/" className="text-white">
          Home
        </Link>

        {isSpecialPage && (
          <span>
            {" / "}
            <Link href="/alte-university" className="text-[#ffffff]">
              Alte University
            </Link>
          </span>
        )}

        {pathSegments.map((crumb, index) => {
          const breadcrumbPath = `/${pathSegments
            .slice(0, index + 1)
            .join("/")}`;

          if (isSpecialPage && index === 0) return null;

          // Handle breadcrumb name changes
          let breadcrumbLabel = crumb.replace(/-/g, " "); // Convert dashes to spaces
          if (crumb === "alte-university")
            breadcrumbLabel = "  Alte University";
          if (crumb === "courses-and-fees") breadcrumbLabel = "Courses & Fees";
          if (crumb === "admission") breadcrumbLabel = "Admission";

          return (
            <span key={index}>
              {" / "}
              {index === pathSegments.length - 1 ? (
                <span className="text-gray-400">{breadcrumbLabel}</span>
              ) : (
                <Link href={breadcrumbPath} className="text-[#ffffff]">
                  {breadcrumbLabel}
                </Link>
              )}
            </span>
          );
        })}
      </p>
    </div>
  );
};

const HeroSection = ({ headingTitle }) => {
  const pathname = usePathname(); // Track current path

  let title;
  if (headingTitle) {
    title = `  Alte University - ${headingTitle}`;
  } else if (pathname.includes("/courses-and-fees")) {
    title = "  Alte University - Courses & Fees 2025";
  } else if (pathname.includes("/admission")) {
    title = "  Alte University - Admission Process";
  } else {
    title = "  Alte University";
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Bukhara}
            alt="collegeImg"
            className="w-full h-[300px] sm:hidden object-cover"
          />
          <Image
            src={bukhara}
            alt="collegeBgImg"
            className="hidden sm:block w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Heading */}
        <div className="absolute top-28 sm:top-40 w-full px-4 sm:px-[170px]">
          <h1 className="text-[24px] sm:text-[40px] font-semibold text-white">
            {title}
          </h1>
          {/* <div className="w-[80%] h-[30px] bg-gradient-to-r from-[#C7183A] to-[#09464900] flex items-center pl-4">
            <h2 className="text-sm sm:text-base">#1 In Uzbekistan</h2>
          </div> */}

          <div className="flex flex-wrap gap-4 text-white text-xs sm:text-base mt-2">
            <div className="flex items-center gap-1">
              <MdOutlineAttachMoney className="text-xl sm:text-3xl text-[#C7183A]" />
              <p>3200 USD/ year *</p>
            </div>
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-xl sm:text-3xl text-[#C7183A]" />
              <p>Alte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full bg-white shadow-md flex flex-wrap justify-center md:justify-start py-2 md:py-3 px-4 md:px-24">
        <div className="flex flex-wrap gap-5 md:gap-8 justify-center">
          {navLinks.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link key={index} href={item.link}>
                <button
                  className={`text-[#C7183A] font-[550] text-[14px] sm:text-[16px] px-1 py-2 transition-all duration-200 ${
                    isActive ? "bg-gray-200 border-b-2 border-[#C7183A]" : ""
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
