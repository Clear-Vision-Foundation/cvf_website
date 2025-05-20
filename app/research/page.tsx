import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Microscope, Lightbulb, Glasses, Eye } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research & Development</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Pioneering the future of vision care through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Future of Vision Care</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  Our R&D team is working to revolutionize eyewear through adaptive lenses—a technology designed to
                  eliminate the need for frequent prescriptions. These lenses automatically adjust their optical power
                  based on the wearer's needs, offering a long-term solution for vision correction.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Microscope className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Cutting-Edge Research</div>
                  <p className="text-gray-500">Transforming vision care through innovation</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Research and Development"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our adaptive lens technology represents a breakthrough in vision correction.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Lightbulb className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Liquid Crystal Technology</h3>
              <p className="text-center text-gray-500">
                Utilizing liquid crystal or fluid-based technology, these lenses alter their focal length in response to
                the wearer's requirements.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Eye className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Visual Strain Detection</h3>
              <p className="text-center text-gray-500">
                Integrated with a mechanism that detects visual strain, they dynamically adjust to optimize clarity for
                the wearer.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="rounded-full bg-gray-100 p-3">
                <Glasses className="h-6 w-6 text-custom-darkBlue" />
              </div>
              <h3 className="text-xl font-bold">Adaptive Correction</h3>
              <p className="text-center text-gray-500">
                This innovation has the potential to replace traditional glasses and could drastically improve
                accessibility to vision correction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Research Impact"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Potential Impact</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  While this project is still under development, our goal is to bring it from research to real-world
                  application, ensuring that everyone, regardless of location or financial means, has access to
                  cutting-edge vision care.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  This technology could be especially transformative in remote and underserved areas where access to
                  regular eye care is limited.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Research</h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Your contribution helps fund our ongoing research and development efforts to create innovative vision
                solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-50">Donate Today</Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-200 font-semibold">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
