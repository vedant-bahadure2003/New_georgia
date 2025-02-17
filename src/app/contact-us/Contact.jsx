"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdCall, MdHome, MdMail } from "react-icons/md"; // Importing icons
import countryCodes from "@/_components/lead-form/data/countrydata";
import ContactImg from "../../../public/Images/ContactImg.png";
import ContactBgImg from "../../../public/Images/ContactBgImg.png";
import pana from "../../../public/Images/pana.png";

// Map selected country to its default ISD code
const countryCodeMapping = {
  India: "+91",
  USA: "+1",
  Canada: "+1",
};

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Derive the ISD code from the selected country
      const isdcode = countryCodeMapping[formData.country] || "";

      const rawPayload = {
        firstname: formData.name,
        lastname: "",
        email: formData.email,
        isdcode: isdcode,
        phone: formData.mobile,
        field_city_1: formData.city,
        field_remarks: "Testing remarks",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Uzbekistan",
      };

      // Filter out any empty or null values
      const payload = Object.fromEntries(
        Object.entries(rawPayload).filter(
          ([, value]) => value != null && value !== ""
        )
      );

      const response = await axios.post(
        "https://api.findcourse.ai/merrito/createMerritoLead",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "secret-key": "eac70228252c443aa3e4e76d8090b8fd",
            "access-key": "b264c4386fe040cc8e96aaa0ee7f033a",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to submit form");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          mobile: "",
          email: "",
          country: "",
          city: "",
        });
      }, 1500);
      router.push("/thank-you");
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] sm:h-[380px]">
        <div className="absolute h-[400px] w-full">
          <Image
            src={ContactImg}
            alt="ContactImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={ContactBgImg}
            alt="ContactBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full absolute top-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-20 sm:top-24 text-white left-5 lg:left-40 text-sm font-semibold">
          <p>
            <Link href="/">Home / </Link>{" "}
            <span className="text-[#9ca3a0]"> Contact Us</span>
          </p>
        </div>
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 lg:left-40 flex flex-col gap-1">
          <h1 className="text-[24px] sm:text-4xl font-semibold mt-3 w-full">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center mt-[40px]">
        <div className="p-3 ">
          <h2 className="text-[22px] lg:text-[30px] font-[700]">
            Contact KlickEdu{" "}
            <span className="text-[#C7183A]">
              {" "}
              #1 MBBS Abroad Consultant from India
            </span>
          </h2>
        </div>
        <div className="w-[85%] lg:w-[58%] mx-auto xl:h-[550px] h-[1100px] shadow-xl border-gray-100 rounded-md border-t-2 flex xl:flex-row flex-col-reverse items-center justify-center gap-8 xl:gap-6">
          {/* Contact Form */}
          <div className="xl:w-[400px] bg-gradient-to-t from-black to-[#C7183A] h-[500px] flex flex-col items-center justify-evenly rounded-md w-[90%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4 w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-[80%] h-[45px] rounded-md px-4 outline-none"
              />
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="p-2 border border-gray-600 rounded-l-md focus:ring-2 focus:ring-[#C7183A] outline-none w-20"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      ({country.dial_code}) {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No. *"
                  className="w-60 p-[11px] border border-gray-600 rounded-r-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-[80%] h-[45px] rounded-md px-4 outline-none"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-[80%] h-[45px] rounded-md px-4 outline-none bg-white"
              >
                <option value="" disabled>
                  Select Your Country
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-[80%] h-[45px] rounded-md px-4 outline-none bg-white"
              >
                <option value="" disabled>
                  Select Your City
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="New York">New York</option>
                <option value="Toronto">Toronto</option>
              </select>

              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[80%] h-[45px] rounded-md bg-[#C7183A] text-white font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {success && (
                <div className="text-green-600 text-sm text-center">
                  Form submitted successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="xl:w-[400px] w-[90%] h-[500px]">
            <div className="w-full h-[180px] flex flex-col gap-4">
              <Image
                src={pana}
                alt="pana"
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col mt-8 gap-4">
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-gradient-to-t from-black to-[#C7183A] flex items-center justify-center text-2xl">
                    <MdCall />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h3 className="font-semibold">Helpline Number</h3>
                    <h3 className="text-[14px]">
                      {" "}
                      <a href="tel:8111996000" className="text-[13px]">
                        8111 99 6000
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-gradient-to-t from-black to-[#C7183A] flex items-center justify-center text-2xl">
                    <MdHome />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h3 className="font-semibold">Head Office</h3>
                    <h3 className="text-[14px]">
                      <span className="text-[14px] text-black hover:text-blue-700 hover:border border-b-blue-700 ">
                        KlickEdu, 1st Floor, MS Building, behind New Theatre,
                        Aristo, Thampanoor, Thiruvananthapuram, Kerala, 695012.
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-gradient-to-t from-black to-[#C7183A] flex items-center justify-center text-2xl">
                    <MdMail />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h3 className="font-semibold">Mail</h3>
                    <h3 className="text-[14px]">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@klickedu.com."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] hover:text-blue-700 hover:border border-b-blue-700"
                      >
                        info@klickedu.com
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Contact Information */}
        </div>
      </div>
    </>
  );
};

export default page;
