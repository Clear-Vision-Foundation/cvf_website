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
                We bring clear sight home. Each community-led Vision Hub helps children read, parents work, and families see life in focus again, right where they live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Vision Hubs */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Community Vision Hubs</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  Our Community Vision Hubs bring lasting care where people already feel at home. Set in schools, clinics, and cooperatives, each hub is run by local youth who know every face and every story. They screen eyes, record results, and guide families with patience and kindness so no visit ends without understanding or hope. Because the hubs stay open year-round, care is always close by. People can return anytime, ask questions, or continue treatment at their own pace. What began as a single screening becomes a lifelong bridge to clear sight, dignity, and opportunity, sustained by the very community it serves.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Sustainable Vision Care</div>
                  <p className="text-gray-500">Permanent, community-run access points</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/image_7.webp"
                alt="Community Vision Hubs"
                width={450}
                height={450}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Pathway & Follow-Up */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center md:order-first">
              <Image
                src="image_1.webp"
                alt="Care Pathway and Follow-Up"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Care Pathway & Follow-Up</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  ClearVision’s hubs guide every patient from first screening to restored sight. Our trained community workers check vision, fit glasses, and coordinate surgeries with gentle care, ensuring that no one is left waiting or forgotten. We don’t just offer treatment; we walk beside each person until their world comes back into focus.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Eye className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">End-to-End Care</div>
                  <p className="text-gray-500">From screening to resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Outreach */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Model That Grows with People, Not Just Places</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  We’ve designed our model to adapt gracefully, whether in a small village or a remote island, without ever losing its personal touch. Each hub begins with a simple, practical toolkit: training for our community health workers, clear ethical guidelines, and step by step systems that ensure every person receives the care they need from first screening to post surgery recovery.
                  We work hand in hand with local hospitals, schools, and trusted community leaders so that every part of the process, screening, diagnosis, providing glasses, surgery, and follow up, is seamless and dignified. As our partners gain experience, they take the lead while we remain beside them, offering mentorship, transparent data systems, and steady guidance.
                  This balance of local leadership and shared compassion allows us to grow responsibly, ensuring every person we serve is cared for with warmth, skill, and respect.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-12 w-12 text-custom-darkBlue" />
                <div>
                  <div className="text-xl font-bold">Worldwide Impact</div>
                  <p className="text-gray-500">Standard playbook, local ownership</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/image_3.webp"
                alt="Global & Rural Reach"
                width={450}
                height={450}
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
                Each Vision Hub gently keeps track of the lives it touches, recording screenings, glasses given, and people guided to doctors so no one ever slips through the cracks. Behind every number is a person: a student seeing her books clearly again, a mother threading her needle with ease, a farmer recognizing his crops at sunrise.
                Our community health workers check back in, making sure each person we serve truly regains their confidence and independence. The insights we gather help us prepare better, having the right glasses in hand, enough helping hearts on site, and the right lessons to share in training.
                But what matters most to us isn’t just the data. It’s the stories of sight restored, livelihoods renewed, and lives brightened. And because we believe in honesty and shared progress, we open our results to everyone, learning and improving together so that every village can see a clearer tomorrow.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">50+</div>
              <p className="text-center text-gray-500">
                Community Vision Hubs launched, our goal is to reach over 100,000 individuals in need.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">500+</div>
              <p className="text-center text-gray-500">
                Cataract surgeries to be funded each year, restoring sight to those suffering from preventable blindness.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-custom-darkBlue">100,000+</div>
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
                Your support fuels a movement to restore sight and opportunity. Every contribution helps train Community Health Workers, expand Vision Hubs, and bring life-changing eye care to those who need it most. Together, we can empower communities to see clearly, learn fully, and live freely.
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
