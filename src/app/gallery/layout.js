import Head from "next/head";

export const metadata = {
  title: "Gallery - Uzbekistan Medi",
  description:
    "Explore Uzbekistan Medi’s gallery showcasing successful student journeys and experiences in medical education in Russia. See our impact!",
  keywords:
    "gallery, projects, creative work, Technobridge Systems, design, images",
  image: "https://www.yourwebsite.com/path-to-image.jpg",
  alternates: { url: "/gallery" },
};

export default function GalleryLayout({ children }) {
  return (
    <>
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

        <meta
          name="google-site-verification"
          content="b5_sTHm3PNeFczTBuqRp1mfWcWYC3hM2LhvIVT4cWX8"
        />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        {/* <link rel="canonical" href={metadata.url} /> */}
      </Head>

      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
