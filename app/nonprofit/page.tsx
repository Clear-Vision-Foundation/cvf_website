import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Globe, Eye } from "lucide-react"

export default function NonprofitPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nonprofit Initiatives</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Making a direct impact through medical eye camps, surgeries, and prescription lens distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Eye Camps */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Medical Eye Camps</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  We collaborate with NGOs, corporate sponsors, and donors to organize free medical eye camps in
                  underserved regions. At these camps, individuals will receive comprehensive eye screenings, and those
                  diagnosed with cataracts will be provided access to fully funded surgeries.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Comprehensive Care</div>
                  <p className="text-gray-500">From screening to surgery</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Medical Eye Camps"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prescription Lens Distribution */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center md:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Prescription Lens Distribution"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Prescription Lens Distribution</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  For many, the cost of prescription glasses is a major barrier to clear vision. We ensure that those in
                  need receive the right eyewear at no cost, enabling them to pursue education, employment, and a better
                  quality of life.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Eye className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Accessible Eyewear</div>
                  <p className="text-gray-500">Removing financial barriers to clear vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Global Reach</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  We operate internationally, with team members spanning multiple continents. Our collective
                  efforts allow us to bring vision care to communities worldwide, bridging the gap between medical
                  resources and those who need them most.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Worldwide Impact</div>
                  <p className="text-gray-500">Serving communities across continents</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Global Reach"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Goals */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact & Goals</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We're committed to making a measurable difference in vision care worldwide.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">20+</div>
              <p className="text-center text-gray-500">
                Free medical eye camps annually, our goal is to reach over 5,000 individuals in need.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">500+</div>
              <p className="text-center text-gray-500">
                Cataract surgeries to be funded each year, restoring sight to those suffering from preventable blindness.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">2,000+</div>
              <p className="text-center text-gray-500">
                Free prescription glasses to be distributed to underserved communities annually.
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
                Support Our Nonprofit Initiatives
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your contribution will help fund eye camps, surgeries, and prescription lens distribution for those in need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-50">Donate Today</Button>
              </Link>
              <Link href="/volunteer">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
