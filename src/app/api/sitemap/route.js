import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://uzbekistanmedi.com"; // Your domain without trailing slash

  // Example static pages
  const staticPages = [
    "/",
    "/about-us",
    "/mbbs-in-uzbekistan",
    "/andijan-state-medical-university",
    "/samarkand-state-medical-university",
    "/bukhara-state-medical-institute",
    "/fergana-medical-institute-of-public-health",
    "/our-services",
    "/contact-us",
  ];

  // Example dynamic pages (Replace with actual API call if needed)
  const dynamicPages = [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
  ];

  // Generate URLs as plain XML strings
  const staticUrls = staticPages
    .map(
      (page) =>
        `<url>
        <loc>${baseUrl}${page}</loc>
      </url>`
    )
    .join("\n");

  const dynamicUrls = dynamicPages
    .map(
      (post) =>
        `<url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
      </url>`
    )
    .join("\n");

  // Complete sitemap XML format
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${dynamicUrls}
    </urlset>`;

  // Return the sitemap response with proper headers
  return NextResponse.json(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
