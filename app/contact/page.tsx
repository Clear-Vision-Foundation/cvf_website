import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { SocialLink } from "@/components/social-link"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                We'd love to hear from you. Reach out with questions, partnership opportunities, or to learn more about
                our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-gray-500 md:text-lg">
                  Whether you have questions about our programs, want to volunteer, or are interested in partnering with
                  us, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:info@clearvisionfoundation.org" className="text-custom-darkBlue hover:underline">
                      info@clearvisionfoundation.org
                    </a>
                    <p className="mt-1 text-sm text-gray-500">For general inquiries and information</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:+1-555-123-4567" className="text-custom-darkBlue hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="mt-1 text-sm text-gray-500">Monday-Friday, 9am-5pm EST</p>
                  </div> */}
                </div>

                {/* <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Headquarters</h3>
                    <address className="not-italic text-gray-700">
                      123 Vision Street
                      <br />
                      Suite 456
                      <br />
                      Boston, MA 02108
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </div> */}

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialLink 
                    href="https://www.facebook.com/share/1EU2mnH1j1/"
                    label="Facebook"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                  {/* Add more social links here if needed */}
                  <SocialLink 
                    href="https://www.linkedin.com/company/clear-vision-foundation-2025/"
                    label="LinkedIn"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                  <SocialLink 
                    href="https://www.instagram.com/foundation_clearvision/"
                    label="Instagram"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.248.637-.415 1.363-.465 2.428C2.01 8.944 2 9.283 2 12s.01 3.056.06 4.122c.05 1.065.217 1.79.465 2.428a4.9 4.9 0 0 0 1.153 1.772 4.9 4.9 0 0 0 1.772 1.153c.637.248 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06s3.056-.01 4.122-.06c1.065-.05 1.79-.217 2.428-.465a4.9 4.9 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.248-.637.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.217-1.79-.465-2.428a4.9 4.9 0 0 0-1.153-1.772 4.9 4.9 0 0 0-1.772-1.153c-.637-.248-1.363-.415-2.428-.465C15.056 2.01 14.717 2 12 2zm0 1.8c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.684.747 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.683.566-1.15.747-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.672 0-2.987-.01-4.042-.058-.976-.045-1.504-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.747-1.15c-.137-.352-.3-.882-.345-1.857-.047-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.977.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.683-.567 1.15-.748.352-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064A5.136 5.136 0 0 0 6.864 12 5.136 5.136 0 0 0 12 17.136 5.136 5.136 0 0 0 17.136 12 5.136 5.136 0 0 0 12 6.864zm0 8.468A3.333 3.333 0 0 1 8.667 12 3.333 3.333 0 0 1 12 8.667 3.333 3.333 0 0 1 15.333 12 3.333 3.333 0 0 1 12 15.332zm6.536-8.67a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
