import type { MetadataRoute } from "next";

const base = "https://www.walkerwestevents.com";

// Add new pages to this list when they're created.
const paths = ["", "/about", "/events", "/consulting", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
