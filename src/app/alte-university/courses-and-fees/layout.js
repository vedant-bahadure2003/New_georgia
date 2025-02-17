import React from "react";
import Head from "next/head";

const AndijanStateMedicalInstituteLayout = ({ children }) => {
  // SEO metadata for Andijan State Medical Institute section

  return (
    <>
      {/* SEO metadata */}
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XLXF0NJLC"
        ></script>
        <script>
          {/* window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4XLXF0NJLC'); */}
          dangerouslySetInnerHTML=
          {{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4XLXF0NJLC');
              `,
          }}
          <meta
            name="google-site-verification"
            content="b5_sTHm3PNeFczTBuqRp1mfWcWYC3hM2LhvIVT4cWX8"
          />
        </script>
      </Head>

      {/* Main content */}
      <main>{children}</main>
    </>
  );
};

export default AndijanStateMedicalInstituteLayout;
