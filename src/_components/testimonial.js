import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import avatar from "../../public/homeimage/avatar.png";

const testimonialsData = [
  {
    feedback:
      "Augue nulla montes, eget conque dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
    name: "John Doe",
    role: "MBBS",
  },
  {
    feedback:
      "Augue nulla montes, eget conque dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
    name: "Smitha Doe",
    role: "MBBS",
  },
  {
    feedback:
      "Augue nulla montes, eget conque dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
    name: "Jaquline Doe",
    role: "MBBS",
  },
];

const Testimonials = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-[20px] md:py-[70px]">
      <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-snug text-center">
        Our Happy <span className="text-[#C7183A] underline">Students</span>
      </h2>
      <p className="text-center text-sm md:text-[16px] mt-2">
        Hear What Our Students Have to Say
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 overflow-x-auto no">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-full h-auto bg-white border-2 rounded-md shadow-xl p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-[#1E1E1EA6]">{testimonial.role}</p>
            </div>
            <p className="text-[#1E1E1EA6]">{testimonial.feedback}</p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} color="#C7183A" fill="#C7183A" size={20} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
