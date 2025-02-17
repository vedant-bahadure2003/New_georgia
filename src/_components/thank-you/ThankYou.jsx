import React from "react";
import Image from "next/image";
import { MdCall, MdHome, MdMail, MdCelebration } from "react-icons/md";
import Link from "next/link";
import pana from "../../../public/Images/pana.png";
import thankyou from "../../../public/Images/thank-you.jpg";
const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={thankyou}
            alt="Celebration background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-red-600/70 backdrop-blur-sm" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <MdCelebration className="text-6xl text-yellow-400 mb-6 animate-bounce" />
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 animate-fade-in">
            Thank You!
          </h1>
          <div className="text-lg text-blue-100 font-medium">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">Thank You</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="flex-1 relative bottom-12 w-full h-[300px]">
            <Image
              src={pana}
              alt="Celebration illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Your Journey to Medical Excellence Begins Now!
            </h2>

            <p className="text-lg text-gray-600">
              We're thrilled you've taken this important step towards your MBBS
              in Uzbekistan. Our team is already reviewing your inquiry and will
              contact you within 24 hours with personalized guidance.
            </p>

            {/* <div className="bg-blue-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-cyan-700">
                What's Next?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Expect a detailed information package via email
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Schedule a personal consultation with our experts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Prepare your documents checklist
                </li>
              </ul>
            </div> */}

            {/* Contact Card */}
            {/* <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Need Immediate Assistance?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-600">
                  <MdMail className="flex-shrink-0" />
                  <span>contact@mbbsuzbekistan.com</span>
                </div>
                <div className="flex items-center gap-3 text-green-600">
                  <MdCall className="flex-shrink-0" />
                  <span>+998 12 345 6789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MdHome className="flex-shrink-0" />
                  <span>Tashkent, Uzbekistan</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className=" text-center mt-6 lg:mt-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full 
                      text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
          >
            <MdHome className="text-xl" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
