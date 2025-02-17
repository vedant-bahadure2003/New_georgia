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
      "Fill out the application form on the university's official website before the deadline.",
  },
  {
    step: 2,
    description:
      "Scan and upload your academic certificates and documents required for admission.",
  },
  {
    step: 3,
    description:
      "Receive an offer letter from the university within 48 hours after submitting your application.",
  },
  {
    step: 4,
    description:
      "Pay the first-year course fee of MBBS after getting the offer letter.",
  },
  {
    step: 5,
    description:
      "Process your student visa and make sure that your passport is valid.",
  },
  {
    step: 6,
    description: "Visa processing time takes approximately 30 days.",
  },
  {
    step: 7,
    description:
      "You can now travel to Georgia after the visa is approved and begin your MBBS studies at Akaki Tsereteli State University.",
  },
];

const AdmissionProcess = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto mt-6 ml-6 sm:p-0">
      <div className="py-6">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to Apply for MBBS at Akaki Tsereteli State University?
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px] text-black">
          Prospective students should complete and submit their application
          forms through the university website before the deadlines at Akaki
          Tsereteli State University. Finish the online application by digitally
          submitting your required academic certificates, followed by document
          uploads. An offer letter will arrive to you within 48 hours of
          submission. After your acceptance, you must cover the first-year
          education cost, followed by the steps for a student visa processing
          coexisting with a valid passport.
          <br /> <br />
          It requires thirty days for the visa system to process your
          information. Once the visa officials approve your application, you can
          travel to Georgia to start your MBBS education at Akaki Tsereteli
          State University while maintaining a smooth academic transition.
          <br /> <br />
          <span className="font-[550]">
            The following are the steps you have to follow:
          </span>
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
