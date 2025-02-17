import React from "react";
import Image from "next/image";

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      step: 1,
      description:
        "Fill out the online application form on the official website before the deadline is over.",
    },
    {
      step: 2,
      description:
        "You should scan and upload your academic documents according to the instructions provided on the form fillup page.",
    },
    {
      step: 3,
      description:
        "You should be able to receive an offer letter from the university within 48 hours after meeting all the criteria and once your application is successfully submitted and approved.",
    },
    {
      step: 4,
      description:
        "The first-year MBBS course fee should be paid after receiving the offer letter. ",
    },
    {
      step: 5,
      description: "Apply for a visa and make sure your passport is valid.",
    },
    {
      step: 6,
      description:
        "Wait for 30 days for the visa processing. And once the visa is processed, book your tickets to fulfill your dream of studying MBBS in Uzbekistan. ",
    },
    {
      step: 7,
      description:
        "Take all your documents and required things with you; students need to produce the documents at the admission office and complete other formalities at the admission office of the university ",
    },
  ];

  return (
    <>
      {/* Admission Process for MBBS in Uzbekistan */}
      <div className="mt-5 p-5">
        <div className="gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
            How to Take Admission in Samarkand State Medical University?
          </h2>
          <p className=" text-justify  w-full text-[14px] sm:text-[16px] leading-5 py-3 ">
            MBBS admission at Samarkand State Medical University operates
            through an uncomplicated application path. Prospective students need
            to fill out the online application form found on the university
            website, which requires document uploads. The administrative staff
            of the university reviews your application before issuing an
            admission decision within 48 hours.
            <br /> <br />
            Your application for a visa depends on two requirements: payment of
            the initial first-year classes and verification of valid passport
            status. The visa application process requires 30 days before visa
            approval is obtained to allow students to book their next trip. You
            must present your documents at the university’s admission office to
            finish your enrollment process. . <br /> <br />
            To apply for MBBS admission, follow these steps:
          </p>
        </div>
        <div className="mt-5">
          <div className="text-sm sm:text-[18px]  flex flex-col gap-4 text-black">
            {admissionSteps.map((stepItem, index) => (
              <div
                key={index}
                className="flex   sm:flex-row items-start sm:items-center gap-2 sm:gap-5"
              >
                <p
                  id="document"
                  className="w-[90px] text-[#C7183A] font-[700] text-[14px] sm:text-[16px] mb-3 sm:mb-0"
                >
                  Step {stepItem.step}:
                </p>
                <p className="text-[14px] sm:text-[16px] leading-5 sm:w-[90%]">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionProcess;
