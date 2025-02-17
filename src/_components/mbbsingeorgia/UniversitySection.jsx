import React from "react";
import UniversityCard from "./UniversityCard";

const UniversitySection = () => {
  return (
    <>
      <div className=" pb-3  w-full lg:w-[95%] mx-auto px-4 sm:px-6 lg:px-0 overflow-hidden">
        <div>
          {/* Section Header */}
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            Top Medical Universities in Georgia (NMC Approved){" "}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[550] mt-2 leading-relaxed">
            Here is the list of best medical universities in Georgia that offer
            MBBS programs:
          </p>

          {/* University Cards */}
          <div className="   flex flex-wrap gap-5">
            {[...Array(1)].map((card, index) => (
              <UniversityCard
                key={index}
                number={index + 1}
                className=" w-full sm:w-[48%] lg:w-[30%] max-w-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversitySection;
