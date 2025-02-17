import React from "react";

const Intake = () => {
  const intakeData = {
    title: "MBBS in Georgia - Intake Date & Deadlines 2025",
    description:
      "Here is a comprehensive timeline for Indian students applying for MBBS/MD in Georgia, outlining the key steps for both September and March intakes to help you plan effectively.",
    details: [
      { event: "Intake", value: "Octomber and March" },
      { event: "Seats Allocation", value: "First-come, first-served basis" },
      { event: "Application Start Date	", value: "Octomber and March" },
      { event: "Application Deadline", value: "June and December" },
    ],
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex lg:w-[95%] lg:mx-auto flex-col gap-3 py-6">
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          {intakeData.title}
        </h2>
        <p className="text-[14px] sm:text-[16px] font-[550]">
          {intakeData.description}
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left border border-black">
          <tbody>
            <tr className="bg-[#FFF7EE] border">
              <td className="px-4 py-2 border border-black font-bold text-center">
                Event
              </td>
              <td className="px-4 py-2 border border-black font-bold text-center">
                Details
              </td>
            </tr>
            {intakeData.details.map((item, index) => (
              <tr key={index} className="odd:bg-[#FFF7EE] even:bg-white">
                <td className="px-4 py-2 border border-black">{item.event}</td>
                <td className="px-4 py-2 border border-black">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-4">
        <h2 className="text-[22px] font-[700] text-[#C7183A]">
          {intakeData.title}
        </h2>
        <p className="text-[14px] font-semibold">{intakeData.description}</p>
        <table className="w-full text-xs text-left border border-black mt-3">
          <tbody>
            <tr className="bg-[#FFF7EE] border">
              <td className="px-2 py-1 border border-black text-[14px] font-semibold text-center">
                Event
              </td>
              <td className="px-2 py-1 border border-black text-[14px] font-semibold text-center">
                Details
              </td>
            </tr>
            {intakeData.details.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-[#FFF7EE] text-[14px] even:bg-white"
              >
                <td className="px-2 py-3 border border-black">{item.event}</td>
                <td className="px-2 py-3 border border-black">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Intake;
