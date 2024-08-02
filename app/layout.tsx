import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://devio.uz/wp-content/cache/autoptimize/css/autoptimize_cf1fe069f922f0e795d1673d5df16bcb.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}