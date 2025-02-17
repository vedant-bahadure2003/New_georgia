import Link from "next/link";
import React from "react";
import Head from "next/head";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus, BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn about Uzbekistan Medi, your trusted guide for pursuing MBBS in Uzbekistan. We offer support for top universities and globally recognized degrees."
        />
        <meta
          name="keywords"
          content="Uzbekistan Medi, MBBS in Uzbekistan, medical education, study in Uzbekistan, top universities, medical degrees"
        />
        <meta name="author" content="Uzbekistan Medi" />
      </Head>

      <div className="w-full h-auto bg-gradient-to-t from-[#001849] to-[#07193E] flex items-center justify-center pb-3 flex-col gap-4 sm:py-[40px] py-14">
        <div className="flex flex-col lg:flex-row gap-10 w-[90%] lg:w-[80%] h-auto text-black mt-[20px]">
          {/* About Section */}
          <div className="flex flex-col gap-4 lg:w-[40%]">
            <h2 className="text-[24px] lg:text-[24px] font-semibold text-gray-300">
              About Georgia Medi
            </h2>
            <p className="text-[12px] text-gray-300">
              Georgia Medi is your trusted partner in pursuing MBBS in Georgia.
              With a mission to simplify medical education abroad, we connect
              aspiring doctors with top NMC and WHO-recognized universities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4 lg:w-[40%] lg:items-center">
            <h2 className="text-[24px] lg:text-[24px] font-semibold text-gray-300">
              Quick Links
            </h2>
            <div className="flex flex-col gap-3 text-[14px] text-gray-300">
              <Link href={"/"} className="hover:text-white">
                Home
              </Link>
              <Link href={"/about-us"} className="hover:text-white">
                About Us
              </Link>
              <Link href={"/contact-us"} className="hover:text-white">
                Contact Us
              </Link>
              <Link href={"/mbbs-in-georgia"} className="hover:text-white">
                MBBS in Georgia
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] lg:text-[24px] text-gray-300 font-semibold">
              Contact Us
            </h2>
            <div className="flex gap-2">
              <BiLocationPlus size={29} color="white" />
              <p className="text-[13px] text-gray-300">
                KlickEdu, 1st Floor, MS Building, behind New Theatre, Aristo,
                Thampanoor, Thiruvananthapuram, Kerala, 695012.
              </p>
            </div>
            <div className="flex gap-2 text-gray-300 hover:text-white">
              <MdEmail size={20} color="white" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@klickedu.com."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] hover:underline"
              >
                info@klickedu.com
              </a>
            </div>

            <div className="flex gap-2 mt-1 text-gray-300 hover:text-white">
              <BiPhone size={20} color="white" />
              <a href="tel:8111996000" className="text-[13px]">
                8111 99 6000
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-2 w-[90%] lg:w-[80%]">
          <hr />
          <div className="flex text-[14px] py-2 text-white items-center justify-center">
            <p>
              © 2025 All Rights Reserved by Georgia Medi, Parent Company of
              KlickEdu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
