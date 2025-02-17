import Head from "next/head";

export const metadata = {
  title: "Blog - Uzbekistan Medi",
  description:
    "Stay updated with the latest news and insights from Uzbekistan Medi. Read our blog for valuable healthcare tips, industry trends, and more.",
  keywords:
    "blog, Uzbekistan Medi, healthcare tips, healthcare industry, news, updates, trends",
  image: "https://www.yourwebsite.com/path-to-image.jpg",
  url: "https://www.yourwebsite.com/blog",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <link rel="canonical" href={metadata.url} />
      </Head>

      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
