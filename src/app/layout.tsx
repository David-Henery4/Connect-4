import type { Metadata } from "next";
import "./globals.css";
import { spaceGFont } from "@/fonts/spaceGFont";

export const metadata: Metadata = {
  title: "Connect 4",
  description: "A game of Connect 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGFont.variable}`}>
      <body className="text-black font-spaceG has-[dialog[open]]:overflow-hidden">
        {children}
      </body>
    </html>
  );
}
