import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

const noah = localFont({
  src: [
    {
      path: "./fonts/Noah-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Noah-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Noah-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Noah-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-noah",
});

export const metadata: Metadata = {
  title: "Noah's Portfolio",
  description:
    "As a local web designer and developer within southeast Michigan.....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[10px]">
      <body className={`${noah.className} bg-primary text-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
