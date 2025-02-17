"use client";
import React, { useState, useEffect } from "react";

function WhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9072677710";
    const message = "I would like to Know About MBBS Admission in Uzbekistan";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 40,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </div>

      {isVisible && (
        <div
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "50px",
            height: "50px",
            backgroundColor: "#C7183A",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            cursor: "pointer",
            zIndex: 40,
            fontSize: "24px",
          }}
        >
          ↑
        </div>
      )}
    </>
  );
}

export default WhatsApp;
