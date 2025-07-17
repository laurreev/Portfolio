
export const metadata = {
  title: "Laurreev",
  description: "Portfolio of Dlanor Domingo",
};

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";

const AppBar = dynamic(() => import("./AppBar"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


