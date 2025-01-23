import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: {
    template: `%s | Harry Northam`,
    default: `Harry Northam | Web developer in Gibraltar`,
  },
  description: "An experienced web developer in Gibraltar showcasing professional work, technical expertise, and latest projects. Discover my development philosopshy, skills, and my journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col min-h-dvh`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BFZBM0LK5M" />
    </html>
  )
}

