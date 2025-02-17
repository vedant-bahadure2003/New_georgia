import React from "react";
import Link from "next/link";
const FeesStructure = () => {
  const feeData = [
    {
      university: "Ivane Javakhishvili Tbilisi State University ",
      tuitionFees: "8000 USD",
      hostelFees: "3000 USD",

      Link: "/andijan-state-medical-university",
    },
    {
      university: "Akaki Tsereteli University",
      tuitionFees: "5500 USD",
      hostelFees: "500 USD",
      Link: "/bukhara-state-medical-institute",
    },
    {
      university: "Batumi Shota Rustaveli State University",
      tuitionFees: "4000 USD",
      hostelFees: "3000 USD",
      Link: "/samarkand-state-medical-university",
    },
    {
      university: "Ilia State University, Georgia",
      tuitionFees: "5000 USD",
      hostelFees: "2500 USD",

      Link: "/tashkent-medical-academy",
    },
    {
      university: "Alte University",
      tuitionFees: "5500 USD",
      hostelFees: "500 USD",
      Link: "/fergana-medical-institute-of-public-health",
    },
    {
      university: "European University",
      tuitionFees: "5000 USD",
      hostelFees: "3000 USD",
      Link: "/tashkent-state-dental-institute",
    },
  ];

  return (
    <>
      <div className=" lg:w-[95%] lg:mx-auto p-3 lg:p-0 ">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          MBBS in Georgia Fee Structure 2025-26
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-[450]  md:text-left">
          Georgia offers an affordable and budget-friendly MBBS education for
          Indian medical students compared to many countries likeUS, Australia,
          Europe & India. The fees for MBBS in Georgia at top public
          universities range between USD 4000 - 5000 per year, while private
          university tuition may go as high as USD 8000. Below is the structure
          for MBBS fees in Georgia for the 2025-26 season:
        </p>

        {/* Table Section */}
        <div className="overflow-x-auto ">
          <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
            <thead className="text-sm bg-[#FFF7EE]">
              <tr>
                <th
                  scope="col"
                  className=" text-[14px] sm:text-[16px] px-4 py-2 border border-black text-black text-center"
                >
                  Name of the universities
                </th>
                <th
                  scope="col"
                  className="text-[14px] sm:text-[16px] px-4 py-2 border border-black text-black text-center"
                >
                  Tuition Fees / Year
                </th>
                <th
                  scope="col"
                  className=" text-[14px] sm:text-[16px] px-4 py-2 border border-black text-black text-center"
                >
                  Hostel Fees / Year
                </th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#FFF7EE]">
                  <td className=" text-[14px] hover:underline text-[#C7183A] sm:text-[16px] px-4 py-2 border border-black">
                    <Link href={item.Link}>{item.university}</Link>
                  </td>
                  <td className="text-[14px] sm:text-[16px] text-center px-4 py-2 border border-black">
                    {item.tuitionFees}
                  </td>
                  <td
                    id="Eligibility"
                    className=" text-[14px] sm:text-[16px] text-center px-4 py-2 border border-black"
                  >
                    {item.hostelFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <p className=" mt-3">
            <span className="font-bold text-[14px] sm:text-[16px]">
              Disclaimer:
            </span>{" "}
            The fees mentioned above are subject to change as per university
            policies. Additional costs such as food, travel, and personal
            expenses are not included in the above mentioned fees.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default FeesStructure;
