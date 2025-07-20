"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { BookOpen, Calendar, Clock, MessageCircle, ThumbsUp, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock Data for Blog Articles with full content
const articles = [
  {
    slug: "how-leonardo-da-vinci-tried-to-hack-vision",
    title: "How Leonardo da Vinci Tried to Hack Vision 500 Years Ago",
    subtitle: "Exploring Leonardo da Vinci's pioneering insights into human vision, bridging art and science centuries before modern optical studies.",
    author: "Karishmaa Siddharthan",
    authorRole: "Contributing Writer",
    authorBio: "Karishmaa Siddharthan is a science writer specializing in the history of scientific discovery. Medically reviewed by Jessica Broodryk, OD, FAAO, an experienced optometrist dedicated to advancing vision care research.",
    authorImage: "/placeholder.webp",
    date: "July 16, 2025",
    category: "History of Vision Science",
    content: [
      {
        type: "text",
        value: "Leonardo da Vinci is widely celebrated for masterpieces such as the Mona Lisa and The Last Supper, yet his intellectual curiosity extended far beyond the realm of art."
      },
      {
        type: "heading",
        value: "The Eye as an Optical Instrument"
      },
      {
        type: "text",
        value: "Leonardo da Vinci's understanding of the eye's function demonstrated an early recognition of its optical properties, akin to those of a camera."
      }
    ],
    comments: []
  },
  {
    slug: "is-the-blue-light-hype-real",
    title: "Is the Blue Light Hype Real or Just a Marketing Gimmick?",
    subtitle: "Examining the science behind blue light exposure and its effects on eye health in the digital age.",
    author: "Britney Nguyen",
    authorRole: "Contributing Writer",
    authorBio: "Britney Nguyen is a health journalist focused on debunking medical myths.",
    authorImage: "/placeholder.webp",
    date: "July 16, 2025",
    category: "Eye Health",
    content: [
      {
        type: "text",
        value: "Since the pandemic, blue light filters, especially blue light glasses, have surged in popularity due to increased screen time."
      }
    ],
    comments: []
  }
];

// Function to calculate reading time
function calculateReadingTime(content: Array<{ type: string; value?: string }>) {
  const wordsPerMinute = 200;
  let wordCount = 0;
  content.forEach(section => {
    if (section.type === "text" || section.type === "heading") {
      wordCount += (section.value ?? "").split(/\s+/).length;
    }
  });
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const [article, setArticle] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    params.then(({ slug }) => {
      if (isMounted) {
        setSlug(slug);
        const foundArticle = articles.find(article => article.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
        }
        setLoading(false);
      }
    });

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [params]);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (comment.trim()) {
      const newComment = {
        id: article.comments.length + 1,
        author: "Guest User",
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        content: comment,
        likes: 0
      };
      
      setArticle({
        ...article,
        comments: [...article.comments, newComment]
      });
      
      setComment("");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>The article you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const readingTime = calculateReadingTime(article.content);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="fixed top-0 left-0 h-1 bg-custom-darkBlue z-50"
        style={{ width: `${readingProgress}%` }}
      ></div>

      <header className="py-12 md:py-16 bg-gradient-to-r from-custom-darkBlue to-custom-mediumBlue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-custom-darkBlue text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-6">
                {article.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-white">
                  <AvatarImage src={article.authorImage} alt={article.author} />
                  <AvatarFallback>{article.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">{article.author}</p>
                  <p className="text-sm text-gray-200">{article.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{readingTime} min read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{article.comments.length} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {article.content.map((section: { type: string; value?: string; url?: string; caption?: string }, index: number) => {
                if (section.type === "text") {
                  return <p key={index} className="mb-6 text-gray-700">{section.value}</p>;
                } else if (section.type === "heading") {
                  return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-gray-900">{section.value}</h2>;
                } else if (section.type === "image") {
                  return (
                    <figure key={index} className="my-8">
                      <div className="relative w-full h-[400px]">
                        <Image 
                          src={section.url!} 
                          alt={section.caption || "Article image"} 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      {section.caption && (
                        <figcaption className="mt-2 text-center text-sm text-gray-500">{section.caption}</figcaption>
                      )}
                    </figure>
                  );
                }
                return null;
              })}
            </article>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-6">
                <Avatar className="h-20 w-20 border-2 border-gray-200">
                  <AvatarImage src={article.authorImage} alt={article.author} />
                  <AvatarFallback>{article.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">About {article.author}</h3>
                  <p className="text-gray-600 mb-4">{article.authorBio}</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Comments ({article.comments.length})</h3>
              
              <form onSubmit={handleCommentSubmit} className="mb-10">
                <Textarea
                  placeholder="Write your comment..."
                  className="mb-4"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-custom-darkBlue hover:bg-custom-mediumBlue"
                >
                  Post Comment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}