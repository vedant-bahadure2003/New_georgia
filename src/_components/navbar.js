"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoMdHome, IoMdInformationCircle, IoMdSchool } from "react-icons/io";
import { FaBlog, FaUniversity, FaPhotoVideo, FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/logo.webp";

// Import the Lead Form modal popup component
import LeadFormModalPopup from "./lead-form/LeadFormModalPopup";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleApplyNowClick = () => {
    setShowModal(true);
  };

  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".group/item");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <IoMdHome className="text-xl text-gray-900" />,
    },
    {
      label: "About",
      href: "/about-us",
      icon: <IoMdInformationCircle className="text-xl text-gray-900" />,
    },
    {
      label: "MBBS in Georgia",
      href: "/mbbs-in-georgia",
      icon: <IoMdSchool className="text-xl text-gray-900" />,
    },
    {
      label: "Universities",
      href: "#",
      icon: <FaUniversity className="text-xl text-gray-900" />,
      dropdown: [
        {
          label: "Alte University",
          href: "/alte-university",
        },
        {
          label: "Akaki Tsereteli State University",
          href: "/akaki-tsereteli-state-university",
        },
        {
          label: "Geomedi Medical University",
          href: "#",
        },
        {
          label: "European University Georgia",
          href: "#",
        },
        {
          label: "Georgian National University SEU",
          href: "#",
        },
        {
          label: "Ilia State University",
          href: "#",
        },
        {
          label: "university of georgia tbilisi",
          href: "#",
        },
      ],
    },
    {
      label: "Services",
      href: "/our-services",
      icon: <FaBlog className="text-xl text-gray-900" />,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      icon: <FaPhoneAlt className="text-xl text-gray-900" />,
    },
  ];

  return (
    <>
      <header className="w-full lg:h-[81px] bg-white shadow-md shadow-gray-400 fixed top-0 left-0 z-50">
        <nav className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-2 md:py-4">
          {/* Logo */}
          <div className="flex">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Uzbekistan Medi Logo"
                className="w-[135px] h-[50px] object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <ul
              className="flex flex-wrap gap-4 md:gap-6 mt-2 lg:mt-0"
              ref={menuRef}
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="relative">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.dropdown) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                      }}
                      className="text-base md:text-lg text-black hover:text-[#C7183A] cursor-pointer flex items-center gap-1"
                      aria-haspopup={item.dropdown ? "true" : undefined}
                      aria-expanded={
                        activeDropdown === index ? "true" : undefined
                      }
                    >
                      {item.label}
                      {item.dropdown && (
                        <RiArrowDropDownLine
                          className={`text-black text-3xl transition-transform duration-300 ${
                            activeDropdown === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </a>

                    {item.dropdown && activeDropdown === index && (
                      <ul
                        className="absolute left-0 right-5   bg-white text-black mt-2 shadow-2xl rounded-xl z-10 min-w-[520px] max-w-[600px] border border-gray-300 overflow-hidden grid grid-cols-2 
                     bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm 
                     [box-shadow:0_10px_40px_-15px_rgba(0,0,0,0.15)]"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="relative hover:bg-gradient-to-br from-blue-50/40 to-transparent transition-all 
                       border-b border-r border-gray-100/60 group/item"
                          >
                            <Link
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center p-4 space-x-3 text-sm font-medium text-gray-700 
                         hover:text-[#C7183A] transition-all duration-300 relative
                         before:absolute before:inset-0 before:bg-[#C7183A]/5 before:opacity-0 
                         before:transition-opacity before:duration-300 hover:before:opacity-100"
                            >
                              {/* Icon container with animated border */}
                              {/* <div className="relative shrink-0">
                                <div
                                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 
                               flex items-center justify-center transition-all duration-300 
                               group-hover/item:scale-110 group-hover/item:shadow-sm"
                                >
                                 
                                  <span className="text-sm">→</span>
                                </div>
                              </div> */}

                              <span className="relative flex-1">
                                {subItem.label}
                                <span
                                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C7183A] 
                                 transition-all duration-300 group-hover/item:w-full"
                                ></span>
                              </span>

                              {/* Animated chevron */}
                              <svg
                                className="w-4 h-4 ml-2 opacity-0 group-hover/item:opacity-100 
                              group-hover/item:translate-x-1 transition-all duration-300"
                                fill="none"
                                stroke="#C7183A"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>

                            {/* Hover spotlight effect */}
                            <div
                              className="absolute inset-0 pointer-events-none opacity-0 
                            group-hover/item:opacity-100 transition-opacity duration-300 
                            [background:radial-gradient(200px_circle_at_var(--x)_var(--y),#C7183A/3%]"
                            ></div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {/* Desktop Apply Now Button with onClick */}
            <button
              onClick={handleApplyNowClick}
              className="text-sm py-2 px-4 bg-[#C7183A] text-white rounded-md hover:bg-red-800 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Mobile Apply Now Button with onClick */}
            <button
              onClick={handleApplyNowClick}
              className="text-sm py-1 px-3 bg-[#C7183A] text-white rounded-md hover:bg-red-900"
            >
              Apply Now
            </button>
            <IoMdMenu
              className="text-black text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            />
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white z-[60] transform ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-200 overflow-y-auto`}
          >
            <div className="flex  justify-between items-center px-4 py-5 border-b border-gray-200">
              <Image
                src={logo}
                alt="Uzbekistan Medi Logo"
                className="w-[130px] h-[45px] object-contain"
              />
              <IoMdClose
                className="text-3xl cursor-pointer"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              />
            </div>
            <nav className="flex flex-col gap-4 mt-6 px-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center font-semibold gap-3 text-lg hover:bg-gray-50 transition-all duration-300 ease-out py-3 px-4 rounded-xl
          ${mobileActiveDropdown === index ? "bg-gray-50 shadow-inner" : ""}
          hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0`}
                    onClick={(e) => {
                      if (!item.dropdown) {
                        setIsMobileMenuOpen(false);
                      } else {
                        e.preventDefault();
                        toggleMobileDropdown(index);
                      }
                    }}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                    aria-expanded={
                      mobileActiveDropdown === index ? "true" : undefined
                    }
                  >
                    <span className="[&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-gray-700">
                      {item.icon}
                    </span>
                    <span className="text-gray-800">{item.label}</span>
                    {item.dropdown && (
                      <RiArrowDropDownLine
                        className={`ml-auto text-2xl transition-all ${
                          mobileActiveDropdown === index
                            ? "rotate-180 text-red-700"
                            : "rotate-0 text-gray-500"
                        }`}
                      />
                    )}
                  </Link>
                  {item.dropdown && mobileActiveDropdown === index && (
                    <ul className="pl-10 mt-2 space-y-2 border-l-2 border-blue-100 ml-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="text-lg flex font-normal text-gray-600 hover:text-[#C7183A] transition-all duration-200 ease-in-out py-2 px-3
                           hover:bg-blue-50 rounded-lg group"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileActiveDropdown(null);
                            }}
                          >
                            <span className="w-2 h-2 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all mr-3 mt-2" />
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </nav>
      </header>

      {/* Render the Lead Form Modal Popup when showModal is true */}
      {showModal && (
        <LeadFormModalPopup
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;
