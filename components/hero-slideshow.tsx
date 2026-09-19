"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const heroImages = [
  "/WhatsApp Image 2026-04-24 at 9.11.04 PM (1).jpeg",
  "/WhatsApp Image 2026-09-19 at 11.43.57 PM.jpeg",
  "/WhatsApp Image 2026-09-19 at 11.37.47 PM.jpeg",
]

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)

    return () => mediaQuery.removeEventListener("change", updateMotionPreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [reducedMotion])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <div
        className="flex h-full"
        style={{
          transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
          transition: reducedMotion
            ? "none"
            : "transform 1600ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {heroImages.map((image, index) => (
          <div key={image} className="relative h-full min-w-full">
            <Image
              src={image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-black/35" />
    </div>
  )
}