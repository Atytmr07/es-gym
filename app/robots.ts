import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/packages", "/kvkk", "/mesafeli-satis", "/iptal-iade", "/kullanim-kosullari"],
        disallow: ["/admin", "/dashboard", "/payment", "/login", "/register", "/api"],
      },
    ],
    sitemap: "https://esgymfitness.com/sitemap.xml",
    host: "https://esgymfitness.com",
  };
}
