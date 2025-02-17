import Image from "next/image";
import rightsign from "../../../../public/Images/vector.png";
import onlineAppIcon from "../../../../public/Images/online-application.png";
import submitIcon from "../../../../public/Images/submit.png";
import reviewIcon from "../../../../public/Images/review.png";
import acceptIcon from "../../../../public/Images/accept.png";
import visaIcon from "../../../../public/Images/visa.png";

const admissionSteps = [
  {
    step: 1,
    description:
      "To apply, start by filling out the online application form on the official website of Fergana Medical Institute of Public Health before the stipulated time.",
  },
  {
    step: 2,
    description:
      "Students need to submit all necessary documents in scanned form to satisfy university requirements.",
  },
  {
    step: 3,
    description:
      "Students must wait for the university to send them their admission or confirmation letter. Once obtained, Fergana Medical Institute of Public Health will send an admission or confirmation letter to the student.",
  },
  {
    step: 4,
    description:
      "The university will apply to the TELEX number to obtain VISA authorization one week after admission confirmation.",
  },
  {
    step: 5,
    description:
      "Student VISA application becomes possible after getting the TELEX and visiting the Embassy of Uzbekistan.",
  },
  {
    step: 6,
    description:
      "Students must transfer their university tuition fee to the official account maintained by the institution. Keep the receipt showing the payment of fees safe.",
  },
  {
    step: 7,
    description:
      "The TELEX approval enables students to purchase their air tickets, or we will assist them with ticket booking.",
  },
];

const AdmissionProcess = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto mt-6 ml-6 sm:p-0">
      <div className="py-6">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to take Admission at Fergana Medical Institute of Public Health?
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px] text-black">
          Fergana State University provides an excellent option for MBBS studies
          abroad. The university offers a straightforward admission process for
          international students. Those who meet the admission criteria and have
          the proper documentation can enroll in Fergana State University's MBBS
          program. Students receive full support during the visa application and
          assistance with accommodation. The process for Indian students to
          apply for MBBS at Fergana Medical Institute of Public Health involves
          the following steps:
        </p>

        {/* Steps Section */}
        <div className="mt-5">
          <div className="text-[14px] sm:text-[16px] flex flex-col gap-4 text-black">
            {admissionSteps.map((stepItem, index) => (
              <div key={index} className="flex">
                <p className="w-[60px] text-[#C7183A] font-[700] text-[14px] sm:text-[16px]">
                  Step {stepItem.step}:
                </p>
                <p className="flex-1 text-[14px] sm:text-[16px]">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
