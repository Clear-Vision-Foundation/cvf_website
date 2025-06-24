import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Globe } from "lucide-react"
import image_1 from "@/public/image_1.webp"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About ClearVision Foundation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Learn about our mission, values, and the impact we're making worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  We believe that sight is a fundamental right, not a privilege. Our work is driven by two core efforts:
                  nonprofit initiatives and cutting-edge research and development.
                </p>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                By combining immediate impact with long-term innovation, we strive to create a world where everyone has
                access to clear vision, regardless of their location or financial means.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Our Values</div>
                  <p className="text-gray-500">Compassion, Innovation, Accessibility</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Our Mission"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our approach combines immediate assistance with long-term solutions.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Medical Eye Camps</h3>
              <p className="text-gray-500">
                We collaborate with NGOs, corporate sponsors, and donors to organize free medical eye camps in
                underserved regions. At these camps, individuals receive comprehensive eye screenings, and those
                diagnosed with cataracts are provided access to fully funded surgeries.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Prescription Lens Distribution</h3>
              <p className="text-gray-500">
                For many, the cost of prescription glasses is a major barrier to clear vision. We ensure that those in
                need receive the right eyewear at no cost, enabling them to pursue education, employment, and a better
                quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src={image_1}
                alt="Global Reach"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
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
                  <p className="text-gray-500">Making a difference across borders</p>
                </div>
              </div>
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
                Join Us in Creating a Clearer Future
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Through collective action, we can ensure that preventable blindness and lack of access to prescription
                eyewear are no longer barriers to a better life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link 
                href="https://mygivingcircle.org/clearvision-foundation/donate/free"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-50 font-semibold">Donate Today</Button>
              </Link>
              <Link href="/about/learn-more">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">Learn More</Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
