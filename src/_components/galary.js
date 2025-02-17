"use client";
import React, { useState } from "react";
import { galaryData } from "@/data/galaryData/galaryData";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"; // Import forward arrow icon

const Galary = () => {
  const [galary, setImage] = useState(galaryData);

  return (
    <>
      <Head>
        <title>Photo Gallery | Celebrating Achievements</title>
        <meta
          name="description"
          content="Explore our recent photo gallery capturing moments of achievements and celebrations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="photo gallery, achievements, celebrations, image showcase"
        />
      </Head>

      <div className="w-[85%] lg:w-[82%] mx-auto mt-[50px]">
        <h2 className="text-[24px] lg:text-[36px] font-bold text-center">
          Recent Photo <span className="text-[#C7183A] underline">Gallery</span>
        </h2>
        <p className="text-center text-[16px] lg:text-[18px] mt-2">
          Celebrating Achievements, One Click at a Time!
        </p>

        <div className="mt-10 overflow-x-auto scrollbar-hide" role="list">
          <div className="flex gap-10 w-max flex-wrap justify-center">
            {galary.map((image, index) => (
              <figure
                key={index}
                className="flex-shrink-0 mb-6"
                role="listitem"
              >
                <Image
                  src={image.galaryImage}
                  alt="Gallery image"
                  className="w-[300px] h-[270px] lg:w-[350px] rounded-lg object-cover"
                  loading="lazy"
                  width={200}
                  height={300}
                />
              </figure>
            ))}
          </div>
        </div>
        {/* View More button and arrow aligned to top right below title */}
        <div className="flex justify-end mt-4">
          <div className="flex items-center gap-2 cursor-pointer text-[#C7183A] font-semibold text-lg">
            <span>View More</span>
            <Link href="/gallery">
              <IoIosArrowForward
                size={24}
                className="bg-[#C7183A] text-white rounded-full w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Add custom media queries for mobile responsiveness */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2rem;
          }

          .w-[85%] {
            width: 90%;
          }

          /* Adjust gallery for mobile: show one image at a time and allow scrolling */
          .w-max {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .gap-10 {
            gap: 15px;
          }

          .w-[300px] {
            width: 250px;
            scroll-snap-align: center;
          }

          .h-[270px] {
            height: 230px;
          }

          .mb-6 {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Galary;
