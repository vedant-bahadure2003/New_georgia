"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import collegeImg from "../../../public/aboutus/Hero section.svg";
import Link from "next/link";
const AboutUsHeroPage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState(null);

  useEffect(() => {
    if (window !== undefined) {
      const breadcrumb = window.location.pathname;
      setBreadCrumbs(breadcrumb);
    }
  }, []);

  console.log("yugyushdchsdc", breadCrumbs);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] ">
        {/* Background Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile Image */}
          <Image
            src={collegeImg}
            alt="collegeImg"
            className="w-full h-[250px] sm:hidden object-cover"
          />
          {/* Desktop Image */}
          <Image
            src={collegeImg}
            alt="collegeBgImg"
            className="hidden sm:block w-full h-full object-cover"
          />
          {/* Dark Overlay (Now Properly Constrained) */}
          {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
        </div>

        {/* Breadcrumbs */}
        <div className="absolute top-[35%] lg:top-[25%] sm:top-24 text-white left-16 lg:left-40 text-[14px] sm:text-sm font-semibold">
          <p>
            <Link href="/" className="text-white">
              Home
            </Link>{" "}
            /<span className="text-[#9ca3a0]"> About</span>
          </p>
        </div>

        {/* Heading */}
        <div className="absolute top-[50%] sm:top-40 w-[85%] sm:w-[50%] left-16 lg:left-40 flex flex-col gap-2 text-white">
          <h1 className="text-[24px] sm:text-4xl font-semibold">About</h1>
        </div>
      </div>
    </>
  );
};

export default AboutUsHeroPage;
