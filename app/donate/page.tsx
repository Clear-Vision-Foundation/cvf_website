import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, CreditCard, Calendar, Eye, Glasses, Microscope, Users } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Donate Today</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your donation isn't just about restoring sight—it's about restoring hope. Even the smallest contribution
                can help someone see a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Make a Difference</h2>
                <p className="text-gray-500 md:text-lg">
                  Your generous donation helps fund our initiatives to provide accessible eye care to underserved
                  communities and advance our research in adaptive lens technology.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-gray-100 p-2">
                    <Heart className="h-5 w-5 text-custom-darkBlue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Fund Medical Eye Camps</h3>
                    <p className="text-gray-500">Help us organize free eye camps in underserved regions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-gray-100 p-2">
                    <Eye className="h-5 w-5 text-custom-darkBlue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Support Cataract Surgeries</h3>
                    <p className="text-gray-500">
                      Fund life-changing surgeries for those suffering from preventable blindness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-gray-100 p-2">
                    <Glasses className="h-5 w-5 text-custom-darkBlue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Provide Prescription Glasses</h3>
                    <p className="text-gray-500">Help distribute free prescription glasses to those in need.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-gray-100 p-2">
                    <Microscope className="h-5 w-5 text-custom-darkBlue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Advance R&D Efforts</h3>
                    <p className="text-gray-500">Support our research in developing adaptive lens technology.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <div className="mb-4 text-lg font-bold">Your Impact</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">$25</span>
                    <span className="text-gray-600">Provides a pair of prescription glasses</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">$100</span>
                    <span className="text-gray-600">Funds eye screenings for 20 people</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">$250</span>
                    <span className="text-gray-600">Sponsors a cataract surgery</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">$1,000</span>
                    <span className="text-gray-600">Helps fund a medical eye camp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold">Donate Now</h3>
                <p className="text-gray-500">Choose your donation type and amount</p>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-sm font-medium">Donation Type</div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center rounded-md border border-custom-darkBlue bg-gray-50 px-4 py-2 text-sm font-medium text-custom-darkBlue">
                    <DollarSign className="mr-2 h-4 w-4" />
                    One-time
                  </button>
                  <button className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Calendar className="mr-2 h-4 w-4" />
                    Monthly
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-sm font-medium">Select Amount</div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    $25
                  </button>
                  <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    $50
                  </button>
                  <button className="rounded-md border border-custom-darkBlue bg-gray-50 px-4 py-2 text-sm font-medium text-custom-darkBlue">
                    $100
                  </button>
                  <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    $250
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 text-sm font-medium">Custom Amount</div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 pl-7 pr-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="card" className="mb-2 block text-sm font-medium text-gray-700">
                    Card Information
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="card"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                      placeholder="Card number"
                      required
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="mb-2 block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="mb-2 block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                      placeholder="CVC"
                      required
                    />
                  </div>
                </div>
                <Button className="w-full bg-custom-darkBlue hover:bg-custom-mediumBlue">Donate Now</Button>
                <p className="text-center text-xs text-gray-500">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Other Ways to Give</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                There are many ways you can support our mission beyond one-time donations.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Calendar className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Monthly Giving</h3>
              <p className="text-center text-gray-500">
                Become a sustaining donor by setting up a recurring monthly donation to provide ongoing support for our
                programs.
              </p>
              <Button variant="outline" className="mt-2 border-custom-darkBlue text-custom-darkBlue hover:bg-gray-50">
                Set Up Monthly Giving
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Users className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Corporate Partnerships</h3>
              <p className="text-center text-gray-500">
                Partner with us as a corporation to make a larger impact through sponsorships, matching gifts, or
                in-kind donations.
              </p>
              <Button variant="outline" className="mt-2 border-custom-darkBlue text-custom-darkBlue hover:bg-gray-50">
                Become a Partner
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Heart className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Legacy Giving</h3>
              <p className="text-center text-gray-500">
                Make a lasting impact by including ClearVision Foundation in your estate planning or through a planned
                gift.
              </p>
              <Button variant="outline" className="mt-2 border-custom-darkBlue text-custom-darkBlue hover:bg-gray-50">
                Learn About Legacy Giving
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Donation at Work</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                See how your contributions are making a real difference in people's lives.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=200&width=400" alt="Impact Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Restoring Sight in Rural India</h3>
                <p className="mb-4 text-gray-500">
                  Thanks to donor support, we were able to fund 200 cataract surgeries in rural villages across India,
                  restoring sight to individuals who had been living with preventable blindness for years.
                </p>
                <Button variant="link" className="p-0 text-custom-darkBlue hover:text-custom-darkBlue">
                  Read More
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=200&width=400" alt="Impact Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Bringing Vision to School Children</h3>
                <p className="mb-4 text-gray-500">
                  Our recent initiative provided free eye screenings and prescription glasses to over 1,000 school
                  children in underserved communities, enabling them to see clearly and excel in their education.
                </p>
                <Button variant="link" className="p-0 text-custom-darkBlue hover:text-custom-darkBlue">
                  Read More
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=200&width=400" alt="Impact Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Advancing Adaptive Lens Research</h3>
                <p className="mb-4 text-gray-500">
                  Donor funding has accelerated our research in adaptive lens technology, bringing us closer to
                  developing a solution that could revolutionize vision care for millions worldwide.
                </p>
                <Button variant="link" className="p-0 text-custom-darkBlue hover:text-custom-darkBlue">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Find answers to common questions about donating to ClearVision Foundation.
              </p>
            </div>
          </div>
          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-bold">Is my donation tax-deductible?</h3>
              <p className="text-gray-500">
                Yes, ClearVision Foundation is a registered 501(c)(3) nonprofit organization, and all donations are
                tax-deductible to the extent allowed by law. You will receive a receipt for your donation via email.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-bold">How is my donation used?</h3>
              <p className="text-gray-500">
                Your donation directly supports our programs, including medical eye camps, cataract surgeries,
                prescription lens distribution, and research and development of adaptive lens technology. We maintain
                transparency in our financial reporting, which is available on our website.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-bold">Can I specify how my donation is used?</h3>
              <p className="text-gray-500">
                Yes, you can designate your donation for a specific program or initiative. Please include a note with
                your donation or contact us directly to specify how you would like your contribution to be used.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-bold">Do you accept donations from outside the United States?</h3>
              <p className="text-gray-500">
                Yes, we accept donations from around the world. Our online donation system accepts major credit cards
                and processes international transactions. For wire transfers or other methods, please contact our donor
                relations team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-darkBlue py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Help Us Make This Dream a Reality
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your donation isn't just about restoring sight—it's about restoring hope. Even the smallest contribution
                can help someone see a brighter future.
              </p>
            </div>
            <Button className="bg-white text-custom-darkBlue hover:bg-gray-50">Donate Today</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
