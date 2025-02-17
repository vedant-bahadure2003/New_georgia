"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import collegeImg from "../../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../../public/Images/collegeBgImg.png";
import Profile from "../../../../public/Images/profile.png";
import rightsign from "../../../../public/Images/vector.png";

const Page = () => {
  const { ImageId } = useParams();
  const [image, setImage] = useState(null);

  // Fetch gallery details
  const fetchGalleryDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/gallery/${ImageId}`
      );
      setImage(response.data.image);
    } catch (error) {
      console.error("Failed to fetch gallery details:", error);
    }
  };

  useEffect(() => {
    fetchGalleryDetails();
  }, [ImageId]);

  return (
    <>
      {/* Background Image Section */}
      <header
        aria-labelledby="gallery-header"
        className="relative w-full h-[300px] sm:h-[400px]"
      >
        <div className="absolute h-full w-full">
          <Image
            src={collegeImg}
            alt="Andijan State Medical Institute"
            className="w-full object-cover block sm:hidden h-[300px]"
            width={2048} // Set the image width
            height={2048}
            priority
          />
          <Image
            src={collegeBgImg}
            alt="Campus Overview of Andijan State Medical Institute"
            className="w-full h-full object-cover hidden sm:block"
            width={2048} // Set the image width
            height={2048}
            priority
          />
          <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home / Gallery / <span className="text-[#C7183A]">Photo</span>
          </p>
        </nav>

        {/* Page Title */}
        <div
          id="gallery-header"
          className="absolute top-32 sm:top-44 text-white left-5 w-[90%] sm:w-[50%]"
        >
          <h1 className="text-[24px] sm:text-4xl font-semibold mt-3">
            Photo Gallery
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="xl:w-[70%] mx-auto">
        {/* Profile Section */}
        <section aria-labelledby="author-info" className="w-[80%] mx-auto mt-4">
          <div
            id="author-info"
            className="flex items-center bg-white p-4 rounded-md shadow"
          >
            <Image
              src={Profile}
              alt="Profile Picture of XYZ Employee"
              className="w-[50px] h-[50px] rounded-full"
              width={2048} // Set the image width
              height={2048}
            />
            <div className="ml-3">
              <h2 className="font-semibold">Vedant Bahadure</h2>
            </div>
          </div>
        </section>

        {/* Single Image Display */}
        <section
          aria-labelledby="gallery-image"
          className="w-[85%] mx-auto mt-6"
        >
          <div className="flex justify-center items-center">
            <Image
              src={image?.galaryImage || "/default-image.jpg"}
              alt="Gallery Display"
              width={800}
              height={450}
              className="rounded-md object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Why Study in Uzbekistan Section */}
        <section aria-labelledby="study-mbbs" className="w-[85%] mx-auto py-6">
          <h2 id="study-mbbs" className="text-[24px] font-bold text-[#C7183A]">
            Why Study MBBS in Uzbekistan?
          </h2>
          <p className="mt-2 text-justify font-semibold">
            Studying MBBS in Uzbekistan stands as the best option for Indian
            students seeking cost-effective medical education. Top Medical
            universities in Uzbekistan are equipped with facilities to train
            international students to become excellent doctors.
          </p>
          <ul className="text-lg mt-4 flex flex-col gap-2">
            {[
              {
                title: "Quality Education",
                desc: "Recognized medical programs with modern facilities.",
              },
              {
                title: "Affordability",
                desc: "Budget-friendly tuition fees and living costs.",
              },
              {
                title: "English-Medium Program",
                desc: "Easy access for international students.",
              },
              {
                title: "Academic Diversity",
                desc: "Cultural exposure to a global environment.",
              },
              {
                title: "Global Recognition",
                desc: "Internationally accepted degrees and accreditations.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-2">
                <Image
                  src={rightsign}
                  alt="Bullet Point Icon"
                  width={18}
                  height={18}
                />
                <span>
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-3 bg-[#C7183A] text-white py-1 px-2 rounded-md shadow-lg hover:bg-[#479b9f]">
            <span className="text-black">Read More:</span> Why Choose Uzbekistan
            for MBBS Studies?
          </button>
        </section>
      </main>
    </>
  );
};

export default Page;
