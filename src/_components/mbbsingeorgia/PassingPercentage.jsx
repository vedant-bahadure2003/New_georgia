"use client";
import Image from "next/image";
import rightsign from "../../../public/Images/vector.png";
import rafiki from "../../../public/Images/rafiki.png";
import Link from "next/link";
import LeadFormModalPopup from "../lead-form/LeadFormModalPopup";
import { useState } from "react";

const PassingPercentage = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleApplyNowClick = () => {
    setShowModal(true);
  };

  // Function to close the modal (to be passed as a prop)
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full lg:w-[95%] mx-auto mb-4 ">
      {/* CTA Section */}
      <div className="bg-[#FFF9EA] w-full mx-auto flex flex-col items-center justify-center p-6 mt-8 rounded-md shadow-lg">
        <Image src={rafiki} alt="rafiki" width={160} height={130} />
        <h3 className="text-[#005D61] text-center text-lg sm:text-2xl font-bold w-[90%]">
          Ready to Take the First Step Toward Your Medical Career?
        </h3>
        <p className="text-center text-sm sm:text-base w-[85%] mx-auto">
          Start your journey with top-ranked universities in Georgia offering
          globally accepted MBBS degrees.
        </p>

        <button
          onClick={handleApplyNowClick}
          className="bg-[#C7183A] text-white text-sm sm:text-lg font-semibold px-8 py-2 sm:px-12 sm:py-3 rounded-md shadow-md hover:bg-[#C7183A] transition duration-300 hover:scale-105 mt-4"
        >
          Apply Now
        </button>
      </div>

      {showModal && (
        <LeadFormModalPopup isOpen={showModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};
{
  /* Title Section */
}
{
  /* <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#C7183A] text-center sm:text-left">
        FMGE Passing Percentage After Completing MBBS From Uzbekistan
      </h2>
      <p className="text-sm sm:text-base font-medium text-gray-700 text-center sm:text-left">
        It is really safe for Indian students to live and study MBBS in
        Uzbekistan.
      </p> */
}

{
  /* Responsive Table */
}
{
  /* <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left border border-black">
          <tbody>
            <tr className="bg-[#FFF7EE] border">
              <th className="px-3 py-2 border border-black font-semibold text-[#005D61] text-center">
                University Name
              </th>
              <th className="px-3 py-2 border border-black text-[#005D61] text-center">
                Passing Percentage
              </th>
            </tr>
            {[...Array(4)].map((_, index) => (
              <tr key={index} className="even:bg-white odd:bg-[#FFF7EE]">
                <td className="px-3 py-2 border border-black text-center">
                  University {index + 1}
                </td>
                <td className="px-3 py-2 border border-black text-center">
                  45%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */
}

{
  /* Scholarship Section */
}
{
  /* <div className="mt-6 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#C7183A]">
          Scholarships In Uzbekistan For Indian Students
        </h2>
        <p className="text-sm text-gray-700">
          It is really safe for Indian students to live and study MBBS in
          Uzbekistan.
        </p>
        <p className="text-sm text-gray-700">
          Students can avail education loans based on eligibility.
        </p>
      </div> */
}

{
  /* Loan Assistance */
}
{
  /* <div className="bg-[#FFF9EA] py-4 px-3 rounded-md mt-6">
        <h2 className="text-lg sm:text-xl font-bold text-[#C7183A]">
          Education Loan Assistance For Studying MBBS In Uzbekistan
        </h2>
        <p className="text-sm font-medium text-gray-700">
          Students can get education loans for studying MBBS abroad:
        </p>
        <div className="space-y-3 mt-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image src={rightsign} alt="vector" width={18} height={18} />
              <p className="text-sm text-gray-700">
                The loan process depends on multiple factors and eligibility.
              </p>
            </div>
          ))}
        </div>
      </div> */
}

{
  /* PG Options */
}
{
  /* <div className="mt-6 space-y-4">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Different PG Options After MBBS From Uzbekistan
        </h2>
        <p className="text-[14px] lg:text-[16px] font-[550] text-gray-700">
          Explore postgraduate opportunities worldwide.
        </p>
        <div className="space-y-3">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image src={rightsign} alt="vector" width={18} height={18} />
              <p className="text-sm text-gray-700">
                Various PG options are available depending on specialization.
              </p>
            </div>
          ))}
        </div>
      </div> */
}

{
  /* Education System */
}
{
  /* <div className="mt-6 space-y-4">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Education System In Uzbekistan
        </h2>
        <p className="text-[14px] lg:text-[16px] font-[550] text-gray-700">
          Learn about the structured medical education system.
        </p>
        <div className="space-y-3">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image src={rightsign} alt="vector" width={18} height={18} />
              <p className="text-sm text-gray-700">
                Uzbekistan follows an internationally recognized MBBS
                curriculum.
              </p>
            </div>
          ))}
        </div>
      </div> */
}

export default PassingPercentage;
