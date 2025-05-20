import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Vision Care in Developing Countries",
      excerpt:
        "Exploring how accessible vision care transforms lives and communities in developing regions around the world.",
      category: "Impact",
      author: "Dr. Sarah Johnson",
      date: "April 15, 2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Innovations in Adaptive Lens Technology",
      excerpt:
        "A deep dive into the latest breakthroughs in our adaptive lens research and what it means for the future of vision correction.",
      category: "Research",
      author: "Dr. Michael Chen",
      date: "March 22, 2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Stories from Our Medical Eye Camps",
      excerpt: "Heartwarming stories of transformation from our recent medical eye camps in rural communities.",
      category: "Field Work",
      author: "Emma Rodriguez",
      date: "February 10, 2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "The Economics of Vision: How Clear Sight Impacts Livelihoods",
      excerpt:
        "Examining the economic impact of vision impairment and how corrective measures can improve productivity and quality of life.",
      category: "Research",
      author: "Dr. James Wilson",
      date: "January 28, 2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Volunteer Spotlight: Meet Our Global Team",
      excerpt: "Introducing the dedicated volunteers who make our mission possible across different continents.",
      category: "Community",
      author: "Lisa Thompson",
      date: "January 5, 2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "The Science Behind Adaptive Lenses",
      excerpt: "Understanding the scientific principles that make our adaptive lens technology possible.",
      category: "Technology",
      author: "Dr. Robert Kim",
      date: "December 12, 2022",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Latest Blogs</h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Insights, stories, and updates from our work around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-custom-darkBlue px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <Link href={`/blog/${post.id}`} className="block">
                      <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 hover:text-custom-darkBlue">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="mb-4 text-gray-500">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg">
                Stay updated with our latest news, research breakthroughs, and stories from the field.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-custom-darkBlue focus:outline-none focus:ring-1 focus:ring-custom-darkBlue"
                  required
                />
                <Button className="bg-custom-darkBlue hover:bg-custom-mediumBlue">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
