import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Connect 4",
    short_name: "Con4",
    description: "A game of Connect 4",
    start_url: "/",
    display: "standalone",
    background_color: "#FD6687",
    theme_color: "#5C2DD5",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}