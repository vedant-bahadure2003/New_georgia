import React from "react";
import Image from "next/image";
import rightsign from "../../../public/Images/vector.png";

const Whystudy = () => {
  const reasons = [
    {
      text: "Georgia has both public and private medical universities recognised by international bodies like NMC, WHO, WFME, ECFMG, FAIMER, etc - this shows that their quality education meets global standards.",
    },
    {
      text: "Georgia's tuition fee for MBBS studies is the most cost-effective among European countries, the US, UK, Australia and India. ",
    },
    {
      text: "Admission requirements for MBBS programs in Georgia do not require additional tests or assessments, allowing students to apply after 12th grade and providing an NEET scorecard.",
    },
    {
      text: "Universities in Georgia provide quality MBBS education with global exposure for Indian students. Graduates of Georgian universities can practice in hospitals and clinics around the globe.",
    },
    {
      text: "Many MBBS universities in Georgia provide instruction through an English learning medium, making applying to Georgian universities much simpler for Indian students without needing to learn the local tongue first.",
    },
    {
      text: "Universities in Georgia feature on-campus healthcare facilities and hospital tie-ups to allow MBBS students to gain hands-on learning experience during their programs.",
    },
    {
      text: "Georgia ranks among the 10 safest countries for living, earning it its nickname as the Police Country for its effective safety practices and use of CCTV cameras and other security gadgets throughout cities across its borders.",
    },
    {
      text: "Most government and private universities in Georgia offer modern amenities for both boys and girls; there are even separate hostels for each gender, equipped with air conditioners, cupboards, study tables, water filters, etc., to ensure a pleasant stay for students.",
    },
    {
      text: "Georgia offers an MBBS course comprising 5 years of classroom learning and 1 year of internship at university-affiliated hospitals, giving students hands-on experiences in healthcare delivery.",
    },
  ];

  return (
    <>
      {/* why study in Uzbekistan */}
      <div id="fees" className="mt-10 p-5">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          Why Study MBBS in Georgia for Indian Students?
        </h2>
        <div className="text-lg sm:text-[18px] flex flex-col gap-2 ">
          <div className=" flex flex-col gap-3 text-gray-800">
            <p className="font-[550] text-[14px] sm:text-[16px]">
              Indian students interested in an affordable MBBS in Europe have
              many opportunities in the Georgian education system, which
              conforms with international standards, making their decision to
              study MBBS there attractive and accepted worldwide. Here are some
              reasons why Indian students choose medical universities in Georgia
              as their destination:
            </p>
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className="h-[18px] w-[18px] mt-1"
                />
                <p className="flex text-[14px] sm:text-[16px] gap-2 text-black text-justify">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whystudy;
