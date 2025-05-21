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
