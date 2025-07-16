"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

// Mock Data for Blog Articles
const articles = [
  {
    slug: "how-leonardo-da-vinci-tried-to-hack-vision",
    title: "How Leonardo da Vinci Tried to Hack Vision 500 Years Ago",
    subtitle: "Exploring Leonardo da Vinci's pioneering insights into human vision, bridging art and science centuries before modern optical studies.",
    author: "Karishmaa Siddharthan",
    authorRole: "Contributing Writer",
    date: "July 16, 2025",
    category: "History of Vision Science",
    image: "/placeholder.webp",
    excerpt: "Leonardo da Vinci’s fascination with human vision led to groundbreaking insights into the eye’s optical properties, the brain’s role in perception, and the principles of perspective, centuries before modern neuroscience and optics."
  },
  {
    slug: "is-the-blue-light-hype-real",
    title: "Is the Blue Light Hype Real or Just a Marketing Gimmick?",
    subtitle: "Examining the science behind blue light exposure and its effects on eye health in the digital age.",
    author: "Britney Nguyen",
    authorRole: "Contributing Writer",
    date: "July 16, 2025",
    category: "Eye Health",
    image: "/placeholder.webp",
    excerpt: "Blue light from screens is often blamed for eye strain and sleep issues, but is the concern justified? This article explores the evidence and separates fact from marketing hype."
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-custom-darkBlue mb-12">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/article/${article.slug}`}
            className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-custom-darkBlue text-white text-sm font-medium mb-4">
                {article.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-custom-mediumBlue transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
