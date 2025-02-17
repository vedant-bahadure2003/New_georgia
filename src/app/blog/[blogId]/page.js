"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import collegeImg from "../../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../../public/Images/collegeBgImg.png";
import Profile from "../../../../public/Images/profile.png";
import rightsign from "../../../../public/Images/vector.png";
import Link from "next/link";
import Blog from "@/_components/blog";

const Page = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/blog/${blogId}`
      );
      setBlog(response.data.blog);
    } catch (error) {
      console.error("Failed to fetch blog details:", error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [blogId]);

  return (
    <>
      {/* Background Section */}
      <section
        aria-labelledby="blog-header"
        className="relative w-full h-[300px] sm:h-[400px]"
      >
        <div className="absolute w-full h-full">
          <Image
            src={collegeImg}
            alt="Andijan State Medical Institute Campus"
            className="w-full object-cover block sm:hidden h-[300px]"
            priority
          />
          <Image
            src={collegeBgImg}
            alt="Andijan State Medical Institute Overview"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
            priority
          />
          <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            <Link href="/">Home</Link> / <Link href="/blogs">Blogs</Link> /
            <span className="text-[#C7183A]"> Blog</span>
          </p>
        </nav>

        {/* Blog Title */}
        <div
          id="blog-header"
          className="absolute top-32 sm:top-44 text-white left-5 w-[90%] sm:w-[50%]"
        >
          <h1 className="text-[24px] sm:text-4xl font-semibold">
            {blog?.blogHeading || "Loading Blog..."}
          </h1>
        </div>
      </section>

      <main className="xl:w-[70%] mx-auto">
        {/* Profile Section */}
        <section className="w-[90%] mx-auto mt-4">
          <div className="flex items-center bg-white p-4 rounded-md shadow">
            <Image
              src={Profile}
              alt="Author Profile"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="ml-3">
              <h2 className="font-semibold">Vedant Bahadure</h2>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="w-[90%] mx-auto mt-6">
          <Image
            src={blog?.blogImage || "/default-image.jpg"}
            alt={blog?.blogHeading || "Blog Image"}
            width={800}
            height={450}
            className="rounded-md object-cover w-full"
          />
          <article className="mt-4 text-justify">
            <p>{blog?.blogContent}</p>
          </article>
        </section>

        {/* Why Study MBBS Section */}
        <section className="w-[90%] mx-auto py-6">
          <h2 className="text-[24px] font-bold text-[#C7183A]">
            Why Study MBBS in Uzbekistan?
          </h2>
          <p className="font-semibold text-justify mt-2">
            Studying MBBS in Uzbekistan stands as the best option for Indian
            students seeking the best and most cost-effective medical education
            in Uzbekistan. Top Medical universities in Uzbekistan are equipped
            with all the facilities to educate and train international medical
            aspirants to become excellent doctors.
          </p>
          <ul className="text-lg flex flex-col gap-2 mt-4">
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
                desc: "Cultural and exposure to a global environment.",
              },
              {
                title: "Global Recognition",
                desc: "Internationally accepted degrees and accreditations.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-2">
                <Image
                  src={rightsign}
                  alt="check mark"
                  width={18}
                  height={18}
                />
                <p>
                  <strong>{item.title}</strong>: {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-3 bg-[#C7183A] text-white py-2 px-4 rounded-md shadow hover:bg-[#479b9f]">
            <span className="text-black">Read More:</span> Why Choose Uzbekistan
            for MBBS Studies?
          </button>
        </section>

        {/* Related Blogs Section */}
        <Blog />
      </main>
    </>
  );
};

export default Page;
