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
    default: `Harry Northam | Web Developer in Gibraltar`,
  },
  description: "An experienced Front End Developer showcasing professional work, technical expertise, and latest projects. Discover my development philosophy, skills, and my journey.",
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  },

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

