import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Harry Northam - Web developer in Gibraltar",
  description: "An experienced web developer in Gibraltar showcasing professional work, technical expertise, and latest projects. Discover my development philosophy, skills, and my journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}

        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BFZBM0LK5M" />
    </html>
  );
}
