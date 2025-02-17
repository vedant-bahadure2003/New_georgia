import React from "react";
import Head from "next/head";
import Script from "next/script";

// SEO metadata for MBBS in Uzbekistan section

const MBBSLayout = ({ children }) => {
  return (
    <>
      {/* SEO metadata */}
      <Head>
        {/* Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="b5_sTHm3PNeFczTBuqRp1mfWcWYC3hM2LhvIVT4cWX8"
        />
        {/* <link
          rel="canonical"
          href="https://uzbekistanmedi.com/mbbs-in-uzbekistan"
        /> */}
      </Head>

      {/* Google Analytics Script (in the body) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4XLXF0NJLC"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4XLXF0NJLC');
        `,
        }}
      />

      {/* Main content */}
      <main>{children}</main>
    </>
  );
};

export default MBBSLayout;
