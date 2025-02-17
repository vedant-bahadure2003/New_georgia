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
      "Fill out the online application form that is provided by the University. Fill in the form of the course you have chosen.",
  },
  {
    step: 2,
    description:
      " Print out the form. Sign the form and send a scanned copy of the form along with the required documents listed below to the University.",
  },
  {
    step: 3,
    description:
      "Forward through email the scanned copies of the documents with the subject line stating your intention, i.e. 'Application for Admission'.",
  },
  {
    step: 4,
    description:
      "Documents accepted only prior to the application closing date. Any other document outside the final submission would not be accepted.",
  },
  {
    step: 5,
    description:
      "The student will get the acceptance letter or rejection letter after verification of the documents from the University as decided by the University.",
  },
  {
    step: 6,
    description:
      " Initial fees should be paid once the candidate is accepted. Then, they will receive the Fee Acknowledgment Letter.",
  },
  {
    step: 7,
    description:
      "If the applicant has been accepted, then they must immediately apply for a student visa for Uzbekistan. The university will mail students invitation letters.",
  },
];

const AdmissionProcess = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto mt-6 ml-6     sm:p-0 ">
      <div className=" py-6  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How do I apply for MBBS at Tashkent State Dental Institute?{" "}
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px]  text-black">
          International students can follow a direct path to obtain admission to
          the Tashkent State Dental Institute MBBS program. Students must
          register using the institute's official website's online application
          portal while submitting the required documents. You receive the
          admission offer within 48 hours after your application.
          <br /> <br />
          You must pay your first-year course fees after receiving the offer and
          make sure your passport remains valid. You need to apply for a visa
          through a process that requires 30 days for the evaluation process
          before the approval is granted, which will make you eligible to start
          your MBBS education at the institute. <br /> <br />
          <span className="font-[550]">
            To apply for MBBS admission, you can follow the following steps:
          </span>
        </p>

        {/* Steps Section */}
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
    </div>
  );
};

export default AdmissionProcess;
