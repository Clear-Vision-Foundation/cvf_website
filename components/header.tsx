"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-custom-darkBlue" />
          <span className="text-xl font-bold text-custom-darkBlue">ClearVision Foundation</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue">
            Home
          </Link>
          {/* <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
          >
            About
          </Link> */}
          <Link
            href="/research"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
          >
            R&D
          </Link>
          <Link
            href="/nonprofit"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
          >
            Non-profit
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue">
            Blog
          </Link>
          <Link
            href="/volunteer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
          >
            Volunteer
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
          >
            Contact
          </Link>
          <Link href="/donate">
            <Button className="bg-custom-darkBlue hover:bg-custom-mediumBlue">Donate</Button>
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div
          className={cn(
            "absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-md md:hidden",
            isMenuOpen ? "block" : "hidden",
          )}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              R&D
            </Link>
            <Link
              href="/nonprofit"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              Non-profit
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/volunteer"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-custom-darkBlue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/donate" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-custom-darkBlue hover:bg-custom-mediumBlue">Donate</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
