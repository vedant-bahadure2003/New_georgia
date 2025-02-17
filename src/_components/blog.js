"use client";
import { useState, useEffect } from "react";
import { blogData } from "@/data/blogData/blogData";
import Head from "next/head";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 3;
  const totalBlogs = blogData.length;

  // Adjust the number of blogs per page for mobile screens
  const [visibleBlogs, setVisibleBlogs] = useState(blogsPerPage);

  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth < 768) {
        setVisibleBlogs(1); // Show only one blog per page on mobile
      } else {
        setVisibleBlogs(blogsPerPage); // Show 3 blogs per page on larger screens
      }
    };

    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);
    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  // Function to move to the next set of blogs
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleBlogs >= totalBlogs ? 0 : prevIndex + visibleBlogs
    );
  };

  // Function to move to the previous set of blogs
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleBlogs < 0
        ? totalBlogs - visibleBlogs
        : prevIndex - visibleBlogs
    );
  };

  return (
    <>
      <Head>
        <title>Latest Blog | Empowering Future Doctors</title>
        <meta
          name="description"
          content="Explore the latest insights, tips, and stories to empower future doctors with valuable information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="medical blog, doctor tips, future doctors, healthcare insights"
        />
      </Head>

      <div className="w-[90%] md:w-[85%] lg:w-[73%] mx-auto mt-[20px]">
        <h2 className="text-[24px] md:text-[36px] font-bold text-center">
          Our Latest <span className="text-[#C7183A] underline">Blog</span>
        </h2>
        <p className="text-center mt-2">
          Empowering Future Doctors with Valuable Information!
        </p>

        <div className="relative flex flex-col items-center mt-10">
          {/* Blog container */}
          <div
            className="flex flex-wrap justify-center gap-5 md:gap-10 overflow-x-hidden"
            role="list"
          >
            {blogData
              .slice(currentIndex, currentIndex + visibleBlogs)
              .map((blog) => (
                <article
                  key={blog.id}
                  className="w-[90%] sm:w-[90%] md:w-[290px] lg:w-[300px] flex-shrink-0"
                  role="listitem"
                >
                  <div className="w-full border border-gray-200 shadow-xl rounded-lg overflow-hidden h-[500px]">
                    <figure>
                      <Image
                        src={blog.blogImage}
                        alt={`Image for blog titled "${blog.blogHeading}"`}
                        className="w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[250px] object-cover"
                        priority
                        width={500}
                        height={350}
                      />
                    </figure>
                    <div className="p-3 py-10 flex flex-col gap-2 h-auto md:h-[250px] justify-evenly">
                      <time
                        className="font-semibold text-gray-500"
                        dateTime={blog.date}
                      >
                        {blog.date}
                      </time>
                      <h2 className="text-lg md:text-xl font-semibold">
                        {blog.blogHeading}
                      </h2>
                      <p className="text-gray-700 text-justify text-sm md:text-base">
                        {blog.blogContent}
                      </p>
                      <button
                        aria-label={`Read more about ${blog.blogHeading}`}
                        className="bg-[#C7183A] px-4 py-1.5 font-semibold rounded-md text-white"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-5 mt-5">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center bg-[#C7183A] text-white rounded-full shadow-lg"
              aria-label="Previous Slide"
            >
              <IoIosArrowBack size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(totalBlogs / visibleBlogs) }).map(
                (_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentIndex / visibleBlogs === index
                        ? "bg-[#C7183A]"
                        : "bg-gray-300"
                    }`}
                  ></span>
                )
              )}
            </div>
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center bg-[#C7183A] text-white rounded-full shadow-lg"
              aria-label="Next Slide"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
