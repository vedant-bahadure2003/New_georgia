import Image from "next/image";
import rightsign from "../../../../public/Images/vector.png";
import onlineAppIcon from "../../../../public/Images/online-application.png";
import submitIcon from "../../../../public/Images/submit.png";
import reviewIcon from "../../../../public/Images/review.png";
import acceptIcon from "../../../../public/Images/accept.png";
import visaIcon from "../../../../public/Images/visa.png";

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      step: 1,
      description:
        "Fill out the online application form on the university's official website before the application deadline.",
    },
    {
      step: 2,
      description:
        "Upload scanned copies of your academic certificates and other documents required for admission.",
    },
    {
      step: 3,
      description:
        "Wait for the university to issue an offer letter within 48 hours of your application submission.",
    },
    {
      step: 4,
      description:
        "Pay the first-year tuition fee after getting your offer letter.",
    },
    {
      step: 5,
      description:
        "Apply for a student visa, making sure your passport is valid.",
    },
    {
      step: 6,
      description: "The processing time for a student visa is about 30 days.",
    },
    {
      step: 7,
      description:
        "After your visa is approved, you can travel to Georgia and start your MBBS course at Alte University.",
    },
  ];

  return (
    <div className="lg:w-[95%] lg:mx-auto mt-6 ml-6 sm:p-0">
      <div className="py-6">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to Apply for MBBS Admission at Alte University?
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px] text-black">
          International students can find a simple application procedure at Alte
          University if they want to study MBBS. The admission process at Alte
          University demands students to complete their online form submission
          together with academic document delivery followed by a rapid 48-hour
          offer letter issuance. Before starting the student visa application
          process, international students need to send their first-year tuition
          payment to Alte University.
          <br />
          <br />
          Students need to obtain their valid passports and then apply for a
          student visa that requires 30 days for processing. When the granting
          authority approves the visa permit, students can embark on their
          journey to Georgia to study at Alte University.
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
