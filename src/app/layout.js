import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/_components/NavBar";
import Footer from "@/_components/Footer";
import Head from "next/head"; // ✅ import this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Homepage",
  description: "Nashik City Police",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ ADD this Google Fonts link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
