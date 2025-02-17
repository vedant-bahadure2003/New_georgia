"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import countryCodes from "../lead-form/data/countrydata"; // Adjust the path as needed
import formBgImg from "../../../public/homeimage/bro.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare payload (notice we use an empty string for lastname since it's not in our form)
      const rawPayload = {
        firstname: formData.name,
        lastname: "",
        email: formData.email,
        isdcode: formData.countryCode,
        phone: formData.mobile,
        field_city_1: formData.city,
        field_remarks: "Testing remarks",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Uzbekistan",
      };

      // Remove any empty or null values
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
      // Reset form after a short delay
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          mobile: "",
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
    <div className="w-full relative bg-[url('/homeimage/contactBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-[90%] md:w-[80%] mx-auto rounded-md py-8">
        <div className="p-4 mx-auto">
          <div className="mb-8">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-snug text-center">
              Get Personalized Guidance for Your MBBS Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-2 sm:p-10">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <Image
                src={formBgImg}
                alt="Contact Us"
                className="rounded-lg shadow-lg"
                width={400}
                height={400}
              />
            </div>
            {/* Right Side - Form */}
            <div className="flex justify-center">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 w-full max-w-md"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                />

                <div>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-2 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-l-md focus:outline-none w-24"
                    >
                      {countryCodes?.map((country) => (
                        <option key={country.code} value={country.code}>
                          ({country.dial_code}) {country.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile *"
                      className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C7183A] outline-none"
                />

                {error && (
                  <div className="text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}

                <div className="flex justify-center mt-2 w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-[#1A2F5A] rounded-[6px] text-white font-medium w-full disabled:bg-gray-400"
                  >
                    {isSubmitting ? "Submitting..." : "Apply Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
