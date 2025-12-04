import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BodyWrapper } from "@/components/body-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClearVision Foundation",
  description: "Bringing clear vision within reach for underserved communities worldwide",
  icons: {
    icon: "/Untitled_design-removebg-preview.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <BodyWrapper className={`${inter.className} bg-white text-gray-800`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </BodyWrapper>
    </html>
  )
}
