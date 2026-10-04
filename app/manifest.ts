import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kartik Saini — Web Developer & Graphic Designer",
    short_name: "Kartik Saini",
    description: "Web development, UI/UX and graphic design for modern brands and digital products.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B0D12",
    theme_color: "#0B0D12",
    orientation: "portrait-primary",
    lang: "en",
    categories: ["business", "portfolio", "productivity"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }
    ]
  };
}
