import React from "react";
import Image from "next/image";
import doctorpic from "../../../public/Images/doctorpic.png";

const MainForm = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-white sticky top-24">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-white">
            <Image src={doctorpic} alt="Doctor" className="w-full" />
          </div>

          <div className="p-6">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7183A]"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7183A]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7183A]"
              />

              <button
                type="submit"
                className="bg-[#C7183A] text-white w-full py-2 rounded-md text-sm font-semibold hover:bg-[#7b1d2f] transition-all duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
