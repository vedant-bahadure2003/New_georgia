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
      "Before the deadline passes, complete an online application form on the official website and submit it.",
  },
  {
    step: 2,
    description:
      "To upload academic documents in accordance with the instructions on the form fillup page.",
  },

  {
    step: 3,
    description:
      "Upon meeting all criteria and successfully submitting and receiving approval for your application, you should receive an offer letter within 48 hours from the university.",
  },
  {
    step: 4,
    description:
      "Once receiving an offer letter for an MBBS course, payment of its fees should take place immediately.",
  },
  {
    step: 5,
    description: "Apply for a visa and ensure your passport is valid.",
  },
  {
    step: 6,
    description:
      "Allow for 30 days for visa processing before booking flights to Uzbekistan to pursue your dream of studying MBBS there.",
  },

  {
    step: 7,
    description:
      "Bring all the documents and necessities with you; students should present these at the admissions office and complete any formalities at their university's admission office.",
  },
];

const AdmissionProcess = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto mt-6 ml-6     sm:p-0 ">
      <div className=" py-6  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to Apply for MBBS at Tashkent Medical Academy?{" "}
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px]  text-black">
          Tashkent Medical Academy provides an ideal environment for studying
          MBBS abroad. Their straightforward admission process offers an easy
          transition for international students.
          <br /> <br />
          International students who meet the criteria and provide proper
          documentation are accepted into Tashkent Medical Academy's MBBS
          program. Students receive full support during visa applications as
          well as help finding accommodation through TMA's full-service
          approach. <br /> <br />
          <span className="font-[550]">
            Indian students applying to Tashkent Medical Academy for an MBBS
            include seven steps.
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
