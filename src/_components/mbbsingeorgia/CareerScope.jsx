import Image from "next/image";
import React from "react";
import rightsign from "../../../public/Images/vector.png";

const mediumofteaching = [
  "Georgia medical colleges offer 5+1 year MBBS programs that teach in English, an added advantage for Indian and other foreign students.",
  "As part of their internship experience, students must work at local hospitals and clinics; therefore, learning Georgian as part of their study program is necessary.",
];

const costofliving = [
  "Rent: $750 (INR 60K) for a one-bedroom in Tbilisi center, $500 (INR 42K) in outskirts.",
  "Utilities: A one-bedroom apartment costs around $75 (INR 6K).",
  "Food: Average monthly expense of $320 (INR 25K). Street food costs $10 (INR 800-900), and a meal at a mid-range restaurant is $20-40 (INR 1,800-4,000).",
];

const uzbekistanFacts = [
  " Georgia is located in Europe and is known for its rich culture and heritage. ",
  "  Georgia was invaded by various empires throughout history; today, its varied landscapes make it the ideal travel destination for history buffs and nature enthusiasts. ",
  "The country is widely recognised for its excellent educational standards and thriving research infrastructure.It ranks as one of the safest countries to live in, with affordable living costs and rich cultural diversity. ",
  "Indian students looking to pursue an MBBS abroad often opt for Georgia as their destination of choice. ",
  "Georgia boasts some top private and government medical universities offering state-of-the-art healthcare facilities to give students a hands-on learning experience.",
];
const CareerScope = () => {
  const courses = [
    {
      name: "Accommodation",
      duration: "$500 - $750 (Tbilisi center)",
    },
    { name: "Food", duration: "$320 (Monthly average)" },
    {
      name: "Transportation",
      duration: "$15 - $25 (Monthly)",
    },
    { name: "Clothing", duration: "Variable" },
    { name: "Other Expenses", duration: "Variable" },
  ];

  const aboutGeorgia = [
    { name: "Population", detail: "3.7 million (as of May 2025)" },
    { name: "Capital", detail: "Tbilisi" },
    { name: "Location", detail: "Southeastern Europe, West Asia" },
    { name: "Climate", detail: "Humid Subtropical" },
    { name: "Currency", detail: "GEL (Lari)" },
    { name: "Exchange Rate", detail: "1 GEL = 31.5 INR (May 2025)" },
    { name: "Travel Time from Delhi", detail: "5 hours 10 minutes" },
    { name: "Time Zone Difference", detail: "+1.5 hours IST" },
    { name: "International Students", detail: "25,000+ (2023)" },
    { name: "Percentage of International Students", detail: "8.4%" },
    {
      name: "Top Countries Represented by Students",
      detail: "India, Latvia, Taiwan, Italy, Brazil, China",
    },
    { name: "Languages Spoken", detail: "Georgian, English, Russian" },
  ];

  return (
    <>
      {/* Medium Of Teaching In Uzbekistan */}
      <div className="lg:mt-8 lg:w-[95%] lg:mx-auto flex flex-col gap-1 mt-[5px] px-4 md:px-0">
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] w-full sm:w-[500px] text-[#C7183A]md:text-left">
            Medium of Teaching in Georgia
          </h2>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2">
              <p className=" text-[14px] sm:text-[16px]  flex gap-2 text-justify">
                Most National Medical Council-recognized MBBS universities in
                Georgia use English as the medium of instruction, so here is
                everything you should know:
              </p>
            </div>
            <ul className="list-none pl-3 space-y-2">
              {mediumofteaching.map((fact, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Image
                    src={rightsign}
                    alt="vector"
                    className="h-[18px] w-[18px] mt-1"
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*Cost of Living in Uzbekistan */}
      <div className="px-4 lg:w-[95%] lg:mx-auto mt-8 md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]  md:text-left">
          Cost of Living in Georgia{" "}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-2 my-3  md:text-left">
          Georgia remains one of the most affordable European countries,
          ensuring financial stability. The monthly cost of living for a family
          of four is around $2,220 (INR 1.8L), while a single person needs
          approximately $600 (INR 50K), excluding rent.
        </p>
        <ul className="list-none pl-3 space-y-2">
          {costofliving.map((fact, index) => (
            <li key={index} className="flex gap-2 items-start">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />
              <span>{fact}</span>
            </li>
          ))}
        </ul>

        {/* Dynamic Courses Table */}
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black mt-5">
          <thead>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <th className="px-4 py-2 border border-black  text-black text-center">
                Category
              </th>
              <th className="px-4 py-2 border border-black text-black text-center">
                Cost (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the courses data */}
            {courses.map((course, index) => (
              <tr
                key={index}
                className={`odd:bg-white even:bg-[#FFF7EE] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FFF7EE]"
                }`}
              >
                <td className="px-4 py-2 border border-black">{course.name}</td>
                <td className="px-4 py-2 border border-black text-center">
                  {course.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How Safe Is Uzbekistan For Indian Students? */}
      <div className="lg:w-[95%] lg:mx-auto lg:mt-8 flex flex-col gap-2 mt-[5px] py-2 px-4 md:px-0">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A] md:text-left">
          About Georgia
        </h2>
        <div className="flex flex-col justify-center items-start w-full gap-2">
          <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 w-full sm:w-[90%]">
            <ul className="list-none pl-3 space-y-2">
              {uzbekistanFacts.map((fact, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Image
                    src={rightsign}
                    alt="vector"
                    className="h-[18px] w-[18px] mt-1"
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[14px] sm:text-[16px] font-[550] mt-6">
          Here is some interesting information about Georgia:
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black">
          <thead>
            <tr className="odd:bg-[#FFF7EE] even:bg-white border">
              <th className="px-4 py-2 border border-black text-black text-center">
                Aspect
              </th>
              <th className="px-4 py-2 border border-black text-black text-center">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {aboutGeorgia.map((item, index) => (
              <tr
                key={index}
                className={`odd:bg-white even:bg-[#FFF7EE] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FFF7EE]"
                }`}
              >
                <td className="px-4 py-2 border border-black">{item.name}</td>
                <td className="px-4 py-2 border border-black text-center">
                  {item.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CareerScope;
