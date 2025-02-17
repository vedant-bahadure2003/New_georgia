"use client";
import React, { useState } from "react";
import { galaryData } from "@/data/galaryData/galaryData";
import collegeImg from "../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../public/Images/collegeBgImg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [gallery, setGallery] = useState(galaryData);
  const router = useRouter();
  const handleOnClick = (id) => {
    router.push(`/gallery/${id}`);
  };

  return (
    <>
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px]">
        {/* Background Image */}
        <div className="absolute h-[400px] w-full">
          <Image
            src={collegeImg}
            alt="collegeBgImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={collegeBgImg}
            alt="collegeBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full absolute top-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home /<span className="text-[#C7183A]"> Gallery</span>
          </p>
        </div>
        {/* Heading */}
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 flex flex-col gap-1">
          <h1 className="text-[24px] sm:text-4xl font-semibold mt-3 w-full">
            Photo Gallery
          </h1>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="w-[85%] lg:w-[75%] mx-auto mt-[50px]">
        <div className="w-full  flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center  gap-10 ">
            {gallery.map((image, index) => (
              <div key={index} onClick={() => handleOnClick(image.id)}>
                <img
                  src={image.galaryImage}
                  alt="img"
                  className="w-[300px] h-[270px] lg:w-[350px] rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
