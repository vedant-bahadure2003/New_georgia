import Image from "next/image";
import React from "react";
import universityImage from "../../public/Images/university.png";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className=" border-1 shadow-xl rounded-lg">
        <div>
          <Image
            src={universityImage}
            alt="UnversityImage"
            className="rounded-tr-lg rounded-tl-lg"
          />
        </div>
        <div className="p-3 ">
          <h2 className="text-[#005D61]  text-[24px] font-semibold">
            Andijan State Medical Institute
          </h2>
          <p className="">Fees Structure :5,22,000 RS</p>
          <p className="">Duration : 7 year</p>
          <div className="flex justify-between mt-4">
            <button className="bg-[#C7183A] px-4 py-1.5 font-semibold rounded-md text-white">
              Apply Now
            </button>
            <Link href="/andijan-state-medical-university">
              <button className="border border-[#C7183A] px-4 py-1.5 font-semibold text-[#C7183A] rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
