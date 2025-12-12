import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Microscope, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - full viewport with background image and overlay */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 -z-10">
          <Image
            src={'/image_5 (1).png'}
            alt="Children receiving eye care"
            fill
            priority
            className="object-cover"
          />
          {/* subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/35 z-10" />
        </div>

        <div className="container mx-auto h-full px-4 md:px-6 relative z-20">
          <div className="h-full flex items-center">
            <div className="max-w-3xl">
              {/* Orbis-style yellow boxed heading - each line in its own box */}
              <h1 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                <span className="inline-block bg-[#E8D639] text-[#0b2540] px-8 py-3 mb-2" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                  Bringing Clear Vision
                </span>
                <br />
                <span className="inline-block bg-[#E8D639] text-[#0b2540] px-8 py-3" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                  Within Reach
                </span>
              </h1>
              <p className="mb-6 text-lg text-white md:text-xl max-w-[680px]">
                "Vision isn't just about what we see it's about believing in a future where no one is left in the dark."
              </p>
              <p className="mb-6 max-w-[680px] text-gray-100 md:text-lg">
                At ClearVision Foundation, we are on a mission to provide accessible, high-quality eye care to underserved
                communities while advancing innovative solutions to reshape the future of vision correction.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="https://hcb.hackclub.com/donations/start/clearvision-foundation" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" className="hero-cta font-semibold">Donate Now</Button>
                </Link>
                <Link href="/volunteer">
                  <Button variant="hero-secondary" className="hero-cta">Volunteer</Button>
                </Link>
              </div>
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
              <p className="mx-auto max-w-[900px] text-gray-600 md:text-lg">
                Through our community-rooted model, we are transforming access to vision care where it has never existed before.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col space-y-4 rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-custom-darkBlue">100,000+</div>
              <p className="text-gray-600 text-lg">
                People to receive permanent access to vision screenings and eyecare in our first year across 50 Community Vision Hubs.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-custom-darkBlue">1,000+</div>
              <p className="text-gray-600 text-lg">
                Local students to be trained as Community Health Workers each year, creating a youth-powered eyecare workforce that serves their own communities.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-custom-darkBlue">100,000+</div>
              <p className="text-gray-600 text-lg">
                Pairs of high-quality prescription glasses to be provided annually through our hubs, restoring sight and boosting learning, productivity, and livelihoods.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-custom-darkBlue">50+</div>
              <p className="text-gray-600 text-lg">
                Tin-shed Community Vision Hubs to be established in underserved regions around the world, embedding eyecare directly into village life through partnerships with schools and cooperatives.
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
                src="/WhatsApp Image 2025-10-10 at 7.10.56 PM (1).jpeg"
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
              <Link href="https://hcb.hackclub.com/donations/start/clearvision-foundation" target="_blank" rel="noopener noreferrer">
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
