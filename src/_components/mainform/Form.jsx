"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import countryCodes from "../lead-form/data/countrydata";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneCode: "+91", // Default country code
    phoneNumber: "", // Ensure correct field name
    email: "",
    city: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`Updated ${name}:`, value); // Debugging log
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation check
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.city
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const rawPayload = {
        firstname: formData.fullName.split(" ")[0],
        lastname: formData.fullName.split(" ").slice(1).join(" ") || " ",
        email: formData.email,
        isdcode: formData.phoneCode,
        phone: formData.phoneNumber,
        field_city_1: formData.city,
        field_remarks: formData.message || "No additional message",
        medium: window.location.pathname,
        source: window.location.href.replace(/^https?:\/\//, ""),
        campaign: "Uzbekistan",
      };

      const payload = Object.fromEntries(
        Object.entries(rawPayload).filter(
          ([_, value]) => value != null && value !== ""
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

      setIsSuccess(true);
      setFormData({
        fullName: "",
        phoneCode: "+91",
        phoneNumber: "",
        email: "",
        city: "",
        message: "",
      });

      router.push("/thank-you");

      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hidden lg:flex flex-col gap-6 border border-gray-300 rounded-xl p-8 py-6 h-fit sticky top-32 shadow-xl bg-white">
      <h2 className="font-semibold text-xl text-[#C7183A] text-center mb-1">
        Admission Process For 2025-26 Starting Soon
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name *"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#C7183A] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <div className="flex gap-4 w-full">
          <select
            name="phoneCode"
            value={formData.phoneCode}
            onChange={handleChange}
            className="px- py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-l-md focus:outline-none w-16"
          >
            {countryCodes?.map((country) => (
              <option key={country.code} value={country.dial_code}>
                ({country.dial_code}) {country.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Mobile Number *"
            required
            className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#C7183A] outline-none rounded-lg w-[70%] transition-all duration-300 ease-in-out"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#C7183A] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City Name *"
          required
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#C7183A] outline-none rounded-lg transition-all duration-300 ease-in-out"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional Message"
          rows="4"
          className="p-2 border-2 border-gray-300 bg-[#F9F9F9] focus:ring-2 focus:ring-[#C7183A] outline-none rounded-lg transition-all duration-300 ease-in-out"
        ></textarea>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#C7183A] font-semibold text-white py-3 mt-3 hover:bg-[#C7183A] transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
