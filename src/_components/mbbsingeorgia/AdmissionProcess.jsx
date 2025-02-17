import React from "react";

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      step: 1,
      description:
        " Students should upload document copies through the university portal during the application process. ",
    },
    {
      step: 2,
      description: "Obtain invitation letter within 48 hours, ",
    },
    {
      step: 3,
      description:
        "The process requires payment of registration fees and visa application (which results in visa delivery within two weeks).",
    },
    {
      step: 4,
      description:
        " Students need to notify the university about their arrival date.Your next step should be to fly to Georgia, where you will start your lectures.",
    },
  ];

  return (
    <div className=" p-3">
      <div className="gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to Apply for MBBS in Georgia?{" "}
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-[550]">
          Students who wish to study Medicine in Georgia need to follow these
          admission steps:
        </p>
      </div>
      <div className="mt-5 ">
        <div className="text-[14px] sm:text-[16px] flex flex-col gap-4 text-black">
          {admissionSteps.map((stepItem, index) => (
            <div key={index} className="flex  ">
              <p className="w-[60px] text-[#C7183A] font-[700] text-[14px] sm:text-[16px] ">
                Step {stepItem.step}:
              </p>
              <p className="  flex-1 text-[14px] sm:text-[16px]">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
