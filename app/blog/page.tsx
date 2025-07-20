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
        value: "Leonardo da Vinci is widely celebrated for masterpieces such as the Mona Lisa and The Last Supper, yet his intellectual curiosity extended far beyond the realm of art. Among his many scientific endeavors, da Vinci displayed a profound fascination with human vision, formulating hypotheses and conducting empirical observations that predated modern discoveries in neuroscience and optics. At a time when the mechanics of sight were poorly understood, he independently explored the anatomy of the eye, the role of the brain in perception, and the principles of perspective, making significant contributions to both science and art. This article examines Leonardo’s insights into vision, revealing how his interdisciplinary approach allowed him to bridge scientific observation and artistic technique centuries before the advent of formal optical studies."
      },
      {
        type: "heading",
        value: "The Eye as an Optical Instrument"
      },
      {
        type: "text",
        value: "Leonardo da Vinci’s understanding of the eye’s function demonstrated an early recognition of its optical properties, akin to those of a camera. He was particularly intrigued by the camera obscura, a device that projects an inverted image onto a surface through a small aperture. Observing this phenomenon, he hypothesized that the eye operates in a similar manner. He deduced that light entering through the pupil is focused within the eye, forming an inverted image before the brain interprets it. Although the physiological role of the retina had yet to be discovered, Leonardo’s detailed anatomical sketches and written observations indicate that he suspected a neurological mechanism was responsible for correcting the inversion. This hypothesis, remarkably ahead of its time, aligns with modern understandings of visual processing in which the retina captures an image that is later interpreted by the brain’s visual cortex."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "Leonardo da Vinci's anatomical sketches of the eye, showcasing his early understanding of its optical properties."
      },
      {
        type: "heading",
        value అ

System: Vinci's anatomical sketches of the eye, showcasing his early understanding of its optical properties."
      },
      {
        type: "heading",
        value: "The Role of the Brain in Vision"
      },
      {
        type: "text",
        value: "Da Vinci’s investigations extended beyond the physical structure of the eye to its relationship with the brain. Through meticulous dissections of human and animal specimens, he identified the optic nerve as a crucial conduit between the eye and the brain. His notes reveal a critical departure from the prevailing theories of his time, which posited that vision was an active process in which the eyes emitted visual rays to perceive their surroundings. Instead, Leonardo proposed that the eyes merely receive light and images, while the brain synthesizes and interprets visual information. Though he lacked the tools to fully elucidate the complexities of neural processing, his fundamental insight — that perception is not solely an ocular phenomenon but a cognitive one — anticipated later developments in neuroscience."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "A page from Leonardo’s notebooks detailing his observations on the optic nerve and visual perception."
      },
      {
        type: "heading",
        value: "The Influence of Light on Color Perception"
      },
      {
        type: "text",
        value: "Leonardo also recognized the profound influence of light on color perception, a principle that modern vision science attributes to the interaction of photoreceptor cells in the retina. His extensive observations led him to conclude that color is not an intrinsic property of objects but rather depends on ambient lighting conditions. He documented how the same material could appear dramatically different under sunlight, candlelight, or shadow, foreshadowing contemporary theories of color contrast and adaptation. This understanding had direct implications for his artistic technique. Rather than employing rigid, uniform tones, Leonardo mastered the use of sfumato — a method of blending colors seamlessly — to create lifelike, three-dimensional images, a technique still studied in art and perception research today."
      },
      {
        type: "heading",
        value: "Depth Perception and Binocular Vision"
      },
      {
        type: "text",
        value: "Another of Leonardo’s breakthroughs was his analysis of depth perception, which he recognized as being dependent on the slightly different perspectives provided by each eye. By conducting simple experiments — such as alternately closing one eye and noting how objects appeared to shift — he inferred that the brain synthesizes information from both eyes to construct a three-dimensional representation of space. This early description of what is now termed binocular vision underscored his ability to derive scientific principles through empirical observation. His insights into depth and spatial awareness also influenced his artistic compositions, allowing him to create paintings that possessed an unprecedented sense of realism and depth."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "Leonardo’s use of perspective in The Last Supper, demonstrating his understanding of depth perception."
      },
      {
        type: "heading",
        value: "Mathematical Principles of Perspective"
      },
      {
        type: "text",
        value: "In addition to his anatomical and physiological studies, Leonardo applied mathematical reasoning to vision through his pioneering work on linear perspective. He recognized that the apparent size and position of objects are governed by geometric principles, noting that parallel lines converge toward a vanishing point in the distance. This understanding allowed him to construct visually accurate architectural spaces, as exemplified in The Last Supper, where the entire composition is structured around a single, precisely calculated vanishing point. His application of perspective was not merely an artistic tool but a demonstration of how visual perception operates according to defined mathematical laws — an idea that later influenced developments in both optics and computer-generated imaging."
      },
      {
        type: "heading",
        value: "Legacy and Lasting Impact"
      },
      {
        type: "text",
        value: "Leonardo da Vinci’s explorations of human vision reveal a remarkable synthesis of art and science, centuries ahead of his time. His recognition of the eye as an optical instrument, the role of the brain in interpreting visual stimuli, the impact of light on color perception, the mechanisms underlying depth perception, and the mathematical principles governing perspective all highlight his profound contributions to both fields. While he lacked the experimental apparatus of modern science, his keen observational skills and methodological approach allowed him to formulate theories that would later be confirmed through rigorous scientific inquiry. Today, his work continues to inspire researchers and artists alike, serving as a testament to the power of interdisciplinary exploration in advancing human knowledge."
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
    authorBio: "Britney Nguyen is a health journalist focused on debunking medical myths. Medically reviewed by Jessica Broodryk, OD, FAAO, an experienced optometrist dedicated to advancing vision care research.",
    authorImage: "/placeholder.webp",
    date: "July 16, 2025",
    category: "Eye Health",
    content: [
      {
        type: "text",
        value: "Since the pandemic, blue light filters, especially blue light glasses, have surged in popularity due to increased screen time. But why exactly are people so concerned with blue light? Are there real, scientifically-backed dangers, or is it simply fear-mongering for an easy cash grab?"
      },
      {
        type: "heading",
        value: "What is Blue Light?"
      },
      {
        type: "text",
        value: "Light is categorized by wavelength, which is measured in nanometers (nm). Visible light ranges from 380 to 780 nm, while blue light is specifically 400 to 495 nm. Blue light is commonly associated with artificial light, especially from electronic devices such as smartphones or computer screens. However, it doesn’t look blue. For most white light, blue LEDs are combined with yellow phosphor. White light consists of all colors of light on the visible light spectrum, but this light peaks in the blue range. Even though it appears white to the eye, it is most akin to blue light on the light emission spectrum."
      },
      {
        type: "text",
        value: "A more commonly overlooked source of blue light is the sky. Due to the Sun’s rays, the daytime sky is largely composed of blue light. Depending on the weather and temperature, the sky can emit up to 300 times more blue light than what is produced by electronic devices. While these emissions are significantly stronger than those of electronic devices, the sky’s levels remain safe according to the recommended levels of exposure to blue light determined by ICNIRP."
      },
      {
        type: "text",
        value: "It is important to distinguish outdoor blue light from indoor blue light. While outdoor blue light is stronger, indoor blue light provides continuous exposure, even at night. Additionally, with the integration of electronic devices into our daily lives, indoor artificial blue light leaves us more susceptible to long-term exposure."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "A person using a smartphone, a common source of blue light exposure."
      },
      {
        type: "heading",
        value: "Can Blue Light Damage Your Eye?"
      },
      {
        type: "text",
        value: "A large concern for blue light is the damage it poses to eye health. The retina is the part of the eye that turns light into electrochemical signals to be processed in your brain. This region of the eye is the most susceptible to blue light exposure. Specifically, long exposure to high radiation of blue light can damage cells and proteins on the retina. However, the amount of blue light radiated from both electronic devices and natural sources is small compared to the amounts in these studies."
      },
      {
        type: "text",
        value: "Another concern for blue light is its contribution to conditions like myopia, better known as nearsightedness. However, research on the connection between blue light and myopia is largely inconclusive. A study was conducted where red, green, white, and blue light were exposed to various individuals. Although the red, green, and white light generally worsened myopic symptoms, the blue light reduced it. On another note, children with less exposure to the outdoors are more susceptible to myopia, which may be linked to a lack of blue light exposure. However, more research is needed to definitively say that blue light can help with myopia."
      },
      {
        type: "heading",
        value: "What Other Effects Are There?"
      },
      {
        type: "text",
        value: "While some receptors in your retina help with converting light to images in your brain, a receptor called the intrinsically photosensitive retinal ganglion cells (ipRGC) uses light for other processes, like controlling the circadian rhythm. The ipRGC is also responsible for processing most of the blue light, so an influx of blue light exposure to the ipRGC can significantly affect the circadian rhythm. To an individual’s body, blue light acts like a signal for daytime. Using blue light later in the day, especially before bed, has caused reports of difficulty sleeping."
      },
      {
        type: "text",
        value: "Alternatively, blue light earlier in the day has been linked to an increase in alertness and concentration. Blue light therapy has been used to shift circadian cycles for people with Seasonal Affective Disorder (SAD) and Parkinson’s disease, yielding positive results. It is also reported that post-cataract surgery, people report better sleep. This may be linked to the fact that new lenses from the surgery filter less blue light, allowing for more blue light exposure during the day."
      },
      {
        type: "image",
        url: "/placeholder.webp",
        caption: "Adjusting screen settings to reduce blue light exposure at night."
      },
      {
        type: "heading",
        value: "Do Blue Light Filters Even Work?"
      },
      {
        type: "text",
        value: "The American Academy of Ophthalmology states that “The Academy does not recommend any special blue light-blocking eyewear for computer use” (Viment). Given that the amount of blue light emitted from electronic screens is already small, the light filtered from blue light filters is insignificant. While some users claim that it helps reduce eye strain and fatigue, others disagree. Moreover, research supporting the benefits of blue light filters remains insufficient. Although they would do no harm, choosing to wear blue light filtering products would provide little benefit."
      },
      {
        type: "heading",
        value: "Conclusion"
      },
      {
        type: "text",
        value: "Overall, research cannot definitively defend the claim that blue light is harmful to physical eye health or that blue light glasses can provide substantial benefits. However, to reduce eye strain and improve sleep, practice the 20–20–20 rule and limit blue light exposure at night."
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

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Comments ({article.comments.length})</h3>
              
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
