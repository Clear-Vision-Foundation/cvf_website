import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Calendar, Check } from "lucide-react"
import { VolunteerForm } from "@/components/volunteer-form"

export default function VolunteerPage() {
  // Sample volunteer opportunities
  const volunteerOpportunities = [
    {
      id: 1,
      title: "Medical Camp Assistant",
      location: "Various Locations",
      commitment: "1-2 weeks",
      description:
        "Assist our medical professionals during eye camps by helping with patient registration, guiding patients, and providing general support.",
      skills: ["Communication", "Organization", "Compassion"],
    },
    {
      id: 2,
      title: "Outreach Coordinator",
      location: "Remote",
      commitment: "Ongoing",
      description:
        "Help coordinate our outreach efforts by connecting with local communities, organizations, and potential partners to expand our reach.",
      skills: ["Networking", "Communication", "Project Management"],
    },
    {
      id: 3,
      title: "Translator",
      location: "Various Locations",
      commitment: "As needed",
      description:
        "Provide translation services during eye camps and for educational materials to ensure clear communication with local communities.",
      skills: ["Bilingual/Multilingual", "Communication", "Cultural Sensitivity"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer With Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Join our global team of volunteers and help bring clear vision to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Volunteer With Us?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg">
                  Volunteering with ClearVision Foundation offers a unique opportunity to make a tangible difference in
                  people's lives. Whether you're a medical professional, a student, or simply someone who wants to help,
                  we have a place for you in our mission.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Make a Direct Impact</h3>
                    <p className="text-gray-500">See the immediate difference your work makes in people's lives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Gain Valuable Experience</h3>
                    <p className="text-gray-500">Develop new skills and expand your professional network.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-custom-darkBlue" />
                  <div>
                    <h3 className="font-bold">Join a Global Community</h3>
                    <p className="text-gray-500">Connect with like-minded individuals from around the world.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Volunteers in action"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer Opportunities</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore the different ways you can contribute to our mission.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-bold">{opportunity.title}</h3>
                <div className="mb-4 flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{opportunity.location}</span>
                </div>
                <div className="mb-4 flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{opportunity.commitment}</span>
                </div>
                <p className="mb-4 flex-1 text-gray-500">{opportunity.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Skills Needed:</div>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-custom-darkBlue">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 md:py-24" id="volunteer-form">
        <div className="container mx-auto px-4 md:px-6">
          <VolunteerForm opportunities={volunteerOpportunities} />
        </div>
      </section>

      {/* Testimonials
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Volunteer Stories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                Hear from those who have volunteered with us and made a difference.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="italic text-gray-600">
                  "Volunteering at the eye camps was one of the most rewarding experiences of my life. Seeing the
                  immediate impact of our work on people's lives was truly humbling."
                </p>
              </div>
              <div className="mt-auto flex items-center space-x-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Volunteer" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium">Dr. Emily Chen</div>
                  <div className="text-sm text-gray-500">Ophthalmologist, Volunteer since 2020</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="italic text-gray-600">
                  "As a translator, I helped bridge the gap between our medical team and local communities. The
                  gratitude in people's eyes when they could finally see clearly is something I'll never forget."
                </p>
              </div>
              <div className="mt-auto flex items-center space-x-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Volunteer" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium">Miguel Sanchez</div>
                  <div className="text-sm text-gray-500">Translator, Volunteer since 2021</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="italic text-gray-600">
                  "Even though I have no medical background, I was able to contribute meaningfully by helping with
                  logistics and patient coordination. It's amazing how many ways there are to help!"
                </p>
              </div>
              <div className="mt-auto flex items-center space-x-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Volunteer" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">General Volunteer since 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-custom-darkBlue py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Movement</h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Prefer to roll up your sleeves? We've got volunteer opportunities that fit every skill set. Together,
                let's make sure no one is left squinting in the shadows.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#volunteer-form">
                <Button className="bg-white text-custom-darkBlue hover:bg-gray-50">Apply Now</Button>
              </a>
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
