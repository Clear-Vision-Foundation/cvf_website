// filepath: /home/ClearVision/cvf_website/app/blog/article/[slug]/page.tsx
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { use } from "react"
import { BookOpen, Calendar, Clock, MessageCircle, ThumbsUp, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock Data for Blog Articles
const articles = [
  {
    slug: "the-impact-of-vision-care",
    title: "The Impact of Vision Care in Developing Countries",
    subtitle: "Exploring how accessible vision care transforms lives and communities in developing regions around the world.",
    author: "Dr. Sarah Johnson",
    authorRole: "Chief Medical Officer",
    authorBio: "Dr. Sarah Johnson is a renowned ophthalmologist with over 15 years of experience in international eye care initiatives. She has led medical missions in over 20 countries and published extensively on global eye health equity.",
    authorImage: "/placeholder.webp",
    date: "April 15, 2023",
    category: "Impact",
    content: [
      {
        type: "text",
        value: "Vision impairment affects over 2.2 billion people worldwide, with a disproportionate burden falling on low and middle-income countries. This article explores how targeted vision care initiatives are transforming communities and creating lasting impact in developing regions around the world."
      },
      {
        type: "heading",
        value: "The Hidden Cost of Vision Impairment"
      },
      {
        type: "text",
        value: "Vision impairment and blindness impact not just individuals but entire communities. Studies show that addressing vision problems can increase productivity by up to 35% and individual earning capacity by 20%. For children, clear vision is directly linked to better educational outcomes, with students gaining the equivalent of an extra 0.5-0.7 years of schooling when vision needs are addressed."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "A young student receiving their first pair of prescription glasses at our recent eye camp in rural Kenya."
      },
      {
        type: "heading",
        value: "ClearVision's Approach"
      },
      {
        type: "text",
        value: "Our foundation utilizes a multi-faceted approach that combines immediate intervention with sustainable infrastructure building. This includes mobile eye clinics that can reach remote areas, training of local healthcare workers in basic vision screening and care, and the establishment of permanent vision centers that serve as hubs for ongoing care."
      },
      {
        type: "text",
        value: "What sets our approach apart is our emphasis on adaptive lens technology, which allows for quick adjustments without requiring constant professional oversight. This technology is particularly valuable in regions with limited access to vision care specialists."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "Local healthcare workers being trained to use our adaptive lens technology in Guatemala."
      },
      {
        type: "heading",
        value: "Success Stories from the Field"
      },
      {
        type: "text",
        value: "One of the most rewarding aspects of our work is witnessing the immediate impact clear vision can have on individuals. Maria, a 67-year-old grandmother in rural Ecuador, had been unable to see clearly for over a decade. After receiving properly fitted glasses from our mobile clinic, she was able to see her youngest grandchildren's faces clearly for the first time."
      },
      {
        type: "text",
        value: "Similarly, in Bangladesh, we worked with local schools to provide vision screening for over 5,000 children. Approximately 18% required vision correction, and follow-up assessments showed significant improvements in academic performance within just one semester."
      },
      {
        type: "heading",
        value: "Long-term Impact and Sustainability"
      },
      {
        type: "text",
        value: "While immediate interventions are important, our ultimate goal is to create sustainable systems that can function independently. This means working closely with local governments, training healthcare providers, and establishing supply chains for glasses and other vision care products."
      },
      {
        type: "text",
        value: "Our five-year assessment of programs in six countries shows promising results: locations with established ClearVision partnerships have seen a 60% increase in regular vision screenings and a 45% increase in access to corrective eyewear. Most importantly, 80% of the vision centers established through our initiatives continue to operate successfully after the transition to full local management."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "A permanent vision center established through our partnership with local health authorities in rural India."
      },
      {
        type: "heading",
        value: "Future Directions"
      },
      {
        type: "text",
        value: "As we look to the future, we are exploring new technologies and approaches to further expand our impact. This includes the development of more affordable and durable adaptive lens options, telehealth solutions for remote consultations, and greater integration with existing healthcare systems."
      },
      {
        type: "text",
        value: "The challenges are significant, but the potential impact is enormous. With each pair of glasses provided and each vision center established, we move closer to our goal of a world where clear vision is accessible to all, regardless of geographic location or economic status."
      },
    ],
    comments: [
      {
        id: 1,
        author: "Jane Smith",
        date: "April 18, 2023",
        content: "This is truly inspiring work! I've been following the ClearVision Foundation for years, and it's amazing to see the impact you're making.",
        likes: 12
      },
      {
        id: 2,
        author: "Michael Brown",
        date: "April 20, 2023",
        content: "I worked as a volunteer on one of these projects in Guatemala last year. The joy on people's faces when they could see clearly for the first time in years was unforgettable.",
        likes: 8
      },
      {
        id: 3,
        author: "Priya Patel",
        date: "April 22, 2023",
        content: "Would love to know more about how the adaptive lens technology works. Is there a more technical article available?",
        likes: 5
      }
    ]
  },
  // More articles would be defined here
];

// Function to calculate reading time
function calculateReadingTime(content: Array<{ type: string; value?: string }>) {
  // Average reading speed (words per minute)
  const wordsPerMinute = 200;
  
  // Count words in all text sections
  let wordCount = 0;
  content.forEach(section => {
    if (section.type === "text" || section.type === "heading") {
      wordCount += (section.value ?? "").split(/\s+/).length;
    }
  });
  
  // Calculate reading time in minutes
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

    // Set up scroll listener for progress bar
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
    
    // In a real app, this would be an API call
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
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-custom-darkBlue z-50"
        style={{ width: `${readingProgress}%` }}
      ></div>

      {/* Article Header */}
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

      {/* Article Content */}
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

            {/* Sharing and Engagement */}
            <div className="mt-12 flex justify-center gap-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <ThumbsUp className="mr-2 h-4 w-4" /> Like
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <BookOpen className="mr-2 h-4 w-4" /> Save
              </Button>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-6">
                <Avatar className="h-20 w-20 border-2 border-gray-200">
                  <AvatarImage src={article.authorImage} alt={article.author} />
                  <AvatarFallback>{article.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">About {article.author}</h3>
                  <p className="text-gray-600 mb-4">{article.authorBio}</p>
                  <Button variant="outline" size="sm" className="rounded-full border-custom-darkBlue text-custom-darkBlue hover:bg-gray-100">
                    <User className="mr-2 h-4 w-4" /> Follow
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Comments ({article.comments.length})</h3>
              
              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-10">
                <Textarea
                  placeholder="Write your comment..."
                  className="mb-4 border-gray-300 focus:border-custom-darkBlue focus:ring-custom-darkBlue"
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
              
              {/* Comments Display */}
              <div className="space-y-8">
                {article.comments.map((comment: { id: number; author: string; date: string; content: string; likes: number }) => (
                  <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{comment.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{comment.content}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-custom-darkBlue">
                        <ThumbsUp className="mr-1 h-3 w-3" /> {comment.likes} likes
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-custom-darkBlue">
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}