import Head from "next/head";

export default function ContactLayout({ children }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XLXF0NJLC"
        />
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
        <meta
          name="google-site-verification"
          content="b5_sTHm3PNeFczTBuqRp1mfWcWYC3hM2LhvIVT4cWX8"
        />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta property="og:url" content="https://uzbekistanmedi.com/about-us" />
        {/* <link rel="canonical" href="https://uzbekistanmedi.com/contact-us" /> */}
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
