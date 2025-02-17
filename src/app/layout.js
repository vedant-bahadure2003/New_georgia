/* eslint-disable @next/next/next-script-for-ga */
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/Footer";
import CommonContactForm from "@/_components/contact-form/CommonContactForm";
import WhatsApp from "@/_components/WhatsAppIcon/WhatsApp";
// import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const ContactFormWrapper = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return pathname !== "/thank-you" ? <CommonContactForm /> : null;
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="b5_sTHm3PNeFczTBuqRp1mfWcWYC3hM2LhvIVT4cWX8"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XLXF0NJLC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4XLXF0NJLC');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main role="main">{children}</main>
        <WhatsApp />
        <div className="mt-4">
          <ContactFormWrapper />
        </div>
        <Footer />
      </body>
    </html>
  );
}
