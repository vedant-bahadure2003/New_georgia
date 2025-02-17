"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogData } from "@/data/blogData/blogData";

const Page = () => {
  const [blogDetails, setBlogDetails] = useState(blogData || []);
  const router = useRouter();

  const handleOnClick = (id) => {
    console.log(id);
    router.push(`/blog/${id}`);
  };

  return (
    <>
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px]">
        <div className="absolute h-full w-full">
          <Image
            src="/Images/collegeImg.png"
            alt="College Background"
            className="w-full object-cover block sm:hidden h-[300px]"
            width={1920}
            height={1080}
            priority
          />
          <Image
            src="/Images/collegeBgImg.png"
            alt="College Background"
            className="w-full h-full object-cover hidden sm:block"
            width={1920}
            height={1080}
            priority
          />
          <div className="h-full w-full absolute top-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home /<span className="text-[#C7183A]"> Blogs</span>
          </p>
        </div>
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 flex flex-col gap-1">
          <h1 className="text-[24px] sm:text-4xl font-semibold mt-3">Blogs</h1>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {blogDetails.length > 0 ? (
            blogDetails.map((blog) => (
              <div
                key={blog.id}
                className="w-[320px] lg:w-[300px] flex-shrink-0"
                onClick={() => handleOnClick(blog.id)}
              >
                <div className="w-full border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                  {/* Blog Image */}
                  <div className="relative">
                    <div className="h-[230px] w-full absolute top-0 bg-gradient-to-t from-[#1CB5BD] to-[#0D535700]"></div>
                    <h2 className="absolute bottom-6 w-full text-center text-white text-[20px] font-semibold">
                      {blog.blogHeading}
                    </h2>
                    <img
                      src={blog.blogImage}
                      alt={blog.blogHeading}
                      className="w-full h-[230px] object-cover"
                    />
                  </div>
                  {/* Blog Content */}
                  <div className="p-3 flex flex-col gap-2">
                    <p className="text-gray-700 text-justify">
                      {blog.blogContent}
                    </p>
                    <div className="flex justify-between">
                      <p className="font-semibold text-gray-500">{blog.date}</p>
                      <p className="text-md font-semibold text-teal-600">
                        Read more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
