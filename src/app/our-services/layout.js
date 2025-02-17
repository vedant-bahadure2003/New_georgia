import React from "react";
import Head from "next/head";

// SEO metadata for Our Services section

const ServicesLayout = ({ children }) => {
  return (
    <>
      {/* <Head>
       
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${metadata.googleAnalyticsID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${metadata.googleAnalyticsID}');
            `,
          }}
        />
      </Head> */}

      <main>{children}</main>
    </>
  );
};

export default ServicesLayout;
