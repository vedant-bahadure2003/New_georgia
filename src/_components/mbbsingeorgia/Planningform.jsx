"use client";
import React, { useState } from "react";
import axios from "axios";
import countryCodes from "../lead-form/data/countrydata";
import { useRouter } from "next/navigation";
const Planningform = () => {
  // Set initial form state including lastname
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  // Update form data on change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission and API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare payload with API keys and additional data
      const rawPayload = {
        firstname: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        isdcode: formData.countryCode,
        phone: formData.mobile,
        field_city_1: formData.city,
        field_remarks: "Testing remarks",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Russia",
      };

      // Remove any empty values
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

      // Show success message and reset form after a short delay
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          lastname: "",
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
    <div className="mt-10 lg:w-[95%] lg:mx-auto">
      <div className="mx-auto p-4 rounded-lg sm:border sm:border-gray-600 sm:shadow-lg bg-[#FFF7EE]">
        <div className="flex flex-col gap-3">
          <h2 className="text-[24px] lg:text-3xl font-semibold text-center text-[#C7183A]">
            Planning To Study MBBS?
          </h2>
          <p className="text-sm lg:text-[18px] font-semibold text-center text-gray-700">
            Fill the form and get Detailed Counseling
          </p>
        </div>
        {/* Form with onSubmit handler */}
        <form
          onSubmit={handleSubmit}
          className=" lg:grid grid-cols-1 md:grid-cols-2  flex flex-col gap-4  lg:gap-4 mt-[20px]"
        >
          {/* First Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#C7183A]outline-none"
            required
          />
          {/* Last Name */}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#C7183A]outline-none"
            required
          />
          {/* Mobile field with country code selector */}
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
              className="w-full p-2 border border-gray-600 rounded-r-md focus:ring-2 focus:ring-[#C7183A]
               outline-none"
              required
            />
          </div>
          {/* City */}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City *"
            className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#C7183A]outline-none"
            required
          />
          {/* Error & Success Messages */}
          {error && (
            <p className="col-span-2 text-red-600 text-center">{error}</p>
          )}

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-2 bg-[#C7183A] text-white font-medium rounded-md w-full lg:w-[200px]"
            >
              {isSubmitting ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Planningform;
