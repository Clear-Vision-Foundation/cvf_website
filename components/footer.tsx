import Link from "next/link"
import { Eye } from "lucide-react"
import { SocialLink } from "@/components/social-link"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-custom-darkBlue" />
              <span className="text-xl font-bold text-custom-darkBlue">ClearVision Foundation</span>
            </div>
            <p className="text-sm text-gray-600">
              Bringing clear vision within reach for underserved communities worldwide.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  R&D
                </Link>
              </li>
              <li>
                <Link href="/nonprofit" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Non-profit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-custom-darkBlue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.facebook.com/share/1EU2mnH1j1/"
                label="Facebook"
                icon={
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <SocialLink 
                href="https://www.instagram.com/foundation_clearvision/"
                label="Instagram"
                icon={
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.248.637-.415 1.363-.465 2.428C2.01 8.944 2 9.283 2 12s.01 3.056.06 4.122c.05 1.065.217 1.79.465 2.428a4.9 4.9 0 0 0 1.153 1.772 4.9 4.9 0 0 0 1.772 1.153c.637.248 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06s3.056-.01 4.122-.06c1.065-.05 1.79-.217 2.428-.465a4.9 4.9 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.248-.637.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.217-1.79-.465-2.428a4.9 4.9 0 0 0-1.153-1.772 4.9 4.9 0 0 0-1.772-1.153c-.637-.248-1.363-.415-2.428-.465C15.056 2.01 14.717 2 12 2zm0 1.8c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.684.747 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.683.566-1.15.747-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.672 0-2.987-.01-4.042-.058-.976-.045-1.504-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.747-1.15c-.137-.352-.3-.882-.345-1.857-.047-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.977.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.683-.567 1.15-.748.352-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064A5.136 5.136 0 0 0 6.864 12 5.136 5.136 0 0 0 12 17.136 5.136 5.136 0 0 0 17.136 12 5.136 5.136 0 0 0 12 6.864zm0 8.468A3.333 3.333 0 0 1 8.667 12 3.333 3.333 0 0 1 12 8.667 3.333 3.333 0 0 1 15.333 12 3.333 3.333 0 0 1 12 15.332zm6.536-8.67a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              {/* <SocialLink
                href="https://twitter.com/clearvision"
                label="X"
                icon={
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                }
              /> */}
              <SocialLink
                href="https://www.linkedin.com/company/clear-vision-foundation-2025/"
                label="LinkedIn"
                icon={
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ClearVision Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
