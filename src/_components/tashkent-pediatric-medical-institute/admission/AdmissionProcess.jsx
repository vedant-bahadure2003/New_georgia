import Image from "next/image";
import rightsign from "../../../../public/Images/vector.png";
import onlineAppIcon from "../../../../public/Images/online-application.png";
import submitIcon from "../../../../public/Images/submit.png";
import reviewIcon from "../../../../public/Images/review.png";
import acceptIcon from "../../../../public/Images/accept.png";
import visaIcon from "../../../../public/Images/visa.png";

const AdmissionProcess = () => {
  return (
    <div className="lg:w-[95%] lg:mx-auto mt-2 ml-6     sm:p-0 ">
      <div className=" py-6  ">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[28px] font-[700] text-[#C7183A]">
          How to Take Admission in Tashkent Pediatric Medical Institute?{" "}
        </h2>
        <p className="mt-2 text-[14px] sm:text-[16px]  text-black">
          International students find it simple to attain admission at Tashkent
          Pediatric Medical Institute through its straightforward application
          system. The admission requirements at Tashkent Pediatric Medical
          Institute include achieving 50% in PCB (Physics, Chemistry, Biology)
          and obtaining a valid NEET score. Online applications facilitate easy
          access for international students to enrol at Tashkent Pediatric
          Medical Institute. The admission procedure at TashPMI follows these
          specific steps to obtain enrollment.
        </p>

        {/* Steps Section */}
        <div className="text-[14px] sm:text-[16px]  flex flex-col gap-2 mt-3">
          <ul className="flex flex-col gap-5">
            <li>
              {" "}
              <span className="font-bold">
                Step 1 : Students should complete the application form through
                the online platform.{" "}
              </span>{" "}
              <br /> <br />
              Students need to access the official university portal, where they
              should fill out their application form using the correct
              information.
            </li>
            <li>
              {" "}
              <span className="font-bold">
                Step 2 : Submit Required Documents{" "}
              </span>{" "}
              <br /> <br />
              The student must sign the application form after printing it and
              then submit the necessary documents, including passport and
              academic certificates and NEET scorecard, through email scanning.
              The scanned materials need to be delivered through email to
              Tashkent Pediatric Medical Institute.
            </li>
            <li>
              {" "}
              <span className="font-bold">
                Step 3 : University Verification & Invitation Letter
              </span>
              <br /> <br />
              The university staff will examine the provided documents before
              confirming the applicant's qualifications. After a successful
              review, the student will get an official invitation letter from
              university.
            </li>
            <li>
              {" "}
              <span className="font-bold">
                Step 4 : Fee Payment & Confirmation
              </span>
              <br /> <br />
              After receiving acceptance from the university, the candidate
              needs to follow the university's instructions to pay their initial
              tuition fees. The university will generate a Fee Acknowledgment
              Letter after students complete their payment.
            </li>
            <li>
              {" "}
              <span className="font-bold">
                Step 5 : Student Visa Application
              </span>
              <br /> <br />
              Students who receive the invitation letter, must begin their
              student visa application process for Uzbekistan without delay.
              Students must submit their visa documents to processing
              authorities on time to achieve efficient visa processing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
