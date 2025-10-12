import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Microscope, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bringing Clear Vision Within Reach
                </h1>
                <p className="text-xl text-gray-100 md:text-2xl">
                  "Vision isn't just about what we see—it's about believing in a future where no one is left in the
                  dark."
                </p>
              </div>
              <p className="max-w-[600px] text-gray-100 md:text-lg">
                At ClearVision Foundation, we are on a mission to provide accessible, high-quality eye care to
                underserved communities while advancing innovative solutions to reshape the future of vision correction.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link 
                  href="https://mygivingcircle.org/clearvision-foundation/donate/free" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-custom-darkBlue hover:bg-gray-100">Donate Now</Button>
                </Link>
                {/* <Link href="/about">
                  <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">Learn More</Button>
                </Link> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/image_1.webp"
                alt="ClearVision Foundation"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We believe that sight is a fundamental right, not a privilege. Our work is driven by two core efforts:
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-gray-100 p-3">
                <Users className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Nonprofit Initiatives</h3>
              <p className="text-center text-gray-500">
                Hosting free medical eye camps, funding cataract surgeries, and providing prescription lenses to those
                in need through global partnerships.
              </p>
              <Link href="/nonprofit">
                <Button variant="outline" className="mt-2 border-custom-darkBlue text-custom-darkBlue hover:bg-gray-50">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-gray-100 p-3">
                <Microscope className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Research & Development</h3>
              <p className="text-center text-gray-500">
                Pioneering the development of adaptive lenses that can automatically adjust power, eliminating the need
                for frequent prescriptions.
              </p>
              <Link href="/research">
                <Button variant="outline" className="mt-2 border-custom-darkBlue text-custom-darkBlue hover:bg-gray-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact & Goals</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Through our initiatives, we're making a real difference in communities worldwide.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">20+</div>
              <p className="text-center text-gray-500">
                Free medical eye camps annually, our goal is to reach over 5,000 individuals in need.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">500+</div>
              <p className="text-center text-gray-500">
                Cataract surgeries to be funded each year, restoring sight to those suffering from preventable blindness.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">2,000+</div>
              <p className="text-center text-gray-500">
                Free prescription glasses to be distributed to underserved communities annually.
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
                src="/image_5.webp"
                alt="Global Reach"
                width={450}
                height={450}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-custom-darkBlue">
                Global Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Global Reach</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                We operate internationally, with team members spanning multiple continents. Our collective efforts
                allow us to bring vision care to communities worldwide, bridging the gap between medical resources and
                those who need them most.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="h-12 w-12 text-custom-mediumBlue" />
                <div>
                  <div className="text-xl font-bold">Worldwide Presence</div>
                  <p className="text-gray-500">Serving communities across continents</p>
                </div>
              </div>
              {/* OneSight EssilorLuxottica Foundation Partnership */}
              <div className="flex flex-col items-center mt-6 space-y-2">
                <p className="text-sm text-gray-500 text-center">with partners like</p>
                <Link href="https://onesight.essilorluxottica.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/onesight-logo.png"
                    alt="OneSight EssilorLuxottica Foundation"
                    width={300}
                    height={60}
                    className="opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
                    style={{ height: '60px', width: 'auto' }}
                  />
                </Link>
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
                Help Us Make This Dream a Reality
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your donation isn't just about restoring sight—it's about restoring hope. Even the smallest contribution
                can help someone see a brighter future.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link 
                href="https://mygivingcircle.org/clearvision-foundation/donate/free"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-100">Donate Today</Button>
              </Link>
              <Link href="/volunteer">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">
                  Join the Movement
                </Button>
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
